/* =========================================================
   PRÁCTICA 01 · Arrays sueltos + innerHTML
   ---------------------------------------------------------
   Guardamos los datos del formulario en DOS arrays paralelos:
     nombres[i]  -> nombre del alumno que está en la posición i
     notas[i]    -> nota de ese mismo alumno
   Lo único que une un nombre con su nota es el ÍNDICE.

   La lista se genera escribiendo HTML como texto con innerHTML.
   Aquí NO usamos objetos ni funciones declaradas: solo una
   función anónima como manejador del evento "submit".
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
  // Sin esto, el navegador enviaría el formulario y recargaría la página
  evento.preventDefault();

  // 3.1 Leemos los valores (value SIEMPRE devuelve un string)
  const nombre = inputNombre.value.trim();
  const nota = Number(inputNota.value);

  // 3.2 Validación mínima
  if (nombre === "" || inputNota.value === "" || nota < 0 || nota > 10) {
    alert("Escribe un nombre y una nota entre 0 y 10.");
    return;
  }

  // 3.3 Guardamos cada dato en su array (los dos en la misma posición)
  nombres.push(nombre);
  notas.push(nota);

  // 3.4 Construimos TODO el HTML de la lista a partir de los arrays
  let html = "";

  for (let i = 0; i < nombres.length; i++) {
    const estado = notas[i] >= 5 ? "aprobado" : "suspenso";

    html += `
      <li class="alumno">
        <span class="alumno__nombre">${nombres[i]}</span>
        <span class="alumno__nota">${notas[i]}</span>
        <span class="estado estado--${estado}">${estado}</span>
      </li>`;
  }

  // 3.5 Sustituimos el contenido del <ul> por el HTML generado
  lista.innerHTML = html;

  // 3.6 Limpiamos el formulario y devolvemos el foco al nombre
  formulario.reset();
  inputNombre.focus();
});
