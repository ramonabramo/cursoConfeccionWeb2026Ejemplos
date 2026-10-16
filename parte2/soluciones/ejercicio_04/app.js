/**
 * EJERCICIO 04 - CALCULADORA BÁSICA CON 4 OPERACIONES INDEPENDIENTES (SOLUCIÓN)
 *
 * Objetivo:
 * Controlar múltiples botones de acción en un formulario, asignando un escuchador independiente a cada botón (+, -, *, /) y convirtiendo datos con Number().
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Capturar los 4 botones: #botonSumar, #botonRestar, #botonMultiplicar y #botonDividir.
 * - 2 PASO: Asignar un escuchador addEventListener("click", ...) a cada botón.
 * - 3 PASO: En cada función, capturar los inputs #numero1 y #numero2 y el contenedor #salida.
 * - 4 PASO: Convertir los valores a número usando Number(input.value).
 * - 5 PASO: Realizar la operación correspondiente y volcar el resultado en nodoSalida.textContent.
 */

// 1. constantes al DOM que queremos escuchar
const botonSumar = document.querySelector('#botonSumar');
const botonRestar = document.querySelector('#botonRestar');
const botonMultiplicar = document.querySelector('#botonMultiplicar');
const botonDividir = document.querySelector('#botonDividir');

// 2. colocar escuchadores de eventos a cada elemento
botonSumar.addEventListener('click', function () {
    let numero1 = 0;
    let numero2 = 0;
    let resultado = 0;

    const nodoSalida = document.querySelector('#salida');
    const inputNumero1 = document.querySelector('#numero1');
    const inputNumero2 = document.querySelector('#numero2');

    numero1 = Number(inputNumero1.value);
    numero2 = Number(inputNumero2.value);
    resultado = numero1 + numero2;

    nodoSalida.textContent = resultado;
});

botonRestar.addEventListener('click', function () {
    let numero1 = 0;
    let numero2 = 0;
    let resultado = 0;

    const nodoSalida = document.querySelector('#salida');
    const inputNumero1 = document.querySelector('#numero1');
    const inputNumero2 = document.querySelector('#numero2');

    numero1 = Number(inputNumero1.value);
    numero2 = Number(inputNumero2.value);
    resultado = numero1 - numero2;

    nodoSalida.textContent = resultado;
});

botonMultiplicar.addEventListener('click', function () {
    let numero1 = 0;
    let numero2 = 0;
    let resultado = 0;

    const nodoSalida = document.querySelector('#salida');
    const inputNumero1 = document.querySelector('#numero1');
    const inputNumero2 = document.querySelector('#numero2');

    numero1 = Number(inputNumero1.value);
    numero2 = Number(inputNumero2.value);
    resultado = numero1 * numero2;

    nodoSalida.textContent = resultado;
});

botonDividir.addEventListener('click', function () {
    let numero1 = 0;
    let numero2 = 0;
    let resultado = 0;

    const nodoSalida = document.querySelector('#salida');
    const inputNumero1 = document.querySelector('#numero1');
    const inputNumero2 = document.querySelector('#numero2');

    numero1 = Number(inputNumero1.value);
    numero2 = Number(inputNumero2.value);
    resultado = numero1 / numero2;

    nodoSalida.textContent = resultado;
});
