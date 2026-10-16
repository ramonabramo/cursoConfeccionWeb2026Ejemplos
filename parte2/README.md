# Parte 2: De la Programación con `prompt()` a la Web Reactiva con Eventos y Formularios Básicos

Bienvenido a la **Parte 2** del curso de JavaScript. En este bloque damos el salto más importante en el desarrollo web moderno: **abandonar la programación lineal y bloqueante con `prompt()`** para adoptar la **programación reactiva basada en eventos**, formularios interactivos y manipulación directa del Document Object Model (DOM).

---

## 1. Teoría Fundamental: El Cambio de Paradigma

### 1.1. El problema de programar con `prompt()`
Cuando empezamos a programar en JavaScript, es muy común utilizar `prompt()` para solicitar datos al usuario:

```javascript
let edad = prompt("Introduce tu edad");
```

Aunque `prompt()` es útil para entender variables en los primeros minutos de aprendizaje, tiene graves inconvenientes en el desarrollo web real:
1. **Es bloqueante:** Mientras la ventana modal de `prompt()` está abierta, la página web queda congelada por completo; el usuario no puede hacer scroll, interactuar con otros elementos ni ver animaciones.
2. **Rompe la experiencia de usuario (UX):** Muestra una ventana emergente del sistema operativo con un diseño tosco que no se puede personalizar con CSS.
3. **No es escalable:** Si necesitamos pedir 5 datos (nombre, apellidos, email, edad, teléfono), tendríamos que encadenar 5 ventanas emergentes consecutivas, lo que resulta frustrante para cualquier usuario.

---

### 1.2. El nuevo paradigma: Formularios y Eventos
En una aplicación web profesional, la interfaz se construye con HTML y CSS en forma de **formulario** y **botones**. El programa de JavaScript permanece en reposo y solo se ejecuta **cuando el usuario decide realizar una acción** (por ejemplo, hacer clic en un botón).

```
[Usuario rellena inputs en el HTML]
                 │
                 ▼
[Usuario pulsa el botón "Calcular" o "Enviar"]
                 │
                 ▼
[El navegador detecta el evento 'click']
                 │
                 ▼
[Se ejecuta la función manejadora de JavaScript]
                 │
                 ▼
[JS lee los inputs, procesa los datos y actualiza el DOM]
```

---

### 1.3. Conectar JavaScript con el DOM: `document.querySelector()`
Para interactuar con la página web desde JavaScript, primero necesitamos **"apuntar"** o hacer referencia a las etiquetas HTML mediante sus selectores CSS:

```javascript
// Apuntar a un botón por su etiqueta
const boton = document.querySelector('button');

// Apuntar a elementos por su identificador (ID)
const inputNombre = document.querySelector('#nombre');
const divSalida = document.querySelector('#salida');
```

---

### 1.4. Lectura y Escritura en la Página Web

#### A. Lectura de campos de formulario (`.value`)
Los elementos de entrada de datos (`<input>`, `<select>`, `<textarea>`) almacenan el texto escrito por el usuario en su propiedad `.value`:

```javascript
let nombre = inputNombre.value; // Devuelve una cadena de texto (string)
```

> [!IMPORTANT]
> **Cuidado con los números:** Todo valor obtenido de un input mediante `.value` es siempre de tipo texto (`string`), aunque el input sea de tipo `type="number"`.
> Si queremos operar matemáticamente con él, **debemos convertirlo a número** con `Number()` para evitar que el operador `+` concatene en lugar de sumar:
> ```javascript
> // Error común (concatena texto):
> let sumaErronea = inputNum1.value + inputNum2.value; // "5" + "3" = "53"
> 
> // Forma correcta (suma matemática):
> let sumaCorrecta = Number(inputNum1.value) + Number(inputNum2.value); // 5 + 3 = 8
> ```

#### B. Escritura en elementos del DOM (`.textContent` e `.innerHTML`)
Para mostrar los resultados en la página (en un `<div>`, `<span>`, `<p>`, `<li>`, etc.), usamos:
- **`nodo.textContent`**: Inserta texto plano (más seguro y rápido).
- **`nodo.innerHTML`**: Inserta texto o código HTML interpretado por el navegador.

---

### 1.5. El Escuchador de Eventos: `addEventListener('click', callback)`
Para indicarle al navegador que deseamos reaccionar ante una acción del usuario, usamos el método `addEventListener()`:

```javascript
// 1. Apuntamos al botón
const boton = document.querySelector('#miBoton');

// 2. Colocamos el escuchador del evento 'click'
boton.addEventListener('click', function () {
    // Código que se ejecutará CADA VEZ que el usuario haga clic en el botón
});
```

---

### 1.6. Estructura Estándar de Trabajo en Parte 2
Para facilitar el aprendizaje de los alumnos, todos los ejercicios siguen esta estructura metodológica:

