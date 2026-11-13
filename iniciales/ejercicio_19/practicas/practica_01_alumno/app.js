/**
 * ============================================================================
 * PRÁCTICA 1: FICHA INTERACTIVA DEL ALUMNO
 * ============================================================================
 * Curso: Confección y Publicación de Páginas Web
 * Alumno/a: [Escribe aquí tu nombre]
 * Profesor: Ramón Abramo (Santander, 2026)
 *
 * 🎯 OBJETIVOS:
 * 1. Declarar un objeto literal con datos numéricos y de texto.
 * 2. Crear métodos dentro del objeto que lean sus propiedades usando 'this'.
 * 3. Actualizar los textos del DOM conectando la lógica del objeto con la pantalla.
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// PASO 1: Captura las referencias a los elementos del DOM con getElementById
// ----------------------------------------------------------------------------
const txtNombre    = document.getElementById("txtNombre");
const txtModulo    = document.getElementById("txtModulo");
const txtNotas     = document.getElementById("txtNotas");
const txtMedia     = document.getElementById("txtMedia");
const txtEstado    = document.getElementById("txtEstado");
const btnMostrar   = document.getElementById("btnMostrar");
const btnSubirNota = document.getElementById("btnSubirNota");

// ----------------------------------------------------------------------------
// PASO 2: Declara el objeto literal "alumno"
// ----------------------------------------------------------------------------
const alumno = {
  // TODO 2.1: Crea las propiedades iniciales:
  // - nombre: "Marcos García"
  // - modulo: "Confección y Publicación Web"
  // - nota1: 6.5
  // - nota2: 7.5

  // TODO 2.2: Crea el método calcularMedia()
  // - Debe sumar this.nota1 + this.nota2 y dividir entre 2.
  // - Retorna el resultado con 1 decimal usando .toFixed(1).

  // TODO 2.3: Crea el método obtenerEstado()
  // - Si calcularMedia() es mayor o igual a 5, retorna "Aprobado ✅".
  // - En caso contrario, retorna "Suspenso ❌".
  // (Pista: usa this.calcularMedia() para consultar la nota media).
};

// ----------------------------------------------------------------------------
// PASO 3: Función auxiliar para pintar los datos en la pantalla
// ----------------------------------------------------------------------------
function renderizarFicha() {
  // TODO 3.1: Asigna a txtNombre.textContent el nombre del alumno.
  // TODO 3.2: Asigna a txtModulo.textContent el módulo del alumno.
  // TODO 3.3: Asigna a txtNotas.textContent el texto: alumno.nota1 + " y " + alumno.nota2
  // TODO 3.4: Asigna a txtMedia.textContent la llamada al método calcularMedia().
  // TODO 3.5: Asigna a txtEstado.textContent la llamada al método obtenerEstado().
}

// ----------------------------------------------------------------------------
// PASO 4: Eventos de los botones
// ----------------------------------------------------------------------------

// Evento 1: Pulsar el botón "Mostrar Ficha"
btnMostrar.addEventListener("click", () => {
  // TODO 4.1: Invoca la función renderizarFicha()
});

// Evento 2: Pulsar el botón "Subir 1 punto a Nota 2"
btnSubirNota.addEventListener("click", () => {
  // TODO 4.2: Comprueba si alumno.nota2 es menor que 10.
  // Si es menor que 10:
  //   - Súmale 1 punto (cuidando de no pasar de 10 con Math.min(10, ...)).
  //   - Vuelve a llamar a renderizarFicha() para actualizar los textos en pantalla.
  // Si ya es 10:
  //   - Muestra una alerta con alert("¡La nota ya ha alcanzado el máximo de 10!").
});
