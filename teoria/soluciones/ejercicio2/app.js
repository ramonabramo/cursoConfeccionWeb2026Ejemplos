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

const celda1 = document.querySelector("#celda1");
const celda2 = document.querySelector("#celda2");
const celda3 = document.querySelector("#celda3");
const celda4 = document.querySelector("#celda4");

celda1.addEventListener("click", mostrar);
celda2.addEventListener("click", mostrar);
celda3.addEventListener("click", mostrar);
celda4.addEventListener("click", mostrar);


