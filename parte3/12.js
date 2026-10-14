/**
 * Pedir un numero al usuario entre 1 y 10
 *
 * Ese numero es la nota
 *
 * Colocar la nota en el h2
 *
 * - si el numero esta entre 0 y 5 colorea de rojo la primera celda (id suspenso) [0,5)
 * - si el numero esta entre 5 y 6 colorea de rojo la segunda celda (id aprobado) [5,6)
 * - si el numero esta entre 6 y 7 colorea de rojo la tercera celda (id bien) [6,7)
 * - si el numero esta entre 7 y 9 colorea de rojo la cuarta celda (id notable) [7,9)
 * - si el numero esta entre 9 y 10 colorea de rojo la quinta celda (id sobresaliente) [9,10]
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar la variable para la nota (y opcionalmente una variable para guardar la celda a colorear).
 * - 2 PASO: Declarar las constantes al DOM para apuntar al elemento 'h2' y a las 5 celdas
 *           (#suspenso, #aprobado, #bien, #notable, #sobresaliente).
 * - 3 PASO: Pedir la nota por teclado con prompt(), convertirla con Number() y guardarla en la variable 'nota'.
 * - 4 PASO: Evaluar en qué rango se encuentra la nota utilizando condicionales (if ... else if) y el operador lógico AND (&&):
 *           * Si (nota >= 0 && nota < 5) -> corresponde a la celda #suspenso.
 *           * Si (nota >= 5 && nota < 6) -> corresponde a la celda #aprobado.
 *           * Si (nota >= 6 && nota < 7) -> corresponde a la celda #bien.
 *           * Si (nota >= 7 && nota < 9) -> corresponde a la celda #notable.
 *           * Si (nota >= 9 && nota <= 10) -> corresponde a la celda #sobresaliente.
 * - 5 PASO: Mostrar las salidas en el DOM:
 *           * Colocar el valor de la nota en el 'h2' usando textContent.
 *           * Cambiar el color de fondo de la celda correspondiente a rojo ('red') usando style.backgroundColor.
 */

// estructura programa

// declaracion de variables y constantes

// constantes al DOM

// gestion de eventos
// constantes al DOM que queremos escuchar
// colocar escuchadores de eventos

// entradas

// procesamiento

// salidas