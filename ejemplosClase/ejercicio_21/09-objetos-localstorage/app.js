/* =========================================================
   PRÁCTICA 09 · Array de objetos + localStorage
   ---------------------------------------------------------
   Misma funcionalidad que la práctica 08, pero con un único
   array de objetos literales. Ganamos algo importante:
   ahora basta con UNA clave en localStorage, porque
   JSON.stringify convierte el array de objetos entero en
   un solo texto:
     [{"nombre":"Ana","nota":7},{"nombre":"Luis","nota":4}]
   ========================================================= */

// 1. Clave de almacenamiento
const CLAVE_ALUMNOS = "practica09_alumnos";

// 2. Cargamos el array de objetos (o [] si no había nada)
const alumnos = JSON.parse(localStorage.getItem(CLAVE_ALUMNOS)) || [];

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
  ultimoNota.textContent = `Nota: ${ultimo.nota}`;
}

// Recibe un objeto alumno y devuelve su <li>
function crearItem(alumno) {
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

  for (const alumno of alumnos) {
    lista.appendChild(crearItem(alumno));
  }
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

// 6. Estado inicial
pintarUltimo();
