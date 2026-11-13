/**
 * ============================================================================
 * PRÁCTICA 1: FICHA DE PERSONAJE (DE VARIABLES SUELTAS A OBJETO LITERAL)
 * ============================================================================
 * Curso: Confección y Publicación de Páginas Web
 * Alumno/a: [Escribe aquí tu nombre]
 *
 * INSTRUCCIONES:
 * Sigue los comentarios paso a paso para completar el ejercicio sin modificar
 * el archivo HTML ni los identificadores (id) existentes.
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// PASO 1: Captura las referencias a los elementos del DOM usando getElementById
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
// PASO 2: Declara el objeto literal "personaje" con sus propiedades y métodos
// ----------------------------------------------------------------------------
const personaje = {
  // 2.1. Propiedades iniciales:
  // - nombre: "Valeria"
  // - clase: "Exploradora"
  // - nivel: 1
  // - vida: 100
  // TODO: Añade aquí las propiedades

  // 2.2. Método recibirDanio(puntos):
  // - Debe restar "puntos" a la propiedad 'vida' usando 'this.vida'.
  // - Evita que la vida baje de 0: si this.vida < 0, asígnale 0.
  // - Devuelve un texto como: `¡${this.nombre} ha recibido ${puntos} puntos de daño!`
  // TODO: Escribe aquí el método recibirDanio(puntos)

  // 2.3. Método curar(puntos):
  // - Si el personaje ya está muerto (this.vida === 0), no se puede curar y debe
  //   devolver: `¡${this.nombre} está fuera de combate y no puede curarse!`
  // - Debe sumar "puntos" a 'this.vida'.
  // - Evita que la vida sobrepase 100: si this.vida > 100, asígnale 100.
  // - Devuelve un texto como: `¡${this.nombre} recupera ${puntos} puntos de salud!`
  // TODO: Escribe aquí el método curar(puntos)

  // 2.4. Método subirNivel():
  // - Debe sumar 1 a 'this.nivel'.
  // - Restaura la salud completa: 'this.vida = 100'.
  // - Devuelve: `¡Subida de nivel! ${this.nombre} alcanza el nivel ${this.nivel}.`
  // TODO: Escribe aquí el método subirNivel()
};

// ----------------------------------------------------------------------------
// PASO 3: Función para volcar los datos del objeto en la pantalla
// ----------------------------------------------------------------------------
function actualizarFicha() {
  // 3.1. Asigna el texto a txtNombre, txtClase, txtNivel y txtVida usando 'personaje.propiedad'
  // TODO: Completa la asignación al DOM
  // txtNombre.textContent = ...;
  // txtClase.textContent = ...;
  // txtNivel.textContent = ...;
  // txtVida.textContent = ...;

  // 3.2. (Opcional recomendado) Actualiza el ancho de la barra de vida:
  // if (barraVida && personaje.vida !== undefined) {
  //   barraVida.style.width = `${personaje.vida}%`;
  //   barraVida.style.backgroundColor = personaje.vida < 30 ? "#ef4444" : "#22c55e";
  // }
}

// ----------------------------------------------------------------------------
// PASO 4: Escuchadores de eventos para los botones
// ----------------------------------------------------------------------------

// 4.1. Botón Daño: llama a personaje.recibirDanio(20), actualiza la ficha y muestra el mensaje
btnDanio.addEventListener("click", () => {
  // TODO: Descomenta y completa cuando tengas implementado el método:
  // const mensaje = personaje.recibirDanio(20);
  // registro.textContent = mensaje;
  // actualizarFicha();
});

// 4.2. Botón Curar: llama a personaje.curar(15), actualiza la ficha y muestra el mensaje
btnCurar.addEventListener("click", () => {
  // TODO: Descomenta y completa cuando tengas implementado el método:
  // const mensaje = personaje.curar(15);
  // registro.textContent = mensaje;
  // actualizarFicha();
});

// 4.3. Botón Subir Nivel: llama a personaje.subirNivel(), actualiza y muestra mensaje
btnNivel.addEventListener("click", () => {
  // TODO: Descomenta y completa cuando tengas implementado el método:
  // const mensaje = personaje.subirNivel();
  // registro.textContent = mensaje;
  // actualizarFicha();
});

// ----------------------------------------------------------------------------
// PASO 5: Llamada inicial para pintar los datos por primera vez
// ----------------------------------------------------------------------------
// actualizarFicha();
