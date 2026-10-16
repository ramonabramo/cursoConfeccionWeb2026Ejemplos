# Parte 6: Colecciones de Elementos del DOM (`querySelectorAll`, `NodeList` y Arrays de Nodos)

Bienvenido a la **Parte 6** del curso de JavaScript. En la unidad anterior ([Parte 5](../parte5/README.md)) aprendimos a dominar los **arrays de datos puros** (strings, números) y su recorrido mediante `forEach()`.

En este bloque damos el salto definitivo hacia el desarrollo frontend profesional: **conectar las listas y arrays con la interfaz gráfica**, aprendiendo a seleccionar, recorrer, modificar y escuchar eventos sobre **múltiples elementos del DOM a la vez**.

---

## 1. Teoría Fundamental: De un Elemento a Colecciones

### 1.1. `document.querySelector()` frente a `document.querySelectorAll()`

Hasta ahora utilizábamos `document.querySelector()` para capturar un elemento del documento:

```javascript
// Selecciona únicamente el PRIMER botón que encuentre en el HTML
const primerBoton = document.querySelector('button');
```

Si en la página existen 5 botones, `querySelector()` ignora los otros 4. Para capturar **todos los elementos** que cumplan con un selector CSS, utilizamos **`document.querySelectorAll()`**:

```javascript
// Selecciona TODOS los botones del documento y los agrupa en una colección
const todosLosBotones = document.querySelectorAll('button');
```

| Método | Qué devuelve | Si no encuentra coincidencias | Métodos principales |
| :--- | :--- | :---: | :--- |
| **`querySelector(selector)`** | Un único elemento HTML (`Element`) | `null` | `.addEventListener()`, `.classList`, `.textContent`, `.value` |
| **`querySelectorAll(selector)`** | Una colección de nodos (**`NodeList`**) | Una `NodeList` vacía (`length === 0`) | `.length`, `.forEach()`, acceso por corchetes `[i]` |

---

### 1.2. ¿Qué es una `NodeList`?

Una **`NodeList`** es una lista ordenada de nodos del DOM devuelta por el navegador. Comparte características fundamentales con los arrays:

1. **Indexación base cero:** El primer elemento está en la posición `[0]`, el segundo en `[1]`, etc.
2. **Propiedad `.length`:** Indica la cantidad exacta de elementos encontrados en el documento.
3. **Método `.forEach()` integrado:** Permite recorrer todos sus elementos de forma limpia y directa.

```javascript
const cajas = document.querySelectorAll('.caja');

console.log(cajas.length);                 // Número total de cajas
console.log(cajas[0]);                     // Primera caja de la lista
console.log(cajas[cajas.length - 1]);      // Última caja de la lista
```

---

### 1.3. Diferencias Críticas: `NodeList` frente a `Array` puro

Aunque una `NodeList` se parece mucho a un array, **no es un Array completo de JavaScript**.

| Característica / Método | `NodeList` (DOM) | `Array` tradicional |
| :--- | :---: | :---: |
| Acceso por índice `coleccion[i]` | ✅ Sí | ✅ Sí |
| Propiedad de longitud `.length` | ✅ Sí | ✅ Sí |
| Recorrido con `.forEach()` | ✅ Sí | ✅ Sí |
| Añadir / Quitar (`.push()`, `.pop()`, `.splice()`) | ❌ No | ✅ Sí |
| Métodos funcionales (`.filter()`, `.map()`, `.reduce()`) | ❌ No | ✅ Sí |
| Búsqueda avanzada (`.find()`, `.some()`, `.every()`) | ❌ No | ✅ Sí |

---

### 1.4. Cómo convertir una `NodeList` a un Array Real

Cuando necesitamos filtrar elementos con `.filter()`, transformar nodos con `.map()` o realizar operaciones avanzadas de arrays sobre elementos del DOM, podemos transformar la `NodeList` en un Array nativo de dos formas:

