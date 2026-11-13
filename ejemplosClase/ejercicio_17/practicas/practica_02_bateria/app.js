/**
 * PRÁCTICA 2 · SIMULADOR DE CARGA DE BATERÍA Y ALERTA AUTOMÁTICA
 * Curso: Confección y Publicación de Páginas Web
 * Profesor: Ramón Abramo
 *
 * 🎯 Funciones a utilizar: setInterval(), clearInterval(), setTimeout() y clearTimeout()
 *
 * OBJETIVO:
 * Programar el indicador visual de carga de una batería:
 * 1. Al pulsar "Conectar cargador", la barra verde crece de 5% en 5% cada 200 ms hasta el 100%.
 *    (Evitar intervalos duplicados si ya está cargando o ya está al 100%).
 * 2. En cualquier momento se puede pulsar "Desconectar" para pausar la carga en el porcentaje actual.
 * 3. Al llegar al 100%, se detiene el intervalo y aparece el aviso "✅ ¡Batería completa al 100%!",
 *    que se borrará automáticamente tras 4 segundos con setTimeout().
 * 4. Al pulsar "Reiniciar batería", se resetea todo a 0%, se detiene el intervalo y, si había un
 *    setTimeout de aviso pendiente, se cancela con clearTimeout(idAvisoFinal).
 */

// 1. PASO 1 · Crear las constantes de referencia al DOM con document.getElementById()
// TODO: Capturar 'barraNivel', 'infoAviso', 'btnCargar', 'btnPausar', 'btnReiniciar'



// 2. PASO 2 · Declarar las variables de control con let
// TODO: Declarar:
// - porcentaje (iniciada en 0)
// - idCarga (iniciada en null, guardará el ID de setInterval)
// - idAvisoFinal (iniciada en null, guardará el ID de setTimeout)



// 3. PASO 3 · Escuchador para conectar el cargador (btnCargar)
// TODO: Programar:
// - Comprobar: if (idCarga !== null || porcentaje >= 100) return;
// - Mostrar en infoAviso: "⚡ Cargando batería..."
// - Iniciar setInterval cada 200 ms guardado en idCarga:
//   - Sumar 5 a porcentaje
//   - Actualizar style.width y textContent de barraNivel con porcentaje + "%"
//   - Si porcentaje >= 100:
//     - Detener con clearInterval(idCarga) e idCarga = null
//     - Mostrar en infoAviso: "✅ ¡Batería completa al 100%!"
//     - Programar setTimeout de 4000 ms guardado en idAvisoFinal que vacíe infoAviso.textContent = ""



// 4. PASO 4 · Escuchador para pausar o desconectar (btnPausar)
// TODO: Programar:
// - Detener intervalo con clearInterval(idCarga) e idCarga = null
// - Mostrar en infoAviso: "⏸️ Carga pausada."



// 5. PASO 5 · Escuchador para reiniciar (btnReiniciar)
// TODO: Programar:
// - Detener intervalo: clearInterval(idCarga) e idCarga = null
// - Cancelar aviso pendiente: clearTimeout(idAvisoFinal) e idAvisoFinal = null
// - Resetear porcentaje = 0 y actualizar barraNivel (width a "0%" y texto "0%")
// - Mostrar en infoAviso: "Cargador desconectado."
