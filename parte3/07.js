/**
 * EJERCICIO 07 - IF ANIDADOS (EL MAYOR DE TRES NÚMEROS)
 *
 * Enunciado:
 * Pedir tres números distintos por teclado e indicar en el div #salida
 * cuál de los tres es el mayor.
 * Restricción: Utilizar únicamente estructuras 'if ... else' anidadas
 * (un 'if ... else' dentro de otro 'if ... else', sin usar operadores lógicos &&).
 *
 * PASOS A REALIZAR:
 * - 1 PASO: Declarar las variables (numero1, numero2, numero3, mensaje) y la constante del div #salida.
 * - 2 PASO: Pedir los tres números por teclado mediante prompt() y convertirlos con Number().
 * - 3 PASO: Comparar primero 'numero1' con 'numero2' (if principal):
 *           * Si (numero1 > numero2), descartamos 'numero2' y abrimos otro 'if ... else' dentro para comparar 'numero1' con 'numero3':
 *               - Si (numero1 > numero3) -> el mayor es 'numero1'.
 *               - Si no (else) -> el mayor es 'numero3'.
 *           * Si no se cumple el if principal (else, significa que 'numero2' es mayor que 'numero1'), abrimos otro 'if ... else' dentro para comparar 'numero2' con 'numero3':
 *               - Si (numero2 > numero3) -> el mayor es 'numero2'.
 *               - Si no (else) -> el mayor es 'numero3'.
 * - 4 PASO: Mostrar el mensaje con el número mayor en el div #salida.
 */

// estructura programa

// declaracion de variables y constantes

// constantes al DOM

// gestion de eventos
// constantes al DOM que queremos escuchar
// colocar escuchadores de eventos

// entradas

// procesamiento

// salidas