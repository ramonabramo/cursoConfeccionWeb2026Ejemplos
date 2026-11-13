/**
 * ============================================================================
 * EJERCICIO 18 - PRÁCTICA 4: AGENDA DE CONTACTOS CON JSON Y LOCALSTORAGE
 * ============================================================================
 * Curso: Confección y Publicación de Páginas Web
 * Alumno/a: [Escribe aquí tu nombre]
 *
 * INSTRUCCIONES:
 * Sigue los comentarios paso a paso para completar el ejercicio.
 * No modifiques el HTML ni los identificadores (id) existentes.
 * ============================================================================
 */

// PASO 1 (ya hecho): constantes que apuntan a los elementos del DOM
// Constantes ya declaradas en el archivo:
const inpNombre      = document.getElementById("inpNombre");
const inpTelefono    = document.getElementById("inpTelefono");
const btnAgregar     = document.getElementById("btnAgregar");
const inpBuscar      = document.getElementById("inpBuscar");
const listaContactos = document.getElementById("listaContactos");
const txtContador    = document.getElementById("txtContador");

// PASO 2: clave de almacenamiento y array "contactos" (un objeto literal por contacto)
// Lee el texto guardado con localStorage.getItem(CLAVE), conviértelo con
// JSON.parse() y usa un array vacío [] si todavía no hay datos
const CLAVE = "agenda";
let contactos;
// TODO: contactos = JSON.parse(localStorage.getItem(CLAVE)) || [];

// PASO 3: función guardar()
// Convierte "contactos" a texto con JSON.stringify() y guárdalo con localStorage.setItem()
function guardar() {
  // TODO: localStorage.setItem(CLAVE, JSON.stringify(contactos));
}

// PASO 4: función dibujar()
// 4.1 Lee el texto de búsqueda de inpBuscar (en minúsculas y sin espacios sobrantes)
// 4.2 Filtra "contactos" con filter() para quedarte con los que contienen ese texto
// 4.3 Vacía la lista y crea un <li> por contacto con su nombre, su teléfono
//     y un botón "Borrar" que elimine ese contacto por su id, guarde y vuelva a dibujar
// 4.4 Muestra en txtContador "X de Y contactos"
function dibujar() {
  // TODO: Implementar el filtrado, vaciado, pintado de <li> y contador
}

// PASO 5: escuchador de btnAgregar
// Valida nombre y teléfono, crea el objeto { id: Date.now(), nombre, telefono },
// añádelo a "contactos", guarda, limpia los inputs y dibuja
btnAgregar.addEventListener("click", () => {
  // TODO: Validar, crear objeto, push(), guardar(), limpiar inputs y dibujar()
});

// PASO 6: escuchador "input" de inpBuscar que llame a dibujar()
// inpBuscar.addEventListener("input", dibujar);

// PASO 7: llama a dibujar() para pintar los datos al cargar la página
// dibujar();
