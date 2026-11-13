/**
 * ============================================================================
 * EJERCICIO 19 - MANUAL TEMA 01 Y 02: ANATOMÍA Y 3 FORMAS DE CREAR OBJETOS
 * ============================================================================
 * Curso: Confección y Publicación de Páginas Web · Profesor: Ramón Abramo
 * ============================================================================
 */

// Reflejo en consola visual
const salida = document.getElementById("salidaConsola");
function logSalida(...args) {
  console.log(...args);
  salida.textContent += args.map(a => typeof a === "object" ? JSON.stringify(a, null, 2) : String(a)).join(" ") + "\n";
}

// 1. ANATOMÍA BÁSICA (Página 4 del manual)
const coche = {
  marca: "Toyota",
  puertas: 5,
  arrancar() {
    return "En marcha";
  }
};

logSalida("=== 1. ANATOMÍA DEL OBJETO COCHE ===");
logSalida("Marca:", coche.marca);
logSalida("Puertas:", coche.puertas);
logSalida("Acción arrancar():", coche.arrancar());

// 2. TRES FORMAS DE CREAR UN OBJETO LITERAL (Página 5 del manual)
logSalida("\n=== 2. LAS 3 FORMAS DE CREAR OBJETOS ===");

// Forma 1: Directa (la más habitual cuando se conocen los datos)
const usuarioDirecto = {
  nombre: "Ana",
  rol: "Alumna"
};
logSalida("Forma 1 (Directa):", usuarioDirecto);

// Forma 2: Vacío y asignación posterior (útil con formularios)
const usuarioVacio = {};
usuarioVacio.nombre = "Marcos";
usuarioVacio.rol = "Profesor";
logSalida("Forma 2 (Vacío y asignación):", usuarioVacio);

// Forma 3: Abreviada ES6 (cuando la variable se llama igual que la clave)
const marca = "Logitech";
const modelo = "MX Master 3";
const raton = { marca, modelo }; // Equivale a { marca: marca, modelo: modelo }
logSalida("Forma 3 (Abreviada ES6):", raton);

// Interacción en la interfaz
document.getElementById("txtMarca").textContent = coche.marca;
document.getElementById("txtPuertas").textContent = coche.puertas;
document.getElementById("txtEstado").textContent = "Parado";

document.getElementById("btnArrancar").addEventListener("click", () => {
  const estado = coche.arrancar();
  document.getElementById("txtEstado").textContent = estado;
  logSalida(`\n🚗 ¡Botón pulsado! coche.arrancar() -> "${estado}"`);
});
