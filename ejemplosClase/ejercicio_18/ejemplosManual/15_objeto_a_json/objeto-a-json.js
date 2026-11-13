const alumno = { nombre: "Ana", edad: 22, notas: [8, 9], activo: true };

const texto = JSON.stringify(alumno);       // objeto -> texto JSON
console.log(texto);
console.log(typeof texto);

const copia = JSON.parse(texto);            // texto JSON -> objeto
console.log(copia.nombre, copia.notas[1]);

console.log(JSON.stringify(alumno, null, 2)); // con sangría para leerlo mejor
