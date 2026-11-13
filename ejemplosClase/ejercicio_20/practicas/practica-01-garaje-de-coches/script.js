/* ============================================================
   PRÁCTICA 01 · GARAJE DE COCHES
   Tema: Clases, constructor, métodos y getters
   ------------------------------------------------------------
   ENUNCIADO
   Vas a programar un garaje donde se guardan coches.
   Cada coche será un objeto creado con la clase Coche.
   Al rellenar el formulario se crea un coche nuevo y aparece una tarjeta con sus datos.
   Cada tarjeta tiene un botón para sumar 100 km al coche.
   ------------------------------------------------------------
   TODO (PASOS A REALIZAR)
   [ ] PASO 1: Crea la clase Coche
         Con el constructor (marca, modelo, anio, km = 0). Guarda los datos con this.
   [ ] PASO 2: Método describir()
         Devuelve un texto como "Seat León (2019) · 45000 km".
   [ ] PASO 3: Método recorrer(km)
         Suma los km al coche solo si km es mayor que 0. Devuelve this.
   [ ] PASO 4: Getter antiguedad
         Devuelve los años del coche: año actual menos this.anio. Usa new Date().getFullYear().
   [ ] PASO 5: Crea el array coches
         Será una constante con un array vacío.
   [ ] PASO 6: Función dibujar()
         Vacía listaCoches y crea una tarjeta por coche con crearTarjeta(). Añade el botón "+100 km" y actualiza el resumen.
   [ ] PASO 7: Escuchador del formulario
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

// ------------------------------------------------------------
// TODO PASO 1: crea la clase Coche con su constructor
//   constructor(marca, modelo, anio, km = 0)
// TODO PASO 2: método describir()
// TODO PASO 3: método recorrer(km)
// TODO PASO 4: getter antiguedad
// ------------------------------------------------------------


// ------------------------------------------------------------
// TODO PASO 5: crea la constante "coches" con un array vacío
// ------------------------------------------------------------


// ------------------------------------------------------------
// TODO PASO 6: función dibujar()
//   - Vacía listaCoches (textContent = "")
//   - Recorre "coches" y añade a listaCoches una tarjeta por coche:
//       crearTarjeta(coche.describir(), [`Antigüedad: ... años`], [botón "+100 km"])
//     El botón debe llamar a coche.recorrer(100) y volver a dibujar()
//   - Muestra en "resumen": "N coches · X km en total"
// ------------------------------------------------------------


// ------------------------------------------------------------
// TODO PASO 7: escuchador "submit" de formCoche
//   - Evita la recarga con evento.preventDefault()
//   - Convierte inpAnio.value y inpKm.value con Number()
//   - Si el año no está entre 1950 y el año actual + 1, escribe
//     "El año no es válido" en "mensaje" y termina
//   - Crea el Coche, añádelo al array, limpia el formulario (formCoche.reset())
//     y llama a dibujar()
// ------------------------------------------------------------


// Llamada inicial para pintar el estado de partida
dibujar();
