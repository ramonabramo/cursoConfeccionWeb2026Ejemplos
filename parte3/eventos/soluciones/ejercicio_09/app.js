/**
 * ENUNCIADO:
 * Ejercicio: Utiliza 'if' anidados para crear un sistema sencillo
 * de identificación de usuario.
 *
 * Los datos correctos serán:
 *
 * - Usuario: alumno
 * - Contraseña: javascript
 *
 * El programa deberá realizar las comprobaciones en este orden:
 *
 * 1. Comprobar primero si el usuario es correcto.
 *
 * 2. Solamente si el usuario es correcto,
 *    comprobar la contraseña.
 *
 * Los resultados posibles serán:
 *
 * - Usuario y contraseña correctos:
 *   "Acceso permitido".
 *
 * - Usuario correcto pero contraseña incorrecta:
 *   "Contraseña incorrecta".
 *
 * - Usuario incorrecto:
 *   "Usuario incorrecto".
 *
 * EJEMPLO DE FUNCIONAMIENTO:
 *
 * - Caso 1:
 *   Usuario: alumno
 *   Contraseña: javascript
 *
 *   * El usuario es correcto.
 *   * Se comprueba la contraseña.
 *   * La contraseña es correcta.
 *   * Resultado: "Acceso permitido".
 *
 * - Caso 2:
 *   Usuario: alumno
 *   Contraseña: html
 *
 *   * El usuario es correcto.
 *   * Se comprueba la contraseña.
 *   * La contraseña es incorrecta.
 *   * Resultado: "Contraseña incorrecta".
 *
 * - Caso 3:
 *   Usuario: profesor
 *   Contraseña: javascript
 *
 *   * El usuario es incorrecto.
 *   * No es necesario comprobar la contraseña.
 *   * Resultado: "Usuario incorrecto".
 *

 * EVENTO A UTILIZAR:
 * - El formulario se mantiene para agrupar los controles.
 * - El botón es de tipo 'button'.
 * - Escuchar el evento 'click' del botón con id 'btnEntrar'.
 * - No es necesario utilizar preventDefault().
 * PASOS A REALIZAR:
 *
 * - 1 PASO: Declarar e inicializar:
 *           * usuario
 *           * clave
 *           * mensaje
 *
 * - 2 PASO: Declarar las constantes:
 *           * USUARIO_CORRECTO = "alumno"
 *           * CLAVE_CORRECTA = "javascript"
 *
 * - 3 PASO: Crear las constantes al DOM para apuntar
 *           al botón #btnEntrar, usuario, clave y resultado.
 *
 * - 4 PASO: Escuchar el evento 'click' del botón #btnEntrar.
 *
 *
 * - 6 PASO: Obtener los valores escritos en usuario y clave.
 *
 * - 7 PASO: Comprobar primero el usuario:
 *
 *           * Si usuario es igual a USUARIO_CORRECTO:
 *
 *                 realizar un segundo 'if'.
 *
 *                 * Si clave es igual a CLAVE_CORRECTA:
 *                   mensaje = "Acceso permitido".
 *
 *                 * En caso contrario:
 *                   mensaje = "Contraseña incorrecta".
 *
 *           * En caso contrario:
 *             mensaje = "Usuario incorrecto".
 *
 * - 8 PASO: Mostrar el mensaje.
 */

// estructura programa

// declaracion de variables y constantes
let usuario = '';
let clave = '';
let mensaje = '';
const USUARIO_CORRECTO = 'alumno';
const CLAVE_CORRECTA = 'javascript';

// constantes al DOM
const btnEntrar = document.querySelector('#btnEntrar');
const inputUsuario = document.querySelector('#usuario');
const inputClave = document.querySelector('#clave');
const divResultado = document.querySelector('#resultado');

// gestion de eventos
// escuchar el evento click del botón
btnEntrar.addEventListener('click', function () {
    // entradas
    usuario = inputUsuario.value.trim();
    clave = inputClave.value;

    // procesamiento con if anidados
    if (usuario === USUARIO_CORRECTO) {
        if (clave === CLAVE_CORRECTA) {
            mensaje = 'Acceso permitido';
        } else {
            mensaje = 'Contraseña incorrecta';
        }
    } else {
        mensaje = 'Usuario incorrecto';
    }

    // salidas
    divResultado.textContent = mensaje;
});
