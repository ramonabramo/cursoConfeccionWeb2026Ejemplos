// Calcular la potencia de un número
// 1- pedir numero por teclado (base)
// 2- pedir exponente por teclado
// 3- calcular la potencia (resultado)
// 4- mostrar cada uno de los valores en los span correspondientes

/* ejemplo de salida
    base: 2
    exponente: 3
    resultado: 2**3 = 8
*/

// variables
let base = 0;
let exponente = 0;
let resultado = 0;

// constantes

// constantes al DOM
const spanBase = document.querySelector('#base');
const spanExponente = document.querySelector('#exponente');
const spanResultado = document.querySelector('#resultado');

// entradas
base = Number(prompt("Introduce la base"));
exponente = Number(prompt('Introduce el exponente'));

// procesamiento
resultado = base ** exponente;

// salidas
spanBase.textContent = base;
spanExponente.textContent = exponente;
// spanResultado.textContent = resultado;
spanResultado.textContent = `${base} ** ${exponente} = ${resultado}`;