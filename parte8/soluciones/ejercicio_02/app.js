/**
 * ENUNCIADO:
 * Ejercicio 02 (Solución): Parámetros Rest (...gastos) y Early Return.
 */

// 1. variables y constantes de estado

// 2. constantes al DOM
const inputCategoria = document.querySelector('#inputCategoria');
const inputPrecios = document.querySelector('#inputPrecios');
const btnCalcularRest = document.querySelector('#btnCalcularRest');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares
function calcularPresupuesto(categoria = 'General', ...gastos) {
    // Early return si no se pasaron partidas de gasto
    if (gastos.length === 0) {
        return '⚠️ No se registraron partidas de gasto para calcular.';
    }

    let sumaTotal = 0;
    for (const importe of gastos) {
        sumaTotal += importe;
    }

    const media = sumaTotal / gastos.length;

    return `
        Presupuesto de <strong>${categoria}</strong>:<br>
        • Total de partidas procesadas: <strong>${gastos.length}</strong><br>
        • Importe total acumulado: <strong>${sumaTotal.toFixed(2)} €</strong><br>
        • Importe medio por partida: <strong>${media.toFixed(2)} €</strong>
    `;
}

// 4. funciones de eventos
function procesarGastos() {
    const categoria = inputCategoria.value.trim() !== '' ? inputCategoria.value.trim() : undefined;
    const textoPrecios = inputPrecios.value.trim();

    if (textoPrecios === '') {
        resultado.innerHTML = calcularPresupuesto(categoria);
        return;
    }

    // Convertimos la cadena "12, 45, 8" en un array de números [12, 45, 8]
    const listaNumeros = textoPrecios
        .split(',')
        .map(p => Number(p.trim()))
        .filter(n => !isNaN(n) && n > 0);

    // Invocamos pasando los números con el operador spread
    const informe = calcularPresupuesto(categoria, ...listaNumeros);
    resultado.innerHTML = informe;
}

// 5. escuchadores de eventos
btnCalcularRest.addEventListener('click', procesarGastos);
