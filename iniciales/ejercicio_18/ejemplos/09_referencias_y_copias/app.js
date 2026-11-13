/**
 * ============================================================================
 * EJEMPLO 09: Referencias y Copias de Objetos en JavaScript
 * Curso: Confección y Publicación de Páginas Web
 * Profesor: Ramón Abramo (Santander)
 * ============================================================================
 *
 * 🎯 OBJETIVOS DE APRENDIZAJE:
 * 1. Entender la diferencia entre tipos primitivos (por valor) y objetos (por referencia).
 * 2. Comprender por qué `b = a` NO crea un duplicado, sino dos punteros al mismo objeto.
 * 3. Aprender a crear copias superficiales (shallow copy) con el operador Spread `{ ...a }`
 *    o `Object.assign()`, y entender sus limitaciones con objetos anidados.
 * 4. Utilizar `structuredClone()` para realizar copias profundas (deep copy) reales.
 */

// Elementos del DOM
const btnReferencia = document.getElementById('btnReferencia');
const btnSpread = document.getElementById('btnSpread');
const btnClone = document.getElementById('btnClone');
const cajaResultado = document.getElementById('cajaResultado');
const salidaConsola = document.getElementById('salidaConsola');

// Función auxiliar para registrar logs visuales
function log(mensaje) {
  salidaConsola.textContent += mensaje + '\n';
}

function limpiarConsola() {
  salidaConsola.textContent = '';
}

// Objeto base de prueba (con datos primitivos y un objeto anidado)
function crearObjetoOriginal() {
  return {
    nombre: 'Ana López',
    rol: 'Desarrolladora',
    edad: 28,
    direccion: {
      ciudad: 'Santander',
      codigoPostal: '39001'
    }
  };
}

// ----------------------------------------------------------------------------
// 1. ASIGNACIÓN POR REFERENCIA (b = a)
// ----------------------------------------------------------------------------
btnReferencia.addEventListener('click', () => {
  limpiarConsola();
  log('====================================================');
  log('CASO 1: ASIGNACIÓN DIRECTA (b = a)');
  log('====================================================');

  const original = crearObjetoOriginal();
  const copiaFalsa = original; // ⚠️ Solo copia la dirección en memoria (puntero)

  log('Estado inicial:');
  log(`original.nombre: "${original.nombre}"`);
  log(`copiaFalsa.nombre: "${copiaFalsa.nombre}"`);

  // Modificamos a través de la variable copiaFalsa
  copiaFalsa.nombre = 'Carlos Gómez';
  copiaFalsa.direccion.ciudad = 'Torrelavega';

  log('\nModificamos "copiaFalsa.nombre = Carlos Gómez":');
  log(`original.nombre ahora es: "${original.nombre}" 💥 ¡HA MUTADO!`);
  log(`copiaFalsa.nombre es: "${copiaFalsa.nombre}"`);
  log(`original === copiaFalsa: ${original === copiaFalsa} (Apuntan al mismo espacio en memoria RAM)`);

  cajaResultado.innerHTML = `
    <div style="background: rgba(239, 68, 68, 0.1); border-left: 4px solid #ef4444; padding: 1rem; border-radius: 8px;">
      <h3 style="color: #ef4444; margin-top: 0;">⚠️ Asignación por Referencia: b = a</h3>
      <p>Ambas variables apuntan exactamente al <strong>mismo objeto en memoria</strong>.</p>
      <p>Modificar <code>copiaFalsa</code> modifica automáticamente <code>original</code>.</p>
      <ul>
        <li><strong>original.nombre:</strong> "${original.nombre}"</li>
        <li><strong>copiaFalsa.nombre:</strong> "${copiaFalsa.nombre}"</li>
      </ul>
    </div>
  `;
});

