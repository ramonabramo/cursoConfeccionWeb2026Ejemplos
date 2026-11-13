// ==========================================================================
// EJERCICIO 08 (Práctica): Clase Tarea con Estado y Métodos de Instancia
// OBJETIVO: Crear la clase Tarea, instanciar objetos con new y gestionar sus estados.
// ==========================================================================

// 1. variables y constantes de estado
class Tarea {
    constructor(titulo, responsable, horas) {
        this.id = Date.now() + Math.floor(Math.random() * 1000);
        this.titulo = titulo;
        this.responsable = responsable;
        this.horas = horas;
        this.completada = false;
    }

    alternarEstado() {
        this.completada = !this.completada;
        return this.completada ? 'COMPLETADA' : 'PENDIENTE';
    }
}

const listaTareas = [
    new Tarea('Configurar Webpack y Babel', 'Marta Gómez', 4),
    new Tarea('Diseñar interfaz con CSS Grid', 'Sergio Ramos', 2)
];

// 2. constantes al DOM
const inputTitulo = document.querySelector('#inputTituloTarea');
const inputResponsable = document.querySelector('#inputResponsable');
const inputHoras = document.querySelector('#inputHoras');
const btnCrearTarea = document.querySelector('#btnCrearTarea');
const contenedorTareas = document.querySelector('#contenedorTareas');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares
function renderizarTareas() {
    contenedorTareas.innerHTML = '';

    listaTareas.forEach((tarea) => {
        const tarjeta = document.createElement('div');
        tarjeta.className = `tarjeta-tarea ${tarea.completada ? 'tarea-completada' : 'tarea-pendiente'}`;

        tarjeta.innerHTML = `
            <h4>${tarea.titulo}</h4>
            <p class="texto-secundario">👤 ${tarea.responsable} | ⏱️ ${tarea.horas}h</p>
            <button type="button" class="btn-conmutar-tarea ${tarea.completada ? 'btn-secundario' : 'btn-exito'}">
                ${tarea.completada ? '↩️ Marcar Pendiente' : '✅ Marcar Hecha'}
            </button>
        `;

        // Añadir evento al botón interno de la tarjeta que invoca el método de instancia
        const btnConmutar = tarjeta.querySelector('button');
        btnConmutar.addEventListener('click', () => {
            const nuevoEstado = tarea.alternarEstado();
            renderizarTareas();
            resultado.textContent = `ℹ️ Tarea "${tarea.titulo}" conmutada a estado: ${nuevoEstado}.`;
            resultado.className = 'resultado alerta-espera';
        });

        contenedorTareas.appendChild(tarjeta);
    });
}

function crearNuevaTarea() {
    const titulo = inputTitulo.value.trim();
    const responsable = inputResponsable.value.trim();
    const horas = Number(inputHoras.value);

    if (!titulo || !responsable || horas <= 0) {
        resultado.textContent = '⚠️ Completa todos los campos con valores válidos.';
        resultado.className = 'resultado alerta-peligro';
        return;
    }

    // Instanciación con la palabra reservada 'new'
    const nuevaTarea = new Tarea(titulo, responsable, horas);
    listaTareas.push(nuevaTarea);

    inputTitulo.value = '';
    inputResponsable.value = '';
    renderizarTareas();

    resultado.textContent = `🎉 Nueva instancia de Tarea creada con id #${nuevaTarea.id}.`;
    resultado.className = 'resultado alerta-exito';
}

// 4. funciones de eventos
function alPulsarCrear() {
    crearNuevaTarea();
}

// 5. escuchadores de eventos (addEventListener)
btnCrearTarea.addEventListener('click', alPulsarCrear);

// Render inicial
renderizarTareas();
