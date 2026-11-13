/**
 * ENUNCIADO:
 * Ejercicio: Descubre el objeto 'event' y su propiedad 'type'.
 *
 * Cuando ocurre una acción en la página (como un clic), el navegador
 * genera de forma automática un objeto especial llamado 'event' (o simplemente 'e')
 * y se lo envía a la función que escucha el evento.
 *
 * Al hacer clic en el botón #btnSaludar:
 * 1. Accederemos al tipo de evento que acaba de ocurrir usando: e.type
 * 2. Accederemos a la etiqueta HTML sobre la que se hizo clic usando: e.target.tagName
 * 3. Mostraremos un mensaje en pantalla indicando ambos datos.
 *
 * EJEMPLO DE FUNCIONAMIENTO:
 * - Al pulsar el botón #btnSaludar:
 *   Se muestra: 'Has disparado un evento de tipo: "click" sobre una etiqueta <BUTTON>.'
 *
 * OBJETO EVENT A UTILIZAR:
 * - Escuchar el evento 'click' en el botón #btnSaludar.
 * - Recibir el objeto como parámetro de la función: function (e) { ... }
 * - Propiedad e.type: devuelve el tipo de evento (en este caso "click").
 * - Propiedad e.target.tagName: devuelve el nombre de la etiqueta HTML ("BUTTON").
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar e inicializar la variable 'mensaje'.
 * - 2 PASO: Crear las constantes al DOM usando querySelector():
 *           * Botón con id '#btnSaludar'.
 *           * Div con id '#resultado'.
 * - 3 PASO: Escuchar el evento 'click' del botón pasando la función con el parámetro (e).
 * - 4 PASO: Dentro de la función, obtener el tipo de evento (e.type) y la etiqueta (e.target.tagName).
 * - 5 PASO: Construir el mensaje y mostrarlo en el div #resultado con textContent.
 */

// estructura del programa principal

// declaracion de variables y constantes globales
let mensaje = '';

// constantes al DOM que queremos escuchar
const btnSaludar = document.querySelector('#btnSaludar');
const nodoResultado = document.querySelector('#resultado');

// colocar escuchadores de eventos
// El navegador pasa automáticamente el objeto del evento a la función manejadora (e)
btnSaludar.addEventListener('click', function (e) {

    // entradas
    // e.type contiene el nombre del evento ('click')
    const tipoEvento = e.type;
    // e.target contiene el elemento que disparó el evento, y tagName su etiqueta
    const nombreEtiqueta = e.target.tagName;

    // procesamiento
    mensaje = `Has disparado un evento de tipo: "${tipoEvento}" sobre una etiqueta <${nombreEtiqueta}>.`;

    // salidas
    nodoResultado.textContent = mensaje;
});
