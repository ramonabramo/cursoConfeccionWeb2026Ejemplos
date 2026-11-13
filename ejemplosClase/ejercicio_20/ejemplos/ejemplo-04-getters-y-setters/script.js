// ============================================================
// EJEMPLO 04 · Getters y setters con validación
// Carpeta: ejemplo-04-getters-y-setters
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

class Rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho;     // OJO: esto llama al setter "ancho", no asigna directamente
        this.alto = alto;
    }

    // GETTER y SETTER de "ancho": guardan el dato real en "_ancho".
    get ancho() {
        return this._ancho;
    }
    set ancho(valor) {
        if (valor <= 0) throw new RangeError("El ancho debe ser mayor que 0");
        this._ancho = valor;
    }

    get alto() {
        return this._alto;
    }
    set alto(valor) {
        if (valor <= 0) throw new RangeError("El alto debe ser mayor que 0");
        this._alto = valor;
    }

    // GETTERS de solo lectura: propiedades calculadas.
    get area() {
        return this.ancho * this.alto;
    }
    get perimetro() {
        return 2 * (this.ancho + this.alto);
    }
}

// ============================================================
// PARTE 2 · USO DE LA CLASE
// ============================================================
const r = new Rectangulo(4, 3);
mostrar(r.area);                    // se lee como una propiedad, sin paréntesis
mostrar(r.perimetro);

r.ancho = 10;                       // se asigna como una propiedad: ejecuta el setter
mostrar(r.area);

try { r.alto = -2; } catch (error) { mostrar(`${error.name}: ${error.message}`); }
try { new Rectangulo(0, 5); } catch (error) { mostrar(error.message); }

r.area = 999;                       // "area" no tiene setter: la asignación se ignora
mostrar(r.area);
mostrar(r._ancho);                  // se puede leer: el guion bajo es solo una convención
