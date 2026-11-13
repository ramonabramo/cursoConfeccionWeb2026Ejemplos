
const alumno = {
    // miembros del objeto

    // propiedades
    nombre: 'Ramon',
    apellido: 'García',
    edad: 26,
    // metodos
    dibujar(selector) {
        const elemento = document.querySelector(selector);
        elemento.innerHTML = `
    <ul>
        <li>Nombre:${this.nombre}</li>
        <li>Apellido: ${this.apellido}</li>
        <li>Edad: ${this.edad}</li>
    </ul>
    `;
    }
};

console.log(alumno.nombre);
console.log(alumno.apellido);
console.log(alumno.edad);

alumno.dibujar('output');

alumno.nombre = "Rosa";
alumno.dibujar('div');

alumno.edad = 57;
alumno.dibujar('p');

