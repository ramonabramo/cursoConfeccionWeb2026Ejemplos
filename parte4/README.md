# Parte 4: El Objeto `event` en JavaScript

Bienvenido a la **Parte 4** del curso de JavaScript. En este bloque aprenderemos a dominar el **objeto `event`** (habitualmente abreviado como `e` o `event`), una de las herramientas más potentes y utilizadas en el desarrollo web moderno para capturar y procesar las interacciones de los usuarios.

---

## 1. Teoría: ¿Qué es el objeto `event`?

### 1.1. La analogía del "Informe" o "Atestado"
Imagina que un usuario hace clic en un botón, escribe en un teclado o pulsa enviar en un formulario. En ese instante exacto ocurren muchas cosas a la vez:
- ¿Qué botón del ratón se ha pulsado?
- ¿En qué coordenadas de la pantalla estaba el cursor?
- ¿El usuario mantenía pulsada la tecla Shift o Ctrl a la vez?
- ¿Qué tecla concreta se acaba de presionar?
- ¿Qué elemento HTML exacto recibió el impacto?

Para que el programador no tenga que adivinar nada de esto, **el navegador crea automáticamente un objeto** lleno de información con todos los detalles de lo que acaba de suceder y **se lo entrega como primer argumento** a la función que hayamos puesto a escuchar.

```javascript
const boton = document.querySelector('#miBoton');

// El navegador envía el objeto 'event' como primer parámetro
boton.addEventListener('click', function (e) {
    console.log(e); // ¡Aquí dentro está toda la información del suceso!
});
```

---

### 1.2. ¿De dónde sale la letra `e`?
Una duda muy común al empezar es: *"¿De dónde sale esa letra `e` si yo no he creado ninguna variable llamada así?"*.

La respuesta es que **es un parámetro de la función callback**. Puedes llamarlo como prefieras:
- `function (e) { ... }` *(la forma más habitual en el mundo profesional)*
- `function (event) { ... }`
- `function (evento) { ... }`

El nombre lo eliges tú al declarar la función, pero **el navegador siempre colocará en esa primera posición el objeto con los datos del evento**.

---

### 1.3. Propiedades y métodos fundamentales

A continuación se resumen las propiedades y métodos más importantes del objeto `event` que trabajaremos en esta unidad:

#### 1. `e.type` (Tipo de evento)
Indica qué tipo de suceso ha ocurrido en forma de texto: `'click'`, `'input'`, `'change'`, `'keydown'`, `'submit'`, etc.
```javascript
console.log(e.type); // "click"
```

#### 2. `e.target` (El elemento que disparó el evento)
`e.target` es una referencia viva al elemento del DOM sobre el que el usuario interactuó. A partir de él podemos consultar:
- `e.target.tagName`: Nombre de la etiqueta HTML en mayúsculas (`"BUTTON"`, `"INPUT"`, `"DIV"`).
- `e.target.id`: El atributo `id` del elemento.
- `e.target.className` o `e.target.classList`: Las clases CSS que tiene asignadas.
- `e.target.textContent`: El texto visible que hay dentro del elemento.
- `e.target.dataset`: Los atributos personalizados `data-*` (por ejemplo, `data-color="rojo"` se lee como `e.target.dataset.color`).

#### 3. `e.target.value` vs `e.target.textContent`
- **`e.target.value`**: Se utiliza exclusivamente en elementos de formulario interactivos (`<input>`, `<select>`, `<textarea>`) para leer o modificar el valor introducido o seleccionado.
- **`e.target.textContent`**: Se utiliza para leer el texto que encierran etiquetas contenedoras como `<button>`, `<p>`, `<span>`, `<h1>`, etc.

#### 4. `e.preventDefault()` (Frenar la acción por defecto)
Ciertos elementos del navegador tienen comportamientos automáticos programados por defecto:
- Un formulario `<form>` al enviarse (`submit`) **recarga la página web completa**.
- Un enlace `<a href="...">` al pulsarse navega a otra URL.

