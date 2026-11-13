/**
 * ENUNCIADO:
 * Ejercicio 10 (Práctica del Alumno): Asignación masiva con forEach() en un Rating.
 *
 * Utilizando el método 'forEach()' aprendido en el Ejercicio 09, programa un componente
 * interactivo de valoración con 5 estrellas.
 *
 * OBJETIVOS:
 * 1. Capturar todos los botones '.btn-estrella' con querySelectorAll.
 * 2. Recorrer la colección con estrellas.forEach(function (estrella, indiceClickada) { ... })
 *    y asignar un escuchador de evento 'click' a cada una.
 * 3. Al hacer clic en una estrella:
 *    - Recorrer NUEVAMENTE todas las estrellas con forEach(function (e, i) { ... }):
 *      - Si i <= indiceClickada: añadir la clase 'activa' (e.classList.add('activa')).
 *      - Si i > indiceClickada: quitar la clase 'activa' (e.classList.remove('activa')).
 *    - Mostrar en #resultado: 'Has valorado con [indiceClickada + 1] de 5 estrellas (Calificación: [textoSemántico]).'
 *      (Por ejemplo: 1-2: Regular/Bajo, 3: Aceptable, 4: Muy bueno, 5: ¡Excelente!).
 *
 * CONCEPTOS A PRACTICAR:
 * - nodeList.forEach() para asignación de eventos individuales
 * - Comparación de índices (i <= indiceClickada) para activar elementos contiguos
 * - Manipulación de classList en tiempo real
 */

// estructura del programa principal

// 1. variables y constantes de estado

// 2. constantes al DOM
// capturar todas las estrellas (.btn-estrella)
// capturar #resultado

// 3. funciones auxiliares
// funcion para obtener el texto calificativo segun el numero de estrellas

// 4. funciones de eventos

// 5. escuchadores de eventos
// recorrer las estrellas con forEach y escuchar 'click' en cada una
