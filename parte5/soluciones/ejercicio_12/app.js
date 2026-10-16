/**
 * ENUNCIADO:
 * Ejercicio: Utiliza el segundo parámetro de 'forEach(function (elemento, indice) { ... })'.
 *
 * La función callback que le pasamos a 'forEach()' puede recibir más de un parámetro:
 * 1. Primer parámetro: El elemento actual del array.
 * 2. Segundo parámetro (opcional): El índice numérico (0, 1, 2...) de la posición actual.
 *
 * Como los índices en JavaScript empiezan en 0, para mostrar un ranking realista
 * a los usuarios sumaremos 1 al índice: (indice + 1).
 *
 * Array inicial de películas:
 * let peliculas = ['El Padrino', 'Pulp Fiction', 'Interestelar', 'Matrix', 'Origen'];
 *
 * Al pulsar el botón #btnRanking:
 * 1. Iniciar una variable acumuladora con un encabezado:
 *    let salida = 'RANKING DE PELÍCULAS:\n\n';
 * 2. Recorrer con forEach recibiendo DOS parámetros:
 *    peliculas.forEach(function (pelicula, indice) {
 *        salida += `Puesto ${indice + 1}: ${pelicula}\n`;
 *    });
 * 3. Mostrar la salida numerada en el div #resultado.
 *
 * EJEMPLO DE FUNCIONAMIENTO:
 * - Al pulsar "Generar Ranking":
 *   RANKING DE PELÍCULAS:
 *   Puesto 1: El Padrino
 *   Puesto 2: Pulp Fiction
 *   Puesto 3: Interestelar
 *   Puesto 4: Matrix
 *   Puesto 5: Origen
 *
 * CONCEPTOS DE ARRAYS A UTILIZAR:
 * - array.forEach(function (elemento, indice) { ... }): Acceso simultáneo al valor y su posición.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar el array 'peliculas'.
 * - 2 PASO: Apuntar a los elementos del DOM.
 * - 3 PASO: Programar el evento 'submit' para permitir añadir películas con push().
 * - 4 PASO: Programar el 'click' en #btnRanking.
 * - 5 PASO: Dentro del click, ejecutar peliculas.forEach(function (pelicula, indice) { ... }).
 * - 6 PASO: Acumular 'Puesto ' + (indice + 1) + ': ' + pelicula y mostrarlo en #resultado.
 */

// estructura del programa principal

// declaracion del array inicial
let peliculas = ['El Padrino', 'Pulp Fiction', 'Interestelar', 'Matrix', 'Origen'];

// constantes al DOM que queremos escuchar
const formPelicula = document.querySelector('#formPelicula');
const inputPelicula = document.querySelector('#inputPelicula');
const btnRanking = document.querySelector('#btnRanking');
const nodoResultado = document.querySelector('#resultado');

// colocar escuchadores de eventos

// 1. Permitir añadir nuevas películas
formPelicula.addEventListener('submit', function (e) {
    e.preventDefault();
    const titulo = inputPelicula.value.trim();

    if (titulo !== '') {
        peliculas.push(titulo);
        inputPelicula.value = '';
        inputPelicula.focus();
        nodoResultado.textContent = `Película "${titulo}" añadida. Pulsa "Generar Ranking" para actualizar.`;
    }
});

// 2. Generar ranking con elemento e índice mediante forEach()
btnRanking.addEventListener('click', function () {
    let salida = `🎬 RANKING DE PELÍCULAS (Total: ${peliculas.length}):\n\n`;

    // forEach entrega el elemento en el 1er parámetro y el índice en el 2º
    peliculas.forEach(function (pelicula, indice) {
        salida += `Puesto ${indice + 1}: ${pelicula}\n`;
    });

    nodoResultado.textContent = salida;
});
