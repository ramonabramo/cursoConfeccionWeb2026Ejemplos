/**
 * ============================================================================
 * EJERCICIO 18 - MANUAL TEMA 02: TIPOS DE VALORES Y NOMBRES DE CLAVE
 * ============================================================================
 * Curso: Confección y Publicación de Páginas Web · Profesor: Ramón Abramo
 * ============================================================================
 */

const salida = document.getElementById("salidaConsola");
function logSalida(...args) {
  console.log(...args);
  salida.textContent += args.map(a => typeof a === "object" ? JSON.stringify(a, null, 2) : String(a)).join(" ") + "\n";
}

// 1. DIVERSIDAD DE TIPOS DE VALORES (Página 6 del manual)
const entidadCompleta = {
  texto: "Hola mundo",
  numero: 42,
  booleano: true,
  nulo: null,
  indefinido: undefined,
  array: [1, 2, 3],
  objetoInterno: { subclave: "valor interno" },
  metodo() { return "Soy una función dentro de un objeto"; }
};

logSalida("=== 1. TIPOS DE VALORES ADMITIDOS ===");
logSalida("Texto:", entidadCompleta.texto);
logSalida("Número:", entidadCompleta.numero);
logSalida("Array:", entidadCompleta.array);
logSalida("Objeto interno:", entidadCompleta.objetoInterno.subclave);

// 2. NOMBRES DE CLAVE Y REGLAS DE COMILLAS (Página 7 del manual)
const clavesEspeciales = {
  identificadorValido: 100,
  "clave con espacios": "Necesita comillas al definirse",
  "clave-con-guiones": "Debe leerse obligatoriamente con corchetes"
};

logSalida("\n=== 2. NOMBRES DE CLAVE Y COMILLAS ===");
logSalida("Clave normal (punto):", clavesEspeciales.identificadorValido);
logSalida("Clave con espacios (corchetes):", clavesEspeciales["clave con espacios"]);
logSalida("Clave con guiones (corchetes):", clavesEspeciales["clave-con-guiones"]);

// 3. CLAVES CALCULADAS (ES6)
const idDinamico = 42;
const prefijo = "campo";

const objetoCalculado = {
  [prefijo + "_" + idDinamico]: "Valor generado dinámicamente"
};

logSalida("\n=== 3. CLAVE CALCULADA CON CORCHETES ===");
logSalida(objetoCalculado);

// Interacción
const inpPrefijo = document.getElementById("inpPrefijo");
const btnGenerar = document.getElementById("btnGenerar");
const resultadoClave = document.getElementById("resultadoClave");

btnGenerar.addEventListener("click", () => {
  const p = inpPrefijo.value.trim() || "clave";
  const timestamp = Date.now();
  const obj = {
    [`${p}_${timestamp}`]: "Dato generado a las " + new Date().toLocaleTimeString()
  };
  resultadoClave.innerHTML = `<code>${JSON.stringify(obj)}</code>`;
  logSalida("Nueva clave calculada generada:", obj);
});
