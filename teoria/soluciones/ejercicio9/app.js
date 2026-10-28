/* ==============================================================================
   EJERCICIO: La Megaburger (Array 1D)
   
   OBJETIVO:
   Igual que hicimos con el Tren de los Monstruos, vas a gestionar un array 
   unidimensional. 
   
   1. Captura el texto del ingrediente y añádelo al final del array usando el 
      método .push(). Quitar los espacios en blanco del ingrediente escrito con trim(). 
      Mostrar en la pantalla el contenido del array.

   2. Cuando el usuario pulse el botón de medir, debes leer la propiedad '.length' 
      del array para decirle cuántos pisos (elementos) tiene su hamburguesa.
      Mostrar la longitud en pantalla
   ============================================================================== */

const hamburguesa = ['🍞 Pan '];

const pantallaCocina = document.querySelector('#pantallaCocina');
const btnAnadir = document.querySelector('#btnAnadir');
const btnMedir = document.querySelector('#btnMedir');


btnAnadir.addEventListener('click', function () {
    const inputIngrediente = document.querySelector('#inputIngrediente');
    const ingrediente = inputIngrediente.value.trim();
    let mensaje = '';

    if (ingrediente != '') {
        mensaje = `Añadiendo ${ingrediente} a la hamburguesa...`;
        hamburguesa.push(ingrediente);
        inputIngrediente.value = '';
    } else {
        mensaje = '¡Escribe un ingrediente antes de añadirlo!';
    }

    pantallaCocina.innerHTML = `${mensaje}<br> Hamburguesa actual: ${hamburguesa.join(' + ')}`;

});

btnMedir.addEventListener('click', function () {
    const pisos = hamburguesa.length;
    pantallaCocina.textContent = `La hamburguesa tiene ${pisos} pisos`;
});