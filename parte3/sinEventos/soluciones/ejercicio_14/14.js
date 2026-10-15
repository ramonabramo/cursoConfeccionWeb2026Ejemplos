/**
 * ENUNCIADO:
 * Pedir al usuario una edad y determinar el tipo de entrada en un parque de diversiones:
 *
 * - Si la edad es menor a 5 años, el acceso es gratis. Mostrar "Gratis" en el segundo li.
 * - Si la edad está entre 5 y 12 años, el precio es 10€. Mostrar "10€" en el segundo li.
 * - Si la edad está entre 13 y 18 años, el precio es 15€. Mostrar "15€" en el segundo li.
 * - Si la edad es mayor a 18 años, el precio es 20€. Mostrar "20€" en el segundo li.
 *
 * En función de la edad, colocar el color de fondo del segundo li en verde si el precio es gratis,
 * amarillo si es 10€, naranja si es 15€ y rojo si es 20€.
 * La edad se debe mostrar en el primer <li>, y el precio en el segundo <li>.
 * El color del precio debe cambiar según las condiciones.
 *
 * EJEMPLO DE FUNCIONAMIENTO:
 * - Caso 1 (Se introduce 3 años):
 *   * Primer <li> muestra: "Edad: 3"
 *   * Segundo <li> muestra: "Precio Entrada: Gratis" con color de fondo verde (green).
 *
 * - Caso 2 (Se introduce 8 años):
 *   * Primer <li> muestra: "Edad: 8"
 *   * Segundo <li> muestra: "Precio Entrada: 10€" con color de fondo amarillo (yellow).
 *
 * - Caso 3 (Se introduce 15 años):
 *   * Primer <li> muestra: "Edad: 15"
 *   * Segundo <li> muestra: "Precio Entrada: 15€" con color de fondo naranja (orange).
 *
 * - Caso 4 (Se introduce 25 años):
 *   * Primer <li> muestra: "Edad: 25"
 *   * Segundo <li> muestra: "Precio Entrada: 20€" con color de fondo rojo (red).
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar las variables (edad, precio, color) y las constantes al DOM para apuntar
 *           al primer <li> (li:nth-child(1)) y al segundo <li> (li:nth-child(2)).
 * - 2 PASO: Pedir la edad por teclado mediante prompt(), convertirla con Number() y guardarla en 'edad'.
 * - 3 PASO: Evaluar la edad en orden ascendente con 'if ... else if ... else' (sin usar &&):
 *           * Si (edad < 5) -> asignar precio = "Gratis" y color = "green".
 *           * Si no, si (edad <= 12) -> asignar precio = "10€" y color = "yellow".
 *           * Si no, si (edad <= 18) -> asignar precio = "15€" y color = "orange".
 *           * En caso contrario (else, mayores de 18) -> asignar precio = "20€" y color = "red".
 * - 4 PASO: Mostrar las salidas en los elementos del DOM:
 *           * Añadir la edad al texto del primer <li> usando textContent.
 *           * Añadir el precio al texto del segundo <li> usando textContent.
 *           * Cambiar el color de fondo del segundo <li> con style.backgroundColor.
 */

// estructura programa

// declaracion de variables y constantes
let edad = 0;
let precio = "";
let color = "";

// constantes al DOM
const nodoEdad = document.querySelector("li:nth-child(1)");
const nodoPrecio = document.querySelector("li:nth-child(2)");

// gestion de eventos
// constantes al DOM que queremos escuchar
// colocar escuchadores de eventos

// entradas
edad = Number(prompt("Introduce la edad"));

// procesamiento
if (edad < 5) {
    precio = "Gratis";
    color = "green";
} else if (edad <= 12) {
    precio = "10€";
    color = "yellow";
} else if (edad <= 18) {
    precio = "15€";
    color = "orange";
} else {
    precio = "20€";
    color = "red";
}

// salidas
nodoEdad.textContent = `Edad: ${edad}`;
nodoPrecio.textContent = `Precio Entrada: ${precio}`;
nodoPrecio.style.backgroundColor = color;
