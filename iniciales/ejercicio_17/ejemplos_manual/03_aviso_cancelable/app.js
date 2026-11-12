/**
 * EJEMPLO 03 · Aviso Retardado con Botón de Cancelación
 * Práctica 1 del Manual de Referencia Rápida
 * Curso: Confección y Publicación de Páginas Web
 * Profesor: Ramón Abramo
 */

// 1. Constantes al DOM
const iconoBuzon = document.getElementById('iconoBuzon');
const estado = document.getElementById('estado');
const cuentaRegresiva = document.getElementById('cuentaRegresiva');
const segundosRestantes = document.getElementById('segundosRestantes');
const barraTimer = document.getElementById('barraTimer');
const btnEnviar = document.getElementById('btnEnviar');
const btnCancelar = document.getElementById('btnCancelar');

// 2. Variables de control
let temporizadorEnvio = null;
let temporizadorContador = null;
let cuenta = 4;

// 3. Escuchador: Iniciar el envío diferido
btnEnviar.addEventListener('click', () => {
    estado.textContent = '📤 Enviando en 4 segundos... Puedes deshacer.';
    iconoBuzon.textContent = '⏳';
    
    btnEnviar.disabled = true;
    btnCancelar.disabled = false;

    // Animación visual de cuenta atrás
    cuentaRegresiva.classList.remove('oculta');
    cuenta = 4;
    segundosRestantes.textContent = cuenta;
    barraTimer.style.transition = 'none';
    barraTimer.style.width = '100%';
    setTimeout(() => {
        barraTimer.style.transition = 'width 4s linear';
        barraTimer.style.width = '0%';
    }, 20);

    // Intervalo secundario de apoyo visual para descontar los segundos en texto
    temporizadorContador = setInterval(() => {
        cuenta--;
        if (cuenta > 0) {
            segundosRestantes.textContent = cuenta;
        } else {
            clearInterval(temporizadorContador);
        }
    }, 1000);

    // Acción principal con setTimeout (4000 ms = 4 segundos)
    temporizadorEnvio = setTimeout(() => {
        estado.textContent = '✅ ¡Mensaje enviado con éxito al destinatario!';
        iconoBuzon.textContent = '📬';
        cuentaRegresiva.classList.add('oculta');

        btnCancelar.disabled = true;
        btnEnviar.disabled = false;
        temporizadorEnvio = null;
    }, 4000);
});

// 4. Escuchador: Deshacer o cancelar el envío antes de que venza
btnCancelar.addEventListener('click', () => {
    if (temporizadorEnvio !== null) {
        // Abortamos de inmediato el temporizador principal
        clearTimeout(temporizadorEnvio);
        temporizadorEnvio = null;

        // Cancelamos también el contador visual
        clearInterval(temporizadorContador);

        estado.textContent = '↩ Envío cancelado por el usuario. El mensaje permanece en borradores.';
        iconoBuzon.textContent = '📝';
        cuentaRegresiva.classList.add('oculta');

        btnCancelar.disabled = true;
        btnEnviar.disabled = false;
    }
});
