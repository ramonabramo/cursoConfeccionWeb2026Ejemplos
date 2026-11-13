/**
 * ENUNCIADO:
 * Ejercicio: Utiliza 'if' anidados para determinar si una persona
 * puede acceder a una atracción.
 *
 * Para acceder a la atracción se aplican estas reglas:
 *
 * - Primero se comprobará la altura.
 *
 * - Si la persona mide menos de 120 cm:
 *   no puede subir a la atracción.
 *
 * - Si mide 120 cm o más:
 *   se comprobará su edad.
 *
 *      * Si tiene 12 años o más:
 *        puede subir sola.
 *
 *      * Si tiene menos de 12 años:
 *        puede subir, pero acompañada.
 *
 * IMPORTANTE:
 * La edad solamente se comprobará si primero se cumple
 * la condición de altura.
 *
 * EJEMPLO DE FUNCIONAMIENTO:
 *
 * - Caso 1:
 *   Altura: 110 cm
 *   Edad: 14 años
 *
 *   * No alcanza la altura mínima.
 *   * No es necesario comprobar la edad.
 *   * Resultado: "No puede subir a la atracción".
 *
 * - Caso 2:
 *   Altura: 130 cm
 *   Edad: 10 años
 *
 *   * Cumple la altura mínima.
 *   * Se comprueba la edad.
 *   * Tiene menos de 12 años.
 *   * Resultado: "Puede subir acompañado".
 *
 * - Caso 3:
 *   Altura: 140 cm
 *   Edad: 15 años
 *
 *   * Cumple la altura mínima.
 *   * Se comprueba la edad.
 *   * Tiene 12 años o más.
 *   * Resultado: "Puede subir solo".
 *

 * EVENTO A UTILIZAR:
 * - El formulario se mantiene para agrupar los controles.
 * - El botón es de tipo 'button'.
 * - Escuchar el evento 'click' del botón con id 'btnComprobar'.
 * - No es necesario utilizar preventDefault().
 * PASOS A REALIZAR:
 *
 * - 1 PASO: Declarar las variables:
 *           * altura
 *           * edad
 *           * mensaje
 *
 * - 2 PASO: Declarar las constantes:
 *           * ALTURA_MINIMA con valor 120.
 *           * EDAD_SOLO con valor 12.
 *
 * - 3 PASO: Crear las constantes al DOM para el botón #btnComprobar,
 *           altura, edad y resultado.
 *
 * - 4 PASO: Escuchar el evento 'click' del botón #btnComprobar.
 *
 *
 * - 6 PASO: Obtener la altura y la edad introducidas
 *           y convertirlas a número.
 *
 * - 7 PASO: Realizar la primera decisión:
 *
 *           * Si altura es mayor o igual que ALTURA_MINIMA:
 *
 *                 realizar dentro otro 'if'.
 *
 *                 * Si edad es mayor o igual que EDAD_SOLO:
 *                   "Puede subir solo".
 *
 *                 * En caso contrario:
 *                   "Puede subir acompañado".
 *
 *           * En caso contrario:
 *             "No puede subir a la atracción".
 *
 * - 8 PASO: Mostrar el mensaje.
 */

// estructura programa

// declaracion de variables y constantes

// constantes al DOM

// gestion de eventos
// constantes al DOM que queremos escuchar
// apuntar al botón #btnComprobar

// colocar escuchadores de eventos
// escuchar el evento click del botón

// entradas

// procesamiento

// salidas