Llamar a `e.preventDefault()` al inicio de nuestra función detiene ese comportamiento predeterminado, permitiéndonos validar datos y actualizar la interfaz con JavaScript sin que la página se reinicie.

```javascript
formulario.addEventListener('submit', function (e) {
    e.preventDefault(); // ¡Evita que la página se recargue!
    // Ahora podemos validar los campos tranquilamente...
});
```

#### 5. `e.key` y `e.code` (Eventos de teclado)
En eventos como `'keydown'` o `'keyup'`:
- `e.key`: El carácter o nombre legible de la tecla pulsada (`"Enter"`, `"Escape"`, `"a"`, `"ArrowUp"`).
- `e.code`: El identificador de la tecla física en el teclado (`"KeyA"`, `"Space"`, `"Enter"`).

#### 6. Coordenadas del ratón (`e.clientX`, `e.clientY`, `e.offsetX`, `e.offsetY`)
- `e.clientX` / `e.clientY`: Posición horizontal y vertical del cursor respecto a la ventana visible del navegador.
- `e.offsetX` / `e.offsetY`: Posición del cursor relativa al borde superior izquierdo del elemento que recibió el clic.

#### 7. Teclas modificadoras (`e.shiftKey`, `e.ctrlKey`, `e.altKey`)
Valores booleanos (`true` o `false`) que indican si el usuario mantenía presionadas teclas especiales en el momento exacto del clic o la pulsación.

#### 8. Delegación de eventos con `e.target`
En lugar de añadir 10 o 20 escuchadores de eventos a cada botón individual, colocamos **un único escuchador en el contenedor padre**. Gracias a que el evento "burbujea" hacia arriba por el DOM, `e.target` nos dirá con total precisión qué botón hijo fue el que recibió el clic.

---

### 1.4. `e.target` vs `e.currentTarget`: ¿Quién disparó el evento vs Quién lo escucha?

Esta es una de las dudas más frecuentes cuando se avanza en el manejo del DOM. Aunque ambos devuelven un elemento HTML, cumplen roles completamente distintos:

* **`e.target` (La Diana):**
  Es el elemento exacto que **recibió físicamente la interacción del usuario** (donde el usuario posó el ratón e hizo clic).
* **`e.currentTarget` (El Dueño del Escuchador):**
  Es el elemento que **tiene asignado el `addEventListener`** y cuya función manejadora se está ejecutando en ese momento.

#### ¿Cuándo son iguales y cuándo son distintos?
1. **Son iguales (`e.target === e.currentTarget`)**: Cuando el usuario hace clic directamente en el mismo elemento que tiene el escuchador y este no tiene hijos en esa zona.
2. **Son distintos (`e.target !== e.currentTarget`)**: Cuando tenemos un contenedor con elementos hijos en su interior (por ejemplo, una tarjeta `<div id="tarjeta">` que contiene un `<span class="badge">`, un `<h3>` y un `<p>`), y el escuchador está puesto en el contenedor padre:
   - Si el usuario hace clic en el texto del `<p>`:
     - `e.target` será el `<p>` (quien recibió el clic).
     - `e.currentTarget` será el `<div id="tarjeta">` (quien tiene el escuchador).

```javascript
const tarjeta = document.querySelector('#tarjeta');

tarjeta.addEventListener('click', function (e) {
    console.log("Elemento pulsado (diana):", e.target);
    console.log("Elemento que escucha (padre):", e.currentTarget);

    if (e.target === e.currentTarget) {
        console.log("Hiciste clic en el fondo del contenedor padre.");
    } else {
        console.log(`Hiciste clic en el hijo <${e.target.tagName}>, pero el padre lo gestiona.`);
    }
});
```

---

## 2. Tabla Resumen de los 11 Ejercicios

