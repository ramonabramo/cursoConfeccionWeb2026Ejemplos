/**
 * Cuando pulso en el boton de color rojo cambiar el color de los 3 divs circulos a rojo
 * cuando pulso en el boton de color azul cambiar el color de los 3 divs circulos a azul
 * cuando pulso en el boton de color verde cambiar el color de los 3 divs circulos a verde
 */


// variables y constantes globales



// gestion de eventos
// constantes al DOM que queremos escuchar

// colocar escuchadores de eventos
const botonRojo = document.querySelector('#botonRojo');
const botonAzul = document.querySelector('#botonAzul');
const botonVerde = document.querySelector('#botonVerde');



// colocar escuchadores de eventos
botonRojo.addEventListener('click', function () {
    // constantes y variables
    const color = "red";

    // constantes al DOM
    const circulo1 = document.querySelector('#circulo1');
    const circulo2 = document.querySelector('#circulo2');
    const circulo3 = document.querySelector('#circulo3');
    // entradas

    // procesamiento

    // salidas
    circulo1.style.backgroundColor = color;
    circulo2.style.backgroundColor = color;
    circulo3.style.backgroundColor = color;
});

botonAzul.addEventListener('click', function () {
    // estructura del programa
    // declaracion de variables y constantes
    const color = "blue";

    // constantes al DOM
    const circulo1 = document.querySelector('#circulo1');
    const circulo2 = document.querySelector('#circulo2');
    const circulo3 = document.querySelector('#circulo3');

    // entradas

    // procesamiento

    // salidas
    circulo1.style.backgroundColor = color;
    circulo2.style.backgroundColor = color;
    circulo3.style.backgroundColor = color;
});

botonVerde.addEventListener('click', function () {
    // estructura del programa
    // declaracion de variables y constantes
    const color = "green";

    // constantes al DOM
    const circulo1 = document.querySelector('#circulo1');
    const circulo2 = document.querySelector('#circulo2');
    const circulo3 = document.querySelector('#circulo3');

    // entradas

    // procesamiento

    // salidas
    circulo1.style.backgroundColor = color;
    circulo2.style.backgroundColor = color;
    circulo3.style.backgroundColor = color;

});


