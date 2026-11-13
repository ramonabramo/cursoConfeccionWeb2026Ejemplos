/**
 * ENUNCIADO:
 * Ejercicio 08 (Práctica del Alumno): Bucle 'for...in' para renderizar datos de un Objeto.
 *
 * Utilizando el bucle 'for...in' aprendido en el Ejercicio 07, recorre el siguiente objeto
 * y construye una presentación visual de sus datos.
 *
 * Tenemos el siguiente objeto definido:
 * const perfilUsuario = {
 *     usuario: 'alex_frontend',
 *     rol: 'Desarrollador Web Senior',
 *     experienciaAnios: 4,
 *     especialidad: 'JavaScript / DOM',
 *     disponibleParaProyectos: 'Sí',
 *     ciudad: 'Valencia'
 * };
 *
 * OBJETIVOS:
 * 1. Botón #btnGenerarFicha:
 *    - Iniciar una variable con estructura de tabla HTML: let tabla = '<table class="tabla-objeto">...';
 *    - Recorrer el objeto con: for (const clave in perfilUsuario)
 *    - En cada vuelta, añadir una fila: <tr><td><strong>[clave]</strong></td><td>[perfilUsuario[clave]]</td></tr>
 *    - Cerrar la etiqueta de la tabla y mostrarla en #resultado.
 *
 * 2. Botón #btnContarProps:
 *    - Inicializar un contador numérico en 0: let totalProps = 0;
 *    - Recorrer el objeto con for...in e incrementar el contador en cada vuelta.
 *    - Mostrar en #resultado: 'El objeto analizado contiene [totalProps] propiedades.'
 *
 * CONCEPTOS A PRACTICAR:
 * - for (const clave in objeto)
 * - Acceso a valores dinámicos por corchete: objeto[clave]
 * - Construcción de tablas HTML dinámicas con bucles
 */

// estructura del programa principal

// 1. variables y constantes de estado
const perfilUsuario = {
    usuario: 'alex_frontend',
    rol: 'Desarrollador Web Senior',
    experienciaAnios: 4,
    especialidad: 'JavaScript / DOM',
    disponibleParaProyectos: 'Sí',
    ciudad: 'Valencia'
};

// 2. constantes al DOM
// capturar #btnGenerarFicha, #btnContarProps y #resultado

// 3. funciones auxiliares

// 4. funciones de eventos
// funcion para generar la tabla con for...in
// funcion para contar propiedades con for...in

// 5. escuchadores de eventos
// escuchar 'click' en ambos botones
