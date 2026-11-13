// ============================================================
// EJEMPLO 01 · Mi primera clase
// Carpeta: ejemplo-01-primera-clase
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

// PASO 1: declaramos la clase con la palabra "class".
// Por convención, su nombre empieza con mayúscula.
class Persona {

    // PASO 2: el constructor se ejecuta automáticamente al usar "new".
    // Recibe los datos iniciales y los guarda en el objeto con "this".
    constructor(nombre, edad) {
        this.nombre = nombre;   // propiedad "nombre"
        this.edad = edad;       // propiedad "edad"
    }

    // PASO 3: los métodos se escriben sin la palabra "function".
    saludar() {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
    }

    cumplirAnios() {
        this.edad++;            // modifica una propiedad del propio objeto
        return `${this.nombre} cumple años: ahora tiene ${this.edad}.`;
    }
}

// ============================================================
// PARTE 2 · USO DE LA CLASE
// ============================================================
// PASO 4: creamos objetos (instancias) con "new".
const ana = new Persona("Ana", 22);
const luis = new Persona("Luis", 30);

// PASO 5: usamos los métodos. Cada objeto tiene sus propios datos.
mostrar(ana.saludar());
mostrar(luis.saludar());
mostrar(ana.cumplirAnios());
mostrar(ana.edad);                  // 23: solo ha cambiado Ana
mostrar(luis.edad);                 // 30: Luis no se ha tocado

// PASO 6: comprobamos de qué clase es cada objeto.
mostrar(ana instanceof Persona);    // true
mostrar(typeof Persona);            // function: una clase es una función especial
