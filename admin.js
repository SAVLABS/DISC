/* ==========================================================================
   Evaluación DISC — Lógica de administración
   --------------------------------------------------------------------------
   El PIN, la sesión y el estado de la evaluación viven en el servidor
   (Google Apps Script). Este archivo solo llama a esas acciones.
   ========================================================================== */

(function () {
  "use strict";

  const SESSION_KEY = "disc_admin_token"; // token de sesión devuelto por el servidor

  const $ = (sel) => document.querySelector(sel);

  /* ======================================================================
     CAPA DE DATOS — PUNTOS DE INTEGRACIÓN CON GOOGLE APPS SCRIPT
     ====================================================================== */

  const AdminService = {
    /** Valida el PIN en el servidor y devuelve un token de sesión. */
    async authenticateAdmin(pin) {
      return discApi({ action: "login", pin });
    },

    /** Estado actual de la evaluación. */
    async getAssessmentStatus() {
      const data = await discApi({ action: "status" });
      if (!data.ok) throw new Error(data.error);
      return { active: data.active };
    },

    /** Activa o desactiva la evaluación (requiere sesión válida). */
    async updateAssessmentStatus(active) {
      const token = sessionStorage.getItem(SESSION_KEY);
      return discApi({ action: "setStatus", token, active });
    },

    /** Cierra la sesión en este navegador. */
    logout() {
      sessionStorage.removeItem(SESSION_KEY);
      return Promise.resolve({ ok: true });
    },
  };

  /* ======================================================================
     UTILIDADES
     ====================================================================== */

  let toastTimer = null;
  function showToast(message) {
    const el = $("#adminToast");
    el.textContent = message;
    el.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { el.hidden = true; }, 3800);
  }

  /* ======================================================================
     VISTAS: LOGIN / PANEL
     ====================================================================== */

  function showLogin() {
    $("#viewPanel").hidden = true;
    $("#viewLogin").hidden = false;
    $("#pin").value = "";
    clearPinError();
    $("#pin").focus();
  }

  function showPanel() {
    $("#viewLogin").hidden = true;
    $("#viewPanel").hidden = false;
    renderQr();
    refreshStatus();
  }

  function clearPinError() {
    const input = $("#pin");
    const error = $("#pinError");
    input.classList.remove("is-invalid");
    input.removeAttribute("aria-invalid");
    error.hidden = true;
    error.textContent = "";
  }

  function setPinError(message) {
    const input = $("#pin");
    const error = $("#pinError");
    input.classList.add("is-invalid");
    input.setAttribute("aria-invalid", "true");
    error.textContent = message;
    error.hidden = false;
  }

  /* ======================================================================
     ESTADO DE LA EVALUACIÓN EN EL PANEL
     ====================================================================== */

  async function refreshStatus() {
    let status;
    try {
      status = await AdminService.getAssessmentStatus();
    } catch (e) {
      console.error("Error al consultar el estado:", e);
      status = { active: false };
    }
    renderStatus(status.active, { animate: false });
  }

  function renderStatus(active, { animate = false } = {}) {
    const pill = $("#statusPill");
    const pillText = $("#statusPillText");
    const stateLabel = $("#stateLabel");
    const toggle = $("#activeToggle");
    const switchText = $("#switchText");

    pill.classList.toggle("is-active", active);
    pill.classList.toggle("is-inactive", !active);
    pillText.textContent = active ? "Evaluación activa" : "Evaluación desactivada";

    stateLabel.textContent = active ? "Evaluación activa" : "Evaluación desactivada";
    stateLabel.classList.toggle("is-active", active);
    stateLabel.classList.toggle("is-inactive", !active);

    toggle.checked = active;
    toggle.setAttribute("aria-checked", String(active));
    switchText.textContent = active ? "Desactivar" : "Activar";

    if (animate) {
      const card = document.querySelector(".admin-card--wide");
      card.classList.remove("admin-card--flash");
      // Reiniciar animación
      void card.offsetWidth;
      card.classList.add("admin-card--flash");
    }
  }

  async function toggleStatus() {
    const toggle = $("#activeToggle");
    const next = toggle.checked; // el estado del checkbox ya refleja el nuevo valor

    const btnLabel = $("#switchText");
    btnLabel.textContent = "Aplicando…";
    toggle.disabled = true;

    try {
      const res = await AdminService.updateAssessmentStatus(next);
      if (!res.ok) throw new Error("Respuesta no válida");

      renderStatus(next, { animate: true });
      showToast(
        next
          ? "Evaluación activada. Los participantes ya pueden iniciarla."
          : "Evaluación desactivada. El formulario queda cerrado."
      );
    } catch (e) {
      console.error("Error al actualizar el estado:", e);
      // Revertir el interruptor al estado anterior.
      toggle.checked = !next;
      renderStatus(!next);
      showToast("No se pudo cambiar el estado. Inténtalo de nuevo.");
    } finally {
      toggle.disabled = false;
    }
  }

  /* ======================================================================
     CÓDIGO QR
     ====================================================================== */

  /** Dibuja el QR del enlace de la página de participantes (raíz del sitio). */
  function renderQr() {
    const url = new URL("/", window.location.href).href;
    const qr = qrcode(0, "M");
    qr.addData(url);
    qr.make();

    const count = qr.getModuleCount();
    const cell = 10;
    const margin = 4;
    const size = (count + margin * 2) * cell;
    const canvas = $("#qrCanvas");
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, size, size);
    ctx.fillStyle = "#202020";
    for (let r = 0; r < count; r++) {
      for (let c = 0; c < count; c++) {
        if (qr.isDark(r, c)) {
          ctx.fillRect((c + margin) * cell, (r + margin) * cell, cell, cell);
        }
      }
    }
    $("#qrUrl").textContent = url;
  }

  function qrBlob() {
    return new Promise((resolve, reject) => {
      $("#qrCanvas").toBlob((blob) => (blob ? resolve(blob) : reject(new Error("sin imagen"))), "image/png");
    });
  }

  async function copyQrPng() {
    try {
      // La promesa se crea dentro del clic para conservar el permiso del navegador.
      await navigator.clipboard.write([new ClipboardItem({ "image/png": qrBlob() })]);
      showToast("QR copiado. Ya puedes pegarlo como imagen.");
    } catch (e) {
      console.error("No se pudo copiar el QR:", e);
      showToast("Tu navegador no permite copiar la imagen. Usa Descargar PNG.");
    }
  }

  async function downloadQrPng() {
    const blob = await qrBlob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "qr-evaluacion-disc.png";
    link.click();
    URL.revokeObjectURL(link.href);
  }

  /* ======================================================================
     EVENTOS
     ====================================================================== */

  function bindEvents() {
    // Acceso
    $("#loginForm").addEventListener("submit", async (e) => {
      e.preventDefault();
      const pin = $("#pin").value.trim();

      if (!pin) {
        setPinError("Introduce el PIN de acceso.");
        return;
      }
      clearPinError();

      const btn = $("#btnLogin");
      btn.disabled = true;
      btn.textContent = "Verificando…";

      try {
        const res = await AdminService.authenticateAdmin(pin);
        if (!res.ok) {
          setPinError("El PIN introducido no es correcto.");
          $("#pin").select();
          return;
        }
        sessionStorage.setItem(SESSION_KEY, res.token);
        showPanel();
      } catch (err) {
        console.error("Error de autenticación:", err);
        setPinError("No se pudo verificar el PIN. Inténtalo de nuevo.");
      } finally {
        btn.disabled = false;
        btn.textContent = "Ingresar";
      }
    });

    // Limpiar error al escribir
    $("#pin").addEventListener("input", clearPinError);

    // Interruptor de disponibilidad
    $("#activeToggle").addEventListener("change", toggleStatus);

    // Código QR
    $("#btnCopyQr").addEventListener("click", copyQrPng);
    $("#btnDownloadQr").addEventListener("click", downloadQrPng);

    // Cerrar sesión
    $("#btnLogout").addEventListener("click", async () => {
      await AdminService.logout();
      showLogin();
    });
  }

  /* ======================================================================
     INICIALIZACIÓN
     ====================================================================== */

  function init() {
    bindEvents();
    // Si ya hay una sesión simulada en esta pestaña, ir directo al panel.
    if (sessionStorage.getItem(SESSION_KEY)) {
      showPanel();
    } else {
      showLogin();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
