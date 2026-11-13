/**
 * ENUNCIADO:
 * Ejercicio 03 (Solución): Bucle 'while' secuencial.
 */

// 1. variables y constantes de estado
const pacientes = ['Carlos', 'Ana', 'Beatriz', 'David', 'Elena'];

// 2. constantes al DOM
const btnAtender = document.querySelector('#btnAtender');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares

// 4. funciones de eventos
function procesarColaWhile() {
    let mensaje = 'Atendiendo pacientes con bucle while:<br>';
    let i = 0;

    while (i < pacientes.length) {
        mensaje += `• Turno #${i + 1}: Atendiendo a <strong>${pacientes[i]}</strong> (índice: ${i})<br>`;
        i++;
    }

    mensaje += `<br>Todos los pacientes (${i}) han sido atendidos correctamente.`;
    resultado.innerHTML = mensaje;
}

// 5. escuchadores de eventos
btnAtender.addEventListener('click', procesarColaWhile);
