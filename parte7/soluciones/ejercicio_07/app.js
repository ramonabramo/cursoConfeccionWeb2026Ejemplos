/**
 * ENUNCIADO:
 * Ejercicio 07 (Solución): Bucle 'for...in' (Claves de Objetos).
 */

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
function inspeccionarObjeto() {
    let mensaje = 'Propiedades del vehículo inspeccionadas con <strong>for...in</strong>:<br>';

    for (const propiedad in vehiculo) {
        mensaje += `• <strong>${propiedad}:</strong> ${vehiculo[propiedad]}<br>`;
    }

    resultado.innerHTML = mensaje;
}

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
