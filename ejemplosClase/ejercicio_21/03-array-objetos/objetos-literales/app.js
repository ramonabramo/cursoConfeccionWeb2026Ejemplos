/* =========================================================
   TEORÍA · Objetos literales
   ---------------------------------------------------------
   - Un objeto agrupa datos en pares  clave: valor
   - Se accede con notación punto (obj.clave) o corchete (obj["clave"])
   - Un array de objetos es una lista de "fichas" con la misma forma
   ========================================================= */

// 1. Un objeto literal
const alumno = {
  nombre: "Ana",
  nota: 7,
  curso: "1.º DAW",
};

// 2. Un array de objetos
const clase = [
  { nombre: "Ana", nota: 7 },
  { nombre: "Luis", nota: 4.5 },
  { nombre: "Eva", nota: 9 },
];

const estado = document.getElementById("estado");
const salida = document.getElementById("salida");

// Muestra el objeto alumno en la página (y en la consola)
estado.textContent = `{ nombre: "${alumno.nombre}", nota: ${alumno.nota}, curso: "${alumno.curso}" }`;
console.log("alumno:", alumno);

// 3. Leer propiedades
document.getElementById("btnLeer").addEventListener("click", function () {
  salida.textContent =
    `alumno.nombre       → "${alumno.nombre}"\n` +
    `alumno["nota"]      → ${alumno.nota}\n` +
    `alumno.curso        → "${alumno.curso}"\n` +
    `alumno.telefono     → ${alumno.telefono}   ← no existe: undefined`;
});

// 4. Modificar una propiedad
document.getElementById("btnModificar").addEventListener("click", function () {
  alumno.nota = Number(document.getElementById("nuevaNota").value);

  estado.textContent = `{ nombre: "${alumno.nombre}", nota: ${alumno.nota}, curso: "${alumno.curso}" }`;
  salida.textContent = `alumno.nota = ${alumno.nota};\nLa propiedad se ha sobrescrito.`;
  console.log("alumno:", alumno);
});

// 5. Añadir una propiedad que no existía
document.getElementById("btnAnadir").addEventListener("click", function () {
  alumno.email = "ana@ejemplo.com";

  salida.textContent =
    `alumno.email = "ana@ejemplo.com";\n\n` +
    `Si la propiedad no existe, se crea.\n` +
    `Mira el objeto completo en la consola.`;
  console.log("alumno:", alumno);
});

// 6. Recorrer un array de objetos con for...of
document.getElementById("btnRecorrer").addEventListener("click", function () {
  let texto = "";

  for (const persona of clase) {
    // persona es cada objeto del array
    texto += `${persona.nombre} → ${persona.nota}\n`;
  }

  texto += `\nclase[1].nombre → "${clase[1].nombre}"`;
  salida.textContent = texto;
});

// 7. Forma abreviada: si la variable se llama como la propiedad
document.getElementById("btnAbreviada").addEventListener("click", function () {
  const nombre = "Marta";
  const nota = 6;

  const larga = { nombre: nombre, nota: nota };
  const corta = { nombre, nota }; // exactamente lo mismo

  clase.push(corta);

  salida.textContent =
    `{ nombre: nombre, nota: nota }  → { nombre: "${larga.nombre}", nota: ${larga.nota} }\n` +
    `{ nombre, nota }                → { nombre: "${corta.nombre}", nota: ${corta.nota} }\n\n` +
    `Lo he añadido al array: ahora hay ${clase.length} alumnos. Vuelve a recorrerlo.`;
});
