/**
 * ENUNCIADO:
 * Ejercicio 04 (Práctica del Alumno): Scope Chain y Variable Shadowing.
 *
 * Tenemos definida en el ámbito global la siguiente constante:
 * const configApp = { tema: 'Claro', modo: 'Producción', version: 1.0 };
 *
 * OBJETIVOS:
 * 1. Botón #btnConsultarGlobal:
 *    - Mostrar en #resultado los datos de 'configApp' global (Tema: Claro, Modo: Producción).
 *
 * 2. Botón #btnEjecutarLocal:
 *    - Crear una función llamada 'configurarEntornoPruebas()'.
 *    - Dentro de la función, declarar una constante LOCAL llamada EXACTAMENTE IGUAL ('configApp')
 *      con los valores: { tema: 'Oscuro', modo: 'Desarrollo/Testing', version: 2.0 }.
 *    - Demostrar el fenómeno de Variable Shadowing:
 *      La función interna muestra su configuración local (Oscuro/Desarrollo).
 *    - Al salir de la función, demostrar que la variable global 'configApp' NO ha sufrido
 *      ninguna mutación y conserva sus valores intactos (Claro/Producción).
 *
 * CONCEPTOS A PRACTICAR:
 * - Ámbito de función vs Ámbito global.
 * - Variable Shadowing (ocultación temporal en el entorno léxico).
 * - Imposibilidad de alterar una constante global desde un ámbito léxico aislado.
 */

// estructura del programa principal

// 1. variables y constantes de estado
const configApp = { tema: 'Claro', modo: 'Producción', version: 1.0 };

// 2. constantes al DOM
// capturar #btnConsultarGlobal, #btnEjecutarLocal y #resultado

// 3. funciones auxiliares
// funcion configurarEntornoPruebas con shadowing local

// 4. funciones de eventos

// 5. escuchadores de eventos
