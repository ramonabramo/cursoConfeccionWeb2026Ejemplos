# Parte 5: Introducción a los Arrays en JavaScript

Bienvenido a la **Parte 5** del curso de JavaScript. En este bloque aprenderemos a trabajar con **Arrays de datos** (listas ordenadas de elementos como textos o números). 

> [!NOTE]
> En esta unidad nos centraremos exclusivamente en **arrays de datos puros** (strings, números). En la **Parte 6** daremos el siguiente paso para trabajar con colecciones de elementos del DOM (`querySelectorAll`, `NodeList` y arrays de nodos).

---

## 1. Teoría Básica: ¿Qué es un Array?

### 1.1. La analogía de la estantería con casillas numeradas
Hasta ahora, una variable normal (`let nombre = 'Ana';`) solo podía almacenar un único valor a la vez. Si quisiéramos guardar los días de la semana, tendríamos que crear 7 variables distintas (`dia1`, `dia2`, `dia3`...).

Un **Array** (también llamado arreglo, vector o matriz) es una estructura de datos que permite almacenar **múltiples valores ordenados dentro de una misma variable**, como si fuera una estantería con cajones numerados:

```javascript
// Declaración de un array con 3 elementos
const frutas = ['Manzana', 'Pera', 'Plátano'];
```

---

### 1.2. El Índice (Index): Siempre empieza en 0
En informática y en JavaScript, los elementos de un array no se cuentan desde el 1, sino **desde la posición 0**:

| Posición / Índice | Elemento |
| :---: | :---: |
| `[0]` | `'Manzana'` (primer elemento) |
| `[1]` | `'Pera'` (segundo elemento) |
| `[2]` | `'Plátano'` (tercer elemento) |

Para acceder al valor de un elemento se escribe el nombre del array seguido de corchetes `[]` con su índice dentro:

```javascript
console.log(frutas[0]); // "Manzana"
console.log(frutas[1]); // "Pera"
```

---

### 1.3. La Propiedad Fundamental: `.length`
La propiedad `.length` nos devuelve el **número total de elementos** que contiene el array en ese momento:

```javascript
console.log(frutas.length); // 3
```

> [!TIP]
> Dado que los índices empiezan en `0`, el **último elemento** de cualquier array siempre se encuentra en la posición `longitud - 1`:
> ```javascript
> const ultimo = frutas[frutas.length - 1]; // "Plátano"
> ```

---

### 1.4. Modificar Elementos Existentes
Los arrays en JavaScript son **mutables**. Podemos cambiar el contenido de cualquier casilla accediendo a su posición con corchetes y asignándole un nuevo valor:

```javascript
let colores = ['Rojo', 'Verde', 'Azul'];
colores[1] = 'Amarillo'; // Sustituye 'Verde' por 'Amarillo'
console.log(colores);    // ['Rojo', 'Amarillo', 'Azul']
```

---

### 1.5. Métodos Principales para Manipular Arrays

A continuación se resumen los métodos imprescindibles para trabajar con arrays en el día a día:

#### 1. Añadir y quitar al FINAL del array (`push` y `pop`)
* **`array.push(nuevoElemento)`**: Inserta uno o más elementos al final de la lista e incrementa `.length`.
  ```javascript
  let lista = ['Pan', 'Leche'];
  lista.push('Huevos'); // lista ahora es ['Pan', 'Leche', 'Huevos']
  ```
* **`array.pop()`**: Extrae y elimina el **último elemento** del array y lo devuelve.
  ```javascript
  const ultimo = lista.pop(); // ultimo vale 'Huevos', lista queda con ['Pan', 'Leche']
  ```

#### 2. Añadir y quitar al PRINCIPIO del array (`unshift` y `shift`)
* **`array.unshift(nuevoElemento)`**: Inserta un elemento en la posición `0` y desplaza los demás hacia la derecha.
  ```javascript
  let fila = ['Ana', 'Carlos'];
  fila.unshift('Beatriz'); // fila ahora es ['Beatriz', 'Ana', 'Carlos']
  ```
* **`array.shift()`**: Extrae y elimina el **primer elemento** (índice 0) y desplaza el resto a la izquierda.
  ```javascript
  const primero = fila.shift(); // primero vale 'Beatriz'
  ```

#### 3. Búsqueda y Comprobación (`includes` e `indexOf`)
* **`array.includes(valor)`**: Devuelve `true` si el elemento está en el array, o `false` si no está.
  ```javascript
  const invitados = ['Lucía', 'Marcos', 'Sofía'];
  if (invitados.includes('Sofía')) {
      console.log('¡Está invitada!');
  }
  ```
