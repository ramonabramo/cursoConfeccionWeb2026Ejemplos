/**
 * EJEMPLO DE CLASE 04 · Contador con Guardia Directa del ID (idIntervalo == null)
 * Curso: Confección y Publicación de Páginas Web
 * Profesor: Ramón Abramo
 *
 * ENUNCIADO:
 * Refactorizar el contador anterior para prescindir de la variable booleana adicional,
 * utilizando directamente el estado del identificador del temporizador (idIntervalo == null frente a ID numérico)
 * como guardia de seguridad contra intervalos acelerados por pulsaciones duplicadas.
 *
 * PASOS EXPLICADOS EN CLASE:
 * 1. Declarar contador = 0 e idIntervalo = null.
 * 2. Capturar los elementos del DOM (<output>, #iniciar, #parar).
 * 3. En Iniciar: evaluar if (idIntervalo == null). Si es null, arrancar setInterval cada 1000 ms.
 * 4. En Parar: detener con clearInterval(idIntervalo) y asignar inmediatamente idIntervalo = null para
 *    dejar la referencia limpia y habilitar un nuevo arranque.
 */

// 1. Variables de estado
let contador = 0;
let idIntervalo = null;

// 2. Referencias al DOM
const salida = document.querySelector('output');
const botonIniciar = document.querySelector('#iniciar');
const botonParar = document.querySelector('#parar');

// 3. Escuchador Iniciar con guardia directa de idIntervalo
botonIniciar.addEventListener('click', () => {
    if (idIntervalo == null) {
        idIntervalo = setInterval(() => {
            contador++;
            salida.textContent = contador;
        }, 1000);
    }
});

// 4. Escuchador Parar con reseteo de idIntervalo a null
botonParar.addEventListener('click', () => {
    clearInterval(idIntervalo);
    idIntervalo = null;
});
