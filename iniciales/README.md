# Iniciales: Introducción a la Web y Primeros Pasos con JavaScript

Bienvenido a la carpeta de **Ejercicios Iniciales**. Esta unidad marca el punto de partida del curso. Su propósito es asentar con total claridad los cimientos del desarrollo web: comprender la función de cada una de las tres tecnologías clave (**HTML**, **CSS** y **JavaScript**), aprender las distintas formas de enlazar hojas de estilo y scripts, y entender qué es el **DOM** y por qué la posición de la etiqueta `<script>` (o el uso del atributo `defer`) determina si podemos o no interactuar con la página.

---

## 1. Teoría Fundamental: La Tríada Web y el Modelo DOM

### 1.1. La Tríada de la Web: HTML, CSS y JavaScript
Una página web moderna funciona gracias a la colaboración de tres capas con responsabilidades bien diferenciadas:

```
┌─────────────────────────────────────────────────────────────┐
│ HTML (Estructura y Contenido)                               │
│ El esqueleto: textos, títulos, párrafos, tablas, inputs     │
├─────────────────────────────────────────────────────────────┤
│ CSS (Presentación y Estilo)                                 │
│ La apariencia: colores, dimensiones, márgenes, tipografías  │
├─────────────────────────────────────────────────────────────┤
│ JavaScript (Lógica e Interactividad)                        │
│ El comportamiento: cálculos, respuestas al usuario, cambios │
└─────────────────────────────────────────────────────────────┘
```

* **HTML (HyperText Markup Language):** Define qué elementos hay en la página (`<div>`, `<h1>`, `<p>`, `<table>`, `<input>`).
* **CSS (Cascading Style Sheets):** Define cómo se ven esos elementos (`background-color: red;`, `width: 500px;`, `text-align: center;`).
* **JavaScript (JS):** Define qué hacen esos elementos (pedir datos con `prompt()`, calcular operaciones matemáticas, modificar el contenido o cambiar estilos sobre la marcha).

---

### 1.2. Cómo incluir CSS: ¿En el mismo archivo o en archivo externo?
Existen dos formas principales de añadir estilos a nuestras páginas:

#### A. CSS Interno (en el mismo archivo HTML)
Se escriben las reglas de estilo dentro de una etiqueta `<style>` situada en la cabecera `<head>` del documento:

```html
<head>
    <style>
        div {
            color: white;
            background-color: red;
            width: 500px;
            margin: 10px auto;
        }
    </style>
</head>
```
* **Ventaja:** Ideal para pruebas muy rápidas o ejemplos de un solo archivo (visto en `03.html`).
* **Inconveniente:** Si tenemos varias páginas, hay que repetir el código CSS en cada una.

#### B. CSS Externo (en un archivo independiente `.css`)
Los estilos se guardan en un archivo separado (por ejemplo, `04.css`) y se vinculan desde el HTML mediante la etiqueta `<link>` dentro del `<head>`:

```html
<head>
    <link rel="stylesheet" href="04.css" />
</head>
```
* **Ventaja profesional:** Separación total de responsabilidades, reutilización del mismo diseño en múltiples páginas y código mucho más limpio y mantenible (visto a partir de `04.html`).

---

### 1.3. ¿Qué es el DOM (Document Object Model)?
Cuando el navegador web lee nuestro archivo `.html`, no trabaja directamente con el texto plano que hemos escrito en el editor de código.

En su lugar, el navegador analiza cada etiqueta y construye en la memoria del ordenador una representación estructurada en árbol llamada **DOM (Document Object Model)**:

```
                window
                  │
               document
                  │
               <html>
             ┌────┴────┐
          <head>     <body>
           │           │
        <title>      <div> ─── "Ejemplo de clase"
```

* Cada etiqueta HTML se convierte en un **objeto interactivo (nodo)** en JavaScript.
* A través de JavaScript podemos **seleccionar** esos nodos con `document.querySelector()`.
* Una vez seleccionado un nodo, podemos:
  - Leer o cambiar su texto: `nodo.textContent` o `nodo.innerHTML`.
  - Cambiar sus estilos CSS en vivo: `nodo.style.backgroundColor = 'blue'`.
  - Leer lo que el usuario ha escrito en un campo: `input.value`.

---

### 1.4. ¿Dónde colocar la etiqueta `<script>` y por qué importa?
El navegador lee y procesa el código HTML en orden secuencial: **de arriba hacia abajo**. Por este motivo, el lugar donde situemos la etiqueta `<script>` es crítico.

