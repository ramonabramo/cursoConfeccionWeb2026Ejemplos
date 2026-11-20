/* =========================================================
   TEORÍA · Serialización con JSON
   ---------------------------------------------------------
   - JSON.stringify(valor) → convierte arrays/objetos en TEXTO
   - JSON.parse(texto)     → reconstruye el array/objeto
   - Es la pareja perfecta para localStorage, que solo guarda texto
   ========================================================= */

const salida = document.getElementById("salida");
const CLAVE = "teoria_json_alumnos";

const alumnos = [
  { nombre: "Ana", nota: 7 },
  { nombre: "Luis", nota: 4.5 },
];

// 1. stringify de un array
document.getElementById("btnArray").addEventListener("click", function () {
  const texto = JSON.stringify([10, 20, 30]);
  salida.textContent = `JSON.stringify([10, 20, 30])\n→ ${texto}\n\nTipo del resultado: ${typeof texto}`;
});

// 2. stringify de un objeto: las claves van entre comillas dobles
document.getElementById("btnObjeto").addEventListener("click", function () {
  const texto = JSON.stringify({ nombre: "Ana", nota: 7, aprobado: true });
  salida.textContent = `JSON.stringify({ nombre: "Ana", nota: 7, aprobado: true })\n→ ${texto}`;
});

// 3. stringify de un array de objetos
document.getElementById("btnArrayObjetos").addEventListener("click", function () {
  salida.textContent = `JSON.stringify(alumnos)\n→ ${JSON.stringify(alumnos)}`;
});

// 4. stringify "bonito": útil para leerlo, no hace falta para guardar
document.getElementById("btnBonito").addEventListener("click", function () {
  salida.textContent = `JSON.stringify(alumnos, null, 2)\n→\n${JSON.stringify(alumnos, null, 2)}`;
});

// 5. parse: del texto volvemos a tener un array de verdad
document.getElementById("btnParse").addEventListener("click", function () {
  const texto = '[{"nombre":"Eva","nota":9},{"nombre":"Juan","nota":3}]';
  const datos = JSON.parse(texto);

  salida.textContent =
    `const datos = JSON.parse('${texto}');\n\n` +
    `Array.isArray(datos) → ${Array.isArray(datos)}\n` +
    `datos.length         → ${datos.length}\n` +
    `datos[0].nombre      → "${datos[0].nombre}"\n` +
    `datos[1].nota + 1    → ${datos[1].nota + 1}   (¡es un número!)`;
});

// 6. Cuando no hay nada guardado
document.getElementById("btnNull").addEventListener("click", function () {
  const nada = localStorage.getItem("clave_que_no_existe"); // null
  const sinTruco = JSON.parse(nada);
  const conTruco = JSON.parse(nada) || [];

  salida.textContent =
    `getItem("clave_que_no_existe") → ${nada}\n` +
    `JSON.parse(null)               → ${sinTruco}\n` +
    `JSON.parse(null) || []         → [${conTruco}]  (array vacío, length ${conTruco.length})\n\n` +
    `Con || [] siempre arrancamos con un array, aunque sea la primera vez.`;
});

// 7. Texto mal formado: parse lanza un error
document.getElementById("btnError").addEventListener("click", function () {
  try {
    JSON.parse("{nombre: 'Ana'}"); // claves sin comillas dobles: NO es JSON
  } catch (error) {
    salida.textContent =
      `JSON.parse("{nombre: 'Ana'}")\n\n` +
      `ERROR: ${error.message}\n\n` +
      `En JSON las claves y los textos van SIEMPRE entre comillas dobles.`;
  }
});

// 8. Ida: guardar en localStorage
document.getElementById("btnGuardar").addEventListener("click", function () {
  localStorage.setItem(CLAVE, JSON.stringify(alumnos));
  salida.textContent =
    `localStorage.setItem("${CLAVE}", JSON.stringify(alumnos));\n\n` +
    `Guardado este texto:\n${localStorage.getItem(CLAVE)}\n\nRecarga la página y pulsa «Cargarlo y usarlo».`;
});

// 9. Vuelta: leer de localStorage y usar los datos
document.getElementById("btnCargar").addEventListener("click", function () {
  const cargados = JSON.parse(localStorage.getItem(CLAVE)) || [];

  let texto = `const cargados = JSON.parse(localStorage.getItem("${CLAVE}")) || [];\n\n`;
  for (const a of cargados) {
    texto += `${a.nombre} tiene un ${a.nota}\n`;
  }
  if (cargados.length === 0) {
    texto += "(No había nada guardado: pulsa antes «Guardar».)";
  }
  salida.textContent = texto;
});

// 10. Lo que se pierde: funciones (métodos) y fechas
document.getElementById("btnPierde").addEventListener("click", function () {
  const original = {
    nombre: "Ana",
    fecha: new Date(2026, 0, 15),
    saludar: function () {
      return "Hola";
    },
  };

  const copia = JSON.parse(JSON.stringify(original));

  salida.textContent =
    `Texto JSON: ${JSON.stringify(original)}\n\n` +
    `typeof original.saludar → ${typeof original.saludar}\n` +
    `typeof copia.saludar    → ${typeof copia.saludar}   ← la función ha desaparecido\n\n` +
    `typeof original.fecha   → ${typeof original.fecha} (Date)\n` +
    `typeof copia.fecha      → ${typeof copia.fecha}   ← la fecha vuelve como texto`;
});
