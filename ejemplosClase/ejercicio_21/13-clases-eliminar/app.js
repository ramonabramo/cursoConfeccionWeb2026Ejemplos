/* =========================================================
   PRÁCTICA 13 · Clases: eliminar un registro
   ---------------------------------------------------------
   Misma funcionalidad que las prácticas 11 y 12 usando la
   clase Alumno, con rehidratación al cargar (práctica 10).
   ========================================================= */

// 1. La clase Alumno
class Alumno {
  constructor(nombre, nota) {
    this.nombre = nombre;
    this.nota = nota;
  }

  estaAprobado() {
    return this.nota >= 5;
  }
}

// 2. Clave, carga y rehidratación
const CLAVE_ALUMNOS = "practica13_alumnos";
const datosGuardados = JSON.parse(localStorage.getItem(CLAVE_ALUMNOS)) || [];
const alumnos = datosGuardados.map(function (dato) {
  return new Alumno(dato.nombre, dato.nota);
});

// 3. Referencias a los elementos del HTML
const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("nombre");
const inputNota = document.getElementById("nota");
const lista = document.getElementById("lista");
const btnListar = document.getElementById("btnListar");
const btnBorrarTodo = document.getElementById("btnBorrarTodo");
const ultimoNombre = document.getElementById("ultimoNombre");
const ultimoNota = document.getElementById("ultimoNota");

// ---------------------------------------------------------
// 4. Funciones
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
  ultimoNota.textContent = `Nota: ${ultimo.nota} (${ultimo.estaAprobado() ? "aprobado" : "suspenso"})`;
}

function eliminarAlumno(indice) {
  if (!confirm(`¿Eliminar a ${alumnos[indice].nombre}?`)) {
    return;
  }

  alumnos.splice(indice, 1);

  guardarDatos();
  pintarUltimo();
  pintarLista();
}

function crearItem(alumno, indice) {
  const li = document.createElement("li");
  li.classList.add("alumno");

  const spanNombre = document.createElement("span");
  spanNombre.classList.add("alumno__nombre");
  spanNombre.textContent = alumno.nombre;

  const spanNota = document.createElement("span");
  spanNota.classList.add("alumno__nota");
  spanNota.textContent = alumno.nota;

  const estado = alumno.estaAprobado() ? "aprobado" : "suspenso";
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

  alumnos.forEach(function (alumno, indice) {
    lista.appendChild(crearItem(alumno, indice));
  });
}

// ---------------------------------------------------------
// 5. Eventos
// ---------------------------------------------------------

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nombre = inputNombre.value.trim();
  const nota = Number(inputNota.value);

  if (nombre === "" || inputNota.value === "" || nota < 0 || nota > 10) {
    alert("Escribe un nombre y una nota entre 0 y 10.");
    return;
  }

  alumnos.push(new Alumno(nombre, nota));

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

// 6. Estado inicial
pintarUltimo();