#### Caso 1: En el `<head>` SIN `defer` (❌ Problema con el DOM)
```html
<head>
    <script src="app.js"></script> <!-- Sin defer -->
</head>
<body>
    <div id="caja">Hola</div>
</body>
```
* **¿Qué sucede?** El navegador lee el `<head>`, encuentra la etiqueta `<script>`, detiene inmediatamente la lectura del HTML y ejecuta el archivo JavaScript.
* **El error:** En ese instante, el `<body>` y su `<div id="caja">` **aún no han sido leídos ni creados en la memoria del DOM**.
* Si el código hace `document.querySelector('#caja')`, JavaScript devolverá **`null`**, provocando el clásico error:
  `Uncaught TypeError: Cannot set properties of null`.

---

#### Caso 2: Al final del `<body>` (✔️ Solución tradicional)
```html
<body>
    <div id="caja">Hola</div>
    
    <!-- El script se coloca justo antes de cerrar </body> -->
    <script src="app.js"></script>
</body>
```
* **¿Qué sucede?** Cuando el navegador llega a la etiqueta `<script>`, ya ha leído y creado en memoria todos los elementos HTML anteriores (`<div id="caja">`).
* **Resultado:** JavaScript tiene acceso inmediato y seguro al DOM. Es el patrón utilizado en la mayoría de estos ejercicios iniciales (`01` a `16`).

---

#### Caso 3: En el `<head>` CON el atributo `defer` (⭐ El estándar moderno)
```html
<head>
    <script src="app.js" defer></script>
</head>
<body>
    <div id="caja">Hola</div>
</body>
```
* **¿Qué hace `defer`?** Le da una orden especial al navegador:
  1. *Descarga el archivo JavaScript en segundo plano (paralelo)* mientras sigues leyendo y pintando el HTML sin pausas.
  2. *No ejecutes el código JS hasta que todo el documento HTML haya terminado de procesarse*.
* **Resultado:** Obtenemos lo mejor de ambos mundos: scripts organizados en la cabecera `<head>`, máxima velocidad de carga de la página y acceso 100% garantizado a todos los elementos del DOM.

---

### 1.5. Comparativa Rápida: Ubicación del Script

| Ubicación | Descarga del JS | Momento de Ejecución | ¿Puede acceder al DOM? | ¿Bloquea la vista del HTML? |
| :--- | :--- | :--- | :---: | :---: |
| `<head>` clásico | Detiene el HTML | De inmediato en el `<head>` | ❌ **NO** (devuelve `null`) | ⚠️ Sí (pantalla en blanco) |
| Fin de `<body>` | Tras leer el HTML | Al final del documento | ✔️ **SÍ** | No |
| `<head>` con `defer` | En paralelo (asíncrona) | Cuando el DOM está listo | ✔️ **SÍ** | No (máxima velocidad) |

---

### 1.6. Código JS Interno vs Código JS Externo
Al igual que con el CSS:
* **JS Interno:** Se escribe directamente entre `<script>` y `</script>` dentro del HTML (ejemplos `01.html`, `02.html`, `03.html`). Útil para experimentos de 2 minutos.
* **JS Externo:** Se separa en su propio archivo `.js` y se enlaza con `<script src="archivo.js"></script>` (ejemplos `04` a `16`). Es la práctica profesional obligatoria para mantener el código ordenado y reutilizable.

---

## 2. Tabla Resumen de los 16 Ejercicios Iniciales

