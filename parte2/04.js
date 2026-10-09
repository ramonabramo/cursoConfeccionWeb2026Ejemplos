/**
 * En un formulario con 2 cajas de tipo numero
 * Colocar 4 botones que nos permitan 
 * sumar
 * restar
 * multiplicar 
 * dividir 
 * 
 * Al pulsar un boton mostrar el resultado lo quiero en un div llamado salida
 */

// estructura del programa principal

// declaracion de variables y constantes globales

// constantes al DOM

// gestion de eventos

// constantes al DOM
// solo apuntamos a los elementos que queramos colocar escuchador
const botonSumar = document.querySelector('#botonSumar');
const botonRestar = document.querySelector('#botonRestar');
const botonMultiplicar = document.querySelector('#botonMultiplicar');
const botonDividir = document.querySelector('#botonDividir');

// colocar escuchadores de eventos a cada elemento




botonSumar.addEventListener('click', function () {
    // estructura del programa

    // declaracion de variables y constantes
    let numero1 = 0;
    let numero2 = 0;
    let resultado = 0;

    // constantes al DOM
    const nodoSalida = document.querySelector('#salida');
    const inputNumero1 = document.querySelector('#numero1');
    const inputNumero2 = document.querySelector('#numero2');

    // entradas
    numero1 = Number(inputNumero1.value);
    numero2 = Number(inputNumero2.value);

    // procesamiento
    resultado = numero1 + numero2;

    // salidas
    nodoSalida.innerHTML = resultado;

});

botonRestar.addEventListener('click', function () {
    // estructura del programa

    // declaracion de variables y constantes
    let numero1 = 0;
    let numero2 = 0;
    let resultado = 0;

    // constantes al DOM
    const nodoSalida = document.querySelector('#salida');
    const inputNumero1 = document.querySelector('#numero1');
    const inputNumero2 = document.querySelector('#numero2');

    // entradas
    numero1 = Number(inputNumero1.value);
    numero2 = Number(inputNumero2.value);

    // procesamiento
    resultado = numero1 - numero2;

    // salidas
    nodoSalida.innerHTML = resultado;

});

botonMultiplicar.addEventListener('click', function () {
    // estructura del programa

    // declaracion de variables y constantes
    let numero1 = 0;
    let numero2 = 0;
    let resultado = 0;

    // constantes al DOM
    const nodoSalida = document.querySelector('#salida');
    const inputNumero1 = document.querySelector('#numero1');
    const inputNumero2 = document.querySelector('#numero2');

    // entradas
    numero1 = Number(inputNumero1.value);
    numero2 = Number(inputNumero2.value);

    // procesamiento
    resultado = numero1 * numero2;

    // salidas
    nodoSalida.innerHTML = resultado;

});

botonDividir.addEventListener('click', function () {
    // estructura del programa

    // declaracion de variables y constantes
    let numero1 = 0;
    let numero2 = 0;
    let resultado = 0;

    // constantes al DOM
    const nodoSalida = document.querySelector('#salida');
    const inputNumero1 = document.querySelector('#numero1');
    const inputNumero2 = document.querySelector('#numero2');

    // entradas
    numero1 = Number(inputNumero1.value);
    numero2 = Number(inputNumero2.value);

    // procesamiento
    resultado = numero1 / numero2;

    // salidas
    nodoSalida.innerHTML = resultado;

});

