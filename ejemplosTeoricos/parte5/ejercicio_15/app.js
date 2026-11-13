/**
 * ENUNCIADO:
 * Ejercicio: Recorre un array utilizando el bucle 'while'.
 *
 * El bucle 'while (condicion)' evalúa una condición antes de cada repetición.
 * Para recorrer un array con 'while', debemos controlar manualmente tres pasos:
 * 1. Inicialización antes del bucle: let i = 0;
 * 2. Condición del bucle: while (i < array.length) { ... }
 * 3. Incremento obligatorio al final del bloque: i++;
 *
 * IMPORTANTE: Si olvidamos poner 'i++', el bucle nunca terminará y bloqueará
 * el navegador (bucle infinito). Por esta razón, 'forEach' es mucho más seguro y preferido.
 *
 * Array inicial de palabras:
 * const palabras = ['sol', 'mar', 'montaña', 'bosque', 'rio'];
 *
 * Al hacer clic en el botón #btnWhile:
 * 1. Iniciar el contador: let i = 0;
 * 2. Iniciar variable de texto: let salida = 'RECORRIDO CON BUCLE WHILE:\n\n';
 * 3. Ejecutar el bucle:
 *    while (i < palabras.length) {
 *        salida += `Casilla ${i} -> "${palabras[i].toUpperCase()}" (longitud: ${palabras[i].length})\n`;
 *        i++; // ¡Paso imprescindible!
 *    }
 * 4. Mostrar el texto final en el div #resultado.
 *
 * EJEMPLO DE FUNCIONAMIENTO:
 * - Al pulsar el botón:
 *   RECORRIDO CON BUCLE WHILE:
 *   Casilla 0 -> "SOL" (longitud: 3)
 *   Casilla 1 -> "MAR" (longitud: 3)
 *   Casilla 2 -> "MONTAÑA" (longitud: 7)
 *   Casilla 3 -> "BOSQUE" (longitud: 6)
 *   Casilla 4 -> "RIO" (longitud: 3)
 *
 * CONCEPTOS DE ARRAYS A UTILIZAR:
 * - Bucle while: while (i < array.length).
 * - Incremento manual del índice: i++.
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar el array 'palabras'.
 * - 2 PASO: Apuntar a #btnWhile y #resultado.
 * - 3 PASO: Escuchar 'click' en el botón.
 * - 4 PASO: Declarar let i = 0 y variable acumuladora.
 * - 5 PASO: Construir el bucle while asegurando el incremento i++.
 * - 6 PASO: Imprimir la salida en #resultado.
 */

// estructura del programa principal

// declaracion del array de palabras
// const palabras = ['sol', 'mar', 'montaña', 'bosque', 'rio'];

// constantes al DOM que queremos escuchar
// apuntar a #btnWhile y #resultado

// colocar escuchadores de eventos
// escuchar 'click' en el botón #btnWhile

    // 1. inicializar contador fuera del bucle: let i = 0;
    // 2. declarar acumulador de texto

    // 3. bucle while:
    // while (i < palabras.length) {
    //     acumular datos de palabras[i]
    //     i++; // ¡MUY IMPORTANTE para evitar bucle infinito!
    // }

    // salidas: mostrar en #resultado
