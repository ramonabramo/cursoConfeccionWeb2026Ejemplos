// ============================================================
// EJEMPLO 03 · Métodos, this y encadenamiento
// Carpeta: ejemplo-03-metodos-y-this
// Archivos: index.html (estructura) · estilos.css (aspecto) · script.js (lógica)
// ============================================================

// >>> UTILIDAD (no forma parte del ejemplo)
// Escribe cada resultado en el panel de la página y también en la consola (F12).
const salida = document.getElementById("salida");
function mostrar(texto) {
    salida.textContent += texto + "\n";
    console.log(texto);
}
// <<< FIN UTILIDAD

class CuentaBancaria {
    // Un parámetro puede tener un valor por defecto: aquí, 0.
    constructor(titular, saldoInicial = 0) {
        this.titular = titular;
        this.saldo = saldoInicial;
        this.movimientos = [];          // cada cuenta tiene su propio array
    }

    ingresar(importe) {
        this.saldo += importe;
        this.movimientos.push(`+${importe}€`);
        return this;                    // devolver "this" permite encadenar llamadas
    }

    retirar(importe) {
        if (importe > this.saldo) {
            this.movimientos.push("denegado");
            return this;
        }
        this.saldo -= importe;
        this.movimientos.push(`-${importe}€`);
        return this;
    }

    resumen() {
        return `${this.titular}: ${this.saldo}€ [${this.movimientos.join(", ")}]`;
    }
}

// ============================================================
// PARTE 2 · USO DE LA CLASE
// ============================================================
const cuenta = new CuentaBancaria("Lucía", 100);

// Encadenamos llamadas porque cada método devuelve "this".
cuenta.ingresar(50).retirar(30).retirar(500);
mostrar(cuenta.resumen());

// Cada instancia es independiente.
const otra = new CuentaBancaria("Pablo");
mostrar(otra.resumen());

// ERROR CLÁSICO: perder "this" al separar el método del objeto.
const suelto = cuenta.resumen;
try {
    suelto();
} catch (error) {
    mostrar(error.name);                // TypeError: "this" es undefined
}

// SOLUCIÓN: fijar "this" con bind.
const fijado = cuenta.resumen.bind(cuenta);
mostrar(fijado());
