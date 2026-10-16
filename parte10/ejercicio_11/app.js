// ==========================================================================
// EJERCICIO 11 (Guiado): Herencia y Polimorfismo con extends y super()
// OBJETIVO: Conectar clases padre e hijo, invocar super() y sobrescribir métodos.
// ==========================================================================

// 1. variables y constantes de estado
// - Clase Padre:
//     class Empleado {
//         constructor(nombre, sueldo) { this.nombre = nombre; this.sueldo = sueldo; }
//         trabajar() { return `${this.nombre} está realizando sus tareas generales.`; }
//         calcularNeto() { return this.sueldo * 0.85; }
//     }
// - Clase Hija:
//     class Desarrollador extends Empleado {
//         constructor(nombre, sueldo, lenguaje) {
//             super(nombre, sueldo); // ¡OBLIGATORIO antes de tocar this!
//             this.lenguaje = lenguaje;
//         }
//         trabajar() {
//             return `${super.trabajar()} Concretamente programa soluciones en ${this.lenguaje}.`;
//         }
//         calcularNeto() {
//             return super.calcularNeto() + 300; // Bono técnico
//         }
//     }
// - Instancias:
//     const empleado1 = new Empleado('Elena Fuentes', 2500);
//     const dev1 = new Desarrollador('Marcos Gil', 3200, 'TypeScript');

// 2. constantes al DOM
// - Botones de empleado padre: #btnTrabajarPadre, #btnCobrarPadre
// - Botones de desarrollador hijo: #btnTrabajarHija, #btnCobrarHija
// - Div resultado: #resultado

// 3. funciones auxiliares y eventos
// - Click en trabajar padre -> muestra empleado1.trabajar()
// - Click en cobrar padre -> muestra empleado1.calcularNeto()
// - Click en trabajar hija -> muestra dev1.trabajar()
// - Click en cobrar hija -> muestra dev1.calcularNeto()

// 4. funciones de eventos
// 5. escuchadores de eventos (addEventListener)
