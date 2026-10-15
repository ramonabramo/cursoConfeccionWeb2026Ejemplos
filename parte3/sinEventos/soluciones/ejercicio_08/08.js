/**
 * EJERCICIO 07 - IF ANIDADOS Y OPERADORES LÓGICOS (MAYOR DE TRES NÚMEROS)
 *
 * Enunciado:
 * Pedir tres números por teclado e indicar en el div #salida cuál de los
 * tres es el mayor (o si los tres son iguales).
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar las variables (numero1, numero2, numero3, mensaje) y la constante del div #salida.
 * - 2 PASO: Pedir los tres números mediante prompt() y convertirlos con Number().
 * - 3 PASO: Comparar los tres números usando 'if ... else if ... else' y el operador lógico AND (&&):
 *           * Si (numero1 >= numero2 && numero1 >= numero3), el mayor es numero1 (controlando antes si los 3 son iguales).
 *           * Si no, si (numero2 >= numero1 && numero2 >= numero3), el mayor es numero2.
 *           * En caso contrario (else), el mayor es numero3.
 * - 4 PASO: Mostrar el resultado en el div #salida.
 */

// estructura programa

// declaracion de variables y constantes
let numero1 = 0;
let numero2 = 0;
let numero3 = 0;
let mensaje = "";

// constantes al DOM
const divSalida = document.querySelector("#salida");

// gestion de eventos
// constantes al DOM que queremos escuchar
// colocar escuchadores de eventos

// entradas
numero1 = Number(prompt("Introduce el primer número"));
numero2 = Number(prompt("Introduce el segundo número"));
numero3 = Number(prompt("Introduce el tercer número"));

// procesamiento
if (numero1 === numero2 && numero2 === numero3) {
    mensaje = "Los tres números son iguales";
} else if (numero1 >= numero2 && numero1 >= numero3) {
    mensaje = `El mayor es: ${numero1}`;
} else if (numero2 >= numero1 && numero2 >= numero3) {
    mensaje = `El mayor es: ${numero2}`;
} else {
    mensaje = `El mayor es: ${numero3}`;
}

// salidas
divSalida.textContent = mensaje;