```javascript
// estructura del programa principal

// 1. Declaración de variables y constantes globales (si las hubiera)

// 2. Gestión de eventos: constantes al DOM que queremos escuchar
const boton = document.querySelector('button');

// 3. Colocar escuchadores de eventos
boton.addEventListener('click', function () {

    // --- Estructura interna de la función ---

    // Declaración de variables locales
    let edad = 0;

    // Constantes a elementos del DOM (inputs y salidas)
    const inputEdad = document.querySelector('#edad');
    const nodoSalida = document.querySelector('#salida');

    // Entradas: leer datos del formulario
    edad = Number(inputEdad.value);

    // Procesamiento: cálculos u operaciones lógicas

    // Salidas: reflejar los resultados en la interfaz
    nodoSalida.innerHTML = edad;
});
```

---

## 2. Tabla Resumen de los 9 Ejercicios

| Nº | Ejercicio | Concepto Clave / Novedad | Archivo JS | Archivo HTML |
| :---: | :--- | :--- | :---: | :---: |
| **01** | El punto de partida | Código lineal clásico: uso de `prompt()` y salida en `#salida` | [`01.js`](./01.js) | [`01.html`](./01.html) |
| **02** | El primer evento | Sustitución del `prompt` por `<input>` y `button.addEventListener('click')` | [`02.js`](./02.js) | [`02.html`](./02.html) |
| **03** | Múltiples inputs y salidas | Lectura de 3 inputs (nombre, edad, población) y volcado en elementos `<li>` | [`03.js`](./03.js) | [`03.html`](./03.html) |
| **04** | Calculadora básica | 2 inputs y 4 botones con escuchadores independientes (`+`, `-`, `*`, `/`) | [`04.js`](./04.js) | [`04.html`](./04.html) |
| **05** | Geometría: Círculo y SVG | Cálculo de área y perímetro de círculo + actualización de SVG con `setAttribute` | [`05.js`](./05.js) | [`05.html`](./05.html) |
| **06** | Geometría: Cuadrado | Cálculo de área y perímetro de un cuadrado a partir de su lado en un input | [`06.js`](./06.js) | [`06.html`](./06.html) |
| **07** | Intercambio de texto en divs | Algoritmo de intercambio de valores entre dos contenedores mediante variable auxiliar | [`07.js`](./07.js) | [`07.html`](./07.html) |
| **08** | Intercambio entre inputs | Intercambio dinámico de valores entre dos campos de texto (origen y destino) | [`08.js`](./08.js) | [`08.html`](./08.html) |
| **09** | Manipulación de estilos CSS | Cambiar colores de múltiples elementos dinámicamente con `style.backgroundColor` | [`09.js`](./09.js) | [`09.html`](./09.html) |

---

## 3. Enunciados Detallados de los Ejercicios

### Ejercicio 01: El punto de partida con `prompt()`
* **Archivos:** [`01.js`](./01.js) \| [`01.html`](./01.html)
* **Objetivo:** Mostrar cómo funcionaban los programas antes de usar eventos: ejecución directa al cargar la página.
* **Enunciado:**
  Solicitar la edad al usuario mediante la función del sistema `prompt("introduce edad")` y escribir el valor obtenido dentro del elemento con identificador `#salida` usando `innerHTML`.
* **Puntos clave:**
  - Código lineal sin función escuchadora.
  - El navegador se bloquea hasta que el usuario responde al prompt.

---

### Ejercicio 02: El gran cambio a `addEventListener` y formulario
* **Archivos:** [`02.js`](./02.js) \| [`02.html`](./02.html)
* **Objetivo:** Transformar el Ejercicio 01 a programación reactiva con eventos.
* **Enunciado:**
  En lugar de usar `prompt()`, disponer en el HTML de una caja de texto `<input id="edad">` y un botón `<button>`.
  Al hacer clic en el botón:
  1. Leer el valor del campo mediante `inputEdad.value`.
  2. Escribir dicho valor dentro del elemento `#salida`.
* **Puntos clave:**
  - Uso de `document.querySelector('button')` para seleccionar el elemento disparador.
  - Implementación del escuchador `boton.addEventListener('click', function () { ... })`.

---

### Ejercicio 03: Múltiples inputs y salidas en lista
* **Archivos:** [`03.js`](./03.js) \| [`03.html`](./03.html)
* **Objetivo:** Manejar formularios con varios campos a la vez y distribuir sus valores en diferentes elementos del DOM.
* **Enunciado:**
  Crear un formulario con tres campos de texto: nombre (`#nombre`), edad (`#edad`) y población (`#poblacion`), junto a un botón y una lista desordenada `<ul>`.
  Al pulsar el botón:
  1. Leer simultáneamente los tres inputs.
  2. Escribir cada dato en su elemento correspondiente de la lista (`#liNombre`, `#liEdad`, `#liPoblacion`).
* **Puntos clave:**
  - Separación ordenada de constantes al DOM (elementos de lectura vs elementos de escritura).

---

### Ejercicio 04: Calculadora básica con 4 botones
* **Archivos:** [`04.js`](./04.js) \| [`04.html`](./04.html)
* **Objetivo:** Asignar escuchadores de eventos independientes a diferentes botones para realizar distintas operaciones sobre los mismos datos.
* **Enunciado:**
  Diseñar un formulario con dos campos numéricos (`#numero1` y `#numero2`) y cuatro botones independientes:
  - Botón Sumar (`#botonSumar`): suma ambos números y muestra el resultado en `#salida`.
  - Botón Restar (`#botonRestar`): resta ambos números.
  - Botón Multiplicar (`#botonMultiplicar`): multiplica ambos números.
  - Botón Dividir (`#botonDividir`): divide el primer número entre el segundo.
