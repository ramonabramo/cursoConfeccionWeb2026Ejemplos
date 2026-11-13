/**
 * ============================================================================
 * SOLUCIÓN OFICIAL: PRÁCTICA 1 - FICHA INTERACTIVA DEL ALUMNO
 * ============================================================================
 * Curso: Confección y Publicación de Páginas Web
 * Profesor: Ramón Abramo (Santander, 2026)
 * ============================================================================
 */

// 1. Captura de referencias a los elementos del DOM
const txtNombre    = document.getElementById("txtNombre");
const txtModulo    = document.getElementById("txtModulo");
const txtNotas     = document.getElementById("txtNotas");
const txtMedia     = document.getElementById("txtMedia");
const txtEstado    = document.getElementById("txtEstado");
const btnMostrar   = document.getElementById("btnMostrar");
const btnSubirNota = document.getElementById("btnSubirNota");

// 2. Definición del objeto literal con propiedades y métodos
const alumno = {
  nombre: "Marcos García",
  modulo: "Confección y Publicación Web",
  nota1: 6.5,
  nota2: 7.5,

  // Método para calcular la media de notas usando 'this'
  calcularMedia() {
    const promedio = (this.nota1 + this.nota2) / 2;
    return promedio.toFixed(1);
  },

  // Método para obtener el estado académico según la media
  obtenerEstado() {
    return Number(this.calcularMedia()) >= 5 ? "Aprobado ✅" : "Suspenso ❌";
  }
};

// 3. Función auxiliar para pintar los datos del objeto en pantalla
function renderizarFicha() {
  txtNombre.textContent = alumno.nombre;
  txtModulo.textContent = alumno.modulo;
  txtNotas.textContent  = `${alumno.nota1} y ${alumno.nota2}`;
  txtMedia.textContent  = alumno.calcularMedia();
  txtEstado.textContent = alumno.obtenerEstado();

  // Estilo visual dinámico según estado
  if (Number(alumno.calcularMedia()) >= 5) {
    txtEstado.style.color = "#10b981";
  } else {
    txtEstado.style.color = "#ef4444";
  }
}

// 4. Manejo de eventos de los botones

// Evento: Mostrar la ficha
btnMostrar.addEventListener("click", () => {
  renderizarFicha();
});

// Evento: Subir 1 punto a Nota 2
btnSubirNota.addEventListener("click", () => {
  if (alumno.nota2 < 10) {
    alumno.nota2 = Math.min(10, Number((alumno.nota2 + 1).toFixed(1)));
    renderizarFicha(); // Sincronizamos la pantalla de inmediato
  } else {
    alert("¡La nota ya ha alcanzado la calificación máxima de 10!");
  }
});

// Renderizado inicial automático para que la tarjeta no aparezca vacía al cargar
renderizarFicha();
