/**
 * ENUNCIADO:
 * Ejercicio: Utiliza 'if' anidados para calcular el descuento
 * aplicado a una compra dependiendo del tipo de cliente
 * y del importe de la compra.
 *
 * El usuario introducirá:
 *
 * - El importe de la compra.
 * - El tipo de cliente: socio o no socio.
 *
 * REGLAS PARA CLIENTES SOCIOS:
 *
 * - Si la compra es inferior a 100 €:
 *   descuento del 5 %.
 *
 * - Si la compra es igual o superior a 100 €:
 *   descuento del 15 %.
 *
 * REGLAS PARA CLIENTES NO SOCIOS:
 *
 * - Si la compra es inferior a 200 €:
 *   no se aplica descuento.
 *
 * - Si la compra es igual o superior a 200 €:
 *   descuento del 5 %.
 *
 * EJEMPLO DE FUNCIONAMIENTO:
 *
 * - Caso 1:
 *   Tipo de cliente: socio
 *   Compra: 80 €
 *
 *   * Es socio.
 *   * La compra es inferior a 100 €.
 *   * Descuento: 5 %.
 *
 * - Caso 2:
 *   Tipo de cliente: socio
 *   Compra: 150 €
 *
 *   * Es socio.
 *   * La compra alcanza los 100 €.
 *   * Descuento: 15 %.
 *
 * - Caso 3:
 *   Tipo de cliente: no socio
 *   Compra: 150 €
 *
 *   * No es socio.
 *   * La compra no alcanza los 200 €.
 *   * Descuento: 0 %.
 *
 * - Caso 4:
 *   Tipo de cliente: no socio
 *   Compra: 250 €
 *
 *   * No es socio.
 *   * La compra alcanza los 200 €.
 *   * Descuento: 5 %.
 *

 * EVENTO A UTILIZAR:
 * - El formulario se mantiene para agrupar los controles.
 * - El botón es de tipo 'button'.
 * - Escuchar el evento 'click' del botón con id 'btnCalcular'.
 * - No es necesario utilizar preventDefault().
 * PASOS A REALIZAR:
 *
 * - 1 PASO: Declarar e inicializar las variables:
 *
 *           * importe
 *           * tipoCliente
 *           * porcentajeDescuento
 *           * cantidadDescuento
 *           * importeFinal
 *
 * - 2 PASO: Declarar las constantes necesarias:
 *
 *           * DESCUENTO_SOCIO_NORMAL = 5
 *           * DESCUENTO_SOCIO_ESPECIAL = 15
 *           * DESCUENTO_NO_SOCIO = 5
 *           * LIMITE_SOCIO = 100
 *           * LIMITE_NO_SOCIO = 200
 *
 * - 3 PASO: Crear las constantes al DOM para apuntar a:
 *
 *           * botón #btnCalcular
 *           * importe
 *           * tipoCliente
 *           * resultado
 *
 * - 4 PASO: Escuchar el evento 'click' del botón #btnCalcular.
 *
 *
 * - 6 PASO: Obtener:
 *
 *           * El importe y convertirlo a número.
 *           * El tipo de cliente seleccionado.
 *
 * - 7 PASO: Inicializar porcentajeDescuento a 0.
 *
 * - 8 PASO: Realizar la primera decisión:
 *
 *           * Comprobar si tipoCliente es "socio".
 *
 *           SI ES SOCIO:
 *
 *           * Realizar dentro otro 'if'.
 *
 *           * Si importe es mayor o igual que LIMITE_SOCIO:
 *             porcentajeDescuento será DESCUENTO_SOCIO_ESPECIAL.
 *
 *           * En caso contrario:
 *             porcentajeDescuento será DESCUENTO_SOCIO_NORMAL.
 *
 *           SI NO ES SOCIO:
 *
 *           * Dentro del 'else' realizar otro 'if'.
 *
 *           * Si importe es mayor o igual que LIMITE_NO_SOCIO:
 *             porcentajeDescuento será DESCUENTO_NO_SOCIO.
 *
 *           * En caso contrario:
 *             porcentajeDescuento será 0.
 *
 * - 9 PASO: Calcular la cantidad descontada:
 *
 *           cantidadDescuento =
 *           importe * porcentajeDescuento / 100
 *
 * - 10 PASO: Calcular el importe final:
 *
 *            importeFinal =
 *            importe - cantidadDescuento
 *
 * - 11 PASO: Mostrar:
 *
 *            * Importe inicial.
 *            * Porcentaje de descuento.
 *            * Importe final.
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
