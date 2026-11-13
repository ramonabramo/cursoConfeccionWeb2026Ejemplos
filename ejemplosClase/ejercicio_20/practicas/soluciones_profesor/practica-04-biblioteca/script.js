/* ============================================================
   PRÁCTICA 04 · BIBLIOTECA DE LIBROS  ·  SOLUCIÓN DEL PROFESOR
   Tema: Colecciones de objetos, composición y toString()
   ------------------------------------------------------------
   ENUNCIADO
   Vas a gestionar una biblioteca formada por libros.
   La clase Libro representa cada ejemplar y la clase Biblioteca guarda la colección y gestiona los préstamos.
   Se podrá buscar por título o autor, prestar y devolver libros.
   ------------------------------------------------------------
   TODO (PASOS A REALIZAR)
   [x] PASO 1: Clase Libro
         Con id (generado con un contador estático), titulo, autor, anio y prestado (false al empezar).
   [x] PASO 2: Método toString()
         Devuelve "Título (Autor, año)".
   [x] PASO 3: Clase Biblioteca
         Con una lista privada #libros (array vacío).
   [x] PASO 4: agregar(libro) y buscar(texto)
         buscar filtra por título o autor sin distinguir mayúsculas. Si el texto está vacío, devuelve todos.
   [x] PASO 5: alternarPrestamo(id)
         Cambia prestado de true a false y al revés. Devuelve el libro o undefined si no existe.
   [x] PASO 6: Getters total y disponibles
         total es el número de libros. disponibles es el número de libros no prestados.
   [x] PASO 7: Conecta la página
         Formulario para añadir, buscador que filtra mientras escribes y tarjetas con botón Prestar / Devolver.
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
const formLibro = document.getElementById("formLibro");
const inpTitulo = document.getElementById("inpTitulo");
const inpAutor = document.getElementById("inpAutor");
const inpAnio = document.getElementById("inpAnio");
const inpBuscar = document.getElementById("inpBuscar");
const listaLibros = document.getElementById("listaLibros");
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

class Libro {
    static #siguienteId = 1;

    constructor(titulo, autor, anio) {
        this.id = Libro.#siguienteId++;
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.prestado = false;
    }

    toString() {
        return `${this.titulo} (${this.autor}, ${this.anio})`;
    }
}

class Biblioteca {
    #libros = [];

    agregar(libro) {
        this.#libros.push(libro);
    }

    buscar(texto) {
        const t = texto.trim().toLowerCase();
        return this.#libros.filter(l =>
            l.titulo.toLowerCase().includes(t) || l.autor.toLowerCase().includes(t));
    }

    alternarPrestamo(id) {
        const libro = this.#libros.find(l => l.id === id);
        if (libro) libro.prestado = !libro.prestado;
        return libro;
    }

    get total() { return this.#libros.length; }
    get disponibles() { return this.#libros.filter(l => !l.prestado).length; }
}

const biblioteca = new Biblioteca();

function dibujar() {
    listaLibros.textContent = "";
    for (const libro of biblioteca.buscar(inpBuscar.value)) {
        listaLibros.appendChild(crearTarjeta(
            libro.toString(),
            [libro.prestado ? "Prestado" : "Disponible"],
            [{
                texto: libro.prestado ? "Devolver" : "Prestar",
                alPulsar: () => { biblioteca.alternarPrestamo(libro.id); dibujar(); }
            }]
        ));
    }
    resumen.textContent = `${biblioteca.disponibles} disponibles de ${biblioteca.total} libros`;
}

formLibro.addEventListener("submit", (evento) => {
    evento.preventDefault();
    biblioteca.agregar(new Libro(inpTitulo.value.trim(), inpAutor.value.trim(), Number(inpAnio.value)));
    formLibro.reset();
    dibujar();
});

inpBuscar.addEventListener("input", dibujar);

dibujar();
