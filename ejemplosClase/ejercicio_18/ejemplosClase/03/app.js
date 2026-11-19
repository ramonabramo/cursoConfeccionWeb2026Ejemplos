const trabajadores = [];

const inputId = document.querySelector('#id');
const inputNombre = document.querySelector('#nombre');
const inputHabilidad = document.querySelector('#habilidad');

const botonGuardar = document.querySelector('#guardar');
const botonListar = document.querySelector('#listar');

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


