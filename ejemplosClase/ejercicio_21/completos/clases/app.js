// Nuestro "Archivero Especialista" (El gestor CRUD)
class Datos {
    constructor() {
        this.claveStorage = 'registroPersonasPro';
        this.listaPersonas = [];
        this.cargarDatos(); // Al nacer, el archivero saca las cajas del trastero
    }

    // Método privado para persistir en disco
    _sincronizarStorage() {
        const datosString = JSON.stringify(this.listaPersonas);
        localStorage.setItem(this.claveStorage, datosString);
    }

    // --- MÉTODOS PÚBLICOS ---

    cargarDatos() {
        const datosAlmacenados = localStorage.getItem(this.claveStorage);

        if (datosAlmacenados) {
            this.listaPersonas = JSON.parse(datosAlmacenados);
        } else {
            this.listaPersonas = [];
        }

        return this.listaPersonas;
    }

    obtenerTodos() {
        return this.listaPersonas;
    }

    obtenerUno(idFiltro) {
        return this.listaPersonas.find((p) => p.id === idFiltro) || null;
    }

    // ¡CAMBIO CLAVE! 
    // Guardar ahora recibe los "ingredientes" sueltos, no el objeto ya hecho.
    // El ID tiene un valor por defecto (null) para saber si es un alta nueva.
    guardar(nombreInput, edadInput, idExistente = null) {
        // constantes y variables locales
        let objetoLiteralCreado = {};
        let idFinal = 0;
        let indice = -1;

        // procesamiento
        // 1. Decidimos qué ID usar (el que nos pasan o uno nuevo generado)
        idFinal = idExistente !== null ? idExistente : Date.now();

        // 2. FABRICAMOS la "caja de cartón" (el objeto literal) internamente
        objetoLiteralCreado = {
            id: idFinal,
            nombre: nombreInput,
            edad: edadInput
        };

        // 3. Decidimos si actualizamos o insertamos
        indice = this.listaPersonas.findIndex((p) => p.id === idFinal);

        if (indice !== -1) {
            this.listaPersonas[indice] = objetoLiteralCreado; // Update
        } else {
            this.listaPersonas.push(objetoLiteralCreado); // Create
        }

        // 4. Guardamos en el trastero
        this._sincronizarStorage();
    }

    eliminar(idFiltro) {
        this.listaPersonas = this.listaPersonas.filter((p) => p.id !== idFiltro);
        this._sincronizarStorage();
    }

    purgar() {
        this.listaPersonas = [];
        localStorage.removeItem(this.claveStorage);
    }
}

// funciones (Para la Vista / DOM)
const pintarResultados = (contenedorLista) => {
    // constantes y variables locales
    let htmlAcumulado = '';
    let datosActuales = [];

    // constantes al DOM

    // entradas
    datosActuales = gestorDatos.obtenerTodos();

    // procesamiento
    datosActuales.forEach((persona) => {
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
const gestorDatos = new Datos();
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
    pintarResultados(lista);
});

btnAccionPrincipal.addEventListener('click', () => {
    // constantes y variables locales

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

        // ¡MIRA QUÉ LIMPIO QUEDA ESTO AHORA!
        // Le pasamos los "ingredientes" al archivero, y él se apañará en su cocina.
        gestorDatos.guardar(valorNombre, valorEdad, idEnEdicion);

        // salidas
        panelUltimo.classList.remove('oculto');
        parrafoUltimo.innerHTML = `<strong>${valorNombre}</strong><br>Edad: ${valorEdad}`;

        // Reseteamos el estado de edición después de guardar
        idEnEdicion = null;
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
    gestorDatos.purgar();

    // salidas
    pintarResultados(lista);
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
        gestorDatos.eliminar(idSeleccionado);
        pintarResultados(ulListaResultados);
    }

    if (evento.target.classList.contains('btn-editar')) {
        idSeleccionado = Number(evento.target.dataset.id);
        objetoEncontrado = gestorDatos.obtenerUno(idSeleccionado);

        if (objetoEncontrado) {
            txtNombre.value = objetoEncontrado.nombre;
            numEdad.value = objetoEncontrado.edad;
            idEnEdicion = idSeleccionado;
            botonPrincipal.textContent = 'Actualizar Registro';
        }
    }
});