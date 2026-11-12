/**
 * EJEMPLO DE CLASE 05 · Contador con Alternancia de Botones (.ocultar)
 * Curso: Confección y Publicación de Páginas Web
 * Profesor: Ramón Abramo
 *
 * ENUNCIADO:
 * Implementar un cronómetro de 3 estados (Detenido, Corriendo y Pausado) con botones Iniciar, Parar y Reiniciar,
 * mejorando la experiencia de usuario (UX) mediante clases CSS (.ocultar):
 * - Al inicio solo se muestra "Iniciar".
 * - Mientras corre se oculta "Iniciar" y se muestra "Parar".
 * - Al pausar se muestran "Iniciar" (para reanudar) y "Reiniciar" (para poner a cero), y se oculta "Parar".
 * - Al reiniciar se apaga el intervalo, se restablece el contador a 0 y se vuelve al estado inicial.
 *
 * PASOS EXPLICADOS EN CLASE:
 * 1. Declarar contador = 0 e idIntervalo = null.
 * 2. Capturar <output>, #iniciar, #parar y #reiniciar en el DOM.
 * 3. En Iniciar: verificar if (idIntervalo == null), lanzar setInterval, ocultar #iniciar y mostrar #parar.
 * 4. En Parar: detener intervalo, idIntervalo = null, mostrar #iniciar y #reiniciar, y ocultar #parar.
 * 5. En Reiniciar: limpiar intervalo, idIntervalo = null, contador = 0, actualizar salida y dejar visible solo #iniciar.
 */

// 1. Variables de estado
let contador = 0;
let idIntervalo = null;

// 2. Referencias al DOM
const salida = document.querySelector('output');
const botonIniciar = document.querySelector('#iniciar');
const botonParar = document.querySelector('#parar');
const botonReiniciar = document.querySelector('#reiniciar');

// 3. Escuchador Iniciar: arranca y conmuta visibilidad
botonIniciar.addEventListener('click', () => {
    if (idIntervalo == null) {
        idIntervalo = setInterval(() => {
            contador++;
            salida.textContent = contador;
        }, 1000);
        botonIniciar.classList.add('ocultar');
        botonParar.classList.remove('ocultar');
    }
});

// 4. Escuchador Parar: pausa y ofrece reanudar o reiniciar
botonParar.addEventListener('click', () => {
    clearInterval(idIntervalo);
    idIntervalo = null;
    botonIniciar.classList.remove('ocultar');
    botonParar.classList.add('ocultar');
    botonReiniciar.classList.remove('ocultar');
});

// 5. Escuchador Reiniciar: pone a 0 y restaura botones iniciales
botonReiniciar.addEventListener('click', () => {
    clearInterval(idIntervalo);
    idIntervalo = null;
    contador = 0;
    salida.textContent = contador;
    botonIniciar.classList.remove('ocultar');
    botonParar.classList.add('ocultar');
    botonReiniciar.classList.add('ocultar');
});
