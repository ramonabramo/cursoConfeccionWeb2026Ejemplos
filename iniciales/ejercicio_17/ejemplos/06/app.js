/**
 * EJEMPLO DE CLASE 06 · Barra de Carga Animada (Iniciar, Parar y Reiniciar)
 * Curso: Confección y Publicación de Páginas Web
 * Profesor: Ramón Abramo
 *
 * ENUNCIADO:
 * Programar la animación de una barra gráfica (#barra) que crezca dinámicamente aumentando
 * su anchura en píxeles paso a paso mediante setInterval():
 * - El botón "Iniciar" hace crecer la barra periódicamente (por ejemplo: +10px cada 100 ms).
 * - El botón "Parar" congela el crecimiento en el ancho actual mediante clearInterval().
 * - El botón "Reiniciar" detiene la animación y restaura el ancho a su dimensión original (10px).
 *
 * PASOS EXPLICADOS EN CLASE:
 * 1. Declarar las variables de control: ancho = 10 e idIntervalo = null.
 * 2. Capturar en el DOM el elemento #barra y los botones #iniciar, #parar y #reiniciar.
 * 3. En Iniciar: validar if (idIntervalo == null) para evitar duplicados. Iniciar setInterval sumando píxeles
 *    y asignando el valor a barra.style.width.
 * 4. En Parar: detener con clearInterval(idIntervalo) y asignar idIntervalo = null.
 * 5. En Reiniciar: frenar intervalo, idIntervalo = null, restaurar ancho = 0 y aplicar al style.width.
 */

// 1. Variables de control
let ancho = 10;
let idIntervalo = null;
const paso = 10;

// 2. Referencias al DOM
const barra = document.querySelector('#barra');
const botonIniciar = document.querySelector('#iniciar');
const botonParar = document.querySelector('#parar');
const botonReiniciar = document.querySelector('#reiniciar');

// 3. Escuchador Iniciar: hace crecer la barra paso a paso
botonIniciar.addEventListener('click', () => {
    if (idIntervalo == null) {
        idIntervalo = setInterval(() => {
            ancho += paso;
            barra.style.width = ancho + 'px';
        }, 100);
    }
});

// 4. Escuchador Parar: congela la barra en su anchura actual
botonParar.addEventListener('click', () => {
    clearInterval(idIntervalo);
    idIntervalo = null;
});

// 5. Escuchador Reiniciar: detiene y restaura el tamaño base
botonReiniciar.addEventListener('click', () => {
    clearInterval(idIntervalo);
    idIntervalo = null;
    ancho = 0;
    barra.style.width = ancho + 'px';
});
