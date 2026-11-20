/* =========================================================
   PRÁCTICA 04 · Array de objetos creados con una clase
   ---------------------------------------------------------
   Definimos la clase Alumno: un "molde" que fabrica objetos
   con la misma forma (nombre y nota) y que además trae un
   método, estaAprobado(), que sabe decir si ha aprobado.
   Cada alumno se crea con  new Alumno(nombre, nota).
   ========================================================= */

// 1. La clase Alumno
class Alumno {
  // El constructor se ejecuta al hacer new Alumno(...)
  constructor(nombre, nota) {
    this.nombre = nombre; // this = el objeto que se está creando
    this.nota = nota;
  }

  // Método: una función que pertenece a todos los alumnos
  estaAprobado() {
    return this.nota >= 5;
  }
}

// 2. Array que contendrá instancias de Alumno
const alumnos = [];

// 3. Referencias a los elementos del HTML
const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("nombre");
const inputNota = document.getElementById("nota");
const lista = document.getElementById("lista");

// 4. Escuchamos el envío del formulario
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  // 4.1 Leemos los valores
  const nombre = inputNombre.value.trim();
  const nota = Number(inputNota.value);

  // 4.2 Validación mínima
  if (nombre === "" || inputNota.value === "" || nota < 0 || nota > 10) {
    alert("Escribe un nombre y una nota entre 0 y 10.");
    return;
  }

  // 4.3 Creamos una instancia de la clase y la guardamos
  const alumno = new Alumno(nombre, nota);
  alumnos.push(alumno);

  // 4.4 Vaciamos y volvemos a pintar la lista
  lista.replaceChildren();

  for (const item of alumnos) {
    const li = document.createElement("li");
    li.classList.add("alumno");

    const spanNombre = document.createElement("span");
    spanNombre.classList.add("alumno__nombre");
    spanNombre.textContent = item.nombre;

    const spanNota = document.createElement("span");
    spanNota.classList.add("alumno__nota");
    spanNota.textContent = item.nota;

    // Ahora preguntamos al propio objeto si está aprobado
    const estado = item.estaAprobado() ? "aprobado" : "suspenso";
    const spanEstado = document.createElement("span");
    spanEstado.classList.add("estado", `estado--${estado}`);
    spanEstado.textContent = estado;

    li.append(spanNombre, spanNota, spanEstado);
    lista.appendChild(li);
  }

  // 4.5 Limpiamos el formulario
  formulario.reset();
  inputNombre.focus();
});
