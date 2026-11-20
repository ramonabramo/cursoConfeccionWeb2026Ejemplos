/**
 * FASE 1: ARRAYS PARALELOS
 * 
 * En esta fase utilizamos dos arrays independientes:
 * - nombres: almacena cadenas de texto
 * - notas: almacena números
 * La relación se mantiene únicamente por la posición (índice i).
 */

// 1. Claves de almacenamiento para localStorage
const STORAGE_KEY_NOMBRES = 'fase1_alumnos_nombres';
const STORAGE_KEY_NOTAS = 'fase1_alumnos_notas';

// 2. Carga inicial desde localStorage (o inicialización de arrays vacíos)
let nombres = JSON.parse(localStorage.getItem(STORAGE_KEY_NOMBRES)) || [];
let notas = JSON.parse(localStorage.getItem(STORAGE_KEY_NOTAS)) || [];

// 3. Referencias al DOM
const formAlumno = document.getElementById('form-alumno');
const inputNombre = document.getElementById('input-nombre');
const inputNota = document.getElementById('input-nota');
const listaAlumnos = document.getElementById('lista-alumnos');
const totalAlumnos = document.getElementById('total-alumnos');
const emptyState = document.getElementById('empty-state');
const btnVaciar = document.getElementById('btn-vaciar');

/**
 * Guarda ambos arrays en localStorage convirtiéndolos a texto JSON
 */
function guardarEnStorage() {
  localStorage.setItem(STORAGE_KEY_NOMBRES, JSON.stringify(nombres));
  localStorage.setItem(STORAGE_KEY_NOTAS, JSON.stringify(notas));
}

/**
 * Dibuja la lista de alumnos en el HTML recorriendo ambos arrays por índice
 */
function renderizar() {
  listaAlumnos.innerHTML = '';
  totalAlumnos.textContent = nombres.length;

  if (nombres.length === 0) {
    emptyState.style.display = 'block';
    return;
  }
  emptyState.style.display = 'none';

  // Recorremos los arrays paralelos usando el índice `i`
  for (let i = 0; i < nombres.length; i++) {
    const nombre = nombres[i];
    const nota = notas[i];
    const aprobado = nota >= 5;

    const li = document.createElement('li');
    li.className = 'alumno-item';
    li.innerHTML = `
      <div class="alumno-info">
        <span class="alumno-nombre">${nombre}</span>
        <span class="badge ${aprobado ? 'badge-aprobado' : 'badge-suspenso'}">
          ${aprobado ? 'Aprobado' : 'Suspenso'}: ${nota.toFixed(2)}
        </span>
      </div>
      <button class="btn-danger-outline" onclick="eliminarAlumno(${i})">Eliminar</button>
    `;
    listaAlumnos.appendChild(li);
  }
}

/**
 * Añadir un nuevo alumno
 */
formAlumno.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = inputNombre.value.trim();
  const nota = parseFloat(inputNota.value);

  if (!nombre || isNaN(nota)) return;

  // Insertamos en ambos arrays a la vez
  nombres.push(nombre);
  notas.push(nota);

  guardarEnStorage();
  renderizar();

  formAlumno.reset();
  inputNombre.focus();
});

/**
 * Elimina un alumno por su índice.
 * ATENCIÓN: Debemos acordarnos de eliminar en AMBOS arrays para no romper la correspondencia.
 */
window.eliminarAlumno = function(indice) {
  // Si olvidáramos una de las dos líneas, toda la aplicación quedaría desincronizada:
  nombres.splice(indice, 1);
  notas.splice(indice, 1);

  guardarEnStorage();
  renderizar();
};

/**
 * Vacía ambos arrays y limpia el almacenamiento
 */
btnVaciar.addEventListener('click', () => {
  if (nombres.length === 0) return;
  if (confirm('¿Seguro que deseas eliminar todos los alumnos?')) {
    nombres = [];
    notas = [];
    guardarEnStorage();
    renderizar();
  }
});

// Render inicial al cargar la página
renderizar();
