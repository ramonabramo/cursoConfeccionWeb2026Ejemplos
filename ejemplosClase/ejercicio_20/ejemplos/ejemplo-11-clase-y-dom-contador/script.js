// ============================================================
// EJEMPLO 11 · Clases y DOM: contadores independientes
// Carpeta: ejemplo-11-clase-y-dom-contador
// Archivos: index.html (estructura) · estilos.css (aspecto) · script.js (lógica)
// ============================================================

class Contador {
    #valor;
    #inicio;

    // Recibe el elemento HTML que debe controlar.
    constructor(elemento, inicio = 0, paso = 1) {
        this.elemento = elemento;
        this.pantalla = elemento.querySelector(".valor");
        this.paso = paso;
        this.#inicio = inicio;
        this.#valor = inicio;

        // Usamos funciones FLECHA: así "this" sigue siendo el Contador dentro del evento.
        elemento.querySelector(".mas").addEventListener("click", () => this.sumar());
        elemento.querySelector(".menos").addEventListener("click", () => this.restar());
        elemento.querySelector(".reiniciar").addEventListener("click", () => this.reiniciar());

        this.dibujar();
    }

    sumar() {
        this.#valor += this.paso;
        this.dibujar();
    }

    restar() {
        this.#valor -= this.paso;
        this.dibujar();
    }

    reiniciar() {
        this.#valor = this.#inicio;
        this.dibujar();
    }

    dibujar() {
        this.pantalla.textContent = this.#valor;
    }
}

// ============================================================
// PARTE 2 · USO DE LA CLASE
// ============================================================
// Cada instancia controla SU propio trozo de HTML y guarda SU propio valor.
const contadorA = new Contador(document.getElementById("contadorA"));
const contadorB = new Contador(document.getElementById("contadorB"), 10, 5);
