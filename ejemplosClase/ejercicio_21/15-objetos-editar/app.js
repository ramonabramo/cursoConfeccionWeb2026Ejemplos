/* =========================================================
   PRÁCTICA 15 · Array de objetos: editar un registro
   ---------------------------------------------------------
   Misma funcionalidad que la práctica 14 con un array de
   objetos. Para editar modificamos las propiedades del
   objeto que ya está en el array:
     alumnos[indiceEdicion].nombre = nombre;
   ========================================================= */

// 1. Clave y carga desde localStorage
const CLAVE_ALUMNOS = "practica15_alumnos";
const alumnos = JSON.parse(localStorage.getItem(CLAVE_ALUMNOS)) || [];

// 2. Variable de estado: -1 significa "no estoy editando"
let indiceEdicion = -1;

// 3. Referencias a los elementos del HTML
const formulario = document.getElementById("formulario");
const tituloFormulario = document.getElementById("tituloFormulario");
const inputNombre = document.getElementById("nombre");
const inputNota = document.getElementById("nota");
const btnGuardar = document.getElementById("btnGuardar");
const btnCancelar = document.getElementById("btnCancelar");
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
  ultimoNota.textContent = `Nota: ${ultimo.nota}`;
}

function empezarEdicion(indice) {
  indiceEdicion = indice;

  const alumno = alumnos[indice];
  inputNombre.value = alumno.nombre;
  inputNota.value = alumno.nota;

  tituloFormulario.textContent = "Editar alumno";
  btnGuardar.textContent = "Guardar cambios";
  btnCancelar.hidden = false;

  inputNombre.focus();
  pintarLista();
}

function salirDeEdicion() {
  indiceEdicion = -1;

  formulario.reset();
  tituloFormulario.textContent = "Nuevo alumno";
  btnGuardar.textContent = "Añadir";
  btnCancelar.hidden = true;
}

function eliminarAlumno(indice) {
  if (!confirm(`¿Eliminar a ${alumnos[indice].nombre}?`)) {
    return;
  }

  if (indiceEdicion !== -1) {
    salirDeEdicion();
  }

  alumnos.splice(indice, 1);

  guardarDatos();
  pintarUltimo();
  pintarLista();
}

function crearItem(alumno, indice) {
  const li = document.createElement("li");
  li.classList.add("alumno");

  if (indice === indiceEdicion) {
    li.classList.add("alumno--editando");
  }

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

  const btnEditar = document.createElement("button");
  btnEditar.type = "button";
  btnEditar.classList.add("btn", "btn--secundario", "btn--pequeno");
  btnEditar.textContent = "Editar";
  btnEditar.addEventListener("click", function () {
    empezarEdicion(indice);
  });

  const btnEliminar = document.createElement("button");
  btnEliminar.type = "button";
  btnEliminar.classList.add("btn", "btn--peligro", "btn--pequeno");
  btnEliminar.textContent = "Eliminar";
  btnEliminar.addEventListener("click", function () {
    eliminarAlumno(indice);
  });

  acciones.append(btnEditar, btnEliminar);

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

  const estabaEditando = indiceEdicion !== -1;

  if (estabaEditando) {
    // Modificamos el objeto que ya existe en el array
    alumnos[indiceEdicion].nombre = nombre;
    alumnos[indiceEdicion].nota = nota;
  } else {
    alumnos.push({ nombre: nombre, nota: nota });
  }

  guardarDatos();
  pintarUltimo();
  salirDeEdicion();

  if (estabaEditando) {
    pintarLista();
  }

  inputNombre.focus();
});

btnCancelar.addEventListener("click", function () {
  salirDeEdicion();
  pintarLista();
});

btnListar.addEventListener("click", pintarLista);

btnBorrarTodo.addEventListener("click", function () {
  if (!confirm("¿Seguro que quieres borrar todos los alumnos?")) {
    return;
  }

  salirDeEdicion();
  alumnos.length = 0;
  localStorage.removeItem(CLAVE_ALUMNOS);

  pintarUltimo();
  pintarLista();
});

// 6. Estado inicial
pintarUltimo();
