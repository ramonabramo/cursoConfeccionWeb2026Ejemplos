const catalogo = [
  { id: 1, titulo: "Monitor 24 pulgadas", precio: 140, disponible: true },
  { id: 2, titulo: "Ratón Inalámbrico", precio: 25, disponible: false },
  { id: 3, titulo: "Alfombrilla XXL", precio: 18, disponible: true }
];

for (const item of catalogo) {
  if (item.disponible) {
    console.log(`✓ ${item.titulo} - ${item.precio}€`);
  }
}

const baratos = catalogo.filter(p => p.precio < 50);
const titulos = catalogo.map(p => p.titulo);
const raton = catalogo.find(p => p.id === 2);
const total = catalogo.reduce((suma, p) => suma + p.precio, 0);

console.log(baratos.length);
console.log(titulos);
console.log(raton.titulo);
console.log(total);
