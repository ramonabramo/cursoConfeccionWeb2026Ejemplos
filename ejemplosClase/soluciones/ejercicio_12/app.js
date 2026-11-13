/**
 * EJERCICIO 12 - INYECCIÓN DE HTML DINÁMICO CON TEMPLATE LITERALS E INNERHTML (SOLUCIÓN)
 *
 * Objetivo:
 * Calcular área y perímetro de un rectángulo y construir dinámicamente toda la estructura HTML de salida con backticks e inyectarla con .innerHTML.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar variables para lado1, lado2, area y perimetro.
 * - 2 PASO: Crear una constante al DOM que apunte al contenedor #salida.
 * - 3 PASO: Pedir lado1 y lado2 con Number(prompt(...)).
 * - 4 PASO: Calcular area = lado1 * lado2 y perimetro = 2 * lado1 + 2 * lado2.
 * - 5 PASO: Asignar a divSalida.innerHTML una plantilla con la lista <ul> y los 4 <li> construidos con template literals.
 */

// 1. variables y constantes
let lado1 = 0;
let lado2 = 0;
let area = 0;
let perimetro = 0;

// 2. constantes al DOM
const divSalida = document.querySelector('#salida');

// 3. entradas
lado1 = Number(prompt('Introduce el lado 1'));
lado2 = Number(prompt('Introduce el lado 2'));

// 4. procesamiento
area = lado1 * lado2;
perimetro = 2 * lado1 + 2 * lado2;

// 5. salidas
divSalida.innerHTML = `
  <ul>
    <li><strong>Lado 1:</strong> ${lado1}</li>
    <li><strong>Lado 2:</strong> ${lado2}</li>
    <li><strong>Área:</strong> ${area}</li>
    <li><strong>Perímetro:</strong> ${perimetro}</li>
  </ul>
`;
