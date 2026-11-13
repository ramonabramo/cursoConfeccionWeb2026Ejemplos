// ============================================================
// EJEMPLO 09 · Una colección de objetos: la biblioteca
// Carpeta: ejemplo-09-coleccion-de-objetos
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

class Libro {
    constructor(titulo, autor, anio) {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.prestado = false;
    }
    toString() {                                // se usa al convertir el objeto a texto
        return `${this.titulo} (${this.autor}, ${this.anio})${this.prestado ? " [prestado]" : ""}`;
    }
}

class Biblioteca {
    #libros = [];

    agregar(libro) {
        this.#libros.push(libro);
        return this;
    }

    buscar(texto) {                             // filtra por título o autor
        const t = texto.toLowerCase();
        return this.#libros.filter(l => l.titulo.toLowerCase().includes(t) || l.autor.toLowerCase().includes(t));
    }

    prestar(titulo) {
        const libro = this.#libros.find(l => l.titulo === titulo);
        if (!libro) return "No existe ese libro";
        if (libro.prestado) return "Ya está prestado";
        libro.prestado = true;
        return `Prestado: ${libro.titulo}`;
    }

    devolver(titulo) {
        const libro = this.#libros.find(l => l.titulo === titulo);
        if (libro) libro.prestado = false;
    }

    get disponibles() {
        return this.#libros.filter(l => !l.prestado);
    }
}

// ============================================================
// PARTE 2 · USO DE LA CLASE
// ============================================================
const biblioteca = new Biblioteca();
biblioteca
    .agregar(new Libro("El Quijote", "Cervantes", 1605))
    .agregar(new Libro("La Celestina", "Fernando de Rojas", 1499))
    .agregar(new Libro("Rimas", "Bécquer", 1871));

mostrar(biblioteca.prestar("El Quijote"));
mostrar(biblioteca.prestar("El Quijote"));
mostrar(biblioteca.prestar("Don Juan"));

mostrar(`Disponibles: ${biblioteca.disponibles.length}`);
mostrar(biblioteca.buscar("cervantes").join(" | "));   // join llama a toString()

biblioteca.devolver("El Quijote");
mostrar(`Disponibles: ${biblioteca.disponibles.length}`);
