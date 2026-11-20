/* =========================================================
   TEORÍA · forEach
   ---------------------------------------------------------
   - array.forEach(function (elemento, indice) { ... })
   - Llama a la función una vez por cada elemento y le pasa
     el elemento y su posición
   - No se puede cortar con break y devuelve undefined
   ========================================================= */

const ciudades = ["Santander", "Oviedo", "León"];
const salida = document.getElementById("salida");

// 1. for clásico: tengo el índice, pido el elemento
document.getElementById("btnFor").addEventListener("click", function () {
  let texto = "for (let i = 0; i < ciudades.length; i++)\n\n";
  for (let i = 0; i < ciudades.length; i++) {
    texto += `${i} → ${ciudades[i]}\n`;
  }
  salida.textContent = texto;
});

// 2. for...of: tengo el elemento, pero NO el índice
document.getElementById("btnForOf").addEventListener("click", function () {
  let texto = "for (const ciudad of ciudades)\n\n";
  for (const ciudad of ciudades) {
    texto += `${ciudad}   (¿posición? no la sabemos)\n`;
  }
  salida.textContent = texto;
});

// 3. forEach: tengo el elemento Y el índice
document.getElementById("btnForEach").addEventListener("click", function () {
  let texto = "ciudades.forEach(function (ciudad, indice) { ... })\n\n";

  ciudades.forEach(function (ciudad, indice) {
    texto += `${indice} → ${ciudad}\n`;
  });

  salida.textContent = texto;
});

// 4. forEach con objetos: el índice nos servirá para eliminar y editar
const alumnos = [
  { nombre: "Ana", nota: 7 },
  { nombre: "Luis", nota: 4.5 },
  { nombre: "Eva", nota: 9 },
];

document.getElementById("btnObjetos").addEventListener("click", function () {
  const lista = document.getElementById("lista");
  lista.replaceChildren();

  alumnos.forEach(function (alumno, indice) {
    const li = document.createElement("li");
    li.textContent = `${alumno.nombre} (${alumno.nota}) · está en alumnos[${indice}]`;
    lista.appendChild(li);
  });

  salida.textContent = "Cada <li> sabe en qué posición del array está su alumno.";
});
