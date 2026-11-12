/**
 * EJEMPLO DE CLASE 02 · setInterval() y clearInterval()
 * Curso: Confección y Publicación de Páginas Web
 * Profesor: Ramón Abramo
 *
 * ENUNCIADO:
 * Crear un metrónomo o reloj repetitivo que imprima periódicamente por consola
 * el mensaje "tic tac" cada 2 segundos (2000 ms), y programar un botón en la página
 * para detener el intervalo en cualquier momento llamando a clearInterval().
 *
 * PASOS EXPLICADOS EN CLASE:
 * 1. Iniciar el bucle repetitivo con setInterval() a 2000 ms y almacenar su ID en idReloj.
 * 2. Capturar el botón de parada en el DOM.
 * 3. Al hacer clic, ejecutar clearInterval(idReloj) para frenar el intervalo definitivamente.
 */

// 1. Colocamos un interval periódico cada 2000 ms (2 segundos)
const idReloj = setInterval(() => {
    console.log("tic tac");
}, 2000);

// 2. Coloco un botón para detener el interval
const boton = document.querySelector('button');

// 3. Escuchador para frenar el ciclo en seco
boton.addEventListener('click', () => {
    clearInterval(idReloj);
    console.log("Reloj detenido");
});
