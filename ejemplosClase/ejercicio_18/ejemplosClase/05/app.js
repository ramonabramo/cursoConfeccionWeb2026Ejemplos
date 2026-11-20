
const utilidades = {
    destino: document.querySelector('#lista'),
    claveGuardado: 'alumnosClave',

    render(alumno) {
        this.destino.innerHTML += `
            <li class="registro">
            <span class="dato">${alumno.nombre}</span>
            <span class="dato">${alumno.nota}</span>
            </li>`;
    },


    renderDinamico(alumno) {
        const li = document.createElement("li");
        const spanNombre = document.createElement("span");
        const spanNota = document.createElement("span");
        spanNombre.textContent = alumno.nombre;
        spanNota.textContent = alumno.nota;
        spanNota.classList.add('dato');
        spanNombre.classList.add('dato');
        li.classList.add("alumno");
        li.appendChild(spanNombre);
        li.appendChild(spanNota);
        this.destino.appendChild(li);
    },

    renderTodos(alumnos) {
        this.limpiar();
        alumnos.forEach(alumno => {
            this.renderDinamico(alumno);
        });
    },

    limpiar() {
        this.destino.innerHTML = '';
    },
    almacenar(alumnos) {
        localStorage.setItem(this.claveGuardado, JSON.stringify(alumnos));
    },
    recuperar() {
        return JSON.parse(localStorage.getItem(this.claveGuardado));
    },
    borrarTodo() {
        localStorage.removeItem(this.claveGuardado);
        this.limpiar();
    }


}

// este es otro HELPER mucho mas versatil
const utilidadesVersatil = {
    destino: document.querySelector('#lista'),
    campos: ['nombre', 'nota'],
    claveGuardado: 'alumnosClave',


    render(registro) {
        this.destino.innerHTML += `
            <li class="registro">
            this.campos.forEach((nombreCampos)=>{
                <span class="dato">${registro[nombreCampo]}</span>
            });
            </li>`;
    },


    renderDinamico(registro) {
        const li = document.createElement("li");
        this.campos.forEach((nombreCampo) => {
            const spanDato = document.createElement('span');
            spanDato.textContent = registro[nombreCampo];
            spanDato.classList.add('dato');
            li.appendChild(spanDato);
        });
        li.classList.add("registro");
        this.destino.appendChild(li);
    },

    renderTodos(registros) {
        this.limpiar();
        registros.forEach(registro => {
            this.renderDinamico(registro);
        });
    },

    limpiar() {
        this.destino.innerHTML = '';
    },

    almacenar(registros) {
        localStorage.setItem(this.claveGuardado, JSON.stringify(registros));
    },

    recuperar() {
        return JSON.parse(localStorage.getItem(this.claveGuardado));
    },

    borrarTodo() {
        localStorage.removeItem(this.claveGuardado);
        this.limpiar();
    }
}

const alumnos = utilidadesVersatil.recuperar() || [];
const formulario = document.querySelector('form');

const botonListar = document.querySelector('#botonListar');
const botonLimpiar = document.querySelector('#botonLimpiar');

const inputNombre = document.querySelector('#nombre');
const inputNota = document.querySelector('#nota');



// controlar el guardado del dato
// el boton pulsado es el de guardar que es el de tipo submit
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const alumno = {
        nombre: inputNombre.value,
        nota: inputNota.value
    };

    // limpiando la salida
    utilidadesVersatil.limpiar();
    // muestro en la salida el dato a guardar
    utilidadesVersatil.renderDinamico(alumno);
    // añado ese dato al array de alumnos
    alumnos.push(alumno);
    // borro el formulario
    formulario.reset();

    // guardo el array de forma permanente
    utilidadesVersatil.almacenar(alumnos);

});

botonListar.addEventListener('click', () => {
    utilidadesVersatil.renderTodos(alumnos);
});

botonLimpiar.addEventListener('click', (e) => {
    utilidadesVersatil.borrarTodo();
    alumnos.length = 0;
});






