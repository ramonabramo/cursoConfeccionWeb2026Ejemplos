/* =========================================================
   TEORÍA · Rehidratar objetos de una clase con map()
   ---------------------------------------------------------
   - JSON.stringify guarda solo las PROPIEDADES, no los métodos
   - JSON.parse devuelve objetos literales normales
   - Para recuperar los métodos, volvemos a crear cada objeto
     con new, recorriendo el array con map()
   - map() crea un ARRAY NUEVO con lo que devuelve la función
   ========================================================= */

class Tarea {
  constructor(texto, hecha) {
    this.texto = texto;
    this.hecha = hecha;
  }

  describir() {
    return `${this.hecha ? "✔" : "✘"} ${this.texto}`;
  }
}

const CLAVE = "teoria_rehidratar_tareas";
const salida = document.getElementById("salida");

// 1. map() en general
document.getElementById("btnMap").addEventListener("click", function () {
  const numeros = [1, 2, 3];
  const dobles = numeros.map(function (n) {
    return n * 2;
  });

  salida.textContent =
    `const dobles = [1, 2, 3].map(function (n) { return n * 2; });\n\n` +
    `numeros → [${numeros}]   (el original NO cambia)\n` +
    `dobles  → [${dobles}]   (array nuevo)\n\n` +
    `map llama a la función con cada elemento y guarda\nen el array nuevo lo que esa función devuelve.`;
});

// 2. Guardar instancias
document.getElementById("btnGuardar").addEventListener("click", function () {
  const tareas = [
    new Tarea("Repasar arrays", true),
    new Tarea("Hacer la práctica 10", false),
    new Tarea("Leer sobre JSON", true),
  ];

  localStorage.setItem(CLAVE, JSON.stringify(tareas));

  salida.textContent =
    `tareas[0].describir() → "${tareas[0].describir()}"   (antes de guardar funciona)\n\n` +
    `Texto guardado:\n${localStorage.getItem(CLAVE)}\n\n` +
    `Fíjate: en el texto NO aparece describir.`;
});

// 3a. Cargar sin rehidratar → error al llamar al método
document.getElementById("btnSin").addEventListener("click", function () {
  const tareas = JSON.parse(localStorage.getItem(CLAVE)) || [];

  if (tareas.length === 0) {
    salida.textContent = "No hay nada guardado. Haz antes el paso 2.";
    return;
  }

  let texto =
    `const tareas = JSON.parse(localStorage.getItem(CLAVE));\n\n` +
    `tareas[0] instanceof Tarea → ${tareas[0] instanceof Tarea}\n` +
    `typeof tareas[0].describir → ${typeof tareas[0].describir}\n\n`;

  try {
    tareas[0].describir();
  } catch (error) {
    texto += `tareas[0].describir() → ERROR:\n${error.message}`;
  }

  salida.textContent = texto;
});

// 3b. Cargar rehidratando: cada objeto plano se convierte en una Tarea
document.getElementById("btnCon").addEventListener("click", function () {
  const datos = JSON.parse(localStorage.getItem(CLAVE)) || [];

  if (datos.length === 0) {
    salida.textContent = "No hay nada guardado. Haz antes el paso 2.";
    return;
  }

  const tareas = datos.map(function (dato) {
    return new Tarea(dato.texto, dato.hecha);
  });

  let texto =
    `const tareas = datos.map(function (dato) {\n` +
    `  return new Tarea(dato.texto, dato.hecha);\n` +
    `});\n\n` +
    `tareas[0] instanceof Tarea → ${tareas[0] instanceof Tarea}\n\n`;

  for (const tarea of tareas) {
    texto += tarea.describir() + "\n";
  }

  salida.textContent = texto;
});