* **`array.indexOf(valor)`**: Devuelve el **índice numérico** de la posición donde se encuentra el elemento. Si no existe en el array, devuelve siempre **`-1`**.
  ```javascript
  const indice = invitados.indexOf('Marcos'); // 1
  const noExiste = invitados.indexOf('Pedro');  // -1
  ```

#### 4. Eliminar elementos específicos (`splice`)
* **`array.splice(indiceInicio, cantidadABorrar)`**: Elimina una cantidad determinada de elementos a partir de un índice concreto.
  ```javascript
  let articulos = ['Mesa', 'Silla', 'Lámpara', 'Cama'];
  // Borrar 1 elemento en la posición 1 ('Silla')
  articulos.splice(1, 1);
  console.log(articulos); // ['Mesa', 'Lámpara', 'Cama']
  ```

#### 5. Unir y Formatear (`join`)
* **`array.join(separador)`**: Convierte todos los elementos del array en una sola cadena de texto (`string`), uniendo cada elemento con el separador indicado (por ejemplo: `", "`, `" - "`, `" / "`).
  ```javascript
  let tags = ['html', 'css', 'javascript'];
  console.log(tags.join(' - ')); // "html - css - javascript"
  ```

---

### 1.6. Cómo recorrer un Array: `forEach` (El método recomendado), `for` y `while`

Recorrer un array significa **visitar cada uno de sus elementos secuencialmente**, desde el primero hasta el último, para leer su contenido, calcular un resultado o generar elementos en la interfaz.

Existen tres formas principales de recorrer un array:

#### 1. `array.forEach()` — ⭐ El método recomendado en JavaScript moderno
`forEach()` es el método más limpio, seguro y legible. En lugar de tener que gestionar un contador numérico manual (`i`) y calcular cuándo detenerse, le pasamos una función que JavaScript ejecutará automáticamente **una vez por cada elemento del array**:

```javascript
const lenguajes = ['JavaScript', 'Python', 'Java'];

// forEach pasa el elemento actual a la función callback
lenguajes.forEach(function (lenguaje) {
    console.log(`Lenguaje: ${lenguaje}`);
});
```

> [!TIP]
> **¿Por qué `forEach` es el mejor método?**
> 1. **Evita errores de desbordamiento:** No hay peligro de equivocarse en la condición de parada del array.
> 2. **Imposible caer en bucles infinitos:** Se detiene automáticamente cuando procesa el último elemento.
> 3. **Código más limpio y legible:** Directo al grano sin sintaxis de contadores ni variables intermedias.

##### Leer el elemento y el índice a la vez en `forEach`:
La función callback de `forEach` puede recibir hasta 3 argumentos, siendo los dos primeros los más habituales:
1. `elemento`: El dato actual de la casilla.
2. `indice`: La posición numérica (`0, 1, 2...`) que ocupa en ese momento.

```javascript
const peliculas = ['El Padrino', 'Pulp Fiction', 'Matrix'];

peliculas.forEach(function (pelicula, indice) {
    console.log(`Puesto ${indice + 1}: ${pelicula}`);
});
```

---

#### 2. Bucle `for` clásico (`for (let i = 0; i < array.length; i++)`)
Es la estructura de control tradicional compartida con otros lenguajes. Consta de 3 partes:
1. **Inicialización:** `let i = 0` (el contador empieza en el primer índice).
2. **Condición de permanencia:** `i < array.length` (continúa mientras `i` sea menor que la cantidad de elementos).
3. **Incremento:** `i++` (avanza al siguiente índice tras cada vuelta).

```javascript
const temperaturas = [18, 22, 14, 25];

for (let i = 0; i < temperaturas.length; i++) {
    console.log(`Temperatura en el día ${i}: ${temperaturas[i]} °C`);
}
```

---

#### 3. Bucle `while`
El bucle `while (condicion)` repite el bloque de código mientras la condición sea verdadera. Al usarlo con arrays, debemos controlar manualmente las tres fases:

```javascript
const palabras = ['sol', 'mar', 'montaña'];

let i = 0; // 1. Inicialización obligatoria fuera del bucle

while (i < palabras.length) { // 2. Condición de parada
    console.log(palabras[i]);
    i++; // 3. ¡Incremento manual obligatorio para no crear un bucle infinito!
}
```

> [!WARNING]
> Si en un bucle `while` olvidas escribir el incremento `i++`, el contador jamás cambiará, la condición siempre será verdadera y el navegador se **bloqueará por bucle infinito**. Por eso, para recorrer arrays se recomienda encarecidamente utilizar `forEach()`.

