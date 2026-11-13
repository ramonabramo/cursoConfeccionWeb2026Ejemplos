/**
 * ENUNCIADO:
 * Ejercicio 02 (Práctica del Alumno): Parámetros Rest (...gastos) y Early Return.
 *
 * Utilizando lo aprendido en el Ejercicio 01, crea una función que reciba una categoría
 * y una cantidad indefinida de gastos numéricos utilizando el operador Rest (...gastos).
 *
 * OBJETIVOS:
 * 1. Declarar la función:
 *    function calcularPresupuesto(categoria = 'General', ...gastos) {
 *        // 1.1. Early Return: Si no se pasó ningún gasto (gastos.length === 0), devolver mensaje de aviso.
 *        // 1.2. Recorrer el array 'gastos' (que es un Array real) y sumar todos los importes.
 *        // 1.3. Devolver un string formateado con la categoría, la cantidad de partidas y la suma total.
 *    }
 *
 * 2. Al pulsar el botón #btnCalcularRest:
 *    - Leer la categoría (si está vacía, enviar undefined para usar el valor por defecto).
 *    - Convertir el texto de #inputPrecios en números reales (separando por comas con .split(',')).
 *    - Invocar 'calcularPresupuesto' usando el operador spread para pasar los números como argumentos individuales:
 *      calcularPresupuesto(categoria, ...arrayDeNumeros);
 *    - Mostrar el resultado en el div #resultado.
 *
 * CONCEPTOS A PRACTICAR:
 * - function nombre(param1 = def, ...restoDeArgumentos)
 * - Early return cuando no hay datos
 * - Diferencia entre el parámetro Rest (...param) y el operador Spread (...args)
 */

// estructura del programa principal

// 1. variables y constantes de estado

// 2. constantes al DOM
// capturar #inputCategoria, #inputPrecios, #btnCalcularRest y #resultado

// 3. funciones auxiliares
// declarar la funcion calcularPresupuesto con parametro rest

// 4. funciones de eventos
// funcion para leer inputs, parsear precios e invocar la funcion

// 5. escuchadores de eventos
// escuchar 'click' en #btnCalcularRest
