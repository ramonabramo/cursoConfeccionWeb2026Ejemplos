/* ============================================================
   PRÁCTICA 05 · GESTOR DE TAREAS CON JSON
   Tema: Clases, JSON, toJSON(), static y localStorage
   ------------------------------------------------------------
   ENUNCIADO
   Vas a programar un gestor de tareas que no pierde los datos al recargar la página.
   La clase Tarea representa una tarea. La clase GestorTareas guarda la lista y la persiste en localStorage.
   Para guardar y recuperar instancias necesitarás toJSON() y un método estático que las reconstruya.
   ------------------------------------------------------------
   TODO (PASOS A REALIZAR)
   [ ] PASO 1: Clase Tarea
         constructor(texto, prioridad = "media", hecha = false, id = Date.now()).
   [ ] PASO 2: Método alternar()
         Cambia hecha de true a false y al revés. Devuelve this.
   [ ] PASO 3: toJSON() y static desdeJSON(datos)
         toJSON devuelve un objeto plano con id, texto, prioridad y hecha. desdeJSON crea una Tarea a partir de esos datos.
   [ ] PASO 4: Clase GestorTareas
         Con #tareas y #clave. Al crearse, carga los datos guardados con un método privado #cargar().
   [ ] PASO 5: Métodos agregar, alternar, eliminar y filtrar
         Cada cambio llama a #guardar(). filtrar(estado) acepta "todas", "pendientes" o "hechas".
   [ ] PASO 6: Getter pendientes
         Devuelve el número de tareas sin completar.
   [ ] PASO 7: Conecta la página
         Formulario, botones de filtro y lista de tarjetas con botones Hecha / Borrar.
   ------------------------------------------------------------
   NORMAS
   - Tu trabajo es SOLO este archivo (script.js).
   - No modifiques index.html ni estilos.css: ya están realizados.
   - Escribe el código debajo de cada comentario TODO.
   - Marca cada paso con [x] cuando lo termines.
   ============================================================ */

// ------------------------------------------------------------
// YA HECHO · elementos de la página (no hace falta tocarlos)
// ------------------------------------------------------------
const formTarea = document.getElementById("formTarea");
const inpTexto = document.getElementById("inpTexto");
const selPrioridad = document.getElementById("selPrioridad");
const botonesFiltro = document.querySelectorAll(".filtros button");
const listaTareas = document.getElementById("listaTareas");
const resumen = document.getElementById("resumen");

// ------------------------------------------------------------
// YA HECHO · utilidad para crear tarjetas en la página
// Devuelve un elemento <div> con un título, líneas de texto y botones.
//   titulo:  texto destacado
//   lineas:  array de textos (uno por línea)
//   botones: array de objetos { texto, alPulsar }
// ------------------------------------------------------------
function crearTarjeta(titulo, lineas = [], botones = []) {
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta-item";

    const encabezado = document.createElement("strong");
    encabezado.textContent = titulo;
    tarjeta.appendChild(encabezado);

    for (const linea of lineas) {
        const p = document.createElement("p");
        p.textContent = linea;
        tarjeta.appendChild(p);
    }

    if (botones.length > 0) {
        const acciones = document.createElement("div");
        acciones.className = "acciones";
        for (const boton of botones) {
            const b = document.createElement("button");
            b.textContent = boton.texto;
            b.addEventListener("click", boton.alPulsar);
            acciones.appendChild(b);
        }
        tarjeta.appendChild(acciones);
    }
    return tarjeta;
}

// ------------------------------------------------------------
// TODO PASO 1: clase Tarea
//   constructor(texto, prioridad = "media", hecha = false, id = Date.now())
// TODO PASO 2: método alternar() -> cambia this.hecha y devuelve this
// TODO PASO 3: serialización
//   toJSON()              -> { id, texto, prioridad, hecha }
//   static desdeJSON(d)   -> new Tarea(d.texto, d.prioridad, d.hecha, d.id)
// ------------------------------------------------------------


// ------------------------------------------------------------
// TODO PASO 4: clase GestorTareas
//   #tareas = [];  #clave;
//   constructor(clave): guarda la clave y llama a this.#cargar()
//   #guardar(): localStorage.setItem(clave, JSON.stringify(tareas))
//   #cargar():  lee con JSON.parse(localStorage.getItem(clave)) || []
//               y reconstruye cada elemento con Tarea.desdeJSON
// TODO PASO 5: métodos públicos (cada cambio llama a #guardar())
//   agregar(texto, prioridad)  -> crea y añade una Tarea
//   alternar(id)               -> alterna la tarea con ese id
//   eliminar(id)               -> la quita del array
//   filtrar(estado)            -> "todas" | "pendientes" | "hechas"
// TODO PASO 6: getter pendientes -> número de tareas con hecha === false
// ------------------------------------------------------------


// ------------------------------------------------------------
// TODO PASO 7: conecta la página
//   - const gestor = new GestorTareas("tareas-practica-05");  let filtroActual = "todas";
//   - dibujar(): vacía listaTareas y añade crearTarjeta(tarea.texto, [`Prioridad: ...`],
//     [botón Hecha/Pendiente, botón Borrar]) por cada tarea de gestor.filtrar(filtroActual).
//     En "resumen": "N pendientes de M"
//   - submit de formTarea: preventDefault, gestor.agregar(...), formTarea.reset(), dibujar()
//   - botonesFiltro: al pulsar, cambia filtroActual (boton.dataset.filtro), marca el botón
//     con la clase "activo" (y quítala de los demás) y dibuja
// ------------------------------------------------------------


dibujar();
