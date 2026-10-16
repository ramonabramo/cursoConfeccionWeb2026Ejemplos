/**
 * ENUNCIADO:
 * Ejercicio: Recorre un array utilizando el bucle 'for' clásico.
 *
 * El bucle 'for' clásico consta de tres partes fundamentales separadas por punto y coma:
 * 1. Inicialización: let i = 0 (crea el contador en el primer índice).
 * 2. Condición: i < array.length (se repite mientras el contador no llegue al final).
 * 3. Incremento: i++ (avanza al siguiente índice tras cada vuelta).
 *
 * Sintaxis:
 * for (let i = 0; i < array.length; i++) {
 *     // Acceso al elemento actual: array[i]
 * }
 *
 * Array de temperaturas registradas en una semana:
 * const temperaturas = [18, 22, 14, 25, 30, 11, 27];
 *
 * Al enviar el formulario #formFiltro:
 * 1. Frenar la recarga con e.preventDefault().
 * 2. Obtener el umbral numérico de temperatura introducido por el usuario.
 * 3. Utilizar un bucle 'for' clásico para recorrer el array:
 *    - Contar cuántas temperaturas son mayores o iguales que el umbral.
 *    - Acumular en un texto la posición (i) y los grados (temperaturas[i]).
 * 4. Mostrar en #resultado cuántas temperaturas superan el umbral y el detalle de cada una.
 *
 * EJEMPLO DE FUNCIONAMIENTO:
 * - Con un umbral de 20:
 *   Se muestra:
 *   Temperaturas iguales o superiores a 20 °C (Total: 4):
 *   • [Índice 1]: 22 °C
 *   • [Índice 3]: 25 °C
 *   • [Índice 4]: 30 °C
 *   • [Índice 6]: 27 °C
 *
 * CONCEPTOS DE ARRAYS A UTILIZAR:
 * - Bucle for clásico: for (let i = 0; i < array.length; i++).
 * - Acceso mediante contador: array[i].
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar el array 'temperaturas'.
 * - 2 PASO: Apuntar a #formFiltro, #inputUmbral y #resultado.
 * - 3 PASO: Escuchar 'submit' en el formulario pasando (e).
 * - 4 PASO: Detener recarga con e.preventDefault().
 * - 5 PASO: Construir el bucle 'for' recorriendo desde i = 0 hasta i < temperaturas.length.
 * - 6 PASO: Comprobar con 'if (temperaturas[i] >= umbral)' y mostrar el resultado en pantalla.
 */

// estructura del programa principal

// declaracion del array de temperaturas
const temperaturas = [18, 22, 14, 25, 30, 11, 27];

// constantes al DOM que queremos escuchar
const btnFiltrar = document.querySelector('#btnFiltrar');
const inputUmbral = document.querySelector('#inputUmbral');
const nodoResultado = document.querySelector('#resultado');

// colocar escuchadores de eventos
btnFiltrar.addEventListener('click', function () {

    // entradas
    const umbral = Number(inputUmbral.value);
    let totalSuperadas = 0;
    let listado = '';

    // procesamiento: Bucle for tradicional
    // 1. let i = 0 -> iniciamos en el primer índice
    // 2. i < temperaturas.length -> paramos al llegar al final
    // 3. i++ -> avanzamos de uno en uno
    for (let i = 0; i < temperaturas.length; i++) {
        // Accedemos a la casilla actual usando el contador i: temperaturas[i]
        if (temperaturas[i] >= umbral) {
            totalSuperadas++;
            listado += `• [Índice ${i}]: ${temperaturas[i]} °C\n`;
        }
    }

    // salidas
    if (totalSuperadas > 0) {
        nodoResultado.textContent = `Temperaturas iguales o superiores a ${umbral} °C (Total: ${totalSuperadas}):\n\n${listado}`;
    } else {
        nodoResultado.textContent = `Ninguna temperatura del array alcanza o supera los ${umbral} °C.`;
    }
});
