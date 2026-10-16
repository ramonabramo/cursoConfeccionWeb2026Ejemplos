/**
 * ENUNCIADO:
 * Ejercicio 09 (Solución): Método 'forEach()' y sus parámetros.
 */

// 1. variables y constantes de estado
const puntuaciones = [95, 82, 67, 100, 74, 88];

// 2. constantes al DOM
const btnRanking = document.querySelector('#btnRanking');
const btnEstadisticas = document.querySelector('#btnEstadisticas');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares

// 4. funciones de eventos
function generarRanking() {
    let mensaje = 'Clasificación oficial generada con <strong>forEach(elemento, indice, array)</strong>:<br>';

    puntuaciones.forEach(function (puntos, indice, arrayOriginal) {
        mensaje += `• Puesto #${indice + 1}: <strong>${puntos} puntos</strong> (participante ${indice + 1} de ${arrayOriginal.length})<br>`;
    });

    resultado.innerHTML = mensaje;
}

function calcularEstadisticas() {
    let sumaTotal = 0;
    let destacados = 0;

    puntuaciones.forEach(function (puntos) {
        sumaTotal += puntos;
        if (puntos >= 85) {
            destacados++;
        }
    });

    const media = sumaTotal / puntuaciones.length;

    resultado.innerHTML = `
        Análisis estadístico con forEach:<br>
        • Total de participantes: <strong>${puntuaciones.length}</strong><br>
        • Puntuación media: <strong>${media.toFixed(2)} puntos</strong><br>
        • Puntuaciones destacadas (>= 85 pts): <strong>${destacados} participantes</strong>
    `;
}

// 5. escuchadores de eventos
btnRanking.addEventListener('click', generarRanking);
btnEstadisticas.addEventListener('click', calcularEstadisticas);
