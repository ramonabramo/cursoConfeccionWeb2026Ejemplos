/**
 * ENUNCIADO:
 * Ejercicio 14 (Práctica del Alumno): Funciones Puras vs Impuras.
 *
 * CONCEPTOS CLAVE:
 * 1. Función Pura (El Cirujano Aséptico):
 *    - Es determinista: Para los mismos argumentos de entrada devuelve SIEMPRE el mismo resultado.
 *    - Cero efectos secundarios (Side Effects): NO modifica variables globales, NO altera
 *      objetos pasados por referencia, y NO interactúa con el DOM ni con APIs externas.
 *
 * 2. Función Impura (El Cuñado en la cocina):
 *    - Modifica el DOM directamente, lee o altera variables globales, depende de la hora actual
 *      o de números aleatorios.
 *
 * OBJETIVOS:
 * 1. Declarar una función 100% PURA:
 *    function calcularLiquidacionNomina(bruto, irpfPorcentaje, bonus) {
 *        // Solo realiza cálculos matemáticos y devuelve un nuevo objeto con los resultados.
 *        // No toca 'document', no lee inputs ni altera variables externas.
 *        return { bruto, irpfPorcentaje, retencion, netoFinal };
 *    }
 *
 * 2. Crear la función IMPURA de interfaz (manejador de evento):
 *    - Lee los valores de los inputs.
 *    - Invoca a la función pura pasándole los números.
 *    - Imprime el resultado en el DOM (#resultado).
 *
 * CONCEPTOS A PRACTICAR:
 * - Separación de lógica de negocio (pura) de la lógica de interfaz (impura)
 * - Principios fundamentales de Programación Funcional
 */

// estructura del programa principal

// 1. variables y constantes de estado

// 2. constantes al DOM
// capturar inputs, botón y #resultado

// 3. Función PURA de cálculo

// 4. Función IMPURA de interfaz y renderizado

// 5. escuchadores de eventos
