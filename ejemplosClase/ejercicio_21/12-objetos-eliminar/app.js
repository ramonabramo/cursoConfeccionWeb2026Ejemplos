/* =========================================================
   PRÁCTICA 12 · Array de objetos: eliminar un registro
   ---------------------------------------------------------
   Misma funcionalidad que la práctica 11 con un array de
   objetos. Ventaja: basta UN splice para borrar al alumno,
   porque su nombre y su nota están en el mismo objeto.
   Para saber la posición al recorrer usamos forEach, que nos
   da cada elemento y su índice.
   ========================================================= */

// 1. Clave y carga desde localStorage
const CLAVE_ALUMNOS = "practica12_alumnos";
const alumnos = JSON.parse(localStorage.getItem(CLAVE_ALUMNOS)) || [];

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
  localStorage.setItem(CLAVE_ALUMNOS, JSON.stringify(alumnos));
}

function pintarUltimo() {
  if (alumnos.length === 0) {
    ultimoNombre.textContent = "—";
    ultimoNota.textContent = "Todavía no hay alumnos.";
    return;
  }

  const ultimo = alumnos[alumnos.length - 1];
  ultimoNombre.textContent = ultimo.nombre;
  ultimoNota.textContent = `Nota: ${ultimo.nota}`;
}

// NUEVO: elimina el objeto de la posición indice
function eliminarAlumno(indice) {
  if (!confirm(`¿Eliminar a ${alumnos[indice].nombre}?`)) {
    return;
  }

  alumnos.splice(indice, 1); // un solo splice

  guardarDatos();
  pintarUltimo();
  pintarLista();
}

// Ahora recibe el objeto Y su posición en el array
function crearItem(alumno, indice) {
  const li = document.createElement("li");
  li.classList.add("alumno");

  const spanNombre = document.createElement("span");
  spanNombre.classList.add("alumno__nombre");
  spanNombre.textContent = alumno.nombre;

  const spanNota = document.createElement("span");
  spanNota.classList.add("alumno__nota");
  spanNota.textContent = alumno.nota;

  const estado = alumno.nota >= 5 ? "aprobado" : "suspenso";
  const spanEstado = document.createElement("span");
  spanEstado.classList.add("estado", `estado--${estado}`);
  spanEstado.textContent = estado;

  const acciones = document.createElement("div");
  acciones.classList.add("alumno__acciones");

  const btnEliminar = document.createElement("button");
  btnEliminar.type = "button";
  btnEliminar.classList.add("btn", "btn--peligro", "btn--pequeno");
  btnEliminar.textContent = "Eliminar";
  btnEliminar.addEventListener("click", function () {
    eliminarAlumno(indice);
  });

  acciones.appendChild(btnEliminar);

  li.append(spanNombre, spanNota, spanEstado, acciones);
  return li;
}

function pintarLista() {
  lista.replaceChildren();

  if (alumnos.length === 0) {
    const vacio = document.createElement("li");
    vacio.classList.add("lista__vacia");
    vacio.textContent = "Todavía no hay alumnos registrados.";
    lista.appendChild(vacio);
    return;
  }

  // forEach nos da (elemento, índice) en cada vuelta
  alumnos.forEach(function (alumno, indice) {
    lista.appendChild(crearItem(alumno, indice));
  });
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

  alumnos.push({ nombre: nombre, nota: nota });

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

  alumnos.length = 0;
  localStorage.removeItem(CLAVE_ALUMNOS);

  pintarUltimo();
  pintarLista();
});

// 5. Estado inicial
pintarUltimo();