| Nº | Ejercicio | Concepto Clave del objeto `event` | Carpeta Alumno | Carpeta Solución |
| :---: | :--- | :--- | :---: | :---: |
| **01** | Conociendo el objeto `event` | Primer contacto con `(e)`, `e.type` y `e.target.tagName` | [`ejercicio_01/`](./ejercicio_01/) | [`soluciones/ejercicio_01/`](./soluciones/ejercicio_01/) |
| **02** | Identificar elemento con `e.target` | Identificar quién originó el evento con `e.target.id` y `e.target.textContent` | [`ejercicio_02/`](./ejercicio_02/) | [`soluciones/ejercicio_02/`](./soluciones/ejercicio_02/) |
| **03** | Evitar recarga con `e.preventDefault()` | Frenar el envío nativo del `<form>` y validar campos antes de procesar | [`ejercicio_03/`](./ejercicio_03/) | [`soluciones/ejercicio_03/`](./soluciones/ejercicio_03/) |
| **04** | Lectura en tiempo real | Evento `'input'` y lectura directa sin `querySelector` con `e.target.value` | [`ejercicio_04/`](./ejercicio_04/) | [`soluciones/ejercicio_04/`](./soluciones/ejercicio_04/) |
| **05** | Menú desplegable (`change`) | Capturar la opción activa de un `<select>` con `e.target.value` y condicionales | [`ejercicio_05/`](./ejercicio_05/) | [`soluciones/ejercicio_05/`](./soluciones/ejercicio_05/) |
| **06** | Teclado con `e.key` | Evento `'keydown'`, detectar teclas especiales (`Enter`, `Escape`) y limpiar el input | [`ejercicio_06/`](./ejercicio_06/) | [`soluciones/ejercicio_06/`](./soluciones/ejercicio_06/) |
| **07** | Coordenadas del ratón | Coordenadas globales (`e.clientX/Y`) y relativas (`e.offsetX/Y`) para detectar mitades | [`ejercicio_07/`](./ejercicio_07/) | [`soluciones/ejercicio_07/`](./soluciones/ejercicio_07/) |
| **08** | Teclas modificadoras en clic | Propiedades booleanas `e.shiftKey`, `e.ctrlKey` y `e.altKey` combinadas con clic | [`ejercicio_08/`](./ejercicio_08/) | [`soluciones/ejercicio_08/`](./soluciones/ejercicio_08/) |
| **09** | Delegación de eventos | Un solo escuchador en el contenedor padre usando `e.target` y atributos `data-color` | [`ejercicio_09/`](./ejercicio_09/) | [`soluciones/ejercicio_09/`](./soluciones/ejercicio_09/) |
| **10** | Reto integrador completo | Gestor de avisos: `e.preventDefault()`, creación de elementos y borrado con `e.target` | [`ejercicio_10/`](./ejercicio_10/) | [`soluciones/ejercicio_10/`](./soluciones/ejercicio_10/) |
| **11** | Diferencia `target` vs `currentTarget` | Comparar el elemento que disparó el clic (`target`) frente al dueño del escuchador (`currentTarget`) | [`ejercicio_11/`](./ejercicio_11/) | [`soluciones/ejercicio_11/`](./soluciones/ejercicio_11/) |

---

## 3. Enunciados Detallados de los Ejercicios

### Ejercicio 01: Conociendo el objeto `event` y su tipo (`e.type`)
* **Archivos:** [`ejercicio_01/app.js`](./ejercicio_01/app.js) \| [Solución](soluciones/ejercicio_01/app.js)
* **Objetivo:** Perder el miedo al parámetro `(e)` y ver la información automática que aporta el navegador.
* **Enunciado:**
  Al hacer clic en el botón `#btnSaludar`:
  1. Accede al tipo de evento que acaba de ocurrir usando `e.type`.
  2. Accede al nombre de la etiqueta HTML sobre la que se hizo clic usando `e.target.tagName`.
  3. Muestra en `#resultado`: `"Has disparado un evento de tipo: 'click' sobre una etiqueta <BUTTON>."`.
