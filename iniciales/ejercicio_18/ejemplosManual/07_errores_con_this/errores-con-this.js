const gato = {
  nombre: "Misi",
  saludarMal: () => `Soy ${this.nombre}`,             // flecha: this NO es el objeto
  saludarBien() { return `Soy ${this.nombre}`; }     // método abreviado: correcto
};

console.log(gato.saludarBien());
console.log(gato.saludarMal());

// Perder this al separar el método del objeto
const suelto = gato.saludarBien;
console.log(suelto());

// Solución: fijar this con bind
const ligado = gato.saludarBien.bind(gato);
console.log(ligado());
