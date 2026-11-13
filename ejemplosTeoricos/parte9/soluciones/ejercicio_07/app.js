// ==========================================================================
// EJERCICIO 07 (Guiado): Barra de Progreso de Instalación (setInterval)
// OBJETIVO: Incrementar porcentaje y style.width cada 40ms, autolimpiando al llegar a 100%.
// ==========================================================================

// 1. variables y constantes de estado
let instalacionIntervalId = null;
let porcentaje = 0;

// 2. constantes al DOM
const textoFase = document.querySelector('#textoFase');
const porcentajeTexto = document.querySelector('#porcentajeTexto');
const barraInterior = document.querySelector('#barraInterior');
const btnIniciar = document.querySelector('#btnIniciarInstalacion');
const btnCancelar = document.querySelector('#btnCancelarInstalacion');
const btnResetear = document.querySelector('#btnResetearInstalacion');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares
function actualizarFaseTexto(p) {
    if (p < 25) {
        textoFase.textContent = '📦 Descargando módulos del paquete...';
    } else if (p < 60) {
        textoFase.textContent = '⚙️ Compilando recursos y dependencias...';
    } else if (p < 90) {
        textoFase.textContent = '🔒 Verificando firmas criptográficas...';
    } else if (p < 100) {
        textoFase.textContent = '✨ Finalizando configuración del entorno...';
    } else {
        textoFase.textContent = '✅ ¡Instalación completada con éxito!';
    }
}

function iniciarInstalacion() {
    // Si ya está corriendo, no permitimos solapar intervalos
    if (instalacionIntervalId !== null) return;

    if (porcentaje >= 100) {
        porcentaje = 0; // Reiniciar si ya estaba terminado
    }

    btnIniciar.disabled = true;
    btnCancelar.disabled = false;
    btnResetear.disabled = true;

    resultado.textContent = '⚙️ Instalación en curso. Intervalo de animación activo (40ms por tick)...';
    resultado.className = 'resultado alerta-espera';

    // Intervalo de 40ms -> 100 ticks = 4000ms (4 segundos totales)
    instalacionIntervalId = setInterval(() => {
        porcentaje++;

        // Actualizar DOM
        barraInterior.style.width = `${porcentaje}%`;
        porcentajeTexto.textContent = `${porcentaje}%`;
        actualizarFaseTexto(porcentaje);

        // Condición de parada obligatoria
        if (porcentaje >= 100) {
            clearInterval(instalacionIntervalId);
            instalacionIntervalId = null;

            btnIniciar.disabled = false;
            btnCancelar.disabled = true;
            btnResetear.disabled = false;

            resultado.textContent = '🎉 ¡El software se ha instalado con éxito! El intervalo fue cancelado automáticamente con clearInterval().';
            resultado.className = 'resultado alerta-exito';
        }
    }, 40);
}

function cancelarInstalacion() {
    if (instalacionIntervalId !== null) {
        clearInterval(instalacionIntervalId);
        instalacionIntervalId = null;

        btnIniciar.disabled = false;
        btnCancelar.disabled = true;
        btnResetear.disabled = false;

        resultado.textContent = `🛑 Instalación abortada por el usuario en el ${porcentaje}%. El intervalo ha sido destruido.`;
        resultado.className = 'resultado alerta-peligro';
    }
}

function resetearInstalacion() {
    cancelarInstalacion();
    porcentaje = 0;
    barraInterior.style.width = '0%';
    porcentajeTexto.textContent = '0%';
    textoFase.textContent = 'Listo para instalar';

    btnIniciar.disabled = false;
    btnCancelar.disabled = true;

    resultado.textContent = '🔄 Progreso reseteado a 0%. Listo para una nueva prueba.';
    resultado.className = 'resultado';
}

// 4. funciones de eventos
function alPulsarIniciar() {
    iniciarInstalacion();
}

function alPulsarCancelar() {
    cancelarInstalacion();
}

function alPulsarResetear() {
    resetearInstalacion();
}

// 5. escuchadores de eventos (addEventListener)
btnIniciar.addEventListener('click', alPulsarIniciar);
btnCancelar.addEventListener('click', alPulsarCancelar);
btnResetear.addEventListener('click', alPulsarResetear);
