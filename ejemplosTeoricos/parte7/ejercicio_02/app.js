/**
 * ENUNCIADO:
 * Ejercicio 02 (Práctica del Alumno): Bucle 'for' clásico sobre una NodeList.
 *
 * Utilizando el bucle 'for' aprendido en el Ejercicio 01, recorre la lista de elementos
 * HTML para aplicar un formateo visual alterno (efecto cebra).
 *
 * OBJETIVOS:
 * 1. Botón #btnEfectoCebra:
 *    - Capturar todos los elementos con clase '.item-lista' con querySelectorAll().
 *    - Recorrer la NodeList con un bucle 'for' clásico: for (let i = 0; i < items.length; i++)
 *    - En cada vuelta, consultar si el índice 'i' es par o impar con el operador módulo: (i % 2 === 0).
 *    - Si es par: añadir clase 'par' con items[i].classList.add('par').
 *    - Si es impar: añadir clase 'impar' con items[i].classList.add('impar').
 *    - Mostrar en #resultado cuántos elementos han sido formateados.
 *
 * 2. Botón #btnLimpiar:
 *    - Recorrer con otro bucle 'for' y retirar las clases 'par' e 'impar' de cada elemento.
 *    - Limpiar el mensaje de #resultado.
 *
 * CONCEPTOS A PRACTICAR:
 * - for (let i = 0; i < coleccion.length; i++)
 * - coleccion[i].classList.add() y remove()
 * - Operador módulo (i % 2 === 0)
 */

// estructura del programa principal

// 1. variables y constantes de estado

// 2. constantes al DOM
// capturar todos los .item-lista
// capturar #btnEfectoCebra, #btnLimpiar y #resultado

// 3. funciones auxiliares

// 4. funciones de eventos
// funcion para aplicar efecto cebra con bucle for
// funcion para limpiar clases con bucle for

// 5. escuchadores de eventos
// escuchar 'click' en #btnEfectoCebra y #btnLimpiar
