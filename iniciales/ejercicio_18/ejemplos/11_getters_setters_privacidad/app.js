/**
 * ============================================================================
 * EJEMPLO 11: Getters, Setters y Privacidad en Objetos JavaScript
 * Curso: Confección y Publicación de Páginas Web
 * Profesor: Ramón Abramo (Santander)
 * ============================================================================
 *
 * 🎯 OBJETIVOS DE APRENDIZAJE:
 * 1. Comprender los métodos de acceso: get (lectura computada) y set (escritura controlada).
 * 2. Aplicar validación de datos dentro de los setters para evitar estados corruptos.
 * 3. Analizar la limitación de la convención de guion bajo (_propiedad) en objetos literales.
 * 4. Implementar verdadera privacidad mediante el patrón de Clausuras (Closures) / Factorías.
 * 5. Proteger objetos contra modificaciones accidentales con Object.freeze() y Object.seal().
 */

// Elementos del DOM
const btnGetters = document.getElementById('btnGetters');
const btnSettersValidos = document.getElementById('btnSettersValidos');
const btnSetterInvalido = document.getElementById('btnSetterInvalido');
const btnClausuraPrivada = document.getElementById('btnClausuraPrivada');
const btnObjectFreeze = document.getElementById('btnObjectFreeze');
const cajaResultado = document.getElementById('cajaResultado');
const salidaConsola = document.getElementById('salidaConsola');

function log(msg) {
  salidaConsola.textContent += msg + '\n';
}

function limpiarConsola() {
  salidaConsola.textContent = '';
}

// ----------------------------------------------------------------------------
// OBJETO DE EJEMPLO CON GETTERS Y SETTERS
// ----------------------------------------------------------------------------
const producto = {
  _nombre: 'Teclado Mecánico RGB',
  _precioBase: 80,
  _iva: 0.21,

  // Getter: Se lee como una propiedad normal (sin paréntesis producto.precioFinal)
  get precioFinal() {
    return Number((this._precioBase * (1 + this._iva)).toFixed(2));
  },

  get etiqueta() {
    return `${this._nombre.toUpperCase()} - ${this.precioFinal}€ (IVA incl.)`;
  },

  // Setter: Valida antes de guardar
  set precioBase(nuevoPrecio) {
    if (typeof nuevoPrecio !== 'number' || isNaN(nuevoPrecio)) {
      throw new TypeError('El precio base debe ser un valor numérico.');
    }
    if (nuevoPrecio <= 0) {
      throw new RangeError('El precio base debe ser estrictamente mayor a 0€.');
    }
    this._precioBase = nuevoPrecio;
  },

  get precioBase() {
    return this._precioBase;
  }
};

// ----------------------------------------------------------------------------
// 1. GETTERS COMPUTADOS
// ----------------------------------------------------------------------------
btnGetters.addEventListener('click', () => {
  limpiarConsola();
  log('====================================================');
  log('1. LECTURA CON GETTERS (PROPIEDADES DINÁMICAS)');
  log('====================================================');

  log(`Precio Base: ${producto.precioBase}€`);
  log(`Llamada a getter: producto.precioFinal => ${producto.precioFinal}€`);
  log(`Llamada a getter: producto.etiqueta => "${producto.etiqueta}"`);
  log(`(Fíjate que no usamos paréntesis () como en las funciones habituales).`);

  cajaResultado.innerHTML = `
    <h3 style="color: #38bdf8; margin-top: 0;">🔎 Getters Computados</h3>
    <p>Se acceden como propiedades comunes, pero ejecutan lógica dinámica tras bambalinas:</p>
    <ul>
      <li><strong>producto.precioBase:</strong> ${producto.precioBase}€</li>
      <li><strong>producto.precioFinal:</strong> ${producto.precioFinal}€ <small>(calculado al vuelo)</small></li>
      <li><strong>producto.etiqueta:</strong> <code>"${producto.etiqueta}"</code></li>
    </ul>
  `;
});

// ----------------------------------------------------------------------------
// 2. SETTER CON ASIGNACIÓN VÁLIDA
// ----------------------------------------------------------------------------
btnSettersValidos.addEventListener('click', () => {
  limpiarConsola();
  log('====================================================');
  log('2. ESCRITURA VÁLIDA MEDIANTE SETTER');
  log('====================================================');

  log(`Precio anterior: ${producto.precioBase}€ (Final: ${producto.precioFinal}€)`);
  log(`Ejecutamos: producto.precioBase = 120`);
  producto.precioBase = 120; // Pasa por el setter

  log(`Nuevo Precio Base: ${producto.precioBase}€`);
  log(`Nuevo Precio Final recalculado: ${producto.precioFinal}€`);

  cajaResultado.innerHTML = `
    <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; border-radius: 8px;">
      <h3 style="color: #10b981; margin-top: 0;">✅ Setter Validado Correctamente</h3>
      <p>Asignamos un nuevo valor válido (<code>producto.precioBase = 120</code>):</p>
      <ul>
        <li><strong>Nuevo Base:</strong> ${producto.precioBase}€</li>
        <li><strong>Nuevo Final:</strong> ${producto.precioFinal}€</li>
      </ul>
    </div>
  `;
});

