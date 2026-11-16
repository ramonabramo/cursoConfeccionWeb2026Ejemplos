const trabajadores = [];

const inputId = document.querySelector('#id');
const inputNombre = document.querySelector('#nombre');
const inputHabilidad = document.querySelector('#habilidad');

const botonGuardar = document.querySelector('#guardar');

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

    trabajador.id = inputId.value;
    trabajador.nombre = inputNombre.value;
    trabajador.habilidad = inputHabilidad.value;
    trabajadores.push(trabajador);
    trabajador.render('tbody');

});


