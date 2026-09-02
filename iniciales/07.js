// pedir por teclado el radio de un circulo y calcular el area de ese circulo
// mostrar el radio y el area calculada en los span correspondientes

// para calcular el area
// area = Math.PI * radio ** 2;
// area = Math.PI * Math.pow(radio, 2);

// variables
let area = 0.0;
let radio = 0.0;

// constantes

// apuntar al dom
const spanRadio = document.querySelector('#radio');
const spanArea = document.querySelector('#area');

// entradas
radio = Number(prompt('Introduce el radio'));

// procesamiento
area = Math.PI * radio ** 2;

// salidas
spanRadio.innerHTML = radio;
spanArea.innerHTML = area;
