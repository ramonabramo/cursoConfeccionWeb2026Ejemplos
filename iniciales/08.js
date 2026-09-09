// pedir un numero y escribirlo en el div salida
// dibujar un circulo en el div caja con el radio dado por el numero escrito

// variables
let numero = 0;

// constantes
const divSalida = document.querySelector('#salida');
const divCaja = document.querySelector('#caja');

// entradas
numero = Number(prompt('Introduce un numero'));

// procesamiento

// salidas
// escribiendo el numero en el div salida
divSalida.innerHTML = `
        <h2>Numero</h2>
        <p><strong>${numero}</strong></p>
    `;

// cambiando la anchura y la altura del div caja con el numero introduce
divCaja.style.width = `${numero}px`;
divCaja.style.height = `${numero}px`;
