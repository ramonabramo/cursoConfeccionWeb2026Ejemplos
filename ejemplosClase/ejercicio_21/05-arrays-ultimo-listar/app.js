/* =========================================================
   PRÁCTICA 05 · Arrays sueltos: último añadido + botón Listar
   ---------------------------------------------------------
   Partimos de la práctica 02 (arrays paralelos + createElement).
   Cambia el comportamiento:
     - Al añadir, solo mostramos el ÚLTIMO alumno en la tarjeta
       de la derecha.
     - La lista completa aparece cuando se pulsa "Listar".
   Seguimos sin objetos propios y sin funciones declaradas.
   ========================================================= */

// 1. Arrays donde vamos guardando los datos
const nombres = [];
const notas = [];

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

  nombres.push(nombre);
  notas.push(nota);

  // 3.1 Mostramos el último elemento de los arrays.
  //     La última posición siempre es length - 1
  const ultimo = nombres.length - 1;
  ultimoNombre.textContent = nombres[ultimo];
  ultimoNota.textContent = `Nota: ${notas[ultimo]}`;
  // Alternativa moderna: nombres.at(-1) y notas.at(-1)

  formulario.reset();
  inputNombre.focus();
});

// 4. Listar todos los alumnos al pulsar el botón
btnListar.addEventListener("click", function () {
  lista.replaceChildren();

  // 4.1 Si no hay datos, mostramos un aviso y salimos
  if (nombres.length === 0) {
    const vacio = document.createElement("li");
    vacio.classList.add("lista__vacia");
    vacio.textContent = "Todavía no hay alumnos registrados.";
    lista.appendChild(vacio);
    return;
  }

  // 4.2 Creamos un <li> por cada posición
  for (let i = 0; i < nombres.length; i++) {
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

    li.append(spanNombre, spanNota, spanEstado);
    lista.appendChild(li);
  }
});
