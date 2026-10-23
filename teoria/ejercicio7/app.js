/*
Objetivo: El radar espacial ha detectado movimiento. 
El usuario debe introducir un número en el input y, al pulsar el botón, el programa debe "dibujar" en la pantalla exactamente esa cantidad de naves espaciales (🛸) usando un bucle for.
*/

const OVNI = '🛸';

// escuchador

const boton = document.querySelector('#btnInvadir');

boton.addEventListener('click', function () {
    const inputNaves = document.querySelector('#inputNaves');
    const divRadar = document.querySelector('#pantallaRadar');

    const naves = inputNaves.value;

    let mensaje = '';


    for (let i = 0; i < naves; i++) {
        mensaje += OVNI;
    }

    divRadar.textContent = mensaje;


});


