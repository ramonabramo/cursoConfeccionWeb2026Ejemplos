/**
 * ============================================================================
 * EJERCICIO 18 - EJEMPLO MANUAL 05: INSPECCIÓN DE OBJETOS Y JSON
 * ============================================================================
 * Curso: Confección y Publicación de Páginas Web
 * Profesor: Ramón Abramo
 *
 * CONCEPTOS CLAVE TRATADOS:
 * 1. Inspección de propiedades con métodos de Object:
 *    - `Object.keys(obj)`: devuelve array con los nombres de las propiedades.
 *    - `Object.values(obj)`: devuelve array con los valores correspondientes.
 *    - `Object.entries(obj)`: devuelve array de tuplas `[clave, valor]`.
 * 2. Serialización a JSON (`JSON.stringify(obj)`):
 *    - Convierte el objeto literal de JS en un string de texto formateado.
 *    - Imprescindible para enviar datos a servidores o guardar en `localStorage`.
 * 3. Reconstrucción con `JSON.parse(textoJSON)`:
 *    - Transforma un texto JSON válido nuevamente en un objeto JS vivo.
 * ============================================================================
 */

// 1. OBJETO BASE DE CONFIGURACIÓN
let configuracion = {
  tema: "oscuro",
  idioma: "es",
  notificaciones: true,
  volumen: 80
};

// 2. REFERENCIAS AL DOM
const selTema = document.getElementById("selTema");
const selIdioma = document.getElementById("selIdioma");
const chkNotificaciones = document.getElementById("chkNotificaciones");
const inpVolumen = document.getElementById("inpVolumen");
const txtVolumen = document.getElementById("txtVolumen");

const preObjetoVivo = document.getElementById("preObjetoVivo");
const cajaKeys = document.getElementById("cajaKeys");
const cajaValues = document.getElementById("cajaValues");
const cajaStringify = document.getElementById("cajaStringify");
const btnGuardarStorage = document.getElementById("btnGuardarStorage");
const btnCargarStorage = document.getElementById("btnCargarStorage");
const msgStorage = document.getElementById("msgStorage");

/**
 * Función que actualiza la consola de depuración y las vistas de inspección
 */
function actualizarInspeccion() {
  // 1. Mostrar objeto vivo
  preObjetoVivo.textContent = JSON.stringify(configuracion, null, 2);

  // 2. Object.keys()
  const claves = Object.keys(configuracion);
  cajaKeys.innerHTML = "";
  claves.forEach(clave => {
    const span = document.createElement("span");
    span.className = "chip-item clave";
    span.textContent = `"${clave}"`;
    cajaKeys.appendChild(span);
  });

  // 3. Object.values()
  const valores = Object.values(configuracion);
  cajaValues.innerHTML = "";
  valores.forEach(val => {
    const span = document.createElement("span");
    span.className = "chip-item valor";
    span.textContent = typeof val === "string" ? `"${val}"` : String(val);
    cajaValues.appendChild(span);
  });

  // 4. JSON.stringify()
  const textoJSON = JSON.stringify(configuracion);
  cajaStringify.textContent = textoJSON;
}

// 3. LISTENERS DE CONTROLES
selTema.addEventListener("change", () => {
  configuracion.tema = selTema.value;
  actualizarInspeccion();
});

selIdioma.addEventListener("change", () => {
  configuracion.idioma = selIdioma.value;
  actualizarInspeccion();
});

chkNotificaciones.addEventListener("change", () => {
  configuracion.notificaciones = chkNotificaciones.checked;
  actualizarInspeccion();
});

inpVolumen.addEventListener("input", () => {
  const v = parseInt(inpVolumen.value, 10);
  configuracion.volumen = v;
  txtVolumen.textContent = `${v}%`;
  actualizarInspeccion();
});

// Guardar en localStorage usando JSON.stringify
btnGuardarStorage.addEventListener("click", () => {
  try {
    const serializado = JSON.stringify(configuracion);
    localStorage.setItem("curso_config_ej18", serializado);
    msgStorage.className = "msg-status exito";
    msgStorage.textContent = "✅ Guardado correctamente en localStorage como cadena JSON.";
  } catch (e) {
    msgStorage.textContent = "❌ Error al guardar en localStorage.";
  }
});

// Cargar de localStorage usando JSON.parse
btnCargarStorage.addEventListener("click", () => {
  const guardado = localStorage.getItem("curso_config_ej18");
  if (guardado) {
    try {
      // Reconstrucción del objeto vivo a partir de la cadena de texto
      configuracion = JSON.parse(guardado);

      // Sincronizar inputs
      selTema.value = configuracion.tema || "oscuro";
      selIdioma.value = configuracion.idioma || "es";
      chkNotificaciones.checked = Boolean(configuracion.notificaciones);
      inpVolumen.value = configuracion.volumen || 80;
      txtVolumen.textContent = `${inpVolumen.value}%`;

      actualizarInspeccion();
      msgStorage.className = "msg-status exito";
      msgStorage.textContent = "📂 Objeto reconstruido exitosamente mediante JSON.parse().";
    } catch (e) {
      msgStorage.textContent = "❌ Error al analizar JSON desde localStorage.";
    }
  } else {
    msgStorage.textContent = "⚠️ No hay ninguna configuración guardada previa.";
  }
});

// Inicialización
actualizarInspeccion();
