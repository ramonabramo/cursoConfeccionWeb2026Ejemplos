/**
 * Enunciado
 * Cuando pulsamos sobre una  celda me debe leer el contenido de la celda y mostrarlo en el div con id #salida.
 * 
 * paso1
 * colocar una constante que apunte a cada celda
 * paso2
 * colocar un eventListener sobre cada celda
 * paso3
 * crear una funcion que lea el contenido de la celda y lo muestre en el div
 * 
 */

function mostrar(e) {
    const divSalida = document.querySelector("#salida");

    // entradas
    const contenidoCelda = e.target.textContent;
    // salidas
    divSalida.textContent = contenidoCelda;

}

const celdas = document.querySelectorAll("td");

celdas[0].addEventListener("click", mostrar);
celdas[1].addEventListener("click", mostrar);
celdas[2].addEventListener("click", mostrar);
celdas[3].addEventListener("click", mostrar);


