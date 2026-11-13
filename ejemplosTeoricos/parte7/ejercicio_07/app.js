/**
 * ENUNCIADO:
 * Ejercicio 07 (Teoría Guiada): Bucle 'for...in' (Claves de Objetos).
 *
 * El bucle 'for...in' está diseñado para iterar sobre los NOMBRES DE LAS PROPIEDADES (claves)
 * de un objeto literal:
 *
 * for (const clave in objeto) {
 *     console.log(clave);           // "marca", "modelo", "anio"... (el nombre de la propiedad)
 *     console.log(objeto[clave]);   // "Toyota", "Corolla", 2024... (el valor asignado a esa clave)
 * }
 *
 * ⚠️ LA GRAN DIFERENCIA ENTRE FOR...IN Y FOR...OF:
 * - for...in itera las CLAVES / PROPIEDADES (para Objetos).
 * - for...of itera los VALORES (para Arrays, Strings y NodeLists).
 *
 * ❌ ¿POR QUÉ NO USAR FOR...IN EN ARRAYS?
 * En un array, for...in itera los índices como CADENAS DE TEXTO ("0", "1", "2") en lugar de números,
 * y además puede recorrer propiedades adicionales o heredadas del prototipo.
 */

// estructura del programa principal

// 1. variables y constantes de estado
const vehiculo = {
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: 2024,
    combustible: 'Híbrido',
    potenciaCV: 140,
    cambio: 'Automático'
};

const arrayEjemplo = ['Rojo', 'Verde', 'Azul'];

// 2. constantes al DOM
const btnInspeccionarObjeto = document.querySelector('#btnInspeccionarObjeto');
const btnDemostrarError = document.querySelector('#btnDemostrarError');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares

// 4. funciones de eventos
// 4.1. Uso correcto de for...in sobre un Objeto literal
function inspeccionarObjeto() {
    let mensaje = 'Propiedades del vehículo inspeccionadas con <strong>for...in</strong>:<br>';

    for (const propiedad in vehiculo) {
        mensaje += `• <strong>${propiedad}:</strong> ${vehiculo[propiedad]}<br>`;
    }

    resultado.innerHTML = mensaje;
}

// 4.2. Demostración de por qué for...in NO debe usarse en Arrays
function demostrarErrorArray() {
    let mensaje = '⚠️ <strong>Demostración de problemas de for...in en Arrays:</strong><br>';

    for (const indice in arrayEjemplo) {
        mensaje += `• Clave devuelta: "${indice}" (Tipo de dato: <strong>${typeof indice}</strong> en vez de number!)<br>`;
    }

    mensaje += `<br>👉 Para arrays, utiliza siempre <strong>for...of</strong> o <strong>forEach()</strong>.`;
    resultado.innerHTML = mensaje;
}

// 5. escuchadores de eventos
btnInspeccionarObjeto.addEventListener('click', inspeccionarObjeto);
btnDemostrarError.addEventListener('click', demostrarErrorArray);
