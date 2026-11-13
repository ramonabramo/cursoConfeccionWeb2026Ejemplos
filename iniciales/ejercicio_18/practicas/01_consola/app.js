/**
 * ============================================================================
 * EJERCICIO 19 - PRÁCTICA 1: PRIMEROS PASOS CON OBJETOS LITERALES (CONSOLA)
 * ============================================================================
 * Curso: Confección y Publicación de Páginas Web
 * Alumno/a: [Escribe aquí tu nombre]
 *
 * INSTRUCCIONES:
 * Completa cada paso debajo de su comentario correspondiente.
 * Abre la consola del navegador con F12 para ver los resultados.
 * ============================================================================
 */

// Función auxiliar para reflejar en el visor web lo que sale por consola
(function setupConsola() {
  const salida = document.getElementById("salidaConsola");
  if (!salida) return;
  const originalLog = console.log;
  console.log = function(...args) {
    originalLog.apply(console, args);
    salida.textContent += args.map(a => typeof a === "object" ? JSON.stringify(a, null, 2) : String(a)).join(" ") + "\n";
  };
})();

// ////////////////////////////////////////////////////////////////////////////
// PASO 1: crea el objeto literal "libro" con estas propiedades:
// titulo ("El Quijote"), autor ("Miguel de Cervantes"), paginas (863) y leido (false)
// TODO: Escribe aquí la declaración del objeto libro
// const libro = { ... };


// ////////////////////////////////////////////////////////////////////////////
// PASO 2: muestra en la consola el título (notación de punto)
// y el autor (notación de corchetes)
// TODO: Realiza las llamadas a console.log usando ambas notaciones


// ////////////////////////////////////////////////////////////////////////////
// PASO 3: cambia "leido" a true, añade la propiedad "genero" ("Novela")
// y borra la propiedad "paginas". Muestra el objeto completo.
// TODO: Modifica libro.leido, añade libro.genero y usa delete libro.paginas. Luego console.log(libro)


// ////////////////////////////////////////////////////////////////////////////
// PASO 4: comprueba con el operador "in" si "paginas" sigue existiendo
// y muestra el resultado en la consola
// TODO: console.log("paginas" in libro);


// ////////////////////////////////////////////////////////////////////////////
// PASO 5: añade al objeto "libro" el método resumen(), que devuelve
// "El Quijote (Miguel de Cervantes) - leído" o "... - pendiente"
// según el valor de this.leido. Muestra lo que devuelve.
// TODO: Asigna el método libro.resumen = function() { ... } y haz console.log(libro.resumen())


// ////////////////////////////////////////////////////////////////////////////
// PASO 6: muestra con Object.keys(libro) la lista de claves del objeto
// TODO: console.log(Object.keys(libro));
