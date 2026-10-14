/**
 * ENUNCIADO:
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
 * EJEMPLO DE FUNCIONAMIENTO:
 * - Caso 1 (Se introduce un 3):
 *   * En el <h2> se muestra: 3
 *   * La celda <td id="suspenso"> cambia su color de fondo a rojo (red).
 *
 * - Caso 2 (Se introduce un 5):
 *   * En el <h2> se muestra: 5
 *   * La celda <td id="aprobado"> cambia su color de fondo a rojo (red).
 *
 * - Caso 3 (Se introduce un 6.5):
 *   * En el <h2> se muestra: 6.5
 *   * La celda <td id="bien"> cambia su color de fondo a rojo (red).
 *
 * - Caso 4 (Se introduce un 8):
 *   * En el <h2> se muestra: 8
 *   * La celda <td id="notable"> cambia su color de fondo a rojo (red).
 *
 * - Caso 5 (Se introduce un 9.5):
 *   * En el <h2> se muestra: 9.5
 *   * La celda <td id="sobresaliente"> cambia su color de fondo a rojo (red).
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar la variable para almacenar la nota (y opcionalmente una variable para guardar la celda a colorear).
 * - 2 PASO: Declarar las constantes al DOM para apuntar al elemento 'h2' y a las 5 celdas
 *           (#suspenso, #aprobado, #bien, #notable, #sobresaliente).
 * - 3 PASO: Pedir la nota por teclado con prompt(), convertirla con Number() y guardarla en la variable 'nota'.
 * - 4 PASO: Evaluar la nota en orden ascendente utilizando 'if ... else if ... else' (sin usar &&):
 *           * Si (nota < 5) -> seleccionar o colorear de rojo la celda #suspenso.
 *           * Si no, si (nota < 6) -> seleccionar o colorear de rojo la celda #aprobado.
 *           * Si no, si (nota < 7) -> seleccionar o colorear de rojo la celda #bien.
 *           * Si no, si (nota < 9) -> seleccionar o colorear de rojo la celda #notable.
 *           * En caso contrario (else, de 9 a 10) -> seleccionar o colorear de rojo la celda #sobresaliente.
 * - 5 PASO: Mostrar la nota dentro del elemento 'h2' utilizando textContent (y aplicar el color a la celda si se guardó en variable).
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