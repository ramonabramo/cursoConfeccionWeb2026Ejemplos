const objeto = {
  nombre: "Ana",
  saludar() { return "Hola"; },
  pendiente: undefined,
  registro: new Date("2026-01-15T10:30:00Z")
};

const texto = JSON.stringify(objeto);
console.log(texto);

const vuelta = JSON.parse(texto);
console.log(typeof vuelta.registro);
console.log(vuelta.saludar);

try {
  JSON.parse("{nombre: 'Ana'}"); // JSON inválido: sin comillas dobles
} catch (e) {
  console.log(e.name);
}
