/**
 * Igual que el ejercicio anterior pero quiero mantener todos
 * los datos metidos de forma persistente (en disco)
 * Para eso voy a utilizar LocalStorage (API)
 * 
 */

const funciones = {
    selector: 'tbody',

    render(trabajador) {
        const tabla = document.querySelector(this.selector);
        tabla.innerHTML += `
        <tr>
        <td>${trabajador.id}</td>
        <td>${trabajador.nombre}</td>
        <td>${trabajador.habilidad}</td>
        </tr>
    `;

    },

    limpiarTabla() {
        const tabla = document.querySelector(this.selector);
        tabla.innerHTML = '';
    }

}


// tengo que comprobar si anteriormente he metido trabajadores o tengo que crear una rray vacio

// recupero los trabajadores pero solo sus propiedades
const trabajadores = JSON.parse(localStorage.getItem('claveTrabajadores')) || [];


const inputId = document.querySelector('#id');
const inputNombre = document.querySelector('#nombre');
const inputHabilidad = document.querySelector('#habilidad');

const botonGuardar = document.querySelector('#guardar');
const botonListar = document.querySelector('#listar');
const botonEliminarTodo = document.querySelector('#eliminarTodo');

botonGuardar.addEventListener('click', () => {
    const trabajador = {
        id: '',
        nombre: '',
        habilidad: '',
    };

    // meto los datos al objeto
    trabajador.id = inputId.value;
    trabajador.nombre = inputNombre.value;
    trabajador.habilidad = inputHabilidad.value;
    // guardo el objeto en el array
    trabajadores.push(trabajador);

    // te añado todos los trabajadores al localStorage
    localStorage.setItem('claveTrabajadores', JSON.stringify(trabajadores));

    // limpiar la tabla
    funciones.limpiarTabla();

    // muestro el trabajador guardado
    funciones.render(trabajador);

});

botonListar.addEventListener('click', () => {
    // limpio la tabla
    funciones.limpiarTabla();

    trabajadores.forEach(trabajador => {
        funciones.render(trabajador);
    })
});


botonEliminarTodo.addEventListener('click', () => {
    localStorage.removeItem('claveTrabajadores');
    trabajadores.length = 0;
    funciones.limpiarTabla();
});