* **Pasos a realizar:**
  1. Declarar la variable `mensaje`.
  2. Crear las constantes al DOM para `#btnSaludar` y `#resultado`.
  3. Escuchar el evento `'click'` en `#btnSaludar` pasando `(e)` como argumento a la función.
  4. Extraer `e.type` y `e.target.tagName`.
  5. Asignar el mensaje y mostrarlo en `#resultado.textContent`.

---

### Ejercicio 02: Identificar el elemento con `e.target`
* **Archivos:** [`ejercicio_02/app.js`](./ejercicio_02/app.js) \| [Solución](soluciones/ejercicio_02/app.js)
* **Objetivo:** Comprender que `e.target` es el elemento HTML exacto sobre el que se hizo la interacción.
* **Enunciado:**
  Tenemos dos botones: `#btnAceptar` ("Aceptar Solicitud") y `#btnCancelar` ("Cancelar Solicitud"). Al pulsar cualquiera de ellos:
  1. Lee el ID del botón pulsado mediante `e.target.id`.
  2. Lee el texto del botón mediante `e.target.textContent`.
  3. Usa un `if / else if` para comprobar qué botón se pulsó:
     - Si es `'btnAceptar'`: añadir `"Acción: Solicitud confirmada con éxito."`.
     - Si es `'btnCancelar'`: añadir `"Acción: Operación cancelada por el usuario."`.
  4. Muestra la información completa en `#resultado`.
* **Pasos a realizar:**
  1. Crear constantes al DOM para `#btnAceptar`, `#btnCancelar` y `#resultado`.
  2. Crear la función `gestionarClick(e)`.
  3. Obtener `e.target.id` y `e.target.textContent`.
  4. Evaluar con `if` según el id y componer el texto final.
  5. Asociar la función al `'click'` de ambos botones.

---

### Ejercicio 03: Evitar recarga con `e.preventDefault()`
* **Archivos:** [`ejercicio_03/app.js`](./ejercicio_03/app.js) \| [Solución](soluciones/ejercicio_03/app.js)
* **Objetivo:** Entender la recarga predeterminada de los formularios y cómo controlarla con JavaScript.
* **Enunciado:**
  Al enviar el formulario `#formulario`:
  1. En la primera línea de la función callback, ejecuta `e.preventDefault()` para impedir que el navegador recargue la página.
  2. Obtén el nombre introducido en `#nombre` y elimina los espacios sobrantes con `.trim()`.
  3. Con un `if / else`:
     - Si está vacío: mostrar en `#resultado`: `"Error: Debes escribir un nombre antes de enviar."`.
     - Si tiene texto: mostrar en `#resultado`: `"¡Formulario procesado con éxito! Bienvenido/a, [nombre]."`.
* **Pasos a realizar:**
  1. Crear constantes al DOM para `#formulario`, `#nombre` y `#resultado`.
  2. Escuchar el evento `'submit'` en `#formulario` con el parámetro `(e)`.
  3. Invocar `e.preventDefault()`.
  4. Evaluar el valor de `#nombre.value.trim()`.
  5. Mostrar la respuesta en `#resultado`.

---

### Ejercicio 04: Lectura en tiempo real con `e.target.value`
* **Archivos:** [`ejercicio_04/app.js`](./ejercicio_04/app.js) \| [Solución](soluciones/ejercicio_04/app.js)
* **Objetivo:** Aprender el evento `'input'` y obtener el valor sin necesidad de buscar el elemento en el DOM.
* **Enunciado:**
  Al escribir en el campo de texto `#campoTexto`:
  1. Accede directamente al valor escrito a través de `e.target.value`.
  2. Calcula cuántos caracteres tiene con `e.target.value.length`.
  3. Transforma el texto a mayúsculas con `e.target.value.toUpperCase()`.
  4. Con un `if`:
     - Si la longitud es 0: mostrar `"Esperando a que escribas algo..."`.
     - Si es mayor que 0: mostrar `"Caracteres: [longitud] | En mayúsculas: [textoEnMayusculas]"`.
