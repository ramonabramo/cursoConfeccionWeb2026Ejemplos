/**
 * ENUNCIADO:
 * Ejercicio: Lectura y acumulación de múltiples inputs numéricos.
 *
 * Cuando tenemos varios inputs de la misma clase (por ejemplo .input-gasto),
 * podemos capturarlos todos con querySelectorAll() y recorrerlos con forEach()
 * para acumular sus valores en una variable sumatoria.
 *
 * OBJETIVOS:
 * 1. Al pulsar el botón #btnCalcular:
 *    - Inicializar un acumulador en cero: let total = 0;
 *    - Recorrer todos los .input-gasto con forEach().
 *    - Leer input.value, convertir con Number() (o tratar como 0 si está vacío).
 *    - Sumar al acumulador: total += valor;
 *    - Calcular la media: const media = total / inputs.length;
 *    - Mostrar en #resultado:
 *      'Gasto total de la semana: [total] € | Gasto medio diario: [media] €'
 *      (formateados a dos decimales con .toFixed(2)).
 *
 * 2. Al pulsar el botón #btnLimpiar:
 *    - Recorrer los inputs y poner input.value = '';
 *    - Limpiar el mensaje de #resultado.
 *
 * CONCEPTOS CLAVE:
 * - document.querySelectorAll('.input-gasto')
 * - Acumulación con variable 'let total = 0' en forEach.
 * - Number(input.value) y validación de campos.
 * - .toFixed(2) para formato de moneda.
 */

// estructura del programa principal

// 1. variables y constantes de estado

// 2. constantes al DOM
// capturar todos los inputs (.input-gasto)
// capturar #btnCalcular, #btnLimpiar y #resultado

// 3. funciones auxiliares

// 4. funciones de eventos
// funcion para calcular la suma y la media de los inputs
// funcion para vaciar todos los inputs

// 5. escuchadores de eventos
// escuchar 'click' en #btnCalcular
// escuchar 'click' en #btnLimpiar
