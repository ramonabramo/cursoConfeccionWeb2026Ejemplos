/**
 * ENUNCIADO:
 * Ejercicio: Captura el valor en tiempo real con el evento 'input' y 'e.target.value'.
 *
 * El evento 'input' se dispara inmediatamente cada vez que el usuario teclea,
 * borra o pega texto en un campo.
 * Gracias a 'e.target.value', podemos acceder directamente al contenido del input
 * sin necesidad de volver a buscarlo en el DOM con document.querySelector().
 *
 * Al escribir en el campo #campoTexto:
 * 1. Leeremos el valor que tiene el input en ese instante con e.target.value.
 * 2. Calcularemos el número total de caracteres (e.target.value.length).
 * 3. Si la longitud es 0:
 *    Mostraremos: 'Esperando a que escribas algo...'
 * 4. Si la longitud es mayor que 0:
 *    Mostraremos: 'Caracteres: [longitud] | En mayúsculas: [texto en mayúsculas]'
 *
 * EJEMPLO DE FUNCIONAMIENTO:
 * - Si el campo está vacío:
 *   Se muestra: 'Esperando a que escribas algo...'
 * - Si se escribe 'hola':
 *   Se muestra: 'Caracteres: 4 | En mayúsculas: HOLA'
 *
 * OBJETO EVENT A UTILIZAR:
 * - Evento 'input' sobre el campo #campoTexto.
 * - e.target: el elemento <input> que originó el evento.
 * - e.target.value: el texto actual dentro del input.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Crear constantes al DOM para el input (#campoTexto) y el div (#resultado).
 * - 2 PASO: Escuchar el evento 'input' en el input pasando (e).
 * - 3 PASO: Leer e.target.value y guardar su longitud (length).
 * - 4 PASO: Evaluar con un 'if' si la longitud es igual a 0.
 * - 5 PASO: Componer el mensaje y mostrarlo en #resultado.
 */

// estructura del programa principal

// constantes al DOM que queremos escuchar
const campoTexto = document.querySelector('#campoTexto');
const nodoResultado = document.querySelector('#resultado');

// colocar escuchadores de eventos
campoTexto.addEventListener('input', function (e) {
    // entradas: e.target es el input actual y .value contiene su texto en vivo
    const textoActual = e.target.value;
    const totalCaracteres = textoActual.length;
    let mensaje = '';

    // procesamiento con if
    if (totalCaracteres === 0) {
        mensaje = 'Esperando a que escribas algo...';
    } else {
        mensaje = `Caracteres: ${totalCaracteres} | En mayúsculas: ${textoActual.toUpperCase()}`;
    }

    // salidas
    nodoResultado.textContent = mensaje;
});
