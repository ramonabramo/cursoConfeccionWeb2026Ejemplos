/**
 * Cambiar el contenido de los dos div cada vez que pulso el boton
 */

// variables y constantes globales


// gestion de eventos
// constantes al DOM que queremos escuchar

const boton = document.querySelector('#boton');

// colocar escuchadores de eventos
boton.addEventListener('click', function () {

    // estructura del programa
    // variables y constantes
    let contenidoOrigen = '';
    let contenidoDestino = '';


    // constantes al DOM
    const origen = document.querySelector('#origen');
    const destino = document.querySelector('#destino');

    // entradas
    contenidoOrigen = origen.textContent;
    contenidoDestino = destino.textContent;


    // procesamiento

    // salidas
    origen.textContent = contenidoDestino;
    destino.textContent = contenidoOrigen;


});