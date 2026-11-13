/**
 * ============================================================================
 * EJERCICIO 19 - EJEMPLO MANUAL 06: OBJETO INTERACTIVO Y EL DOM
 * ============================================================================
 * Curso: Confección y Publicación de Páginas Web
 * Profesor: Ramón Abramo (Santander, 2026)
 *
 * CONCEPTOS CLAVE TRATADOS:
 * 1. Declaración de un objeto literal con estado (propiedades de números y texto).
 * 2. Métodos que alteran el estado interno usando 'this'.
 * 3. Sincronización visual entre el objeto en memoria RAM y las etiquetas del DOM.
 * ============================================================================
 */

// 1. OBJETO LITERAL CON ESTADO Y MÉTODOS
const mascota = {
  nombre: "Toby",
  tipo: "Perro doméstico",
  energia: 80,
  hambre: 20,
  felicidad: 90,

  // Método: Dar de comer
  alimentar() {
    if (this.hambre <= 0) {
      return `${this.nombre} está lleno y no quiere comer más ahora mismo.`;
    }
    this.hambre = Math.max(0, this.hambre - 20);
    this.energia = Math.min(100, this.energia + 5);
    return `¡Ñam! Le diste de comer a ${this.nombre}. Su hambre ha bajado.`;
  },

  // Método: Jugar a la pelota
  jugar() {
    if (this.energia <= 15) {
      return `¡${this.nombre} está agotado! Necesita dormir antes de seguir jugando.`;
    }
    this.energia = Math.max(0, this.energia - 20);
    this.hambre = Math.min(100, this.hambre + 15);
    this.felicidad = Math.min(100, this.felicidad + 10);
    return `¡Qué divertido! Jugaste a la pelota con ${this.nombre}.`;
  },

  // Método: Dormir la siesta
  dormir() {
    this.energia = 100;
    this.hambre = Math.min(100, this.hambre + 10);
    return `Zzz... ${this.nombre} durmió una siesta y recuperó toda su energía al 100%.`;
  },

  // Método: Dar un baño
  bañar() {
    this.energia = Math.max(0, this.energia - 10);
    this.felicidad = Math.min(100, this.felicidad + 5);
    return `🫧 ${this.nombre} quedó limpio, reluciente y oliendo genial.`;
  }
};

// 2. REFERENCIAS A ELEMENTOS DEL DOM
const txtNombre     = document.getElementById("txtNombre");
const txtTipo       = document.getElementById("txtTipo");
const numEnergia    = document.getElementById("numEnergia");
const barraEnergia  = document.getElementById("barraEnergia");
const numHambre     = document.getElementById("numHambre");
const barraHambre   = document.getElementById("barraHambre");
const txtMensaje    = document.getElementById("txtMensaje");
const salidaObjeto  = document.getElementById("salidaObjeto");

const btnAlimentar  = document.getElementById("btnAlimentar");
const btnJugar      = document.getElementById("btnJugar");
const btnDormir     = document.getElementById("btnDormir");
const btnBañar      = document.getElementById("btnBañar");

/**
 * Función que actualiza todos los componentes visuales del DOM
 * leyendo los valores actuales del objeto 'mascota'.
 */
function actualizarVista(mensaje) {
  // Actualizamos textos
  txtNombre.textContent = mascota.nombre;
  txtTipo.textContent   = mascota.tipo;

  // Actualizamos barras y porcentajes
  numEnergia.textContent = `${mascota.energia}%`;
  barraEnergia.style.width = `${mascota.energia}%`;

  numHambre.textContent = `${mascota.hambre}%`;
  barraHambre.style.width = `${mascota.hambre}%`;

  // Mensaje descriptivo
  if (mensaje) {
    txtMensaje.textContent = mensaje;
  }

  // Volcado del objeto en JSON para inspección visual
  salidaObjeto.textContent = JSON.stringify({
    nombre: mascota.nombre,
    tipo: mascota.tipo,
    energia: mascota.energia,
    hambre: mascota.hambre,
    felicidad: mascota.felicidad
  }, null, 2);
}

// 3. ASIGNACIÓN DE EVENTOS A LOS BOTONES
btnAlimentar.addEventListener("click", () => {
  const respuesta = mascota.alimentar();
  actualizarVista(respuesta);
});

btnJugar.addEventListener("click", () => {
  const respuesta = mascota.jugar();
  actualizarVista(respuesta);
});

btnDormir.addEventListener("click", () => {
  const respuesta = mascota.dormir();
  actualizarVista(respuesta);
});

btnBañar.addEventListener("click", () => {
  const respuesta = mascota.bañar();
  actualizarVista(respuesta);
});

// Render inicial
actualizarVista();
