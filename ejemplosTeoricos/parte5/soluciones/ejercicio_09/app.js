/**
 * ENUNCIADO:
 * Ejercicio: Utiliza el método 'join()' para unir todos los elementos de un array en un único string.
 *
 * El método array.join(separador):
 * - Toma todos los elementos del array y los concatena en una cadena de texto.
 * - Coloca entre cada elemento el texto que le indiquemos como 'separador'.
 * - No modifica el array original.
 *
 * Array inicial de etiquetas:
 * let etiquetas = ['html', 'css', 'javascript', 'frontend'];
 *
 * Al enviar el formulario #formEtiquetas:
 * 1. Frenar la recarga con e.preventDefault().
 * 2. Si el usuario escribió una nueva etiqueta en #inputNuevaEtiqueta:
 *    - Añadirla al array con etiquetas.push(nuevaEtiqueta.toLowerCase()).
 *    - Limpiar el campo del input.
 * 3. Obtener el separador seleccionado en el menú #selectorSeparador.
 * 4. Generar la cadena formateada con: const textoFinal = etiquetas.join(separador).
 * 5. Mostrar en #resultado:
 *    'Etiquetas formateadas ([length]): [textoFinal]'
 *
 * EJEMPLO DE FUNCIONAMIENTO:
 * - Con el separador ' | ' seleccionado:
 *   Se muestra: 'Etiquetas formateadas (4): html | css | javascript | frontend'
 *
 * CONCEPTOS DE ARRAYS A UTILIZAR:
 * - array.join(separador): Convierte el array en texto unido.
 * - array.push(nuevoElemento): Añadir nuevos elementos.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar el array 'etiquetas' con los 4 términos iniciales.
 * - 2 PASO: Crear constantes al DOM para formulario, input, selector y resultado.
 * - 3 PASO: Escuchar 'submit' en el formulario pasando (e).
 * - 4 PASO: Detener recarga con e.preventDefault().
 * - 5 PASO: Si hay nueva etiqueta escrita, insertarla con etiquetas.push().
 * - 6 PASO: Aplicar etiquetas.join(separador) y mostrar el resultado.
 */

// estructura del programa principal

// declaracion del array inicial
let etiquetas = ['html', 'css', 'javascript', 'frontend'];

// constantes al DOM que queremos escuchar
const btnFormatear = document.querySelector('#btnFormatear');
const inputNuevaEtiqueta = document.querySelector('#inputNuevaEtiqueta');
const selectorSeparador = document.querySelector('#selectorSeparador');
const nodoResultado = document.querySelector('#resultado');

// colocar escuchadores de eventos
btnFormatear.addEventListener('click', function () {

    // entradas
    const nuevaEtiqueta = inputNuevaEtiqueta.value.trim().toLowerCase();
    const separador = selectorSeparador.value;

    // Si el usuario introdujo una nueva etiqueta, la añadimos al array con push()
    if (nuevaEtiqueta !== '') {
        etiquetas.push(nuevaEtiqueta);
        inputNuevaEtiqueta.value = '';
    }

    // join() une todos los elementos utilizando el separador indicado
    const textoFormateado = etiquetas.join(separador);

    // salidas
    nodoResultado.textContent = `Etiquetas formateadas (Total: ${etiquetas.length}): ${textoFormateado}`;
});
