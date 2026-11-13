/**
 * ENUNCIADO:
 * Ejercicio 12 (Práctica del Alumno): Factoría con Métodos y Closure.
 *
 * Utilizando el concepto de Closure aprendido en el Ejercicio 11, crea una factoría
 * que encapsule una variable 'saldo' y devuelva un objeto con métodos que interactúan con ella.
 *
 * OBJETIVOS:
 * 1. Declarar la función factoría:
 *    function crearMonedero(saldoInicial = 0) {
 *        let saldo = saldoInicial; // Variable PRIVADA, inaccesible directamente
 *
 *        return {
 *            ingresar: function(cantidad) { ... sumar y devolver saldo ... },
 *            gastar: function(cantidad) { ... restar si hay saldo suficiente ... },
 *            obtenerSaldo: function() { ... devolver saldo actual ... }
 *        };
 *    }
 *
 * 2. Instanciar un monedero: const miMonedero = crearMonedero(100);
 * 3. Conectar los botones de la interfaz con los métodos del objeto retornado.
 * 4. Mostrar en #resultado las confirmaciones de operación y el saldo resultante.
 *
 * CONCEPTOS A PRACTICAR:
 * - Creación de APIs públicas con variables privadas gracias a Closures
 * - Encapsulación orientada a objetos sin necesidad de clases
 */

// estructura del programa principal

// 1. variables y constantes de estado

// 2. constantes al DOM
// capturar #inputCantidad, botones y #resultado

// 3. función factoría con Closure

// 4. instanciación del monedero

// 5. escuchadores de eventos
