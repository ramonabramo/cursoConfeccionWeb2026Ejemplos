const especial = {
  "nombre completo": "Ana Ruiz", // espacios: necesita comillas
  "e-mail": "ana@ejemplo.com",   // guion: necesita comillas
  2024: "año",                   // un número también vale
  clase: "A"                     // identificador válido: sin comillas
};

console.log(especial["nombre completo"]);
console.log(especial["e-mail"]);
console.log(especial[2024]);
console.log(especial.clase);

const campo = "color";
const camiseta = { talla: "M", [campo]: "azul" }; // clave calculada
console.log(camiseta);
