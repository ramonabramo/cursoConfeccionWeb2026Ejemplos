/* =========================================================
   TEORÍA · Modo edición con una variable de estado
   ---------------------------------------------------------
   - Un solo formulario sirve para AÑADIR y para EDITAR
   - La variable indiceEdicion indica el modo:
       -1  → estamos añadiendo
       n   → estamos editando la posición n
   - El atributo hidden muestra u oculta el botón Cancelar
   ========================================================= */

const colores = ["rojo", "verde", "azul"];
let indiceEdicion = -1;

const formulario = document.getElementById("formulario");
const titulo = document.getElementById("titulo");
const inputColor = document.getElementById("color");
const btnGuardar = document.getElementById("btnGuardar");
const btnCancelar = document.getElementById("btnCancelar");
const lista = document.getElementById("lista");
const verEstado = document.getElementById("verEstado");
const salida = document.getElementById("salida");

// Muestra en pantalla cuánto vale la variable de estado
function mostrarEstado() {
  const modo = indiceEdicion === -1 ? "AÑADIR" : `EDITAR la posición ${indiceEdicion}`;
  verEstado.textContent = `indiceEdicion = ${indiceEdicion}  →  modo ${modo}`;
}

function pintarLista() {
  lista.replaceChildren();

  colores.forEach(function (color, indice) {
    const li = document.createElement("li");
    if (indice === indiceEdicion) {
      li.classList.add("editando");
    }

    const span = document.createElement("span");
    span.textContent = `${indice}: ${color}`;

    const btnEditar = document.createElement("button");
    btnEditar.type = "button";
    btnEditar.className = "secundario pequeno";
    btnEditar.textContent = "Editar";
    btnEditar.addEventListener("click", function () {
      empezarEdicion(indice);
    });

    li.append(span, btnEditar);
    lista.appendChild(li);
  });
}

// Entrar en modo edición
function empezarEdicion(indice) {
  indiceEdicion = indice;

  inputColor.value = colores[indice];      // 1. rellenar el formulario
  titulo.textContent = "Editar color";     // 2. cambiar textos
  btnGuardar.textContent = "Guardar cambios";
  btnCancelar.hidden = false;              // 3. mostrar Cancelar
  inputColor.focus();

  salida.textContent = `empezarEdicion(${indice})\nEl formulario muestra "${colores[indice]}" y está en modo edición.`;
  mostrarEstado();
  pintarLista();
}

// Volver al modo añadir
function salirDeEdicion() {
  indiceEdicion = -1;

  formulario.reset();
  titulo.textContent = "Añadir color";
  btnGuardar.textContent = "Añadir";
  btnCancelar.hidden = true;

  mostrarEstado();
  pintarLista();
}

// El MISMO submit decide qué hacer según el estado
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  const color = inputColor.value.trim();
  if (color === "") return;

  if (indiceEdicion === -1) {
    colores.push(color);
    salida.textContent = `Modo AÑADIR → colores.push("${color}")`;
  } else {
    const anterior = colores[indiceEdicion];
    colores[indiceEdicion] = color;
    salida.textContent = `Modo EDITAR → colores[${indiceEdicion}] = "${color}"  (antes era "${anterior}")`;
  }

  salirDeEdicion();
});

btnCancelar.addEventListener("click", function () {
  salirDeEdicion();
  salida.textContent = "Edición cancelada: no se ha cambiado nada.";
});

// Estado inicial
mostrarEstado();
pintarLista();
