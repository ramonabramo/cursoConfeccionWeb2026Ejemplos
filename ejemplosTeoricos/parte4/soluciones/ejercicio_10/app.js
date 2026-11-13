/**
 * ENUNCIADO:
 * Ejercicio: Reto integrador del objeto 'event'.
 *
 * En este ejercicio combinamos todo lo aprendido sobre el objeto event:
 * 1. Frenar la recarga del formulario con e.preventDefault().
 * 2. Comprobar que el usuario ha introducido texto en el input.
 * 3. Crear dinámicamente un elemento de lista <li> con un botón de eliminar.
 * 4. Usar delegación de eventos con e.target en la lista <ul> para borrar
 *    únicamente el elemento cuyo botón 'Borrar' fue pulsado.
 *
 * PARTE A: Envío del formulario
 * - Al enviar #formAviso:
 *   * Ejecutar e.preventDefault().
 *   * Obtener el texto del input #inputAviso sin espacios.
 *   * Si está vacío, mostrar error en #resultado.
 *   * Si tiene texto:
 *     - Crear un <li> que contenga el texto y un botón con clase 'btn-borrar'.
 *     - Insertarlo dentro de #listaAvisos.
 *     - Limpiar el input y mostrar: 'Aviso "[texto]" añadido a la lista.'
 *
 * PARTE B: Eliminación del aviso
 * - Al hacer clic en #listaAvisos:
 *   * Comprobar con un 'if' si el elemento pulsado tiene la clase 'btn-borrar':
 *     e.target.classList.contains('btn-borrar')
 *   * Si es así, obtener su elemento padre (e.target.parentElement) y eliminarlo con .remove().
 *   * Mostrar en #resultado: 'Aviso eliminado correctamente.'
 *
 * OBJETO EVENT A UTILIZAR:
 * - e.preventDefault() en el formulario.
 * - e.target y e.target.classList.contains('btn-borrar') en la lista.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Crear constantes al DOM para el formulario (#formAviso), el input (#inputAviso), la lista (#listaAvisos) y el div (#resultado).
 * - 2 PASO: Escuchar 'submit' en el formulario:
 *           * Usar e.preventDefault().
 *           * Validar el texto con un 'if'.
 *           * Crear el <li> y agregarlo con appendChild().
 * - 3 PASO: Escuchar 'click' en la lista #listaAvisos:
 *           * Comprobar si e.target tiene la clase 'btn-borrar'.
 *           * Eliminar el elemento padre con e.target.parentElement.remove().
 *           * Mostrar mensaje de confirmación en #resultado.
 */

// estructura del programa principal

// constantes al DOM que queremos escuchar
const formAviso = document.querySelector('#formAviso');
const inputAviso = document.querySelector('#inputAviso');
const listaAvisos = document.querySelector('#listaAvisos');
const nodoResultado = document.querySelector('#resultado');

// colocar escuchadores de eventos

// 1. Escuchar el evento 'submit' del formulario
formAviso.addEventListener('submit', function (e) {
    // Evitamos la recarga automática de la página
    e.preventDefault();

    // entradas
    const texto = inputAviso.value.trim();

    // procesamiento con if
    if (texto === '') {
        nodoResultado.textContent = 'Error: Por favor, escribe un recordatorio antes de añadirlo.';
        return;
    }

    // Crear el elemento <li> con el botón de borrar
    const nuevoElemento = document.createElement('li');
    nuevoElemento.innerHTML = `<span>${texto}</span> <button type="button" class="btn-borrar">Borrar</button>`;

    // Añadir el nuevo aviso a la lista
    listaAvisos.appendChild(nuevoElemento);

    // Limpiar el campo y devolverle el foco
    inputAviso.value = '';
    inputAviso.focus();

    // salidas
    nodoResultado.textContent = `Aviso "${texto}" añadido a la lista.`;
});

// 2. Escuchar clics en la lista mediante delegación con e.target
listaAvisos.addEventListener('click', function (e) {
    // Comprobamos si el elemento sobre el que se hizo clic tiene la clase 'btn-borrar'
    if (e.target.classList.contains('btn-borrar')) {
        // e.target es el botón; su padre (parentElement) es el <li>
        const liPadre = e.target.parentElement;
        const textoAviso = liPadre.querySelector('span').textContent;

        // Eliminamos el <li> del DOM
        liPadre.remove();

        // salidas
        nodoResultado.textContent = `Aviso "${textoAviso}" eliminado correctamente.`;
    }
});
