// funciones
const cargarDatosStorage = (contenedorLista) => {
    // constantes y variables locales
    let datosAlmacenadosStr = '';

    // constantes al DOM

    // entradas
    datosAlmacenadosStr = localStorage.getItem('registroPersonas');

    // procesamiento
    if (datosAlmacenadosStr) {
        listaGlobalPersonas = JSON.parse(datosAlmacenadosStr);
    } else {
        listaGlobalPersonas = [];
    }

    // salidas
    pintarResultados(contenedorLista);
};

const guardarEnStorage = () => {
    // constantes y variables locales
    let arrayConvertidoAString = '';

    // constantes al DOM

    // entradas

    // procesamiento
    arrayConvertidoAString = JSON.stringify(listaGlobalPersonas);

    // salidas
    localStorage.setItem('registroPersonas', arrayConvertidoAString);
};

const pintarResultados = (contenedorLista) => {
    // constantes y variables locales
    let htmlAcumulado = '';

    // constantes al DOM

    // entradas

    // procesamiento
    listaGlobalPersonas.forEach((persona) => {
        htmlAcumulado += `
            <li>
                <span><strong>${persona.nombre}</strong> (Edad: ${persona.edad})</span>
                <div class="acciones">
                    <button class="btn-editar" data-id="${persona.id}">Editar</button>
                    <button class="btn-eliminar" data-id="${persona.id}">Eliminar</button>
                </div>
            </li>`;
    });

    // salidas
    contenedorLista.innerHTML = htmlAcumulado;
};

// variables y constantes globales
let listaGlobalPersonas = [];
let idEnEdicion = null;

// constantes al DOM

// eventos
// constantes para apuntar a los elementos del dom que quiero controlar los eventos
const btnAccionPrincipal = document.querySelector('#btnAccionPrincipal');
const btnBorrarTodos = document.querySelector('#btnBorrarTodos');
const ulListaResultados = document.querySelector('#listaResultados');

// colocar escuchadores con addeventlistener. si el evento solo es para un elemento directamente con funcion anonima en caso de que se utilice para varios elementos lo mismo utilizar funcion declarada
window.addEventListener('DOMContentLoaded', () => {
    // constantes y variables locales

    // constantes al DOM
    const lista = document.querySelector('#listaResultados');

    // entradas

    // procesamiento

    // salidas
    cargarDatosStorage(lista);
});

btnAccionPrincipal.addEventListener('click', () => {
    // constantes y variables locales
    let nuevoObjetoPersona = {};
    let indiceEdicion = -1;

    // constantes al DOM
    const txtNombre = document.querySelector('#txtNombre');
    const numEdad = document.querySelector('#numEdad');
    const lista = document.querySelector('#listaResultados');
    const panelUltimo = document.querySelector('#panelUltimo');
    const parrafoUltimo = document.querySelector('#parrafoUltimo');

    // entradas
    const valorNombre = txtNombre.value.trim();
    const valorEdad = Number(numEdad.value);

    // procesamiento
    if (valorNombre !== '' && valorEdad > 0) {

        if (idEnEdicion === null) {
            nuevoObjetoPersona = {
                id: Date.now(),
                nombre: valorNombre,
                edad: valorEdad
            };
            listaGlobalPersonas.push(nuevoObjetoPersona);
        } else {
            indiceEdicion = listaGlobalPersonas.findIndex((p) => p.id === idEnEdicion);
            if (indiceEdicion !== -1) {
                listaGlobalPersonas[indiceEdicion].nombre = valorNombre;
                listaGlobalPersonas[indiceEdicion].edad = valorEdad;
            }
            idEnEdicion = null;
        }

        guardarEnStorage();

        // salidas: Mostramos el panel lateral (quitando la clase oculto) e inyectamos el dato
        panelUltimo.classList.remove('oculto');
        parrafoUltimo.innerHTML = `<strong>${valorNombre}</strong><br>Edad: ${valorEdad}`;
    }

    // salidas
    pintarResultados(lista);
    txtNombre.value = '';
    numEdad.value = '';
    btnAccionPrincipal.textContent = 'Añadir y Guardar';
});

btnBorrarTodos.addEventListener('click', () => {
    // constantes y variables locales

    // constantes al DOM
    const lista = document.querySelector('#listaResultados');
    const panelUltimo = document.querySelector('#panelUltimo');

    // entradas

    // procesamiento
    listaGlobalPersonas = [];

    // salidas
    localStorage.removeItem('registroPersonas');
    pintarResultados(lista);

    // Escondemos el panel del último dato porque ya no hay nada
    panelUltimo.classList.add('oculto');
});

ulListaResultados.addEventListener('click', (evento) => {
    // constantes y variables locales
    let idSeleccionado = 0;
    let objetoEncontrado = null;

    // constantes al DOM
    const txtNombre = document.querySelector('#txtNombre');
    const numEdad = document.querySelector('#numEdad');
    const botonPrincipal = document.querySelector('#btnAccionPrincipal');

    // entradas
    // Procesamiento y salidas
    if (evento.target.classList.contains('btn-eliminar')) {
        idSeleccionado = Number(evento.target.dataset.id);
        listaGlobalPersonas = listaGlobalPersonas.filter((p) => p.id !== idSeleccionado);
        guardarEnStorage();
        pintarResultados(ulListaResultados);
    }

    if (evento.target.classList.contains('btn-editar')) {
        idSeleccionado = Number(evento.target.dataset.id);
        objetoEncontrado = listaGlobalPersonas.find((p) => p.id === idSeleccionado);

        if (objetoEncontrado) {
            txtNombre.value = objetoEncontrado.nombre;
            numEdad.value = objetoEncontrado.edad;
            idEnEdicion = idSeleccionado;
            botonPrincipal.textContent = 'Actualizar Registro';
        }
    }
});