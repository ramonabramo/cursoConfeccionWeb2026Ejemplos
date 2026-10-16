// ==========================================================================
// EJERCICIO 07 (Guiado): Clases en ES6 (Constructor, new e Instancias)
// OBJETIVO: Definir una clase con class, inicializar en constructor() y crear instancias con new.
// ==========================================================================

// 1. variables y constantes de estado
class Coche {
    constructor(marca, modelo, velocidadMax) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadMax = velocidadMax;
        this.velocidadActual = 0;
    }

    acelerar(km = 10) {
        this.velocidadActual = Math.min(this.velocidadActual + km, this.velocidadMax);
        return `${this.marca} ${this.modelo} aceleró a ${this.velocidadActual} km/h.`;
    }

    frenar(km = 10) {
        this.velocidadActual = Math.max(this.velocidadActual - km, 0);
        return `${this.marca} ${this.modelo} redujo a ${this.velocidadActual} km/h.`;
    }
}

// Creación de dos instancias con 'new'
const coche1 = new Coche('Seat', 'Ibiza', 180);
const coche2 = new Coche('Tesla', 'Model 3', 225);

// 2. constantes al DOM
const velCoche1 = document.querySelector('#velCoche1');
const velCoche2 = document.querySelector('#velCoche2');

const btnAcelerarCoche1 = document.querySelector('#btnAcelerarCoche1');
const btnFrenarCoche1 = document.querySelector('#btnFrenarCoche1');

const btnAcelerarCoche2 = document.querySelector('#btnAcelerarCoche2');
const btnFrenarCoche2 = document.querySelector('#btnFrenarCoche2');

const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares
function actualizarInterfazCoches() {
    velCoche1.textContent = `${coche1.velocidadActual} km/h`;
    velCoche2.textContent = `${coche2.velocidadActual} km/h`;
}

// 4. funciones de eventos
function alAcelerarCoche1() {
    const mensaje = coche1.acelerar(20);
    actualizarInterfazCoches();
    resultado.textContent = `🚗 ${mensaje}`;
    resultado.className = 'resultado alerta-exito';
}

function alFrenarCoche1() {
    const mensaje = coche1.frenar(20);
    actualizarInterfazCoches();
    resultado.textContent = `🛑 ${mensaje}`;
    resultado.className = 'resultado alerta-espera';
}

function alAcelerarCoche2() {
    const mensaje = coche2.acelerar(30);
    actualizarInterfazCoches();
    resultado.textContent = `🏎️ ${mensaje}`;
    resultado.className = 'resultado alerta-exito';
}

function alFrenarCoche2() {
    const mensaje = coche2.frenar(30);
    actualizarInterfazCoches();
    resultado.textContent = `🛑 ${mensaje}`;
    resultado.className = 'resultado alerta-espera';
}

// 5. escuchadores de eventos (addEventListener)
btnAcelerarCoche1.addEventListener('click', alAcelerarCoche1);
btnFrenarCoche1.addEventListener('click', alFrenarCoche1);

btnAcelerarCoche2.addEventListener('click', alAcelerarCoche2);
btnFrenarCoche2.addEventListener('click', alFrenarCoche2);

// Inicializar displays
actualizarInterfazCoches();
