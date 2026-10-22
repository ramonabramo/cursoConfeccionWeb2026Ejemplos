/**
 * Cuando pincho en una celda se cambia a color rojo 
 */
function cambiarColor(e) {
    // celda sobre la que he pulsado
    const celda = e.target;

    // cambiar color de la celda
    celda.style.backgroundColor = 'red';
}


const celdas = document.querySelectorAll("td");

celdas[0].addEventListener('click', cambiarColor);
celdas[1].addEventListener('click', cambiarColor);
celdas[2].addEventListener('click', cambiarColor);
celdas[3].addEventListener('click', cambiarColor);



