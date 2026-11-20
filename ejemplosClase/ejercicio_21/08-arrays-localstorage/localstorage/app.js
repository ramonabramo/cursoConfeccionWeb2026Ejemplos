/* =========================================================
   TEORÍA · localStorage
   ---------------------------------------------------------
   - Almacén clave → valor del navegador que NO se borra al
     recargar ni al cerrar la pestaña
   - setItem(clave, valor)  guarda
   - getItem(clave)         lee (null si no existe)
   - removeItem(clave)      borra una clave
   - clear()                borra TODO lo del sitio (¡cuidado!)
   - Claves y valores son SIEMPRE texto
   ========================================================= */

const salida = document.getElementById("salida");
const inputClave = document.getElementById("clave");
const inputValor = document.getElementById("valor");

// 1. Contador de visitas: se ejecuta cada vez que se carga la página
const CLAVE_VISITAS = "teoria_ls_visitas";

const guardado = localStorage.getItem(CLAVE_VISITAS); // "3" o null
const visitas = Number(guardado) + 1;                 // Number(null) es 0
localStorage.setItem(CLAVE_VISITAS, visitas);         // se guarda como "4"

document.getElementById("visitas").textContent = visitas;
console.log("getItem devolvió:", guardado, "· tipo:", typeof guardado);

document.getElementById("btnReiniciar").addEventListener("click", function () {
  localStorage.removeItem(CLAVE_VISITAS);
  salida.textContent = `localStorage.removeItem("${CLAVE_VISITAS}")\nRecarga y el contador volverá a 1.`;
});

// 2. setItem
document.getElementById("btnGuardar").addEventListener("click", function () {
  localStorage.setItem(inputClave.value, inputValor.value);
  salida.textContent = `localStorage.setItem("${inputClave.value}", "${inputValor.value}")\nGuardado. Recarga la página y pulsa getItem.`;
});

// 3. getItem
document.getElementById("btnLeer").addEventListener("click", function () {
  const valor = localStorage.getItem(inputClave.value);
  salida.textContent =
    `localStorage.getItem("${inputClave.value}") → ${valor === null ? "null" : `"${valor}"`}\n` +
    (valor === null ? "No existe esa clave: getItem devuelve null." : `Tipo: ${typeof valor}`);
});

// 4. removeItem
document.getElementById("btnBorrar").addEventListener("click", function () {
  localStorage.removeItem(inputClave.value);
  salida.textContent = `localStorage.removeItem("${inputClave.value}")\nBorrada (si existía).`;
});

// 5. Recorrer todas las claves del sitio
document.getElementById("btnTodo").addEventListener("click", function () {
  let texto = `Hay ${localStorage.length} claves guardadas en este sitio:\n\n`;
  for (let i = 0; i < localStorage.length; i++) {
    const clave = localStorage.key(i);
    texto += `${clave} = ${localStorage.getItem(clave)}\n`;
  }
  texto += "\nFíjate: aparecen también las de otras páginas del mismo servidor.";
  salida.textContent = texto;
});

// 6. El problema: guardar un array sin convertirlo
document.getElementById("btnArray").addEventListener("click", function () {
  const numeros = [10, 20, 30];
  localStorage.setItem("teoria_ls_array", numeros);

  const leido = localStorage.getItem("teoria_ls_array");

  salida.textContent =
    `setItem("teoria_ls_array", [10, 20, 30])\n` +
    `getItem("teoria_ls_array") → "${leido}"\n\n` +
    `Tipo: ${typeof leido}  ·  ¿Es un array? ${Array.isArray(leido)}\n` +
    `leido[0] → "${leido[0]}"   ← ¡el primer CARÁCTER, no el 10!\n\n` +
    `Para guardar arrays y objetos necesitamos JSON.stringify y JSON.parse.`;
});
