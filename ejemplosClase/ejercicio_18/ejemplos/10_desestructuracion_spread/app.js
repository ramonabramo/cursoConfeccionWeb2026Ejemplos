/**
 * ============================================================================
 * EJEMPLO 10: Desestructuración y Operador Spread en Objetos (ES6+)
 * Curso: Confección y Publicación de Páginas Web
 * Profesor: Ramón Abramo (Santander)
 * ============================================================================
 *
 * 🎯 OBJETIVOS DE APRENDIZAJE:
 * 1. Extraer propiedades en variables individuales con sintaxis limpia: { a, b } = obj.
 * 2. Renombrar variables al extraer mediante alias: { nombre: nombreCompleto }.
 * 3. Asignar valores por defecto para claves no existentes o undefined: { rol = 'invitado' }.
 * 4. Desestructuración de propiedades anidadas de forma concisa.
 * 5. Agrupar propiedades restantes con el operador Rest (...rest).
 * 6. Fusionar y sobreescribir objetos con el operador Spread (...obj).
 * 7. Recibir objetos desestructurados directamente como argumentos de funciones.
 */

// Elementos del DOM
const btnBasica = document.getElementById('btnBasica');
const btnAliasDefault = document.getElementById('btnAliasDefault');
const btnAnidada = document.getElementById('btnAnidada');
const btnRestSpread = document.getElementById('btnRestSpread');
const btnParametros = document.getElementById('btnParametros');
const cajaResultado = document.getElementById('cajaResultado');
const salidaConsola = document.getElementById('salidaConsola');

function log(msg) {
  salidaConsola.textContent += msg + '\n';
}

function limpiarConsola() {
  salidaConsola.textContent = '';
}

// Objeto base de usuario
const usuario = {
  id: 101,
  nombre: 'Lucía Fernández',
  edad: 26,
  rol: 'editor',
  ubicacion: {
    ciudad: 'Santander',
    comunidad: 'Cantabria',
    coordenadas: { lat: 43.4623, lng: -3.8099 }
  },
  contacto: {
    email: 'lucia@ejemplo.com',
    telefono: '+34 600 000 000'
  },
  tokenSecreto: 'xyz987tokenPrivado'
};

// ----------------------------------------------------------------------------
// 1. EXTRACCIÓN BÁSICA
// ----------------------------------------------------------------------------
btnBasica.addEventListener('click', () => {
  limpiarConsola();
  log('====================================================');
  log('1. DESESTRUCTURACIÓN BÁSICA DE OBJETOS');
  log('====================================================');

  // Forma tradicional:
  // const nombre = usuario.nombre;
  // const edad = usuario.edad;
  // const rol = usuario.rol;

  // Con desestructuración ES6+:
  const { nombre, edad, rol } = usuario;

  log(`Variables extraídas:`);
  log(`nombre: "${nombre}"`);
  log(`edad: ${edad}`);
  log(`rol: "${rol}"`);

  cajaResultado.innerHTML = `
    <h3 style="color: #38bdf8; margin-top: 0;">📦 Extracción Básica</h3>
    <p><code>const { nombre, edad, rol } = usuario;</code></p>
    <ul>
      <li><strong>nombre:</strong> ${nombre}</li>
      <li><strong>edad:</strong> ${edad} años</li>
      <li><strong>rol:</strong> ${rol}</li>
    </ul>
  `;
});

// ----------------------------------------------------------------------------
// 2. ALIAS Y VALORES POR DEFECTO
// ----------------------------------------------------------------------------
btnAliasDefault.addEventListener('click', () => {
  limpiarConsola();
  log('====================================================');
  log('2. ALIAS Y VALORES POR DEFECTO');
  log('====================================================');

  // Renombramos 'nombre' como 'nombreCompleto'
  // 'pais' no existe en 'usuario', por lo que toma el valor por defecto 'España'
  // 'rol' existe, por lo que NO usa el valor por defecto
  const { 
    nombre: nombreCompleto, 
    pais = 'España', 
    rol = 'invitado',
    apellidos = 'No especificado'
  } = usuario;

  log(`nombreCompleto (alias de 'nombre'): "${nombreCompleto}"`);
  log(`pais (valor por defecto, no estaba en el objeto): "${pais}"`);
  log(`rol (existía en el objeto, prevalece): "${rol}"`);
  log(`apellidos (valor por defecto): "${apellidos}"`);

  cajaResultado.innerHTML = `
    <h3 style="color: #38bdf8; margin-top: 0;">🏷️ Alias y Valores por Defecto</h3>
    <p><code>const { nombre: nombreCompleto, pais = 'España' } = usuario;</code></p>
    <ul>
      <li><strong>nombreCompleto:</strong> ${nombreCompleto} <small>(clave original: 'nombre')</small></li>
      <li><strong>pais:</strong> ${pais} <small>(por defecto)</small></li>
      <li><strong>apellidos:</strong> ${apellidos} <small>(por defecto)</small></li>
      <li><strong>rol:</strong> ${rol} <small>(clave existente)</small></li>
    </ul>
  `;
});

