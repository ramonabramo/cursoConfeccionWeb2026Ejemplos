/**
 * PRÁCTICA 2 · SIMULADOR DE BATERÍA (SOLUCIÓN OFICIAL)
 * Curso: Confección y Publicación de Páginas Web
 * Profesor: Ramón Abramo
 *
 * 🎯 Funciones utilizadas: setInterval(), clearInterval(), setTimeout() y clearTimeout()
 */

// 1. Paso 1 · Crear las constantes de referencia al DOM
const barraNivel = document.getElementById("barraNivel");
const infoAviso = document.getElementById("infoAviso");
const btnCargar = document.getElementById("btnCargar");
const btnPausar = document.getElementById("btnPausar");
const btnReiniciar = document.getElementById("btnReiniciar");

// 2. Paso 2 · Declarar las variables de control
let porcentaje = 0;
let idCarga = null;      // Guardará el ID de setInterval
let idAvisoFinal = null; // Guardará el ID de setTimeout para borrar el aviso

// 3. Paso 3 · Escuchador para conectar el cargador (btnCargar)
btnCargar.addEventListener("click", () => {
    // 🛡️ Seguridad: impedir duplicar intervalos o cargar si ya está llena
    if (idCarga !== null || porcentaje >= 100) return;

    infoAviso.textContent = "⚡ Cargando batería...";

    // Intervalo de carga: suma 5% cada 200 ms
    idCarga = setInterval(() => {
        porcentaje += 5;

        // Actualizamos anchura y texto en el DOM
        barraNivel.style.width = porcentaje + "%";
        barraNivel.textContent = porcentaje + "%";

        // Comprobación de batería completa
        if (porcentaje >= 100) {
            // Detenemos el intervalo
            clearInterval(idCarga);
            idCarga = null;

            infoAviso.textContent = "✅ ¡Batería completa al 100%!";

            // Programamos el borrado automático del aviso tras 4 segundos
            idAvisoFinal = setTimeout(() => {
                infoAviso.textContent = "Cargador desconectado.";
                idAvisoFinal = null;
            }, 4000);
        }
    }, 200);
});

// 4. Paso 4 · Escuchador para pausar la carga (btnPausar)
btnPausar.addEventListener("click", () => {
    if (idCarga !== null) {
        clearInterval(idCarga);
        idCarga = null;
        infoAviso.textContent = "⏸️ Carga pausada.";
    }
});

// 5. Paso 5 · Escuchador para reiniciar la batería (btnReiniciar)
btnReiniciar.addEventListener("click", () => {
    // 1. Detenemos cualquier carga en curso
    if (idCarga !== null) {
        clearInterval(idCarga);
        idCarga = null;
    }

    // 2. Cancelamos cualquier setTimeout de aviso pendiente con clearTimeout
    if (idAvisoFinal !== null) {
        clearTimeout(idAvisoFinal);
        idAvisoFinal = null;
    }

    // 3. Reseteamos variables y DOM
    porcentaje = 0;
    barraNivel.style.width = "0%";
    barraNivel.textContent = "0%";
    infoAviso.textContent = "Cargador desconectado.";
});
