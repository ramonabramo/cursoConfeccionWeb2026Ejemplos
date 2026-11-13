/**
 * ============================================================================
 * EJEMPLO 12: Serialización JSON y Persistencia en LocalStorage
 * Curso: Confección y Publicación de Páginas Web
 * Profesor: Ramón Abramo (Santander)
 * ============================================================================
 *
 * 🎯 OBJETIVOS DE APRENDIZAJE:
 * 1. Diferenciar entre un Objeto JavaScript (en memoria RAM) y un texto JSON (cadena de caracteres).
 * 2. Convertir objetos a texto con JSON.stringify() y personalizar la indentación.
 * 3. Reconstruir objetos desde texto con JSON.parse() controlando posibles errores de sintaxis.
 * 4. Reconocer las limitaciones de JSON: omisión de funciones, undefined y conversión de Dates a cadenas.
 * 5. Guardar, leer y eliminar objetos estructurados en la API LocalStorage del navegador.
 */

// Elementos del DOM
const btnStringify = document.getElementById('btnStringify');
const btnParse = document.getElementById('btnParse');
const btnLimites = document.getElementById('btnLimites');
const btnGuardarLocal = document.getElementById('btnGuardarLocal');
const btnCargarLocal = document.getElementById('btnCargarLocal');
const btnBorrarLocal = document.getElementById('btnBorrarLocal');
const cajaResultado = document.getElementById('cajaResultado');
const salidaConsola = document.getElementById('salidaConsola');

const CLAVE_STORAGE = 'ramon_curso_usuario_demo';

function log(msg) {
  salidaConsola.textContent += msg + '\n';
}

function limpiarConsola() {
  salidaConsola.textContent = '';
}

// ----------------------------------------------------------------------------
// 1. SERIALIZACIÓN: JSON.stringify()
// ----------------------------------------------------------------------------
btnStringify.addEventListener('click', () => {
  limpiarConsola();
  log('====================================================');
  log('1. DE OBJETO EN RAM A CADENA JSON (JSON.stringify)');
  log('====================================================');

  const usuario = {
    id: 42,
    nombre: 'Elena Castro',
    activo: true,
    habilidades: ['HTML5', 'CSS3', 'JavaScript'],
    direccion: {
      ciudad: 'Santander',
      cp: '39005'
    }
  };

  log('Objeto original JavaScript (en memoria):');
  log(usuario.toString()); // [object Object]

  // Serialización sin formateo
  const jsonCompacto = JSON.stringify(usuario);
  log('\nJSON.stringify(usuario) [Compacto para enviar a red]:');
  log(jsonCompacto);

  // Serialización formateada con 2 espacios
  const jsonFormateado = JSON.stringify(usuario, null, 2);
  log('\nJSON.stringify(usuario, null, 2) [Legible para humanos]:');
  log(jsonFormateado);

  cajaResultado.innerHTML = `
    <h3 style="color: #38bdf8; margin-top: 0;">📤 Serialización JSON</h3>
    <p>El objeto se convierte en una <strong>cadena de texto puro</strong> apta para viajar por HTTP o guardarse en disco:</p>
    <pre style="background: #0f172a; padding: 0.75rem; border-radius: 6px; font-size: 0.85rem; color: #38bdf8;">${jsonFormateado}</pre>
  `;
});

