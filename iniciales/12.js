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

// constantes al DOM
const divSalida = document.querySelector('#salida');

// entradas
lado1 = Number(prompt('Introduce el lado 1'));
lado2 = Number(prompt('Introduce el lado 2'));
// procesamiento

area = lado1 * lado2;
perimetro = 2 * lado1 + 2 * lado2;

// salidas
divSalida.innerHTML = `
<ul>
<li>Lado 1: ${lado1}</li>
<li>Lado 2: ${lado2}</li>
<li>Area: ${area}</li>
<li>Perimetro: ${perimetro}</li>
</ul>
`;