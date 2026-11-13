/* ============================================================
   PRÁCTICA 06 · TIENDA CON CARRITO
   Tema: Reto final: herencia, composición, getters y estáticos
   ------------------------------------------------------------
   ENUNCIADO
   Vas a programar una pequeña tienda con dos tipos de producto.
   Los productos físicos tienen peso y gastos de envío. Los productos digitales no se envían.
   El carrito está formado por líneas (producto + cantidad) y calcula subtotal, envío y total.
   Es el reto final: reúne herencia, composición, getters y campos privados.
   ------------------------------------------------------------
   TODO (PASOS A REALIZAR)
   [ ] PASO 1: Clase Producto
         constructor(nombre, precio). Método costeEnvio() que devuelve 0. Método describir() con nombre y precio.
   [ ] PASO 2: Clase ProductoFisico extends Producto
         Añade peso. Sobrescribe costeEnvio(): peso × 2 (por unidad) con 2 decimales.
   [ ] PASO 3: Clase ProductoDigital extends Producto
         Sobrescribe describir() añadiendo "(descarga)". Hereda costeEnvio() = 0.
   [ ] PASO 4: Clase LineaCarrito
         Con producto y cantidad. Getters subtotal (precio × cantidad) y envio (costeEnvio × cantidad).
   [ ] PASO 5: Clase Carrito
         Con #lineas privado. Métodos agregar(producto), quitar(nombre) y vaciar().
   [ ] PASO 6: Getters del Carrito
         subtotal, envio y total (subtotal + envio), además de lineas (una copia).
   [ ] PASO 7: Conecta la página
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

// ------------------------------------------------------------
// TODO PASO 1: class Producto
//   constructor(nombre, precio)
//   costeEnvio() -> devuelve 0
//   describir()  -> `${nombre} · ${precio.toFixed(2)} €`
// TODO PASO 2: class ProductoFisico extends Producto
//   constructor(nombre, precio, peso): super(nombre, precio) y guarda el peso
//   Sobrescribe costeEnvio(): peso * 2 (por unidad), con 2 decimales
// TODO PASO 3: class ProductoDigital extends Producto
//   Sobrescribe describir(): añade " (descarga)" al texto del padre (usa super.describir())
// ------------------------------------------------------------


// ------------------------------------------------------------
// TODO PASO 4: class LineaCarrito
//   constructor(producto, cantidad)
//   get subtotal() -> precio * cantidad
//   get envio()    -> producto.costeEnvio() * cantidad
// TODO PASO 5: class Carrito con #lineas = []
//   agregar(producto): si ya hay una línea de ese producto suma 1 a la cantidad;
//                      si no, añade una LineaCarrito nueva
//   quitar(nombre): elimina la línea de ese producto
//   vaciar(): deja el carrito sin líneas
// TODO PASO 6: getters del Carrito
//   lineas (una copia), subtotal, envio, total (subtotal + envio)
// ------------------------------------------------------------


// ------------------------------------------------------------
// TODO PASO 7: conecta la página
//   - function crearProducto(datos): devuelve un ProductoFisico o un ProductoDigital
//     según datos.tipo
//   - const productos = datosCatalogo.map(crearProducto);  const carrito = new Carrito();
//   - Pinta el catálogo: una tarjeta por producto con botón "Añadir" que llama a
//     carrito.agregar(producto) y a pintarCarrito()
//   - pintarCarrito(): una tarjeta por línea (nombre, "x cantidad · subtotal") con botón "Quitar";
//     escribe subtotal, envío y total (2 decimales) en txtSubtotal, txtEnvio y txtTotal
//   - btnVaciar: vacía el carrito y vuelve a pintar
// ------------------------------------------------------------
