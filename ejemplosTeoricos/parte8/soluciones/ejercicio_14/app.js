/**
 * ENUNCIADO:
 * Ejercicio 14 (Solución): Funciones Puras vs Impuras.
 */

// 1. variables y constantes de estado

// 2. constantes al DOM
const inputSalario = document.querySelector('#inputSalario');
const inputRetencion = document.querySelector('#inputRetencion');
const inputBonus = document.querySelector('#inputBonus');
const btnCalcularNominaPura = document.querySelector('#btnCalcularNominaPura');
const resultado = document.querySelector('#resultado');

// 3. Función 100% PURA (Determinista, sin efectos secundarios, sin acceso al DOM)
function calcularLiquidacionNomina(bruto, irpfPorcentaje, bonus = 0) {
    const baseTotal = bruto + bonus;
    const deduccionIrpf = baseTotal * (irpfPorcentaje / 100);
    const netoFinal = baseTotal - deduccionIrpf;

    return {
        brutoBase: bruto,
        bonusAplicado: bonus,
        irpfPorcentaje: irpfPorcentaje,
        deduccionEuros: deduccionIrpf,
        netoFinal: netoFinal
    };
}

// 4. Función IMPURA (Maneja el DOM, lee inputs y produce efectos secundarios en pantalla)
function manejarCalculoNomina() {
    const salario = Number(inputSalario.value);
    const irpf = Number(inputRetencion.value);
    const bonus = Number(inputBonus.value);

    // Invocamos a la función pura pasándole los argumentos
    const liquidacion = calcularLiquidacionNomina(salario, irpf, bonus);

    // Pintamos en el DOM (efecto secundario)
    resultado.innerHTML = `
        Liquidación de Nómina generada con <strong>Función Pura</strong>:<br>
        • Salario Bruto Base: <strong>${liquidacion.brutoBase.toFixed(2)} €</strong><br>
        • Bonus recibido: <strong>+${liquidacion.bonusAplicado.toFixed(2)} €</strong><br>
        • Retención IRPF (${liquidacion.irpfPorcentaje}%): <strong>-${liquidacion.deduccionEuros.toFixed(2)} €</strong><br>
        • <strong>SALARIO NETO A PERCIBIR: ${liquidacion.netoFinal.toFixed(2)} €</strong><br>
        <em>(La función de cálculo es pura y reutilizable en cualquier entorno: Node.js, tests unitarios o navegador).</em>
    `;
}

// 5. escuchadores de eventos
btnCalcularNominaPura.addEventListener('click', manejarCalculoNomina);
