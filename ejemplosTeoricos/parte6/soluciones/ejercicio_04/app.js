/**
 * ENUNCIADO:
 * Ejercicio: Patrón de exclusión mutua con pestañas (Tabs).
 */

// estructura del programa principal

// 1. variables y constantes de estado

// 2. constantes al DOM
const pestanas = document.querySelectorAll('.tab-btn');
const contenidoTab = document.querySelector('#contenidoTab');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares
function desactivarTodasLasPestanas() {
    pestanas.forEach(function (tab) {
        tab.classList.remove('activo');
    });
}

// 4. funciones de eventos

// 5. escuchadores de eventos
pestanas.forEach(function (tab) {
    tab.addEventListener('click', function () {
        // 1. Quitar la clase 'activo' de todas las pestañas
        desactivarTodasLasPestanas();

        // 2. Añadir la clase 'activo' a la pestaña clicada
        tab.classList.add('activo');

        // 3. Actualizar la interfaz
        const nombreSeccion = tab.textContent.trim();
        contenidoTab.innerHTML = `Sección cargada: <strong>${nombreSeccion}</strong>. Visualizando los datos correspondientes.`;
        resultado.textContent = `Pestaña seleccionada actualmente: "${nombreSeccion}".`;
    });
});
