/* ============================================================
   PRÁCTICA 04 · BIBLIOTECA DE LIBROS
   Tema: Colecciones de objetos, composición y toString()
   ------------------------------------------------------------
   ENUNCIADO
   Vas a gestionar una biblioteca formada por libros.
   La clase Libro representa cada ejemplar y la clase Biblioteca guarda la colección y gestiona los préstamos.
   Se podrá buscar por título o autor, prestar y devolver libros.
   ------------------------------------------------------------
   TODO (PASOS A REALIZAR)
   [ ] PASO 1: Clase Libro
         Con id (generado con un contador estático), titulo, autor, anio y prestado (false al empezar).
   [ ] PASO 2: Método toString()
         Devuelve "Título (Autor, año)".
   [ ] PASO 3: Clase Biblioteca
         Con una lista privada #libros (array vacío).
   [ ] PASO 4: agregar(libro) y buscar(texto)
         buscar filtra por título o autor sin distinguir mayúsculas. Si el texto está vacío, devuelve todos.
   [ ] PASO 5: alternarPrestamo(id)
         Cambia prestado de true a false y al revés. Devuelve el libro o undefined si no existe.
   [ ] PASO 6: Getters total y disponibles
         total es el número de libros. disponibles es el número de libros no prestados.
   [ ] PASO 7: Conecta la página
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

// ------------------------------------------------------------
// TODO PASO 1: clase Libro
//   static #siguienteId = 1;
//   constructor(titulo, autor, anio): this.id = Libro.#siguienteId++ y guarda los datos
//   this.prestado = false
// TODO PASO 2: método toString()
//   Devuelve "Título (Autor, año)"
// ------------------------------------------------------------


// ------------------------------------------------------------
// TODO PASO 3: clase Biblioteca con la lista privada #libros = []
// TODO PASO 4: métodos
//   agregar(libro)  -> añade el libro al array
//   buscar(texto)   -> devuelve los libros cuyo título o autor contiene el texto
//                      (sin distinguir mayúsculas). Con texto vacío devuelve todos.
// TODO PASO 5: método alternarPrestamo(id)
//   Busca el libro por id y cambia prestado. Devuelve el libro (o undefined si no existe)
// TODO PASO 6: getters
//   get total()        -> número de libros
//   get disponibles()  -> número de libros con prestado === false
// ------------------------------------------------------------


// ------------------------------------------------------------
// TODO PASO 7: conecta la página
//   - const biblioteca = new Biblioteca();
//   - Función dibujar(): vacía listaLibros y, por cada libro de biblioteca.buscar(inpBuscar.value),
//     añade crearTarjeta(libro.toString(), [estado], [botón "Prestar" o "Devolver"]).
//     El botón llama a biblioteca.alternarPrestamo(libro.id) y vuelve a dibujar().
//     En "resumen": "X disponibles de Y libros"
//   - Escuchador "submit" de formLibro: crea el Libro, agrégalo, limpia el formulario y dibuja
//   - Escuchador "input" de inpBuscar que llame a dibujar()
// ------------------------------------------------------------


dibujar();
