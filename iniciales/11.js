// calcular el area y el perimetro de un rectangulo
// 1- Pedir el lado1
// 2- Pedir el lado2
// 3- Calcular el area
// 4- Calcular el perimetro

/*
Ejemplo de funcionamiento
lado1=20
lado2=5
area=lado1*lado2
perimetro=2*lado1+2*lado2
*/

// variables
let lado1 = 0;
let lado2 = 0;
let area = 0;
let perimetro = 0;

// constantes

// constantes al DOM
const spanLado1 = document.querySelector('#lado1');
const spanLado2 = document.querySelector('#lado2');
const spanArea = document.querySelector('#area');
const spanPerimetro = document.querySelector('#perimetro');

// entradas
lado1 = Number(prompt('Introduce el lado 1'));
lado2 = Number(prompt('Introduce el lado 2'));

// procesamiento
area = lado1 * lado2;
perimetro = 2 * lado1 + 2 * lado2;

// salidas
spanLado1.textContent = lado1;
spanLado2.textContent = lado2;
spanArea.textContent = area;
spanPerimetro.textContent = perimetro;