// ----------------------------------------------------------------------------
// 3. SETTER RECHAZANDO DATO INVÁLIDO
// ----------------------------------------------------------------------------
btnSetterInvalido.addEventListener('click', () => {
  limpiarConsola();
  log('====================================================');
  log('3. SETTER CON VALIDACIÓN Y GESTIÓN DE ERRORES');
  log('====================================================');

  try {
    log('Intentamos asignar un número negativo: producto.precioBase = -45');
    producto.precioBase = -45;
  } catch (error) {
    log(`❌ ERROR CAPTURADO: [${error.name}] ${error.message}`);
  }

  try {
    log('\nIntentamos asignar un texto: producto.precioBase = "gratis"');
    producto.precioBase = 'gratis';
  } catch (error) {
    log(`❌ ERROR CAPTURADO: [${error.name}] ${error.message}`);
  }

  log(`\nEl estado del objeto permanece seguro: ${producto.precioBase}€`);

  cajaResultado.innerHTML = `
    <div style="background: rgba(239, 68, 68, 0.1); border-left: 4px solid #ef4444; padding: 1rem; border-radius: 8px;">
      <h3 style="color: #ef4444; margin-top: 0;">🛡️ Validación Activada</h3>
      <p>El setter interceptó los datos anómalos y lanzó una excepción controlada, protegiendo la integridad del objeto.</p>
      <p><strong>El valor no se modificó:</strong> ${producto.precioBase}€</p>
    </div>
  `;
});

// ----------------------------------------------------------------------------
// 4. PRIVACIDAD REAL MEDIANTE FACTORÍAS Y CLAUSURAS (CLOSURES)
// ----------------------------------------------------------------------------
btnClausuraPrivada.addEventListener('click', () => {
  limpiarConsola();
  log('====================================================');
  log('4. VERDADERA PRIVACIDAD CON CLAUSURAS (CLOSURES)');
  log('====================================================');

  // Función factoría: crea un objeto pero las variables let quedan atrapadas en el scope léxico
  function crearCuenta(titular, saldoInicial) {
    let saldoPrivado = saldoInicial; // 🔒 Variable inaccesible directamente desde fuera

    return {
      titular: titular,
      ingresar(cantidad) {
        if (cantidad <= 0) return 'Cantidad inválida';
        saldoPrivado += cantidad;
        return `Ingresados ${cantidad}€. Nuevo saldo: ${saldoPrivado}€`;
      },
      retirar(cantidad) {
        if (cantidad > saldoPrivado) return 'Fondos insuficientes';
        saldoPrivado -= cantidad;
        return `Retirados ${cantidad}€. Saldo restante: ${saldoPrivado}€`;
      },
      consultarSaldo() {
        return saldoPrivado;
      }
    };
  }

  const miCuenta = crearCuenta('Ramón Abramo', 1000);
  log(`Cuenta creada para: ${miCuenta.titular}`);
  log(`Intentamos acceder directamente a miCuenta.saldoPrivado: ${miCuenta.saldoPrivado} (undefined)`);
  log(`Intentamos modificar miCuenta.saldoPrivado = 9999999...`);
  miCuenta.saldoPrivado = 9999999; // Solo añade una propiedad irrelevante

  log(`Consultamos el saldo real con miCuenta.consultarSaldo(): ${miCuenta.consultarSaldo()}€ (¡Inviolable!)`);
  log(miCuenta.ingresar(250));
  log(miCuenta.retirar(100));

  cajaResultado.innerHTML = `
    <div style="background: rgba(56, 189, 248, 0.1); border-left: 4px solid #38bdf8; padding: 1rem; border-radius: 8px;">
      <h3 style="color: #38bdf8; margin-top: 0;">🔒 Privacidad Real con Closures</h3>
      <p>En un objeto literal puro todo es público. Para blindar datos usamos una <strong>función factoría</strong>:</p>
      <ul>
        <li><code>miCuenta.saldoPrivado</code> => <strong>undefined</strong></li>
        <li><code>miCuenta.consultarSaldo()</code> => <strong>${miCuenta.consultarSaldo()}€</strong></li>
      </ul>
      <p style="margin-bottom:0;"><small>Ningún script externo puede alterar el saldo sin pasar por los métodos auditados.</small></p>
    </div>
  `;
});

// ----------------------------------------------------------------------------
// 5. CONGELAR OBJETOS CON Object.freeze()
// ----------------------------------------------------------------------------
btnObjectFreeze.addEventListener('click', () => {
  limpiarConsola();
  log('====================================================');
  log('5. CONGELACIÓN DE OBJETOS: Object.freeze()');
  log('====================================================');

  const configuracionApp = Object.freeze({
    servidor: 'https://api.santander.es',
    puerto: 8080,
    modo: 'produccion'
  });

  log('Objeto congelado:');
  log(JSON.stringify(configuracionApp, null, 2));

  log('\nIntentamos añadir configuracionApp.version = "1.0":');
  configuracionApp.version = '1.0';
  log(`configuracionApp.version: ${configuracionApp.version} (Ignorado silenciosamente o error en strict mode)`);

  log('\nIntentamos modificar configuracionApp.puerto = 3000:');
  configuracionApp.puerto = 3000;
  log(`configuracionApp.puerto: ${configuracionApp.puerto} (Inmutable)`);

  cajaResultado.innerHTML = `
    <div style="background: rgba(129, 140, 248, 0.1); border-left: 4px solid #818cf8; padding: 1rem; border-radius: 8px;">
      <h3 style="color: #818cf8; margin-top: 0;">❄️ Object.freeze()</h3>
      <p>Impide añadir nuevas propiedades, eliminar existentes o modificar sus valores actuales:</p>
      <ul>
        <li><strong>isFrozen:</strong> ${Object.isFrozen(configuracionApp)}</li>
        <li><strong>puerto:</strong> ${configuracionApp.puerto} (No ha cambiado a 3000)</li>
      </ul>
    </div>
  `;
});

// Inicialización
btnGetters.click();
