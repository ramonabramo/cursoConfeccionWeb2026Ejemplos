/**
 * FASE 2: ARRAY DE OBJETOS LITERALES
 * 
 * En esta fase agrupamos las propiedades en un solo objeto literal:
 * {
 *   nombre: "Lucía",
 *   nota: 8.5
 * }
 * Todo se maneja en un único array: `alumnos`.
 */

// 1. Clave de almacenamiento única para localStorage
const STORAGE_KEY = 'fase2_alumnos_objetos';

// 2. Carga inicial desde localStorage
let alumnos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

// 3. Referencias al DOM
const formAlumno = document.getElementById('form-alumno');
const inputNombre = document.getElementById('input-nombre');
const inputNota = document.getElementById('input-nota');
const listaAlumnos = document.getElementById('lista-alumnos');
const totalAlumnos = document.getElementById('total-alumnos');
const emptyState = document.getElementById('empty-state');
const btnVaciar = document.getElementById('btn-vaciar');
const btnOrdenarNota = document.getElementById('btn-ordenar-nota');

/**
 * Guarda el array de objetos en localStorage
 */
function guardarEnStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(alumnos));
}

/**
 * Función auxiliar para saber si un alumno está aprobado.
 * (Nota cómo tenemos que definir funciones sueltas porque los objetos literales no tienen métodos propios).
 */
function estaAprobado(alumno) {
  return alumno.nota >= 5;
}

/**
 * Dibuja la lista en el HTML
 */
function renderizar() {
  listaAlumnos.innerHTML = '';
  totalAlumnos.textContent = alumnos.length;

  if (alumnos.length === 0) {
    emptyState.style.display = 'block';
    return;
  }
  emptyState.style.display = 'none';

  // Recorremos el array de objetos directamente
  alumnos.forEach((alumno, indice) => {
    const aprobado = estaAprobado(alumno);

    const li = document.createElement('li');
    li.className = 'alumno-item';
    li.innerHTML = `
      <div class="alumno-info">
        <span class="alumno-nombre">${alumno.nombre}</span>
        <span class="badge ${aprobado ? 'badge-aprobado' : 'badge-suspenso'}">
          ${aprobado ? 'Aprobado' : 'Suspenso'}: ${alumno.nota.toFixed(2)}
        </span>
      </div>
      <button class="btn-danger-outline" onclick="eliminarAlumno(${indice})">Eliminar</button>
    `;
    listaAlumnos.appendChild(li);
  });
}

/**
 * Añadir un nuevo alumno como objeto literal
 */
formAlumno.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = inputNombre.value.trim();
  const nota = parseFloat(inputNota.value);

  if (!nombre || isNaN(nota)) return;

  // Creamos el objeto literal
  const nuevoAlumno = {
    nombre: nombre,
    nota: nota
  };

  alumnos.push(nuevoAlumno);
  guardarEnStorage();
  renderizar();

  formAlumno.reset();
  inputNombre.focus();
});

/**
 * Elimina un alumno. Al ser un objeto, solo eliminamos un elemento del array
 * y nunca se desajustan las notas con los nombres.
 */
window.eliminarAlumno = function(indice) {
  alumnos.splice(indice, 1);
  guardarEnStorage();
  renderizar();
};

/**
 * Ordenar por nota descendente (demuestra la facilidad al usar objetos)
 */
btnOrdenarNota.addEventListener('click', () => {
  alumnos.sort((a, b) => b.nota - a.nota);
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
