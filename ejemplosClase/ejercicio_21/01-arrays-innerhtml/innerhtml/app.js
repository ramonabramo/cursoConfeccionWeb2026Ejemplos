/* =========================================================
   TEORÍA · innerHTML
   ---------------------------------------------------------
   - innerHTML lee o SUSTITUYE el HTML de dentro de un elemento
   - Lo que le damos se interpreta como HTML (etiquetas incluidas)
   - textContent, en cambio, lo trata siempre como texto plano
   - Las plantillas `...${variable}...` facilitan construir HTML
   ========================================================= */

const inputTexto = document.getElementById("texto");
const cajaA = document.getElementById("cajaA");
const cajaB = document.getElementById("cajaB");
const lista = document.getElementById("lista");

// 1. innerHTML: las etiquetas <b> e <i> se convierten en HTML real
document.getElementById("btnInner").addEventListener("click", function () {
  cajaA.innerHTML = inputTexto.value;
});

// 2. textContent: las etiquetas se ven tal cual, como texto
document.getElementById("btnText").addEventListener("click", function () {
  cajaB.textContent = inputTexto.value;
});

// 3. innerHTML += añade al final de lo que ya había
//    (en realidad lee todo, le suma el texto y lo vuelve a escribir)
document.getElementById("btnSumar").addEventListener("click", function () {
  cajaA.innerHTML += `<p>${inputTexto.value}</p>`;
});

// 4. Construir una lista completa a partir de un array
const colores = ["rojo", "verde", "azul", "amarillo"];

document.getElementById("btnLista").addEventListener("click", function () {
  let html = "";

  for (let i = 0; i < colores.length; i++) {
    // Plantilla de texto: comillas invertidas y ${...}
    html += `<li>Color ${i + 1}: <strong>${colores[i]}</strong></li>`;
  }

  console.log("HTML generado:", html);

  // Una sola asignación sustituye todo el contenido del <ul>
  lista.innerHTML = html;
});
