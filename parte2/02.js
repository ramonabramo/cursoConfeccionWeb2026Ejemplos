// estructura del programa principal

// declaracion de variables y constantes globales



// constantes al DOM
// solo apuntamos a los elementos que queramos colocar escuchador
const boton = document.querySelector('button');

// colocar escuchadores de eventos
boton.addEventListener('click', function () {

    // en esta zona tengo que colocar lo que quiero que haga el programa cuando pulso el boton

    // estructura del programa

    // declaracion de variables y constantes
    let edad = 0;

    // constantes al DOM
    const nodoSalida = document.querySelector('#salida');
    const inputEdad = document.querySelector('#edad');

    // entradas
    edad = inputEdad.value;

    // procesamiento

    // salidas
    nodoSalida.innerHTML = edad;

});

// entradas


// procesamiento

// salidas

