/**
 * EJEMPLO 06 · Cuenta Atrás Combinando Ambos Temporizadores
 * Práctica 4 del Manual de Referencia Rápida
 * Curso: Confección y Publicación de Páginas Web
 * Profesor: Ramón Abramo
 */

// 1. Constantes al DOM
const btnCuentaAtras = document.getElementById('btnCuentaAtras');
const cajaVisor = document.getElementById('cajaVisor');
const numeroSegundos = document.getElementById('numeroSegundos');

// 2. Escuchador: Iniciar la cuenta atrás
btnCuentaAtras.addEventListener('click', () => {
    btnCuentaAtras.disabled = true;
    let restante = 5;

    cajaVisor.textContent = `⏳ Tiempo restante: ${restante}s`;
    cajaVisor.classList.remove('alerta');
    numeroSegundos.textContent = restante;

    // 1. setInterval para descontar los segundos en vivo
    const idCuenta = setInterval(() => {
        restante--;
        numeroSegundos.textContent = restante;

        if (restante > 0) {
            cajaVisor.textContent = `⏳ Tiempo restante: ${restante}s`;
        } else {
            // 2. Detenemos el intervalo repetitivo al llegar a cero
            clearInterval(idCuenta);

            cajaVisor.textContent = '🚨 ¡TIEMPO AGOTADO!';
            cajaVisor.classList.add('alerta');
            numeroSegundos.textContent = '0';

            // 3. Programamos un reseteo visual único tras 2 segundos con setTimeout
            setTimeout(() => {
                cajaVisor.textContent = 'Listo para comenzar';
                cajaVisor.classList.remove('alerta');
                numeroSegundos.textContent = '5';
                btnCuentaAtras.disabled = false;
            }, 2000);
        }
    }, 1000);
});