| Nº | Ejercicio | Concepto Clave Aprendido | Archivo HTML | Archivo JS / CSS |
| :---: | :--- | :--- | :---: | :---: |
| **01** | Primer script interno | JS embebido al final de `body`, variables (`let`) y `alert()` | [`01.html`](./01.html) | *(Embebido en HTML)* |
| **02** | Primer acceso al DOM | `document.querySelector('div')`, lectura con `.innerHTML` y `alert()` | [`02.html`](./02.html) | *(Embebido en HTML)* |
| **03** | Estilos CSS internos | CSS en `<style>`, entrada con `prompt()` y cambio de `style.backgroundColor` | [`03.html`](./03.html) | *(Embebido en HTML)* |
| **04** | Separación en 3 archivos | HTML (`04.html`) + CSS externo (`04.css`) + JS externo (`04.js`) | [`04.html`](./04.html) | [`04.js`](./04.js) / [`04.css`](./04.css) |
| **05** | Suma con `Number()` | Entrada por `prompt()`, conversión con `Number()` para evitar concatenar | [`05.html`](./05.html) | [`05.js`](./05.js) |
| **06** | Rellenar tabla HTML | Captura de nombre, edad y población con volcado en celdas `<td>` | [`06.html`](./06.html) | [`06.js`](./06.js) |
| **07** | Geometría: Círculo | Cálculo con `Math.PI` y operador de potencia `**` en elementos `<span>` | [`07.html`](./07.html) | [`07.js`](./07.js) |
| **08** | Dibujo y escala CSS | Redimensionar una caja circular modificando `style.width` y `style.height` en píxeles | [`08.html`](./08.html) | [`08.js`](./08.js) |
| **09** | Títulos y párrafos | Combinar constantes fijas y variables de `prompt()` en `<h1>` y `<p>` | [`09.html`](./09.html) | [`09.js`](./09.js) |
| **10** | Cálculo de potencias | Base y exponente con `Number()`, operador `**` y template literals | [`10.html`](./10.html) | [`10.js`](./10.js) |
| **11** | Rectángulo en lista | Cálculo de área y perímetro de rectángulo en una lista `<ul>` con `<span>` | [`11.html`](./11.html) | [`11.js`](./11.js) |
| **12** | HTML dinámico con backticks | Generar una lista `<ul>` completa con resultados usando `div.innerHTML` | [`12.html`](./12.html) | [`12.js`](./12.js) |
| **13** | Caja interactiva completa | Pedir ancho, alto y color y asignarlos a la vez con `style` y textos | [`13.html`](./13.html) | [`13.js`](./13.js) |
| **14** | `querySelector` vs `All` | Tabla 4x4: seleccionar el primer `td` vs el 4º elemento (`celdas[3]`) | [`14.html`](./14.html) | [`14.js`](./14.js) |
| **15** | Copiar texto entre `divs` | Leer el contenido de un `div#nombre` con `textContent` y volcarlo en `#salida` | [`15.html`](./15.html) | [`15.js`](./15.js) |
| **16** | Contenedor vs Input | Leer el valor de un `<input id="nombre">` con `.value` y copiarlo en un `div` | [`16.html`](./16.html) | [`16.js`](./16.js) |

---

## 3. Enunciados y Análisis Detallado de los Ejercicios

### Ejercicio 01: El primer script en la página
* **Archivos:** [`01.html`](./01.html)
* **Objetivo:** Mostrar cómo se ejecuta el código JavaScript básico incrustado en el propio documento HTML.
* **Enunciado:**
  Crear una estructura HTML con un `<div>` que contenga el texto `"Ejemplo de clase"`. Al final del `<body>`, añadir una etiqueta `<script>` que declare una variable `mensaje = "hola clase"` y la muestre al usuario mediante una ventana emergente `alert()`.
* **Puntos clave:**
  - Código JavaScript interno.
  - Declaración básica con `let`.

---

### Ejercicio 02: Primer contacto con el DOM
* **Archivos:** [`02.html`](./02.html)
* **Objetivo:** Aprender a seleccionar un elemento de la página y leer su contenido desde JavaScript.
* **Enunciado:**
  Dado un `<div>Ejemplo de clase hoy con ramon</div>`, utilizar `document.querySelector('div')` para apuntar a él desde JavaScript. Extraer el texto interior que contiene usando la propiedad `.innerHTML`, guardarlo en una variable y mostrarlo en un `alert()`.
* **Puntos clave:**
  - `document.querySelector()` busca el primer elemento que coincida con el selector.
  - `.innerHTML` lee el contenido interno de la etiqueta.

---

### Ejercicio 03: Estilos CSS internos y cambio dinámico con `prompt()`
* **Archivos:** [`03.html`](./03.html)
* **Objetivo:** Integrar HTML, CSS interno en `<style>` y modificación dinámica de estilos en línea.
* **Enunciado:**
  Decorar un `<div>` mediante CSS dentro de la etiqueta `<style>` en el `<head>`. Mediante un script al final del `<body>`:
  1. Apuntar al `<div>`.
  2. Pedir al usuario un color en inglés mediante `prompt("Introduce un color en ingles")`.
  3. Cambiar el color de fondo del elemento asignando el valor a `nodoDiv.style.backgroundColor`.