#### Opción 1: `Array.from()` (Método oficial recomendado)
```javascript
const nodos = document.querySelectorAll('.alumno');
const arrayAlumnos = Array.from(nodos); // Ahora es un Array estándar con todos sus métodos
```

#### Opción 2: Operador Spread `[...]`
```javascript
const arrayAlumnos = [...document.querySelectorAll('.alumno')];
```

Una vez convertido a Array real, ya podemos encadenar métodos como `.filter()` o `.map()`:

```javascript
// Filtrar solo los alumnos aprobados directamente sobre elementos del DOM
const aprobados = Array.from(document.querySelectorAll('.alumno')).filter(function (alumno) {
    return Number(alumno.dataset.nota) >= 5;
});
```

---

### 1.5. ⚠️ ¡El error más común del principiante!

Un error clásico al empezar a trabajar con selecciones múltiples es intentar asignar un escuchador de eventos directamente a la `NodeList`:

```javascript
// ❌ ¡ERROR GRAVE QUE PROVOCA UN FALLO EN LA CONSOLA!
const botones = document.querySelectorAll('.btn-accion');
botones.addEventListener('click', function () { ... });
// TypeError: botones.addEventListener is not a function
```

> [!CAUTION]
> Una `NodeList` es una **bolsa o colección** de elementos, no un botón individual. El navegador no sabe a cuál de los botones pretendes escuchar. **No puedes poner un `addEventListener` a una lista**.

#### La solución: Asignar el evento a cada elemento dentro de un bucle `forEach()`
Para que todos los botones funcionen, debemos **recorrer la colección con `forEach()`** y registrar el escuchador en cada elemento individual:

```javascript
// ✅ FORMA CORRECTA Y PROFESIONAL
const botones = document.querySelectorAll('.btn-accion');

botones.forEach(function (boton, indice) {
    boton.addEventListener('click', function () {
        console.log(`Has pulsado el botón #${indice + 1}: ${boton.textContent}`);
    });
});
```

---

### 1.6. El Patrón de Exclusión Mutua (Pestañas / Menús / Filtros)

En aplicaciones web es constante la necesidad de que al pulsar una opción (p. ej., una pestaña o un botón de filtro), **esa opción se active y todas las demás se desactiven**.

El patrón estándar para resolver esto en JavaScript consta de dos pasos:
1. **Paso 1 (Limpieza general):** Recorrer todos los elementos con `forEach()` y retirarles la clase activa (`classList.remove('activo')`).
2. **Paso 2 (Activación individual):** Añadir la clase activa (`classList.add('activo')`) únicamente al elemento pulsado.

```javascript
const pestanas = document.querySelectorAll('.tab-btn');

pestanas.forEach(function (tab) {
    tab.addEventListener('click', function () {
        // 1. Desactivamos todas las pestañas
        pestanas.forEach(function (t) {
            t.classList.remove('activo');
        });

        // 2. Activamos únicamente la pestaña clicada
        tab.classList.add('activo');
    });
});
```

---

### 1.7. Lectura de Atributos Personalizados `data-*` (`dataset`)

HTML5 permite asociar metadatos técnicos a cualquier etiqueta mediante atributos que empiezan por el prefijo `data-`:

```html
<div class="tarjeta-producto" data-id="101" data-categoria="informatica" data-precio="899">
    <h3>Portátil Pro</h3>
</div>
```

En JavaScript accedemos a estos datos a través de la propiedad **`.dataset`**:

```javascript
const tarjeta = document.querySelector('.tarjeta-producto');

