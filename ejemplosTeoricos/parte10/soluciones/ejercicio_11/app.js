// ==========================================================================
// EJERCICIO 11 (Guiado): Herencia y Polimorfismo con extends y super()
// OBJETIVO: Conectar clases padre e hijo, invocar super() y sobrescribir métodos.
// ==========================================================================

// 1. variables y constantes de estado
class Empleado {
    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    trabajar() {
        return `👤 ${this.nombre} está realizando tareas generales de oficina.`;
    }

    calcularNeto() {
        return this.sueldo * 0.85; // 15% retención
    }
}

class Desarrollador extends Empleado {
    constructor(nombre, sueldo, lenguaje) {
        // REGLA CRÍTICA: super() debe llamarse ANTES de acceder a 'this'
        super(nombre, sueldo);
        this.lenguaje = lenguaje;
    }

    // Method Overriding (Sobrescritura): Reutiliza la lógica del padre mediante super.trabajar()
    trabajar() {
        return `${super.trabajar()} 💻 Especialmente escribe código limpio en ${this.lenguaje}.`;
    }

    // Polimorfismo: sobrescribe el cálculo agregando un bono por especialidad técnica
    calcularNeto() {
        const netoPadre = super.calcularNeto();
        const bonoTech = 300;
        return netoPadre + bonoTech;
    }
}

const empleado1 = new Empleado('Elena Fuentes', 2500);
const dev1 = new Desarrollador('Marcos Gil', 3200, 'TypeScript');

// 2. constantes al DOM
const btnTrabajarPadre = document.querySelector('#btnTrabajarPadre');
const btnCobrarPadre = document.querySelector('#btnCobrarPadre');
const btnTrabajarHija = document.querySelector('#btnTrabajarHija');
const btnCobrarHija = document.querySelector('#btnCobrarHija');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares y 4. funciones de eventos
function alPulsarTrabajarPadre() {
    resultado.textContent = empleado1.trabajar();
    resultado.className = 'resultado';
}

function alPulsarCobrarPadre() {
    const neto = empleado1.calcularNeto();
    resultado.textContent = `💶 ${empleado1.nombre} cobra ${neto.toFixed(2)} € netos (Sueldo base: ${empleado1.sueldo.toFixed(2)} € con 15% IRPF).`;
    resultado.className = 'resultado alerta-exito';
}

function alPulsarTrabajarHija() {
    resultado.textContent = dev1.trabajar();
    resultado.className = 'resultado alerta-espera';
}

function alPulsarCobrarHija() {
    const neto = dev1.calcularNeto();
    resultado.textContent = `💶 ${dev1.nombre} cobra ${neto.toFixed(2)} € netos (Sueldo base: ${dev1.sueldo.toFixed(2)} € + Bono Especialidad 300.00 €).`;
    resultado.className = 'resultado alerta-exito';
}

// 5. escuchadores de eventos (addEventListener)
btnTrabajarPadre.addEventListener('click', alPulsarTrabajarPadre);
btnCobrarPadre.addEventListener('click', alPulsarCobrarPadre);
btnTrabajarHija.addEventListener('click', alPulsarTrabajarHija);
btnCobrarHija.addEventListener('click', alPulsarCobrarHija);
