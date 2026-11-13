// ==========================================================================
// EJERCICIO 10 (Práctica): Termostato con #celsius y Getters/Setters
// OBJETIVO: Crear la clase Termostato con campo privado, validación en setter y conversión en getter.
// ==========================================================================

// 1. variables y constantes de estado
// - Definir la clase Termostato:
//     class Termostato {
//         #celsius;
//         constructor(celsiusInicial = 20) {
//             this.celsius = celsiusInicial; // Pasa por el setter
//         }
//         get celsius() { return this.#celsius; }
//         set celsius(valor) {
//             if (valor >= -50 && valor <= 60) {
//                 this.#celsius = valor;
//             } else {
//                 throw new Error('Temperatura fuera de rango permitido (-50°C a 60°C).');
//             }
//         }
//         get fahrenheit() {
//             return (this.#celsius * 9/5) + 32;
//         }
//     }
// - Instancia: const termostato = new Termostato(21.5);

// 2. constantes al DOM
// - Displays: #tempCelsiusVisual, #tempFahrenheitVisual, #estadoClima
// - Input: #inputNuevaTemp
// - Botones: #btnFijarCelsius, #btnSubirTemp, #btnBajarTemp
// - Div resultado: #resultado

// 3. funciones auxiliares
// - function actualizarInterfazTermostato():
//     * Pinta termostato.celsius y termostato.fahrenheit con toFixed(1).
//     * Cambia #estadoClima (Frío <15°C, Confortable 15-25°C, Calor >25°C).
// - function fijarTemperatura(valor):
//     * Intenta termostato.celsius = valor en un bloque try/catch.
//     * Si falla la validación, muestra alerta en #resultado.

// 4. funciones de eventos
// - Click en #btnFijarCelsius
// - Click en #btnSubirTemp -> fijarTemperatura(termostato.celsius + 1)
// - Click en #btnBajarTemp -> fijarTemperatura(termostato.celsius - 1)

// 5. escuchadores de eventos (addEventListener)
