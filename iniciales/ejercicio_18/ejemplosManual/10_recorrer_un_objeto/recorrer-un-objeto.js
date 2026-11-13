const configuracion = {
  tema: "oscuro",
  idioma: "es",
  notificaciones: true
};

console.log(Object.keys(configuracion));
console.log(Object.values(configuracion));
console.log(Object.entries(configuracion));

for (const clave in configuracion) {
  console.log(clave + " -> " + configuracion[clave]);
}

for (const [clave, valor] of Object.entries(configuracion)) {
  console.log(`${clave}: ${valor}`);
}
