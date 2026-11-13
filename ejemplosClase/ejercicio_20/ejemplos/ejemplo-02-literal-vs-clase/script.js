// ============================================================
// EJEMPLO 02 · Objeto literal frente a clase
// Carpeta: ejemplo-02-literal-vs-clase
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

// A) CON OBJETOS LITERALES: cada objeto repite sus propiedades y su método.
const alumno1 = { nombre: "Ana", nota: 8, aprobado() { return this.nota >= 5; } };
const alumno2 = { nombre: "Luis", nota: 4, aprobado() { return this.nota >= 5; } };

// B) CON UNA CLASE: la estructura se escribe UNA sola vez.
class Alumno {
    constructor(nombre, nota) {
        this.nombre = nombre;
        this.nota = nota;
    }

    aprobado() {
        return this.nota >= 5;
    }
}

// ============================================================
// PARTE 2 · USO DE LA CLASE
// ============================================================
// Creamos más alumnos, ahora con la clase.
const alumno3 = new Alumno("Marta", 9);
const alumno4 = new Alumno("Pedro", 3);

mostrar(`${alumno1.nombre}: ${alumno1.aprobado()}`);
mostrar(`${alumno3.nombre}: ${alumno3.aprobado()}`);
mostrar(`${alumno4.nombre}: ${alumno4.aprobado()}`);

// Los métodos de una clase se comparten entre todas las instancias...
mostrar(alumno3.aprobado === alumno4.aprobado);    // true
// ...pero cada objeto literal tiene su propia copia de la función.
mostrar(alumno1.aprobado === alumno2.aprobado);    // false

mostrar(alumno3 instanceof Alumno);    // true
mostrar(alumno1 instanceof Alumno);    // false: un literal no pertenece a ninguna clase
mostrar(Object.keys(alumno3).join(", "));   // propiedades propias (el método no aparece)
