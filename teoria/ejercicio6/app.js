// creo un array para los numeros
const numeros = [];

// gestion de eventos
// constantes al DOM que quiero escuchar
const boton = document.querySelector('button');

// colocar escuchador
boton.addEventListener('click', function () {

    const inputNumero = document.querySelector('#numero');
    const numero = inputNumero.value;
    // meto en el array ese numero
    numeros.push(numero);
});