/**
 * EJERCICIO 05 - SUMA DE DOS NÚMEROS Y CONVERSIÓN CON NUMBER() (SOLUCIÓN)
 *
 * Objetivo:
 * Solicitar dos números por teclado mediante prompt(), convertirlos con Number() para evitar la concatenación de texto, sumarlos y mostrar el resultado.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar variables para numero1, numero2 y suma, inicializadas a 0.
 * - 2 PASO: Pedir el primer número con prompt() y convertirlo con Number().
 * - 3 PASO: Pedir el segundo número con prompt() y convertirlo con Number().
 * - 4 PASO: Calcular la suma aritmética: suma = numero1 + numero2.
 * - 5 PASO: Mostrar el resultado con alert() usando template literals y registrarlo en la consola con console.log().
 */

// 1. variables y constantes
let numero1 = 0;
let numero2 = 0;
let suma = 0;

// 2. entradas
numero1 = Number(prompt("Introduce el primer numero"));
numero2 = Number(prompt("Introduce el segundo numero"));

// 3. procesamiento
suma = numero1 + numero2;

// 4. salidas
alert(`El resultado es ${suma}`);
console.log(`Suma de ${numero1} + ${numero2} = ${suma}`);
