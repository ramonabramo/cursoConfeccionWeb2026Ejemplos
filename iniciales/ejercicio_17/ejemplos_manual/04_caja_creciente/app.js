/**
 * EJEMPLO 04 · Caja Creciente hasta un Límite
 * Práctica 2 del Manual de Referencia Rápida
 * Curso: Confección y Publicación de Páginas Web
 * Profesor: Ramón Abramo
 */

// 1. Constantes al DOM
const btnCrecer = document.getElementById('btnCrecer');
const btnReiniciar = document.getElementById('btnReiniciar');
const caja = document.getElementById('caja');
const infoEstado = document.getElementById('infoEstado');

// 2. Variables de control
let anchoActual = 50;
let idAnimacion = null;

// 3. Escuchador: Iniciar la animación de crecimiento
btnCrecer.addEventListener('click', () => {
    // Seguridad: evitar disparar dos intervalos superpuestos
    if (idAnimacion !== null) return;

    btnCrecer.disabled = true;
    btnReiniciar.disabled = true;
    infoEstado.textContent = '🚀 Animando ancho: +5px cada 50 ms...';

    // Intervalo de alta frecuencia (cada 50 ms = 20 fps)
    idAnimacion = setInterval(() => {
        anchoActual += 5;
        
        // Modificamos el DOM en vivo
        caja.style.width = anchoActual + 'px';
        caja.textContent = anchoActual + 'px';

        // Comprobación de fin de animación
        if (anchoActual >= 300) {
            // Freno automático
            clearInterval(idAnimacion);
            idAnimacion = null;

            // Cambio visual de éxito
            caja.style.background = '#047857';
            caja.textContent = '¡300px LÍMITE!';
            infoEstado.textContent = '✅ Animación completada con éxito. Ancho final: 300px.';

            btnReiniciar.disabled = false;
        }
    }, 50);
});

// 4. Escuchador: Restaurar el estado inicial
btnReiniciar.addEventListener('click', () => {
    anchoActual = 50;
    caja.style.width = '50px';
    caja.style.background = '#0284c7';
    caja.textContent = '50px';
    infoEstado.textContent = '🔄 Caja restaurada a su ancho original (50px).';

    btnCrecer.disabled = false;
    btnReiniciar.disabled = true;
});
