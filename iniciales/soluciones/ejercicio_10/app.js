/**
 * EJERCICIO 10 - CÁLCULO DE POTENCIAS CON OPERADOR ** (SOLUCIÓN)
 *
 * Objetivo:
 * Solicitar la base y el exponente por teclado, calcular la potencia matemática y mostrar cada valor en los span correspondientes.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar variables para base, exponente y resultado.
 * - 2 PASO: Crear constantes al DOM para los spans #base, #exponente y #resultado.
 * - 3 PASO: Pedir la base con Number(prompt("Introduce la base")).
 * - 4 PASO: Pedir el exponente con Number(prompt("Introduce el exponente")).
 * - 5 PASO: Calcular resultado = base ** exponente.
 * - 6 PASO: Mostrar cada valor en su span correspondiente usando template literals.
 */

// 1. variables y constantes
let base = 0;
let exponente = 0;
let resultado = 0;

// 2. constantes al DOM
const spanBase = document.querySelector('#base');
const spanExponente = document.querySelector('#exponente');
const spanResultado = document.querySelector('#resultado');

// 3. entradas
base = Number(prompt("Introduce la base"));
exponente = Number(prompt('Introduce el exponente'));

// 4. procesamiento
resultado = base ** exponente;

// 5. salidas
spanBase.textContent = base;
spanExponente.textContent = exponente;
spanResultado.textContent = `${base} ** ${exponente} = ${resultado}`;
