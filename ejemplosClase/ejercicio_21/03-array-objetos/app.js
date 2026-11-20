/* =========================================================
   PRÁCTICA 03 · Array de objetos
   ---------------------------------------------------------
   En lugar de dos arrays paralelos usamos UN solo array.
   Cada posición guarda un objeto literal con los datos de
   un alumno:  { nombre: "Ana", nota: 7 }
   Ahora el nombre y la nota viajan juntos: ya no dependemos
   de que dos índices coincidan.
   Pintamos la lista con createElement (práctica 02).
   ========================================================= */

// 1. Un único array que contendrá objetos
const alumnos = [];

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

  // 3.3 Creamos el objeto literal y lo guardamos en el array
  const alumno = {
    nombre: nombre,
    nota: nota,
  };
  // Forma abreviada equivalente: const alumno = { nombre, nota };
  alumnos.push(alumno);

  // 3.4 Vaciamos y volvemos a pintar la lista
  lista.replaceChildren();

  // for...of recorre directamente los elementos (cada objeto)
  for (const item of alumnos) {
    const li = document.createElement("li");
    li.classList.add("alumno");

    const spanNombre = document.createElement("span");
    spanNombre.classList.add("alumno__nombre");
    spanNombre.textContent = item.nombre; // notación punto

    const spanNota = document.createElement("span");
    spanNota.classList.add("alumno__nota");
    spanNota.textContent = item.nota;

    const estado = item.nota >= 5 ? "aprobado" : "suspenso";
    const spanEstado = document.createElement("span");
    spanEstado.classList.add("estado", `estado--${estado}`);
    spanEstado.textContent = estado;

    li.append(spanNombre, spanNota, spanEstado);
    lista.appendChild(li);
  }

  // 3.5 Limpiamos el formulario
  formulario.reset();
  inputNombre.focus();
});
