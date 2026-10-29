/* ==========================================================================
   Evaluación DISC — Lógica de administración (demostración local)
   --------------------------------------------------------------------------
   IMPORTANTE: todo lo siguiente es una SIMULACIÓN de frontend.
   - El PIN se valida en el navegador (no es seguridad real).
   - El estado se guarda en localStorage y solo afecta a este origen.
   En producción: validación de PIN, autorización y estado en el servidor
   mediante Google Apps Script.
   ========================================================================== */

(function () {
  "use strict";

  const STORAGE_KEY = "disc_assessment_active"; // misma clave que app.js
  const SESSION_KEY = "disc_admin_session";     // sesión simulada

  const $ = (sel) => document.querySelector(sel);

  /* ======================================================================
     CAPA DE DATOS — PUNTOS DE INTEGRACIÓN CON GOOGLE APPS SCRIPT
     ====================================================================== */

  const AdminService = {
    /**
     * Valida el PIN de administración.
     * TODO(GAS): sustituir por authenticateAdmin(pin) en el servidor.
     * El PIN real NUNCA debe vivir en el HTML o el JS del frontend.
     */
    authenticateAdmin(pin) {
      // PIN DE PRUEBA — solo para la demostración de interfaz.
      return Promise.resolve({ ok: pin === "1234", demo: true });
    },

    /** TODO(GAS): consultar estado real vía getAssessmentStatus(). */
    getAssessmentStatus() {
      const stored = localStorage.getItem(STORAGE_KEY);
      return Promise.resolve({ active: stored === null ? true : stored === "1" });
    },

    /** TODO(GAS): modificar estado real vía updateAssessmentStatus(active),
     *  con autorización validada en el servidor. */
    updateAssessmentStatus(active) {
      localStorage.setItem(STORAGE_KEY, active ? "1" : "0");
      return Promise.resolve({ ok: true, demo: true });
    },

    /** TODO(GAS): cerrar sesión real invalidando la sesión en el servidor. */
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
        // SIMULACIÓN de sesión (en producción: cookie/token del servidor).
        sessionStorage.setItem(SESSION_KEY, "1");
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
    if (sessionStorage.getItem(SESSION_KEY) === "1") {
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
