/* ============================================================
   PRÁCTICA 03 · FIGURAS GEOMÉTRICAS  ·  SOLUCIÓN DEL PROFESOR
   Tema: Herencia, super, polimorfismo y miembros estáticos
   ------------------------------------------------------------
   ENUNCIADO
   Vas a crear una familia de figuras con herencia.
   La clase Figura define lo común. Circulo y Rectangulo heredan de ella, y Cuadrado hereda de Rectangulo.
   Todas las figuras responden a area() y perimetro(), pero cada una lo calcula a su manera (polimorfismo).
   Un contador estático contará cuántas figuras se han creado.
   ------------------------------------------------------------
   TODO (PASOS A REALIZAR)
   [x] PASO 1: Clase Figura
         constructor(nombre) con un contador estático privado (static #contador = 0) que se incrementa en cada figura.
   [x] PASO 2: Métodos abstractos
         area() y perimetro() lanzan new Error("Método no implementado"). describir() devuelve "Nombre: área X · perímetro Y" con 2 decimales.
   [x] PASO 3: Método estático total()
         Devuelve cuántas figuras se han creado.
   [x] PASO 4: Clase Circulo extends Figura
         Con radio. Sobrescribe area() y perimetro() usando Math.PI.
   [x] PASO 5: Clase Rectangulo extends Figura
         Con ancho y alto. Sobrescribe area() y perimetro().
   [x] PASO 6: Clase Cuadrado extends Rectangulo
         Con lado. Llama a super(lado, lado) y cambia el nombre a "Cuadrado".
   [x] PASO 7: Conecta el formulario
         Según el tipo elegido crea la figura, guárdala en el array "figuras" y llama a dibujar().
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
const formFigura = document.getElementById("formFigura");
const selTipo = document.getElementById("selTipo");
const inpA = document.getElementById("inpA");
const inpB = document.getElementById("inpB");
const listaFiguras = document.getElementById("listaFiguras");
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

class Figura {
    static #contador = 0;

    constructor(nombre) {
        this.nombre = nombre;
        Figura.#contador++;
    }

    area() { throw new Error("Método no implementado"); }
    perimetro() { throw new Error("Método no implementado"); }

    describir() {
        return `${this.nombre}: área ${this.area().toFixed(2)} · perímetro ${this.perimetro().toFixed(2)}`;
    }

    static total() { return Figura.#contador; }
}

class Circulo extends Figura {
    constructor(radio) {
        super("Círculo");
        this.radio = radio;
    }
    area() { return Math.PI * this.radio ** 2; }
    perimetro() { return 2 * Math.PI * this.radio; }
}

class Rectangulo extends Figura {
    constructor(ancho, alto) {
        super("Rectángulo");
        this.ancho = ancho;
        this.alto = alto;
    }
    area() { return this.ancho * this.alto; }
    perimetro() { return 2 * (this.ancho + this.alto); }
}

class Cuadrado extends Rectangulo {
    constructor(lado) {
        super(lado, lado);
        this.nombre = "Cuadrado";
    }
}

const figuras = [];

function dibujar() {
    listaFiguras.textContent = "";
    for (const figura of figuras) {
        listaFiguras.appendChild(crearTarjeta(figura.describir()));
    }
    const areaTotal = figuras.reduce((suma, f) => suma + f.area(), 0);
    resumen.textContent = `${Figura.total()} figuras creadas · área total: ${areaTotal.toFixed(2)}`;
}

formFigura.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const a = Number(inpA.value);
    const b = Number(inpB.value);
    let figura;
    switch (selTipo.value) {
        case "circulo": figura = new Circulo(a); break;
        case "rectangulo": figura = new Rectangulo(a, b); break;
        case "cuadrado": figura = new Cuadrado(a); break;
    }
    figuras.push(figura);
    formFigura.reset();
    dibujar();
});

dibujar();
