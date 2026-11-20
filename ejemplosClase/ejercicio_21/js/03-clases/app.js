/**
 * FASE 3: ARRAY DE OBJETOS CON CLASES (POO)
 * 
 * En esta fase definimos la clase `Alumno` que encapsula:
 * - Propiedades: nombre, nota
 * - Métodos: estaAprobado(), obtenerBadgeHTML(), etc.
 */

// 1. Definición de la Clase
class Alumno {
  constructor(nombre, nota) {
    this.nombre = nombre ? nombre.trim() : '';
    // Validación/conversión de la nota
    const parsedNota = parseFloat(nota);
    this.nota = isNaN(parsedNota) ? 0 : Math.max(0, Math.min(10, parsedNota));
  }

  /**
   * Determina si el alumno ha alcanzado la nota mínima de 5
   * @returns {boolean}
   */
  estaAprobado() {
    return this.nota >= 5;
  }

  /**
   * Devuelve la calificación en texto tradicional
   * @returns {string}
   */
  obtenerCalificacionCualitativa() {
    if (this.nota < 5) return 'Suspenso';
    if (this.nota < 7) return 'Aprobado';
    if (this.nota < 9) return 'Notable';
    return 'Sobresaliente';
  }

  /**
   * Genera la etiqueta HTML del estado
   * @returns {string}
   */
  obtenerBadgeHTML() {
    const aprobado = this.estaAprobado();
    const cualitativo = this.obtenerCalificacionCualitativa();
    const claseBadge = aprobado ? 'badge-aprobado' : 'badge-suspenso';
    const icono = aprobado ? '✅' : '❌';

    return `<span class="badge ${claseBadge}">${icono} ${cualitativo}: ${this.nota.toFixed(2)}</span>`;
  }
}

// 2. Clave de almacenamiento
const STORAGE_KEY = 'fase3_alumnos_clases';

/**
 * REHIDRATACIÓN:
 * Cuando leemos de localStorage con JSON.parse, los datos son objetos planos sin prototipo.
 * Esta función los transforma de nuevo en instancias reales de la clase Alumno.
 */
function cargarAlumnosDesdeStorage() {
  const datosPlanos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  return datosPlanos.map(item => new Alumno(item.nombre, item.nota));
}

// 3. Estado de la aplicación: array de instancias de Alumno
let alumnos = cargarAlumnosDesdeStorage();

// 4. Referencias al DOM
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
const btnOrdenarNombre = document.getElementById('btn-ordenar-nombre');

/**
 * Guarda los alumnos serializados en localStorage
 */
function guardarEnStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(alumnos));
}

/**
 * Calcula estadísticas utilizando los métodos de cada instancia de Alumno
 */
function actualizarEstadisticas() {
  if (alumnos.length === 0) {
    cardEstadisticas.style.display = 'none';
    return;
  }

  cardEstadisticas.style.display = 'block';
  const sumaNotas = alumnos.reduce((acum, al) => acum + al.nota, 0);
  const media = sumaNotas / alumnos.length;
  
  // Usamos el método de clase estaAprobado()
  const aprobados = alumnos.filter(al => al.estaAprobado()).length;
  const suspensos = alumnos.length - aprobados;

  statMedia.textContent = media.toFixed(2);
  statAprobados.textContent = aprobados;
  statSuspensos.textContent = suspensos;
}

/**
 * Dibuja la lista en el HTML
 */
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
        ${alumno.obtenerBadgeHTML()} <!-- Llamada al método de la clase -->
      </div>
      <button class="btn-danger-outline" onclick="eliminarAlumno(${indice})">Eliminar</button>
    `;
    listaAlumnos.appendChild(li);
  });

  actualizarEstadisticas();
}

/**
 * Añadir nuevo alumno creando una instancia con 'new Alumno(...)'
 */
formAlumno.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = inputNombre.value;
  const nota = inputNota.value;

  if (!nombre.trim() || nota === '') return;

  // Creamos la instancia de la clase Alumno
  const nuevoAlumno = new Alumno(nombre, nota);

  alumnos.push(nuevoAlumno);
  guardarEnStorage();
  renderizar();

  formAlumno.reset();
  inputNombre.focus();
});

/**
 * Elimina un alumno
 */
window.eliminarAlumno = function(indice) {
  alumnos.splice(indice, 1);
  guardarEnStorage();
  renderizar();
};

/**
 * Ordenar por Nota
 */
btnOrdenarNota.addEventListener('click', () => {
  alumnos.sort((a, b) => b.nota - a.nota);
  guardarEnStorage();
  renderizar();
});

/**
 * Ordenar por Nombre alfabéticamente
 */
btnOrdenarNombre.addEventListener('click', () => {
  alumnos.sort((a, b) => a.nombre.localeCompare(b.nombre));
  guardarEnStorage();
  renderizar();
});

/**
 * Vaciar listado
 */
btnVaciar.addEventListener('click', () => {
  if (alumnos.length === 0) return;
  if (confirm('¿Seguro que deseas eliminar todos los alumnos?')) {
    alumnos = [];
    guardarEnStorage();
    renderizar();
  }
});

// Render inicial
renderizar();
