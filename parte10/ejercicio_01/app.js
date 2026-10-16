// ==========================================================================
// EJERCICIO 01 (Guiado): Objetos Literales, Propiedades y Métodos (this)
// OBJETIVO: Crear un objeto literal, manipularlo con punto/corchetes e invocar métodos con this.
// ==========================================================================

// 1. variables y constantes de estado
// - Objeto literal 'usuario' con:
//     * nombre: 'Carlos Ruiz'
//     * rol: 'Frontend Developer'
//     * experienciaAnos: 4
//     * activo: true
//     * saludar(): devuelve un saludo usando this.nombre y this.rol
//     * obtenerFichaTecnica(): devuelve un resumen de todos sus campos con this

// 2. constantes al DOM
// - Campos del formulario: #inputNombre, #selectRol, #inputAnos
// - Elementos visuales de la tarjeta: #avatarVisual, #nombreVisual, #rolVisual, #experienciaVisual, #estadoVisual
// - Botones: #btnActualizar, #btnInvocarMetodo, #btnToggleEstado
// - Div resultado: #resultado

// 3. funciones auxiliares
// - function renderizarTarjeta():
//     * Pinta en el DOM los datos extraídos de usuario.nombre, usuario['rol'], etc.
// - function actualizarDatosDesdeFormulario():
//     * Lee los inputs y modifica el objeto: usuario.nombre = ..., usuario['rol'] = ...
//     * Llama a renderizarTarjeta()
// - function alternarDisponibilidad():
//     * usuario.activo = !usuario.activo
//     * Llama a renderizarTarjeta()

// 4. funciones de eventos
// - Click en #btnActualizar -> actualizarDatosDesdeFormulario()
// - Click en #btnInvocarMetodo -> mostrar resultado de usuario.saludar()
// - Click en #btnToggleEstado -> alternarDisponibilidad()

// 5. escuchadores de eventos (addEventListener)
