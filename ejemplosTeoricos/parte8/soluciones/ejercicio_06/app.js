/**
 * ENUNCIADO:
 * Ejercicio 06 (Solución): Funciones Flecha y Retorno Implícito.
 */

// 1. variables y constantes de estado

// 2. constantes al DOM
const inputTextoFlecha = document.querySelector('#inputTextoFlecha');
const inputPrecioFlecha = document.querySelector('#inputPrecioFlecha');
const btnFormatearFlecha = document.querySelector('#btnFormatearFlecha');
const btnIvaFlecha = document.querySelector('#btnIvaFlecha');
const btnObjetoFlecha = document.querySelector('#btnObjetoFlecha');
const resultado = document.querySelector('#resultado');

// 3. funciones flecha con retorno implícito
const aMayusculas = texto => texto.trim().toUpperCase();

const calcularIva = precio => precio * 1.21;

// Retorno implícito de objeto envuelto en ({})
const crearFicha = (nombre, precio) => ({
    id: Math.floor(Math.random() * 1000) + 100,
    nombre: nombre.trim(),
    precioBase: precio,
    precioConIva: Number((precio * 1.21).toFixed(2))
});

// 4. funciones de eventos
function probarMayusculas() {
    const transformado = aMayusculas(inputTextoFlecha.value);
    resultado.innerHTML = `Texto transformado con flecha de 1 parámetro: <strong>${transformado}</strong>`;
}

function probarIva() {
    const precio = Number(inputPrecioFlecha.value);
    const final = calcularIva(precio);
    resultado.innerHTML = `Precio con IVA (21%) mediante retorno implícito: <strong>${final.toFixed(2)} €</strong>`;
}

function probarObjeto() {
    const ficha = crearFicha(inputTextoFlecha.value, Number(inputPrecioFlecha.value));
    resultado.innerHTML = `
        Objeto retornado con sintaxis <strong>({})</strong>:<br>
        • ID Generado: <strong>#${ficha.id}</strong><br>
        • Nombre: <strong>${ficha.nombre}</strong><br>
        • Base: <strong>${ficha.precioBase} €</strong><br>
        • Con IVA: <strong>${ficha.precioConIva} €</strong>
    `;
}

// 5. escuchadores de eventos
btnFormatearFlecha.addEventListener('click', probarMayusculas);
btnIvaFlecha.addEventListener('click', probarIva);
btnObjetoFlecha.addEventListener('click', probarObjeto);
