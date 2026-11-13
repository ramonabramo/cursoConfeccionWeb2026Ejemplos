/**
 * ENUNCIADO:
 * Ejercicio: Captura la posición física del cursor con e.clientX y e.clientY.
 *
 * Cuando el usuario hace clic con el ratón, el objeto 'event' guarda la posición
 * exacta donde ocurrió el clic en píxeles:
 * - e.clientX, e.clientY: Coordenadas relativas a la ventana del navegador.
 * - e.offsetX, e.offsetY: Coordenadas relativas al elemento en el que se hizo clic.
 *
 * Al hacer clic dentro del recuadro #zonaInteractiva:
 * 1. Obtendremos las coordenadas (e.clientX, e.clientY) y (e.offsetX, e.offsetY).
 * 2. Obtendremos el ancho del recuadro con e.target.clientWidth.
 * 3. Utilizaremos un 'if' para comprobar si el clic se dio en la mitad izquierda o derecha:
 *    - Si e.offsetX < (ancho / 2): 'mitad IZQUIERDA'
 *    - En caso contrario: 'mitad DERECHA'
 * 4. Mostraremos un mensaje en #resultado indicando las coordenadas y el lado pulsado.
 *
 * EJEMPLO DE FUNCIONAMIENTO:
 * - Al pulsar dentro del recuadro hacia la izquierda:
 *   Se muestra: 'Coordenadas ventana: (X: 240px, Y: 310px) | Coordenadas en la caja: (X: 85px, Y: 40px). Has pulsado en la mitad IZQUIERDA.'
 *
 * OBJETO EVENT A UTILIZAR:
 * - Evento 'click' en #zonaInteractiva.
 * - e.clientX, e.clientY: Posición horizontal y vertical en la ventana.
 * - e.offsetX, e.offsetY: Posición horizontal y vertical dentro de la caja.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Crear constantes al DOM para #zonaInteractiva y #resultado.
 * - 2 PASO: Escuchar el evento 'click' en #zonaInteractiva pasando el parámetro (e).
 * - 3 PASO: Leer e.clientX, e.clientY, e.offsetX y e.offsetY.
 * - 4 PASO: Obtener el ancho de la caja con e.target.clientWidth.
 * - 5 PASO: Comparar con un 'if' si e.offsetX es menor que el ancho entre 2.
 * - 6 PASO: Mostrar el mensaje en #resultado.
 */

// estructura del programa principal

// declaracion de variables y constantes globales

// constantes al DOM que queremos escuchar
// apuntar a la zona interactiva (#zonaInteractiva)
// apuntar al div #resultado

// colocar escuchadores de eventos
// escuchar el evento 'click' en la zona interactiva pasando (e)

    // estructura del programa dentro de la función

    // entradas
    // obtener coordenadas globales (e.clientX, e.clientY)
    // obtener coordenadas dentro de la caja (e.offsetX, e.offsetY)
    // obtener el ancho de la caja (e.target.clientWidth)

    // procesamiento
    // comprobar con un 'if' si el clic ocurrió en la mitad izquierda o derecha

    // salidas
    // mostrar el resultado detallado en #resultado
