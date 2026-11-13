// ============================================================
// EJEMPLO 06 · Miembros estáticos (static)
// Carpeta: ejemplo-06-miembros-estaticos
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
    static #contador = 0;       // campo estático PRIVADO: pertenece a la clase
    static IVA = 0.21;          // campo estático público

    constructor(nombre, precio) {
        Producto.#contador++;               // se accede con el nombre de la clase
        this.id = Producto.#contador;       // cada producto recibe un id distinto
        this.nombre = nombre;
        this.precio = precio;
    }

    // Método de INSTANCIA: se llama sobre un objeto.
    precioConIva() {
        return Number((this.precio * (1 + Producto.IVA)).toFixed(2));
    }

    // Métodos ESTÁTICOS: se llaman sobre la clase, no sobre un objeto.
    static total() {
        return Producto.#contador;
    }

    static comparar(a, b) {                 // sirve para ordenar por precio
        return a.precio - b.precio;
    }
}

// ============================================================
// PARTE 2 · USO DE LA CLASE
// ============================================================
const teclado = new Producto("Teclado", 59.90);
const raton = new Producto("Ratón", 25);
const monitor = new Producto("Monitor", 140);

mostrar(`${teclado.id}, ${raton.id}, ${monitor.id}`);
mostrar(Producto.total());                  // se llama sobre la clase
mostrar(teclado.precioConIva());
mostrar(Producto.IVA);

const ordenados = [teclado, raton, monitor].sort(Producto.comparar);
mostrar(ordenados.map(p => p.nombre).join(" < "));

mostrar(typeof teclado.total);              // undefined: los estáticos no están en las instancias
