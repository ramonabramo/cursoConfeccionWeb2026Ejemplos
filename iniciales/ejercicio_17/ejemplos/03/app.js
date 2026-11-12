let contador = 0;
let idIntervalo = null;
let ejecutandose = false;


const salida = document.querySelector('output');
const botonIniciar = document.querySelector('#iniciar');
const botonParar = document.querySelector('#parar');

botonIniciar.addEventListener('click', () => {
    if (ejecutandose == false) {
        idIntervalo = setInterval(() => {
            ejecutandose = true;
            contador++;
            salida.textContent = contador;
        }, 1000);
    }
});

botonParar.addEventListener('click', () => {
    clearInterval(idIntervalo);

    ejecutandose = false;
});