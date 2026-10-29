/*
Quiero que cuando pinche en los parrafos en el div salida me coloque el texto del ultimo parrafo que pincho.

Quiero que cuando pincho en las celdas en el div pantalla me coloque el texto de la celda que pincho concatenado con el texto del div pantalla.
*/


// tengo un array con los parrafos (NodeList)
const parrafos = document.querySelectorAll('p');

// colocar una array con los td (NodeList)
const celdas = document.querySelectorAll('td');

for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].addEventListener("click", function (eventito) {
        // constante apunta al div salida
        const salida = document.querySelector("#salida");

        const etiquetaDondePincho = eventito.target;
        const contenidoEtiqueta = etiquetaDondePincho.textContent;


        // muestra en el div Salida el texto del parrafo
        salida.textContent = contenidoEtiqueta;

    });
}

// coloco los escuchadores a las celdas