console.log(tarjeta.dataset.id);         // "101" (string)
console.log(tarjeta.dataset.categoria);  // "informatica"
console.log(Number(tarjeta.dataset.precio)); // 899 (número)
```

> [!TIP]
> Los atributos `dataset` siempre devuelven cadenas de texto (`string`). Si vas a realizar operaciones matemáticas (sumas, multiplicaciones con IVA, etc.), conviértelos siempre con `Number(elemento.dataset.precio)`.

---

### 1.8. Filtrado de Elementos en Tiempo Real

Al combinar el evento `'input'` de un campo de texto con `querySelectorAll()` y `forEach()`, podemos crear buscadores instantáneos muy potentes:

```javascript
const inputBuscar = document.querySelector('#inputBuscar');
const elementos = document.querySelectorAll('.item');

inputBuscar.addEventListener('input', function () {
    const texto = inputBuscar.value.trim().toLowerCase();

    elementos.forEach(function (item) {
        const contenido = item.textContent.toLowerCase();

        if (contenido.includes(texto)) {
            item.classList.remove('oculto'); // Se muestra
        } else {
            item.classList.add('oculto');    // Se oculta con display: none
        }
    });
});
```

---

## 2. Tabla Resumen de los 10 Ejercicios

| Nº | Ejercicio | Concepto Clave de DOM Múltiple | Carpeta Alumno | Carpeta Solución |
| :---: | :--- | :--- | :---: | :---: |
| **01** | Selección múltiple e índices | `querySelectorAll()`, longitud `.length`, primer `[0]` y último elemento `[length - 1]` | [`ejercicio_01/`](./ejercicio_01/) | [`soluciones/ejercicio_01/`](./soluciones/ejercicio_01/) |
| **02** | Modificación masiva con `forEach` | Recorrer `NodeList` para añadir/quitar clases CSS masivamente (`classList.add/remove`) | [`ejercicio_02/`](./ejercicio_02/) | [`soluciones/ejercicio_02/`](./soluciones/ejercicio_02/) |
| **03** | Eventos en múltiples elementos | Error clásico de principiante y asignación correcta de `addEventListener` en bucle | [`ejercicio_03/`](./ejercicio_03/) | [`soluciones/ejercicio_03/`](./soluciones/ejercicio_03/) |
| **04** | Exclusión mutua (Pestañas / Tabs) | Patrón de interfaz: desactivar todos los botones con `forEach` y activar el pulsado | [`ejercicio_04/`](./ejercicio_04/) | [`soluciones/ejercicio_04/`](./soluciones/ejercicio_04/) |
| **05** | Acumulación sobre inputs numéricos | Recorrer múltiples inputs con `.value`, convertir con `Number()` y calcular total y media | [`ejercicio_05/`](./ejercicio_05/) | [`soluciones/ejercicio_05/`](./soluciones/ejercicio_05/) |
| **06** | Gestión masiva de Checkboxes | Propiedad `.checked`, marcar/desmarcar todos e inversión con contador en vivo | [`ejercicio_06/`](./ejercicio_06/) | [`soluciones/ejercicio_06/`](./soluciones/ejercicio_06/) |
| **07** | Atributos `dataset` en tarjetas | Lectura de metadatos `data-*` (`dataset.id`, `dataset.precio`) y cálculo de IVA | [`ejercicio_07/`](./ejercicio_07/) | [`soluciones/ejercicio_07/`](./soluciones/ejercicio_07/) |
| **08** | Conversión con `Array.from()` | Transformar `NodeList` a Array para usar `.filter()` y `.map()` sobre elementos del DOM | [`ejercicio_08/`](./ejercicio_08/) | [`soluciones/ejercicio_08/`](./soluciones/ejercicio_08/) |
| **09** | Buscador en tiempo real | Filtro instantáneo con evento `'input'`, `.toLowerCase()`, `.includes()` y clase `.oculto` | [`ejercicio_09/`](./ejercicio_09/) | [`soluciones/ejercicio_09/`](./soluciones/ejercicio_09/) |
| **10** | Reto integrador de catálogo | Proyecto completo: pestañas de categoría, selección interactiva y cálculo de reservas | [`ejercicio_10/`](./ejercicio_10/) | [`soluciones/ejercicio_10/`](./soluciones/ejercicio_10/) |

---

## 3. Enunciados Detallados de los Ejercicios

### Ejercicio 01: Selección múltiple con `querySelectorAll()` y lectura por índice
* **Archivos:** [`ejercicio_01/app.js`](./ejercicio_01/app.js) | [Solución](soluciones/ejercicio_01/app.js)
* **Objetivo:** Capturar una colección de elementos con `document.querySelectorAll()`, leer su propiedad `.length` y acceder al primer elemento (`[0]`) y al último (`[length - 1]`).
* **Enunciado:**
  Dada una cuadrícula con 5 cajas informativas (`.caja`):
  1. **Botón "Contar Cajas" (`#btnContar`):** Consulta `cajas.length` y muestra en `#resultado` cuántas cajas existen en el DOM.
  2. **Botón "Primera Caja" (`#btnPrimera`):** Limpia la clase `destacada` de todas las cajas, añade `destacada` a `cajas[0]` y muestra su contenido en pantalla.
  3. **Botón "Última Caja" (`#btnUltima`):** Limpia estilos previos, añade `destacada` a `cajas[cajas.length - 1]` y muestra su texto.
