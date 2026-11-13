// ==========================================================================
// EJERCICIO 07 (Guiado): Clases en ES6 (Constructor, new e Instancias)
// OBJETIVO: Definir una clase con class, inicializar en constructor() y crear instancias con new.
// ==========================================================================

// 1. variables y constantes de estado
// - Definición de la clase Coche:
//     class Coche {
//         constructor(marca, modelo, velocidadMax) { ... }
//         acelerar(km) { ... }
//         frenar(km) { ... }
//     }
// - Instancias independientes:
//     const coche1 = new Coche('Seat', 'Ibiza', 180);
//     const coche2 = new Coche('Tesla', 'Model 3', 225);

// 2. constantes al DOM
// - Displays de velocidad: #velCoche1, #velCoche2
// - Botones coche 1: #btnAcelerarCoche1, #btnFrenarCoche1
// - Botones coche 2: #btnAcelerarCoche2, #btnFrenarCoche2
// - Div resultado: #resultado

// 3. funciones auxiliares
// - function actualizarInterfazCoches():
//     * Pinta en el DOM la velocidadActual de coche1 y coche2.

// 4. funciones de eventos
// - Click en acelerar coche 1 -> coche1.acelerar(20) y actualizarInterfaz
// - Click en frenar coche 1 -> coche1.frenar(20) y actualizarInterfaz
// - Click en acelerar coche 2 -> coche2.acelerar(30) y actualizarInterfaz
// - Click en frenar coche 2 -> coche2.frenar(30) y actualizarInterfaz

// 5. escuchadores de eventos (addEventListener)
