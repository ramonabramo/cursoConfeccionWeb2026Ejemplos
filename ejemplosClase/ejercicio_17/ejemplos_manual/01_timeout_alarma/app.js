/**
 * EJEMPLO 01 · setTimeout() y clearTimeout()
 * Curso: Confección y Publicación de Páginas Web
 * Profesor: Ramón Abramo
 *
 * Objetivo:
 * Aprender a programar una ejecución diferida de una sola vez con setTimeout()
 * y abortarla antes de que venza mediante clearTimeout(id).
 */

// 1. Constantes al DOM
const icono = document.getElementById('icono');
const mensaje = document.getElementById('mensaje');
const barraProgreso = document.getElementById('barraProgreso');
const progresoContenedor = document.getElementById('progresoContenedor');
const btnActivar = document.getElementById('btnActivar');
const btnCancelar = document.getElementById('btnCancelar');

// 2. Variable para almacenar el ID del temporizador
// Si no guardamos este número que devuelve setTimeout, no podremos cancelarlo después.
let idAlarma = null;

// 3. Escuchador: Activar la alarma con cuenta atrás de 3 segundos
btnActivar.addEventListener('click', () => {
    // Actualizamos el estado visual
    mensaje.textContent = '⏳ Alarma programada... sonará en 3 segundos.';
    icono.textContent = '⏰';
    icono.classList.remove('sonando');
    
    // Mostramos la barra de progreso
    progresoContenedor.classList.remove('oculta');
    barraProgreso.style.width = '0%';
    setTimeout(() => {
        barraProgreso.style.width = '100%';
    }, 20);

    // Gestión de botones
    btnActivar.disabled = true;
    btnCancelar.disabled = false;

    // Paso clave: Programamos la ejecución diferida tras 3000 ms (3 segundos)
    idAlarma = setTimeout(() => {
        // Esta función se ejecuta exactamente una sola vez cuando pasan los 3 segundos
        mensaje.textContent = '🔔 ¡RIIIIING! ¡Han pasado 3 segundos!';
        icono.textContent = '🚨';
        icono.classList.add('sonando');

        // Restauramos los controles
        btnActivar.disabled = false;
        btnCancelar.disabled = true;
        idAlarma = null; // Vaciamos la referencia
    }, 3000);
});

// 4. Escuchador: Cancelar la alarma antes de que se cumpla el tiempo
btnCancelar.addEventListener('click', () => {
    if (idAlarma !== null) {
        // Cancelamos el setTimeout pendiente usando el identificador numérico
        clearTimeout(idAlarma);
        idAlarma = null;

        mensaje.textContent = '🛑 Alarma cancelada por el usuario antes de sonar.';
        icono.textContent = '⏰';
        icono.classList.remove('sonando');

        // Reiniciamos barra y botones
        barraProgreso.style.width = '0%';
        progresoContenedor.classList.add('oculta');
        btnActivar.disabled = false;
        btnCancelar.disabled = true;
    }
});
