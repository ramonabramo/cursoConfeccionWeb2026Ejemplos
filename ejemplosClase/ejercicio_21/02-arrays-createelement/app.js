/* =========================================================
   PRÁCTICA 02 · Arrays sueltos + createElement
   ---------------------------------------------------------
   Mismos datos que en la práctica 01 (dos arrays paralelos),
   pero ahora NO escribimos HTML como texto: creamos cada
   etiqueta como un nodo del DOM con document.createElement,
   le ponemos el texto con textContent y la colgamos del <ul>.
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

// 3. Escuchamos el envío del formulario
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  // 3.1 Leemos los valores
  const nombre = inputNombre.value.trim();
  const nota = Number(inputNota.value);

  // 3.2 Validación mínima
  if (nombre === "" || inputNota.value === "" || nota < 0 || nota > 10) {
    alert("Escribe un nombre y una nota entre 0 y 10.");
    return;
  }

  // 3.3 Guardamos en los arrays
  nombres.push(nombre);
  notas.push(nota);

  // 3.4 Vaciamos la lista: quitamos todos los hijos del <ul>
  lista.replaceChildren();

  // 3.5 Creamos un <li> por cada posición de los arrays
  for (let i = 0; i < nombres.length; i++) {
    // <li class="alumno">
    const li = document.createElement("li");
    li.classList.add("alumno");

    // <span class="alumno__nombre">Ana</span>
    const spanNombre = document.createElement("span");
    spanNombre.classList.add("alumno__nombre");
    spanNombre.textContent = nombres[i];

    // <span class="alumno__nota">7</span>
    const spanNota = document.createElement("span");
    spanNota.classList.add("alumno__nota");
    spanNota.textContent = notas[i];

    // <span class="estado estado--aprobado">aprobado</span>
    const estado = notas[i] >= 5 ? "aprobado" : "suspenso";
    const spanEstado = document.createElement("span");
    spanEstado.classList.add("estado", `estado--${estado}`);
    spanEstado.textContent = estado;

    // Metemos los tres <span> dentro del <li>...
    li.append(spanNombre, spanNota, spanEstado);

    // ...y el <li> dentro del <ul>
    lista.appendChild(li);
  }

  // 3.6 Limpiamos el formulario
  formulario.reset();
  inputNombre.focus();
});