---

### 1.7. Manejo de Formularios en esta Unidad: `<button type="button">` frente a `<button type="submit">`

Al trabajar con formularios interactivos y arrays en JavaScript existen dos formas de capturar las acciones del usuario:

#### 1. Formulario clásico con botón de envío (`type="submit"`) y `e.preventDefault()`
Por defecto en los navegadores, cualquier `<button>` situado dentro de una etiqueta `<form>` actúa como `type="submit"`. Al pulsarlo (o pulsar Enter dentro de un input), el navegador intenta enviar el formulario mediante una petición HTTP recargando la página entera.

Para procesar los datos íntegramente con JavaScript en el navegador del usuario y evitar esa recarga, debemos:
1. Escuchar el evento `'submit'` en la etiqueta `<form>`.
2. Capturar el objeto de evento `e`.
3. Invocar inmediatamente `e.preventDefault()` para cancelar el envío nativo.

```javascript
// Ejemplo pedagógico (Ejercicio 01):
form.addEventListener('submit', function (e) {
    e.preventDefault(); // ¡Obligatorio para evitar que la página se recargue!
    // lógica con el array...
});
```

> [!NOTE]
> En esta unidad, el **Ejercicio 01** mantiene expresamente este mecanismo con `<button type="submit">` y `e.preventDefault()` con el fin pedagógico de entender cómo se intercepta el envío por defecto de los formularios.

#### 2. Botón estándar (`type="button"`) y evento `'click'` — ⭐ Enfoque del Ejercicio 02 al 15
Cuando un formulario actúa únicamente como contenedor visual de controles y la lógica se gestiona completamente en JavaScript cliente, la solución más limpia y moderna consiste en asignar a los botones el atributo explícito `type="button"`:

```html
<!-- HTML -->
<form id="formCompra">
    <input type="text" id="inputArticulo" placeholder="Nuevo artículo">
    <button type="button" id="btnAgregar">Añadir a la Lista</button>
</form>
```

```javascript
// JavaScript:
btnAgregar.addEventListener('click', function () {
    // Al ser type="button", el navegador NO envía el formulario ni recarga la página.
    // No necesitamos recibir el objeto de evento 'e' ni llamar a e.preventDefault().
    const articulo = inputArticulo.value.trim();
    // lógica con el array...
});
```

**Ventajas de `<button type="button">` en aplicaciones con arrays:**
- **Código más limpio y directo:** No requiere capturar el parámetro `e` ni acordarse de invocar `e.preventDefault()`.
- **Múltiples acciones independientes:** Permite incluir dentro de un mismo formulario varios botones distintos (por ejemplo: *Añadir*, *Buscar*, *Eliminar*, *Mostrar*) y escuchar el evento `'click'` de cada uno de ellos por separado sin que ninguno dispare envíos no deseados.

---

## 2. Tabla Resumen de los 15 Ejercicios

