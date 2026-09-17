/*
 quiero que al div salida
 le coloque las propiedades de css del objeto propiedades
 */

// variables

// constantes
const propiedades = {
    ancho: 300,
    alto: 100,
    fondo: 'blue',
    colorLetra: 'white'
};

// constantes al DOM
const nodoSalida=document.querySelector('#salida');

// entradas

// procesamiento

// salidas

// chuleta
// para cambiar las propiedades a un elemento de html
// nodoElemento.style.propiedad = valorNuevo;

nodoSalida.style.width=`${propiedades.ancho}px`;
// nodoSalida.style.width=propiedades.ancho + 'px';
nodoSalida.style.height=`${propiedades.alto}px`;
// nodoSalida.style.height=propiedades.alto + 'px';
nodoSalida.style.backgroundColor=propiedades.fondo;
nodoSalida.style.color=propiedades.colorLetra;