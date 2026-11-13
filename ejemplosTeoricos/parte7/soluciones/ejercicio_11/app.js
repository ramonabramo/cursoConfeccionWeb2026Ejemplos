/**
 * ENUNCIADO:
 * Ejercicio 11 (Solución): Comparativa definitiva de bucles.
 */

// 1. variables y constantes de estado
const notas = [4.5, 7.0, 3.2, 8.5, 6.0, 9.2];

// 2. constantes al DOM
const btnForClasico = document.querySelector('#btnForClasico');
const btnWhile = document.querySelector('#btnWhile');
const btnForOf = document.querySelector('#btnForOf');
const btnForEach = document.querySelector('#btnForEach');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares
function renderizarResumen(tipoBucle, suma, aprobados, total) {
    const media = suma / total;
    resultado.innerHTML = `
        <strong>Resultado con ${tipoBucle}:</strong><br>
        • Suma total de calificaciones: ${suma.toFixed(2)} pts<br>
        • Nota media del grupo: <strong>${media.toFixed(2)}</strong><br>
        • Alumnos aprobados (>= 5.0): <strong>${aprobados} de ${total}</strong>
    `;
}

// 4. funciones de eventos
function resolverConFor() {
    let suma = 0;
    let aprobados = 0;

    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
        if (notas[i] >= 5) aprobados++;
    }

    renderizarResumen("Bucle 'for' clásico (for let i = 0; i < length; i++)", suma, aprobados, notas.length);
}

function resolverConWhile() {
    let suma = 0;
    let aprobados = 0;
    let i = 0;

    while (i < notas.length) {
        suma += notas[i];
        if (notas[i] >= 5) aprobados++;
        i++;
    }

    renderizarResumen("Bucle 'while' (while i < length)", suma, aprobados, notas.length);
}

function resolverConForOf() {
    let suma = 0;
    let aprobados = 0;

    for (const nota of notas) {
        suma += nota;
        if (nota >= 5) aprobados++;
    }

    renderizarResumen("Bucle 'for...of' (for const nota of notas)", suma, aprobados, notas.length);
}

function resolverConForEach() {
    let suma = 0;
    let aprobados = 0;

    notas.forEach(function (nota) {
        suma += nota;
        if (nota >= 5) aprobados++;
    });

    renderizarResumen("Método 'forEach()' (notas.forEach(callback))", suma, aprobados, notas.length);
}

// 5. escuchadores de eventos
btnForClasico.addEventListener('click', resolverConFor);
btnWhile.addEventListener('click', resolverConWhile);
btnForOf.addEventListener('click', resolverConForOf);
btnForEach.addEventListener('click', resolverConForEach);
