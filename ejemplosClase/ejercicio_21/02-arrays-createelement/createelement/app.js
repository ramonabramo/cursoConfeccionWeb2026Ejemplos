/* =========================================================
   TEORÍA · createElement
   ---------------------------------------------------------
   - document.createElement("p") crea un elemento NUEVO,
     pero todavía no está en la página
   - textContent pone su texto; classList gestiona sus clases
   - appendChild / append lo cuelgan dentro de otro elemento
   - replaceChildren() sin argumentos vacía un elemento
   ========================================================= */

const inputTexto = document.getElementById("texto");
const zona = document.getElementById("zona");
const lista = document.getElementById("lista");
const salida = document.getElementById("salida");

// Aquí guardaremos el párrafo que creemos en el paso 1
let parrafo = null;

// 1. Crear el elemento (existe en memoria, no en la página)
document.getElementById("btnCrear").addEventListener("click", function () {
  parrafo = document.createElement("p");
  parrafo.textContent = inputTexto.value;

  console.log("Elemento creado:", parrafo);
  salida.textContent =
    "const parrafo = document.createElement(\"p\");\n" +
    "parrafo.textContent = \"" + inputTexto.value + "\";\n\n" +
    "El elemento existe, pero NO está en la página.\n" +
    "¿Está dentro de la zona? " + zona.contains(parrafo);
});

// 2. Colgarlo dentro de la zona: ahora sí aparece
document.getElementById("btnColgar").addEventListener("click", function () {
  if (parrafo === null) {
    salida.textContent = "Primero pulsa el paso 1.";
    return;
  }

  zona.appendChild(parrafo);

  salida.textContent =
    "zona.appendChild(parrafo);\n\n" +
    "¿Está dentro de la zona? " + zona.contains(parrafo) + "\n" +
    "Hijos que tiene ahora la zona: " + zona.children.length + "\n\n" +
    "Si vuelves al paso 1 y 2 crearás otro párrafo distinto.";
});

// 3. classList: añadir/quitar clases sin tocar el resto
document.getElementById("btnDestacar").addEventListener("click", function () {
  if (parrafo === null) {
    salida.textContent = "Primero pulsa el paso 1.";
    return;
  }

  parrafo.classList.toggle("destacado");

  salida.textContent =
    "parrafo.classList.toggle(\"destacado\");\n\n" +
    "¿Tiene la clase? " + parrafo.classList.contains("destacado") + "\n" +
    "Clases actuales: \"" + parrafo.className + "\"";
});

// 4. Lista completa desde un array
const ciudades = ["Santander", "Madrid", "Sevilla", "Bilbao"];

document.getElementById("btnLista").addEventListener("click", function () {
  lista.replaceChildren(); // empezamos de cero

  for (const ciudad of ciudades) {
    const li = document.createElement("li");

    const strong = document.createElement("strong");
    strong.textContent = ciudad;

    const span = document.createElement("span");
    span.textContent = ` (${ciudad.length} letras)`;

    li.append(strong, span); // append admite varios hijos
    lista.appendChild(li);
  }

  salida.textContent = `Se han creado ${lista.children.length} <li> con createElement.`;
});

document.getElementById("btnVaciar").addEventListener("click", function () {
  lista.replaceChildren();
  salida.textContent = "lista.replaceChildren();  → la lista queda vacía.";
});