* **Pasos a realizar:**
  1. Capturar todas las cajas con `document.querySelectorAll('.caja')`.
  2. Apuntar a los tres botones y al div `#resultado`.
  3. Crear una función auxiliar `limpiarDestacadas()` que recorra las cajas con `forEach` y retire la clase `destacada`.
  4. Programar los escuchadores de `'click'` para cada botón ejecutando la acción correspondiente.

---

### Ejercicio 02: Recorrido masivo con `forEach()` para modificar clases y estilos
* **Archivos:** [`ejercicio_02/app.js`](./ejercicio_02/app.js) | [Solución](soluciones/ejercicio_02/app.js)
* **Objetivo:** Aprender a iterar sobre una `NodeList` mediante `forEach()` para manipular clases CSS masivamente.
* **Enunciado:**
  Tenemos un listado de artículos (`.articulo`):
  1. **Botón "Destacar Todos los Artículos" (`#btnDestacar`):** Recorre todos los artículos con `forEach()` y añade a cada uno la clase `destacado` mediante `articulo.classList.add('destacado')`. Muestra en `#resultado` el total de artículos modificados.
  2. **Botón "Restablecer Original" (`#btnRestablecer`):** Recorre todos los artículos y quita la clase `destacado` con `articulo.classList.remove('destacado')`.
* **Pasos a realizar:**
  1. Capturar todos los artículos con `document.querySelectorAll('.articulo')`.
  2. Capturar los botones `#btnDestacar`, `#btnRestablecer` y `#resultado`.
  3. Programar la función para destacar recorriendo con `forEach`.
  4. Programar la función para restablecer recorriendo con `forEach`.
  5. Asignar los escuchadores de evento `'click'` a los dos botones.

---

### Ejercicio 03: Asignar eventos a múltiples elementos con `forEach()`
* **Archivos:** [`ejercicio_03/app.js`](./ejercicio_03/app.js) | [Solución](soluciones/ejercicio_03/app.js)
* **Objetivo:** Superar el error común del principiante y registrar escuchadores de eventos individuales en cada elemento de una colección mediante un bucle `forEach()`.
* **Enunciado:**
  En pantalla hay una botonera con 6 botones de opciones (`.btn-accion`).
  Al hacer clic en cualquiera de ellos:
  1. Obtén el texto del botón pulsado (`boton.textContent.trim()`).
  2. Obtén su número de posición en la botonera utilizando el parámetro `indice` del callback (`indice + 1`).
  3. Muestra en `#resultado`: `"Has pulsado el botón #[numero]: '[texto]'."`
