/*
Pedir el nombre de usuario
Mostrar el nombre de usuario tal como se escriba en el div nombre
Mostrar el nombre de usuario sin espacios en blanco por delante y por detras y en minusculas
en el div salida

*/

// variables
let nombreUsuario = '';
let salida = '';


// constantes

// constantes al DOM
const nodoNombre = document.querySelector('#nombre');
const nodoSalida = document.querySelector('#salida');

// entradas
nombreUsuario = prompt('Ingrese su nombre de usuario'); 

// procesamiento
salida = nombreUsuario.trim().toLowerCase(); 

// salidas

nodoSalida.textContent = salida;
nodoNombre.textContent = nombreUsuario;





