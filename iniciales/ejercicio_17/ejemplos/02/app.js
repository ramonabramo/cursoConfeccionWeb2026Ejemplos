// colocamos un interval

const idReloj = setInterval(() => {
    console.log("tic tac");
}, 2000);


// coloco un boton para detener el interval
const boton = document.querySelector('button');

boton.addEventListener('click', () => {
    clearInterval(idReloj);
});