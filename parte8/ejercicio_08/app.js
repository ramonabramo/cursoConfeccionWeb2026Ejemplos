/**
 * ENUNCIADO:
 * Ejercicio 08 (Práctica del Alumno): Módulo Autónomo con IIFE.
 *
 * Utilizando una IIFE, encapsula la variable del contador 'let cuenta = 0;'
 * dentro de una función autoejecutable.
 *
 * OBJETIVOS:
 * 1. Crear una IIFE:
 *    (() => {
 *        let cuenta = 0; // Variable privada, protegida de la consola del navegador
 *
 *        // Capturar elementos del DOM dentro de la IIFE
 *        // Asignar los eventos 'click' a #btnSumar, #btnRestar, #btnResetear
 *        // Actualizar #resultado en cada acción
 *    })();
 *
 * 2. Comprobar que en la consola del navegador no es posible hacer 'cuenta = 9999;'
 *    porque la variable no existe en el ámbito global.
 *
 * CONCEPTOS A PRACTICAR:
 * - Encapsulación de componentes interactivos con IIFE
 * - Protección de estado frente a modificaciones globales accidentales
 */

// Desarrolla todo el componente dentro de la IIFE a continuación:
