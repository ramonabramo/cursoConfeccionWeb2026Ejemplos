/**
 * ENUNCIADO:
 * Ejercicio: Utiliza un 'if' simple para aplicar un descuento a una compra.
 *
 * El usuario introducirá el importe de una compra en un formulario.
 *
 * - Si el importe de la compra es igual o superior a 100 €, se aplicará un descuento de 10 €.
 * - Si el importe es inferior a 100 €, no se aplicará ningún descuento.
 *
 * El programa mostrará siempre el importe final de la compra.
 *
 * EJEMPLO DE FUNCIONAMIENTO:
 *
 * - Caso 1 (Se introduce una compra de 80 €):
 *   * La compra no alcanza los 100 €.
 *   * No se aplica ningún descuento.
 *   * Se muestra: "Importe final: 80 €".
 *
 * - Caso 2 (Se introduce una compra de 120 €):
 *   * La compra es igual o superior a 100 €.
 *   * Se descuentan 10 €.
 *   * Se muestra: "Importe final: 110 €".
 *

 * EVENTO A UTILIZAR:
 * - El formulario se mantiene para agrupar los controles.
 * - El botón es de tipo 'button'.
 * - Escuchar el evento 'click' del botón con id 'btnCalcular'.
 *
 * PASOS A REALIZAR:
 *
 * - 1 PASO: Declarar e inicializar las variables:
 *           * importe
 *           * importeFinal
 *
 * - 2 PASO: Declarar las constantes:
 *           * COMPRA_MINIMA con valor 100.
 *           * DESCUENTO con valor 10.
 *
 * - 3 PASO: Crear las constantes al DOM utilizando querySelector() para apuntar a:
 *           * El boton del formulario.
 *           * El input donde se introduce el importe.
 *           * El elemento donde se mostrará el resultado.
 *
 * - 4 PASO: Escuchar el evento 'click' del botón #btnCalcular.
 *
 *
 * - 6 PASO: Obtener el importe introducido por el usuario y convertirlo a número.
 *
 * - 7 PASO: Guardar inicialmente el valor de importe en importeFinal.
 *
 * - 8 PASO: Utilizar un 'if' simple:
 *           * Si importe es mayor o igual que COMPRA_MINIMA,
 *             restar DESCUENTO al importe.
 *
 * - 9 PASO: Mostrar en pantalla el importe final.
 */

// estructura programa

// declaracion de variables y constantes

// constantes al DOM

// gestion de eventos
// constantes al DOM que queremos escuchar
// apuntar al botón #btnCalcular

// colocar escuchadores de eventos
// escuchar el evento click del botón

// entradas

// procesamiento

// salidas
