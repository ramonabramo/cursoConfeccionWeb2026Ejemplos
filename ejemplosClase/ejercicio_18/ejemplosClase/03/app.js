function render() {

}

const trabajadores = [];

const inputId = document.querySelector('#id');
const inputNombre = document.querySelector('#nombre');
const inputHabilidad = document.querySelector('#habilidad');

const botonGuardar = document.querySelector('#guardar');

botonGuardar.addEventListener('click', () => {
    const trabajador = {
        id: '',
        nombre: '',
        habilidad: ''
    };

    trabajador.id = inputId.value;
    trabajador.nombre = inputNombre.value;
    trabajador.habilidad = inputHabilidad.value;
    trabajadores.push(trabajador);

});


