let contador = 0;
let idIntervalo = null;


const salida = document.querySelector('output');
const botonIniciar = document.querySelector('#iniciar');
const botonParar = document.querySelector('#parar');

botonIniciar.addEventListener('click', () => {
    if (idIntervalo == null) {
        idIntervalo = setInterval(() => {
            contador++;
            salida.textContent = contador;
        }, 1000);
    }
});

botonParar.addEventListener('click', () => {
    clearInterval(idIntervalo);
    idIntervalo = null;
});