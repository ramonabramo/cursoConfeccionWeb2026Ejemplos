/*
Pedir dos numeros por teclado y mostrar su suma en pantalla
*/

// declaracion de variables y constantes

let numero1 = 0; // almacenar el valor del primer numero
let numero2 = 0; // almacenar el valor del segundo numero
let suma = 0; // almacenar el valor de la suma

// entradas

numero1 = Number(prompt("Introduce el primer numero"));
numero2 = Number(prompt("Introduce el primer numero"));

// procesamiento
suma = numero1 + numero2;

// salidas
alert(`El resultado es ${suma}`);
console.log(suma);
