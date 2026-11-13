// ==========================================================================
// EJERCICIO 10 (Práctica): Termostato con #celsius y Getters/Setters
// OBJETIVO: Crear la clase Termostato con campo privado, validación en setter y conversión en getter.
// ==========================================================================

// 1. variables y constantes de estado
class Termostato {
    #celsius; // Campo privado

    constructor(celsiusInicial = 20) {
        this.#celsius = 20; // Valor seguro base
        this.celsius = celsiusInicial; // Usamos el setter para validar
    }

    get celsius() {
        return this.#celsius;
    }

    set celsius(nuevoValor) {
        if (typeof nuevoValor !== 'number' || isNaN(nuevoValor)) {
            throw new Error('El valor debe ser un número.');
        }
        if (nuevoValor < -50 || nuevoValor > 60) {
            throw new Error(`${nuevoValor}°C está fuera de los límites operativos permitidos (-50°C a 60°C).`);
        }
        this.#celsius = nuevoValor;
    }

    // Getter calculado dinámicamente en tiempo real
    get fahrenheit() {
        return (this.#celsius * (9 / 5)) + 32;
    }
}

const termostato = new Termostato(21.5);

// 2. constantes al DOM
const tempCelsiusVisual = document.querySelector('#tempCelsiusVisual');
const tempFahrenheitVisual = document.querySelector('#tempFahrenheitVisual');
const estadoClima = document.querySelector('#estadoClima');

const inputNuevaTemp = document.querySelector('#inputNuevaTemp');
const btnFijarCelsius = document.querySelector('#btnFijarCelsius');
const btnSubirTemp = document.querySelector('#btnSubirTemp');
const btnBajarTemp = document.querySelector('#btnBajarTemp');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares
function actualizarInterfazTermostato() {
    tempCelsiusVisual.textContent = `${termostato.celsius.toFixed(1)} °C`;
    tempFahrenheitVisual.textContent = `${termostato.fahrenheit.toFixed(1)} °F`;
    inputNuevaTemp.value = termostato.celsius.toFixed(1);

    if (termostato.celsius < 16) {
        estadoClima.textContent = '❄️ FRÍO';
        estadoClima.className = 'badge-clima clima-frio';
    } else if (termostato.celsius <= 25) {
        estadoClima.textContent = '🍃 CONFORTABLE';
        estadoClima.className = 'badge-clima clima-confort';
    } else {
        estadoClima.textContent = '🔥 CALUROSO';
        estadoClima.className = 'badge-clima clima-calor';
    }
}

function cambiarTemperatura(nuevoValor) {
    try {
        termostato.celsius = nuevoValor; // Invocamos el setter
        actualizarInterfazTermostato();

        resultado.textContent = `✅ Temperatura fijada en ${termostato.celsius.toFixed(1)} °C (${termostato.fahrenheit.toFixed(1)} °F).`;
        resultado.className = 'resultado alerta-exito';
    } catch (err) {
        resultado.textContent = `❌ Error de validación: ${err.message}`;
        resultado.className = 'resultado alerta-peligro';
    }
}

// 4. funciones de eventos
function alPulsarFijar() {
    const valor = Number(inputNuevaTemp.value);
    cambiarTemperatura(valor);
}

function alPulsarSubir() {
    cambiarTemperatura(termostato.celsius + 1);
}

function alPulsarBajar() {
    cambiarTemperatura(termostato.celsius - 1);
}

// 5. escuchadores de eventos (addEventListener)
btnFijarCelsius.addEventListener('click', alPulsarFijar);
btnSubirTemp.addEventListener('click', alPulsarSubir);
btnBajarTemp.addEventListener('click', alPulsarBajar);

// Render inicial
actualizarInterfazTermostato();
