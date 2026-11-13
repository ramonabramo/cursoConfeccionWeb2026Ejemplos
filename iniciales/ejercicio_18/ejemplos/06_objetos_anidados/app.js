/**
 * ============================================================================
 * EJERCICIO 19 - MANUAL TEMA 06: OBJETOS Y ARRAYS DENTRO DE OBJETOS
 * ============================================================================
 * Curso: Confección y Publicación de Páginas Web · Profesor: Ramón Abramo
 * ============================================================================
 */

const salida = document.getElementById("salidaConsola");
const fichaEmpresa = document.getElementById("fichaEmpresa");

function logSalida(...args) {
  console.log(...args);
  salida.textContent += args.map(a => typeof a === "object" ? JSON.stringify(a, null, 2) : String(a)).join(" ") + "\n";
}

const empresa = {
  nombre: "Alpe Formación",
  direccion: {
    calle: "Paseo de Pereda 12",
    ciudad: "Santander",
    cp: "39004"
  },
  empleados: [
    { id: 1, nombre: "Lucía", puesto: "Docente" },
    { id: 2, nombre: "Marcos", puesto: "Coordinador" }
  ],
  obtenerPlantilla() {
    return this.empleados.map(e => `${e.nombre} (${e.puesto})`).join(", ");
  }
};

function actualizarVista() {
  fichaEmpresa.innerHTML = `
    <p><strong>Empresa:</strong> ${empresa.nombre}</p>
    <p><strong>Sede:</strong> ${empresa.direccion.calle}, ${empresa.direccion.ciudad} (${empresa.direccion.cp})</p>
    <p><strong>Plantilla (${empresa.empleados.length} miembros):</strong> ${empresa.obtenerPlantilla()}</p>
  `;
}

logSalida("=== ACCESO A ESTRUCTURAS ANIDADAS ===");
logSalida("Ciudad de la sede (puntos encadenados):", empresa.direccion.ciudad);
logSalida("Primer empleado (array + objeto):", empresa.empleados[0].nombre);
logSalida("Total plantilla:", empresa.obtenerPlantilla());

// Encadenamiento opcional con niveles inexistentes
logSalida("\nAcceso seguro con ?.:", empresa.sucursales?.madrid?.telefono); // undefined sin error

document.getElementById("btnAñadirEmpleado").addEventListener("click", () => {
  const nuevoId = empresa.empleados.length + 1;
  const nuevo = { id: nuevoId, nombre: `Empleado #${nuevoId}`, puesto: "Técnico Web" };
  empresa.empleados.push(nuevo);
  actualizarVista();
  logSalida("➕ Nuevo empleado añadido al array interno:", nuevo);
});

actualizarVista();
