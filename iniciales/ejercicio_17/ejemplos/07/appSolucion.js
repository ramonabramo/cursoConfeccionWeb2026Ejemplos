/**
 * EJEMPLO DE CLASE 07 · Carrusel de Imágenes con Temporizador (setInterval)
 * Curso: Confección y Publicación de Páginas Web
 * Profesor: Ramón Abramo
 *
 * ENUNCIADO:
 * Crear un carrusel de imágenes rotativo interactivo utilizando un Array de rutas de imagen
 * y la función setInterval() de JavaScript:
 * 1. Definir un array con la colección de imágenes disponibles en la carpeta imgs/.
 * 2. Al pulsar el botón "Iniciar", activar un temporizador repetitivo (setInterval cada 2000 ms)
 *    que vaya pasando automáticamente a la siguiente imagen del array en bucle cíclico.
 * 3. Al pulsar el botón "Parar", detener la reproducción automática mediante clearInterval()
 *    manteniendo visible la imagen actual.
 * 4. Al pulsar el botón "Reiniciar", detener el temporizador y volver a la primera imagen (índice 0).
 * 5. Aplicar la regla de seguridad contra intervalos duplicados (idIntervalo == null).
 *
 * PASOS EXPLICADOS EN CLASE:
 * 1. Declarar el array `imagenes` con las rutas relativas a los archivos .png.
 * 2. Declarar las variables de control: `indice = 0` (puntero a la foto actual) e `idIntervalo = null`.
 * 3. Capturar en el DOM: el elemento <img> (#foto), el indicador numérico y los tres botones.
 * 4. Programar una función auxiliar `mostrarImagen()` que actualice el atributo .src y el texto informativo.
 * 5. En el botón Iniciar: verificar si (idIntervalo == null) antes de lanzar el setInterval.
 * 6. En el botón Parar: llamar a clearInterval(idIntervalo) y asignar idIntervalo = null.
 * 7. En el botón Reiniciar: frenar intervalo, poner idIntervalo = null, resetear indice = 0 y mostrar la primera foto.
 */

// 1. Array con la colección de imágenes
const imagenes = [
    'imgs/01_programacion_codigo.png',
    'imgs/02_word_procesador_texto.png',
    'imgs/03_excel_hoja_calculo.png',
    'imgs/04_windows_sistema_operativo.png',
    'imgs/05_soporte_atencion.png',
    'imgs/06_panico_error_sistema.png',
    'imgs/07_idea_solucion.png',
    'imgs/08_aprobado_ok.png',
    'imgs/09_espera_cargando.png',
    'imgs/10_presentacion_graficos.png'
];

// 2. Variables de control de estado
let indice = 0;          // Índice de la imagen visible actualmente (de 0 a imagenes.length - 1)
let idIntervalo = null;   // Guardará el ID del setInterval para controlarlo

// 3. Captura de elementos del DOM
const foto = document.querySelector('#foto');
const indicador = document.querySelector('#indicador');
const mensajeEstado = document.querySelector('#mensajeEstado');
const botonIniciar = document.querySelector('#iniciar');
const botonParar = document.querySelector('#parar');
const botonReiniciar = document.querySelector('#reiniciar');

// 4. Función auxiliar para refrescar la interfaz con la imagen actual
function mostrarImagen() {
    foto.src = imagenes[indice];
    indicador.textContent = `Imagen ${indice + 1} de ${imagenes.length}`;
}

// 5. Escuchador: Iniciar la reproducción automática
botonIniciar.addEventListener('click', () => {
    // 🛡️ Seguridad anti-duplicados: si ya está reproduciéndose, no creamos otro intervalo
    if (idIntervalo == null) {
        mensajeEstado.textContent = '▶ Carrusel activo: cambiando cada 2 segundos...';

        // Iniciamos el ciclo repetitivo cada 2000 ms (2 segundos)
        idIntervalo = setInterval(() => {
            // Avanzamos al siguiente índice de forma circular usando el operador módulo (%)
            indice = (indice + 1) % imagenes.length;
            mostrarImagen();
        }, 2000);
    }
});

// 6. Escuchador: Pausar el carrusel en la imagen actual
botonParar.addEventListener('click', () => {
    if (idIntervalo !== null) {
        clearInterval(idIntervalo);
        idIntervalo = null;
        mensajeEstado.textContent = `⏸ Carrusel pausado en la imagen ${indice + 1}.`;
    }
});

// 7. Escuchador: Reiniciar al principio de la colección
botonReiniciar.addEventListener('click', () => {
    // 1. Detenemos cualquier intervalo en marcha
    clearInterval(idIntervalo);
    idIntervalo = null;

    // 2. Volvemos al primer elemento del array
    indice = 0;
    mostrarImagen();
    mensajeEstado.textContent = '🔄 Carrusel reiniciado a la primera imagen (detenido).';
});
