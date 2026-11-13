/**
 * PRÁCTICA 1 · PANEL DE LANZAMIENTO DE COHETE CON ABORTADO DE EMERGENCIA
 * Curso: Confección y Publicación de Páginas Web
 * Profesor: Ramón Abramo
 *
 * 🎯 Funciones a utilizar: setInterval(), clearInterval() y setTimeout()
 *
 * OBJETIVO:
 * Programar el panel de control de lanzamiento de un cohete espacial:
 * 1. Al pulsar "Iniciar cuenta atrás", el marcador descuenta segundos desde 10 hasta 0 (cada segundo).
 * 2. Mientras corre la cuenta, btnIniciar queda deshabilitado (disabled = true) y btnAbortar habilitado (disabled = false).
 * 3. Si el usuario pulsa "Abortar lanzamiento" antes de cero, se detiene el intervalo de inmediato y se avisa.
 * 4. Si la cuenta llega a 0, se muestra "¡Despegue realizado!", se detiene el intervalo y, 3 segundos después (setTimeout),
 *    el panel vuelve automáticamente a su estado inicial listo para otra misión.
 */

// 1. PASO 1 · Crear las constantes de referencia al DOM con document.getElementById()
// TODO: Capturar los elementos: 'pantalla', 'mensaje', 'btnIniciar', 'btnAbortar'



// 2. PASO 2 · Declarar las variables de estado con let
// TODO: Declarar 'segundos' (iniciada en 10) y 'idIntervalo' (iniciada en null)



// 3. PASO 3 · Añadir el escuchador de eventos click al botón de inicio (btnIniciar)
// TODO: Programar:
// - Reiniciar segundos a 10 y actualizar pantalla y mensaje ("⏳ Cuenta atrás en curso...")
// - Cambiar estados de disabled de los botones
// - Iniciar setInterval cada 1000 ms guardando el ID en idIntervalo
//   - En cada repetición: restar 1 a segundos y pintar en pantalla
//   - Si segundos === 0: detener con clearInterval, mostrar mensaje de despegue y programar
//     un setTimeout de 3000 ms que restaure la pantalla y reactive btnIniciar



// 4. PASO 4 · Añadir el escuchador de eventos click al botón de abortar (btnAbortar)
// TODO: Programar:
// - Detener inmediatamente el intervalo con clearInterval(idIntervalo)
// - Mostrar en mensaje: "🛑 Lanzamiento abortado por el usuario."
// - Restaurar el estado de los botones (btnAbortar desactivado, btnIniciar activado)
