/* ==========================================================================
   Evaluación DISC — Lógica de frontend (sin backend)
   --------------------------------------------------------------------------
   Este archivo contiene ÚNICAMENTE la interfaz y simulaciones locales.
   Todas las funciones marcadas con "TODO(GAS)" serán sustituidas o
   conectadas a Google Apps Script en la segunda etapa.
   ========================================================================== */

(function () {
  "use strict";

  /* ======================================================================
     1. CONFIGURACIÓN Y DATOS DE DEMOSTRACIÓN
     ====================================================================== */

  /** Identidades DISC. Mantener la correspondencia de color en todo el sitio. */
  const DISC = {
    D: { letter: "D", name: "El Dominante", color: "#DC3838" },
    I: { letter: "I", name: "El Influyente", color: "#EBAA19" },
    S: { letter: "S", name: "El Estable",   color: "#21885A" },
    C: { letter: "C", name: "El Control",   color: "#2879C7" },
  };

  /**
   * CUESTIONARIO DISC (instrumento real).
   * ---------------------------------------------------------------
   * 5 grupos. Cada grupo tiene 8 características en dos columnas de 4
   * (las 4 primeras = columna izquierda, las 4 últimas = derecha). Cada
   * fila del grupo empareja la columna izquierda con la derecha.
   * Dentro de cada columna se asigna 1–4 sin repetir números.
   * Cada grupo suma 20 puntos; los cinco grupos suman 100.
   */
  const QUESTIONNAIRE = {
    isDemo: false,
    instructions:
      "En cada columna asigna del 1 al 4: 4 a la característica que más te describe y 1 a la que menos te describe. No repitas número dentro de la misma columna.",
    groups: [
      { id: 1, options: [
        { word: "Optimista", disc: "I" },
        { word: "Seguridad en mí mismo(a)", disc: "D" },
        { word: "Soy correcto y exacto(a)", disc: "C" },
        { word: "Armonioso(a)", disc: "S" },
        { word: "Orientado a resultados(a)", disc: "D" },
        { word: "Sereno / estable", disc: "S" },
        { word: "Entusiasta", disc: "I" },
        { word: "Disciplinado(a)", disc: "C" },
      ]},
      { id: 2, options: [
        { word: "Considerado(a)", disc: "C" },
        { word: "Persuasivo(a)", disc: "I" },
        { word: "Abierto a escuchar", disc: "S" },
        { word: "Atrevido y retador(a)", disc: "D" },
        { word: "Positivo(a)", disc: "I" },
        { word: "Dispuesto a tomar riesgos", disc: "D" },
        { word: "Reservado(a)", disc: "C" },
        { word: "Cooperativo(a)", disc: "S" },
      ]},
      { id: 3, options: [
        { word: "Paciente", disc: "S" },
        { word: "Espontáneo(a)", disc: "I" },
        { word: "Decidido(a)", disc: "D" },
        { word: "Tengo autocontrol", disc: "C" },
        { word: "Crítico(a)", disc: "C" },
        { word: "Impulsivo(a)", disc: "I" },
        { word: "Confiable", disc: "S" },
        { word: "Orientado a alcanzar metas", disc: "D" },
      ]},
      { id: 4, options: [
        { word: "Decidido(a)", disc: "D" },
        { word: "Cuidadoso(a)", disc: "C" },
        { word: "Trabajo en equipo", disc: "S" },
        { word: "Inspirador(a)", disc: "I" },
        { word: "Sociable", disc: "I" },
        { word: "Discreto(a)", disc: "S" },
        { word: "Sin miedo", disc: "D" },
        { word: "Estructurado(a)", disc: "C" },
      ]},
      { id: 5, options: [
        { word: "Confiado(a)", disc: "S" },
        { word: "Analítico(a)", disc: "C" },
        { word: "Popular", disc: "I" },
        { word: "Poderoso(a)", disc: "D" },
        { word: "Persistente", disc: "D" },
        { word: "Persuasivo(a)", disc: "I" },
        { word: "Planificado(a)", disc: "C" },
        { word: "Conciliador(a)", disc: "S" },
      ]},
    ],
  };

  /* ======================================================================
     2. CAPA DE DATOS — PUNTOS DE INTEGRACIÓN CON GOOGLE APPS SCRIPT
     ------------------------------------------------------------------
     Todas las llamadas al futuro backend pasan por estas funciones.
     En producción se sustituirá el cuerpo por `google.script.run.*`
     (o por fetch a un endpoint), sin tocar el resto de la interfaz.
     ====================================================================== */


  const DataService = {
    /** Consulta si la evaluación está activa (el servidor es la fuente de verdad). */
    async getAssessmentStatus() {
      const data = await discApi({ action: "status" });
      if (!data.ok) throw new Error(data.error);
      return { active: data.active };
    },

    /** Envía las respuestas; el servidor valida, calcula el perfil y guarda la fila. */
    submitAssessment(payload) {
      return discApi({ action: "submit", payload });
    },
  };

  /* ======================================================================
     5. NAVEGACIÓN ENTRE PANTALLAS
     ====================================================================== */

  const SCREEN_IDS = {
    home: "screen-home",
    register: "screen-register",
    instructions: "screen-instructions",
    questions: "screen-questions",
    processing: "screen-processing",
    results: "screen-results",
  };

  const NAV_LABELS = {
    register: "Paso 1 de 4 · Datos",
    instructions: "Paso 2 de 4 · Instrucciones",
    questions: "Paso 3 de 4 · Evaluación",
    results: "Resultado",
  };

  function goTo(name) {
    if (!SCREEN_IDS[name]) return;
    state.screen = name;

    $$(".screen").forEach((s) => {
      s.classList.remove("is-active");
      s.hidden = true;
    });

    const target = document.getElementById(SCREEN_IDS[name]);
    target.hidden = false;
    target.classList.add("is-active");

    const navStep = $("#navStep");
    if (NAV_LABELS[name]) {
      navStep.textContent = NAV_LABELS[name];
      navStep.hidden = false;
    } else {
      navStep.hidden = true;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });

    // Enfocar el primer control útil para navegación por teclado.
    requestAnimationFrame(() => {
      const focusable = target.querySelector(
        "input, button.btn--primary, [tabindex]:not([tabindex='-1'])"
      );
      if (focusable && name !== "home") focusable.focus({ preventScroll: true });
    });
  }

  /* ======================================================================
     6. DISPONIBILIDAD DE LA EVALUACIÓN
     ====================================================================== */

  async function refreshAssessmentStatus() {
    try {
      const status = await DataService.getAssessmentStatus();
      state.assessmentActive = status.active;
    } catch (e) {
      // Ante un fallo de consulta, se asume cerrada por seguridad.
      state.assessmentActive = false;
      console.warn("No se pudo consultar el estado de la evaluación:", e);
    }
    renderAvailability();
  }

  function renderAvailability() {
    const banner = $("#closedBanner");
    const btn = $("#btnStart");
    const note = $("#homeNote");

    if (state.assessmentActive) {
      banner.hidden = true;
      btn.disabled = false;
      note.textContent = "Tu respuesta es personal y confidencial.";
    } else {
      banner.hidden = false;
      btn.disabled = true;
      note.textContent = "La evaluación está cerrada en este momento.";
    }
  }

  /* ======================================================================
     7. PANTALLA 2 — DATOS DEL PARTICIPANTE
     ====================================================================== */

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  function setFieldError(inputId, message) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(inputId + "Error");
    if (message) {
      input.classList.add("is-invalid");
      input.setAttribute("aria-invalid", "true");
      error.textContent = message;
      error.hidden = false;
    } else {
      input.classList.remove("is-invalid");
      input.removeAttribute("aria-invalid");
      error.textContent = "";
      error.hidden = true;
    }
  }

  function readParticipantForm() {
    return {
      fullName: $("#fullName").value.trim(),
      email: $("#email").value.trim(),
      position: $("#position").value.trim(),
      company: $("#company").value.trim(),
    };
  }

  function validateParticipantForm() {
    const data = readParticipantForm();
    let valid = true;

    // Nombre obligatorio: al menos nombre y apellido, sin ser solo espacios.
    if (!data.fullName) {
      setFieldError("fullName", "Por favor, escribe tu nombre completo.");
      valid = false;
    } else if (!/\s\S/.test(data.fullName) || data.fullName.replace(/\s+/g, " ").split(" ").filter(Boolean).length < 2) {
      setFieldError("fullName", "Escribe tu nombre y al menos un apellido.");
      valid = false;
    } else {
      setFieldError("fullName", null);
    }

    // Correo: validado solo si se introdujo.
    if (data.email && !EMAIL_RE.test(data.email)) {
      setFieldError("email", "El formato del correo no parece válido.");
      valid = false;
    } else {
      setFieldError("email", null);
    }

    if (!valid) {
      const firstInvalid = $(".input.is-invalid");
      if (firstInvalid) firstInvalid.focus();
    }

    return valid ? data : null;
  }

  function restoreParticipantForm() {
    // Conserva los datos si el usuario retrocede o falla la validación.
    $("#fullName").value = state.participant.fullName || "";
    $("#email").value = state.participant.email || "";
    $("#position").value = state.participant.position || "";
    $("#company").value = state.participant.company || "";
  }

  /* ======================================================================
     8. PANTALLA 4 — CUESTIONARIO
     ====================================================================== */

  function groupState(groupId) {
    if (!state.answers[groupId]) {
      const group = questionnaire.groups.find((g) => g.id === groupId);
      state.answers[groupId] = { scores: group.options.map(() => null) };
    }
    return state.answers[groupId];
  }

  function answeredGroupCount() {
    return questionnaire.groups.filter((g) => {
      const a = state.answers[g.id];
      return a && a.scores.every((s) => s !== null);
    }).length;
  }

  /** Cada grupo se responde en dos pantallas: una por columna de 4. */
  function totalPages() {
    return questionnaire.groups.length * 2;
  }

  function currentPage() {
    return state.currentGroup * 2 + state.currentColumn;
  }

  function isLastPage() {
    return currentPage() === totalPages() - 1;
  }

  function updateProgress() {
    const total = totalPages();
    // El progreso refleja la pantalla actual sobre el total.
    const pct = Math.round((currentPage() / total) * 100);
    const bar = $("#quizProgressBar");
    const progress = $("#quizProgress");
    bar.style.width = pct + "%";
    progress.setAttribute("aria-valuenow", String(pct));
  }

  /** Una característica: palabra, letra DISC y cuadro para el número. */
  function optionCellHtml(group, idx, value) {
    const opt = group.options[idx];
    const classes = ["option"];
    if (value !== null) classes.push("is-rated");
    if (value === 4) classes.push("is-most");
    else if (value === 1) classes.push("is-least");
    return `
      <div class="${classes.join(" ")}">
        <span class="option__word">${opt.word}</span>
        <button type="button" class="scale__btn" data-index="${idx}"
          aria-label="${opt.word}. ${value === null ? "sin valor" : "valor " + value}. Activar para asignar o quitar.">
          ${value === null ? "" : value}
        </button>
      </div>`;
  }

  /** Muestra solo la columna actual (4 características). */
  function renderGroup() {
    const group = questionnaire.groups[state.currentGroup];
    const list = $("#optionList");
    const ans = groupState(group.id);
    const half = group.options.length / 2;
    const start = state.currentColumn * half;

    list.innerHTML = "";
    for (let row = start; row < start + half; row++) {
      const li = document.createElement("li");
      li.className = "option-row option-row--single";
      li.innerHTML = optionCellHtml(group, row, ans.scores[row]);
      list.appendChild(li);
    }

    list.querySelectorAll(".scale__btn").forEach((btn) => {
      btn.addEventListener("click", () =>
        handleBoxClick(group.id, Number(btn.dataset.index))
      );
    });

    // Botones de navegación
    $("#btnPrevGroup").textContent =
      state.currentGroup === 0 ? "← Anterior" : "← Anterior";
    $("#btnNextGroup").innerHTML =
      isLastPage()
        ? 'Completar evaluación <span class="btn__arrow" aria-hidden="true">→</span>'
        : 'Siguiente <span class="btn__arrow" aria-hidden="true">→</span>';

    hideQuizMessage();
    updateProgress();
  }

  /**
   * Cada cuadro asigna el siguiente número libre de su columna (4, 3, 2, 1),
   * según el orden en que se toca. Tocar un cuadro con número lo libera y
   * renumera los posteriores de esa columna.
   */
  function handleBoxClick(groupId, optionIndex) {
    const scores = groupState(groupId).scores;
    const half = scores.length / 2;
    const start = optionIndex < half ? 0 : half;
    const inColumn = (i) => i >= start && i < start + half;
    const current = scores[optionIndex];

    if (current === null) {
      const used = scores.filter((s, i) => inColumn(i) && s !== null).length;
      scores[optionIndex] = 4 - used;
    } else {
      scores[optionIndex] = null;
      scores.forEach((s, i) => {
        if (inColumn(i) && s !== null && s < current) scores[i] = s + 1;
      });
    }

    renderGroup();
  }

  function hideQuizMessage() {
    const msg = $("#quizMessage");
    msg.hidden = true;
    msg.textContent = "";
  }

  function showQuizMessage(text) {
    const msg = $("#quizMessage");
    msg.textContent = text;
    msg.hidden = false;
  }

  function validateCurrentGroup() {
    const group = questionnaire.groups[state.currentGroup];
    const ans = groupState(group.id);
    const half = group.options.length / 2;
    const start = state.currentColumn * half;
    const column = ans.scores.slice(start, start + half);
    if (column.some((s) => s === null)) {
      showQuizMessage(
        "Asigna un valor del 1 al 4 a cada característica de esta columna antes de continuar."
      );
      return false;
    }
    hideQuizMessage();
    return true;
  }

  async function nextGroup() {
    if (!validateCurrentGroup()) return;

    // Verificar disponibilidad antes del último avance (envío).
    if (isLastPage()) {
      await refreshAssessmentStatus();
      if (!state.assessmentActive) {
        showToast("La evaluación fue cerrada. No es posible enviar las respuestas.");
        goTo("home");
        return;
      }
      await submitAssessment();
      return;
    }

    if (state.currentColumn === 0) {
      state.currentColumn = 1;
    } else {
      state.currentGroup += 1;
      state.currentColumn = 0;
    }
    renderGroup();
  }

  function prevGroup() {
    if (state.currentColumn === 1) {
      state.currentColumn = 0;
    } else if (state.currentGroup === 0) {
      goTo("instructions");
      return;
    } else {
      state.currentGroup -= 1;
      state.currentColumn = 1;
    }
    renderGroup();
  }

  /* ======================================================================
     9. PANTALLA 5 — ENVÍO Y PROCESAMIENTO (SIMULADO)
     ====================================================================== */

  async function submitAssessment() {
    if (state.isSubmitting) return; // Evita envío duplicado por doble clic.
    state.isSubmitting = true;

    const btnNext = $("#btnNextGroup");
    btnNext.disabled = true;

    goTo("processing");
    $("#sendError").hidden = true;
    $("#processingSub").hidden = false;
    $(".loader").hidden = false;

    const payload = {
      participant: { ...state.participant },
      answers: JSON.parse(JSON.stringify(state.answers)),
      questionnaireId: "real",
      submittedAt: new Date().toISOString(),
    };

    try {
      const res = await DataService.submitAssessment(payload);
      if (res.closed) {
        showToast(res.error);
        goTo("home");
        return;
      }
      if (!res.ok) throw new Error(res.error || "Respuesta no válida del servidor");

      state.result = res.result;
      state.completedAt = new Date();
      renderResults();
      goTo("results");
    } catch (err) {
      console.error("Error al enviar la evaluación:", err);
      $("#processingSub").hidden = true;
      $(".loader").hidden = true;
      $("#sendError").hidden = false;
    } finally {
      state.isSubmitting = false;
      btnNext.disabled = false;
    }
  }

  /* ======================================================================
     10. PANTALLA 6 — RESULTADOS Y REPORTE
     ====================================================================== */

  function renderResults() {
    const result = state.result;
    const letters = result.predominants;
    const multiple = letters.length > 1;

    // Tarjeta principal: una bolita por perfil predominante (empate incluido).
    $("#resultLetter").innerHTML = letters
      .map((k) => `<span class="results-hero__badge" style="background:${DISC[k].color}">${k}</span>`)
      .join("");
    $("#resultsTitle").textContent = multiple
      ? "Tus perfiles predominantes son:"
      : "Tu perfil predominante es:";
    $("#resultName").textContent = letters.map((k) => DISC[k].name).join(" y ");
    $("#resultDesc").innerHTML = letters
      .map((k) => {
        const text = DISC_REPORTS[k].sections[0].blocks[0].p;
        return multiple ? `<strong>${DISC[k].name}:</strong> ${text}` : text;
      })
      .join("<br><br>");
    $("#resultsHero").style.borderLeftColor = DISC[letters[0]].color;
    renderDownloadButtons(letters);

    const name = state.participant.fullName || "Participante";
    $("#resultParticipant").textContent = name;
    $("#resultDate").textContent = state.completedAt
      ? formatDate(state.completedAt)
      : "—";

    // Gráfico de araña y afinidad entre perfiles.
    $("#scoreRadar").innerHTML = renderDiscRadarSvg(result.scores);
    $("#affinityContent").innerHTML = result.predominants.map(renderDiscAffinityHtml).join("");

    // Barras de puntuación calculadas a partir de las respuestas.
    const bars = $("#scoreBars");
    bars.innerHTML = "";
    Object.keys(DISC).forEach((key) => {
      const value = result.scores[key] ?? 0;
      const metaK = DISC[key];
      const li = document.createElement("li");
      li.className = "score-bar";
      li.innerHTML = `
        <div class="score-bar__head">
          <span class="score-bar__label">
            <span class="score-bar__letter score-bar__letter--${key.toLowerCase()}" aria-hidden="true">${key}</span>
            ${metaK.name.replace(/^El /, "")}
          </span>
          <span class="score-bar__value">${value}%</span>
        </div>
        <div class="score-bar__track" role="img" aria-label="${metaK.name}: ${value} por ciento">
          <div class="score-bar__fill score-bar__fill--${key.toLowerCase()}" data-value="${value}"></div>
        </div>
      `;
      bars.appendChild(li);
    });

    // Animar barras tras pintar.
    requestAnimationFrame(() => {
      $$(".score-bar__fill", bars).forEach((fill) => {
        fill.style.width = fill.dataset.value + "%";
      });
    });
  }

  /** Encabezado común (nombre, fecha y perfil) para la vista previa y el PDF. */
  function reportHeaderHtml(letters, name, date) {
    const label = letters
      .map((k) => `<span style="color:${DISC[k].color};font-weight:700">${k} — ${DISC[k].name}</span>`)
      .join(" y ");
    return `
      <div class="report-meta">
        <span><strong>Participante:</strong> ${name}</span>
        <span><strong>Fecha:</strong> ${date}</span>
        <span><strong>Perfil${letters.length > 1 ? "es" : ""} predominante${letters.length > 1 ? "s" : ""}:</strong> ${label}</span>
      </div>`;
  }

  /** Informe con uno o varios perfiles (varios si hay empate). */
  function reportContentHtml(result, letters = result.predominants) {
    const name = state.participant.fullName || "Participante";
    const date = formatDate(state.completedAt || new Date());
    const profiles = letters
      .map((k) => `
        <div class="report-profile">
          <h3 class="report-title">Reporte de perfil DISC · ${DISC_REPORTS[k].title}</h3>
          ${renderDiscReportHtml(DISC_REPORTS[k])}
        </div>`)
      .join("");
    return {
      name,
      date,
      html: `${reportHeaderHtml(letters, name, date)}
        <section class="report-section"><h4>Mapa de dimensiones</h4>${renderDiscRadarSvg(result.scores)}</section>
        <section class="report-section"><h4>Afinidad con otros perfiles</h4>${letters.map(renderDiscAffinityHtml).join("")}</section>
        ${profiles}`,
    };
  }

  /** Un botón por perfil; si hay empate, además el informe con ambos. */
  function renderDownloadButtons(letters) {
    const container = $("#downloadButtons");
    const multiple = letters.length > 1;
    const actions = letters.map((k) => ({
      label: multiple ? `Descargar PDF · ${DISC[k].name}` : "Descargar PDF",
      run: () => downloadReportPdf([k]),
    }));
    if (multiple) {
      actions.push({
        label: "Descargar informe con ambos perfiles",
        run: () => downloadReportPdf(letters),
      });
    }

    container.innerHTML = "";
    actions.forEach((action) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "btn btn--outline";
      btn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true" class="btn__icon">
          <path d="M12 4.4v10.4M7.6 10.8L12 15.2l4.4-4.4" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M5 19h14" stroke-linecap="round"/>
        </svg>
        ${action.label}`;
      btn.addEventListener("click", action.run);
      container.appendChild(btn);
    });
  }

  function openReportModal() {
    const result = state.result;
    $("#reportModalBody").innerHTML = reportContentHtml(result).html;

    const modal = $("#reportModal");
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    $(".modal__close", modal).focus();
  }

  /**
   * Descarga: rellena la versión imprimible y abre el diálogo del navegador,
   * donde se elige "Guardar como PDF". El título del documento define el
   * nombre sugerido del archivo.
   */
  function downloadReportPdf(letters = state.result.predominants) {
    const { name, date, html } = reportContentHtml(state.result, letters);
    const printEl = $("#printReport");
    printEl.innerHTML = html;

    const previousTitle = document.title;
    document.title = `Reporte DISC - ${name} - ${date}`;
    window.addEventListener(
      "afterprint",
      () => { document.title = previousTitle; },
      { once: true }
    );
    window.print();
  }

  function closeReportModal() {
    $("#reportModal").hidden = true;
    document.body.style.overflow = "";
    $("#btnViewReport").focus();
  }

  /* ======================================================================
     11. EVENTOS
     ====================================================================== */

  function bindEvents() {
    // Inicio
    $("#btnStart").addEventListener("click", async () => {
      // Comprueba el estado antes de entrar (y reacciona si se cerró).
      await refreshAssessmentStatus();
      if (!state.assessmentActive) {
        showToast("La evaluación no está disponible en este momento.");
        return;
      }
      restoreParticipantForm();
      goTo("register");
    });

    $("#brandHome").addEventListener("click", (e) => {
      e.preventDefault();
      goTo("home");
      refreshAssessmentStatus();
    });

    // Registro
    $("#participantForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const data = validateParticipantForm();
      if (!data) return;
      state.participant = data;
      goTo("instructions");
    });

    $("#btnBackHome").addEventListener("click", () => goTo("home"));

    // Instrucciones
    $("#btnBackRegister").addEventListener("click", () => {
      restoreParticipantForm();
      goTo("register");
    });

    $("#btnStartQuestions").addEventListener("click", async () => {
      await refreshAssessmentStatus();
      if (!state.assessmentActive) {
        showToast("La evaluación fue cerrada. No es posible iniciarla.");
        goTo("home");
        return;
      }
      state.currentGroup = 0;
      state.currentColumn = 0;
      renderGroup();
      goTo("questions");
    });

    // Cuestionario
    $("#btnNextGroup").addEventListener("click", nextGroup);
    $("#btnPrevGroup").addEventListener("click", prevGroup);

    // Procesamiento
    $("#btnRetry").addEventListener("click", submitAssessment);

    // Resultados
    $("#btnViewReport").addEventListener("click", openReportModal);


    $("#btnRestart").addEventListener("click", () => {
      // Reinicio completo para una nueva demostración.
      state.participant = { fullName: "", email: "", position: "", company: "" };
      state.answers = {};
      state.currentGroup = 0;
      state.currentColumn = 0;
      state.result = null;
      state.completedAt = null;
      restoreParticipantForm();
      goTo("home");
      refreshAssessmentStatus();
    });

    // Modal del reporte
    $$("#reportModal [data-close-modal]").forEach((el) =>
      el.addEventListener("click", closeReportModal)
    );

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !$("#reportModal").hidden) closeReportModal();
    });

    // Limpiar errores de campo al escribir.
    ["fullName", "email"].forEach((id) => {
      document.getElementById(id).addEventListener("input", () => {
        if (document.getElementById(id).classList.contains("is-invalid")) {
          setFieldError(id, null);
        }
      });
    });
  }

  /* ======================================================================
     12. INICIALIZACIÓN
     ====================================================================== */

  function init() {
    bindEvents();
    refreshAssessmentStatus();
    goTo("home");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
