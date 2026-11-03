/* ==========================================================================
   Evaluación DISC — Configuración de conexión con el servidor
   --------------------------------------------------------------------------
   Pega aquí la URL de la aplicación web de Google Apps Script
   (Implementar > Nueva implementación > Aplicación web).
   ========================================================================== */

const DISC_API_URL = "PEGA_AQUI_LA_URL_DEL_WEB_APP";

/**
 * Envía una acción al servidor. Se usa text/plain para evitar la
 * comprobación previa (preflight) de CORS que Apps Script no admite.
 */
async function discApi(body) {
  if (DISC_API_URL.startsWith("PEGA_AQUI")) {
    throw new Error("Falta configurar DISC_API_URL en config.js.");
  }
  const res = await fetch(DISC_API_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error("Error de red: " + res.status);
  return res.json();
}
