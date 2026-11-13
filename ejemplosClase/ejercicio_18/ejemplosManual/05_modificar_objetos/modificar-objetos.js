const producto = {
  codigo: "A-104",
  nombre: "Teclado Mecánico",
  precio: 59.90,
  enStock: true
};

producto.precio = 49.95;             // modificar
producto.categoria = "Periféricos";  // añadir
delete producto.codigo;              // borrar
console.log(producto);

// const impide reasignar la variable, no modificar su contenido
try {
  producto = {};
} catch (e) {
  console.log(e.name + ": " + e.message);
}

const fijo = Object.freeze({ iva: 21 }); // objeto congelado
fijo.iva = 10;                           // se ignora
console.log(fijo.iva);