* **Pasos a realizar:**
  1. Crear constantes al DOM para `#campoTexto` y `#resultado`.
  2. Escuchar el evento `'input'` en `#campoTexto` recibiendo `(e)`.
  3. Leer `e.target.value` y su longitud.
  4. Evaluar con `if` la longitud y mostrar el mensaje en `#resultado`.

---

### Ejercicio 05: Menú desplegable con `change` y `e.target.value`
* **Archivos:** [`ejercicio_05/app.js`](./ejercicio_05/app.js) \| [Solución](soluciones/ejercicio_05/app.js)
* **Objetivo:** Capturar la opción elegida en un elemento `<select>` mediante el evento `'change'`.
* **Enunciado:**
  Al cambiar la opción en el selector `#selectorPais`:
  1. Lee el valor del `<option>` seleccionado con `e.target.value`.
  2. Utiliza `if / else if / else` para comprobar el código del país:
     - `'es'`: `"Has seleccionado España. Capital: Madrid | Moneda: Euro (€)."`.
     - `'mx'`: `"Has seleccionado México. Capital: Ciudad de México | Moneda: Peso mexicano (MXN)."`.
     - `'ar'`: `"Has seleccionado Argentina. Capital: Buenos Aires | Moneda: Peso argentino (ARS)."`.
     - `'co'`: `"Has seleccionado Colombia. Capital: Bogotá | Moneda: Peso colombiano (COP)."`.
     - En caso de opción vacía: `"Por favor, selecciona un país válido de la lista."`.
  3. Muestra la respuesta en `#resultado`.
* **Pasos a realizar:**
  1. Crear constantes al DOM para `#selectorPais` y `#resultado`.
  2. Escuchar el evento `'change'` en el selector pasando `(e)`.
  3. Leer `e.target.value`.
  4. Realizar las comprobaciones con `if / else if / else`.
  5. Imprimir el resultado en `#resultado`.

---

### Ejercicio 06: Eventos de teclado con `keydown` y `e.key`
* **Archivos:** [`ejercicio_06/app.js`](./ejercicio_06/app.js) \| [Solución](soluciones/ejercicio_06/app.js)
* **Objetivo:** Detectar pulsaciones físicas del teclado y reaccionar a teclas concretas (`Enter` y `Escape`).
* **Enunciado:**
  Al pulsar teclas dentro del campo `#campoBusqueda`:
  1. Lee el nombre de la tecla mediante `e.key`.
  2. Con un `if / else if / else`:
     - Si `e.key === 'Enter'`: si hay texto en el input, muestra `"Has pulsado ENTER: Buscando '[texto]' en la base de datos..."`; si está vacío, avisa de ello.
     - Si `e.key === 'Escape'`: limpia el campo asignando `e.target.value = ''` y muestra `"Has pulsado ESCAPE: Búsqueda cancelada y campo vaciado."`.
     - Si es cualquier otra tecla: muestra `"Última tecla pulsada: '[tecla]' (Código: [e.code])."`.
* **Pasos a realizar:**
  1. Crear constantes al DOM para `#campoBusqueda` y `#resultado`.
  2. Escuchar el evento `'keydown'` pasando `(e)`.
  3. Evaluar `e.key` mediante condicionales `if`.
  4. Modificar `e.target.value` si es Escape o leerlo si es Enter.
  5. Actualizar el div `#resultado`.

---

### Ejercicio 07: Coordenadas del ratón (`e.clientX`, `e.clientY`, `e.offsetX`, `e.offsetY`)
* **Archivos:** [`ejercicio_07/app.js`](./ejercicio_07/app.js) \| [Solución](soluciones/ejercicio_07/app.js)
* **Objetivo:** Entender la dimensión física y espacial de los eventos de ratón.
* **Enunciado:**
  Al hacer clic dentro del recuadro interactivo `#zonaInteractiva`:
  1. Obtén las coordenadas globales de la ventana (`e.clientX`, `e.clientY`).
  2. Obtén las coordenadas relativas dentro de la caja (`e.offsetX`, `e.offsetY`).
  3. Obtén el ancho de la caja con `e.target.clientWidth`.
  4. Con un `if / else`, comprueba si `e.offsetX < ancho / 2`:
     - Si es menor: el clic ocurrió en la `"mitad IZQUIERDA"`.
     - Si es mayor o igual: el clic ocurrió en la `"mitad DERECHA"`.
  5. Muestra todas las coordenadas y el lado en `#resultado`.
