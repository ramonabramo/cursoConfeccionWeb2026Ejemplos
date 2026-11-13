/**
 * ============================================================================
 * EJERCICIO 19 - PRÁCTICA 2: SOLUCIÓN OFICIAL DEL PROFESOR
 * ============================================================================
 * Curso: Confección y Publicación de Páginas Web
 * Profesor: Ramón Abramo
 * ============================================================================
 */

// PASO 1 (ya hecho): constantes que apuntan a los elementos del DOM
const txtNombre = document.getElementById("txtNombre");
const txtClase  = document.getElementById("txtClase");
const txtNivel  = document.getElementById("txtNivel");
const txtVida   = document.getElementById("txtVida");
const registro  = document.getElementById("registro");
const btnDanio  = document.getElementById("btnDanio");
const btnCurar  = document.getElementById("btnCurar");
const btnNivel  = document.getElementById("btnNivel");

// PASO 2: crea el objeto literal "personaje" con sus propiedades y métodos
const personaje = {
  nombre: "Valeria",
  clase: "Exploradora",
  nivel: 1,
  vida: 100,

  recibirDanio(puntos) {
    this.vida -= puntos;
    if (this.vida < 0) {
      this.vida = 0;
    }
    return `${this.nombre} recibe ${puntos} de daño.`;
  },

  curar(puntos) {
    this.vida += puntos;
    if (this.vida > 100) {
      this.vida = 100;
    }
    return `${this.nombre} se cura ${puntos} puntos de vida.`;
  },

  subirNivel() {
    this.nivel += 1;
    this.vida = 100;
    return `¡Subida de nivel! ${this.nombre} alcanza el nivel ${this.nivel}.`;
  }
};

// PASO 3: completa la función que vuelca las propiedades del objeto en el HTML
function actualizarPantalla() {
  txtNombre.textContent = personaje.nombre;
  txtClase.textContent = personaje.clase;
  txtNivel.textContent = personaje.nivel;
  txtVida.textContent = `${personaje.vida} / 100`;
}

// PASO 4: añade los escuchadores "click" a btnDanio (20), btnCurar (15) y btnNivel
btnDanio.addEventListener("click", () => {
  const mensaje = personaje.recibirDanio(20);
  registro.textContent = mensaje;
  actualizarPantalla();
});

btnCurar.addEventListener("click", () => {
  const mensaje = personaje.curar(15);
  registro.textContent = mensaje;
  actualizarPantalla();
});

btnNivel.addEventListener("click", () => {
  const mensaje = personaje.subirNivel();
  registro.textContent = mensaje;
  actualizarPantalla();
});

// PASO 5: llama a actualizarPantalla() para pintar los datos al cargar la página
actualizarPantalla();
