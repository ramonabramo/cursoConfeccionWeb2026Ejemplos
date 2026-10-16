/**
 * ENUNCIADO:
 * Ejercicio: Selección múltiple con querySelectorAll() y lectura por índices.
 */

// estructura del programa principal

// 1. variables y constantes de estado (no se requieren variables mutables en este ejercicio)

// 2. constantes al DOM
const cajas = document.querySelectorAll('.caja');
const btnContar = document.querySelector('#btnContar');
const btnPrimera = document.querySelector('#btnPrimera');
const btnUltima = document.querySelector('#btnUltima');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares
function limpiarDestacadas() {
    cajas.forEach(function (caja) {
        caja.classList.remove('destacada');
    });
}

// 4. funciones de eventos
function contarCajas() {
    limpiarDestacadas();
    const total = cajas.length;
    resultado.textContent = `Se han encontrado ${total} cajas en el documento HTML.`;
}

function destacarPrimera() {
    limpiarDestacadas();
    if (cajas.length > 0) {
        const primera = cajas[0];
        primera.classList.add('destacada');
        resultado.textContent = `La primera caja (índice 0) contiene: "${primera.textContent.trim()}".`;
    }
}

function destacarUltima() {
    limpiarDestacadas();
    if (cajas.length > 0) {
        const ultimoIndice = cajas.length - 1;
        const ultima = cajas[ultimoIndice];
        ultima.classList.add('destacada');
        resultado.textContent = `La última caja (índice ${ultimoIndice}) contiene: "${ultima.textContent.trim()}".`;
    }
}

// 5. escuchadores de eventos
btnContar.addEventListener('click', contarCajas);
btnPrimera.addEventListener('click', destacarPrimera);
btnUltima.addEventListener('click', destacarUltima);
