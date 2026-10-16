/**
 * ENUNCIADO:
 * Ejercicio: Conversión de NodeList a Array con Array.from() y métodos funcionales.
 *
 * Una NodeList solo tiene .length, corchetes [i] y forEach().
 * NO dispone de métodos de array como .filter(), .map() o .reduce().
 *
 * Para utilizar estos métodos debemos convertir la NodeList en un Array real:
 * const arrayAlumnos = Array.from(document.querySelectorAll('.alumno'));
 * // O con el operador spread: const arrayAlumnos = [...document.querySelectorAll('.alumno')];
 *
 * OBJETIVOS:
 * 1. Convertir los nodos .alumno a un array real usando Array.from().
 *
 * 2. Botón #btnAprobados:
 *    - Limpiar estilos previos de los alumnos.
 *    - Filtrar con arrayAlumnos.filter(a => Number(a.dataset.nota) >= 5).
 *    - A cada alumno aprobado, añadir la clase 'aprobado'.
 *    - Mostrar en #resultado cuántos aprobados hay y sus nombres.
 *
 * 3. Botón #btnSuspensos:
 *    - Limpiar estilos previos.
 *    - Filtrar con arrayAlumnos.filter(a => Number(a.dataset.nota) < 5).
 *    - A cada alumno suspenso, añadir la clase 'suspenso'.
 *    - Mostrar en #resultado cuántos suspensos hay y sus nombres.
 *
 * 4. Botón #btnNombres:
 *    - Utilizar arrayAlumnos.map(a => a.dataset.nombre) para obtener una lista de textos.
 *    - Unir los nombres con .join(', ').
 *    - Mostrar el listado completo en #resultado.
 *
 * CONCEPTOS CLAVE:
 * - Array.from(nodeList)
 * - array.filter() para filtrar nodos por condición.
 * - array.map() para transformar nodos en cadenas de texto.
 */

// estructura del programa principal

// 1. variables y constantes de estado

// 2. constantes al DOM
// capturar y convertir a Array: const arrayAlumnos = Array.from(document.querySelectorAll('.alumno'));
// capturar #btnAprobados, #btnSuspensos, #btnNombres y #resultado

// 3. funciones auxiliares
// funcion para limpiar las clases 'aprobado' y 'suspenso' de todos los alumnos

// 4. funciones de eventos
// funcion para filtrar y destacar aprobados
// funcion para filtrar y destacar suspensos
// funcion para mapear y listar todos los nombres

// 5. escuchadores de eventos
// escuchar 'click' en #btnAprobados, #btnSuspensos, #btnNombres
