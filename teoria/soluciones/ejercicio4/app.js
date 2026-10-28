
function mostrar(eventito) {
    // constante apunta al div salida
    const salida = document.querySelector("#salida");

    const etiquetaDondePincho = eventito.target;
    const contenidoEtiqueta = etiquetaDondePincho.textContent;


    // muestra en el div Salida el texto del parrafo
    salida.textContent = contenidoEtiqueta;

}



// 3 parrafos con escuchador
const parrafos = document.querySelectorAll('p');


parrafos[0].addEventListener("click", mostrar);
parrafos[1].addEventListener("click", mostrar);
parrafos[2].addEventListener("click", mostrar);



