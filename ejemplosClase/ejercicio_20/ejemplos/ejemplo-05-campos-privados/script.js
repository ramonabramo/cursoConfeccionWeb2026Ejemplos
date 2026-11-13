// ============================================================
// EJEMPLO 05 · Campos y métodos privados (#)
// Carpeta: ejemplo-05-campos-privados
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

class CuentaSegura {
    // Los campos privados empiezan por # y se declaran en el cuerpo de la clase.
    #saldo = 0;
    #movimientos = [];
    #pin;

    constructor(titular, pin) {
        this.titular = titular;         // público
        this.#pin = pin;                // privado
    }

    // Un método privado también empieza por #.
    #registrar(texto) {
        this.#movimientos.push(texto);
    }

    ingresar(importe) {
        if (importe <= 0) throw new Error("Importe no válido");
        this.#saldo += importe;
        this.#registrar(`ingreso ${importe}€`);
    }

    retirar(importe, pin) {
        if (pin !== this.#pin) throw new Error("PIN incorrecto");
        if (importe > this.#saldo) throw new Error("Saldo insuficiente");
        this.#saldo -= importe;
        this.#registrar(`retirada ${importe}€`);
    }

    get saldo() { return this.#saldo; }                 // acceso de solo lectura
    get historial() { return [...this.#movimientos]; }  // devolvemos una COPIA
}

// ============================================================
// PARTE 2 · USO DE LA CLASE
// ============================================================
const cuenta = new CuentaSegura("Marta", "1234");
cuenta.ingresar(500);
cuenta.retirar(120, "1234");
mostrar(cuenta.saldo);
mostrar(cuenta.historial.join(" | "));

try { cuenta.retirar(10, "0000"); } catch (e) { mostrar(e.message); }
try { cuenta.retirar(9999, "1234"); } catch (e) { mostrar(e.message); }

cuenta.saldo = 1000000;             // no hay setter: se ignora
mostrar(cuenta.saldo);

cuenta.historial.push("trampa");    // modifica la COPIA, no el historial real
mostrar(cuenta.historial.length);

mostrar(Object.keys(cuenta).join(", "));   // solo se ve la propiedad pública
mostrar(JSON.stringify(cuenta));

// cuenta.#saldo;   // ERROR DE SINTAXIS: ni siquiera se puede escribir fuera de la clase
