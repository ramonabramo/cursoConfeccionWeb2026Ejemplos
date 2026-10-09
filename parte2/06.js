/**
 * Crear un formulario con un input type number y un boton
 * 
 * En el input escribir el lado de un cuadrado
 * El programa me tiene que 
 * calcular el area de un cuadrado
 * calcular el perimetro de un cuadrado
 * mostrar el lado en su span salida
 * 
 * quiero que dibuje el cuadrado con svg
 * 
 * Lo tiene que realizar cuando pulse el boton
 */

// variables y constantes globales

// gestion de eventos
// constantes al DOM que queremos escuchar
const boton = document.querySelector('button');

// colocar escuchadores de eventos
boton.addEventListener('click', function () {

    // estructura del programa

    // declaracion de variables y constantes
    let lado = 0;
    let area = 0;
    let perimetro = 0;

    // constantes al DOM
    const spanLado = document.querySelector('#lado');
    const spanArea = document.querySelector('#area');
    const spanPerimetro = document.querySelector('#perimetro');
    const inputLado = document.querySelector('#inputLado');

    // entradas
    lado = Number(inputLado.value);

    // procesamiento

    area = lado * lado;
    perimetro = 4 * lado;

    // salidas
    spanLado.innerHTML = lado;
    spanArea.innerHTML = area;
    spanPerimetro.innerHTML = perimetro;
});


