/**
 * Igual que el ejercicio anterior pero quiero mantener todos
 * los datos metidos de forma persistente (en disco)
 * Para eso voy a utilizar LocalStorage (API)
 * 
 */

// tengo que comprobar si anteriormente he metido trabajadores o tengo que crear una rray vacio



// creo un array vacio de trabajadores
const trabajadores = [];


// recupero los trabajadores pero solo sus propiedades
const trabajadoresRecuperadores = JSON.parse(localStorage.getItem('claveTrabajadores')) || [];

// asigno los trabajadores recuperados al array creando un trabajador con los metodos completos
trabajadoresRecuperadores.forEach(trabajadorRecuperado => {
    const trabajador = {
        id: trabajadorRecuperado.id,
        nombre: trabajadorRecuperado.nombre,
        habilidad: trabajadorRecuperado.habilidad,
        render(selector) {
            const tabla = document.querySelector(selector);
            tabla.innerHTML += `
                <tr>
                <td>${this.id}</td>
                <td>${this.nombre}</td>
                <td>${this.habilidad}</td>
                </tr>
            `;
        }
    };
    trabajadores.push(trabajador);
});

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
        render(selector) {
            const tabla = document.querySelector(selector);
            tabla.innerHTML += `
                <tr>
                <td>${this.id}</td>
                <td>${this.nombre}</td>
                <td>${this.habilidad}</td>
                </tr>
            `;

        }
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
    const tabla = document.querySelector('tbody');
    tabla.innerHTML = '';
    // muestro el trabajador guardado
    trabajador.render('tbody');

});

botonListar.addEventListener('click', () => {
    // limpio la tabla
    const tabla = document.querySelector('tbody');
    tabla.innerHTML = '';

    trabajadores.forEach(trabajador => {
        trabajador.render('tbody');
    })
});

botonEliminarTodo.addEventListener('click', () => {
    localStorage.removeItem('claveTrabajadores');
    trabajadores.length = 0;
    // limpio la tabla
    const tabla = document.querySelector('tbody');
    tabla.innerHTML = '';
});