| Nº | Ejercicio | Concepto Clave de Arrays | Carpeta Alumno | Carpeta Solución |
| :---: | :--- | :--- | :---: | :---: |
| **01** | Acceso por índice | Declaración, corchetes `array[i]` y propiedad `.length` | [`ejercicio_01/`](./ejercicio_01/) | [`soluciones/ejercicio_01/`](./soluciones/ejercicio_01/) |
| **02** | Añadir al final con `push()` | Insertar nuevos elementos dinámicamente con formularios | [`ejercicio_02/`](./ejercicio_02/) | [`soluciones/ejercicio_02/`](./soluciones/ejercicio_02/) |
| **03** | Eliminar del final con `pop()` | Extraer el último elemento y controlar array vacío | [`ejercicio_03/`](./ejercicio_03/) | [`soluciones/ejercicio_03/`](./soluciones/ejercicio_03/) |
| **04** | Añadir y quitar al inicio | Cola de espera con `unshift()` (urgente) y `shift()` (atender) | [`ejercicio_04/`](./ejercicio_04/) | [`soluciones/ejercicio_04/`](./soluciones/ejercicio_04/) |
| **05** | Modificar por índice | Mutabilidad: reasignar valores con `array[indice] = nuevo` | [`ejercicio_05/`](./ejercicio_05/) | [`soluciones/ejercicio_05/`](./soluciones/ejercicio_05/) |
| **06** | Existencia con `includes()` | Validación booleana de presencia en listas VIP | [`ejercicio_06/`](./ejercicio_06/) | [`soluciones/ejercicio_06/`](./soluciones/ejercicio_06/) |
| **07** | Localizar con `indexOf()` | Encontrar la posición exacta o detectar no encontrado (`-1`) | [`ejercicio_07/`](./ejercicio_07/) | [`soluciones/ejercicio_07/`](./soluciones/ejercicio_07/) |
| **08** | Borrado específico (`splice`) | Combinar `indexOf()` para buscar y `splice()` para eliminar | [`ejercicio_08/`](./ejercicio_08/) | [`soluciones/ejercicio_08/`](./soluciones/ejercicio_08/) |
| **09** | Formato de texto con `join()` | Transformar arrays en cadenas legibles con separadores | [`ejercicio_09/`](./ejercicio_09/) | [`soluciones/ejercicio_09/`](./soluciones/ejercicio_09/) |
| **10** | Reto integrador de catálogo | Operaciones CRUD completas (push, includes, indexOf, splice, join) | [`ejercicio_10/`](./ejercicio_10/) | [`soluciones/ejercicio_10/`](./soluciones/ejercicio_10/) |
| **11** | Recorrer con `forEach()` | ⭐ El método recomendado: recorrido declarativo y seguro | [`ejercicio_11/`](./ejercicio_11/) | [`soluciones/ejercicio_11/`](./soluciones/ejercicio_11/) |
| **12** | `forEach` (Elemento + Índice) | Lectura simultánea del valor y la posición (`elemento, indice`) | [`ejercicio_12/`](./ejercicio_12/) | [`soluciones/ejercicio_12/`](./soluciones/ejercicio_12/) |
| **13** | Acumular con `forEach()` | Cálculo numérico: acumulación de suma total y precio medio | [`ejercicio_13/`](./ejercicio_13/) | [`soluciones/ejercicio_13/`](./soluciones/ejercicio_13/) |
| **14** | Bucle `for` clásico | Estructura tradicional `(let i = 0; i < length; i++)` con filtro | [`ejercicio_14/`](./ejercicio_14/) | [`soluciones/ejercicio_14/`](./soluciones/ejercicio_14/) |
| **15** | Bucle `while` | Control manual de índice, condición de parada y prevención de bucles infinitos | [`ejercicio_15/`](./ejercicio_15/) | [`soluciones/ejercicio_15/`](./soluciones/ejercicio_15/) |

---

## 3. Enunciados Detallados de los Ejercicios

### Ejercicio 01: Creación y acceso por índice
* **Archivos:** [`ejercicio_01/app.js`](./ejercicio_01/app.js) | [Solución](soluciones/ejercicio_01/app.js)
* **Objetivo:** Comprender la indexación desde 0 y la lectura de elementos mediante corchetes, utilizando el evento `'submit'` y `e.preventDefault()`.
* **Enunciado:**
  Dado un array con los 7 días de la semana:
  `['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']`.
  El usuario introduce un número de índice en `#inputIndice`.
  Al pulsar el botón de envío (`type="submit"`):
  1. Evita la recarga con `e.preventDefault()`.
  2. Valida con un `if` que el índice introducido esté entre `0` y `diasSemana.length - 1`.
  3. Si es válido, muestra el elemento correspondiente (`diasSemana[indice]`) y el total de días del array.
  4. Si no es válido, muestra un mensaje de error.
* **Pasos a realizar:**
  1. Declarar el array `diasSemana`.
  2. Apuntar al formulario `#formulario`, input `#inputIndice` y div `#resultado`.
  3. Escuchar el evento `'submit'` del formulario.
  4. Llamar a `e.preventDefault()` para interceptar el envío nativo.
  5. Convertir el valor a número con `Number()`.
  6. Comparar `indice >= 0 && indice < diasSemana.length` y mostrar el resultado en pantalla.

---

### Ejercicio 02: Añadir al final con `push()`
* **Archivos:** [`ejercicio_02/app.js`](./ejercicio_02/app.js) | [Solución](soluciones/ejercicio_02/app.js)
* **Objetivo:** Aprender a insertar nuevos elementos dinámicamente en el array con un botón `type="button"`.
* **Enunciado:**
  Comenzamos con una lista de la compra inicial: `let listaCompra = ['Pan', 'Leche'];`.
  Al hacer clic en el botón `#btnAgregar` (`type="button"`):
  1. Obtén el nombre del artículo introducido por el usuario sin espacios (`.trim()`).
  2. Si tiene texto, añade el artículo al final del array con `listaCompra.push(articulo)`.
  3. Limpia el input y muestra en `#resultado` el artículo añadido, la lista completa y el total de artículos (`.length`).
