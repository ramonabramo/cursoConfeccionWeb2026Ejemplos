/**
 * ENUNCIADO:
 * Ejercicio: Utiliza un 'if' simple para avisar cuando una temperatura
 * se encuentra por debajo de cero.
 *
 * El usuario introducirá una temperatura.
 *
 * El programa mostrará siempre la temperatura introducida.
 *
 * - Si la temperatura es inferior a 0 grados, además deberá añadir
 *   el mensaje "Temperatura bajo cero".
 *
 * EJEMPLO DE FUNCIONAMIENTO:
 *
 * - Caso 1 (Se introduce una temperatura de 8):
 *   * 8 no es inferior a 0.
 *   * Se muestra: "Temperatura registrada: 8 °C".
 *
 * - Caso 2 (Se introduce una temperatura de -4):
 *   * -4 es inferior a 0.
 *   * Se muestra:
 *     "Temperatura registrada: -4 °C. Temperatura bajo cero."
 *

 * EVENTO A UTILIZAR:
 * - El formulario se mantiene para agrupar los controles.
 * - El botón es de tipo 'button'.
 * - Escuchar el evento 'click' del botón con id 'btnComprobar'.
 * - No es necesario utilizar preventDefault().
 * PASOS A REALIZAR:
 *
 * - 1 PASO: Declarar e inicializar las variables:
 *           * temperatura
 *           * mensaje
 *
 * - 2 PASO: Declarar la constante TEMPERATURA_CONGELACION con valor 0.
 *
 * - 3 PASO: Crear las constantes al DOM utilizando querySelector()
 *           para apuntar al botón #btnComprobar, al input temperatura
 *           y al elemento resultado.
 *
 * - 4 PASO: Escuchar el evento 'click' del botón #btnComprobar.
 *
 *
 * - 6 PASO: Obtener la temperatura introducida y convertirla a número.
 *
 * - 7 PASO: Crear inicialmente el mensaje:
 *           "Temperatura registrada: X °C".
 *
 * - 8 PASO: Utilizar un 'if' simple:
 *           * Si temperatura es menor que TEMPERATURA_CONGELACION,
 *             añadir al mensaje ". Temperatura bajo cero."
 *
 * - 9 PASO: Mostrar el mensaje en pantalla.
 */

// estructura programa

// declaracion de variables y constantes
let temperatura = 0;
let mensaje = '';
const TEMPERATURA_CONGELACION = 0;

// constantes al DOM
const btnComprobar = document.querySelector('#btnComprobar');
const inputTemperatura = document.querySelector('#temperatura');
const divResultado = document.querySelector('#resultado');

// gestion de eventos
// escuchar el evento click del botón
btnComprobar.addEventListener('click', function () {
    // entradas
    temperatura = Number(inputTemperatura.value);

    // procesamiento
    mensaje = `Temperatura registrada: ${temperatura} °C`;
    if (temperatura < TEMPERATURA_CONGELACION) {
        mensaje += '. Temperatura bajo cero.';
    }

    // salidas
    divResultado.textContent = mensaje;
});
