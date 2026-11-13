/**
 * EJEMPLO 05 · Contador Interactivo: Arrancar, Parar y Reiniciar
 * Práctica 3 del Manual de Referencia Rápida
 * Curso: Confección y Publicación de Páginas Web
 * Profesor: Ramón Abramo
 */

// 1. Constantes al DOM
const pantalla = document.getElementById('pantallaContador');
const indicador = document.getElementById('indicadorEstado');
const btnArrancar = document.getElementById('btnArrancar');
const btnParar = document.getElementById('btnParar');
const btnReiniciar = document.getElementById('btnReiniciar');

// 2. Variables de estado
let segundos = 0;
let idCronometro = null; // null significa que el reloj está detenido

// 3. Escuchador: Arrancar el cronómetro
btnArrancar.addEventListener('click', () => {
    // 🛡️ Regla de oro: si ya está en marcha, salimos de la función
    // Esto impide crear dos intervalos simultáneos si el usuario pulsa varias veces.
    if (idCronometro !== null) return;

    indicador.textContent = 'CORRIENDO';
    indicador.className = 'indicador corriendo';

    // Creamos el intervalo repetitivo cada 1000 ms (1 segundo)
    idCronometro = setInterval(() => {
        segundos++;
        pantalla.textContent = segundos;
    }, 1000);
});

// 4. Escuchador: Pausar el cronómetro (mantiene el valor actual de segundos)
btnParar.addEventListener('click', () => {
    if (idCronometro !== null) {
        // Detenemos el intervalo
        clearInterval(idCronometro);
        // ¡Importante! Ponemos idCronometro a null para que pueda volver a arrancar
        idCronometro = null;

        indicador.textContent = 'PAUSADO';
        indicador.className = 'indicador pausado';
    }
});

// 5. Escuchador: Reiniciar a cero
btnReiniciar.addEventListener('click', () => {
    // 1. Detenemos cualquier intervalo en curso
    clearInterval(idCronometro);
    idCronometro = null;

    // 2. Reseteamos la variable y el DOM a 0
    segundos = 0;
    pantalla.textContent = '0';

    indicador.textContent = 'DETENIDO';
    indicador.className = 'indicador detenido';
});