* **Pasos a realizar:**
  1. Declarar el array `listaCompra`.
  2. Apuntar a `#inputArticulo`, `#btnAgregar` y `#resultado`.
  3. Escuchar el evento `'click'` en `#btnAgregar`.
  4. Validar con `if` que el input no esté vacío.
  5. Ejecutar `listaCompra.push(articulo)`.
  6. Actualizar la vista con el array resultante y vaciar el input.

---

### Ejercicio 03: Eliminar del final con `pop()`
* **Archivos:** [`ejercicio_03/app.js`](./ejercicio_03/app.js) | [Solución](soluciones/ejercicio_03/app.js)
* **Objetivo:** Extraer y eliminar el último elemento de una lista, controlando el caso de array vacío.
* **Enunciado:**
  Partimos de una pila de tareas pendientes:
  `let tareas = ['Lavar platos', 'Estudiar JS', 'Pasear al perro', 'Hacer la compra'];`.
  Al hacer clic en el botón `#btnEliminar`:
  1. Comprueba con un `if (tareas.length > 0)` si quedan elementos.
  2. Si quedan tareas, extrae la última con `const eliminada = tareas.pop()`.
  3. Muestra qué tarea se ha eliminado y cuáles quedan en el array.
  4. Si el array ya estaba vacío (`length === 0`), avisa de que no quedan tareas pendientes.
* **Pasos a realizar:**
  1. Declarar el array `tareas`.
  2. Apuntar a `#btnEliminar` y `#resultado`.
  3. Escuchar `'click'` en el botón.
  4. Evaluar con `if` la longitud de `tareas`.
  5. Ejecutar `tareas.pop()` y mostrar el mensaje correspondiente.

---

### Ejercicio 04: Añadir y quitar al inicio con `unshift()` y `shift()`
* **Archivos:** [`ejercicio_04/app.js`](./ejercicio_04/app.js) | [Solución](soluciones/ejercicio_04/app.js)
* **Objetivo:** Manipular el primer elemento del array para simular colas de turnos y prioridades.
* **Enunciado:**
  Tenemos una cola de clientes: `let cola = ['Carlos', 'Ana', 'Beatriz'];`.
  - **Botón "Añadir al Principio" (`#btnPrioritario`):** Lee el nombre del input y lo añade al inicio de la cola con `cola.unshift(nombre)`.
  - **Botón "Atender Primero" (`#btnAtender`):** Extrae al primer cliente con `cola.shift()` e informa de a quién se ha atendido y quiénes quedan en la cola. Si no quedan clientes, muestra un aviso.
* **Pasos a realizar:**
  1. Declarar el array `cola`.
  2. Apuntar a `#inputCliente`, `#btnPrioritario`, `#btnAtender` y `#resultado`.
  3. Escuchar `'click'` en `#btnPrioritario` y ejecutar `cola.unshift()`.
  4. Escuchar `'click'` en `#btnAtender`, validar `cola.length > 0` y ejecutar `cola.shift()`.
  5. Mostrar el estado de la cola en cada acción.

---

### Ejercicio 05: Modificar un elemento por su índice
* **Archivos:** [`ejercicio_05/app.js`](./ejercicio_05/app.js) | [Solución](soluciones/ejercicio_05/app.js)
* **Objetivo:** Entender la mutabilidad de los arrays reasignando casillas específicas (`array[i] = nuevo`).
* **Enunciado:**
  Array inicial de puntuaciones: `let puntuaciones = [85, 92, 78, 64, 90];`.
  Al hacer clic en el botón `#btnModificar` (`type="button"`):
  1. Obtén la posición a modificar y la nueva puntuación como números.
  2. Valida con un `if` que la posición exista (`posicion >= 0 && posicion < puntuaciones.length`).
  3. Si existe, guarda el valor previo, reasigna `puntuaciones[posicion] = nuevoValor` y muestra el cambio realizado y el array resultante.
  4. Si no existe, muestra un mensaje de error.
* **Pasos a realizar:**
  1. Declarar el array `puntuaciones`.
  2. Apuntar a los inputs, al botón `#btnModificar` y a `#resultado`.
  3. Escuchar `'click'` en `#btnModificar`.
  4. Validar el rango del índice.
  5. Reasignar `puntuaciones[posicion]`.
  6. Imprimir el resumen en `#resultado`.

---

