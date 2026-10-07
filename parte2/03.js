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
    let edad = 0;
    let nombre = '';
    let poblacion = '';

    // constantes al DOM

    // apunto a los li donde quiero escribir
    const nodoNombre = document.querySelector('#liNombre');
    const nodoEdad = document.querySelector('#liEdad');
    const nodoPoblacion = document.querySelector('#liPoblacion');

    // apunto a los input donde quiero leer
    const inputNombre = document.querySelector('#nombre');
    const inputEdad = document.querySelector('#edad');
    const inputPoblacion = document.querySelector('#poblacion');

    // entradas
    nombre = inputNombre.value;
    edad = inputEdad.value;
    poblacion = inputPoblacion.value;

    // procesamiento

    // salidas

    // en el li nombre quiero escribir el nombre que introduzca por teclado
    nodoNombre.innerHTML += nombre;
    // en el li edad quiero escribir la edad que introduzca por teclado
    nodoEdad.innerHTML += edad;
    // en el li poblacion quiero escribir la poblacion que introduzca por teclado
    nodoPoblacion.innerHTML += poblacion;

});