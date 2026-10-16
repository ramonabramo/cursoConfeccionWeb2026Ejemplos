/**
 * ENUNCIADO:
 * Ejercicio: Utiliza el método 'includes()' para comprobar si un elemento existe en el array.
 *
 * El método array.includes(elementoBuscado) devuelve un valor booleano:
 * - true: si el elemento está presente en el array.
 * - false: si el elemento no se encuentra.
 *
 * Lista de invitados VIP:
 * const invitados = ['lucia', 'marcos', 'sofia', 'daniel', 'elena'];
 *
 * Al enviar el formulario #formInvitado:
 * 1. Frenar la recarga con e.preventDefault().
 * 2. Obtener el nombre del input #inputNombre, limpiarlo con .trim() y pasarlo a minúsculas con .toLowerCase().
 * 3. Utilizar un 'if' evaluando el método includes():
 *    - Si invitados.includes(nombre):
 *      Mostrar: '¡Acceso Concedido! "[nombre]" está en la lista de invitados VIP.'
 *    - Si no:
 *      Mostrar: 'Acceso Denegado: "[nombre]" no aparece en la lista de invitados.'
 *
 * EJEMPLO DE FUNCIONAMIENTO:
 * - Se comprueba 'Sofia':
 *   Se muestra: '¡Acceso Concedido! "sofia" está en la lista de invitados VIP.'
 * - Se comprueba 'Pedro':
 *   Se muestra: 'Acceso Denegado: "pedro" no aparece en la lista de invitados.'
 *
 * CONCEPTOS DE ARRAYS A UTILIZAR:
 * - array.includes(valor): Devuelve true o false.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar el array 'invitados' con los 5 nombres en minúsculas.
 * - 2 PASO: Crear constantes al DOM para el formulario (#formInvitado), input (#inputNombre) y #resultado.
 * - 3 PASO: Escuchar el evento 'submit' pasando (e).
 * - 4 PASO: Llamar a e.preventDefault().
 * - 5 PASO: Evaluar con 'if (invitados.includes(nombre))'.
 * - 6 PASO: Mostrar el mensaje de acceso o denegación en #resultado.
 */

// estructura del programa principal

// declaracion del array de invitados en minúsculas
const invitados = ['lucia', 'marcos', 'sofia', 'daniel', 'elena'];

// constantes al DOM que queremos escuchar
const formInvitado = document.querySelector('#formInvitado');
const inputNombre = document.querySelector('#inputNombre');
const nodoResultado = document.querySelector('#resultado');

// colocar escuchadores de eventos
formInvitado.addEventListener('submit', function (e) {
    // Evitamos la recarga por defecto
    e.preventDefault();

    // entradas: pasamos a minúsculas para comparar limpiamente
    const nombre = inputNombre.value.trim().toLowerCase();
    let mensaje = '';

    if (nombre === '') {
        nodoResultado.textContent = 'Por favor, introduce un nombre para verificar.';
        return;
    }

    // procesamiento con if: includes() devuelve true o false
    if (invitados.includes(nombre)) {
        mensaje = `¡Acceso Concedido! "${nombre}" está en la lista de invitados VIP.`;
    } else {
        mensaje = `Acceso Denegado: "${nombre}" no aparece en la lista de invitados.`;
    }

    // salidas
    nodoResultado.textContent = mensaje;
});