// ----------------------------------------------------------------------------
// 3. DESESTRUCTURACIÓN ANIDADA
// ----------------------------------------------------------------------------
btnAnidada.addEventListener('click', () => {
  limpiarConsola();
  log('====================================================');
  log('3. DESESTRUCTURACIÓN ANIDADA');
  log('====================================================');

  // Extraemos claves de niveles inferiores en una sola instrucción
  const {
    ubicacion: { ciudad, coordenadas: { lat, lng } },
    contacto: { email }
  } = usuario;

  log(`ciudad extraída: "${ciudad}"`);
  log(`latitud: ${lat}, longitud: ${lng}`);
  log(`email: "${email}"`);
  log(`Nota: la variable 'ubicacion' o 'coordenadas' NO quedan definidas, solo las hojas finales.`);

  cajaResultado.innerHTML = `
    <h3 style="color: #38bdf8; margin-top: 0;">🌳 Desestructuración Anidada</h3>
    <p><code>const { ubicacion: { ciudad, coordenadas: { lat, lng } }, contacto: { email } } = usuario;</code></p>
    <ul>
      <li><strong>ciudad:</strong> ${ciudad}</li>
      <li><strong>coordenadas:</strong> Lat ${lat}, Lng ${lng}</li>
      <li><strong>email:</strong> ${email}</li>
    </ul>
  `;
});

// ----------------------------------------------------------------------------
// 4. REST Y FUSIÓN CON SPREAD
// ----------------------------------------------------------------------------
btnRestSpread.addEventListener('click', () => {
  limpiarConsola();
  log('====================================================');
  log('4. OPERADOR REST (...) Y FUSIÓN SPREAD');
  log('====================================================');

  // 1. Rest: separar datos sensibles del resto
  const { tokenSecreto, id, ...perfilPublico } = usuario;
  log(`tokenSecreto (aislado): "${tokenSecreto}"`);
  log(`id (aislado): ${id}`);
  log(`perfilPublico (resto de claves): ${JSON.stringify(perfilPublico, null, 2)}`);

  // 2. Spread: Fusionar configuración por defecto con personalización
  const configDefecto = { tema: 'claro', notificaciones: true, idioma: 'es', fuente: 'sans-serif' };
  const configPersonalizada = { tema: 'oscuro', idioma: 'en' };

  // Las propiedades de la derecha sobreescriben a las de la izquierda
  const configFinal = { ...configDefecto, ...configPersonalizada, fechaActualizacion: '2026-11-13' };

  log('\nFusión de objetos (Spread):');
  log(`configFinal: ${JSON.stringify(configFinal, null, 2)}`);

  cajaResultado.innerHTML = `
    <h3 style="color: #38bdf8; margin-top: 0;">🧩 Rest & Spread</h3>
    <p><strong>Rest:</strong> Descartar o separar datos sensibles.</p>
    <p><code>perfilPublico</code> tiene ${Object.keys(perfilPublico).length} propiedades (sin id ni tokenSecreto).</p>
    <p><strong>Spread:</strong> Fusionar y sobreescribir configuraciones:</p>
    <pre style="background:#1e293b; padding:0.5rem; border-radius:4px; font-size:0.8rem;">${JSON.stringify(configFinal, null, 2)}</pre>
  `;
});

// ----------------------------------------------------------------------------
// 5. PARÁMETROS DE FUNCIÓN DESESTRUCTURADOS
// ----------------------------------------------------------------------------
btnParametros.addEventListener('click', () => {
  limpiarConsola();
  log('====================================================');
  log('5. DESESTRUCTURACIÓN EN PARÁMETROS DE FUNCIONES');
  log('====================================================');

  // En lugar de function renderTarjeta(usuario) y usar usuario.nombre...
  function renderTarjeta({ nombre, edad = 18, ubicacion: { ciudad = 'Desconocida' } = {} }) {
    return `
      <div style="border: 2px dashed #38bdf8; padding: 1rem; border-radius: 8px;">
        <h4 style="margin: 0; color: #38bdf8;">👤 ${nombre}</h4>
        <p style="margin: 0.25rem 0;">🎂 Edad: ${edad} años</p>
        <p style="margin: 0;">📍 Ciudad: ${ciudad}</p>
      </div>
    `;
  }

  log('Invocamos: renderTarjeta(usuario)');
  const html1 = renderTarjeta(usuario);

  log('Invocamos con objeto anónimo incompleto: renderTarjeta({ nombre: "Marta Vega" })');
  const html2 = renderTarjeta({ nombre: 'Marta Vega' });

  cajaResultado.innerHTML = `
    <h3 style="color: #38bdf8; margin-top: 0;">🎯 Parámetros Desestructurados</h3>
    <p>Patrón muy común en React, Vue y JavaScript moderno:</p>
    <div style="display:flex; gap:1rem; flex-wrap:wrap; margin-top:0.5rem;">
      ${html1}
      ${html2}
    </div>
  `;
});

// Ejecución inicial automática
btnBasica.click();
