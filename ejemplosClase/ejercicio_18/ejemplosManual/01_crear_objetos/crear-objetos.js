// Forma 1: creación directa con sus propiedades (la más habitual)
const alumno = {
  nombre: "Elena",
  edad: 20,
  matriculado: true
};

// Forma 2: objeto vacío y asignación posterior
const ficha = {};
ficha.curso = "JavaScript Básico";
ficha.aula = 104;

// Forma 3: abreviada, a partir de variables existentes (ES6)
const marca = "Logitech";
const modelo = "MX Master";
const raton = { marca, modelo }; // equivale a { marca: marca, modelo: modelo }

console.log(alumno);
console.log(ficha);
console.log(raton);
