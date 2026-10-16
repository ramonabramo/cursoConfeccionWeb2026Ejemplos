// ==========================================================================
// EJERCICIO 12 (Práctica): Jerarquía Vehiculo y VehiculoElectrico
// OBJETIVO: Extender Vehiculo con VehiculoElectrico, llamar a super() y sobrescribir calcularCoste().
// ==========================================================================

// 1. variables y constantes de estado
class Vehiculo {
    constructor(marca, modelo, consumoLitros100km) {
        this.marca = marca;
        this.modelo = modelo;
        this.consumoLitros100km = consumoLitros100km;
    }

    describir() {
        return `🚗 ${this.marca} ${this.modelo}`;
    }

    calcularCoste100km(precioCombustible = 1.65) {
        return this.consumoLitros100km * precioCombustible;
    }
}

class VehiculoElectrico extends Vehiculo {
    constructor(marca, modelo, consumoKwh100km) {
        // super() obligatoria antes de usar this
        super(marca, modelo, 0);
        this.consumoKwh100km = consumoKwh100km;
    }

    // Sobrescritura de describir()
    describir() {
        return `⚡ [100% ELÉCTRICO] ${super.describir()}`;
    }

    // Sobrescritura de calcularCoste100km() aplicando tarifa eléctrica
    calcularCoste100km(precioKwh = 0.20) {
        return this.consumoKwh100km * precioKwh;
    }
}

const cocheGasolina = new Vehiculo('Volkswagen', 'Golf 1.5 TSI', 6.5);
const cocheElectrico = new VehiculoElectrico('Tesla', 'Model Y', 15);

// 2. constantes al DOM
const btnCalcularGasolina = document.querySelector('#btnCalcularGasolina');
const btnCalcularElectrico = document.querySelector('#btnCalcularElectrico');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares
function mostrarCosteGasolina() {
    const coste = cocheGasolina.calcularCoste100km(1.65);
    resultado.textContent = `${cocheGasolina.describir()}: Consumo de 6.5 L a 1.65 €/L = ${coste.toFixed(2)} € por cada 100 km.`;
    resultado.className = 'resultado alerta-espera';
}

function mostrarCosteElectrico() {
    const coste = cocheElectrico.calcularCoste100km(0.20);
    const ahorro = cocheGasolina.calcularCoste100km(1.65) - coste;

    resultado.textContent = `${cocheElectrico.describir()}: Consumo de 15 kWh a 0.20 €/kWh = ${coste.toFixed(2)} € por cada 100 km. ¡Ahorras ${ahorro.toFixed(2)} € cada 100 km!`;
    resultado.className = 'resultado alerta-exito';
}

// 4. funciones de eventos
function alPulsarGasolina() {
    mostrarCosteGasolina();
}

function alPulsarElectrico() {
    mostrarCosteElectrico();
}

// 5. escuchadores de eventos (addEventListener)
btnCalcularGasolina.addEventListener('click', alPulsarGasolina);
btnCalcularElectrico.addEventListener('click', alPulsarElectrico);
