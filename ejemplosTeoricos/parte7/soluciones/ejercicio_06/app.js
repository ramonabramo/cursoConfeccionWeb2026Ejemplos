/**
 * ENUNCIADO:
 * Ejercicio 06 (Solución): Bucle 'for...of' sobre una NodeList.
 */

// 1. variables y constantes de estado

// 2. constantes al DOM
const tarjetasLibros = document.querySelectorAll('.tarjeta-libro');
const btnCalcularPrecios = document.querySelector('#btnCalcularPrecios');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares

// 4. funciones de eventos
function procesarLibrosForOf() {
    let totalBase = 0;
    let cantidadLibros = 0;

    // Recorremos la NodeList directamente con for...of
    for (const tarjeta of tarjetasLibros) {
        const spanPrecio = tarjeta.querySelector('.precio-libro');
        const precio = Number(spanPrecio.textContent);

        totalBase += precio;
        cantidadLibros++;
    }

    const descuento = totalBase * 0.15;
    const precioFinal = totalBase - descuento;

    resultado.innerHTML = `
        Resumen de la compra con <strong>for...of</strong>:<br>
        • Libros en cesta: <strong>${cantidadLibros}</strong><br>
        • Subtotal base: <strong>${totalBase.toFixed(2)} €</strong><br>
        • Descuento promocional (15%): <strong>-${descuento.toFixed(2)} €</strong><br>
        • <strong>TOTAL A PAGAR: ${precioFinal.toFixed(2)} €</strong>
    `;
}

// 5. escuchadores de eventos
btnCalcularPrecios.addEventListener('click', procesarLibrosForOf);
