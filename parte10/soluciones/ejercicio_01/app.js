// ==========================================================================
// EJERCICIO 01 (Guiado): Objetos Literales, Propiedades y Métodos (this)
// OBJETIVO: Crear un objeto literal, manipularlo con punto/corchetes e invocar métodos con this.
// ==========================================================================

// 1. variables y constantes de estado
const usuario = {
    nombre: 'Carlos Ruiz',
    rol: 'Frontend Developer',
    experienciaAnos: 4,
    activo: true,

    // Método que utiliza 'this' para referenciar las propiedades del propio objeto
    saludar() {
        return `👋 ¡Hola! Soy ${this.nombre}, trabajo como ${this.rol} y llevo ${this.experienciaAnos} años en el sector.`;
    },

    obtenerFichaTecnica() {
        return `[FICHA] ${this.nombre} | Rol: ${this.rol} | Experiencia: ${this.experienciaAnos} años | Estado: ${this.activo ? 'DISPONIBLE' : 'NO DISPONIBLE'}`;
    }
};

// 2. constantes al DOM
const inputNombre = document.querySelector('#inputNombre');
const selectRol = document.querySelector('#selectRol');
const inputAnos = document.querySelector('#inputAnos');

const avatarVisual = document.querySelector('#avatarVisual');
const nombreVisual = document.querySelector('#nombreVisual');
const rolVisual = document.querySelector('#rolVisual');
const experienciaVisual = document.querySelector('#experienciaVisual');
const estadoVisual = document.querySelector('#estadoVisual');

const btnActualizar = document.querySelector('#btnActualizar');
const btnInvocarMetodo = document.querySelector('#btnInvocarMetodo');
const btnToggleEstado = document.querySelector('#btnToggleEstado');
const resultado = document.querySelector('#resultado');

// 3. funciones auxiliares
function renderizarTarjeta() {
    // Acceso mediante notación de punto
    nombreVisual.textContent = usuario.nombre;
    experienciaVisual.textContent = `${usuario.experienciaAnos} años de experiencia`;

    // Acceso mediante notación de corchetes
    rolVisual.textContent = usuario['rol'];

    // Actualizar badges y avatar
    if (usuario.activo) {
        estadoVisual.textContent = 'DISPONIBLE';
        estadoVisual.className = 'badge-estado badge-activo';
    } else {
        estadoVisual.textContent = 'NO DISPONIBLE';
        estadoVisual.className = 'badge-estado badge-inactivo';
    }

    if (usuario['rol'].includes('Lead')) {
        avatarVisual.textContent = '👔';
    } else if (usuario['rol'].includes('Designer')) {
        avatarVisual.textContent = '🎨';
    } else {
        avatarVisual.textContent = '👨‍💻';
    }
}

function actualizarDatosDesdeFormulario() {
    // 1. Notación de punto para mutar una propiedad
    usuario.nombre = inputNombre.value.trim() || 'Anónimo';

    // 2. Notación de corchetes con clave dinámica
    const claveRol = 'rol';
    usuario[claveRol] = selectRol.value;

    usuario.experienciaAnos = Number(inputAnos.value);

    renderizarTarjeta();

    resultado.textContent = `✅ Objeto 'usuario' actualizado: ${usuario.obtenerFichaTecnica()}`;
    resultado.className = 'resultado alerta-exito';
}

function alternarDisponibilidad() {
    usuario.activo = !usuario.activo;
    renderizarTarjeta();

    resultado.textContent = `🔄 Estado de disponibilidad cambiado a: ${usuario.activo ? 'DISPONIBLE' : 'NO DISPONIBLE'}`;
    resultado.className = 'resultado alerta-espera';
}

// 4. funciones de eventos
function alPulsarActualizar() {
    actualizarDatosDesdeFormulario();
}

function alPulsarInvocarMetodo() {
    // Invocamos el método del objeto con la sintaxis objeto.metodo()
    const mensaje = usuario.saludar();
    resultado.textContent = mensaje;
    resultado.className = 'resultado alerta-exito';
}

function alPulsarToggle() {
    alternarDisponibilidad();
}

// 5. escuchadores de eventos (addEventListener)
btnActualizar.addEventListener('click', alPulsarActualizar);
btnInvocarMetodo.addEventListener('click', alPulsarInvocarMetodo);
btnToggleEstado.addEventListener('click', alPulsarToggle);

// Inicializar la interfaz con los datos del objeto
renderizarTarjeta();
