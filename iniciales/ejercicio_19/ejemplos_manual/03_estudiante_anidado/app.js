/**
 * ============================================================================
 * EJERCICIO 19 - EJEMPLO MANUAL 03: OBJETOS ANIDADOS Y ARRAYS
 * ============================================================================
 * Curso: Confección y Publicación de Páginas Web
 * Profesor: Ramón Abramo
 *
 * CONCEPTOS CLAVE TRATADOS:
 * 1. Composición de objetos: un objeto que contiene otro objeto como propiedad
 *    (`estudiante.direccion.ciudad`).
 * 2. Inclusión de colecciones (arrays) dentro del objeto (`estudiante.calificaciones`).
 * 3. Acceso mediante encadenamiento de puntos y corchetes de array.
 * 4. Métodos que iteran sobre arrays propios utilizando `this.calificaciones`
 *    para calcular la media aritmética (`toFixed(2)`).
 * ============================================================================
 */

// 1. OBJETO CON ESTRUCTURAS ANIDADAS Y MÉTODOS
const estudiante = {
  nombre: "Carlos Ruiz",
  curso: "1º Confección Web",
  direccion: {
    calle: "Av. de los Castros, 42",
    ciudad: "Santander",
    cp: "39005"
  },
  calificaciones: [7.5, 8.0, 9.5],

  /**
   * Método que calcula la nota media de las calificaciones internas
   */
  calcularMedia() {
    if (this.calificaciones.length === 0) return 0;
    let suma = 0;
    for (const nota of this.calificaciones) {
      suma += nota;
    }
    return (suma / this.calificaciones.length).toFixed(2);
  },

  /**
   * Método para incorporar una nueva calificación al array interno
   */
  agregarNota(nota) {
    if (typeof nota === "number" && nota >= 0 && nota <= 10) {
      this.calificaciones.push(nota);
      return true;
    }
    return false;
  }
};

// 2. REFERENCIAS AL DOM
const txtNombre = document.getElementById("txtNombre");
const txtCurso = document.getElementById("txtCurso");
const txtCalle = document.getElementById("txtCalle");
const txtCiudad = document.getElementById("txtCiudad");
const txtCP = document.getElementById("txtCP");
const contenedorNotas = document.getElementById("contenedorNotas");
const txtMedia = document.getElementById("txtMedia");
const badgeEstado = document.getElementById("badgeEstado");
const codigoJSON = document.getElementById("codigoJSON");

const inpNuevaNota = document.getElementById("inpNuevaNota");
const btnAgregarNota = document.getElementById("btnAgregarNota");
const inpNuevaCiudad = document.getElementById("inpNuevaCiudad");
const btnCambiarCiudad = document.getElementById("btnCambiarCiudad");

// 3. RENDERIZACIÓN VISUAL
function actualizarVista() {
  txtNombre.textContent = estudiante.nombre;
  txtCurso.textContent = estudiante.curso;

  // Acceso encadenado a propiedades anidadas
  txtCalle.textContent = estudiante.direccion.calle;
  txtCiudad.textContent = estudiante.direccion.ciudad;
  txtCP.textContent = estudiante.direccion.cp;

  // Render de chips de notas
  contenedorNotas.innerHTML = "";
  estudiante.calificaciones.forEach((nota, index) => {
    const chip = document.createElement("span");
    chip.className = "chip-nota";
    chip.textContent = `#${index + 1}: ${nota.toFixed(1)}`;
    contenedorNotas.appendChild(chip);
  });

  // Cálculo de media con this
  const media = parseFloat(estudiante.calcularMedia());
  txtMedia.textContent = media.toFixed(2);

  // Badge según la media
  if (media >= 9) {
    badgeEstado.className = "badge-calificacion sobresaliente";
    badgeEstado.textContent = "Sobresaliente";
  } else if (media >= 7) {
    badgeEstado.className = "badge-calificacion notable";
    badgeEstado.textContent = "Notable";
  } else if (media >= 5) {
    badgeEstado.className = "badge-calificacion aprobado";
    badgeEstado.textContent = "Aprobado";
  } else {
    badgeEstado.className = "badge-calificacion";
    badgeEstado.style.background = "#ef4444";
    badgeEstado.textContent = "Suspenso";
  }

  // Volcado JSON
  codigoJSON.textContent = JSON.stringify(estudiante, (key, value) => {
    if (typeof value === "function") return value.toString();
    return value;
  }, 2);
}

// 4. LISTENERS DE INTERACCIÓN
btnAgregarNota.addEventListener("click", () => {
  const nota = parseFloat(inpNuevaNota.value);
  if (!isNaN(nota) && nota >= 0 && nota <= 10) {
    estudiante.agregarNota(nota);
    inpNuevaNota.value = "";
    actualizarVista();
  } else {
    alert("Por favor, introduce una nota válida entre 0 y 10.");
  }
});

btnCambiarCiudad.addEventListener("click", () => {
  const ciudad = inpNuevaCiudad.value.trim();
  if (ciudad !== "") {
    // Modificamos propiedad anidada directamente
    estudiante.direccion.ciudad = ciudad;
    inpNuevaCiudad.value = "";
    actualizarVista();
  }
});

// Inicialización
actualizarVista();
