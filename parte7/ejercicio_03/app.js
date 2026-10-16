/**
 * ENUNCIADO:
 * Ejercicio 03 (Teoría Guiada): Bucle 'while' secuencial.
 *
 * El bucle 'while (condición)' repite un bloque de instrucciones MIENTRAS su condición sea verdadera.
 * A diferencia del 'for', el bucle 'while' no tiene cabecera de 3 partes, por lo que el programador
 * es responsable directo de controlar:
 *
 * 1. Inicialización fuera del bucle: let i = 0;
 * 2. Condición de parada: while (i < array.length) { ... }
 * 3. Incremento obligatorio dentro del cuerpo: i++;
 *
 * ⚠️ ¡PELIGRO DE BUCLE INFINITO!
 * Si olvidas escribir i++, el valor de 'i' nunca cambiará, la condición siempre será verdadera
 * y el navegador se congelará.
 */

// estructura del programa principal

// 1. variables y constantes de estado
const pacientes = ['Carlos', 'Ana', 'Beatriz', 'David', 'Elena'];

// 2. constantes al DOM
const btnAtender = document.querySelector('#btnAtender');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares

// 4. funciones de eventos
function procesarColaWhile() {
    let mensaje = 'Atendiendo pacientes con bucle while:<br>';

    // 1. Inicialización obligatoria fuera del bucle
    let i = 0;

    // 2. Condición de permanencia
    while (i < pacientes.length) {
        mensaje += `• Turno #${i + 1}: Atendiendo a <strong>${pacientes[i]}</strong> (índice: ${i})<br>`;

        // 3. ¡Incremento manual obligatorio para avanzar y evitar bucle infinito!
        i++;
    }

    mensaje += `<br>Todos los pacientes (${i}) han sido atendidos correctamente.`;
    resultado.innerHTML = mensaje;
}

// 5. escuchadores de eventos
btnAtender.addEventListener('click', procesarColaWhile);
