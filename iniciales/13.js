/* 
    Pedir por teclado el ancho, alto y color de un rectangulo.
    Mostrar esos datos en los div correspondientes
    Colocar el div con id caja con el ancho, alto y color utilizando css
 */

// variables
let ancho=0,
    alto=0,
    color="";

// constantes

// constantes al DOM

const divCaja=document.querySelector('#caja');
const divAncho=document.querySelector('#ancho');
const divAlto=document.querySelector('#alto');
const divColor=document.querySelector('#color');

// entradas
ancho=prompt('Ingrese el ancho del rectángulo');
alto=prompt('Ingrese el alto del rectángulo');
color=prompt('Ingrese el color del rectángulo');

// procesamiento


// salidas
// colocar los valores en los divs
divAncho.textContent=ancho;
divAlto.textContent=alto;
divColor.textContent=color;

// colocar los estilos al divCaja
divCaja.style.width=`${ancho}px`
divCaja.style.height=alto+'px';
divCaja.style.backgroundColor=color;
