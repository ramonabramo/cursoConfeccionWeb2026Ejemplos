/**
 * ENUNCIADO:
 * Ejercicio 01 (Solución): Bucle 'for' clásico con arrays numéricos.
 */

// 1. variables y constantes de estado
const temperaturas = [15, 24, 8, 31, 19, 42, 12];

// 2. constantes al DOM
const btnAscendente = document.querySelector('#btnAscendente');
const btnInverso = document.querySelector('#btnInverso');
const btnPares = document.querySelector('#btnPares');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares

// 4. funciones de eventos
function recorridoAscendente() {
    let mensaje = 'Recorrido Ascendente (de 0 a ' + (temperaturas.length - 1) + '):<br>';
    let suma = 0;

    for (let i = 0; i < temperaturas.length; i++) {
        mensaje += `• Posición [${i}]: ${temperaturas[i]} °C<br>`;
        suma += temperaturas[i];
    }

    mensaje += `<br><strong>Suma total:</strong> ${suma} °C`;
    resultado.innerHTML = mensaje;
}

function recorridoInverso() {
    let mensaje = 'Recorrido Inverso (hacia atrás desde el final):<br>';

    for (let i = temperaturas.length - 1; i >= 0; i--) {
        mensaje += `• Posición [${i}]: ${temperaturas[i]} °C<br>`;
    }

    resultado.innerHTML = mensaje;
}

function recorridoPares() {
    let mensaje = 'Recorrido en posiciones pares (salto i += 2):<br>';

    for (let i = 0; i < temperaturas.length; i += 2) {
        mensaje += `• Índice par [${i}]: ${temperaturas[i]} °C<br>`;
    }

    resultado.innerHTML = mensaje;
}

// 5. escuchadores de eventos
btnAscendente.addEventListener('click', recorridoAscendente);
btnInverso.addEventListener('click', recorridoInverso);
btnPares.addEventListener('click', recorridoPares);
