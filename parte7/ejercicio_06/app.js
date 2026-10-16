/**
 * ENUNCIADO:
 * Ejercicio 06 (Práctica del Alumno): Bucle 'for...of' sobre una NodeList.
 *
 * Utilizando el bucle 'for...of' aprendido en el Ejercicio 05, itera sobre los elementos
 * del DOM capturados con querySelectorAll() para procesar su información.
 *
 * OBJETIVOS:
 * Al pulsar el botón #btnCalcularPrecios:
 * 1. Capturar todos los elementos '.tarjeta-libro' con querySelectorAll.
 * 2. Inicializar un acumulador: let totalBase = 0;
 * 3. Recorrer la colección con un bucle: for (const tarjeta of tarjetasLibros)
 *    - Dentro de cada tarjeta, capturar el span '.precio-libro' con tarjeta.querySelector('.precio-libro').
 *    - Convertir su texto a número con Number(spanPrecio.textContent).
 *    - Sumar al acumulador totalBase.
 * 4. Al terminar el bucle:
 *    - Calcular un descuento promocional del 15%: const descuento = totalBase * 0.15;
 *    - Calcular el precio final: const precioFinal = totalBase - descuento;
 * 5. Mostrar en #resultado:
 *    'Libros procesados: [cantidad] | Subtotal: [totalBase] € | Descuento (15%): -[descuento] € | TOTAL FINAL: [precioFinal] €.'
 *    (formateados a dos decimales con .toFixed(2)).
 *
 * CONCEPTOS A PRACTICAR:
 * - for (const nodo of nodeList)
 * - nodo.querySelector() relativo
 * - Acumulación matemática y formateo de moneda con .toFixed(2)
 */

// estructura del programa principal

// 1. variables y constantes de estado

// 2. constantes al DOM
// capturar todas las tarjetas (.tarjeta-libro)
// capturar #btnCalcularPrecios y #resultado

// 3. funciones auxiliares

// 4. funciones de eventos
// funcion para recorrer las tarjetas con for...of y calcular importes

// 5. escuchadores de eventos
// escuchar 'click' en #btnCalcularPrecios