* **Puntos clave:**
  - Conversión obligatoria de texto a número con `Number(input.value)`.
  - Cuatro escuchadores `addEventListener('click')` apuntando a sus respectivos botones.

---

### Ejercicio 05: Cálculos geométricos: Círculo y SVG
* **Archivos:** [`05.js`](./05.js) \| [`05.html`](./05.html)
* **Objetivo:** Conectar el cálculo matemático con la actualización de atributos de elementos gráficos SVG.
* **Enunciado:**
  El usuario introduce el radio de una circunferencia en un campo numérico `#radio`.
  Al pulsar el botón:
  1. Calcular el área del círculo: $\text{Área} = \pi \cdot r^2$ (`Math.PI * radio ** 2`).
  2. Calcular el perímetro: $\text{Perímetro} = 2 \cdot \pi \cdot r$ (`2 * Math.PI * radio`).
  3. Mostrar el radio, el área y el perímetro en sus correspondientes `<span>`.
  4. Actualizar visualmente el círculo SVG modificando su atributo `r` con `circulo.setAttribute('r', radio)`.
* **Puntos clave:**
  - Uso de la librería matemática `Math.PI` y el operador de potencia `**`.
  - Manipulación de atributos gráficos mediante `setAttribute()`.

---

### Ejercicio 06: Cálculos geométricos: Cuadrado
* **Archivos:** [`06.js`](./06.js) \| [`06.html`](./06.html)
* **Objetivo:** Reforzar la lectura de campos numéricos y el cálculo geométrico con botones.
* **Enunciado:**
  Crear un formulario con un campo `#inputLado` y un botón.
  Al pulsar el botón:
  1. Leer el lado introducido por el usuario y convertirlo a número.
  2. Calcular el área del cuadrado: $\text{Área} = \text{lado} \cdot \text{lado}$.
  3. Calcular el perímetro del cuadrado: $\text{Perímetro} = 4 \cdot \text{lado}$.
  4. Mostrar el lado, el área y el perímetro en los `<span>` de salida.
* **Puntos clave:**
  - Conversión de tipos con `Number()`.
  - Volcado de resultados en elementos específicos de la interfaz.

---

### Ejercicio 07: Algoritmo de intercambio en contenedores `<div>`
* **Archivos:** [`07.js`](./07.js) \| [`07.html`](./07.html)
* **Objetivo:** Aprender el algoritmo clásico de intercambio de variables (*swap*) aplicado a elementos del DOM.
* **Enunciado:**
  Disponer de dos bloques en paralelo: `#origen` (con texto "alpe") y `#destino` (con texto "formacion"), y un enlace/botón `#boton` ("Cambiar").
  Al pulsar el botón:
  1. Intercambiar el texto de ambos bloques (el que tenía "alpe" pasa a tener "formacion" y viceversa).
* **Puntos clave:**
  - Necesidad de una variable auxiliar temporal (`let auxiliar = origen.textContent`) para no perder el dato original antes de sobreescribirlo.

---

### Ejercicio 08: Algoritmo de intercambio entre campos `<input>`
* **Archivos:** [`08.js`](./08.js) \| [`08.html`](./08.html)
* **Objetivo:** Aplicar el intercambio de valores entre campos de formulario modificando la propiedad `.value`.
* **Enunciado:**
  Formulario de selección de trayecto con dos campos de texto: `#origen` (ciudad de salida) y `#destino` (ciudad de llegada), junto con un botón `#boton` ("Cambiar").
  Al pulsar el botón:
  1. Leer los valores de ambos inputs.
  2. Asignar el valor de destino en el campo de origen y el de origen en el de destino.
* **Puntos clave:**
  - Diferencia entre manipular `.innerHTML` / `.textContent` (contenedores como `div`) y `.value` (campos de entrada como `input`).

---

### Ejercicio 09: Manipulación de estilos CSS desde JavaScript
* **Archivos:** [`09.js`](./09.js) \| [`09.html`](./09.html)
* **Objetivo:** Modificar estilos visuales CSS en tiempo real respondiendo a eventos de clic.
* **Enunciado:**
  Se muestran tres círculos gráficos (`#circulo1`, `#circulo2`, `#circulo3`) y tres botones con estilos Bootstrap: "Rojo" (`#botonRojo`), "Verde" (`#botonVerde`) y "Azul" (`#botonAzul`).
  Al hacer clic en cualquiera de los botones:
  1. Cambiar simultáneamente el color de fondo de los 3 círculos al color correspondiente ("red", "green" o "blue") utilizando la propiedad `elemento.style.backgroundColor`.
* **Puntos clave:**
  - Tres escuchadores de eventos independientes.
  - Modificación de propiedades CSS en línea mediante el objeto `style`.
