/**
 * ENUNCIADO:
 * Ejercicio 12 (Solución): Panel de Inventario con Bucles Selectivos.
 */

// 1. variables y constantes de estado
const configAlmacen = {
    sede: 'Central Valencia',
    pasillos: 14,
    responsable: 'Laura Gómez',
    versionSistema: '2.4.1'
};

// 2. constantes al DOM
const tarjetas = document.querySelectorAll('.tarjeta-producto');
const btnValorInventario = document.querySelector('#btnValorInventario');
const btnBuscarAgotado = document.querySelector('#btnBuscarAgotado');
const btnVerMetadatos = document.querySelector('#btnVerMetadatos');
const botonesEliminar = document.querySelectorAll('.btn-eliminar');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares

// 4. funciones de eventos
// Tarea A: for...of para acumular el valor monetario de las tarjetas visibles
function calcularValorInventario() {
    let valorTotal = 0;
    let unidadesTotales = 0;

    for (const tarjeta of tarjetas) {
        // Solo calculamos si la tarjeta sigue existiendo en el DOM
        if (document.body.contains(tarjeta)) {
            const stock = Number(tarjeta.dataset.stock);
            const precio = Number(tarjeta.dataset.precio);
            valorTotal += (stock * precio);
            unidadesTotales += stock;
        }
    }

    resultado.innerHTML = `
        Valoración de Inventario (calculado con <strong>for...of</strong>):<br>
        • Unidades totales en stock: <strong>${unidadesTotales}</strong><br>
        • Valor monetario total: <strong>${valorTotal.toFixed(2)} €</strong>
    `;
}

// Tarea B: while con break para buscar la primera rotura de stock
function detectarPrimerAgotado() {
    let i = 0;
    let roturaEncontrada = null;

    while (i < tarjetas.length) {
        const tarjetaActual = tarjetas[i];
        if (document.body.contains(tarjetaActual)) {
            const stock = Number(tarjetaActual.dataset.stock);
            if (stock === 0) {
                roturaEncontrada = tarjetaActual;
                break; // Parada inmediata al encontrar el primer producto sin existencias
            }
        }
        i++;
    }

    if (roturaEncontrada) {
        resultado.innerHTML = `
            ⚠️ <strong>Alerta de Stock (localizado con while + break):</strong><br>
            El producto con Ref #<strong>${roturaEncontrada.dataset.id}</strong> no tiene existencias (Stock: 0).
        `;
    } else {
        resultado.textContent = 'Todo el inventario dispone de existencias disponibles.';
    }
}

// Tarea C: for...in para inspeccionar el objeto de metadatos del almacén
function mostrarMetadatos() {
    let mensaje = 'Metadatos del Sistema de Almacén (recorridos con <strong>for...in</strong>):<br>';

    for (const propiedad in configAlmacen) {
        mensaje += `• <strong>${propiedad}:</strong> ${configAlmacen[propiedad]}<br>`;
    }

    resultado.innerHTML = mensaje;
}

// 5. escuchadores de eventos
btnValorInventario.addEventListener('click', calcularValorInventario);
btnBuscarAgotado.addEventListener('click', detectarPrimerAgotado);
btnVerMetadatos.addEventListener('click', mostrarMetadatos);

// Tarea D: forEach para asignar escuchador a cada botón de eliminar
botonesEliminar.forEach(function (btn) {
    btn.addEventListener('click', function () {
        const tarjetaPadre = btn.closest('.tarjeta-producto');
        if (tarjetaPadre) {
            const id = tarjetaPadre.dataset.id;
            tarjetaPadre.remove();
            resultado.textContent = `Producto #${id} retirado del inventario visual.`;
        }
    });
});
