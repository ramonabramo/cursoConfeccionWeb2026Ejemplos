/* ============================================================
   PRÁCTICA 01 · GARAJE DE COCHES  ·  SOLUCIÓN DEL PROFESOR
   Tema: Clases, constructor, métodos y getters
   ------------------------------------------------------------
   ENUNCIADO
   Vas a programar un garaje donde se guardan coches.
   Cada coche será un objeto creado con la clase Coche.
   Al rellenar el formulario se crea un coche nuevo y aparece una tarjeta con sus datos.
   Cada tarjeta tiene un botón para sumar 100 km al coche.
   ------------------------------------------------------------
   TODO (PASOS A REALIZAR)
   [x] PASO 1: Crea la clase Coche
         Con el constructor (marca, modelo, anio, km = 0). Guarda los datos con this.
   [x] PASO 2: Método describir()
         Devuelve un texto como "Seat León (2019) · 45000 km".
   [x] PASO 3: Método recorrer(km)
         Suma los km al coche solo si km es mayor que 0. Devuelve this.
   [x] PASO 4: Getter antiguedad
         Devuelve los años del coche: año actual menos this.anio. Usa new Date().getFullYear().
   [x] PASO 5: Crea el array coches
         Será una constante con un array vacío.
   [x] PASO 6: Función dibujar()
         Vacía listaCoches y crea una tarjeta por coche con crearTarjeta(). Añade el botón "+100 km" y actualiza el resumen.
   [x] PASO 7: Escuchador del formulario
         Al enviar: evita la recarga, valida el año, crea el Coche, lo guarda en el array y llama a dibujar().
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
const formCoche = document.getElementById("formCoche");
const inpMarca = document.getElementById("inpMarca");
const inpModelo = document.getElementById("inpModelo");
const inpAnio = document.getElementById("inpAnio");
const inpKm = document.getElementById("inpKm");
const mensaje = document.getElementById("mensaje");
const listaCoches = document.getElementById("listaCoches");
const resumen = document.getElementById("resumen");

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

class Coche {
    constructor(marca, modelo, anio, km = 0) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.km = km;
    }

    describir() {
        return `${this.marca} ${this.modelo} (${this.anio}) · ${this.km} km`;
    }

    recorrer(km) {
        if (km > 0) this.km += km;
        return this;
    }

    get antiguedad() {
        return new Date().getFullYear() - this.anio;
    }
}

const coches = [];

function dibujar() {
    listaCoches.textContent = "";
    for (const coche of coches) {
        listaCoches.appendChild(crearTarjeta(
            coche.describir(),
            [`Antigüedad: ${coche.antiguedad} años`],
            [{ texto: "+100 km", alPulsar: () => { coche.recorrer(100); dibujar(); } }]
        ));
    }
    const total = coches.reduce((suma, c) => suma + c.km, 0);
    resumen.textContent = `${coches.length} coches · ${total} km en total`;
}

formCoche.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const anio = Number(inpAnio.value);
    const km = Number(inpKm.value) || 0;
    if (anio < 1950 || anio > new Date().getFullYear() + 1) {
        mensaje.textContent = "El año no es válido";
        return;
    }
    coches.push(new Coche(inpMarca.value.trim(), inpModelo.value.trim(), anio, km));
    mensaje.textContent = "";
    formCoche.reset();
    dibujar();
});

dibujar();
