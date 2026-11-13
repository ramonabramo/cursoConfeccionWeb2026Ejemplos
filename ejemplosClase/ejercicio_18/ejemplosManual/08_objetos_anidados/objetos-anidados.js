const estudiante = {
  nombre: "Carlos Ruiz",
  direccion: {
    calle: "Av. de los Castros, 42",
    ciudad: "Santander",
    cp: "39005"
  },
  calificaciones: [7.5, 8.0, 9.5],
  calcularMedia() {
    let suma = 0;
    for (const nota of this.calificaciones) {
      suma += nota;
    }
    return (suma / this.calificaciones.length).toFixed(2);
  }
};

console.log(estudiante.direccion.ciudad);
console.log(estudiante.calificaciones[0]);
console.log(estudiante.calcularMedia());

estudiante.direccion.ciudad = "Torrelavega";
console.log(estudiante.direccion);
