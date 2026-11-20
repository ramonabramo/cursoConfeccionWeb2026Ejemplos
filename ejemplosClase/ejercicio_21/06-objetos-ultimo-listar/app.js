/* =========================================================
   PRÁCTICA 06 · Array de objetos: último añadido + botón Listar
   ---------------------------------------------------------
   Misma funcionalidad que la práctica 05, pero con un único
   array de objetos literales  { nombre, nota }  (práctica 03).
   ========================================================= */

// 1. Array de objetos
const alumnos = [];

// 2. Referencias a los elementos del HTML
const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("nombre");
const inputNota = document.getElementById("nota");
const lista = document.getElementById("lista");
const btnListar = document.getElementById("btnListar");
const ultimoNombre = document.getElementById("ultimoNombre");
const ultimoNota = document.getElementById("ultimoNota");

// 3. Añadir un alumno
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nombre = inputNombre.value.trim();
  const nota = Number(inputNota.value);

  if (nombre === "" || inputNota.value === "" || nota < 0 || nota > 10) {
    alert("Escribe un nombre y una nota entre 0 y 10.");
    return;
  }

  alumnos.push({ nombre: nombre, nota: nota });

  // 3.1 El último objeto del array contiene nombre Y nota juntos
  const ultimo = alumnos[alumnos.length - 1];
  ultimoNombre.textContent = ultimo.nombre;
  ultimoNota.textContent = `Nota: ${ultimo.nota}`;

  formulario.reset();
  inputNombre.focus();
});

// 4. Listar todos los alumnos
btnListar.addEventListener("click", function () {
  lista.replaceChildren();

  if (alumnos.length === 0) {
    const vacio = document.createElement("li");
    vacio.classList.add("lista__vacia");
    vacio.textContent = "Todavía no hay alumnos registrados.";
    lista.appendChild(vacio);
    return;
  }

  for (const alumno of alumnos) {
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

    li.append(spanNombre, spanNota, spanEstado);
    lista.appendChild(li);
  }
});
