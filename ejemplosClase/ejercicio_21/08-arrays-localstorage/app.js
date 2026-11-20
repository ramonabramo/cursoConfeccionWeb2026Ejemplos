/* =========================================================
   PRÁCTICA 08 · Arrays sueltos + localStorage
   ---------------------------------------------------------
   Partimos de la práctica 05 y añadimos persistencia:
     - Cada vez que añadimos un alumno, guardamos los dos
       arrays en localStorage (convertidos a texto con
       JSON.stringify).
     - Al cargar la página, los recuperamos con
       JSON.parse(localStorage.getItem(...)).
     - El botón "Eliminar todo" borra arrays y almacenamiento.

   Como ahora hay código que se repite (pintar el último,
   pintar la lista, guardar), lo agrupamos en FUNCIONES
   DECLARADAS con la palabra function.
   ========================================================= */

// 1. Claves con las que guardamos en localStorage.
//    Llevan el número de práctica para que no choquen con
//    los datos de otras prácticas abiertas en el mismo sitio.
const CLAVE_NOMBRES = "practica08_nombres";
const CLAVE_NOTAS = "practica08_notas";

// 2. Cargamos los arrays desde localStorage.
//    Si la clave no existe, getItem devuelve null,
//    JSON.parse(null) devuelve null y nos quedamos con [].
const nombres = JSON.parse(localStorage.getItem(CLAVE_NOMBRES)) || [];
const notas = JSON.parse(localStorage.getItem(CLAVE_NOTAS)) || [];

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

// Guarda los dos arrays en localStorage (como texto JSON)
function guardarDatos() {
  localStorage.setItem(CLAVE_NOMBRES, JSON.stringify(nombres));
  localStorage.setItem(CLAVE_NOTAS, JSON.stringify(notas));
}

// Muestra el último alumno en la tarjeta de la derecha
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

// Crea y devuelve el <li> del alumno que está en la posición i
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

  li.append(spanNombre, spanNota, spanEstado);
  return li;
}

// Pinta la lista completa
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

// 5.1 Añadir un alumno
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

  guardarDatos(); // ¡Persistimos después de cada cambio!
  pintarUltimo();

  formulario.reset();
  inputNombre.focus();
});

// 5.2 Listar
btnListar.addEventListener("click", pintarLista);

// 5.3 Eliminar todos los datos
btnBorrarTodo.addEventListener("click", function () {
  if (!confirm("¿Seguro que quieres borrar todos los alumnos?")) {
    return;
  }

  // Vaciamos los arrays. Son const, así que no podemos
  // reasignarlos (nombres = []), pero sí cambiar su contenido.
  nombres.length = 0;
  notas.length = 0;

  // Borramos SOLO nuestras claves (localStorage.clear()
  // borraría también lo de otras prácticas)
  localStorage.removeItem(CLAVE_NOMBRES);
  localStorage.removeItem(CLAVE_NOTAS);

  pintarUltimo();
  pintarLista();
});

// 6. Al arrancar la página mostramos lo que ya había guardado
pintarUltimo();
