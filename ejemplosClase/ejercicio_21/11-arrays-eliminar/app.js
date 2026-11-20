/* =========================================================
   PRÁCTICA 11 · Arrays sueltos: eliminar un registro
   ---------------------------------------------------------
   Partimos de la práctica 08 (arrays + localStorage).
   Al listar, cada alumno lleva un botón "Eliminar".
   Para borrar la posición i hay que hacerlo en LOS DOS
   arrays con splice(i, 1); si solo borrásemos en uno, los
   nombres y las notas quedarían desemparejados.
   ========================================================= */

// 1. Claves y carga desde localStorage
const CLAVE_NOMBRES = "practica11_nombres";
const CLAVE_NOTAS = "practica11_notas";

const nombres = JSON.parse(localStorage.getItem(CLAVE_NOMBRES)) || [];
const notas = JSON.parse(localStorage.getItem(CLAVE_NOTAS)) || [];

// 2. Referencias a los elementos del HTML
const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("nombre");
const inputNota = document.getElementById("nota");
const lista = document.getElementById("lista");
const btnListar = document.getElementById("btnListar");
const btnBorrarTodo = document.getElementById("btnBorrarTodo");
const ultimoNombre = document.getElementById("ultimoNombre");
const ultimoNota = document.getElementById("ultimoNota");

// ---------------------------------------------------------
// 3. Funciones
// ---------------------------------------------------------

function guardarDatos() {
  localStorage.setItem(CLAVE_NOMBRES, JSON.stringify(nombres));
  localStorage.setItem(CLAVE_NOTAS, JSON.stringify(notas));
}

function pintarUltimo() {
  if (nombres.length === 0) {
    ultimoNombre.textContent = "—";
    ultimoNota.textContent = "Todavía no hay alumnos.";
    return;
  }

  const ultimo = nombres.length - 1;
  ultimoNombre.textContent = nombres[ultimo];
  ultimoNota.textContent = `Nota: ${notas[ultimo]}`;
}

// NUEVO: elimina el alumno de la posición i
function eliminarAlumno(i) {
  if (!confirm(`¿Eliminar a ${nombres[i]}?`)) {
    return;
  }

  // splice(posición, cuántos) quita elementos del array
  nombres.splice(i, 1);
  notas.splice(i, 1);

  guardarDatos();
  pintarUltimo();
  pintarLista(); // repintamos: los índices han cambiado
}

function crearItem(i) {
  const li = document.createElement("li");
  li.classList.add("alumno");

  const spanNombre = document.createElement("span");
  spanNombre.classList.add("alumno__nombre");
  spanNombre.textContent = nombres[i];

  const spanNota = document.createElement("span");
  spanNota.classList.add("alumno__nota");
  spanNota.textContent = notas[i];

  const estado = notas[i] >= 5 ? "aprobado" : "suspenso";
  const spanEstado = document.createElement("span");
  spanEstado.classList.add("estado", `estado--${estado}`);
  spanEstado.textContent = estado;

  // NUEVO: zona de botones con "Eliminar"
  const acciones = document.createElement("div");
  acciones.classList.add("alumno__acciones");

  const btnEliminar = document.createElement("button");
  btnEliminar.type = "button";
  btnEliminar.classList.add("btn", "btn--peligro", "btn--pequeno");
  btnEliminar.textContent = "Eliminar";

  // Cada botón "recuerda" su propio i gracias a let en el for
  btnEliminar.addEventListener("click", function () {
    eliminarAlumno(i);
  });

  acciones.appendChild(btnEliminar);

  li.append(spanNombre, spanNota, spanEstado, acciones);
  return li;
}

function pintarLista() {
  lista.replaceChildren();

  if (nombres.length === 0) {
    const vacio = document.createElement("li");
    vacio.classList.add("lista__vacia");
    vacio.textContent = "Todavía no hay alumnos registrados.";
    lista.appendChild(vacio);
    return;
  }

  for (let i = 0; i < nombres.length; i++) {
    lista.appendChild(crearItem(i));
  }
}

// ---------------------------------------------------------
// 4. Eventos
// ---------------------------------------------------------

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nombre = inputNombre.value.trim();
  const nota = Number(inputNota.value);

  if (nombre === "" || inputNota.value === "" || nota < 0 || nota > 10) {
    alert("Escribe un nombre y una nota entre 0 y 10.");
    return;
  }

  nombres.push(nombre);
  notas.push(nota);

  guardarDatos();
  pintarUltimo();

  formulario.reset();
  inputNombre.focus();
});

btnListar.addEventListener("click", pintarLista);

btnBorrarTodo.addEventListener("click", function () {
  if (!confirm("¿Seguro que quieres borrar todos los alumnos?")) {
    return;
  }

  nombres.length = 0;
  notas.length = 0;
  localStorage.removeItem(CLAVE_NOMBRES);
  localStorage.removeItem(CLAVE_NOTAS);

  pintarUltimo();
  pintarLista();
});

// 5. Estado inicial
pintarUltimo();
