/**
 * ============================================================================
 * EJERCICIO 19 - PRÁCTICA 1: SOLUCIÓN OFICIAL DEL PROFESOR
 * ============================================================================
 * Curso: Confección y Publicación de Páginas Web
 * Profesor: Ramón Abramo
 * ============================================================================
 */

// Reflejo en visor web
(function setupConsola() {
  const salida = document.getElementById("salidaConsola");
  if (!salida) return;
  salida.textContent = "";
  const originalLog = console.log;
  console.log = function(...args) {
    originalLog.apply(console, args);
    salida.textContent += args.map(a => typeof a === "object" ? JSON.stringify(a, null, 2) : String(a)).join(" ") + "\n";
  };
})();

// PASO 1: crea el objeto literal "libro" con estas propiedades:
// titulo ("El Quijote"), autor ("Miguel de Cervantes"), paginas (863) y leido (false)
const libro = {
  titulo: "El Quijote",
  autor: "Miguel de Cervantes",
  paginas: 863,
  leido: false
};

// PASO 2: muestra en la consola el título (notación de punto)
// y el autor (notación de corchetes)
console.log(libro.titulo);
console.log(libro["autor"]);

// PASO 3: cambia "leido" a true, añade la propiedad "genero" ("Novela")
// y borra la propiedad "paginas". Muestra el objeto completo.
libro.leido = true;
libro.genero = "Novela";
delete libro.paginas;
console.log(libro);

// PASO 4: comprueba con el operador "in" si "paginas" sigue existiendo
// y muestra el resultado
console.log("paginas" in libro); // false

// PASO 5: añade al objeto "libro" el método resumen(), que devuelve
// "El Quijote (Miguel de Cervantes) - leído" o "... - pendiente"
// según el valor de this.leido. Muestra lo que devuelve.
libro.resumen = function() {
  const estado = this.leido ? "leído" : "pendiente";
  return `${this.titulo} (${this.autor}) - ${estado}`;
};
console.log(libro.resumen());

// PASO 6: muestra con Object.keys(libro) la lista de claves del objeto
console.log(Object.keys(libro));
