/**
 * ============================================================================
 * EJERCICIO 19 - MANUAL TEMA 05: MÉTODOS Y LA PALABRA RESERVADA 'THIS'
 * ============================================================================
 * Curso: Confección y Publicación de Páginas Web · Profesor: Ramón Abramo
 * ============================================================================
 */

const salida = document.getElementById("salidaConsola");
const txtVida = document.getElementById("txtVida");

function logSalida(...args) {
  console.log(...args);
  salida.textContent += args.map(a => typeof a === "object" ? JSON.stringify(a, null, 2) : String(a)).join(" ") + "\n";
}

const personaje = {
  nombre: "Valeria",
  vida: 100,

  // Método abreviado estándar (RECOMENDADO): 'this' apunta a 'personaje'
  recibirDanio(puntos) {
    this.vida -= puntos;
    if (this.vida < 0) this.vida = 0;
    return `${this.nombre} recibe ${puntos} de daño. Vida restante: ${this.vida}`;
  },

  curar(puntos) {
    this.vida += puntos;
    if (this.vida > 100) this.vida = 100;
    return `${this.nombre} se cura ${puntos} puntos. Vida actual: ${this.vida}`;
  },

  // ERROR TÍPICO: Función flecha como método
  // Las funciones flecha no tienen su propio 'this', heredan el global (window)
  metodoFlechaErroneo: () => {
    return `this.nombre en arrow function da: ${this ? this.nombre : 'undefined'}`;
  }
};

logSalida("=== ESTADO INICIAL DEL PERSONAJE ===");
logSalida(`Héroe: ${personaje.nombre}, Salud: ${personaje.vida}`);

document.getElementById("btnDanio").addEventListener("click", () => {
  const msg = personaje.recibirDanio(20);
  txtVida.textContent = personaje.vida;
  logSalida("⚔️", msg);
});

document.getElementById("btnCurar").addEventListener("click", () => {
  const msg = personaje.curar(15);
  txtVida.textContent = personaje.vida;
  logSalida("🧪", msg);
});

document.getElementById("btnFlecha").addEventListener("click", () => {
  logSalida("❌ Ejecutando personaje.metodoFlechaErroneo():");
  logSalida(personaje.metodoFlechaErroneo());
  logSalida("⚠️ Explicación: En una función flecha, 'this' apunta a 'window' y no al objeto 'personaje'.");
});
