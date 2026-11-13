/**
 * ENUNCIADO:
 * Ejercicio: Utiliza un 'if' múltiple para obtener la calificación
 * correspondiente a una nota.
 *
 * El usuario introducirá una nota entre 0 y 10.
 *
 * La calificación será:
 *
 * - Menor de 5: Suspenso.
 * - Desde 5 hasta menos de 7: Aprobado.
 * - Desde 7 hasta menos de 9: Notable.
 * - Desde 9 hasta 10: Sobresaliente.
 *
 * IMPORTANTE:
 * Realizar las comprobaciones en orden ascendente para no necesitar
 * utilizar el operador &&.
 *
 * EJEMPLO DE FUNCIONAMIENTO:
 *
 * - Caso 1 (Se introduce 3.5):
 *   * 3.5 es menor que 5.
 *   * Se muestra: "Suspenso".
 *
 * - Caso 2 (Se introduce 6):
 *   * 6 no es menor que 5.
 *   * Se comprueba si es menor que 7.
 *   * Se muestra: "Aprobado".
 *
 * - Caso 3 (Se introduce 8):
 *   * No es menor que 5.
 *   * No es menor que 7.
 *   * Es menor que 9.
 *   * Se muestra: "Notable".
 *
 * - Caso 4 (Se introduce 9.5):
 *   * No cumple ninguna de las condiciones anteriores.
 *   * Se ejecuta el 'else'.
 *   * Se muestra: "Sobresaliente".
 *

 * EVENTO A UTILIZAR:
 * - El formulario se mantiene para agrupar los controles.
 * - El botón es de tipo 'button'.
 * - Escuchar el evento 'click' del botón con id 'btnCalificar'.
 * - No es necesario utilizar preventDefault().
 * PASOS A REALIZAR:
 *
 * - 1 PASO: Declarar e inicializar:
 *           * nota
 *           * mensaje
 *
 * - 2 PASO: Crear las constantes al DOM para el botón #btnCalificar,
 *           nota y resultado.
 *
 * - 3 PASO: Escuchar el evento 'click' del botón #btnCalificar.
 *
 *
 * - 5 PASO: Obtener la nota y convertirla a número.
 *
 * - 6 PASO: Evaluar la nota en orden ascendente utilizando:
 *           if ... else if ... else if ... else
 *
 *           * Si nota < 5 -> "Suspenso".
 *           * Si no, si nota < 7 -> "Aprobado".
 *           * Si no, si nota < 9 -> "Notable".
 *           * En caso contrario -> "Sobresaliente".
 *
 * - 7 PASO: Mostrar la calificación.
 */

// estructura programa

// declaracion de variables y constantes

// constantes al DOM

// gestion de eventos
// constantes al DOM que queremos escuchar
// apuntar al botón #btnCalificar

// colocar escuchadores de eventos
// escuchar el evento click del botón

// entradas

// procesamiento

// salidas
