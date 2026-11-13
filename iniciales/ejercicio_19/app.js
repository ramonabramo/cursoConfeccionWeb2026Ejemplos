/**
 * ============================================================================
 * EJERCICIO 18 - PORTAL PRINCIPAL · RAMÓN ABRAMO
 * ============================================================================
 * Lógica interactiva del laboratorio rápido para experimentar con objetos literales
 * ============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const labNombre = document.getElementById("labNombre");
  const labPrecio = document.getElementById("labPrecio");
  const labStock  = document.getElementById("labStock");
  const labSalida = document.getElementById("labSalida");

  function actualizarLaboratorio() {
    const obj = {
      tipo: "producto",
      nombre: labNombre.value.trim(),
      precio: parseFloat(labPrecio.value) || 0,
      enStock: labStock.checked,
      mostrarFicha() {
        return `${this.nombre} - ${this.precio.toFixed(2)}€ [${this.enStock ? 'Disponible' : 'Agotado'}]`;
      }
    };

    labSalida.textContent = `// Objeto Literal activo en memoria:\nconst producto = ${JSON.stringify(obj, (k, v) => typeof v === 'function' ? '[Método]' : v, 2)};\n\n// Llamada a método propio:\nproducto.mostrarFicha() -> "${obj.mostrarFicha()}";`;
  }

  labNombre.addEventListener("input", actualizarLaboratorio);
  labPrecio.addEventListener("input", actualizarLaboratorio);
  labStock.addEventListener("change", actualizarLaboratorio);

  actualizarLaboratorio();
});
