/**
 * Enunciado:
 * - pedir un numero al usuario por teclado
 * - si el numero es positivo el div se coloca en azul
 * - si no lo es el div se coloca en rojo
 *
 * La anchura del div es el numero multiplicado por 10
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar las variables (numero, color, anchura) y la constante para apuntar al div #salida.
 * - 2 PASO: Pedir un número por teclado con prompt(), convertirlo con Number() y almacenarlo en la variable 'numero'.
 * - 3 PASO: Evaluar con una estructura 'if ... else' si el número es positivo:
 *           * Si numero > 0 (o >= 0), guardamos el color 'blue' (azul).
 *           * Si no (else), guardamos el color 'red' (rojo).
 * - 4 PASO: Calcular la anchura multiplicando el número por 10 (anchura = numero * 10).
 * - 5 PASO: Aplicar los estilos al div #salida modificando sus propiedades CSS desde JS:
 *           * divSalida.style.backgroundColor para el color de fondo.
 *           * divSalida.style.width para la anchura (añadiendo la unidad 'px' al final).
 */

// estructura programa

// declaracion de variables y constantes
let numero = 0;
let color = "";
let anchura = 0;

// constantes al DOM
const divSalida = document.querySelector("#salida");

// gestion de eventos
// constantes al DOM que queremos escuchar
// colocar escuchadores de eventos

// entradas
numero = Number(prompt("Introduce un número"));

// procesamiento
if (numero > 0) {
    color = "blue";
} else {
    color = "red";
}

anchura = numero * 10;

// salidas
divSalida.style.backgroundColor = color;
divSalida.style.width = anchura + "px";
