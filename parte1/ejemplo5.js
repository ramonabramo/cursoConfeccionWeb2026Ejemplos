// variables
// let nombre = '';
// let poblacion = '';
// let edad = 0;

// constantes
const datos = {
    nombre: '',
    poblacion: '',
    edad: 0
};

// constantes DOM
const nodoNombre = document.querySelector('#nombre');
const nodoPoblacion = document.querySelector('#poblacion');
const nodoEdad = document.querySelector('#edad');

// entradas
datos.nombre = nodoNombre.textContent;
datos.poblacion = nodoPoblacion.textContent;
datos.edad = nodoEdad.textContent;

// procesamiento

// salidas
console.log(`Nombre: ${datos.nombre} Edad: ${datos.edad} Poblacion: ${datos.poblacion}`);
