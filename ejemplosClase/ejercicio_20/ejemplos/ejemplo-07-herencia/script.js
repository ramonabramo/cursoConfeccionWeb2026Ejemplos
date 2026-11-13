// ============================================================
// EJEMPLO 07 · Herencia: extends y super
// Carpeta: ejemplo-07-herencia
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

class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    hablar() {
        return `${this.nombre} hace un sonido.`;
    }
    presentar() {
        return `Soy ${this.nombre}.`;
    }
}

// "extends": Perro HEREDA todo lo de Animal.
class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre);          // llama al constructor del padre (siempre lo primero)
        this.raza = raza;       // propiedad nueva, solo de Perro
    }
    hablar() {                  // SOBRESCRIBE el método del padre
        return `${this.nombre} ladra: ¡Guau!`;
    }
}

class Gato extends Animal {
    hablar() {                  // reutiliza el método del padre con "super"
        return `${super.hablar()} Y además maúlla.`;
    }
}

// ============================================================
// PARTE 2 · USO DE LA CLASE
// ============================================================
const animales = [new Perro("Rex", "Labrador"), new Gato("Misi"), new Animal("Bicho")];

// POLIMORFISMO: la misma llamada, un comportamiento distinto en cada clase.
for (const animal of animales) {
    mostrar(animal.hablar());
}

mostrar(animales[0].presentar());           // método heredado: no está escrito en Perro
mostrar(animales[0].raza);
mostrar(animales[1].raza);                  // undefined: Gato no tiene raza

mostrar(animales[0] instanceof Perro);      // true
mostrar(animales[0] instanceof Animal);     // true: un Perro ES un Animal
mostrar(animales[1] instanceof Perro);      // false
