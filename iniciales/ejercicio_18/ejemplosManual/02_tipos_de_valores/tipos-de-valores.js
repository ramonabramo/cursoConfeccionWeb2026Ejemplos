const demo = {
  texto: "Hola",
  numero: 42,
  booleano: true,
  nada: null,
  lista: [1, 2, 3],
  anidado: { clave: "valor" },
  accion() { return "Soy un método"; }
};

console.log(typeof demo.texto);
console.log(typeof demo.lista);
console.log(typeof demo.accion);
console.log(demo.accion());
