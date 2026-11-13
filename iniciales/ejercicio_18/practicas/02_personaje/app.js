/**
 * ============================================================================
 * EJERCICIO 19 - PRÁCTICA 2: FICHA DE PERSONAJE
 * ============================================================================
 * Curso: Confección y Publicación de Páginas Web
 * Alumno/a: [Escribe aquí tu nombre]
 *
 * INSTRUCCIONES:
 * Sigue los comentarios paso a paso para completar el ejercicio.
 * No modifiques el HTML ni los identificadores (id) existentes.
 * ============================================================================
 */

// PASO 1 (ya hecho): constantes que apuntan a los elementos del DOM
// Constantes ya declaradas en el archivo:
const txtNombre = document.getElementById("txtNombre");
const txtClase  = document.getElementById("txtClase");
const txtNivel  = document.getElementById("txtNivel");
const txtVida   = document.getElementById("txtVida");
const registro  = document.getElementById("registro");
const btnDanio  = document.getElementById("btnDanio");
const btnCurar  = document.getElementById("btnCurar");
const btnNivel  = document.getElementById("btnNivel");

// PASO 2: crea el objeto literal "personaje" con sus propiedades y métodos
// Propiedades: nombre ("Valeria"), clase ("Exploradora"), nivel (1), vida (100)
// recibirDanio(puntos): resta "puntos" a this.vida (sin bajar de 0) y devuelve un mensaje
// curar(puntos): suma "puntos" a this.vida (sin pasar de 100) y devuelve un mensaje
// subirNivel(): suma 1 a this.nivel, restaura this.vida a 100 y devuelve un mensaje
const personaje = {
  // TODO: Completa las propiedades y los 3 métodos aquí
};

// PASO 3: completa la función que vuelca las propiedades del objeto en el HTML
function actualizarPantalla() {
  // TODO: Asigna las propiedades de 'personaje' a los textContent del DOM:
  // txtNombre.textContent = ...
  // txtClase.textContent = ...
  // txtNivel.textContent = ...
  // txtVida.textContent = `${personaje.vida} / 100`
}

// PASO 4: añade los escuchadores "click" a btnDanio (20), btnCurar (15) y btnNivel
// En cada clic: llama al método de "personaje", muestra lo que devuelve
// en "registro" y llama a actualizarPantalla()
btnDanio.addEventListener("click", () => {
  // TODO: Llamar a personaje.recibirDanio(20), mostrar texto en registro y llamar a actualizarPantalla()
});

btnCurar.addEventListener("click", () => {
  // TODO: Llamar a personaje.curar(15), mostrar texto en registro y llamar a actualizarPantalla()
});

btnNivel.addEventListener("click", () => {
  // TODO: Llamar a personaje.subirNivel(), mostrar texto en registro y llamar a actualizarPantalla()
});

// PASO 5: llama a actualizarPantalla() para pintar los datos al cargar la página
// actualizarPantalla();
