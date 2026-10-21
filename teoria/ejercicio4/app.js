
function mostrar(eventito) {
    // constante apunta al div salida
    const salida = document.querySelector("#salida");

    const etiquetaDondePincho = eventito.target;
    const contenidoEtiqueta = etiquetaDondePincho.textContent;


    // muestra en el div Salida el texto del parrafo
    salida.textContent = contenidoEtiqueta;

}



// 3 parrafos con escuchador
const parrafo1 = document.querySelector("#parrafo1");
const parrafo2 = document.querySelector("#parrafo2");
const parrafo3 = document.querySelector("#parrafo3");


parrafo1.addEventListener("click", mostrar);
parrafo2.addEventListener("click", mostrar);
parrafo3.addEventListener("click", mostrar);


