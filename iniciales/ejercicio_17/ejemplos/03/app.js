/**
 * EJEMPLO DE CLASE 03 · Contador con Bandera Booleana (ejecutandose)
 * Curso: Confección y Publicación de Páginas Web
 * Profesor: Ramón Abramo
 *
 * ENUNCIADO:
 * Programar un contador de segundos que actualice una etiqueta <output> cada 1000 ms al pulsar "Iniciar",
 * y que se detenga al pulsar "Parar". Se debe emplear una variable booleana de control (ejecutandose)
 * como mecanismo de protección para impedir que múltiples clics seguidos en "Iniciar" aceleren el contador.
 *
 * PASOS EXPLICADOS EN CLASE:
 * 1. Declarar las variables de estado: contador = 0, idIntervalo = null y ejecutandose = false.
 * 2. Capturar los elementos del DOM (<output>, #iniciar, #parar).
 * 3. En el botón Iniciar: comprobar if (ejecutandose == false). Dentro del callback activar ejecutandose = true,
 *    sumar 1 a contador y pintar en salida.textContent.
 * 4. En el botón Parar: llamar a clearInterval(idIntervalo) y restaurar ejecutandose = false para permitir reanudar.
 */

// 1. Variables de estado
let contador = 0;
let idIntervalo = null;
let ejecutandose = false;

// 2. Referencias al DOM
const salida = document.querySelector('output');
const botonIniciar = document.querySelector('#iniciar');
const botonParar = document.querySelector('#parar');

// 3. Escuchador Iniciar con bandera booleana
botonIniciar.addEventListener('click', () => {
    if (ejecutandose == false) {
        idIntervalo = setInterval(() => {
            ejecutandose = true;
            contador++;
            salida.textContent = contador;
        }, 1000);
    }
});

// 4. Escuchador Parar
botonParar.addEventListener('click', () => {
    clearInterval(idIntervalo);
    ejecutandose = false;
});