* **Pasos a realizar:**
  1. Crear constantes al DOM para `#zonaInteractiva` y `#resultado`.
  2. Escuchar el evento `'click'` en `#zonaInteractiva` con `(e)`.
  3. Extraer `clientX`, `clientY`, `offsetX`, `offsetY` y `clientWidth`.
  4. Comparar `offsetX` con la mitad del ancho.
  5. Mostrar el texto completo en `#resultado`.

---

### Ejercicio 08: Teclas modificadoras en el clic (`e.shiftKey`, `e.ctrlKey`, `e.altKey`)
* **Archivos:** [`ejercicio_08/app.js`](./ejercicio_08/app.js) \| [Solución](soluciones/ejercicio_08/app.js)
* **Objetivo:** Combinar eventos de ratón con el estado del teclado mediante propiedades booleanas.
* **Enunciado:**
  Al pulsar el botón `#btnEspecial`:
  1. Evalúa con un `if / else if / else` las propiedades booleanas del objeto event:
     - Si `e.shiftKey` es true: `"¡Modo Turbo! Has hecho clic manteniendo pulsada la tecla SHIFT."`.
     - Si `e.ctrlKey` es true: `"¡Modo Administrador! Has hecho clic manteniendo pulsada la tecla CTRL."`.
     - Si `e.altKey` es true: `"¡Modo Descarga directa! Has hecho clic manteniendo pulsada la tecla ALT."`.
     - Si ninguna es true: `"Clic normal registrado. Consejo: Prueba a mantener pulsado Shift o Ctrl mientras haces clic."`.
  2. Muestra el mensaje en `#resultado`.
* **Pasos a realizar:**
  1. Crear constantes al DOM para `#btnEspecial` y `#resultado`.
  2. Escuchar el evento `'click'` recibiendo `(e)`.
  3. Comprobar las propiedades booleanas con `if`.
  4. Mostrar la salida en `#resultado`.

---

### Ejercicio 09: Delegación de eventos con `e.target`
* **Archivos:** [`ejercicio_09/app.js`](./ejercicio_09/app.js) \| [Solución](soluciones/ejercicio_09/app.js)
* **Objetivo:** Centralizar el control de múltiples elementos hijos en un solo `addEventListener` usando el contenedor padre.
* **Enunciado:**
  Tenemos un contenedor `#paletaColores` que contiene 4 botones con atributos `data-color` (Rojo, Verde, Azul, Amarillo).
  1. Coloca **UN SOLO escuchador de `'click'`** en el contenedor padre `#paletaColores`.
  2. Con un `if`, verifica si el elemento pulsado es un botón: `e.target.tagName === 'BUTTON'`.
  3. Si es un botón:
     - Lee el color del botón mediante `e.target.dataset.color`.
     - Lee el texto del botón con `e.target.textContent`.
     - Muestra en `#resultado`: `"Has seleccionado el color: [color] (pulsando en '[texto]')."`.
  4. Si no es un botón (clic en el espacio vacío del contenedor):
     - Muestra en `#resultado`: `"Has hecho clic dentro del contenedor, pero fuera de los botones."`.
* **Pasos a realizar:**
  1. Crear constantes al DOM para `#paletaColores` y `#resultado`.
  2. Añadir el `addEventListener('click')` únicamente a `#paletaColores`.
  3. Validar `e.target.tagName === 'BUTTON'`.
  4. Extraer `dataset.color` y `textContent`.
  5. Imprimir el mensaje en `#resultado`.