* **Pasos a realizar:**
  1. Capturar todos los botones con `document.querySelectorAll('.btn-accion')`.
  2. Apuntar al contenedor `#resultado`.
  3. Recorrer la colección con `botones.forEach(function (boton, indice) { ... })`.
  4. Dentro del bucle, añadir a cada botón su propio `boton.addEventListener('click', function () { ... })`.
  5. Imprimir el mensaje resultante en `#resultado`.

---

### Ejercicio 04: Patrón de exclusión mutua: Pestañas activas (Tabs)
* **Archivos:** [`ejercicio_04/app.js`](./ejercicio_04/app.js) | [Solución](soluciones/ejercicio_04/app.js)
* **Objetivo:** Implementar el patrón frontend de exclusión mutua (desactivar todas las opciones y activar únicamente la pulsada).
* **Enunciado:**
  Tenemos una barra de navegación de 4 pestañas (`.tab-btn`: Inicio, Perfil, Mensajes, Configuración).
  Al hacer clic en una pestaña:
  1. Recorre todas las pestañas y retira la clase `activo` con `tab.classList.remove('activo')`.
  2. Añade la clase `activo` a la pestaña que acaba de recibir el clic.
  3. Actualiza el panel `#contenidoTab` mostrando la sección que se acaba de cargar.
  4. Muestra en `#resultado` la pestaña activa en ese momento.
* **Pasos a realizar:**
  1. Capturar todas las pestañas con `document.querySelectorAll('.tab-btn')`.
  2. Capturar `#contenidoTab` y `#resultado`.
  3. Crear una función auxiliar para retirar la clase `activo` de todas las pestañas.
  4. Recorrer las pestañas con `forEach` y escuchar el evento `'click'` en cada una.
  5. Ejecutar la exclusión mutua y actualizar los textos informativos.

---

### Ejercicio 05: Lectura y acumulación de múltiples inputs numéricos
* **Archivos:** [`ejercicio_05/app.js`](./ejercicio_05/app.js) | [Solución](soluciones/ejercicio_05/app.js)
* **Objetivo:** Capturar colecciones de campos de entrada, extraer sus valores con `.value`, convertirlos a número y realizar cálculos agregados (suma y media).
* **Enunciado:**
  Formulario con 5 campos de gasto diario (`.input-gasto`, de Lunes a Viernes):
  1. **Botón "Calcular Total y Media" (`#btnCalcular`):**
     - Inicializa una variable acumuladora: `let total = 0;`.
     - Recorre todos los `.input-gasto` con `forEach()`.
     - Convierte cada valor con `Number(input.value)` y súmalo al total acumulado.
     - Calcula el gasto medio dividiendo entre `inputsGastos.length`.
     - Muestra en `#resultado` el gasto total y la media diaria formateados a dos decimales con `.toFixed(2)`.
  2. **Botón "Vaciar Campos" (`#btnLimpiar`):**
     - Recorre los inputs y asigna `input.value = ''` a cada uno.
* **Pasos a realizar:**
  1. Capturar todos los inputs con `document.querySelectorAll('.input-gasto')`.
  2. Apuntar a `#btnCalcular`, `#btnLimpiar` y `#resultado`.
  3. Programar la función de cálculo recorriendo los campos con `forEach()`.
  4. Programar la función de limpieza.
  5. Registrar los escuchadores de evento `'click'`.

---

### Ejercicio 06: Gestión masiva de Checkboxes y contadores en tiempo real
* **Archivos:** [`ejercicio_06/app.js`](./ejercicio_06/app.js) | [Solución](soluciones/ejercicio_06/app.js)
* **Objetivo:** Leer y modificar la propiedad booleana `.checked` en grupos de casillas de verificación y mantener un contador sincronizado con el evento `'change'`.
* **Enunciado:**
  Lista de tareas con casillas de verificación (`<input type="checkbox" class="chk-tarea">`):
  1. **Contador en vivo:** Cada vez que cambie cualquier casilla (evento `'change'`), cuenta cuántas están marcadas (`chk.checked === true`) y muestra: `"Tareas completadas: X de Y (Z%)."`
  2. **Botón "Marcar Todos" (`#btnMarcarTodos`):** Asigna `chk.checked = true` a todas las casillas y actualiza el contador.
  3. **Botón "Desmarcar Todos" (`#btnDesmarcarTodos`):** Asigna `chk.checked = false` a todas las casillas y actualiza el contador.
  4. **Botón "Invertir Selección" (`#btnInvertir`):** Asigna `chk.checked = !chk.checked` a cada casilla y actualiza el contador.