### Ejercicio 06: Comprobar existencia con `includes()`
* **Archivos:** [`ejercicio_06/app.js`](./ejercicio_06/app.js) | [Solución](soluciones/ejercicio_06/app.js)
* **Objetivo:** Comprobar si un dato está incluido en el array utilizando el método booleano `includes()`.
* **Enunciado:**
  Lista de invitados VIP: `const invitados = ['lucia', 'marcos', 'sofia', 'daniel', 'elena'];`.
  Al hacer clic en el botón `#btnComprobar` (`type="button"`):
  1. Obtén el nombre del input y conviértelo a minúsculas con `.toLowerCase()`.
  2. Evalúa con un `if (invitados.includes(nombre))`:
     - Si es true: `"¡Acceso Concedido! '[nombre]' está en la lista de invitados VIP."`.
     - Si es false: `"Acceso Denegado: '[nombre]' no aparece en la lista de invitados."`.
* **Pasos a realizar:**
  1. Declarar el array `invitados`.
  2. Apuntar a `#inputNombre`, `#btnComprobar` y `#resultado`.
  3. Escuchar el evento `'click'` en `#btnComprobar`.
  4. Obtener el nombre en minúsculas.
  5. Evaluar con `if (invitados.includes(nombre))`.
  6. Mostrar el mensaje de bienvenida o denegación.

---

### Ejercicio 07: Localizar posición con `indexOf()`
* **Archivos:** [`ejercicio_07/app.js`](./ejercicio_07/app.js) | [Solución](soluciones/ejercicio_07/app.js)
* **Objetivo:** Obtener la posición numérica de un elemento y controlar el valor `-1` cuando no existe.
* **Enunciado:**
  Inventario del almacén: `const productos = ['teclado', 'raton', 'monitor', 'auriculares', 'altavoces'];`.
  Al hacer clic en el botón `#btnBuscar` (`type="button"`):
  1. Obtén el nombre del producto en minúsculas.
  2. Busca su posición con `const posicion = productos.indexOf(producto);`.
  3. Si `posicion !== -1`: muestra que el producto está en la posición/estante `posicion`.
  4. Si `posicion === -1`: muestra que el producto no existe en el catálogo.
* **Pasos a realizar:**
  1. Declarar el array `productos`.
  2. Apuntar a `#inputProducto`, `#btnBuscar` y `#resultado`.
  3. Escuchar `'click'` en `#btnBuscar`.
  4. Ejecutar `productos.indexOf(producto)`.
  5. Comprobar con `if (posicion !== -1)`.
  6. Mostrar el mensaje en `#resultado`.

---

### Ejercicio 08: Eliminar elemento específico con `indexOf()` y `splice()`
* **Archivos:** [`ejercicio_08/app.js`](./ejercicio_08/app.js) | [Solución](soluciones/ejercicio_08/app.js)
* **Objetivo:** Combinar la búsqueda por índice con el borrado en cualquier parte del array.
* **Enunciado:**
  Censo de animales en un refugio: `let animales = ['perro', 'gato', 'loro', 'conejo', 'tortuga'];`.
  Al hacer clic en el botón `#btnAdoptar` (`type="button"`):
  1. Obtén el nombre del animal en minúsculas.
  2. Localiza su posición con `const indice = animales.indexOf(animal);`.
  3. Con un `if`:
     - Si `indice !== -1`: elimínalo con `animales.splice(indice, 1)` y muestra el refugio actualizado y los animales restantes.
     - Si `indice === -1`: muestra que el animal no se encuentra en el refugio.
* **Pasos a realizar:**
  1. Declarar el array `animales`.
  2. Apuntar a `#inputAnimal`, `#btnAdoptar` y `#resultado`.
  3. Escuchar `'click'` en `#btnAdoptar`.
  4. Buscar con `indexOf()`.
  5. Si existe, ejecutar `animales.splice(indice, 1)`.
  6. Mostrar el array resultante en `#resultado`.

---

### Ejercicio 09: Unir y formatear elementos con `join()`
* **Archivos:** [`ejercicio_09/app.js`](./ejercicio_09/app.js) | [Solución](soluciones/ejercicio_09/app.js)
* **Objetivo:** Aprender a convertir arrays en cadenas de texto continuas con separadores personalizados.
* **Enunciado:**
  Array de etiquetas: `let etiquetas = ['html', 'css', 'javascript', 'frontend'];`.
  Al hacer clic en el botón `#btnFormatear` (`type="button"`):
  1. Si el usuario escribió una nueva etiqueta, añádela al array con `etiquetas.push()`.
  2. Lee el separador elegido en el menú desplegable (por ejemplo `" - "`, `" | "` o `", "`).
  3. Une todos los elementos con `etiquetas.join(separador)`.
  4. Muestra el texto formateado resultante y el total de etiquetas.
