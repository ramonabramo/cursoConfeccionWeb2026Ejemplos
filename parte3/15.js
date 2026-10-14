/**
 * ENUNCIADO:
 * Ejercicio: Utiliza un 'if' múltiple para cambiar el color de fondo de la página según la hora del día.
 * - Si es de mañana (de 6 a 12), el fondo será de color amarillo.
 * - Si es de tarde (de 12 a 18), el fondo será de color naranja.
 * - Si es de noche (de 18 a 6), el fondo será de color oscuro o negro.
 *
 * EJEMPLO DE FUNCIONAMIENTO:
 * - Caso 1 (Se introduce la hora 9):
 *   * Es por la mañana (entre 6 y 12).
 *   * El fondo de toda la página (<body>) cambia a color amarillo (yellow).
 *
 * - Caso 2 (Se introduce la hora 15):
 *   * Es por la tarde (entre 12 y 18).
 *   * El fondo de toda la página (<body>) cambia a color naranja (orange).
 *
 * - Caso 3 (Se introduce la hora 22 o la hora 3):
 *   * Es por la noche (de 18 a 24 o de 0 a 6).
 *   * El fondo de toda la página (<body>) cambia a color negro (black).
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar las variables (hora, colorFondo, colorTexto) y la constante al DOM para apuntar al 'body'.
 * - 2 PASO: Obtener la hora actual con new Date().getHours() y guardarla en la variable 'hora'.
 * - 3 PASO: Evaluar la hora en orden ascendente con un 'if' múltiple (if ... else if ... else) sin usar &&:
 *           * Si (hora < 6) -> es de noche (madrugada): asignar colorFondo = 'black' (y opcionalmente colorTexto = 'white').
 *           * Si no, si (hora < 12) -> es de mañana: asignar colorFondo = 'yellow'.
 *           * Si no, si (hora < 18) -> es de tarde: asignar colorFondo = 'orange'.
 *           * En caso contrario (else, de 18 en adelante) -> es de noche: asignar colorFondo = 'black'.
 * - 4 PASO: Mostrar las salidas cambiando el estilo del 'body' con style.backgroundColor (y style.color si es de noche).
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