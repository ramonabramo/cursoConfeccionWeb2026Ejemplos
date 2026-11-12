let contador = 0;
let idIntervalo = null;


const salida = document.querySelector('output');
const botonIniciar = document.querySelector('#iniciar');
const botonParar = document.querySelector('#parar');
const botonReiniciar = document.querySelector('#reiniciar');

botonIniciar.addEventListener('click', () => {
    if (idIntervalo == null) {
        idIntervalo = setInterval(() => {
            contador++;
            salida.textContent = contador;
        }, 1000);
        botonIniciar.classList.add('ocultar');
        botonParar.classList.remove('ocultar');

    }
});

botonParar.addEventListener('click', () => {
    clearInterval(idIntervalo);
    idIntervalo = null;
    botonIniciar.classList.remove('ocultar');
    botonParar.classList.add('ocultar');
    botonReiniciar.classList.remove('ocultar');
});

botonReiniciar.addEventListener('click', () => {
    clearInterval(idIntervalo);
    idIntervalo = null;
    contador = 0;
    salida.textContent = contador;
    botonIniciar.classList.remove('ocultar');
    botonParar.classList.add('ocultar');
    botonReiniciar.classList.add('ocultar');
});