/* ==========================================================================
   Evaluación DISC — Backend (Google Apps Script)
   --------------------------------------------------------------------------
   Pegar en: hoja de cálculo > Extensiones > Apps Script.
   Hoja de datos: "Respuestas" (se crea sola si no existe).

   Funciones:
   - setup()          → ejecutar UNA vez. Crea la hoja y el PIN inicial (1234).
   - doPost(e)        → atiende las peticiones de la página:
       status, login, setStatus, submit.
   - El PIN y el estado (activa / cerrada) viven aquí, no en el navegador.

   Despliegue: Implementar > Nueva implementación > Aplicación web
     Ejecutar como: Yo · Quién tiene acceso: Cualquier persona
   ========================================================================== */

const SHEET_NAME = "Respuestas";
const SESSION_HOURS = 6;

/**
 * Letra DISC de cada característica del cuestionario.
 * Cada grupo: 4 características de la columna izquierda y 4 de la derecha.
 * Mismo orden que el cuestionario de la página.
 */
const DISC_LETTERS = [
  ["I", "D", "C", "S", "D", "S", "I", "C"],
  ["C", "I", "S", "D", "I", "D", "C", "S"],
  ["S", "I", "D", "C", "C", "I", "S", "D"],
  ["D", "C", "S", "I", "I", "S", "D", "C"],
  ["S", "C", "I", "D", "D", "I", "C", "S"],
];

const HEADERS = [
  "Fecha de envío", "Nombre", "Correo", "Puesto", "Empresa",
  "D", "I", "S", "C", "Perfil(es) predominante(s)", "Respuestas (JSON)", "Enviado (ISO)",
];

/* ======================================================================
   PUNTO DE ENTRADA
   ====================================================================== */

function doGet() {
  return json_({ ok: true, service: "DISC" });
}

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    switch (body.action) {
      case "status":
        return json_({ ok: true, active: isActive_() });
      case "login":
        return json_(login_(body.pin));
      case "setStatus":
        requireSession_(body.token);
        setActive_(body.active === true);
        return json_({ ok: true, active: isActive_() });
      case "submit":
        return json_(submit_(body.payload));
      default:
        return json_({ ok: false, error: "Acción no válida." });
    }
  } catch (err) {
    return json_({ ok: false, error: String(err.message || err) });
  }
}

/* ======================================================================
   ADMINISTRACIÓN
   ====================================================================== */

function login_(pin) {
  const expected = PropertiesService.getScriptProperties().getProperty("ADMIN_PIN");
  if (!expected || String(pin) !== expected) {
    return { ok: false, error: "El PIN introducido no es correcto." };
  }
  const token = Utilities.getUuid();
  CacheService.getScriptCache().put("session:" + token, "1", SESSION_HOURS * 3600);
  return { ok: true, token: token };
}

function requireSession_(token) {
  const valid = token && CacheService.getScriptCache().get("session:" + token);
  if (!valid) throw new Error("Sesión no válida. Vuelve a ingresar el PIN.");
}

function isActive_() {
  return PropertiesService.getScriptProperties().getProperty("ACTIVE") !== "0";
}

function setActive_(active) {
  PropertiesService.getScriptProperties().setProperty("ACTIVE", active ? "1" : "0");
}

/* ======================================================================
   ENVÍO Y CÁLCULO
   ====================================================================== */

function submit_(payload) {
  if (!isActive_()) {
    return { ok: false, closed: true, error: "La evaluación está cerrada." };
  }

  const participant = (payload && payload.participant) || {};
  const answers = (payload && payload.answers) || {};
  const fullName = String(participant.fullName || "").trim();
  if (!fullName) {
    return { ok: false, error: "Falta el nombre del participante." };
  }

  const result = computeResult_(answers);
  if (!result.ok) return result;

  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const sheet = getSheet_();
    sheet.appendRow([
      new Date(),
      fullName,
      participant.email || "",
      participant.position || "",
      participant.company || "",
      result.scores.D,
      result.scores.I,
      result.scores.S,
      result.scores.C,
      result.predominants.join(" / "),
      JSON.stringify(answers),
      payload.submittedAt || "",
    ]);
    const id = sheet.getLastRow();
    return { ok: true, id: String(id), result: result };
  } finally {
    lock.releaseLock();
  }
}

/**
 * Suma la valoración de cada característica por letra DISC.
 * Cada columna de 4 debe tener los valores 1, 2, 3 y 4 sin repetir.
 * Cada letra puede sumar hasta 40; las cuatro suman 100.
 */
function computeResult_(answers) {
  const totals = { D: 0, I: 0, S: 0, C: 0 };

  for (let g = 0; g < DISC_LETTERS.length; g++) {
    const scores = (answers[g + 1] && answers[g + 1].scores) || [];
    if (scores.length !== 8) {
      return { ok: false, error: "Faltan respuestas en el grupo " + (g + 1) + "." };
    }
    for (let col = 0; col < 2; col++) {
      const column = scores.slice(col * 4, col * 4 + 4).slice().sort();
      if (column.join(",") !== "1,2,3,4") {
        return { ok: false, error: "Valores no válidos en el grupo " + (g + 1) + "." };
      }
    }
    for (let i = 0; i < 8; i++) {
      totals[DISC_LETTERS[g][i]] += scores[i];
    }
  }

  const max = Math.max(totals.D, totals.I, totals.S, totals.C);
  const predominants = ["D", "I", "S", "C"].filter((k) => totals[k] === max);
  return { ok: true, scores: totals, predominants: predominants };
}

/* ======================================================================
   HOJA DE CÁLCULO
   ====================================================================== */

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/* ======================================================================
   CONFIGURACIÓN INICIAL (ejecutar una sola vez desde el editor)
   ====================================================================== */

function setup() {
  const props = PropertiesService.getScriptProperties();
  if (!props.getProperty("ADMIN_PIN")) props.setProperty("ADMIN_PIN", "1234");
  if (!props.getProperty("ACTIVE")) props.setProperty("ACTIVE", "1");
  getSheet_();
}
