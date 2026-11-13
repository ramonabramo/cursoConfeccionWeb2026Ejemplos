/**
 * ENUNCIADO:
 * Ejercicio: Utiliza el evento 'change' y 'e.target.value' con menús desplegables (<select>).
 *
 * Cuando el usuario cambia la opción elegida en un desplegable, se dispara el
 * evento 'change'. A través de 'e.target.value' podemos saber cuál es el valor
 * del <option> que acaba de ser seleccionado.
 *
 * Opciones disponibles:
 * - 'es' -> España (Capital: Madrid, Moneda: Euro)
 * - 'mx' -> México (Capital: Ciudad de México, Moneda: Peso mexicano)
 * - 'ar' -> Argentina (Capital: Buenos Aires, Moneda: Peso argentino)
 * - 'co' -> Colombia (Capital: Bogotá, Moneda: Peso colombiano)
 * - ''   -> Opción por defecto no válida
 *
 * Al cambiar la opción:
 * 1. Obtendremos el valor con e.target.value.
 * 2. Utilizaremos 'if / else if / else' para asignar el mensaje informativo correspondiente.
 * 3. Mostraremos el mensaje en el div #resultado.
 *
 * EJEMPLO DE FUNCIONAMIENTO:
 * - Si se elige España:
 *   Se muestra: 'Has seleccionado España. Capital: Madrid | Moneda: Euro (€).'
 * - Si se regresa a la opción vacía:
 *   Se muestra: 'Por favor, selecciona un país válido de la lista.'
 *
 * OBJETO EVENT A UTILIZAR:
 * - Evento 'change' en el selector #selectorPais.
 * - e.target.value: el valor de la opción seleccionada.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Crear constantes al DOM para el selector (#selectorPais) y para el div (#resultado).
 * - 2 PASO: Escuchar el evento 'change' en el selector pasando el parámetro (e).
 * - 3 PASO: Obtener el valor elegido con e.target.value.
 * - 4 PASO: Evaluar con 'if / else if / else' los códigos de país ('es', 'mx', 'ar', 'co').
 * - 5 PASO: Mostrar la respuesta en #resultado.
 */

// estructura del programa principal

// constantes al DOM que queremos escuchar
const selectorPais = document.querySelector('#selectorPais');
const nodoResultado = document.querySelector('#resultado');

// colocar escuchadores de eventos
selectorPais.addEventListener('change', function (e) {
    // entradas: e.target.value nos entrega el valor del <option> elegido
    const codigoPais = e.target.value;
    let mensaje = '';

    // procesamiento con condicionales if / else if
    if (codigoPais === 'es') {
        mensaje = 'Has seleccionado España. Capital: Madrid | Moneda: Euro (€).';
    } else if (codigoPais === 'mx') {
        mensaje = 'Has seleccionado México. Capital: Ciudad de México | Moneda: Peso mexicano (MXN).';
    } else if (codigoPais === 'ar') {
        mensaje = 'Has seleccionado Argentina. Capital: Buenos Aires | Moneda: Peso argentino (ARS).';
    } else if (codigoPais === 'co') {
        mensaje = 'Has seleccionado Colombia. Capital: Bogotá | Moneda: Peso colombiano (COP).';
    } else {
        mensaje = 'Por favor, selecciona un país válido de la lista.';
    }

    // salidas
    nodoResultado.textContent = mensaje;
});
