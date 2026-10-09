/**
 * Metemos el radio de una circunferencia en un input y calculamos
 * el area y el perimetro de la circunferencia de radio dado
 * 
 * Ese area y ese perimetro lo escribimos en los span salida 
 * ademas tambien colocamos el radio
 * 
 */

// estructura del programa principal

// declaracion de variables y constantes globales

// gestion de eventos

// constantes al DOM
// solo apuntamos a los elementos que queramos colocar escuchador

const boton = document.querySelector('button');

// colocar escuchadores de eventos
boton.addEventListener('click', function () {
    // estructura del programa

    // declaracion de variables y constantes
    let radio = 0.0;
    let area = 0.0;
    let perimetro = 0.0;

    // constantes al DOM
    const inputRadio = document.querySelector('#radio');
    const spanRadio = document.querySelector('#radioSalida');
    const spanArea = document.querySelector('#area');
    const spanPerimetro = document.querySelector('#perimetro');
    const circulo = document.querySelector('#circulo');

    // entradas
    radio = Number(inputRadio.value);

    // procesamiento

    area = Math.PI * radio ** 2;
    perimetro = 2 * Math.PI * radio;

    // salidas

    spanRadio.innerHTML = radio;
    spanArea.innerHTML = area;
    spanPerimetro.innerHTML = perimetro;
    circulo.setAttribute('r', radio);
});