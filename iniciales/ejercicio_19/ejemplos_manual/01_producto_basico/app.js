/**
 * ============================================================================
 * EJERCICIO 19 - EJEMPLO MANUAL 01: OBJETO PRODUCTO BÁSICO
 * ============================================================================
 * Curso: Confección y Publicación de Páginas Web
 * Profesor: Ramón Abramo
 *
 * CONCEPTOS CLAVE TRATADOS:
 * 1. Declaración literal de un objeto usando llaves `{}` y pares `clave: valor`.
 * 2. Propiedades de diferentes tipos de datos: String, Number, Boolean.
 * 3. Notación de punto (`objeto.propiedad`) para lectura y modificación.
 * 4. Notación de corchetes (`objeto["propiedad"]` u `objeto[variable]`).
 * 5. Adición dinámica de nuevas propiedades sin tocar la definición original.
 * 6. Eliminación de propiedades con el operador `delete`.
 * ============================================================================
 */

// 1. OBJETO BASE INICIAL
let producto = {
  codigo: "A-104",
  nombre: "Teclado Mecánico RGB",
  precio: 59.90,
  enStock: true
};

// 2. REFERENCIAS A ELEMENTOS DEL DOM
const valCodigo = document.getElementById("valCodigo");
const valNombre = document.getElementById("valNombre");
const valPrecio = document.getElementById("valPrecio");
const valStock = document.getElementById("valStock");
const filaCategoria = document.getElementById("filaCategoria");
const valCategoria = document.getElementById("valCategoria");
const salidaRaw = document.getElementById("salidaRaw");

const nuevoPrecio = document.getElementById("nuevoPrecio");
const btnModificarPrecio = document.getElementById("btnModificarPrecio");
const btnAlternarStock = document.getElementById("btnAlternarStock");

const nuevaCategoria = document.getElementById("nuevaCategoria");
const btnAgregarCategoria = document.getElementById("btnAgregarCategoria");
const btnEliminarCodigo = document.getElementById("btnEliminarCodigo");

const inpClave = document.getElementById("inpClave");
const btnConsultarCorchetes = document.getElementById("btnConsultarCorchetes");
const resCorchetes = document.getElementById("resCorchetes");
const btnResetear = document.getElementById("btnResetear");

/**
 * Función que sincroniza la vista HTML con el estado actual del objeto en memoria
 */
function renderizarVista() {
  // Código (comprobamos si existe o si fue eliminado con 'delete')
  if ("codigo" in producto) {
    valCodigo.textContent = producto.codigo;
    valCodigo.style.textDecoration = "none";
  } else {
    valCodigo.textContent = "undefined (eliminado)";
    valCodigo.style.textDecoration = "line-through";
  }

  // Nombre y Precio
  valNombre.textContent = producto.nombre || "Sin nombre";
  valPrecio.textContent = producto.precio !== undefined ? `${producto.precio.toFixed(2)} €` : "N/D";

  // Stock con formato visual
  if (producto.enStock) {
    valStock.textContent = "Disponible";
    valStock.className = "valor stock-si";
  } else {
    valStock.textContent = "Agotado";
    valStock.className = "valor stock-no";
  }

  // Categoría (propiedad añadida dinámicamente)
  if ("categoria" in producto) {
    filaCategoria.style.display = "flex";
    valCategoria.textContent = producto.categoria;
  } else {
    filaCategoria.style.display = "none";
  }

  // Volcado en formato JSON legible en la consola de depuración
  salidaRaw.textContent = JSON.stringify(producto, null, 2);
}

// 3. LISTENERS PARA LAS OPERACIONES

// Modificar precio existente
btnModificarPrecio.addEventListener("click", () => {
  const p = parseFloat(nuevoPrecio.value);
  if (!isNaN(p) && p >= 0) {
    producto.precio = p; // Notación de punto
    renderizarVista();
  } else {
    alert("Por favor, introduce un precio numérico válido.");
  }
});

// Alternar booleano de stock
btnAlternarStock.addEventListener("click", () => {
  producto.enStock = !producto.enStock;
  renderizarVista();
});

// Añadir propiedad nueva dinámicamente
btnAgregarCategoria.addEventListener("click", () => {
  const cat = nuevaCategoria.value.trim();
  if (cat !== "") {
    producto.categoria = cat; // Se añade la propiedad aunque no existiese al inicio
    renderizarVista();
  }
});

// Eliminar propiedad con delete
btnEliminarCodigo.addEventListener("click", () => {
  if ("codigo" in producto) {
    delete producto.codigo; // Operador delete
    renderizarVista();
  } else {
    alert("La propiedad 'codigo' ya fue eliminada.");
  }
});

// Consultar usando corchetes con valor de un input
btnConsultarCorchetes.addEventListener("click", () => {
  const clave = inpClave.value.trim();
  if (clave === "") {
    resCorchetes.textContent = "Escribe una clave (ej: nombre, precio, enStock, categoria)";
    return;
  }

  // Notación de corchetes: evalúa el contenido de la variable 'clave'
  const valor = producto[clave];

  if (valor !== undefined) {
    resCorchetes.innerHTML = `🔍 <code>producto["${clave}"]</code> = <strong>${valor}</strong> (tipo: <em>${typeof valor}</em>)`;
  } else {
    resCorchetes.innerHTML = `⚠️ La propiedad <code>"${clave}"</code> no existe en el objeto (devuelve <strong>undefined</strong>).`;
  }
});

// Restaurar objeto inicial
btnResetear.addEventListener("click", () => {
  producto = {
    codigo: "A-104",
    nombre: "Teclado Mecánico RGB",
    precio: 59.90,
    enStock: true
  };
  resCorchetes.textContent = "";
  inpClave.value = "";
  renderizarVista();
});

// Render inicial
renderizarVista();
