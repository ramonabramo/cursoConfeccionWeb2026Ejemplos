/**
 * PRÁCTICA 1 · PANEL DE LANZAMIENTO DE COHETE (SOLUCIÓN OFICIAL)
 * Curso: Confección y Publicación de Páginas Web
 * Profesor: Ramón Abramo
 *
 * 🎯 Funciones utilizadas: setInterval(), clearInterval() y setTimeout()
 */

// 1. Paso 1 · Crear las constantes de referencia al DOM
const pantalla = document.getElementById("pantalla");
const mensaje = document.getElementById("mensaje");
const btnIniciar = document.getElementById("btnIniciar");
const btnAbortar = document.getElementById("btnAbortar");

// 2. Paso 2 · Declarar las variables de estado
let segundos = 10;
let idIntervalo = null;

// 3. Paso 3 · Añadir el escuchador al botón de inicio (btnIniciar)
btnIniciar.addEventListener("click", () => {
    // Seguridad: si ya está corriendo, no creamos otro
    if (idIntervalo !== null) return;

    // Reiniciamos valores iniciales
    segundos = 10;
    pantalla.textContent = segundos;
    mensaje.textContent = "⏳ Cuenta atrás en curso...";

    // Cambiamos el estado de los botones
    btnIniciar.disabled = true;
    btnAbortar.disabled = false;

    // Iniciamos la cuenta atrás repetitiva cada 1000 ms (1 segundo)
    idIntervalo = setInterval(() => {
        segundos--;
        pantalla.textContent = segundos;

        // Comprobamos si ha llegado al final de la cuenta
        if (segundos === 0) {
            // Detenemos el intervalo para que no siga en negativos
            clearInterval(idIntervalo);
            idIntervalo = null;

            mensaje.textContent = "🔥 ¡Despegue realizado con éxito!";
            btnAbortar.disabled = true;

            // Programamos un reseteo visual único tras 3000 ms (3 segundos)
            setTimeout(() => {
                pantalla.textContent = "10";
                mensaje.textContent = "Sistemas preparados.";
                btnIniciar.disabled = false;
            }, 3000);
        }
    }, 1000);
});

// 4. Paso 4 · Añadir el escuchador al botón de abortar (btnAbortar)
btnAbortar.addEventListener("click", () => {
    if (idIntervalo !== null) {
        // Abortamos de inmediato la cuenta atrás
        clearInterval(idIntervalo);
        idIntervalo = null;

        mensaje.textContent = "🛑 Lanzamiento abortado por el usuario.";

        // Restauramos el estado de los botones
        btnAbortar.disabled = true;
        btnIniciar.disabled = false;
    }
});