* **Puntos clave:**
  - Inclusión de estilos mediante `<style>`.
  - La propiedad `.style` en JavaScript modifica los estilos CSS en línea del elemento.

---

### Ejercicio 04: Separación total de responsabilidades (HTML, CSS y JS externos)
* **Archivos:** [`04.html`](./04.html) \| [`04.css`](./04.css) \| [`04.js`](./04.js)
* **Objetivo:** Romper el archivo monolítico y organizar el proyecto en tres archivos especializados independientes.
* **Enunciado:**
  Replicar el funcionamiento del Ejercicio 03 separando el código:
  1. El HTML se queda exclusivamente con la estructura en `04.html`.
  2. Los estilos se extraen al archivo `04.css` y se enlazan con `<link rel="stylesheet" href="04.css" />`.
  3. El código JavaScript se extrae a `04.js` y se enlaza con `<script src="04.js"></script>`.
* **Puntos clave:**
  - Estructura limpia y profesional de proyectos web.

---

### Ejercicio 05: Suma numérica y prevención de concatenación
* **Archivos:** [`05.html`](./05.html) \| [`05.js`](./05.js)
* **Objetivo:** Evitar el clásico error de sumar textos pedidos con `prompt()`.
* **Enunciado:**
  Solicitar dos números al usuario mediante dos llamadas a `prompt()`. Convertir obligatoriamente ambas entradas con `Number()`, calcular su suma matemática y mostrar el resultado tanto en una alerta emergente como en la consola del navegador (`console.log`).
* **Puntos clave:**
  - `prompt()` devuelve texto; sin `Number()`, `10 + 5` daría `"105"`.

---

### Ejercicio 06: Rellenar una tabla HTML dinámica
* **Archivos:** [`06.html`](./06.html) \| [`06.js`](./06.js)
* **Objetivo:** Apuntar a identificadores específicos de una tabla e inyectar datos recogidos por teclado.
* **Enunciado:**
  Dada una tabla con celdas identificadas: `<td id="nombre">`, `<td id="edad">` y `<td id="poblacion">`.
  Pedir por teclado los tres datos al usuario y escribir cada uno en su celda correspondiente mediante `.innerHTML`.
* **Puntos clave:**
  - Selección precisa por identificador con `#nombre`, `#edad`, etc.

---

### Ejercicio 07: Fórmulas matemáticas y objeto `Math`
* **Archivos:** [`07.html`](./07.html) \| [`07.js`](./07.js)
* **Objetivo:** Realizar cálculos geométricos precisos utilizando las funciones matemáticas de JavaScript.
* **Enunciado:**
  Pedir el radio de un círculo con `prompt()`. Calcular el área utilizando la constante `Math.PI` y el operador de potencia (`Math.PI * radio ** 2`). Mostrar el radio introducido y el área calculada en los elementos `<span id="radio">` y `<span id="area">`.
* **Puntos clave:**
  - Uso de `Math.PI` y potencias `**`.

---

### Ejercicio 08: Dibujo y escalado de formas con CSS
* **Archivos:** [`08.html`](./08.html) \| [`08.js`](./08.js)
* **Objetivo:** Relacionar un valor numérico introducido por el usuario con las dimensiones físicas de un elemento gráfico en pantalla.
* **Enunciado:**
  Pedir un número por teclado. Mostrar el número en el `<div id="salida">` con formato HTML enriquecido y, simultáneamente, cambiar el ancho y alto del `<div id="caja">` (que tiene `border-radius: 100%`) para dibujar un círculo a escala del número de píxeles introducido.
* **Puntos clave:**
  - Asignación de unidades: `divCaja.style.width = \`\${numero}px\``.

---

### Ejercicio 09: Encabezados y párrafos sincronizados
* **Archivos:** [`09.html`](./09.html) \| [`09.js`](./09.js)
* **Objetivo:** Combinar textos fijos del sistema con entradas dinámicas del usuario.
* **Enunciado:**
  Definir una constante con el título del ejercicio y pedir al usuario su población con `prompt()`. Inyectar el título en la etiqueta `<h1>` y la población en el párrafo `<p id="parrafo">`.

---

### Ejercicio 10: Potencias y formato de salida
* **Archivos:** [`10.html`](./10.html) \| [`10.js`](./10.js)
* **Objetivo:** Manejar múltiples inputs numéricos y componer cadenas con operaciones matemáticas.
* **Enunciado:**
  Pedir la base y el exponente con `Number(prompt())`. Calcular la potencia (`base ** exponente`) y mostrar en sus respectivos spans la base, el exponente y la expresión completa (por ejemplo: `2 ** 3 = 8`).

