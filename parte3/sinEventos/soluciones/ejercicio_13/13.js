/**
 * ENUNCIADO:
 * Pedir un numero por teclado (escribir el numero en el div id numero)
 * - si esta entre 5 y 10 mostrar la palabra "premio" en el div id mensaje
 * - en caso contrario mostrar "sigue jugando" en el div id mensaje
 *
 * EJEMPLO DE FUNCIONAMIENTO:
 * - Caso 1 (Número dentro del rango, por ejemplo se introduce el 7):
 *   * En el <div id="numero"> se mostrará: 7
 *   * En el <div id="mensaje"> se mostrará: premio
 *
 * - Caso 2 (Número en el límite del rango, por ejemplo se introduce el 5 o el 10):
 *   * En el <div id="numero"> se mostrará: 5
 *   * En el <div id="mensaje"> se mostrará: premio
 *
 * - Caso 3 (Número fuera del rango, por ejemplo se introduce el 3 o el 15):
 *   * En el <div id="numero"> se mostrará: 3
 *   * En el <div id="mensaje"> se mostrará: sigue jugando
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar las variables (numero, textoMensaje) y las constantes al DOM (#numero y #mensaje).
 * - 2 PASO: Pedir el número por teclado con prompt(), convertirlo con Number() y guardarlo en 'numero'.
 * - 3 PASO: Comprobar con un condicional 'if ... else' y el operador lógico AND (&&) si el número está entre 5 y 10:
 *           * Si (numero >= 5 && numero <= 10) -> asignar "premio" a la variable 'textoMensaje'.
 *           * En caso contrario (else) -> asignar "sigue jugando" a la variable 'textoMensaje'.
 * - 4 PASO: Mostrar las salidas en sus respectivos divs utilizando textContent:
 *           * Escribir 'numero' en el div #numero.
 *           * Escribir 'textoMensaje' en el div #mensaje.
 */

// estructura programa

// declaracion de variables y constantes
let numero = 0;
let textoMensaje = "";

// constantes al DOM
const nodoNumero = document.querySelector("#numero");
const nodoMensaje = document.querySelector("#mensaje");

// gestion de eventos
// constantes al DOM que queremos escuchar
// colocar escuchadores de eventos

// entradas
numero = Number(prompt("Introduce un número"));

// procesamiento
if (numero >= 5 && numero <= 10) {
    textoMensaje = "premio";
} else {
    textoMensaje = "sigue jugando";
}

// salidas
nodoNumero.textContent = numero;
nodoMensaje.textContent = textoMensaje;
