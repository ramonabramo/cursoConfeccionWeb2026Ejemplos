/**
 * ENUNCIADO:
 * Ejercicio 04 (Solución): Scope Chain y Variable Shadowing.
 */

// 1. variables y constantes de estado
const configApp = { tema: 'Claro', modo: 'Producción', version: 1.0 };

// 2. constantes al DOM
const btnConsultarGlobal = document.querySelector('#btnConsultarGlobal');
const btnEjecutarLocal = document.querySelector('#btnEjecutarLocal');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares
function configurarEntornoPruebas() {
    // Variable Shadowing: esta constante local oculta temporalmente a la global del mismo nombre
    const configApp = { tema: 'Oscuro', modo: 'Desarrollo/Testing', version: 2.0 };

    return `
        Configuración DENTRO de la función (Ámbito Local con Shadowing):<br>
        • Tema: <strong>${configApp.tema}</strong> | Modo: <strong>${configApp.modo}</strong> | Versión: <strong>${configApp.version}</strong>
    `;
}

// 4. funciones de eventos
function verGlobal() {
    resultado.innerHTML = `
        Configuración en Ámbito GLOBAL (sin modificar):<br>
        • Tema: <strong>${configApp.tema}</strong> | Modo: <strong>${configApp.modo}</strong> | Versión: <strong>${configApp.version}</strong>
    `;
}

function verLocalYSombra() {
    const informeLocal = configurarEntornoPruebas();
    const estadoGlobal = `<br><br>Comprobación exterior posterior: La constante global 'configApp' permanece intacta en modo <strong>${configApp.modo}</strong>.`;
    resultado.innerHTML = informeLocal + estadoGlobal;
}

// 5. escuchadores de eventos
btnConsultarGlobal.addEventListener('click', verGlobal);
btnEjecutarLocal.addEventListener('click', verLocalYSombra);
