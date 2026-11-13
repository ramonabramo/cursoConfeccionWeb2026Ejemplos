// ==========================================================================
// EJERCICIO 08 (Práctica): Clase Tarea con Estado y Métodos de Instancia
// OBJETIVO: Crear la clase Tarea, instanciar objetos con new y gestionar sus estados.
// ==========================================================================

// 1. variables y constantes de estado
// - Definir la clase Tarea:
//     class Tarea {
//         constructor(titulo, responsable, horas) {
//             this.id = Date.now() + Math.random();
//             this.titulo = titulo;
//             this.responsable = responsable;
//             this.horas = horas;
//             this.completada = false;
//         }
//         alternarEstado() {
//             this.completada = !this.completada;
//         }
//     }
// - Array de instancias: const listaTareas = [];

// 2. constantes al DOM
// - Inputs: #inputTituloTarea, #inputResponsable, #inputHoras
// - Botón: #btnCrearTarea
// - Contenedor: #contenedorTareas
// - Div resultado: #resultado

// 3. funciones auxiliares
// - function renderizarTareas():
//     * Recorre listaTareas con forEach y crea botones/tarjetas en #contenedorTareas.
//     * Al pulsar en una tarea, llama al método tarea.alternarEstado() y vuelve a renderizar.
// - function crearNuevaTarea():
//     * Lee inputs, hace 'new Tarea(...)', lo añade al array y llama a renderizarTareas().

// 4. funciones de eventos
// - Click en #btnCrearTarea -> crearNuevaTarea()

// 5. escuchadores de eventos (addEventListener)