* **Pasos a realizar:**
  1. Declarar el array `etiquetas`.
  2. Apuntar a `#inputNuevaEtiqueta`, `#selectSeparador`, `#btnFormatear` y `#resultado`.
  3. Escuchar el evento `'click'` en `#btnFormatear`.
  4. Insertar la nueva etiqueta si procede.
  5. Ejecutar `etiquetas.join(separador)`.
  6. Mostrar la cadena resultante en `#resultado`.

---

### Ejercicio 10: Reto integrador de catálogo en array
* **Archivos:** [`ejercicio_10/app.js`](./ejercicio_10/app.js) | [Solución](soluciones/ejercicio_10/app.js)
* **Objetivo:** Integrar todas las operaciones fundamentales de arrays en un panel de control interactivo.
* **Enunciado:**
  Partimos de un catálogo de productos: `let catalogo = ['manzana', 'pera', 'platano'];`.
  El panel incluye un campo de texto y cuatro botones:
  - **Añadir (`#btnAgregar`):** Si el producto ya existe (`includes()`), muestra un aviso y evita duplicados. Si no existe, lo añade con `push()`.
  - **Buscar (`#btnBuscar`):** Informa de la posición del producto mediante `indexOf()`.
  - **Eliminar (`#btnEliminar`):** Busca con `indexOf()` y elimina con `splice(posicion, 1)`.
  - **Ver Catálogo (`#btnMostrar`):** Muestra todos los productos unidos con `join(' | ')` y la cantidad total.
* **Pasos a realizar:**
  1. Declarar el array `catalogo`.
  2. Apuntar a los elementos del DOM.
  3. Programar cada botón con su escuchador de `'click'`.
  4. Aplicar las validaciones pertinentes en cada caso.
  5. Actualizar el div `#resultado`.

---

### Ejercicio 11: Recorrer con `forEach()` (Método Recomendado)
* **Archivos:** [`ejercicio_11/app.js`](./ejercicio_11/app.js) | [Solución](soluciones/ejercicio_11/app.js)
* **Objetivo:** Dominar el método `forEach()`, el enfoque más limpio, directo y recomendado para recorrer arrays.
* **Enunciado:**
  Dado un array con lenguajes de programación:
  `let lenguajes = ['JavaScript', 'Python', 'Java', 'PHP', 'TypeScript'];`.
  1. Permite añadir nuevos lenguajes pulsando el botón `#btnAgregar` (`type="button"`) con `push()`.
  2. Al pulsar el botón "Recorrer con forEach" (`#btnMostrar`), utiliza `lenguajes.forEach(function (lenguaje) { ... })` para acumular una lista con viñetas (`• [lenguaje]`).
  3. Muestra el listado completo y el total de elementos en `#resultado`.
* **Pasos a realizar:**
  1. Declarar el array `lenguajes`.
  2. Apuntar a los elementos del DOM (`#inputLenguaje`, `#btnAgregar`, `#btnMostrar`, `#resultado`).
  3. Escuchar el evento `'click'` en `#btnAgregar` para añadir nuevos lenguajes con `push()`.
  4. Escuchar `'click'` en `#btnMostrar`.
  5. Acumular los textos dentro de `lenguajes.forEach()`.
  6. Imprimir el listado en `#resultado`.

---

### Ejercicio 12: `forEach` con Elemento e Índice (`elemento, indice`)
* **Archivos:** [`ejercicio_12/app.js`](./ejercicio_12/app.js) | [Solución](soluciones/ejercicio_12/app.js)
* **Objetivo:** Utilizar el segundo parámetro de la función callback de `forEach()` para acceder a la posición de cada elemento.
* **Enunciado:**
  Partimos de un listado de películas favoritas:
  `let peliculas = ['El Padrino', 'Pulp Fiction', 'Interestelar', 'Matrix', 'Origen'];`.
  1. Permite añadir nuevas películas pulsando `#btnAgregar` (`type="button"`).
  2. Al pulsar el botón "Generar Ranking" (`#btnRanking`):
     - Recorre el array utilizando dos parámetros en la función: `peliculas.forEach(function (pelicula, indice) { ... })`.
     - Construye una lista numerada sumándole 1 al índice para el ranking humano: `Puesto ${indice + 1}: ${pelicula}`.
     - Muestra el ranking completo en el div `#resultado`.
* **Pasos a realizar:**
  1. Declarar el array `peliculas`.
  2. Apuntar a los elementos del DOM (`#inputPelicula`, `#btnAgregar`, `#btnRanking`, `#resultado`).
  3. Escuchar `'click'` en `#btnAgregar` para permitir añadir películas con `push()`.
  4. Escuchar `'click'` en `#btnRanking`.
  5. Acumular el puesto y título con `peliculas.forEach(function (pelicula, indice) { ... })`.
  6. Mostrar el ranking en `#resultado`.

