/* =========================================================
   TEORÍA · Formularios y eventos
   ---------------------------------------------------------
   - addEventListener("submit", ...) escucha el envío
   - evento.preventDefault() evita que la página se recargue
   - input.value SIEMPRE devuelve un texto (string)
   - trim() quita espacios; Number() convierte a número
   ========================================================= */

// 1. Referencias a los elementos
const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("nombre");
const inputEdad = document.getElementById("edad");
const chkPrevenir = document.getElementById("prevenir");
const salida = document.getElementById("salida");

// 2. Escuchamos el evento submit DEL FORMULARIO (no el click del botón)
formulario.addEventListener("submit", function (evento) {
  // 2.1 Si la casilla está marcada, cancelamos el envío normal
  if (chkPrevenir.checked) {
    evento.preventDefault();
  }
  // Si no la cancelamos, el navegador envía el formulario,
  // recarga la página y todo lo que escribamos abajo se pierde.
  // Fíjate en la barra de direcciones: aparecerá ?nombre=...&edad=...

  // 2.2 Leemos los valores
  const nombreBruto = inputNombre.value;
  const nombre = inputNombre.value.trim();
  const edadTexto = inputEdad.value;
  const edadNumero = Number(inputEdad.value);

  // 2.3 Mostramos lo que hemos leído
  salida.textContent =
    `inputNombre.value        → "${nombreBruto}"\n` +
    `inputNombre.value.trim() → "${nombre}"\n\n` +
    `inputEdad.value          → "${edadTexto}"   (tipo: ${typeof edadTexto})\n` +
    `Number(inputEdad.value)  → ${edadNumero}   (tipo: ${typeof edadNumero})\n\n` +
    `edadTexto + 1            → ${edadTexto + 1}   ← ¡concatena textos!\n` +
    `edadNumero + 1           → ${edadNumero + 1}   ← suma de verdad\n\n` +
    `Number("")               → ${Number("")}   (campo vacío: ¡cuidado!)\n` +
    `Number("hola")           → ${Number("hola")}`;

  // 2.4 También lo vemos en la consola (F12)
  console.log("Evento recibido:", evento.type);
  console.log("Nombre:", nombre, "Edad:", edadNumero);
});