---

### Ejercicio 10: Reto integrador con el objeto `event`
* **Archivos:** [`ejercicio_10/app.js`](./ejercicio_10/app.js) \| [Solución](soluciones/ejercicio_10/app.js)
* **Objetivo:** Unificar `e.preventDefault()`, captura de inputs, creación dinámica en el DOM y borrado con delegación mediante `e.target`.
* **Enunciado:**
  Construye un gestor de recordatorios interactivo con dos partes:
  * **Parte A (Envío del formulario `#formAviso`):**
    1. Evita la recarga de página con `e.preventDefault()`.
    2. Comprueba que `#inputAviso.value.trim()` no esté vacío. Si está vacío, avisa en `#resultado`.
    3. Si tiene texto, crea un `<li>` con el texto y un botón `<button type="button" class="btn-borrar">Borrar</button>`.
    4. Insértalo en `<ul id="listaAvisos">`, limpia el input y avisa en `#resultado`.
  * **Parte B (Eliminación mediante delegación en `#listaAvisos`):**
    1. Escucha el evento `'click'` en la lista `#listaAvisos`.
    2. Comprueba si el elemento pulsado tiene la clase `'btn-borrar'` con `e.target.classList.contains('btn-borrar')`.
    3. Si es así, obtén el elemento padre (`e.target.parentElement`) y elimínalo del DOM con `.remove()`.
    4. Muestra en `#resultado`: `"Aviso '[texto]' eliminado correctamente."`.
* **Pasos a realizar:**
  1. Crear constantes al DOM para `#formAviso`, `#inputAviso`, `#listaAvisos` y `#resultado`.
  2. Escuchar `'submit'` en `#formAviso`, aplicar `e.preventDefault()` y añadir el `<li>`.
  3. Escuchar `'click'` en `#listaAvisos`, validar con `e.target.classList.contains('btn-borrar')` y llamar a `.remove()`.
  4. Mostrar los mensajes informativos en `#resultado`.

---

### Ejercicio 11: Diferencia entre `e.target` y `e.currentTarget`
* **Archivos:** [`ejercicio_11/app.js`](./ejercicio_11/app.js) \| [Solución](soluciones/ejercicio_11/app.js)
* **Objetivo:** Diferenciar el elemento físico que originó la interacción (`target`) del elemento que posee el escuchador activo (`currentTarget`).
* **Enunciado:**
  Tenemos una tarjeta interactiva `<div id="tarjeta">` que contiene varios elementos anidados: una etiqueta `<span class="badge">Novedad</span>`, un título `<h3 class="tarjeta-titulo">`, un párrafo descriptivo `<p class="tarjeta-texto">` y su propio fondo.
  Colocamos el escuchador del evento `'click'` **únicamente en el contenedor `#tarjeta`**.
  Al hacer clic en cualquier parte de la tarjeta:
  1. Lee la etiqueta del elemento pulsado: `e.target.tagName`.
  2. Lee la etiqueta y el ID del elemento que escucha: `e.currentTarget.tagName` y `e.currentTarget.id`.
  3. Con un `if (e.target === e.currentTarget)`:
     - **Si coinciden**: Muestra que se ha hecho clic directamente en el fondo del contenedor padre.
     - **Si son distintos**: Muestra que el clic lo recibió el elemento hijo `<${e.target.tagName}>`, pero gracias al burbujeo el evento lo está procesando el contenedor padre con `currentTarget`.
  4. Muestra un informe comparativo claro en el div `#resultado`.
* **Pasos a realizar:**
  1. Crear constantes al DOM para `#tarjeta` y `#resultado`.
  2. Escuchar el evento `'click'` en `#tarjeta` pasando el parámetro `(e)`.
  3. Extraer `e.target` y `e.currentTarget`.
  4. Comparar ambas referencias con un `if (e.target === e.currentTarget)`.
  5. Imprimir en `#resultado` la comparativa visual de ambos elementos.
