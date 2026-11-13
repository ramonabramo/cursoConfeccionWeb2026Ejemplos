/* ============================================================
   PRÁCTICA 03 · FIGURAS GEOMÉTRICAS
   Tema: Herencia, super, polimorfismo y miembros estáticos
   ------------------------------------------------------------
   ENUNCIADO
   Vas a crear una familia de figuras con herencia.
   La clase Figura define lo común. Circulo y Rectangulo heredan de ella, y Cuadrado hereda de Rectangulo.
   Todas las figuras responden a area() y perimetro(), pero cada una lo calcula a su manera (polimorfismo).
   Un contador estático contará cuántas figuras se han creado.
   ------------------------------------------------------------
   TODO (PASOS A REALIZAR)
   [ ] PASO 1: Clase Figura
         constructor(nombre) con un contador estático privado (static #contador = 0) que se incrementa en cada figura.
   [ ] PASO 2: Métodos abstractos
         area() y perimetro() lanzan new Error("Método no implementado"). describir() devuelve "Nombre: área X · perímetro Y" con 2 decimales.
   [ ] PASO 3: Método estático total()
         Devuelve cuántas figuras se han creado.
   [ ] PASO 4: Clase Circulo extends Figura
         Con radio. Sobrescribe area() y perimetro() usando Math.PI.
   [ ] PASO 5: Clase Rectangulo extends Figura
         Con ancho y alto. Sobrescribe area() y perimetro().
   [ ] PASO 6: Clase Cuadrado extends Rectangulo
         Con lado. Llama a super(lado, lado) y cambia el nombre a "Cuadrado".
   [ ] PASO 7: Conecta el formulario
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

// ------------------------------------------------------------
// TODO PASO 1: clase Figura
//   static #contador = 0;
//   constructor(nombre): guarda el nombre e incrementa Figura.#contador
// TODO PASO 2: métodos de Figura
//   area() y perimetro(): lanzan new Error("Método no implementado")
//   describir(): devuelve `${this.nombre}: área X · perímetro Y` (con toFixed(2))
// TODO PASO 3: método estático total() que devuelve Figura.#contador
// ------------------------------------------------------------


// ------------------------------------------------------------
// TODO PASO 4: class Circulo extends Figura
//   constructor(radio): llama a super("Círculo") y guarda el radio
//   Sobrescribe area() (PI · r²) y perimetro() (2 · PI · r)
// ------------------------------------------------------------


// ------------------------------------------------------------
// TODO PASO 5: class Rectangulo extends Figura
//   constructor(ancho, alto): super("Rectángulo") y guarda ancho y alto
//   Sobrescribe area() y perimetro()
// ------------------------------------------------------------


// ------------------------------------------------------------
// TODO PASO 6: class Cuadrado extends Rectangulo
//   constructor(lado): super(lado, lado) y después this.nombre = "Cuadrado"
//   No hace falta volver a escribir area() ni perimetro(): se heredan
// ------------------------------------------------------------


// ------------------------------------------------------------
// TODO PASO 7: conecta el formulario
//   - const figuras = [];
//   - Función dibujar(): una tarjeta por figura con crearTarjeta(figura.describir()).
//     En "resumen" escribe: "N figuras creadas · área total: X" (Figura.total() y reduce)
//   - Escuchador "submit" de formFigura: evita la recarga, lee las medidas con Number(),
//     crea la figura con un switch según selTipo.value, añádela a "figuras" y llama a dibujar()
// ------------------------------------------------------------


dibujar();
