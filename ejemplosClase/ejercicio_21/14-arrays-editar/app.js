/* =========================================================
   PRÁCTICA 14 · Arrays sueltos: editar un registro
   ---------------------------------------------------------
   Partimos de la práctica 11 (arrays + localStorage +
   eliminar). Al listar, cada alumno lleva también un botón
   "Editar".

   Idea clave: el MISMO formulario sirve para añadir y para
   editar. Lo controlamos con una variable de estado:
     indiceEdicion = -1   -> modo AÑADIR
     indiceEdicion = 3    -> modo EDITAR la posición 3
   ========================================================= */

// 1. Claves y carga desde localStorage
const CLAVE_NOMBRES = "practica14_nombres";
const CLAVE_NOTAS = "practica14_notas";

const nombres = JSON.parse(localStorage.getItem(CLAVE_NOMBRES)) || [];
const notas = JSON.parse(localStorage.getItem(CLAVE_NOTAS)) || [];

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

// NUEVO: pasa el formulario a modo edición con los datos de i
function empezarEdicion(i) {
  indiceEdicion = i;

  // Rellenamos el formulario con los datos actuales
  inputNombre.value = nombres[i];
  inputNota.value = notas[i];

  // Cambiamos los textos y mostramos "Cancelar"
  tituloFormulario.textContent = "Editar alumno";
  btnGuardar.textContent = "Guardar cambios";
  btnCancelar.hidden = false;

  inputNombre.focus();
  pintarLista(); // para resaltar el alumno que se edita
}

// NUEVO: vuelve el formulario a modo añadir
function salirDeEdicion() {
  indiceEdicion = -1;

  formulario.reset();
  tituloFormulario.textContent = "Nuevo alumno";
  btnGuardar.textContent = "Añadir";
  btnCancelar.hidden = true;
}

function eliminarAlumno(i) {
  if (!confirm(`¿Eliminar a ${nombres[i]}?`)) {
    return;
  }

  // Si estábamos editando, salimos: los índices van a cambiar
  if (indiceEdicion !== -1) {
    salirDeEdicion();
  }

  nombres.splice(i, 1);
  notas.splice(i, 1);

  guardarDatos();
  pintarUltimo();
  pintarLista();
}

function crearItem(i) {
  const li = document.createElement("li");
  li.classList.add("alumno");

  // Resaltamos el que se está editando
  if (i === indiceEdicion) {
    li.classList.add("alumno--editando");
  }

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

  const acciones = document.createElement("div");
  acciones.classList.add("alumno__acciones");

  // NUEVO: botón Editar
  const btnEditar = document.createElement("button");
  btnEditar.type = "button";
  btnEditar.classList.add("btn", "btn--secundario", "btn--pequeno");
  btnEditar.textContent = "Editar";
  btnEditar.addEventListener("click", function () {
    empezarEdicion(i);
  });

  const btnEliminar = document.createElement("button");
  btnEliminar.type = "button";
  btnEliminar.classList.add("btn", "btn--peligro", "btn--pequeno");
  btnEliminar.textContent = "Eliminar";
  btnEliminar.addEventListener("click", function () {
    eliminarAlumno(i);
  });

  acciones.append(btnEditar, btnEliminar);

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
// 5. Eventos
// ---------------------------------------------------------

// 5.1 Enviar el formulario: AÑADIR o GUARDAR CAMBIOS
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
    // Sustituimos los valores en la MISMA posición
    nombres[indiceEdicion] = nombre;
    notas[indiceEdicion] = nota;
  } else {
    nombres.push(nombre);
    notas.push(nota);
  }

  guardarDatos();
  pintarUltimo();
  salirDeEdicion(); // deja el formulario limpio y en modo añadir

  if (estabaEditando) {
    pintarLista(); // refrescamos la lista con el cambio
  }

  inputNombre.focus();
});

// 5.2 Cancelar la edición
btnCancelar.addEventListener("click", function () {
  salirDeEdicion();
  pintarLista();
});

// 5.3 Listar
btnListar.addEventListener("click", pintarLista);

// 5.4 Eliminar todo
btnBorrarTodo.addEventListener("click", function () {
  if (!confirm("¿Seguro que quieres borrar todos los alumnos?")) {
    return;
  }

  salirDeEdicion();
  nombres.length = 0;
  notas.length = 0;
  localStorage.removeItem(CLAVE_NOMBRES);
  localStorage.removeItem(CLAVE_NOTAS);

  pintarUltimo();
  pintarLista();
});

// 6. Estado inicial
pintarUltimo();