---

### Ejercicio 13: Acumular valores numéricos con `forEach()`
* **Archivos:** [`ejercicio_13/app.js`](./ejercicio_13/app.js) | [Solución](soluciones/ejercicio_13/app.js)
* **Objetivo:** Aplicar `forEach()` a operaciones matemáticas de acumulación (suma total y media aritmética).
* **Enunciado:**
  Array inicial de precios de artículos: `let precios = [12.50, 4.99, 25.00, 8.75, 15.30];`.
  1. Permite añadir nuevos precios pulsando `#btnAgregar` (`type="button"`).
  2. Al pulsar el botón "Calcular Total y Media" (`#btnCalcular`):
     - Inicializa un acumulador en cero: `let sumaTotal = 0;`.
     - Recorre con `precios.forEach(function (precio) { sumaTotal += precio; });`.
     - Calcula el precio medio dividiendo `sumaTotal / precios.length`.
     - Muestra en `#resultado` la cantidad de productos, la lista de precios, la suma total y la media formateadas a dos decimales con `.toFixed(2)`.
* **Pasos a realizar:**
  1. Declarar el array `precios`.
  2. Apuntar a `#inputPrecio`, `#btnAgregar`, `#btnCalcular` y `#resultado`.
  3. Escuchar el evento `'click'` en `#btnAgregar` para insertar nuevos precios validados.
  4. Escuchar el evento `'click'` en `#btnCalcular`.
  5. Acumular la suma recorriendo con `forEach()`.
  6. Calcular la media con `.length` y mostrar los resultados formateados en `#resultado`.

---

### Ejercicio 14: Bucle `for` clásico con contador
* **Archivos:** [`ejercicio_14/app.js`](./ejercicio_14/app.js) | [Solución](soluciones/ejercicio_14/app.js)
* **Objetivo:** Conocer la estructura clásica de bucle con contador `i`, condición de parada e incremento.
* **Enunciado:**
  Array de temperaturas registradas: `const temperaturas = [18, 22, 14, 25, 30, 11, 27];`.
  Al hacer clic en el botón `#btnFiltrar` (`type="button"`):
  1. Obtén el umbral de temperatura introducido por el usuario.
  2. Recorre el array con un bucle `for` tradicional: `for (let i = 0; i < temperaturas.length; i++)`.
  3. Con un `if`, comprueba si `temperaturas[i] >= umbral`. Si se cumple, incrementa un contador y acumula la posición `i` y los grados.
  4. Muestra en `#resultado` el total de temperaturas que superan el umbral y su detalle.
* **Pasos a realizar:**
  1. Declarar el array `temperaturas`.
  2. Apuntar a `#inputUmbral`, `#btnFiltrar` y `#resultado`.
  3. Escuchar el evento `'click'` en `#btnFiltrar`.
  4. Construir el bucle `for` clásico con `(let i = 0; i < temperaturas.length; i++)`.
  5. Comparar cada elemento `temperaturas[i]` y mostrar el informe filtrado.

---

### Ejercicio 15: Bucle `while` con control manual de índice
* **Archivos:** [`ejercicio_15/app.js`](./ejercicio_15/app.js) \| [Solución](soluciones/ejercicio_15/app.js)
* **Objetivo:** Comprender la estructura de repetición `while` y la necesidad crítica del incremento manual `i++`.
* **Enunciado:**
  Array de palabras: `const palabras = ['sol', 'mar', 'montaña', 'bosque', 'rio'];`.
  Al pulsar el botón "Recorrer con Bucle while" (`#btnWhile`):
  1. Inicializa el índice antes del bucle: `let i = 0;`.
  2. Establece la condición de parada: `while (i < palabras.length)`.
  3. Dentro del bucle, procesa la palabra actual (`palabras[i].toUpperCase()`), su longitud (`palabras[i].length`) e incrementa obligatoriamente el índice con `i++`.
  4. Muestra el resultado de cada casilla en el div `#resultado`.
* **Pasos a realizar:**
  1. Declarar el array `palabras`.
  2. Apuntar a `#btnWhile` y `#resultado`.
  3. Escuchar el evento `'click'` en `#btnWhile`.
  4. Construir el bucle `while` asegurando la inicialización `let i = 0` y el incremento `i++`.
  5. Imprimir el recorrido final en `#resultado`.
