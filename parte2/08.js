/**
 * Cuando pulso el boton cambiar el contenido de los dos inputs
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
    contenidoOrigen = origen.value;
    contenidoDestino = destino.value;

    // procesamiento
    origen.value = contenidoDestino;
    destino.value = contenidoOrigen;
});