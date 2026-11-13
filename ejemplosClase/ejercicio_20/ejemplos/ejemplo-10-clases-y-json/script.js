// ============================================================
// EJEMPLO 10 · Clases y JSON: guardar y recuperar
// Carpeta: ejemplo-10-clases-y-json
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

class Tarea {
    constructor(texto, hecha = false, id = Date.now()) {
        this.texto = texto;
        this.hecha = hecha;
        this.id = id;
    }

    alternar() {
        this.hecha = !this.hecha;
        return this;
    }

    // JSON.stringify llama a toJSON(): decidimos qué datos se guardan.
    toJSON() {
        return { id: this.id, texto: this.texto, hecha: this.hecha };
    }

    // Método estático que RECONSTRUYE una instancia a partir de datos planos.
    static desdeJSON(datos) {
        return new Tarea(datos.texto, datos.hecha, datos.id);
    }
}

// ============================================================
// PARTE 2 · USO DE LA CLASE
// ============================================================
const t1 = new Tarea("Estudiar clases", false, 1);
const t2 = new Tarea("Hacer la práctica", true, 2);

const texto = JSON.stringify([t1, t2]);         // instancias -> texto
mostrar(texto);

const planos = JSON.parse(texto);               // texto -> objetos PLANOS
mostrar(typeof planos[0].alternar);             // undefined: se han perdido los métodos
mostrar(planos[0] instanceof Tarea);            // false

const tareas = planos.map(datos => Tarea.desdeJSON(datos));   // reconstruimos
mostrar(tareas[0] instanceof Tarea);            // true
mostrar(tareas[0].alternar().hecha);            // true: los métodos funcionan otra vez

localStorage.setItem("tareas-ejemplo", texto);  // lo guardamos en el navegador
mostrar(localStorage.getItem("tareas-ejemplo") === texto);
