/**
 * ENUNCIADO:
 * Ejercicio: Utiliza 'unshift()' para añadir al principio y 'shift()' para extraer del principio.
 *
 * Mientras que push/pop trabajan con el final del array, unshift/shift trabajan con el principio:
 * - array.unshift(elemento): Añade un elemento en la posición 0 y desplaza los demás a la derecha.
 * - array.shift(): Extrae y elimina el elemento en la posición 0 y desplaza los demás a la izquierda.
 *
 * Array inicial de clientes en espera:
 * let cola = ['Carlos', 'Ana', 'Beatriz'];
 *
 * Comportamiento:
 * 1. Al pulsar #btnPrioritario:
 *    - Leer el nombre del input #inputCliente sin espacios.
 *    - Si está vacío: mostrar aviso en #resultado.
 *    - Si tiene nombre: cola.unshift(nombre).
 *    - Mostrar mensaje de éxito y la cola actualizada.
 * 2. Al pulsar #btnAtender:
 *    - Si cola.length > 0:
 *      * const atendido = cola.shift().
 *      * Mostrar: 'Cliente atendido: "[atendido]". Clientes restantes: [cola].'
 *    - Si cola.length === 0:
 *      * Mostrar: 'No hay clientes en espera en este momento.'
 *
 * EJEMPLO DE FUNCIONAMIENTO:
 * - Si se añade a 'Elena' como prioritaria:
 *   Se muestra: 'Cliente prioritario "Elena" añadido al inicio. Cola actual: [Elena, Carlos, Ana, Beatriz] (Total: 4).'
 * - Si se pulsa 'Atender Primero':
 *   Se muestra: 'Se ha atendido a: "Elena". Cola actual: [Carlos, Ana, Beatriz] (Quedan: 3).'
 *
 * CONCEPTOS DE ARRAYS A UTILIZAR:
 * - array.unshift(nuevoElemento): Añade al índice 0.
 * - const primero = array.shift(): Extrae el elemento del índice 0.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar el array 'cola' con ['Carlos', 'Ana', 'Beatriz'].
 * - 2 PASO: Crear constantes al DOM para el input y los botones #btnPrioritario y #btnAtender.
 * - 3 PASO: Escuchar 'click' en #btnPrioritario -> validar con 'if' y ejecutar cola.unshift(nombre).
 * - 4 PASO: Escuchar 'click' en #btnAtender -> comprobar cola.length > 0 con 'if' y ejecutar cola.shift().
 * - 5 PASO: Actualizar el div #resultado en cada acción.
 */

// estructura del programa principal

// declaracion del array inicial
let cola = ['Carlos', 'Ana', 'Beatriz'];

// constantes al DOM que queremos escuchar
const inputCliente = document.querySelector('#inputCliente');
const btnPrioritario = document.querySelector('#btnPrioritario');
const btnAtender = document.querySelector('#btnAtender');
const nodoResultado = document.querySelector('#resultado');

// colocar escuchadores de eventos

// 1. Añadir cliente prioritario al inicio con unshift()
btnPrioritario.addEventListener('click', function () {
    const nombre = inputCliente.value.trim();

    if (nombre === '') {
        nodoResultado.textContent = 'Error: Escribe un nombre antes de añadirlo como prioritario.';
        return;
    }

    // unshift() coloca el elemento en la primera posición (índice 0)
    cola.unshift(nombre);

    inputCliente.value = '';
    inputCliente.focus();

    nodoResultado.textContent = `Cliente prioritario "${nombre}" añadido al inicio. Cola actual: [${cola.join(', ')}] (Total: ${cola.length} clientes).`;
});

// 2. Atender y eliminar al primer cliente con shift()
btnAtender.addEventListener('click', function () {
    if (cola.length > 0) {
        // shift() extrae el primer elemento del array (índice 0)
        const clienteAtendido = cola.shift();

        nodoResultado.textContent = `Se ha atendido a: "${clienteAtendido}". Clientes restantes: [${cola.join(', ')}] (Quedan: ${cola.length}).`;
    } else {
        nodoResultado.textContent = 'No hay más clientes en espera en este momento.';
    }
});
