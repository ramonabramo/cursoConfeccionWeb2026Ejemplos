/**
 * ENUNCIADO:
 * Ejercicio 05 (Solución): Bucle 'for...of' (ES6).
 */

// 1. variables y constantes de estado
const destinos = ['París', 'Roma', 'Tokio', 'Londres', 'Nueva York'];

// 2. constantes al DOM
const btnDestinos = document.querySelector('#btnDestinos');
const btnDeletrear = document.querySelector('#btnDeletrear');
const inputPalabra = document.querySelector('#inputPalabra');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares

// 4. funciones de eventos
function mostrarDestinosForOf() {
    let mensaje = 'Destinos turísticos procesados con <strong>for...of</strong>:<br>';

    for (const ciudad of destinos) {
        mensaje += `✈️ Destino: <strong>${ciudad}</strong><br>`;
    }

    resultado.innerHTML = mensaje;
}

function deletrearStringForOf() {
    const texto = inputPalabra.value.trim().toUpperCase();

    if (texto === '') {
        resultado.textContent = 'Introduce una palabra en el campo de texto.';
        return;
    }

    const letrasSeparadas = [];

    for (const letra of texto) {
        letrasSeparadas.push(letra);
    }

    resultado.innerHTML = `Palabra deletreada con for...of:<br><strong>${letrasSeparadas.join(' • ')}</strong> (Total: ${letrasSeparadas.length} letras)`;
}

// 5. escuchadores de eventos
btnDestinos.addEventListener('click', mostrarDestinosForOf);
btnDeletrear.addEventListener('click', deletrearStringForOf);
