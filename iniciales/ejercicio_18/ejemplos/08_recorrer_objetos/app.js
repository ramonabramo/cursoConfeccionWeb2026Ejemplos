/**
 * ============================================================================
 * EJERCICIO 18 - MANUAL TEMA 08: RECORRER UN OBJETO (KEYS, VALUES, ENTRIES, FOR...IN)
 * ============================================================================
 * Curso: Confección y Publicación de Páginas Web · Profesor: Ramón Abramo
 * ============================================================================
 */

const salida = document.getElementById("salidaConsola");
const cajaResultado = document.getElementById("cajaResultado");

function logSalida(...args) {
  console.log(...args);
  salida.textContent += args.map(a => typeof a === "object" ? JSON.stringify(a, null, 2) : String(a)).join(" ") + "\n";
}

const curso = {
  codigo: "IFCD0110",
  titulo: "Confección y Publicación Web",
  horas: 560,
  modalidad: "Presencial"
};

logSalida("=== OBJETO CURSO ===");
logSalida(curso);

// 1. Object.keys()
document.getElementById("btnKeys").addEventListener("click", () => {
  const claves = Object.keys(curso);
  cajaResultado.innerHTML = `Claves: <code>${JSON.stringify(claves)}</code>`;
  logSalida("Object.keys(curso):", claves);
});

// 2. Object.values()
document.getElementById("btnValues").addEventListener("click", () => {
  const valores = Object.values(curso);
  cajaResultado.innerHTML = `Valores: <code>${JSON.stringify(valores)}</code>`;
  logSalida("Object.values(curso):", valores);
});

// 3. Object.entries()
document.getElementById("btnEntries").addEventListener("click", () => {
  const entradas = Object.entries(curso);
  cajaResultado.innerHTML = entradas.map(([k, v]) => `• <strong>${k}:</strong> ${v}`).join("<br>");
  logSalida("Object.entries(curso):", entradas);
});

// 4. Bucle for...in
document.getElementById("btnForIn").addEventListener("click", () => {
  let lineas = [];
  logSalida("--- Bucle for (const clave in curso) ---");
  for (const k in curso) {
    lineas.push(`• curso[${k}] = ${curso[k]}`);
    logSalida(`${k}:`, curso[k]);
  }
  cajaResultado.innerHTML = lineas.join("<br>");
});
