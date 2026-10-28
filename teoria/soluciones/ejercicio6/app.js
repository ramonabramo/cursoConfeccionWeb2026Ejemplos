// creo un array para los numeros
const numeros = [];


// gestion de eventos
// constantes al DOM que quiero escuchar
const boton = document.querySelector('button');

// colocar escuchador
boton.addEventListener('click', function () {

    let suma = 0; // acumulador

    const divResultado = document.querySelector('#resultados');
    const spanListaNumeros = document.querySelector('#lista-numeros');
    const spanSumaTotal = document.querySelector('#suma-total');
    const inputNumero = document.querySelector('#numero');
    const numero = inputNumero.value;
    // meto en el array ese numero
    numeros.push(Number(numero));

    // quitarle la clase oculto
    divResultado.classList.remove('oculto');

    // añadirle la clas con-datos
    divResultado.classList.add('con-datos');

    // mostrar el array como si fuera un texto
    spanListaNumeros.textContent = numeros;

    // sumar los numeros
    for (let indice = 0; indice < numeros.length; indice++) {
        suma += numeros[indice];
        // suma = suma + numeros[indice];
    }

    // mostramos la suma 
    spanSumaTotal.textContent = suma;

});