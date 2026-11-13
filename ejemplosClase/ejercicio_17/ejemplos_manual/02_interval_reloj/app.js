/**
 * EJEMPLO 02 · setInterval() y clearInterval()
 * Curso: Confección y Publicación de Páginas Web
 * Profesor: Ramón Abramo
 *
 * Objetivo:
 * Iniciar un ciclo periódico repetitivo con setInterval() y aprender a
 * detenerlo con clearInterval() mediante una condición de parada o botón manual.
 */

// 1. Constantes al DOM
const contadorVueltas = document.getElementById('contadorVueltas');
const mensajeEstado = document.getElementById('mensajeEstado');
const pulsos = document.querySelectorAll('.pulso');
const btnIniciar = document.getElementById('btnIniciar');
const btnDetener = document.getElementById('btnDetener');

// 2. Variables de control
let vueltas = 0;
let idReloj = null; // Guardará el identificador numérico de setInterval

// Función auxiliar para iluminar los indicadores de pulso
function actualizarIndicadores(indice) {
    pulsos.forEach((el, i) => {
        if (i < indice) {
            el.classList.add('activo');
        } else {
            el.classList.remove('activo');
        }
    });
}

// 3. Escuchador: Iniciar el metrónomo repetitivo
btnIniciar.addEventListener('click', () => {
    // Si ya está funcionando, no creamos un segundo intervalo
    if (idReloj !== null) return;

    // Reiniciamos contador y estado
    vueltas = 0;
    contadorVueltas.textContent = vueltas;
    actualizarIndicadores(0);
    mensajeEstado.textContent = '⏱️ Metrónomo en marcha: pulso cada 1000 ms...';

    // Estados de los botones
    btnIniciar.disabled = true;
    btnDetener.disabled = false;

    // Paso clave: Iniciar el intervalo periódico
    idReloj = setInterval(() => {
        vueltas++;
        contadorVueltas.textContent = vueltas;
        actualizarIndicadores(vueltas);
        mensajeEstado.textContent = `Paso ejecutado: vuelta ${vueltas} de 5`;

        // Condición de parada automática
        if (vueltas === 5) {
            // Detenemos el intervalo periódico
            clearInterval(idReloj);
            idReloj = null;

            mensajeEstado.textContent = '🏁 ¡Meta alcanzada! Intervalo detenido automáticamente.';
            btnIniciar.disabled = false;
            btnDetener.disabled = true;
        }
    }, 1000);
});

// 4. Escuchador: Detener manualmente el metrónomo en cualquier instante
btnDetener.addEventListener('click', () => {
    if (idReloj !== null) {
        clearInterval(idReloj);
        idReloj = null;

        mensajeEstado.textContent = `🛑 Intervalo detenido manualmente en la vuelta ${vueltas}.`;
        btnIniciar.disabled = false;
        btnDetener.disabled = true;
    }
});
