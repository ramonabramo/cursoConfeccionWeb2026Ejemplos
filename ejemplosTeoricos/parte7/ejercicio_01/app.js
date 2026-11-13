/**
 * ENUNCIADO:
 * Ejercicio 01 (Teoría Guiada): Bucle 'for' clásico con arrays numéricos.
 *
 * El bucle 'for' tradicional es la estructura de repetición con contador más conocida.
 * Consta de tres expresiones separadas por punto y coma:
 *
 * for (inicialización; condición; incremento) {
 *     // bloque que se repite en cada vuelta
 * }
 *
 * 1. Inicialización (let i = 0): Se ejecuta una sola vez al arrancar el bucle.
 * 2. Condición (i < array.length): Se evalúa antes de cada iteración; si es true continúa, si es false termina.
 * 3. Incremento (i++): Se ejecuta al terminar cada vuelta, antes de volver a comprobar la condición.
 *
 * CONCEPTOS CLAVE:
 * - Recorrido ascendente: for (let i = 0; i < array.length; i++)
 * - Recorrido inverso: for (let i = array.length - 1; i >= 0; i--)
 * - Saltos personalizados: for (let i = 0; i < array.length; i += 2)
 */

// estructura del programa principal

// 1. variables y constantes de estado
const temperaturas = [15, 24, 8, 31, 19, 42, 12];

// 2. constantes al DOM
const btnAscendente = document.querySelector('#btnAscendente');
const btnInverso = document.querySelector('#btnInverso');
const btnPares = document.querySelector('#btnPares');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares

// 4. funciones de eventos
// 4.1. Recorrido normal ascendente
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

// 4.2. Recorrido inverso hacia atrás
function recorridoInverso() {
    let mensaje = 'Recorrido Inverso (hacia atrás desde el final):<br>';

    for (let i = temperaturas.length - 1; i >= 0; i--) {
        mensaje += `• Posición [${i}]: ${temperaturas[i]} °C<br>`;
    }

    resultado.innerHTML = mensaje;
}

// 4.3. Recorrido con saltos de 2 en 2 (posiciones pares)
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
