/**
 * ENUNCIADO:
 * Ejercicio: Lectura y acumulación de múltiples inputs numéricos.
 */

// estructura del programa principal

// 1. variables y constantes de estado (no requeridas globales)

// 2. constantes al DOM
const inputsGastos = document.querySelectorAll('.input-gasto');
const btnCalcular = document.querySelector('#btnCalcular');
const btnLimpiar = document.querySelector('#btnLimpiar');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares

// 4. funciones de eventos
function calcularGastos() {
    let total = 0;

    inputsGastos.forEach(function (input) {
        const valor = Number(input.value);
        if (!isNaN(valor) && valor > 0) {
            total += valor;
        }
    });

    const cantidadDias = inputsGastos.length;
    const media = cantidadDias > 0 ? total / cantidadDias : 0;

    resultado.textContent = `Gasto total de la semana: ${total.toFixed(2)} € | Gasto medio diario: ${media.toFixed(2)} € (sobre ${cantidadDias} días).`;
}

function vaciarCampos() {
    inputsGastos.forEach(function (input) {
        input.value = '';
    });
    resultado.textContent = 'Todos los campos de gasto han sido vaciados. Introduce nuevos valores.';
}

// 5. escuchadores de eventos
btnCalcular.addEventListener('click', calcularGastos);
btnLimpiar.addEventListener('click', vaciarCampos);
