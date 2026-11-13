// ============================================================
// EJEMPLO 12 · Clases y DOM: lista de tareas con localStorage
// Carpeta: ejemplo-12-clases-y-dom-tareas
// Archivos: index.html (estructura) · estilos.css (aspecto) · script.js (lógica)
// ============================================================

class Tarea {
    constructor(texto, hecha = false, id = Date.now()) {
        this.texto = texto;
        this.hecha = hecha;
        this.id = id;
    }
}

class GestorTareas {
    #tareas = [];
    #clave;

    constructor(clave) {
        this.#clave = clave;
        this.#cargar();                         // al crear el gestor, recupera lo guardado
    }

    agregar(texto) {
        this.#tareas.push(new Tarea(texto));
        this.#guardar();
    }

    alternar(id) {
        const tarea = this.#tareas.find(t => t.id === id);
        if (tarea) tarea.hecha = !tarea.hecha;
        this.#guardar();
    }

    eliminar(id) {
        this.#tareas = this.#tareas.filter(t => t.id !== id);
        this.#guardar();
    }

    get tareas() { return [...this.#tareas]; }
    get pendientes() { return this.#tareas.filter(t => !t.hecha).length; }

    #guardar() {
        localStorage.setItem(this.#clave, JSON.stringify(this.#tareas));
    }

    #cargar() {
        const datos = JSON.parse(localStorage.getItem(this.#clave)) || [];
        this.#tareas = datos.map(d => new Tarea(d.texto, d.hecha, d.id));
    }
}

// ============================================================
// PARTE 2 · USO DE LA CLASE
// ============================================================
// Conectamos el gestor con el HTML.
const gestor = new GestorTareas("tareas-ejemplo-12");
const formulario = document.getElementById("formulario");
const campo = document.getElementById("campoTexto");
const lista = document.getElementById("lista");
const resumen = document.getElementById("resumen");

function dibujar() {
    lista.textContent = "";
    for (const tarea of gestor.tareas) {
        const li = document.createElement("li");
        li.className = tarea.hecha ? "hecha" : "";

        const texto = document.createElement("span");
        texto.textContent = tarea.texto;
        texto.addEventListener("click", () => { gestor.alternar(tarea.id); dibujar(); });

        const borrar = document.createElement("button");
        borrar.textContent = "Borrar";
        borrar.addEventListener("click", () => { gestor.eliminar(tarea.id); dibujar(); });

        li.append(texto, borrar);
        lista.appendChild(li);
    }
    resumen.textContent = `${gestor.pendientes} pendientes de ${gestor.tareas.length}`;
}

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();                    // evita que la página se recargue
    const texto = campo.value.trim();
    if (texto === "") return;
    gestor.agregar(texto);
    campo.value = "";
    dibujar();
});

dibujar();
