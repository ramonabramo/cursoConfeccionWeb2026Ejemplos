/**
 * ============================================================================
 * EJERCICIO 19 - MANUAL TEMA 03: LECTURA DE PROPIEDADES (PUNTO, CORCHETES Y ?.)
 * ============================================================================
 * Curso: Confección y Publicación de Páginas Web · Profesor: Ramón Abramo
 * ============================================================================
 */

const salida = document.getElementById("salidaConsola");
function logSalida(...args) {
  console.log(...args);
  salida.textContent += args.map(a => typeof a === "object" ? JSON.stringify(a, null, 2) : String(a)).join(" ") + "\n";
}

const libro = {
  titulo: "Cien años de soledad",
  autor: "Gabriel García Márquez",
  año: 1967
};

// 1. NOTACIÓN DE PUNTO (la preferida cuando conocemos el nombre de la clave)
logSalida("=== 1. NOTACIÓN DE PUNTO ===");
logSalida("libro.titulo ->", libro.titulo);
logSalida("libro.autor  ->", libro.autor);

// 2. NOTACIÓN DE CORCHETES (cuando el nombre está en una variable)
logSalida("\n=== 2. NOTACIÓN DE CORCHETES CON VARIABLES ===");
const campo = "año";
logSalida(`libro["${campo}"] ->`, libro[campo]);

// ¿Qué ocurre si la propiedad no existe? Devuelve undefined (sin romper el código)
logSalida("libro.editorial (no existe) ->", libro.editorial);

// 3. ENCADENAMIENTO OPCIONAL (?.)
logSalida("\n=== 3. ENCADENAMIENTO OPCIONAL (?.) ===");
const usuario = {
  nombre: "Carlos"
  // No tiene propiedad 'perfil'
};

// usuario.perfil.avatar lanzaría TypeError: Cannot read properties of undefined
// Con ?. devuelve undefined de forma segura sin detener el script
logSalida("usuario.perfil?.avatar ->", usuario.perfil?.avatar);

// Interacción
const selPropiedad = document.getElementById("selPropiedad");
const btnConsultar = document.getElementById("btnConsultar");
const cajaResultado = document.getElementById("cajaResultado");

btnConsultar.addEventListener("click", () => {
  const clave = selPropiedad.value;
  const valor = libro[clave];
  cajaResultado.innerHTML = `<code>libro["${clave}"]</code> = <strong>${valor}</strong> (tipo: ${typeof valor})`;
  logSalida(`Consulta interactiva: libro["${clave}"] -> ${valor}`);
});
