/* ============================================================
   PRÁCTICA 06 · TIENDA CON CARRITO  ·  SOLUCIÓN DEL PROFESOR
   Tema: Reto final: herencia, composición, getters y estáticos
   ------------------------------------------------------------
   ENUNCIADO
   Vas a programar una pequeña tienda con dos tipos de producto.
   Los productos físicos tienen peso y gastos de envío. Los productos digitales no se envían.
   El carrito está formado por líneas (producto + cantidad) y calcula subtotal, envío y total.
   Es el reto final: reúne herencia, composición, getters y campos privados.
   ------------------------------------------------------------
   TODO (PASOS A REALIZAR)
   [x] PASO 1: Clase Producto
         constructor(nombre, precio). Método costeEnvio() que devuelve 0. Método describir() con nombre y precio.
   [x] PASO 2: Clase ProductoFisico extends Producto
         Añade peso. Sobrescribe costeEnvio(): peso × 2 (por unidad) con 2 decimales.
   [x] PASO 3: Clase ProductoDigital extends Producto
         Sobrescribe describir() añadiendo "(descarga)". Hereda costeEnvio() = 0.
   [x] PASO 4: Clase LineaCarrito
         Con producto y cantidad. Getters subtotal (precio × cantidad) y envio (costeEnvio × cantidad).
   [x] PASO 5: Clase Carrito
         Con #lineas privado. Métodos agregar(producto), quitar(nombre) y vaciar().
   [x] PASO 6: Getters del Carrito
         subtotal, envio y total (subtotal + envio), además de lineas (una copia).
   [x] PASO 7: Conecta la página
         Crea los productos con crearProducto(datos), muéstralos en el catálogo y pinta el carrito con sus totales.
   ------------------------------------------------------------
   NORMAS
   - Tu trabajo es SOLO este archivo (script.js).
   - No modifiques index.html ni estilos.css: ya están realizados.
   - Escribe el código debajo de cada comentario TODO.
   - Marca cada paso con [x] cuando lo termines.
   ============================================================ */

// ------------------------------------------------------------
// YA HECHO · elementos de la página (no hace falta tocarlos)
// ------------------------------------------------------------
const catalogoDiv = document.getElementById("catalogo");
const carritoDiv = document.getElementById("carrito");
const txtSubtotal = document.getElementById("txtSubtotal");
const txtEnvio = document.getElementById("txtEnvio");
const txtTotal = document.getElementById("txtTotal");
const btnVaciar = document.getElementById("btnVaciar");

// Datos del catálogo (ya hechos): un objeto por producto
const datosCatalogo = [
    { tipo: "fisico", nombre: "Teclado mecánico", precio: 59.90, peso: 1.2 },
    { tipo: "fisico", nombre: "Monitor 24 pulgadas", precio: 140, peso: 4.5 },
    { tipo: "digital", nombre: "Curso de JavaScript", precio: 29 },
    { tipo: "digital", nombre: "Libro de clases (PDF)", precio: 12 }
];

// ------------------------------------------------------------
// YA HECHO · utilidad para crear tarjetas en la página
// Devuelve un elemento <div> con un título, líneas de texto y botones.
//   titulo:  texto destacado
//   lineas:  array de textos (uno por línea)
//   botones: array de objetos { texto, alPulsar }
// ------------------------------------------------------------
function crearTarjeta(titulo, lineas = [], botones = []) {
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta-item";

    const encabezado = document.createElement("strong");
    encabezado.textContent = titulo;
    tarjeta.appendChild(encabezado);

    for (const linea of lineas) {
        const p = document.createElement("p");
        p.textContent = linea;
        tarjeta.appendChild(p);
    }

    if (botones.length > 0) {
        const acciones = document.createElement("div");
        acciones.className = "acciones";
        for (const boton of botones) {
            const b = document.createElement("button");
            b.textContent = boton.texto;
            b.addEventListener("click", boton.alPulsar);
            acciones.appendChild(b);
        }
        tarjeta.appendChild(acciones);
    }
    return tarjeta;
}

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    costeEnvio() { return 0; }
    describir() { return `${this.nombre} · ${this.precio.toFixed(2)} €`; }
}

class ProductoFisico extends Producto {
    constructor(nombre, precio, peso) {
        super(nombre, precio);
        this.peso = peso;
    }
    costeEnvio() { return Number((this.peso * 2).toFixed(2)); }
}

class ProductoDigital extends Producto {
    describir() { return super.describir() + " (descarga)"; }
}

class LineaCarrito {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
    get subtotal() { return this.producto.precio * this.cantidad; }
    get envio() { return this.producto.costeEnvio() * this.cantidad; }
}

class Carrito {
    #lineas = [];

    agregar(producto) {
        const existente = this.#lineas.find(l => l.producto.nombre === producto.nombre);
        if (existente) existente.cantidad++;
        else this.#lineas.push(new LineaCarrito(producto, 1));
    }

    quitar(nombre) {
        this.#lineas = this.#lineas.filter(l => l.producto.nombre !== nombre);
    }

    vaciar() { this.#lineas = []; }

    get lineas() { return [...this.#lineas]; }
    get subtotal() { return this.#lineas.reduce((s, l) => s + l.subtotal, 0); }
    get envio() { return this.#lineas.reduce((s, l) => s + l.envio, 0); }
    get total() { return this.subtotal + this.envio; }
}

function crearProducto(datos) {
    if (datos.tipo === "fisico") return new ProductoFisico(datos.nombre, datos.precio, datos.peso);
    return new ProductoDigital(datos.nombre, datos.precio);
}

const productos = datosCatalogo.map(crearProducto);
const carrito = new Carrito();

for (const producto of productos) {
    catalogoDiv.appendChild(crearTarjeta(
        producto.describir(),
        [],
        [{ texto: "Añadir", alPulsar: () => { carrito.agregar(producto); pintarCarrito(); } }]
    ));
}

function pintarCarrito() {
    carritoDiv.textContent = "";
    for (const linea of carrito.lineas) {
        carritoDiv.appendChild(crearTarjeta(
            linea.producto.nombre,
            [`x ${linea.cantidad} · ${linea.subtotal.toFixed(2)} €`],
            [{ texto: "Quitar", alPulsar: () => { carrito.quitar(linea.producto.nombre); pintarCarrito(); } }]
        ));
    }
    txtSubtotal.textContent = carrito.subtotal.toFixed(2);
    txtEnvio.textContent = carrito.envio.toFixed(2);
    txtTotal.textContent = carrito.total.toFixed(2);
}

btnVaciar.addEventListener("click", () => {
    carrito.vaciar();
    pintarCarrito();
});

pintarCarrito();
