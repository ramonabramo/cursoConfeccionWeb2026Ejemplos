/**
 * ENUNCIADO:
 * Ejercicio: Lectura de atributos data-* (dataset) en colecciones de tarjetas.
 */

// estructura del programa principal

// 1. variables y constantes de estado

// 2. constantes al DOM
const tarjetas = document.querySelectorAll('.tarjeta-producto');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares

// 4. funciones de eventos

// 5. escuchadores de eventos
tarjetas.forEach(function (tarjeta) {
    const btnDetalle = tarjeta.querySelector('.btn-detalle');

    btnDetalle.addEventListener('click', function () {
        // Leemos los atributos personalizados desde el dataset de la tarjeta
        const id = tarjeta.dataset.id;
        const nombre = tarjeta.dataset.nombre;
        const categoria = tarjeta.dataset.categoria;
        const precioBase = Number(tarjeta.dataset.precio);

        // Calculamos el precio con IVA (21%)
        const precioConIva = precioBase * 1.21;

        resultado.innerHTML = `
            Ficha técnica <strong>[Ref: #${id}]</strong><br>
            • Producto: <strong>${nombre}</strong><br>
            • Categoría: <strong>${categoria}</strong><br>
            • Precio Base: <strong>${precioBase.toFixed(2)} €</strong><br>
            • Precio con IVA (21%): <strong>${precioConIva.toFixed(2)} €</strong>
        `;
    });
});