// ----------------------------------------------------------------------------
// 2. DESERIALIZACIÓN: JSON.parse()
// ----------------------------------------------------------------------------
btnParse.addEventListener('click', () => {
  limpiarConsola();
  log('====================================================');
  log('2. DE CADENA JSON A OBJETO (JSON.parse)');
  log('====================================================');

  const cadenaJson = '{"nombre":"Marcos Prieto","ciudad":"Santander","matricula":2026,"aprobado":true}';
  log(`Texto JSON entrante:`);
  log(cadenaJson);

  try {
    const objetoRecuperado = JSON.parse(cadenaJson);
    log('\n¡Parseado con éxito! Tipo: ' + typeof objetoRecuperado);
    log(`Acceso a propiedad objetoRecuperado.nombre: "${objetoRecuperado.nombre}"`);
    log(`Acceso a propiedad objetoRecuperado.matricula: ${objetoRecuperado.matricula}`);

    cajaResultado.innerHTML = `
      <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; border-radius: 8px;">
        <h3 style="color: #10b981; margin-top: 0;">📥 Objeto Reconstruido</h3>
        <p>El texto JSON fue transformado en un objeto JavaScript funcional:</p>
        <ul>
          <li><strong>Nombre:</strong> ${objetoRecuperado.nombre}</li>
          <li><strong>Ciudad:</strong> ${objetoRecuperado.ciudad}</li>
          <li><strong>Año Matrícula:</strong> ${objetoRecuperado.matricula}</li>
        </ul>
      </div>
    `;
  } catch (error) {
    log('❌ Error al parsear JSON: ' + error.message);
  }
});

// ----------------------------------------------------------------------------
// 3. PÉRDIDA DE DATOS Y LÍMITES EN JSON
// ----------------------------------------------------------------------------
btnLimites.addEventListener('click', () => {
  limpiarConsola();
  log('====================================================');
  log('3. LÍMITES DE JSON: LO QUE NO SOBREVIVE');
  log('====================================================');

  const objetoComplejo = {
    titulo: 'Lección de Objetos',
    fechaCreacion: new Date(),        // Pasa a string ISO, no a Date
    saludar: function() { return '¡Hola!'; }, // ❌ Se descarta por completo
    datoVacio: undefined,              // ❌ Se descarta por completo
    valorEspecial: NaN,                // Pasa a null
    simbolo: Symbol('id')              // ❌ Se descarta por completo
  };

  log('Objeto en JavaScript antes de serializar:');
  log(`- saludar(): ${typeof objetoComplejo.saludar}`);
  log(`- datoVacio: ${typeof objetoComplejo.datoVacio}`);
  log(`- fechaCreacion: instancia de Date (${objetoComplejo.fechaCreacion.toISOString()})`);

  const json = JSON.stringify(objetoComplejo, null, 2);
  log('\nResultado de JSON.stringify(objetoComplejo):');
  log(json);

  const rehidratado = JSON.parse(json);
  log('\nRehidratamos con JSON.parse(json):');
  log(`- rehidratado.saludar: ${rehidratado.saludar} (desapareció)`);
  log(`- rehidratado.datoVacio: ${rehidratado.datoVacio} (desapareció)`);
  log(`- typeof rehidratado.fechaCreacion: ${typeof rehidratado.fechaCreacion} (ahora es solo un 'string', ya no tiene métodos como getFullYear())`);

  cajaResultado.innerHTML = `
    <div style="background: rgba(245, 158, 11, 0.1); border-left: 4px solid #f59e0b; padding: 1rem; border-radius: 8px;">
      <h3 style="color: #f59e0b; margin-top: 0;">⚠️ Limitaciones de JSON</h3>
      <ul>
        <li><strong>Funciones:</strong> Omitidas completamente.</li>
        <li><strong>undefined / Symbol:</strong> Omitidos por completo.</li>
        <li><strong>Fechas (Date):</strong> Convertidas a strings planos (deben volver a instanciarse con <code>new Date(str)</code>).</li>
        <li><strong>NaN / Infinity:</strong> Convertidos a <code>null</code>.</li>
      </ul>
    </div>
  `;
});

