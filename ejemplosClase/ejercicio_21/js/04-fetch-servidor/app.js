/**
 * FASE 4: INTEGRACIÓN DE CLASES CON FETCH Y SERVIDOR
 * 
 * En esta fase:
 * 1. Mantenemos la clase Alumno con toda su lógica y métodos.
 * 2. Usamos fetch() y async/await para consultar los datos al servidor.
 * 3. Convertimos (rehidratamos) la respuesta JSON del servidor en instancias de Alumno.
 * 4. Seguimos sincronizando con localStorage para no perder el estado.
 */

// 1. Definición de la Clase Alumno
class Alumno {
  constructor(nombre, nota, id = null) {
    this.id = id;
    this.nombre = nombre ? nombre.trim() : '';
    const parsed = parseFloat(nota);
    this.nota = isNaN(parsed) ? 0 : Math.max(0, Math.min(10, parsed));
  }

  estaAprobado() {
    return this.nota >= 5;
  }

  obtenerCalificacionCualitativa() {
    if (this.nota < 5) return 'Suspenso';
    if (this.nota < 7) return 'Aprobado';
    if (this.nota < 9) return 'Notable';
    return 'Sobresaliente';
  }

  obtenerBadgeHTML() {
    const aprobado = this.estaAprobado();
    const cualitativo = this.obtenerCalificacionCualitativa();
    const claseBadge = aprobado ? 'badge-aprobado' : 'badge-suspenso';
    const icono = aprobado ? '✅' : '❌';

    return `<span class="badge ${claseBadge}">${icono} ${cualitativo}: ${this.nota.toFixed(2)}</span>`;
  }
}

// 2. Almacenamiento local (localStorage)
const STORAGE_KEY = 'fase4_alumnos_fetch';

function cargarDesdeStorage() {
  const guardados = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  return guardados.map(d => new Alumno(d.nombre, d.nota, d.id));
}

let alumnos = cargarDesdeStorage();

// 3. Referencias al DOM
const formAlumno = document.getElementById('form-alumno');
const inputNombre = document.getElementById('input-nombre');
const inputNota = document.getElementById('input-nota');
const listaAlumnos = document.getElementById('lista-alumnos');
const totalAlumnos = document.getElementById('total-alumnos');
const emptyState = document.getElementById('empty-state');
const cardEstadisticas = document.getElementById('card-estadisticas');
const statMedia = document.getElementById('stat-media');
const statAprobados = document.getElementById('stat-aprobados');
const statSuspensos = document.getElementById('stat-suspensos');
const btnVaciar = document.getElementById('btn-vaciar');
const btnOrdenarNota = document.getElementById('btn-ordenar-nota');
const btnFetch = document.getElementById('btn-fetch');
const selectServidor = document.getElementById('select-servidor');
const statusServidor = document.getElementById('status-servidor');

function guardarEnStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(alumnos));
}

function actualizarEstadisticas() {
  if (alumnos.length === 0) {
    cardEstadisticas.style.display = 'none';
    return;
  }
  cardEstadisticas.style.display = 'block';
  const suma = alumnos.reduce((acc, al) => acc + al.nota, 0);
  const media = suma / alumnos.length;
  const aprobados = alumnos.filter(al => al.estaAprobado()).length;

  statMedia.textContent = media.toFixed(2);
  statAprobados.textContent = aprobados;
  statSuspensos.textContent = alumnos.length - aprobados;
}

function renderizar() {
  listaAlumnos.innerHTML = '';
  totalAlumnos.textContent = alumnos.length;

  if (alumnos.length === 0) {
    emptyState.style.display = 'block';
    actualizarEstadisticas();
    return;
  }
  emptyState.style.display = 'none';

  alumnos.forEach((alumno, indice) => {
    const li = document.createElement('li');
    li.className = 'alumno-item';
    li.innerHTML = `
      <div class="alumno-info">
        <span class="alumno-nombre">${alumno.nombre}</span>
        ${alumno.obtenerBadgeHTML()}
      </div>
      <button class="btn-danger-outline" onclick="eliminarAlumno(${indice})">Eliminar</button>
    `;
    listaAlumnos.appendChild(li);
  });

  actualizarEstadisticas();
}

/**
 * ==============================================================
 * INSTRUCCIÓN FETCH: Recuperar datos desde el Servidor
 * ==============================================================
 */
async function cargarAlumnosDesdeServidor() {
  const url = selectServidor.value;

  mostrarEstado('Conectando con el servidor...', 'info');
  btnFetch.disabled = true;
  btnFetch.textContent = '⏳ Cargando...';

  try {
    // 1. Llamada HTTP GET asíncrona mediante fetch
    const respuesta = await fetch(url);

    // 2. Comprobar código de estado HTTP
    if (!respuesta.ok) {
      throw new Error(`El servidor respondió con código de error HTTP ${respuesta.status}`);
    }

    // 3. Parsear el cuerpo de la respuesta a JSON
    const datosRecibidos = await respuesta.json();

    if (!Array.isArray(datosRecibidos)) {
      throw new Error('El formato devuelto por el servidor no es un array válido.');
    }

    // 4. Transformar los objetos del servidor en instancias reales de la clase Alumno
    alumnos = datosRecibidos.map(item => new Alumno(item.nombre, item.nota, item.id));

    // 5. Guardar en localStorage y actualizar la vista
    guardarEnStorage();
    renderizar();

    mostrarEstado(`✅ ¡Éxito! Se han importado ${alumnos.length} alumnos desde la base de datos.`, 'success');

  } catch (error) {
    console.error('Error al hacer fetch:', error);
    mostrarEstado(`❌ Error de conexión: ${error.message}. Comprueba que tu servidor (Laragon o Node.js) esté encendido y que no haya problemas de CORS.`, 'error');
  } finally {
    btnFetch.disabled = false;
    btnFetch.textContent = '📥 Cargar desde BD con fetch()';
  }
}

function mostrarEstado(mensaje, tipo) {
  statusServidor.style.display = 'block';
  statusServidor.textContent = mensaje;
  if (tipo === 'success') {
    statusServidor.style.color = 'var(--success)';
  } else if (tipo === 'error') {
    statusServidor.style.color = 'var(--danger)';
  } else {
    statusServidor.style.color = 'var(--primary)';
  }
}

// Evento al pulsar el botón de fetch
btnFetch.addEventListener('click', cargarAlumnosDesdeServidor);

// Añadir alumno localmente
formAlumno.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = inputNombre.value;
  const nota = inputNota.value;

  if (!nombre.trim() || nota === '') return;

  const nuevoAlumno = new Alumno(nombre, nota);
  alumnos.push(nuevoAlumno);

  guardarEnStorage();
  renderizar();

  formAlumno.reset();
  inputNombre.focus();
});

window.eliminarAlumno = function(indice) {
  alumnos.splice(indice, 1);
  guardarEnStorage();
  renderizar();
};

btnOrdenarNota.addEventListener('click', () => {
  alumnos.sort((a, b) => b.nota - a.nota);
  guardarEnStorage();
  renderizar();
});

btnVaciar.addEventListener('click', () => {
  if (alumnos.length === 0) return;
  if (confirm('¿Deseas vaciar la lista de alumnos?')) {
    alumnos = [];
    guardarEnStorage();
    renderizar();
  }
});

// Render inicial
renderizar();