// ----------------------------------------------------------------------------
// 2. COPIA SUPERFICIAL CON SPREAD ({ ...a })
// ----------------------------------------------------------------------------
btnSpread.addEventListener('click', () => {
  limpiarConsola();
  log('====================================================');
  log('CASO 2: COPIA SUPERFICIAL CON SPREAD ({ ...a })');
  log('====================================================');

  const original = crearObjetoOriginal();
  const copiaSuperficial = { ...original }; // Duplica el primer nivel

  log('Estado inicial:');
  log(`original.nombre: "${original.nombre}"`);
  log(`copiaSuperficial.nombre: "${copiaSuperficial.nombre}"`);

  // Modificamos una propiedad del primer nivel
  copiaSuperficial.nombre = 'Beatriz Sáez';

  log('\nModificamos "copiaSuperficial.nombre = Beatriz Sáez":');
  log(`original.nombre: "${original.nombre}" (✅ INTACTO, no cambia)`);
  log(`copiaSuperficial.nombre: "${copiaSuperficial.nombre}"`);

  // ⚠️ PELIGRO: Modificamos el objeto anidado
  copiaSuperficial.direccion.ciudad = 'Laredo';

  log('\nModificamos el nivel anidado "copiaSuperficial.direccion.ciudad = Laredo":');
  log(`original.direccion.ciudad: "${original.direccion.ciudad}" 💥 ¡HA MUTADO!`);
  log(`original.direccion === copiaSuperficial.direccion: ${original.direccion === copiaSuperficial.direccion} (Comparten la referencia al subobjeto)`);

  cajaResultado.innerHTML = `
    <div style="background: rgba(245, 158, 11, 0.1); border-left: 4px solid #f59e0b; padding: 1rem; border-radius: 8px;">
      <h3 style="color: #f59e0b; margin-top: 0;">⚡ Copia Superficial (Shallow Copy)</h3>
      <p>El primer nivel se duplica correctamente, pero los <strong>objetos y arrays anidados siguen compartiendo la misma referencia</strong>.</p>
      <ul>
        <li><strong>Primer nivel (nombre):</strong> original = "${original.nombre}" | copia = "${copiaSuperficial.nombre}" (✅ Independientes)</li>
        <li><strong>Nivel anidado (ciudad):</strong> original = "${original.direccion.ciudad}" | copia = "${copiaSuperficial.direccion.ciudad}" (💥 Compartido)</li>
      </ul>
    </div>
  `;
});

// ----------------------------------------------------------------------------
// 3. COPIA PROFUNDA CON structuredClone()
// ----------------------------------------------------------------------------
btnClone.addEventListener('click', () => {
  limpiarConsola();
  log('====================================================');
  log('CASO 3: COPIA PROFUNDA (structuredClone)');
  log('====================================================');

  const original = crearObjetoOriginal();
  const copiaProfunda = structuredClone(original); // Duplica todos los niveles recursivamente

  // Modificamos tanto el primer nivel como el nivel anidado
  copiaProfunda.nombre = 'Elena Ruiz';
  copiaProfunda.direccion.ciudad = 'Castro Urdiales';

  log('Modificaciones en la copia profunda:');
  log(`original.nombre: "${original.nombre}" (✅ Intacto)`);
  log(`copiaProfunda.nombre: "${copiaProfunda.nombre}"`);
  log(`original.direccion.ciudad: "${original.direccion.ciudad}" (✅ Intacto)`);
  log(`copiaProfunda.direccion.ciudad: "${copiaProfunda.direccion.ciudad}"`);
  log(`original.direccion === copiaProfunda.direccion: ${original.direccion === copiaProfunda.direccion} (Espacios de memoria completamente distintos)`);

  cajaResultado.innerHTML = `
    <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; border-radius: 8px;">
      <h3 style="color: #10b981; margin-top: 0;">🏆 Copia Profunda (Deep Copy) con structuredClone()</h3>
      <p>Duplica todo el árbol de datos en memoria. Nada queda enlazado con el original.</p>
      <ul>
        <li><strong>original.nombre:</strong> "${original.nombre}" | <strong>copia:</strong> "${copiaProfunda.nombre}"</li>
        <li><strong>original.direccion.ciudad:</strong> "${original.direccion.ciudad}" | <strong>copia:</strong> "${copiaProfunda.direccion.ciudad}"</li>
      </ul>
      <p style="margin-bottom:0; font-size: 0.9rem; color: #64748b;"><em>Nota: structuredClone es nativo en navegadores modernos y Node.js 17+. Para funciones o métodos se deben usar patrones factoría o clases.</em></p>
    </div>
  `;
});

// Ejecución inicial automática para que se vea contenido al abrir
btnReferencia.click();
