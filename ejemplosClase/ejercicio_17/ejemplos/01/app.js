/**
 * EJEMPLO DE CLASE 01 · setTimeout() y clearTimeout()
 * Curso: Confección y Publicación de Páginas Web
 * Profesor: Ramón Abramo
 *
 * ENUNCIADO:
 * Programar una alarma de ejecución diferida única que muestre un saludo por consola
 * tras 5 segundos (5000 ms), y asociar a un botón la capacidad de cancelar dicha alarma
 * antes de que se cumpla el plazo mediante clearTimeout().
 *
 * PASOS EXPLICADOS EN CLASE:
 * 1. Activar el temporizador con setTimeout(..., 5000) y guardar su código/ID en una constante (idAlarma).
 * 2. Capturar el botón <button> en el DOM usando document.querySelector('button').
 * 3. Añadir el escuchador al evento 'click' para abortar la alarma con clearTimeout(idAlarma).
 */

// 1. Activo el setTimeout y almaceno el código del timeout en una constante
const idAlarma = setTimeout(() => {
    console.log('Hola');
}, 5000);

// 2. Coloco un botón para parar el timeout
const boton = document.querySelector('button');

// 3. Escuchador para cancelar la alarma antes de los 5 segundos
boton.addEventListener('click', () => {
    clearTimeout(idAlarma);
    console.log('Alarma cancelada a tiempo');
});
