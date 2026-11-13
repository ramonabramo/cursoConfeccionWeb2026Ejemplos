/**
 * ENUNCIADO:
 * Ejercicio: Conversión de NodeList a Array con Array.from() y métodos funcionales.
 */

// estructura del programa principal

// 1. variables y constantes de estado

// 2. constantes al DOM
// Convertimos la NodeList a un Array real para poder usar .filter() y .map()
const arrayAlumnos = Array.from(document.querySelectorAll('.alumno'));
const btnAprobados = document.querySelector('#btnAprobados');
const btnSuspensos = document.querySelector('#btnSuspensos');
const btnNombres = document.querySelector('#btnNombres');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares
function limpiarClases() {
    arrayAlumnos.forEach(function (alumno) {
        alumno.classList.remove('aprobado', 'suspenso');
    });
}

// 4. funciones de eventos
function filtrarAprobados() {
    limpiarClases();

    // Usamos .filter() sobre el array real de nodos DOM
    const aprobados = arrayAlumnos.filter(function (alumno) {
        return Number(alumno.dataset.nota) >= 5;
    });

    aprobados.forEach(function (alumno) {
        alumno.classList.add('aprobado');
    });

    const nombresAprobados = aprobados.map(function (a) {
        return `${a.dataset.nombre} (${a.dataset.nota})`;
    });

    resultado.textContent = `Aprobados: ${aprobados.length} alumnos -> ${nombresAprobados.join(', ')}.`;
}

function filtrarSuspensos() {
    limpiarClases();

    const suspensos = arrayAlumnos.filter(function (alumno) {
        return Number(alumno.dataset.nota) < 5;
    });

    suspensos.forEach(function (alumno) {
        alumno.classList.add('suspenso');
    });

    const nombresSuspensos = suspensos.map(function (a) {
        return `${a.dataset.nombre} (${a.dataset.nota})`;
    });

    resultado.textContent = `Suspensos: ${suspensos.length} alumnos -> ${nombresSuspensos.join(', ')}.`;
}

function listarNombres() {
    limpiarClases();

    // Extraemos únicamente el nombre de cada elemento con .map()
    const todosLosNombres = arrayAlumnos.map(function (alumno) {
        return alumno.dataset.nombre;
    });

    resultado.textContent = `Listado oficial (${todosLosNombres.length} alumnos): ${todosLosNombres.join(' • ')}.`;
}

// 5. escuchadores de eventos
btnAprobados.addEventListener('click', filtrarAprobados);
btnSuspensos.addEventListener('click', filtrarSuspensos);
btnNombres.addEventListener('click', listarNombres);
