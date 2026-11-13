/**
 * ============================================================================
 * PRÁCTICA 1: FICHA DE PERSONAJE · SOLUCIÓN OFICIAL DEL PROFESOR
 * ============================================================================
 * Curso: Confección y Publicación de Páginas Web
 * Profesor: Ramón Abramo
 *
 * EXPLICACIÓN DE LA SOLUCIÓN:
 * En lugar de variables dispersas (let vida = 100, let nivel = 1), encapsulamos
 * todo el estado y el comportamiento en el objeto literal `personaje`.
 * Los métodos usan 'this.vida' y 'this.nivel' garantizando que el personaje
 * sea una entidad autónoma y coherente.
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// PASO 1: Constantes de acceso al DOM
// ----------------------------------------------------------------------------
const txtNombre = document.getElementById("txtNombre");
const txtClase  = document.getElementById("txtClase");
const txtNivel  = document.getElementById("txtNivel");
const txtVida   = document.getElementById("txtVida");
const barraVida = document.getElementById("barraVida");
const registro  = document.getElementById("registro");

const btnDanio  = document.getElementById("btnDanio");
const btnCurar  = document.getElementById("btnCurar");
const btnNivel  = document.getElementById("btnNivel");

// ----------------------------------------------------------------------------
// PASO 2: Creación del objeto literal 'personaje'
// ----------------------------------------------------------------------------
const personaje = {
  nombre: "Valeria",
  clase: "Exploradora",
  nivel: 1,
  vida: 100,

  /**
   * Resta salud al personaje sin bajar nunca de 0
   */
  recibirDanio(puntos) {
    if (this.vida <= 0) {
      return `⚠️ ¡${this.nombre} ya está fuera de combate! No puede recibir más daño.`;
    }

    this.vida -= puntos;
    if (this.vida < 0) {
      this.vida = 0;
    }

    return `⚔️ ¡${this.nombre} recibe ${puntos} pts de daño! Salud actual: ${this.vida}/100.`;
  },

  /**
   * Cura salud al personaje sin sobrepasar el máximo de 100
   */
  curar(puntos) {
    if (this.vida <= 0) {
      return `❌ ¡${this.nombre} está derrotada! Necesita una poción de resurrección para volver.`;
    }

    if (this.vida === 100) {
      return `💚 ${this.nombre} ya se encuentra con la salud al máximo (100 pts).`;
    }

    this.vida += puntos;
    if (this.vida > 100) {
      this.vida = 100;
    }

    return `🧪 ¡${this.nombre} se cura ${puntos} pts! Salud actual: ${this.vida}/100.`;
  },

  /**
   * Sube de nivel e incrementa la vitalidad al 100%
   */
  subirNivel() {
    this.nivel += 1;
    this.vida = 100;
    return `⭐ ¡SUBIDA DE NIVEL! ${this.nombre} alcanza el Nivel ${this.nivel} y regenera su salud al 100%.`;
  }
};

// ----------------------------------------------------------------------------
// PASO 3: Función que traslada el estado del objeto a los elementos HTML
// ----------------------------------------------------------------------------
function actualizarFicha() {
  txtNombre.textContent = personaje.nombre;
  txtClase.textContent = personaje.clase;
  txtNivel.textContent = `Nivel ${personaje.nivel}`;
  txtVida.textContent = `${personaje.vida} / 100`;

  // Barra de progreso de vida
  if (barraVida) {
    barraVida.style.width = `${personaje.vida}%`;

    if (personaje.vida > 50) {
      barraVida.style.backgroundColor = "#22c55e"; // Verde
    } else if (personaje.vida > 20) {
      barraVida.style.backgroundColor = "#eab308"; // Amarillo
    } else {
      barraVida.style.backgroundColor = "#ef4444"; // Rojo peligro
    }
  }
}

// ----------------------------------------------------------------------------
// PASO 4: Escuchadores de eventos para los botones de interacción
// ----------------------------------------------------------------------------
btnDanio.addEventListener("click", () => {
  const msg = personaje.recibirDanio(20);
  registro.textContent = msg;
  actualizarFicha();
});

btnCurar.addEventListener("click", () => {
  const msg = personaje.curar(15);
  registro.textContent = msg;
  actualizarFicha();
});

btnNivel.addEventListener("click", () => {
  const msg = personaje.subirNivel();
  registro.textContent = msg;
  actualizarFicha();
});

// ----------------------------------------------------------------------------
// PASO 5: Carga inicial de datos al abrir la página
// ----------------------------------------------------------------------------
actualizarFicha();
