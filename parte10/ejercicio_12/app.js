// ==========================================================================
// EJERCICIO 12 (Práctica): Jerarquía Vehiculo y VehiculoElectrico
// OBJETIVO: Extender Vehiculo con VehiculoElectrico, llamar a super() y sobrescribir calcularCoste().
// ==========================================================================

// 1. variables y constantes de estado
// - Definir clase base Vehiculo:
//     class Vehiculo {
//         constructor(marca, modelo, consumoLitros100km) {
//             this.marca = marca;
//             this.modelo = modelo;
//             this.consumoLitros100km = consumoLitros100km;
//         }
//         describir() { return `${this.marca} ${this.modelo}`; }
//         calcularCoste100km(precioCombustible = 1.65) {
//             return this.consumoLitros100km * precioCombustible;
//         }
//     }
// - Definir clase derivada VehiculoElectrico extends Vehiculo:
//     class VehiculoElectrico extends Vehiculo {
//         constructor(marca, modelo, consumoKwh100km) {
//             super(marca, modelo, 0); // No gasta gasolina
//             this.consumoKwh100km = consumoKwh100km;
//         }
//         describir() {
//             return `⚡ [100% ELÉCTRICO] ${super.describir()}`;
//         }
//         calcularCoste100km(precioKwh = 0.20) {
//             return this.consumoKwh100km * precioKwh;
//         }
//     }

// 2. constantes al DOM
// - Botones: #btnCalcularGasolina, #btnCalcularElectrico
// - Div resultado: #resultado

// 3. funciones auxiliares y de eventos
// - Click en #btnCalcularGasolina -> muestra descripción y coste del Golf
// - Click en #btnCalcularElectrico -> muestra descripción y coste del Tesla

// 4. funciones de eventos
// 5. escuchadores de eventos (addEventListener)
