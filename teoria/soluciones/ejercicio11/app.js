// tengo un array con los parrafos (NodeList)
const parrafos = document.querySelectorAll('p');

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




