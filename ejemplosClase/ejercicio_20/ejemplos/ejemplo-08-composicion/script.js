// ============================================================
// EJEMPLO 08 · Composición: objetos dentro de objetos
// Carpeta: ejemplo-08-composicion
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

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

// Una línea del carrito TIENE un producto y una cantidad.
class LineaCarrito {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
    get subtotal() {
        return this.producto.precio * this.cantidad;
    }
}

// El carrito TIENE una lista de líneas (privada).
class Carrito {
    #lineas = [];

    agregar(producto, cantidad = 1) {
        const existente = this.#lineas.find(l => l.producto.nombre === producto.nombre);
        if (existente) {
            existente.cantidad += cantidad;     // ya estaba: sumamos unidades
        } else {
            this.#lineas.push(new LineaCarrito(producto, cantidad));
        }
        return this;
    }

    get total() {
        return this.#lineas.reduce((suma, linea) => suma + linea.subtotal, 0);
    }

    resumen() {
        return this.#lineas.map(l => `${l.cantidad} x ${l.producto.nombre} = ${l.subtotal.toFixed(2)}€`);
    }
}

// ============================================================
// PARTE 2 · USO DE LA CLASE
// ============================================================
const teclado = new Producto("Teclado", 59.90);
const raton = new Producto("Ratón", 25);

const carrito = new Carrito();
carrito.agregar(teclado, 2).agregar(raton).agregar(teclado);

for (const linea of carrito.resumen()) {
    mostrar(linea);
}
mostrar(`Total: ${carrito.total.toFixed(2)}€`);
