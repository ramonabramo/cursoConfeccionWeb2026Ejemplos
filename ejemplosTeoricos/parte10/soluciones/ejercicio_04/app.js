// ==========================================================================
// EJERCICIO 04 (Práctica): Configurador de Tema con Clonación y Object.freeze()
// OBJETIVO: Blindar la configuración original con Object.freeze() y trabajar sobre una copia.
// ==========================================================================

// 1. variables y constantes de estado
const temaFabrica = Object.freeze({
    fondo: '#ffffff',
    texto: '#1e293b',
    tamano: '16px'
});

// Clonación inicial para permitir personalización
let temaUsuario = { ...temaFabrica };

// 2. constantes al DOM
const cajaPrevisualizacion = document.querySelector('#cajaPrevisualizacionTema');
const inputColorBg = document.querySelector('#inputColorBg');
const inputColorTexto = document.querySelector('#inputColorTexto');
const selectTamano = document.querySelector('#selectTamano');

const btnAplicarCambios = document.querySelector('#btnAplicarCambios');
const btnIntentarMutarFabrica = document.querySelector('#btnIntentarMutarFabrica');
const btnRestaurarFabrica = document.querySelector('#btnRestaurarFabrica');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares
function aplicarTemaEnDOM() {
    cajaPrevisualizacion.style.backgroundColor = temaUsuario.fondo;
    cajaPrevisualizacion.style.color = temaUsuario.texto;
    cajaPrevisualizacion.style.fontSize = temaUsuario.tamano;
}

function guardarCambiosUsuario() {
    temaUsuario.fondo = inputColorBg.value;
    temaUsuario.texto = inputColorTexto.value;
    temaUsuario.tamano = selectTamano.value;

    aplicarTemaEnDOM();

    resultado.textContent = `🎨 Configuración personalizada guardada: Fondo ${temaUsuario.fondo}, Texto ${temaUsuario.texto}, Tamaño ${temaUsuario.tamano}.`;
    resultado.className = 'resultado alerta-exito';
}

function intentarCorromperFabrica() {
    // Intentar mutar un objeto congelado
    temaFabrica.fondo = '#ff0000'; // Ignorado silenciosamente o error en strict mode

    resultado.textContent = `🛡️ ¡Protección activa!: temaFabrica.fondo sigue siendo "${temaFabrica.fondo}". Object.freeze() impidió corromper los ajustes de fábrica.`;
    resultado.className = 'resultado alerta-espera';
}

function restaurarValoresPorDefecto() {
    // Clonamos de nuevo la configuración de fábrica
    temaUsuario = { ...temaFabrica };

    inputColorBg.value = temaFabrica.fondo;
    inputColorTexto.value = temaFabrica.texto;
    selectTamano.value = temaFabrica.tamano;

    aplicarTemaEnDOM();

    resultado.textContent = '🔄 Tema restaurado con éxito a los valores originales de fábrica.';
    resultado.className = 'resultado';
}

// 4. funciones de eventos
function alPulsarAplicar() {
    guardarCambiosUsuario();
}

function alPulsarIntentarMutar() {
    intentarCorromperFabrica();
}

function alPulsarRestaurar() {
    restaurarValoresPorDefecto();
}

// 5. escuchadores de eventos (addEventListener)
btnAplicarCambios.addEventListener('click', alPulsarAplicar);
btnIntentarMutarFabrica.addEventListener('click', alPulsarIntentarMutar);
btnRestaurarFabrica.addEventListener('click', alPulsarRestaurar);

// Aplicar al inicio
aplicarTemaEnDOM();
