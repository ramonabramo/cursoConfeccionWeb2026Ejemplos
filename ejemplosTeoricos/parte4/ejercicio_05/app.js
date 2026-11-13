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

// declaracion de variables y constantes globales

// constantes al DOM que queremos escuchar
// apuntar al selector #selectorPais
// apuntar al div #resultado

// colocar escuchadores de eventos
// escuchar el evento 'change' en el selector pasando (e)

    // estructura del programa dentro de la función

    // entradas
    // leer el valor seleccionado con e.target.value

    // procesamiento
    // utilizar 'if / else if / else' según el valor del país

    // salidas
    // mostrar el mensaje en #resultado
