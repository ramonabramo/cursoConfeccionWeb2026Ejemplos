/**
 * Mostrar los numeros en salida
 */

const numeros = [1, 4, 5, 6, 7];
const divSalida = document.querySelector("#salida");

// mostrar los numeros en salida

// utilizando con for
for (let c = 0; c < numeros.length; c++) {
    divSalida.innerHTML += `<p>indice:${c} - ${numeros[c]}</p>`;
}

// utilizando foreach

numeros.forEach(function (numero, c) {
    divSalida.innerHTML += `<p>indice:${c} - ${numero}</p>`;
});


/**
 * Mostrar las palabras en pantalla solo con foreach
 */
const palabras = ['sol', 'mar', 'montaña', 'bosque', 'rio'];
