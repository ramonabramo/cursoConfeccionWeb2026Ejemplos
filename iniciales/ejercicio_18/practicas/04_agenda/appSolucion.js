/**
 * ============================================================================
 * EJERCICIO 19 - PRÁCTICA 4: SOLUCIÓN OFICIAL DEL PROFESOR
 * ============================================================================
 * Curso: Confección y Publicación de Páginas Web
 * Profesor: Ramón Abramo
 * ============================================================================
 */

// PASO 1 (ya hecho): constantes que apuntan a los elementos del DOM
const inpNombre      = document.getElementById("inpNombre");
const inpTelefono    = document.getElementById("inpTelefono");
const btnAgregar     = document.getElementById("btnAgregar");
const inpBuscar      = document.getElementById("inpBuscar");
const listaContactos = document.getElementById("listaContactos");
const txtContador    = document.getElementById("txtContador");

// PASO 2: clave de almacenamiento y array "contactos" (un objeto literal por contacto)
const CLAVE = "agenda";
let contactos = JSON.parse(localStorage.getItem(CLAVE)) || [];

// PASO 3: función guardar()
function guardar() {
  localStorage.setItem(CLAVE, JSON.stringify(contactos));
}

// PASO 4: función dibujar()
function dibujar() {
  // 4.1 Lee el texto de búsqueda de inpBuscar (en minúsculas y sin espacios sobrantes)
  const filtro = inpBuscar.value.trim().toLowerCase();

  // 4.2 Filtra "contactos" con filter() para quedarte con los que contienen ese texto
  const visibles = contactos.filter(c => c.nombre.toLowerCase().includes(filtro));

  // 4.3 Vacía la lista y crea un <li> por contacto con su nombre, su teléfono
  //     y un botón "Borrar" que elimine ese contacto por su id, guarde y vuelva a dibujar
  listaContactos.innerHTML = "";

  for (const c of visibles) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = `${c.nombre} · ${c.telefono}`;

    const btnBorrar = document.createElement("button");
    btnBorrar.className = "btn-borrar";
    btnBorrar.textContent = "Borrar";
    btnBorrar.addEventListener("click", () => {
      contactos = contactos.filter(item => item.id !== c.id);
      guardar();
      dibujar();
    });

    li.appendChild(span);
    li.appendChild(btnBorrar);
    listaContactos.appendChild(li);
  }

  // 4.4 Muestra en txtContador "X de Y contactos"
  txtContador.textContent = `${visibles.length} de ${contactos.length} contactos`;
}

// PASO 5: escuchador de btnAgregar
btnAgregar.addEventListener("click", () => {
  const nombre = inpNombre.value.trim();
  const telefono = inpTelefono.value.trim();

  if (nombre === "" || telefono === "") {
    alert("Por favor, introduce el nombre y el teléfono.");
    return;
  }

  const nuevoContacto = {
    id: Date.now(),
    nombre,
    telefono
  };

  contactos.push(nuevoContacto);
  guardar();

  inpNombre.value = "";
  inpTelefono.value = "";
  inpNombre.focus();

  dibujar();
});

// PASO 6: escuchador "input" de inpBuscar que llame a dibujar()
inpBuscar.addEventListener("input", dibujar);

// PASO 7: llama a dibujar() para pintar los datos al cargar la página
dibujar();
