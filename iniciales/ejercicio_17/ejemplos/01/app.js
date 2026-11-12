// activo el setTimeout y almaceno el codigo del timeout en una constante
const idAlarma = setTimeout(() => {
    console.log('Hola')
}, 5000);

// coloco un boton para parar el timeout
const boton = document.querySelector('button');

boton.addEventListener('click', () => {
    clearTimeout(idAlarma);
});