* **Pasos a realizar:**
  1. Capturar todos los checkboxes con `document.querySelectorAll('.chk-tarea')`.
  2. Apuntar a los tres botones de control y a `#resultado`.
  3. Crear una función `actualizarContador()` que recorra los checkboxes y calcule el porcentaje completado.
  4. Asignar el evento `'change'` a cada checkbox mediante `forEach`.
  5. Programar los tres botones maestros de acción.

---

### Ejercicio 07: Lectura de atributos personalizados `data-*` (`dataset`) en colecciones
* **Archivos:** [`ejercicio_07/app.js`](./ejercicio_07/app.js) | [Solución](soluciones/ejercicio_07/app.js)
* **Objetivo:** Aprender a extraer metadatos almacenados en etiquetas HTML5 mediante la propiedad `.dataset`.
* **Enunciado:**
  Cuadrícula con 4 tarjetas de productos (`.tarjeta-producto`), cada una con atributos `data-id`, `data-nombre`, `data-categoria` y `data-precio`.
  Cada tarjeta contiene un botón `.btn-detalle`:
  Al hacer clic en el botón de una tarjeta:
  1. Accede a los atributos personalizados de la tarjeta desde `tarjeta.dataset`.
  2. Convierte el precio base a número y calcula el precio final con IVA (21%): `precioBase * 1.21`.
  3. Muestra en `#resultado` una ficha completa con referencia, nombre, categoría, precio base y precio con IVA.
* **Pasos a realizar:**
  1. Capturar todas las tarjetas con `document.querySelectorAll('.tarjeta-producto')`.
  2. Recorrer cada tarjeta con `forEach`.
  3. Dentro de cada tarjeta, localizar su botón con `tarjeta.querySelector('.btn-detalle')`.
  4. Escuchar el evento `'click'` en el botón.
  5. Leer `tarjeta.dataset.*`, calcular el IVA y pintar la ficha en `#resultado`.

---

### Ejercicio 08: Conversión de `NodeList` a Array con `Array.from()` y métodos funcionales
* **Archivos:** [`ejercicio_08/app.js`](./ejercicio_08/app.js) | [Solución](soluciones/ejercicio_08/app.js)
* **Objetivo:** Comprender la necesidad de convertir una `NodeList` a Array para aplicar métodos funcionales como `.filter()` y `.map()` sobre elementos del DOM.
* **Enunciado:**
  Lista de estudiantes (`.alumno`) con sus calificaciones en `data-nota`:
  1. Convierte la `NodeList` en un Array nativo con `Array.from(document.querySelectorAll('.alumno'))`.
  2. **Botón "Filtrar Aprobados" (`#btnAprobados`):**
     - Filtra con `arrayAlumnos.filter(a => Number(a.dataset.nota) >= 5)`.
     - Añade la clase `aprobado` a los elementos coincidentes y lista sus nombres y notas.
  3. **Botón "Filtrar Suspensos" (`#btnSuspensos`):**
     - Filtra con `arrayAlumnos.filter(a => Number(a.dataset.nota) < 5)`.
     - Añade la clase `suspenso` a los elementos coincidentes.
  4. **Botón "Listar Nombres" (`#btnNombres`):**
     - Usa `arrayAlumnos.map(a => a.dataset.nombre)` para extraer un array de textos y mostrarlos unidos con `join(' • ')`.