---

### Ejercicio 11: Geometría de un rectángulo en lista `<ul>`
* **Archivos:** [`11.html`](./11.html) \| [`11.js`](./11.js)
* **Objetivo:** Realizar múltiples cálculos sobre los mismos datos y volcarlos en una lista estructurada.
* **Enunciado:**
  Pedir por teclado los dos lados de un rectángulo (`lado1` y `lado2`). Calcular su área (`lado1 * lado2`) y su perímetro (`2 * lado1 + 2 * lado2`). Mostrar cada uno de los cuatro valores en sus respectivos `<span>`.

---

### Ejercicio 12: Generación de bloques HTML completos con template literals
* **Archivos:** [`12.html`](./12.html) \| [`12.js`](./12.js)
* **Objetivo:** Construir estructuras HTML enteras desde JavaScript en lugar de limitarse a rellenar huecos vacíos.
* **Enunciado:**
  A partir de los lados de un rectángulo, generar desde JavaScript una lista `<ul>` completa con todos sus `<li>` mediante backticks (`` ` ``) e insertarla de una sola vez en el `<div id="salida">` usando `innerHTML`.
* **Puntos clave:**
  - Potencia de los template literals multilínea para crear HTML dinámico.

---

### Ejercicio 13: Caja dinámica paramétrica
* **Archivos:** [`13.html`](./13.html) \| [`13.js`](./13.js)
* **Objetivo:** Configurar simultáneamente dimensiones y colores de un elemento mediante entradas de usuario.
* **Enunciado:**
  Pedir por teclado el ancho, el alto y el color de un rectángulo. Mostrar los valores introducidos en cajas de texto y aplicar los tres valores simultáneamente a una caja gráfica `#caja` mediante `style.width`, `style.height` y `style.backgroundColor`.

---

### Ejercicio 14: Selección individual vs Selección múltiple (`querySelector` vs `querySelectorAll`)
* **Archivos:** [`14.html`](./14.html) \| [`14.js`](./14.js)
* **Objetivo:** Introducir la diferencia crucial entre seleccionar un único elemento o una lista completa de nodos.
* **Enunciado:**
  Dada una tabla de 4x4 con 16 celdas `<td>`:
  1. `document.querySelector('td')`: selecciona únicamente la **primera** celda de la tabla y la colorea de rojo.
  2. `document.querySelectorAll('td')`: obtiene una colección (NodeList) con las **16 celdas**, permitiendo acceder por índice (por ejemplo, `celdas[3]` para colorear la cuarta celda).
* **Puntos clave:**
  - `querySelector()` devuelve un único nodo.
  - `querySelectorAll()` devuelve una colección indexada como un array.

---

### Ejercicio 15: Lectura y copia entre elementos contenedores (`<div>`)
* **Archivos:** [`15.html`](./15.html) \| [`15.js`](./15.js)
* **Objetivo:** Aprender a extraer texto de un contenedor del DOM para plasmarlo en otro contenedor.
* **Enunciado:**
  Dado un `<div id="nombre">Alpe</div>`, leer su contenido textual mediante la propiedad `.textContent` y escribir dicho valor dentro del `<div id="salida">`.
* **Puntos clave:**
  - Uso simétrico de `.textContent`: a la derecha del igual para leer (`nombre = div.textContent`) y a la izquierda para escribir (`salida.textContent = nombre`).

---

### Ejercicio 16: La gran diferencia: Contenedor vs `<input>` (`.textContent` vs `.value`)
* **Archivos:** [`16.html`](./16.html) \| [`16.js`](./16.js)
* **Objetivo:** Comprender por qué los campos de formulario no se leen con `textContent` ni con `innerHTML`.
* **Enunciado:**
  En este ejercicio, en lugar de un `div`, tenemos un campo de texto interactivo: `<input id="nombre" value="Alpe" />`.
  Leer el texto escrito en el input utilizando su propiedad específica **`.value`** y volcarlo dentro del `<div id="salida">` mediante `.textContent`.
* **Puntos clave:**
  - Las etiquetas contenedoras (`div`, `p`, `span`, `h1`) usan `.textContent` / `.innerHTML`.
  - Las etiquetas de formulario (`input`, `select`, `textarea`) usan **`.value`**.
