/**
 * ENUNCIADO:
 * Ejercicio 10 (Solución): Asignación masiva con forEach() en un Rating.
 */

// 1. variables y constantes de estado

// 2. constantes al DOM
const estrellas = document.querySelectorAll('.btn-estrella');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares
function obtenerTextoCalificacion(estrellasTotal) {
    if (estrellasTotal === 1) return 'Insuficiente / A mejorar';
    if (estrellasTotal === 2) return 'Regular';
    if (estrellasTotal === 3) return 'Aceptable';
    if (estrellasTotal === 4) return 'Muy bueno';
    return '¡Excelente / Sobresaliente!';
}

// 4. funciones de eventos

// 5. escuchadores de eventos
estrellas.forEach(function (estrella, indiceClickada) {
    estrella.addEventListener('click', function () {
        // Recorremos todas las estrellas para iluminar hasta la pulsada
        estrellas.forEach(function (e, i) {
            if (i <= indiceClickada) {
                e.classList.add('activa');
            } else {
                e.classList.remove('activa');
            }
        });

        const valoracion = indiceClickada + 1;
        const texto = obtenerTextoCalificacion(valoracion);
        resultado.innerHTML = `Has valorado con <strong>${valoracion} de 5 estrellas</strong> (${texto}).`;
    });
});
