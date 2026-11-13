/* ============================================================
   PRÁCTICA 05 · GESTOR DE TAREAS CON JSON  ·  SOLUCIÓN DEL PROFESOR
   Tema: Clases, JSON, toJSON(), static y localStorage
   ------------------------------------------------------------
   ENUNCIADO
   Vas a programar un gestor de tareas que no pierde los datos al recargar la página.
   La clase Tarea representa una tarea. La clase GestorTareas guarda la lista y la persiste en localStorage.
   Para guardar y recuperar instancias necesitarás toJSON() y un método estático que las reconstruya.
   ------------------------------------------------------------
   TODO (PASOS A REALIZAR)
   [x] PASO 1: Clase Tarea
         constructor(texto, prioridad = "media", hecha = false, id = Date.now()).
   [x] PASO 2: Método alternar()
         Cambia hecha de true a false y al revés. Devuelve this.
   [x] PASO 3: toJSON() y static desdeJSON(datos)
         toJSON devuelve un objeto plano con id, texto, prioridad y hecha. desdeJSON crea una Tarea a partir de esos datos.
   [x] PASO 4: Clase GestorTareas
         Con #tareas y #clave. Al crearse, carga los datos guardados con un método privado #cargar().
   [x] PASO 5: Métodos agregar, alternar, eliminar y filtrar
         Cada cambio llama a #guardar(). filtrar(estado) acepta "todas", "pendientes" o "hechas".
   [x] PASO 6: Getter pendientes
         Devuelve el número de tareas sin completar.
   [x] PASO 7: Conecta la página
         Formulario, botones de filtro y lista de tarjetas con botones Hecha / Borrar.
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
const formTarea = document.getElementById("formTarea");
const inpTexto = document.getElementById("inpTexto");
const selPrioridad = document.getElementById("selPrioridad");
const botonesFiltro = document.querySelectorAll(".filtros button");
const listaTareas = document.getElementById("listaTareas");
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

class Tarea {
    constructor(texto, prioridad = "media", hecha = false, id = Date.now()) {
        this.texto = texto;
        this.prioridad = prioridad;
        this.hecha = hecha;
        this.id = id;
    }

    alternar() {
        this.hecha = !this.hecha;
        return this;
    }

    toJSON() {
        return { id: this.id, texto: this.texto, prioridad: this.prioridad, hecha: this.hecha };
    }

    static desdeJSON(d) {
        return new Tarea(d.texto, d.prioridad, d.hecha, d.id);
    }
}

class GestorTareas {
    #tareas = [];
    #clave;
    #ultimoId = 0;

    constructor(clave) {
        this.#clave = clave;
        this.#cargar();
    }

    #guardar() {
        localStorage.setItem(this.#clave, JSON.stringify(this.#tareas));
    }

    #cargar() {
        const datos = JSON.parse(localStorage.getItem(this.#clave)) || [];
        this.#tareas = datos.map(d => Tarea.desdeJSON(d));
    }

    agregar(texto, prioridad) {
        // Date.now() puede repetirse si se añaden dos tareas en el mismo milisegundo
        const id = Math.max(Date.now(), this.#ultimoId + 1);
        this.#ultimoId = id;
        this.#tareas.push(new Tarea(texto, prioridad, false, id));
        this.#guardar();
    }

    alternar(id) {
        const tarea = this.#tareas.find(t => t.id === id);
        if (tarea) tarea.alternar();
        this.#guardar();
    }

    eliminar(id) {
        this.#tareas = this.#tareas.filter(t => t.id !== id);
        this.#guardar();
    }

    filtrar(estado) {
        if (estado === "pendientes") return this.#tareas.filter(t => !t.hecha);
        if (estado === "hechas") return this.#tareas.filter(t => t.hecha);
        return [...this.#tareas];
    }

    get pendientes() {
        return this.#tareas.filter(t => !t.hecha).length;
    }
}

const gestor = new GestorTareas("tareas-practica-05");
let filtroActual = "todas";

function dibujar() {
    listaTareas.textContent = "";
    for (const tarea of gestor.filtrar(filtroActual)) {
        listaTareas.appendChild(crearTarjeta(
            tarea.texto,
            [`Prioridad: ${tarea.prioridad}` + (tarea.hecha ? " · Hecha" : "")],
            [
                { texto: tarea.hecha ? "Pendiente" : "Hecha", alPulsar: () => { gestor.alternar(tarea.id); dibujar(); } },
                { texto: "Borrar", alPulsar: () => { gestor.eliminar(tarea.id); dibujar(); } }
            ]
        ));
    }
    resumen.textContent = `${gestor.pendientes} pendientes de ${gestor.filtrar("todas").length}`;
}

formTarea.addEventListener("submit", (evento) => {
    evento.preventDefault();
    gestor.agregar(inpTexto.value.trim(), selPrioridad.value);
    formTarea.reset();
    dibujar();
});

for (const boton of botonesFiltro) {
    boton.addEventListener("click", () => {
        filtroActual = boton.dataset.filtro;
        botonesFiltro.forEach(b => b.classList.remove("activo"));
        boton.classList.add("activo");
        dibujar();
    });
}

dibujar();
