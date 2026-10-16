/**
 * ENUNCIADO:
 * Ejercicio 10 (Solución): Sistema de Filtrado con Callbacks.
 */

// 1. variables y constantes de estado
const inventario = [
    { nombre: 'Ratón USB', precio: 15 },
    { nombre: 'Monitor 4K', precio: 320 },
    { nombre: 'Cable HDMI', precio: 8 },
    { nombre: 'Portátil i7', precio: 850 },
    { nombre: 'Funda Tablet', precio: 22 }
];

// 2. constantes al DOM
const btnBaratos = document.querySelector('#btnBaratos');
const btnCaros = document.querySelector('#btnCaros');
const btnEmpiezanPorC = document.querySelector('#btnEmpiezanPorC');
const resultado = document.querySelector('#resultado');

// 3. Función de Orden Superior (HOF)
function filtrar(array, callbackCriterio) {
    const listaAceptada = [];
    for (const item of array) {
        if (callbackCriterio(item)) {
            listaAceptada.push(item);
        }
    }
    return listaAceptada;
}

// 4. funciones de eventos
function renderizarProductos(titulo, productos) {
    let html = `<strong>${titulo} (Coincidencias: ${productos.length}):</strong><br>`;
    for (const p of productos) {
        html += `• ${p.nombre} — <strong>${p.precio} €</strong><br>`;
    }
    resultado.innerHTML = html;
}

function filtrarBaratos() {
    const baratos = filtrar(inventario, item => item.precio <= 30);
    renderizarProductos('Productos Asequibles (<= 30 €)', baratos);
}

function filtrarCaros() {
    const caros = filtrar(inventario, item => item.precio > 100);
    renderizarProductos('Productos Premium (> 100 €)', caros);
}

function filtrarPorLetraC() {
    const conC = filtrar(inventario, item => item.nombre.toLowerCase().startsWith('c'));
    renderizarProductos('Productos que empiezan por "C"', conC);
}

// 5. escuchadores de eventos
btnBaratos.addEventListener('click', filtrarBaratos);
btnCaros.addEventListener('click', filtrarCaros);
btnEmpiezanPorC.addEventListener('click', filtrarPorLetraC);
