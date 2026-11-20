/* =========================================================
   TEORÍA · Clases
   ---------------------------------------------------------
   - class define un molde para fabricar objetos
   - constructor() se ejecuta al hacer new y rellena this
   - Los métodos son funciones que tienen todos los objetos
   - Cada objeto creado con new es una INSTANCIA de la clase
   ========================================================= */

// 1. La clase
class Libro {
  constructor(titulo, paginas) {
    this.titulo = titulo;
    this.paginas = paginas;
    this.leidas = 0; // valor inicial que no viene de fuera
  }

  // Método que MODIFICA el objeto
  leer(cantidad) {
    this.leidas = Math.min(this.leidas + cantidad, this.paginas);
  }

  // Método que CALCULA algo con sus datos
  porcentaje() {
    return Math.round((this.leidas / this.paginas) * 100);
  }

  // Un método puede llamar a otro con this
  estaTerminado() {
    return this.porcentaje() === 100;
  }

  describir() {
    const fin = this.estaTerminado() ? " ¡Terminado!" : "";
    return `"${this.titulo}": ${this.leidas}/${this.paginas} páginas (${this.porcentaje()} %)${fin}`;
  }
}

const salida = document.getElementById("salida");
let libro = null;

// 2. Crear una instancia con new
document.getElementById("btnCrear").addEventListener("click", function () {
  const titulo = document.getElementById("titulo").value.trim();
  const paginas = Number(document.getElementById("paginas").value);

  libro = new Libro(titulo, paginas);

  console.log(libro); // en la consola sale "Libro {titulo: ..., ...}"
  salida.textContent =
    `const libro = new Libro("${titulo}", ${paginas});\n\n` +
    `libro.titulo   → "${libro.titulo}"\n` +
    `libro.paginas  → ${libro.paginas}\n` +
    `libro.leidas   → ${libro.leidas}\n\n` +
    `libro instanceof Libro → ${libro instanceof Libro}`;
});

// 3. Llamar a un método que cambia el estado del objeto
document.getElementById("btnLeer").addEventListener("click", function () {
  if (libro === null) {
    salida.textContent = "Primero crea un libro.";
    return;
  }
  libro.leer(50);
  salida.textContent = `libro.leer(50);\n\n${libro.describir()}`;
});

// 4. Llamar a un método que devuelve un texto
document.getElementById("btnEstado").addEventListener("click", function () {
  if (libro === null) {
    salida.textContent = "Primero crea un libro.";
    return;
  }
  salida.textContent = libro.describir();
});

// 5. Dos instancias: mismos métodos, datos independientes
document.getElementById("btnDos").addEventListener("click", function () {
  const a = new Libro("Libro A", 100);
  const b = new Libro("Libro B", 200);

  a.leer(100);
  b.leer(20);

  salida.textContent =
    `${a.describir()}\n${b.describir()}\n\n` +
    `Cada objeto tiene sus propios datos...\n` +
    `...pero el método es el mismo para los dos:\n` +
    `a.describir === b.describir → ${a.describir === b.describir}`;
});
