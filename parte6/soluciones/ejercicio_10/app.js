/**
 * ENUNCIADO:
 * Ejercicio: Reto integrador de catálogo interactivo con filtros y cálculo de reservas.
 */

// estructura del programa principal

// 1. variables y constantes de estado

// 2. constantes al DOM
const botonesFiltro = document.querySelectorAll('#filtrosCategoria .tab-btn');
const tarjetasCursos = document.querySelectorAll('.tarjeta-curso');
const btnVaciarCarrito = document.querySelector('#btnVaciarCarrito');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares
function recalcularTotal() {
    let totalPrecio = 0;
    let cantidadSeleccionada = 0;

    tarjetasCursos.forEach(function (tarjeta) {
        if (tarjeta.classList.contains('seleccionado')) {
            cantidadSeleccionada++;
            totalPrecio += Number(tarjeta.dataset.precio);
        }
    });

    if (cantidadSeleccionada === 0) {
        resultado.textContent = 'No hay cursos seleccionados. Haz clic en "Seleccionar Curso" para añadir a la reserva.';
    } else {
        resultado.textContent = `Cursos seleccionados: ${cantidadSeleccionada} | Total de la matrícula: ${totalPrecio.toFixed(2)} €.`;
    }
}

// 4. funciones de eventos
function aplicarFiltro(filtro) {
    tarjetasCursos.forEach(function (tarjeta) {
        const categoriaCurso = tarjeta.dataset.categoria;

        if (filtro === 'todos' || categoriaCurso === filtro) {
            tarjeta.classList.remove('oculto');
        } else {
            tarjeta.classList.add('oculto');
        }
    });
}

function vaciarReservas() {
    tarjetasCursos.forEach(function (tarjeta) {
        tarjeta.classList.remove('seleccionado');
        const btn = tarjeta.querySelector('.btn-reservar');
        if (btn) {
            btn.textContent = 'Seleccionar Curso';
            btn.classList.remove('btn-peligro');
        }
    });
    recalcularTotal();
}

// 5. escuchadores de eventos
// 5.1. Pestañas de categoría (exclusión mutua y filtrado)
botonesFiltro.forEach(function (btn) {
    btn.addEventListener('click', function () {
        botonesFiltro.forEach(function (b) {
            b.classList.remove('activo');
        });
        btn.classList.add('activo');

        const filtroElegido = btn.dataset.filtro;
        aplicarFiltro(filtroElegido);
    });
});

// 5.2. Botones de reserva en cada tarjeta
tarjetasCursos.forEach(function (tarjeta) {
    const btnReservar = tarjeta.querySelector('.btn-reservar');

    btnReservar.addEventListener('click', function () {
        const estaSeleccionado = tarjeta.classList.toggle('seleccionado');

        if (estaSeleccionado) {
            btnReservar.textContent = 'Quitar Curso';
            btnReservar.classList.add('btn-peligro');
        } else {
            btnReservar.textContent = 'Seleccionar Curso';
            btnReservar.classList.remove('btn-peligro');
        }

        recalcularTotal();
    });
});

// 5.3. Botón para vaciar
btnVaciarCarrito.addEventListener('click', vaciarReservas);

// Estado inicial
recalcularTotal();
