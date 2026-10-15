// estructura programa

// declaracion de variables y constantes
let numero1 = 0;
let numero2 = 0;
let numero3 = 0;
let mensaje = '';

// constantes al DOM
const divSalida = document.querySelector('#salida');

// gestion de eventos
// constantes al DOM que queremos escuchar
// colocar escuchadores de eventos

// entradas
numero1 = Number(prompt('Introduce el primer número'));
numero2 = Number(prompt('Introduce el segundo número'));
numero3 = Number(prompt('Introduce el tercer número'));

// procesamiento
if (numero1 == numero2 && numero1 == numero3) {
    mensaje = 'Los tres números son iguales (' + numero1 + ')';
} else if (numero1 >= numero2 && numero1 >= numero3) {
    mensaje = 'El número mayor es ' + numero1;
} else if (numero2 >= numero1 && numero2 >= numero3) {
    mensaje = 'El número mayor es ' + numero2;
} else {
    mensaje = 'El número mayor es ' + numero3;
}

// salidas
divSalida.textContent = mensaje;