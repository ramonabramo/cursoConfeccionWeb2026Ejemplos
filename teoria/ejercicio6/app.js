// creo un array para los numeros
const numeros = [];


// gestion de eventos
// constantes al DOM que quiero escuchar
const boton = document.querySelector('button');

// colocar escuchador
boton.addEventListener('click', function () {

    const divResultado = document.querySelector('#resultados');
    const inputNumero = document.querySelector('#numero');
    const numero = inputNumero.value;
    // meto en el array ese numero
    numeros.push(numero);

    divResultado.classList.remove('oculto');
    divResultado.classList.add('con-datos');
    divResultado.textContent = numeros;


});