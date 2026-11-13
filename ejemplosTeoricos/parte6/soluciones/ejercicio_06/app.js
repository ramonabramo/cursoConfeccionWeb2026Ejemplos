/**
 * ENUNCIADO:
 * Ejercicio: Gestión masiva de Checkboxes y conteo en tiempo real.
 */

// estructura del programa principal

// 1. variables y constantes de estado

// 2. constantes al DOM
const checkboxes = document.querySelectorAll('.chk-tarea');
const btnMarcarTodos = document.querySelector('#btnMarcarTodos');
const btnDesmarcarTodos = document.querySelector('#btnDesmarcarTodos');
const btnInvertir = document.querySelector('#btnInvertir');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares
function actualizarContador() {
    let completadas = 0;
    const total = checkboxes.length;

    checkboxes.forEach(function (chk) {
        if (chk.checked) {
            completadas++;
        }
    });

    const porcentaje = total > 0 ? Math.round((completadas / total) * 100) : 0;
    resultado.textContent = `Tareas completadas: ${completadas} de ${total} (${porcentaje}% del total).`;
}

// 4. funciones de eventos
function marcarTodos() {
    checkboxes.forEach(function (chk) {
        chk.checked = true;
    });
    actualizarContador();
}

function desmarcarTodos() {
    checkboxes.forEach(function (chk) {
        chk.checked = false;
    });
    actualizarContador();
}

function invertirSeleccion() {
    checkboxes.forEach(function (chk) {
        chk.checked = !chk.checked;
    });
    actualizarContador();
}

// 5. escuchadores de eventos
checkboxes.forEach(function (chk) {
    chk.addEventListener('change', actualizarContador);
});

btnMarcarTodos.addEventListener('click', marcarTodos);
btnDesmarcarTodos.addEventListener('click', desmarcarTodos);
btnInvertir.addEventListener('click', invertirSeleccion);

// Inicializar el contador al cargar la página
actualizarContador();
