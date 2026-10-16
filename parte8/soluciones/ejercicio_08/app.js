/**
 * ENUNCIADO:
 * Ejercicio 08 (Solución): Módulo Autónomo con IIFE.
 */

// Todo el componente se autoejecuta y se aísla de window gracias a la IIFE
(() => {
    // Variable de estado privada protegida
    let cuenta = 0;

    const btnSumar = document.querySelector('#btnSumar');
    const btnRestar = document.querySelector('#btnRestar');
    const btnResetear = document.querySelector('#btnResetear');
    const resultado = document.querySelector('#resultado');

    function actualizarVista(accion) {
        resultado.innerHTML = `
            Contador privado protegido por IIFE:<br>
            • Última acción: <strong>${accion}</strong><br>
            • Valor actual: <strong>${cuenta}</strong><br>
            <em>(La variable 'cuenta' es inaccesible desde window.cuenta).</em>
        `;
    }

    btnSumar.addEventListener('click', () => {
        cuenta++;
        actualizarVista('Incremento (+1)');
    });

    btnRestar.addEventListener('click', () => {
        cuenta--;
        actualizarVista('Decremento (-1)');
    });

    btnResetear.addEventListener('click', () => {
        cuenta = 0;
        actualizarVista('Reset a 0');
    });

    // Estado inicial
    actualizarVista('Inicialización');
})();
