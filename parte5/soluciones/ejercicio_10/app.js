/**
 * ENUNCIADO:
 * Ejercicio: Reto integrador de arrays de datos.
 *
 * En este ejercicio combinamos las operaciones más importantes que se realizan con arrays:
 * 1. Añadir elementos sin duplicados ('push' + 'includes').
 * 2. Buscar si un elemento existe y conocer su posición ('indexOf').
 * 3. Eliminar un elemento específico buscándolo previamente ('indexOf' + 'splice').
 * 4. Mostrar el catálogo completo con el formato adecuado ('join' y 'length').
 *
 * Array inicial de catálogo:
 * let catalogo = ['manzana', 'pera', 'platano'];
 *
 * Botones y acciones:
 * - #btnAgregar:
 *   * Si el campo está vacío: error.
 *   * Si catalogo.includes(producto): avisar de que el producto ya existe (no duplicar).
 *   * Si no existe: catalogo.push(producto) y confirmar inserción.
 * - #btnBuscar:
 *   * const pos = catalogo.indexOf(producto).
 *   * Si pos !== -1: indicar en qué posición está.
 *   * Si pos === -1: avisar de que no existe.
 * - #btnEliminar:
 *   * const pos = catalogo.indexOf(producto).
 *   * Si pos !== -1: catalogo.splice(pos, 1) y confirmar borrado.
 *   * Si pos === -1: avisar de que no se puede borrar porque no existe.
 * - #btnMostrar:
 *   * Mostrar el listado completo con catalogo.join(', ') y la cantidad total.
 *
 * CONCEPTOS DE ARRAYS A UTILIZAR:
 * - push(), includes(), indexOf(), splice(), join(), length.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar el array 'catalogo' con ['manzana', 'pera', 'platano'].
 * - 2 PASO: Crear constantes al DOM para el input y los cuatro botones.
 * - 3 PASO: Programar el evento 'click' de #btnAgregar con includes() y push().
 * - 4 PASO: Programar el evento 'click' de #btnBuscar con indexOf().
 * - 5 PASO: Programar el evento 'click' de #btnEliminar con indexOf() y splice().
 * - 6 PASO: Programar el evento 'click' de #btnMostrar con join().
 */

// estructura del programa principal

// declaracion del array inicial
let catalogo = ['manzana', 'pera', 'platano'];

// constantes al DOM que queremos escuchar
const inputArticulo = document.querySelector('#inputArticulo');
const btnAgregar = document.querySelector('#btnAgregar');
const btnBuscar = document.querySelector('#btnBuscar');
const btnEliminar = document.querySelector('#btnEliminar');
const btnMostrar = document.querySelector('#btnMostrar');
const nodoResultado = document.querySelector('#resultado');

// colocar escuchadores de eventos

// 1. Añadir producto comprobando previamente si ya existe (includes + push)
btnAgregar.addEventListener('click', function () {
    const articulo = inputArticulo.value.trim().toLowerCase();

    if (articulo === '') {
        nodoResultado.textContent = 'Por favor, escribe el nombre de un producto para añadir.';
        return;
    }

    if (catalogo.includes(articulo)) {
        nodoResultado.textContent = `Aviso: El producto "${articulo}" ya está en el catálogo (no se permiten duplicados).`;
    } else {
        catalogo.push(articulo);
        inputArticulo.value = '';
        inputArticulo.focus();
        nodoResultado.textContent = `Producto "${articulo}" añadido con éxito. Catálogo: [${catalogo.join(', ')}] (Total: ${catalogo.length}).`;
    }
});

// 2. Buscar posición del producto (indexOf)
btnBuscar.addEventListener('click', function () {
    const articulo = inputArticulo.value.trim().toLowerCase();

    if (articulo === '') {
        nodoResultado.textContent = 'Escribe un producto para buscar su posición.';
        return;
    }

    const posicion = catalogo.indexOf(articulo);

    if (posicion !== -1) {
        nodoResultado.textContent = `El producto "${articulo}" se encuentra en el índice ${posicion} del catálogo.`;
    } else {
        nodoResultado.textContent = `El producto "${articulo}" no se encuentra en el catálogo.`;
    }
});

// 3. Eliminar producto específico (indexOf + splice)
btnEliminar.addEventListener('click', function () {
    const articulo = inputArticulo.value.trim().toLowerCase();

    if (articulo === '') {
        nodoResultado.textContent = 'Escribe el nombre del producto que deseas eliminar.';
        return;
    }

    const posicion = catalogo.indexOf(articulo);

    if (posicion !== -1) {
        catalogo.splice(posicion, 1);
        inputArticulo.value = '';
        inputArticulo.focus();
        nodoResultado.textContent = `Producto "${articulo}" eliminado. Catálogo restante: [${catalogo.join(', ')}] (Quedan: ${catalogo.length}).`;
    } else {
        nodoResultado.textContent = `No se pudo eliminar: el producto "${articulo}" no existe en el catálogo.`;
    }
});

// 4. Mostrar catálogo completo formateado (join)
btnMostrar.addEventListener('click', function () {
    if (catalogo.length > 0) {
        nodoResultado.textContent = `Catálogo completo (${catalogo.length} artículos): ${catalogo.join(' | ')}`;
    } else {
        nodoResultado.textContent = 'El catálogo está actualmente vacío.';
    }
});
