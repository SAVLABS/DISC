# Evaluación DISC — Frontend (prototipo)

Interfaz web para aplicar una evaluación de comportamiento DISC. Esta primera
etapa incluye **solo frontend**: HTML, CSS y JavaScript nativos, sin backend.

## Cómo abrir y probar

Opción 1 — abrir directamente:

```
Abre index.html en tu navegador (doble clic).
La página de administración es admin.html.
```

Opción 2 — servidor local (recomendado):

```bash
python3 -m http.server 8000
# Participantes:  http://localhost:8000/index.html
# Administración: http://localhost:8000/admin.html
```

### Recorrido de prueba

1. **Inicio** → "Comenzar evaluación".
2. **Datos** → escribe un nombre (obligatorio; correo/puesto/empresa opcionales) → "Siguiente".
3. **Instrucciones** → "Comenzar evaluación".
4. **Cuestionario (demo)** → en cada grupo, asigna a cada característica un
   valor de **1 a 4** (4 = *más me representa*, verde; 1 = *menos me
   representa*, rojo). Cada número se usa una sola vez por grupo: si eliges un
   número que ya tiene otra característica, ambas intercambian valores. Debes
   completar los cuatro grupos para avanzar. El botón final es "Completar
   evaluación".
5. **Confirmación** → pantalla de proceso simulado (~2,4 s).
6. **Resultados** → perfil y puntuaciones ficticios claramente etiquetados,
   vista previa del reporte y aviso sobre la descarga PDF pendiente.

### Administración

- PIN de prueba: `1234` (simulado en el navegador; **no es seguridad real**).
- El interruptor activa/desactiva la evaluación. El estado se comparte con
  `index.html` mediante `localStorage` (mismo origen) y sobrevive a recargas.
- Al desactivar, la página pública muestra el aviso "la evaluación no está
  disponible" y bloquea el botón de inicio.

## Archivos

| Archivo | Contenido |
|---|---|
| `index.html` | Aplicación de participante (6 pantallas en SPA) |
| `styles.css` | Estilos globales, responsive y accesibilidad |
| `app.js` | Navegación, validaciones, cuestionario demo, resultados |
| `admin.html` / `admin.css` / `admin.js` | Panel de administración independiente |
| `assets/hero.svg` | Composición visual local de la pantalla de inicio |

## Qué está simulado (pendiente de Google Apps Script)

Todas las funciones de la capa `DataService` (app.js) y `AdminService`
(admin.js) están marcadas con `TODO(GAS)`:

- `getAssessmentStatus` / `updateAssessmentStatus` — hoy usan `localStorage`.
- `saveParticipantData` / `submitAssessment` / `getAssessmentResult` — simulan
  respuestas; no se envía nada a ningún servidor.
- `authenticateAdmin` — valida el PIN `1234` en el navegador.
- El cuestionario y los resultados son **datos de demostración ficticios**;
  no se ha inventado ninguna fórmula de puntuación DISC.
- El botón "Descargar PDF" muestra un aviso; no genera archivos falsos.

En producción, el backend (Google Apps Script + Google Sheets) será la fuente
de verdad del estado, del PIN, del cálculo DISC y de los informes.
