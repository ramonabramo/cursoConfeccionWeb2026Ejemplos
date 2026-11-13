const alumno = { nombre: "Elena", edad: 20, curso: "DAW" };

const { nombre, edad } = alumno;                                    // extraer propiedades
const { curso: titulacion, aula = 104 } = alumno;                   // renombrar y valor por defecto
console.log(nombre, edad, titulacion, aula);

const base = { tema: "claro", idioma: "es" };
const mia = { ...base, tema: "oscuro", notificaciones: true };      // combinar
console.log(mia);

function presentar({ nombre, edad = 18 }) {                         // objeto como argumento
  return `${nombre} tiene ${edad} años`;
}
console.log(presentar(alumno));
console.log(presentar({ nombre: "Marcos" }));
