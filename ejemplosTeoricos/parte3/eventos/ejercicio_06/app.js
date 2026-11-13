/**
 * ENUNCIADO:
 * Ejercicio: Utiliza un 'if' múltiple para clasificar una temperatura.
 *
 * El usuario introducirá una temperatura.
 *
 * Se utilizarán las siguientes categorías:
 *
 * - Menos de 0 grados: "Helada".
 * - Desde 0 hasta menos de 10: "Mucho frío".
 * - Desde 10 hasta menos de 20: "Fresco".
 * - Desde 20 hasta menos de 30: "Temperatura agradable".
 * - Desde 30 en adelante: "Hace calor".
 *
 * IMPORTANTE:
 * Evaluar las condiciones en orden ascendente sin utilizar &&.
 *
 * EJEMPLO DE FUNCIONAMIENTO:
 *
 * - Caso 1 (Temperatura -3):
 *   * Es menor que 0.
 *   * Resultado: "Helada".
 *
 * - Caso 2 (Temperatura 6):
 *   * No es menor que 0.
 *   * Sí es menor que 10.
 *   * Resultado: "Mucho frío".
 *
 * - Caso 3 (Temperatura 17):
 *   * No es menor que 0 ni que 10.
 *   * Sí es menor que 20.
 *   * Resultado: "Fresco".
 *
 * - Caso 4 (Temperatura 24):
 *   * Resultado: "Temperatura agradable".
 *
 * - Caso 5 (Temperatura 35):
 *   * No cumple las condiciones anteriores.
 *   * Resultado: "Hace calor".
 *

 * EVENTO A UTILIZAR:
 * - El formulario se mantiene para agrupar los controles.
 * - El botón es de tipo 'button'.
 * - Escuchar el evento 'click' del botón con id 'btnClasificar'.
 * - No es necesario utilizar preventDefault().
 * PASOS A REALIZAR:
 *
 * - 1 PASO: Declarar las variables temperatura y mensaje.
 *
 * - 2 PASO: Crear las constantes al DOM para el botón #btnClasificar,
 *           temperatura y resultado.
 *
 * - 3 PASO: Escuchar el evento 'click' del botón #btnClasificar.
 *
 *
 * - 5 PASO: Obtener la temperatura y convertirla a número.
 *
 * - 6 PASO: Utilizar un 'if' múltiple:
 *
 *           * temperatura < 0  -> "Helada".
 *           * temperatura < 10 -> "Mucho frío".
 *           * temperatura < 20 -> "Fresco".
 *           * temperatura < 30 -> "Temperatura agradable".
 *           * else             -> "Hace calor".
 *
 * - 7 PASO: Mostrar el resultado.
 */

// estructura programa

// declaracion de variables y constantes

// constantes al DOM

// gestion de eventos
// constantes al DOM que queremos escuchar
// apuntar al botón #btnClasificar

// colocar escuchadores de eventos
// escuchar el evento click del botón

// entradas

// procesamiento

// salidas
