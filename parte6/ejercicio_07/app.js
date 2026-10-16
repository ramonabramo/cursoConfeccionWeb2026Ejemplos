/**
 * ENUNCIADO:
 * Ejercicio: Lectura de atributos data-* (dataset) en colecciones de tarjetas.
 *
 * Los atributos HTML personalizados data-* nos permiten asociar información técnica
 * o metadatos a cualquier elemento HTML:
 * <div class="tarjeta" data-nombre="Portátil" data-precio="899" data-categoria="Informática">
 *
 * En JavaScript se leen a través de la propiedad .dataset:
 * const nombre = tarjeta.dataset.nombre;
 * const precio = Number(tarjeta.dataset.precio);
 * const categoria = tarjeta.dataset.categoria;
 *
 * OBJETIVOS:
 * 1. Capturar todas las tarjetas con clase '.tarjeta-producto'.
 * 2. Recorrer cada tarjeta con forEach.
 * 3. Dentro de cada tarjeta, capturar su botón '.btn-detalle'.
 * 4. Al hacer clic en el botón:
 *    - Leer los datos de la tarjeta desde su dataset (id, nombre, categoria, precio).
 *    - Calcular el precio con IVA (21%): const conIva = precio * 1.21;
 *    - Mostrar en #resultado una ficha completa:
 *      'Ficha técnica [ID: #id] - Producto: "[nombre]" | Categoría: [categoria] | Precio base: [precio] € | Con IVA (21%): [conIva] €.'
 *
 * CONCEPTOS CLAVE:
 * - elemento.dataset.propiedad
 * - elemento.querySelector() aplicado sobre un nodo contenedor
 * - Cálculos numéricos a partir de atributos dataset.
 */

// estructura del programa principal

// 1. variables y constantes de estado

// 2. constantes al DOM
// capturar todas las tarjetas (.tarjeta-producto)
// capturar el contenedor #resultado

// 3. funciones auxiliares

// 4. funciones de eventos

// 5. escuchadores de eventos
// recorrer cada tarjeta con forEach y escuchar 'click' en su boton .btn-detalle
