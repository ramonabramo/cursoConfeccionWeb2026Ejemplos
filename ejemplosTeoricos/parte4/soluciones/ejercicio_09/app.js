/**
 * ENUNCIADO:
 * Ejercicio: Aplica delegación de eventos con un único addEventListener gracias a 'e.target'.
 *
 * En lugar de colocar cuatro escuchadores de evento 'click' (uno para cada botón),
 * colocamos UN SOLO escuchador en el elemento contenedor padre (#paletaColores).
 * Cuando el usuario pulsa en cualquier botón hijo, el evento sube por el DOM (burbujeo)
 * y 'e.target' nos indica con total precisión qué elemento concreto fue pulsado.
 *
 * Al hacer clic dentro del contenedor #paletaColores:
 * 1. Con un 'if', comprobaremos si el elemento pulsado es un botón:
 *    (e.target.tagName === 'BUTTON')
 * 2. Si es un botón:
 *    * Leeremos el color guardado en su atributo data-color: e.target.dataset.color
 *    * Leeremos el texto del botón: e.target.textContent
 *    * Mostraremos: 'Has seleccionado el color: [color] (pulsando en "[texto]").'
 * 3. Si no es un botón (por ejemplo, clic en el espacio entre botones):
 *    * Mostraremos: 'Has hecho clic dentro del contenedor, pero fuera de los botones.'
 *
 * EJEMPLO DE FUNCIONAMIENTO:
 * - Al pulsar el botón 'Color Azul':
 *   Se muestra: 'Has seleccionado el color: Azul (pulsando en "Color Azul").'
 *
 * OBJETO EVENT A UTILIZAR:
 * - Un único evento 'click' sobre el contenedor padre #paletaColores.
 * - e.target: Elemento exacto sobre el que recayó el clic del ratón.
 * - e.target.tagName: Nombre de la etiqueta HTML del elemento pulsado.
 * - e.target.dataset.color: Atributo data-color del botón.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Crear constantes al DOM para el contenedor (#paletaColores) y el div (#resultado).
 * - 2 PASO: Escuchar el evento 'click' ÚNICAMENTE en el contenedor #paletaColores pasando (e).
 * - 3 PASO: Evaluar con un 'if' si e.target.tagName === 'BUTTON'.
 * - 4 PASO: Si es botón, leer e.target.dataset.color y componer el mensaje de éxito.
 * - 5 PASO: Si no es botón, mostrar mensaje avisando de que se pulsó fuera de los botones.
 */

// estructura del programa principal

// constantes al DOM que queremos escuchar
const paletaColores = document.querySelector('#paletaColores');
const nodoResultado = document.querySelector('#resultado');

// colocar escuchadores de eventos
// Colocamos un único escuchador en el padre. 'e.target' nos dirá quién recibió el clic.
paletaColores.addEventListener('click', function (e) {
    // entradas: elemento pulsado
    const elementoPulsado = e.target;

    // procesamiento con if: verificamos si el elemento pulsado es un botón
    if (elementoPulsado.tagName === 'BUTTON') {
        const color = elementoPulsado.dataset.color;
        const textoBoton = elementoPulsado.textContent.trim();

        // salidas
        nodoResultado.textContent = `Has seleccionado el color: ${color} (pulsando en "${textoBoton}").`;
    } else {
        nodoResultado.textContent = 'Has hecho clic dentro del contenedor, pero fuera de los botones.';
    }
});