// ----------------------------------------------------------------------------
// 4. GUARDAR EN LOCALSTORAGE
// ----------------------------------------------------------------------------
btnGuardarLocal.addEventListener('click', () => {
  limpiarConsola();
  log('====================================================');
  log('4. GUARDAR OBJETO EN LOCALSTORAGE');
  log('====================================================');

  const perfilGuardar = {
    usuario: 'alumno_santander',
    preferencias: {
      tema: 'oscuro',
      tamanoFuente: '16px',
      sonidos: false
    },
    ultimoAcceso: new Date().toLocaleTimeString('es-ES')
  };

  // LocalStorage solo almacena cadenas de texto
  // Si hiciéramos: localStorage.setItem(CLAVE, perfilGuardar), guardaría "[object Object]"
  const jsonAAlmacenar = JSON.stringify(perfilGuardar);
  localStorage.setItem(CLAVE_STORAGE, jsonAAlmacenar);

  log('¡Datos guardados con éxito!');
  log(`Clave: "${CLAVE_STORAGE}"`);
  log(`Valor almacenado en LocalStorage:\n${jsonAAlmacenar}`);

  cajaResultado.innerHTML = `
    <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; border-radius: 8px;">
      <h3 style="color: #10b981; margin-top: 0;">💾 Guardado en LocalStorage</h3>
      <p>Se guardó la clave <code>"${CLAVE_STORAGE}"</code> como cadena serializada JSON.</p>
      <p>Cierra la pestaña o actualiza el navegador: los datos persistirán en tu equipo.</p>
    </div>
  `;
});

// ----------------------------------------------------------------------------
// 5. CARGAR DE LOCALSTORAGE
// ----------------------------------------------------------------------------
btnCargarLocal.addEventListener('click', () => {
  limpiarConsola();
  log('====================================================');
  log('5. LEER OBJETO DESDE LOCALSTORAGE');
  log('====================================================');

  const textoRecuperado = localStorage.getItem(CLAVE_STORAGE);

  if (!textoRecuperado) {
    log('⚠️ No hay ningún dato guardado bajo esa clave. Pulsa antes el botón 4.');
    cajaResultado.innerHTML = `<p style="color: #f59e0b;">No hay datos guardados aún en LocalStorage con la clave "${CLAVE_STORAGE}".</p>`;
    return;
  }

  log('Texto leído directamente de LocalStorage:');
  log(textoRecuperado);

  const objetoConfig = JSON.parse(textoRecuperado);
  log('\nObjeto parseado y utilizable en código:');
  log(`Usuario: ${objetoConfig.usuario}`);
  log(`Tema: ${objetoConfig.preferencias.tema}`);
  log(`Último acceso: ${objetoConfig.ultimoAcceso}`);

  cajaResultado.innerHTML = `
    <div style="background: rgba(56, 189, 248, 0.1); border-left: 4px solid #38bdf8; padding: 1rem; border-radius: 8px;">
      <h3 style="color: #38bdf8; margin-top: 0;">📖 Leído de LocalStorage</h3>
      <p>Datos recuperados y parseados correctamente:</p>
      <ul>
        <li><strong>Usuario:</strong> ${objetoConfig.usuario}</li>
        <li><strong>Tema configurado:</strong> ${objetoConfig.preferencias.tema}</li>
        <li><strong>Última sesión registrada:</strong> ${objetoConfig.ultimoAcceso}</li>
      </ul>
    </div>
  `;
});

// ----------------------------------------------------------------------------
// 6. LIMPIAR LOCALSTORAGE
// ----------------------------------------------------------------------------
btnBorrarLocal.addEventListener('click', () => {
  limpiarConsola();
  log('====================================================');
  log('6. ELIMINAR CLAVE DE LOCALSTORAGE');
  log('====================================================');

  localStorage.removeItem(CLAVE_STORAGE);
  log(`Clave "${CLAVE_STORAGE}" eliminada de LocalStorage.`);

  cajaResultado.innerHTML = `
    <div style="background: rgba(239, 68, 68, 0.1); border-left: 4px solid #ef4444; padding: 1rem; border-radius: 8px;">
      <h3 style="color: #ef4444; margin-top: 0;">🗑️ Elemento Eliminado</h3>
      <p>La clave <code>"${CLAVE_STORAGE}"</code> fue removida de LocalStorage.</p>
    </div>
  `;
});

// Inicialización
btnStringify.click();