* **Pasos a realizar:**
  1. Obtener el array real de nodos usando `Array.from()`.
  2. Crear una función para limpiar las clases CSS previas.
  3. Programar el filtrado de aprobados con `.filter()`.
  4. Programar el filtrado de suspensos con `.filter()`.
  5. Programar el mapeo de nombres con `.map()`.

---

### Ejercicio 09: Buscador y filtro de elementos en tiempo real
* **Archivos:** [`ejercicio_09/app.js`](./ejercicio_09/app.js) | [Solución](soluciones/ejercicio_09/app.js)
* **Objetivo:** Construir un filtro instantáneo en vivo escuchando el evento `'input'` y alternando la clase `.oculto` según las coincidencias de texto.
* **Enunciado:**
  Lista de 8 tecnologías web (`.item-tecnologia`) y un campo de búsqueda `#inputBuscar`:
  A cada pulsación de tecla (evento `'input'`):
  1. Obtén el texto de búsqueda en minúsculas y sin espacios (`.trim().toLowerCase()`).
  2. Recorre todos los elementos `.item-tecnologia` con `forEach()`.
  3. Si el texto del elemento incluye la búsqueda: retira la clase `oculto` (`item.classList.remove('oculto')`).
  4. Si no coincide: añade la clase `oculto` (`item.classList.add('oculto')`).
  5. Muestra en `#resultado` cuántas tecnologías coinciden con el término buscado.
* **Pasos a realizar:**
  1. Capturar `#inputBuscar`, todos los `.item-tecnologia` y `#resultado`.
  2. Escuchar el evento `'input'` en el campo de texto.
  3. Programar la lógica de comparación con `.includes()`.
  4. Mostrar u ocultar elementos mediante manipulación de `classList`.
  5. Actualizar el contador de resultados en pantalla.

---

### Ejercicio 10: Reto integrador: Catálogo interactivo con filtros y cálculo de reservas
* **Archivos:** [`ejercicio_10/app.js`](./ejercicio_10/app.js) | [Solución](soluciones/ejercicio_10/app.js)
* **Objetivo:** Integrar en un proyecto completo todos los conceptos de DOM múltiple: `querySelectorAll`, `forEach`, exclusión mutua, atributos `dataset`, filtrado visual y cálculo acumulado de importes.
* **Enunciado:**
  Catálogo de cursos técnicos (`.tarjeta-curso`) organizados por categorías (Frontend, Backend, Diseño):
  1. **Filtros por categoría:** Al pulsar una pestaña de categoría (`.tab-btn`), desactiva las demás y muestra únicamente los cursos cuya `data-categoria` coincida con `data-filtro` (o todos si se elige "Todos").
  2. **Selección de cursos:** Cada curso tiene un botón `.btn-reservar`. Al pulsar sobre él, se alterna la clase `seleccionado` en la tarjeta (`classList.toggle('seleccionado')`), se cambia el texto del botón entre *"Seleccionar Curso"* y *"Quitar Curso"*, y se recalcula el total.
  3. **Cálculo de matrícula:** La función `recalcularTotal()` recorre todos los cursos seleccionados, suma sus precios (`Number(tarjeta.dataset.precio)`) y muestra en `#resultado` la cantidad de cursos elegidos y el importe total a pagar.
  4. **Botón "Limpiar Selección" (`#btnVaciarCarrito`):** Deselecciona todos los cursos y pone el total a 0 €.
* **Pasos a realizar:**
  1. Capturar los botones de filtro, las tarjetas de cursos, el botón de vaciar y `#resultado`.
  2. Programar las pestañas de filtro con el patrón de exclusión mutua y ocultación/visibilidad.
  3. Asignar los escuchadores de evento `'click'` a los botones de reserva con `forEach`.
  4. Implementar la función `recalcularTotal()` para sumar los importes de los cursos con clase `seleccionado`.
  5. Programar el botón para vaciar la selección.
