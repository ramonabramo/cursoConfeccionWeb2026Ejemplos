# Módulo Inicial: Introducción a JavaScript y la Tríada Web
## Fundamentos, Carga de Archivos, el DOM y Estructura de Ejercicios

Bienvenido a la carpeta de **ejercicios iniciales** del curso de JavaScript. En este bloque formativo se sientan los cimientos esenciales para cualquier desarrollador web: la interacción entre los tres lenguajes del frontend (**HTML, CSS y JavaScript**), cómo el navegador procesa y representa una página mediante el **DOM**, y cómo cargar los scripts de forma eficiente y segura.

Todos los ejercicios están organizados en carpetas individuales con plantillas comentadas para el alumno (`ejercicio_01/` a `ejercicio_20/`) y sus correspondientes soluciones en `soluciones/` y en las propias carpetas de prácticas.

---

## 1. Teoría Fundamental

### 1.1. La Tríada Web: Roles y Diferencias
Una página web profesional se compone de tres tecnologías que trabajan de forma sincronizada:

```
   ┌────────────────────────────────────────────────────────┐
   │                       LA TRÍADA WEB                    │
   ├──────────────────┬──────────────────┬──────────────────┤
   │       HTML       │       CSS        │    JAVASCRIPT    │
   ├──────────────────┼──────────────────┼──────────────────┤
   │    Estructura    │   Presentación   │  Comportamiento  │
   │  (Los cimientos) │   (La estética)  │  (El dinamismo)  │
   │                  │                  │                  │
   │  - Párrafos <p>  │  - Colores       │  - Clics botón   │
   │  - Botones       │  - Tipografías   │  - Cálculos      │
   │  - Formularios   │  - Flexbox/Grid  │  - Modificar DOM │
   │  - Tablas        │  - Animaciones   │  - Validaciones  │
   └──────────────────┴──────────────────┴──────────────────┘
```

1. **HTML (HyperText Markup Language):** Proporciona el significado semántico y los elementos del documento. Sin HTML no hay contenido.
2. **CSS (Cascading Style Sheets):** Define las reglas visuales para embellecer los elementos HTML. Sin CSS, la web sería texto plano en blanco y negro.
3. **JavaScript (JS):** Es el motor lógico que reacciona a los eventos del usuario, altera el contenido en vivo y se comunica con otras fuentes de información.

---

### 1.2. Métodos de Carga de CSS: ¿Interno o Externo?
El código CSS puede incorporarse al proyecto de dos formas principales:

1. **CSS Interno (en la etiqueta `<style>` dentro de `<head>`):**
   ```html
   <head>
       <style>
           div { background-color: red; color: white; }
       </style>
   </head>
   ```
   * *Ventaja:* Todo está contenido en un único archivo.
   * *Inconveniente:* No se puede reutilizar en otras páginas. En proyectos reales produce archivos gigantes e inmanejables.

2. **CSS Externo (enlace con `<link rel="stylesheet">`):**
   ```html
   <head>
       <link rel="stylesheet" href="style.css">
   </head>
   ```
   * *Ventaja:* **Buenas prácticas profesionales**. Permite reutilizar la misma hoja de estilos en decenas de páginas, se almacena en la caché del navegador para cargar más rápido y separa limpiamente el diseño del código.

---

### 1.3. ¿Qué es el DOM (*Document Object Model*)?
Cuando el navegador web lee un archivo `.html`, no trabaja directamente con el texto plano del código fuente, sino que construye en la memoria RAM una estructura de datos viva y jerárquica en forma de árbol llamada **DOM (Document Object Model)**.

```
                     window
                       │
                    document
                       │
                     <html>
                  ┌────┴────┐
               <head>      <body>
                 │          │
              <title>     ┌─┴─────────────┐
                          │               │
                         <h1>            <div>
                          │               │
                     "Mi Título"     "Hola clase"
```

* Cada etiqueta HTML se convierte en un **objeto / nodo** dentro del árbol.
* **JavaScript no modifica el archivo .html del disco duro**; lo que hace es modificar el **DOM en la memoria** del navegador. Al cambiar un nodo del DOM, el navegador repinta la pantalla de inmediato.

---

### 1.4. ¿Dónde colocar la etiqueta `<script>` y por qué importa?
El navegador lee y procesa el código HTML en orden secuencial: **de arriba hacia abajo**. Por este motivo, el lugar donde situemos la etiqueta `<script>` es crítico.

#### Caso 1: En el `<head>` SIN `defer` (❌ Error de acceso al DOM)
```html
<head>
    <script src="app.js"></script> <!-- Sin defer -->
</head>
<body>
    <div id="caja">Hola</div>
</body>
```
* **¿Qué sucede?** El navegador lee el `<head>`, encuentra la etiqueta `<script>`, detiene inmediatamente la lectura del HTML y descarga/ejecuta el archivo JavaScript.
* **El error:** En ese instante, el `<body>` y su `<div id="caja">` **aún no han sido procesados ni creados en la memoria del DOM**.
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
* **Resultado:** JavaScript tiene acceso inmediato y seguro al DOM.

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
* **¿Qué hace `defer`?** Da una instrucción especial al navegador:
  1. *Descarga el archivo JavaScript en segundo plano (paralelo)* mientras sigues leyendo y pintando el HTML sin pausas.
  2. *No ejecutes el código JS hasta que todo el documento HTML haya terminado de parsearse por completo*.
* **Resultado:** Scripts organizados en el `<head>`, máxima velocidad de carga de la página y acceso 100% garantizado a todos los elementos del DOM.

---

### 1.5. Comparativa Rápida: Ubicación del Script

| Ubicación | Descarga del JS | Momento de Ejecución | ¿Puede acceder al DOM? | ¿Bloquea la vista del HTML? |
| :--- | :--- | :--- | :---: | :---: |
| `<head>` clásico | Detiene el HTML | De inmediato en el `<head>` | ❌ **NO** (devuelve `null`) | ⚠️ Sí (pantalla en blanco) |
| Fin de `<body>` | Tras leer el HTML | Al final del documento | ✔️ **SÍ** | No |
| `<head>` con `defer` | En paralelo (asíncrona) | Cuando el DOM está listo | ✔️ **SÍ** | No (máxima velocidad) |

---

## 2. Tabla Resumen de los 20 Ejercicios del Módulo

| Nº | Ejercicio | Concepto Clave Aprendido | Plantilla Alumno | Solución Completa |
| :---: | :--- | :--- | :---: | :---: |
| **01** | Primer script en la página | Declaración con `let` y visualización con `alert()` | [ejercicio_01/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/ejercicio_01/index.html) | [solución](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/soluciones/ejercicio_01/index.html) |
| **02** | Primer acceso al DOM | `document.querySelector('div')`, lectura con `.innerHTML` y `alert()` | [ejercicio_02/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/ejercicio_02/index.html) | [solución](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/soluciones/ejercicio_02/index.html) |
| **03** | Estilos CSS y `prompt()` | Entrada con `prompt()` y cambio dinámico de `style.backgroundColor` | [ejercicio_03/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/ejercicio_03/index.html) | [solución](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/soluciones/ejercicio_03/index.html) |
| **04** | Separación en 3 archivos | HTML (`index.html`) + CSS externo (`style.css`) + JS externo (`app.js`) | [ejercicio_04/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/ejercicio_04/index.html) | [solución](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/soluciones/ejercicio_04/app.js) |
| **05** | Suma con `Number()` | Entrada por `prompt()`, conversión con `Number()` para evitar concatenar | [ejercicio_05/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/ejercicio_05/index.html) | [solución](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/soluciones/ejercicio_05/app.js) |
| **06** | Rellenar tabla HTML | Captura de nombre, edad y población con volcado en celdas `<td>` | [ejercicio_06/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/ejercicio_06/index.html) | [solución](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/soluciones/ejercicio_06/app.js) |
| **07** | Geometría: Círculo | Cálculo con `Math.PI` y operador de potencia `**` en elementos `<span>` | [ejercicio_07/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/ejercicio_07/index.html) | [solución](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/soluciones/ejercicio_07/app.js) |
| **08** | Dibujo y escala CSS | Redimensionar una caja circular modificando `style.width` y `style.height` | [ejercicio_08/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/ejercicio_08/index.html) | [solución](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/soluciones/ejercicio_08/app.js) |
| **09** | Títulos y párrafos | Combinar constantes fijas y variables de `prompt()` en `<h1>` y `<p>` | [ejercicio_09/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/ejercicio_09/index.html) | [solución](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/soluciones/ejercicio_09/app.js) |
| **10** | Cálculo de potencias | Base y exponente con `Number()`, operador `**` y template literals | [ejercicio_10/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/ejercicio_10/index.html) | [solución](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/soluciones/ejercicio_10/app.js) |
| **11** | Rectángulo en lista | Cálculo de área y perímetro de rectángulo en una lista `<ul>` con `<span>` | [ejercicio_11/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/ejercicio_11/index.html) | [solución](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/soluciones/ejercicio_11/app.js) |
| **12** | HTML dinámico con backticks | Generar una lista `<ul>` completa con resultados usando `div.innerHTML` | [ejercicio_12/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/ejercicio_12/index.html) | [solución](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/soluciones/ejercicio_12/app.js) |
| **13** | Caja interactiva completa | Pedir ancho, alto y color y asignarlos a la vez con `style` y textos | [ejercicio_13/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/ejercicio_13/index.html) | [solución](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/soluciones/ejercicio_13/app.js) |
| **14** | `querySelector` vs `All` | Tabla 4x4: seleccionar el primer `td` vs el 4º elemento (`celdas[3]`) | [ejercicio_14/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/ejercicio_14/index.html) | [solución](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/soluciones/ejercicio_14/app.js) |
| **15** | Copiar texto entre `divs` | Leer el contenido de un `div#nombre` con `textContent` y volcarlo en `#salida` | [ejercicio_15/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/ejercicio_15/index.html) | [solución](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/soluciones/ejercicio_15/app.js) |
| **16** | Contenedor vs Input | Leer el valor de un `<input id="nombre">` con `.value` y copiarlo en un `div` | [ejercicio_16/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/ejercicio_16/index.html) | [solución](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/soluciones/ejercicio_16/app.js) |
| **17** | Asincronía y Temporizadores | `setTimeout()`, `setInterval()`, `clearInterval()` y carrusel interactivo | [ejercicio_17/](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_17/index.html) | [soluciones](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_17/practicas/) |
| **18** | Objetos Literales (Avanzado) | 17 ejemplos directos del manual, 12 paso a paso, 5 prácticas + reto bancario | [ejercicio_18/](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_18/index.html) | [soluciones](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_18/practicas/) |
| **19** | Objetos Literales (Básico) | Fundamentos de objetos `{ clave: valor }`, métodos con `this`, arrays y DOM | [ejercicio_19/](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/index.html) | [soluciones](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/soluciones/ejercicio_19/) |
| **20** | Clases en JavaScript (POO) | `class`, constructor, campos `#`, herencia `extends`, composición y JSON | [ejercicio_20/](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_20/index.html) | [soluciones](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_20/practicas/soluciones_profesor/) |

---

## 3. Enunciados y Análisis Detallado de los Ejercicios

### Ejercicio 01: El primer script en la página
* **Carpeta Alumno:** [`ejercicio_01/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/ejercicio_01/index.html) (Script interno dentro de `index.html`)
* **Solución:** [`soluciones/ejercicio_01/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/soluciones/ejercicio_01/index.html)
* **Objetivo:** Mostrar cómo se ejecuta el código JavaScript básico incrustado en el propio documento HTML.
* **Enunciado:**
  Crear una estructura HTML con un `<div>` que contenga el texto `"Ejemplo de clase"`. Al final del `<body>`, añadir una etiqueta `<script>` que declare una variable `mensaje = "hola clase"` y la muestre al usuario mediante una ventana emergente `alert()`.
* **Puntos clave:**
  - Código JavaScript interno incrustado en `<script>`.
  - Declaración básica con `let`.

---

### Ejercicio 02: Primer contacto con el DOM
* **Carpeta Alumno:** [`ejercicio_02/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/ejercicio_02/index.html) (Script interno dentro de `index.html`)
* **Solución:** [`soluciones/ejercicio_02/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/soluciones/ejercicio_02/index.html)
* **Objetivo:** Aprender a seleccionar un elemento de la página y leer su contenido desde JavaScript.
* **Enunciado:**
  Dado un `<div>Ejemplo de clase hoy con ramon</div>`, utilizar `document.querySelector('div')` para apuntar a él desde JavaScript. Extraer el texto interior que contiene usando la propiedad `.innerHTML`, guardarlo en una variable y mostrarlo en un `alert()`.
* **Puntos clave:**
  - `document.querySelector()` busca el primer elemento que coincida con el selector.
  - `.innerHTML` lee el contenido interno de la etiqueta.

---

### Ejercicio 03: Estilos CSS y cambio dinámico con `prompt()`
* **Carpeta Alumno:** [`ejercicio_03/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/ejercicio_03/index.html) (Estilo en `<style>` y script interno en `index.html`)
* **Solución:** [`soluciones/ejercicio_03/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/soluciones/ejercicio_03/index.html)
* **Objetivo:** Integrar HTML, CSS y modificación dinámica de estilos en línea.
* **Enunciado:**
  Decorar un `<div>` centrado en pantalla. Mediante un script:
  1. Apuntar al `<div>`.
  2. Pedir al usuario un color en inglés mediante `prompt("Introduce un color en ingles")`.
  3. Cambiar el color de fondo del elemento asignando el valor a `nodoDiv.style.backgroundColor`.
* **Puntos clave:**
  - La propiedad `.style` en JavaScript modifica los estilos CSS en línea del elemento.

---

### Ejercicio 04: Separación total de responsabilidades (HTML, CSS y JS externos)
* **Carpeta Alumno:** [`ejercicio_04/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/ejercicio_04/index.html)
* **Solución:** [`soluciones/ejercicio_04/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/soluciones/ejercicio_04/app.js)
* **Objetivo:** Organizar el proyecto en tres archivos especializados independientes (`index.html`, `style.css` y `app.js`).
* **Enunciado:**
  Repetir la funcionalidad del ejercicio 03 pero desacoplando el código en tres archivos:
  - Estructura en `index.html`.
  - Estilos visuales en `style.css` vinculado con `<link>`.
  - Lógica interactiva en `app.js` enlazado al final del `<body>` mediante `<script src="app.js"></script>`.

---

### Ejercicio 05: Suma aritmética y conversión con `Number()`
* **Carpeta Alumno:** [`ejercicio_05/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/ejercicio_05/index.html)
* **Solución:** [`soluciones/ejercicio_05/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/soluciones/ejercicio_05/app.js)
* **Objetivo:** Manejar entradas por teclado numéricas evitando la concatenación indeseada de texto.
* **Enunciado:**
  Pedir dos números por teclado al usuario con `prompt()`. Convertir ambas entradas a tipo numérico con `Number()`, calcular su suma aritmética y mostrar el resultado tanto en una alerta (`alert`) como en la consola (`console.log`).
* **Puntos clave:**
  - `prompt()` siempre devuelve un valor de tipo texto (`string`).
  - `Number()` convierte dicho texto en un número operable.

---

### Ejercicio 06: Inserción de datos en una tabla HTML
* **Carpeta Alumno:** [`ejercicio_06/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/ejercicio_06/index.html)
* **Solución:** [`soluciones/ejercicio_06/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/soluciones/ejercicio_06/app.js)
* **Objetivo:** Capturar múltiples datos e insertarlos en celdas específicas del DOM.
* **Enunciado:**
  Partiendo de una tabla HTML con celdas identificadas por IDs (`#nombre`, `#edad`, `#poblacion`), solicitar los tres datos al usuario mediante `prompt()` y asignarlos a las celdas de la tabla con `textContent`.

---

### Ejercicio 07: Geometría - Área de un círculo
* **Carpeta Alumno:** [`ejercicio_07/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/ejercicio_07/index.html)
* **Solución:** [`soluciones/ejercicio_07/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/soluciones/ejercicio_07/app.js)
* **Objetivo:** Usar el objeto matemático `Math` y operadores aritméticos de potencia.
* **Enunciado:**
  Pedir el radio de un círculo por teclado. Calcular el área aplicando la fórmula matemática `Área = π * r²` (utilizando `Math.PI` y el operador `**`). Mostrar el radio introducido y el área calculada en los elementos `<span id="radio">` y `<span id="area">`.

---

### Ejercicio 08: Dibujo dinámico y escala en píxeles con CSS
* **Carpeta Alumno:** [`ejercicio_08/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/ejercicio_08/index.html)
* **Solución:** [`soluciones/ejercicio_08/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/soluciones/ejercicio_08/app.js)
* **Objetivo:** Controlar las dimensiones físicas de un elemento gráfico desde JavaScript.
* **Enunciado:**
  Solicitar un número al usuario que representará el diámetro de un círculo. Escribir el número en un contenedor `#salida` y alterar dinámicamente las propiedades `style.width` y `style.height` de una caja circular `#caja` concatenando la unidad de medida `"px"`.

---

### Ejercicio 09: Encabezados y párrafos: Constantes vs Variables
* **Carpeta Alumno:** [`ejercicio_09/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/ejercicio_09/index.html)
* **Solución:** [`soluciones/ejercicio_09/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/soluciones/ejercicio_09/app.js)
* **Objetivo:** Distinguir entre constantes de configuración inmutables y variables dinámicas.
* **Enunciado:**
  Definir una constante fija `titulo = 'Ejercicio de clase'` y una variable `poblacion` que se solicitará con `prompt()`. Inyectar la constante en la etiqueta `<h1>` y la variable en el párrafo `<p id="parrafo">`.

---

### Ejercicio 10: Cálculo de potencias y Template Literals
* **Carpeta Alumno:** [`ejercicio_10/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/ejercicio_10/index.html)
* **Solución:** [`soluciones/ejercicio_10/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/soluciones/ejercicio_10/app.js)
* **Objetivo:** Manejar fórmulas matemáticas de dos variables e interpolación de strings.
* **Enunciado:**
  Pedir por teclado la base y el exponente. Calcular la potencia matemática (`base ** exponente`). Mostrar en pantalla:
  - En `#base`: el número base.
  - En `#exponente`: el exponente.
  - En `#resultado`: la expresión completa, por ejemplo: `2 ** 3 = 8`.

---

### Ejercicio 11: Geometría de un rectángulo en lista ordenada
* **Carpeta Alumno:** [`ejercicio_11/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/ejercicio_11/index.html)
* **Solución:** [`soluciones/ejercicio_11/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/soluciones/ejercicio_11/app.js)
* **Objetivo:** Procesar múltiples cálculos geométricos y distribuirlos en listas `<ul>` preexistentes.
* **Enunciado:**
  Solicitar las longitudes de los dos lados de un rectángulo (`lado1` y `lado2`). Calcular el área (`lado1 * lado2`) y el perímetro (`2 * lado1 + 2 * lado2`). Asignar cada uno de los cuatro valores a sus respectivos `<span>` en el DOM.

---

### Ejercicio 12: Generación e inyección de HTML con Backticks
* **Carpeta Alumno:** [`ejercicio_12/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/ejercicio_12/index.html)
* **Solución:** [`soluciones/ejercicio_12/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/soluciones/ejercicio_12/app.js)
* **Objetivo:** Construir estructuras HTML dinámicas completas usando Template Literals e `innerHTML`.
* **Enunciado:**
  A partir de los cálculos del ejercicio 11, en lugar de disponer de elementos HTML vacíos en el documento original, generar mediante JavaScript un bloque de texto que contenga una lista completa (`<ul>` y cuatro `<li>`) e inyectarla de una sola vez en el contenedor `<div id="salida">` usando `.innerHTML`.

---

### Ejercicio 13: Caja interactiva completa (Ancho, Alto y Color)
* **Carpeta Alumno:** [`ejercicio_13/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/ejercicio_13/index.html)
* **Solución:** [`soluciones/ejercicio_13/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/soluciones/ejercicio_13/app.js)
* **Objetivo:** Modificar simultáneamente múltiples reglas CSS y textos informativos.
* **Enunciado:**
  Pedir por teclado el ancho, el alto y el color de fondo para un rectángulo.
  1. Mostrar los tres valores en tres `<div>` informativos independientes (`#ancho`, `#alto`, `#color`).
  2. Aplicar dichos valores a un `<div id="caja">` modificando su `style.width`, `style.height` y `style.backgroundColor`.

---

### Ejercicio 14: `querySelector` frente a `querySelectorAll`
* **Carpeta Alumno:** [`ejercicio_14/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/ejercicio_14/index.html)
* **Solución:** [`soluciones/ejercicio_14/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/soluciones/ejercicio_14/app.js)
* **Objetivo:** Entender la diferencia entre capturar un único elemento y capturar una colección indexada (`NodeList`).
* **Enunciado:**
  En una tabla HTML de 4x4 (16 celdas `<td>`):
  1. Usar `document.querySelector('td')` para pintar de rojo la **primera celda**.
  2. Usar `document.querySelectorAll('td')` para obtener la lista de todas las celdas y pintar de rojo la **cuarta celda** accediendo a su posición mediante corchetes (`celdas[3]`).

---

### Ejercicio 15: Leer contenido de un contenedor (`div`) y copiarlo
* **Carpeta Alumno:** [`ejercicio_15/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/ejercicio_15/index.html)
* **Solución:** [`soluciones/ejercicio_15/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/soluciones/ejercicio_15/app.js)
* **Objetivo:** Aprender a extraer el texto de una etiqueta informativa estándar utilizando `.textContent`.
* **Enunciado:**
  Dado un `<div id="nombre">Alpe</div>`, capturar su texto interno mediante `divNombre.textContent`, guardarlo en una variable y escribirlo dentro de un segundo `<div id="salida">`.

---

### Ejercicio 16: Contenedor estático vs Campo de formulario (`input.value`)
* **Carpeta Alumno:** [`ejercicio_16/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/ejercicio_16/index.html)
* **Solución:** [`soluciones/ejercicio_16/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/soluciones/ejercicio_16/app.js)
* **Objetivo:** Dominar la diferencia crucial entre leer un elemento contenedor (`.textContent`) y leer un control interactivo (`.value`).
* **Enunciado:**
  Dado un campo de entrada `<input id="nombre" value="Alpe">`:
  1. Apuntar al input desde JavaScript.
  2. Leer su contenido utilizando la propiedad `.value` (nunca `.textContent`).
  3. Escribir dicho valor dentro del contenedor `<div id="salida">` usando `.textContent`.

---

### Ejercicio 17: Gestión de Temporizadores en JavaScript (`setTimeout`, `setInterval`, `clearTimeout`, `clearInterval`)
* **Documentación Completa del Ejercicio:** [`ejercicio_17/README.md`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_17/README.md)
* **Portal Interactivo del Ejercicio:** [`ejercicio_17/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_17/index.html)
* **Manual de Referencia Rápida (PDF):** [`ejercicio_17/Manual de Referencia Rápida - Temporizadores en JavaScript.pdf`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_17/Manual%20de%20Referencia%20R%C3%A1pida%20-%20Temporizadores%20en%20JavaScript.pdf) *(7 págs con portada, índice interactivo y marcadores)*
* **Prácticas Guiadas de Aula (PDF):** [`ejercicio_17/Prácticas Guiadas - Temporizadores en JavaScript.pdf`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_17/Pr%C3%A1cticas%20Guiadas%20-%20Temporizadores%20en%20JavaScript.pdf) *(6 págs con portada, índice interactivo y marcadores)*
* **Ejemplos Desarrollados en Clase (7 Ejemplos):** [`ejercicio_17/ejemplos/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_17/ejemplos/README.md)
  - `01/` Alarma diferida con `setTimeout()` y botón de cancelación con `clearTimeout()`.
  - `02/` Metrónomo continuo con `setInterval()` y botón de parada con `clearInterval()`.
  - `03/` Contador de segundos con bandera booleana (`ejecutandose`) anti-duplicados.
  - `04/` Contador optimizado con guardia directa del ticket (`idIntervalo == null`).
  - `05/` Cronómetro de 3 estados (*Detenido*, *Corriendo*, *Pausado*) con alternancia de clases CSS (`.ocultar`).
  - `06/` Barra de carga animada (modificación dinámica de `style.width` en píxeles).
  - `07/` Carrusel de imágenes con Array y rotación periódica con `setInterval()`, botón para parar y reiniciar.
* **Demos del Manual de Referencia (6 Demos):** [`ejercicio_17/ejemplos_manual/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_17/ejemplos_manual/README.md)
  - `01_timeout_alarma/` Alarma con temporizador único y barra visual.
  - `02_interval_reloj/` Reloj periódico con pulsadores luminosos y parada a 5 vueltas.
  - `03_aviso_cancelable/` Simulación de cliente de correo con ventana de 4s para *«Deshacer envío»*.
  - `04_caja_creciente/` Animación de crecimiento de caja hasta un límite de 300px.
  - `05_contador_interactivo/` Cronómetro con pantalla digital interactiva.
  - `06_cuenta_atras_mixta/` Cuenta regresiva de 5 a 0 coordinada con reseteo diferido a los 2s.
* **Prácticas Guiadas para el Alumno:**
  - Práctica 1 (Cohete Espacial): [`ejercicio_17/practicas/practica_01_cohete/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_17/practicas/practica_01_cohete/index.html)
  - Práctica 2 (Simulador de Batería): [`ejercicio_17/practicas/practica_02_bateria/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_17/practicas/practica_02_bateria/index.html)
* **Soluciones Oficiales Resueltas:**
  - Solución Práctica 1: [`soluciones/ejercicio_17/practica_01_cohete/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/soluciones/ejercicio_17/practica_01_cohete/app.js)
  - Solución Práctica 2: [`soluciones/ejercicio_17/practica_02_bateria/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/soluciones/ejercicio_17/practica_02_bateria/app.js)
* **Objetivos de Aprendizaje:**
  1. Comprender la naturaleza asíncrona no bloqueante de JavaScript en el navegador.
  2. Manejar con precisión la regla de los milisegundos (`1000 ms = 1 segundo`).
  3. Diferenciar ejecución diferida única (`setTimeout`) frente a ejecución cíclica periódica (`setInterval`).
  4. Almacenar los identificadores numéricos (`ID`) devueltos por el navegador para abortar temporizadores con `clearTimeout()` y `clearInterval()`.
  5. Dominar los patrones de guardia (`idIntervalo == null`) para prevenir intervalos duplicados acelerados.
  6. Coordinar temporizadores con manipulación visual del DOM y transiciones de interfaz (UX).

---

### Ejercicio 18: Objetos en Notación Literal en JavaScript (Avanzado: 12 Ejemplos y 5 Prácticas Guiadas)
* **Documentación Completa del Ejercicio:** [`ejercicio_18/README.md`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_18/README.md)
* **Portal Interactivo del Ejercicio:** [`ejercicio_18/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_18/index.html)
* **Manual Teórico Oficial (PDF):** [`ejercicio_18/manuales/Manual_Objetos_Literales_JavaScript.pdf`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_18/manuales/Manual_Objetos_Literales_JavaScript.pdf) *(27 págs con teoría exhaustiva)*
* **Prácticas Guiadas Oficiales (PDF):** [`ejercicio_18/manuales/Practicas_Guiadas_Objetos_Literales_JavaScript.pdf`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_18/manuales/Practicas_Guiadas_Objetos_Literales_JavaScript.pdf) *(19 págs con 4 prácticas y 1 reto final)*
* **Manual de Ejemplos a Realizar Paso a Paso (PDF):** [`ejercicio_18/manuales/Manual_de_Ejemplos_a_Realizar_Objetos_Literales.pdf`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_18/manuales/Manual_de_Ejemplos_a_Realizar_Objetos_Literales.pdf) *(14 págs con portada, índice con marcadores, enunciado, desarrollo guiado paso a paso, código íntegro y consola de los 12 ejemplos)*
* **Colección Oficial: 17 Ejemplos Directos del Manual Teórico:** [`ejercicio_18/ejemplosManual/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_18/ejemplosManual/index.html) *(Los 17 códigos reales y sencillos ilustrados en las capturas del manual, páginas 5 a 22: `crear-objetos.js`, `tipos-de-valores.js`, `nombres-de-clave.js`, `leer-propiedades.js`, `modificar-objetos.js`, `metodos-y-this.js`, `errores-con-this.js`, `objetos-anidados.js`, `array-de-objetos.js`, `recorrer-un-objeto.js`, `copiar-objetos.js`, `desestructuracion-y-spread.js`, `getters-y-setters.js`, `privacidad.js`, `objeto-a-json.js`, `lo-que-json-pierde.js`, `guardar-en-localstorage.js`)*
* **Demos y Ejemplos Interactivos (12 Demostraciones con HTML, CSS y JS):** [`ejercicio_18/ejemplos/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_18/ejemplos/README.md)
  - `01_creacion_y_anatomia/` Creación literal `{...}`, pares clave-valor y tipos admitidos.
  - `02_tipos_y_claves/` Identificadores estándar vs claves especiales con espacios o guiones.
  - `03_lectura_y_acceso/` Notación de punto (`.`), corchetes (`[]`), claves dinámicas y operador `?.`.
  - `04_modificar_y_borrar/` Añadir propiedades en caliente, reasignación y operador `delete`.
  - `05_metodos_y_this/` Métodos de objeto, enlace contextual de `this` y comportamiento de las funciones flecha.
  - `06_objetos_anidados/` Estructuras jerárquicas multinivel y prevención de `TypeError`.
  - `07_arrays_de_objetos/` Modelado de catálogos y colecciones, manipulación con `.map()`, `.filter()`, `.find()`.
  - `08_recorrer_objetos/` Introspección con `for...in`, `Object.keys()`, `Object.values()`, `Object.entries()`.
  - `09_referencias_y_copias/` Asignación por referencia (`b = a`), copia superficial (`{ ...a }`) y copia profunda (`structuredClone()`).
  - `10_desestructuracion_spread/` Extracción ES6+ `{ a, b }`, alias, valores por defecto, operador rest y fusión de objetos.
  - `11_getters_setters_privacidad/` Propiedades dinámicas con `get`, validación con `set`, verdadero blindaje con Closures y `Object.freeze()`.
  - `12_json_y_localstorage/` Serialización con `JSON.stringify()`, deserialización con `JSON.parse()` y persistencia en `localStorage`.
* **Prácticas Guiadas para el Alumno (HTML + CSS + app.js con TODOs + appSolucion.js resuelta):** [`ejercicio_18/practicas/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_18/practicas/README.md)
  - `01_consola/` **Práctica 1:** Primeros pasos con objeto `libro`, lectura, mutación, borrado con `delete`, operador `in`, método con `this` y `Object.keys()`.
  - `02_personaje/` **Práctica 2:** Ficha interactiva de personaje de videojuego con métodos `recibirDanio`, `curar` y `subirNivel` vinculados al DOM.
  - `03_carrito/` **Práctica 3:** Carrito de la compra con colección de productos, método propio `subtotal()`, eliminación y cálculo automático del total.
  - `04_agenda/` **Práctica 4:** Agenda completa de contactos con serialización JSON, persistencia en `localStorage`, buscador en vivo y borrado.
  - `05_reto/` **Reto Avanzado:** Cuenta bancaria con saldo privado y clausuras (IIFE), protección contra manipulación directa y registro de transacciones.
* **Objetivos de Aprendizaje:**
  1. Comprender el modelado de datos en JavaScript mediante la notación de objetos literales.
  2. Manejar con seguridad el contexto `this` dentro de los métodos del objeto y entender las restricciones de las funciones flecha.
  3. Reconocer los peligros de la mutación no deseada por referencia en memoria y aplicar copias superficiales y profundas.
  4. Aplicar la desestructuración de objetos ES6+, alias y operador spread.
  5. Blindar la integridad de los datos mediante setters con validación y clausuras léxicas para crear campos privados.
  6. Implementar persistencia de estado en aplicaciones web cliente mediante la API LocalStorage y el formato JSON.

---

### Ejercicio 19: Iniciación a Objetos Literales en JavaScript (Nivel Básico)
* **Documentación Completa del Ejercicio:** [`ejercicio_19/README.md`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/README.md)
* **Portal Interactivo del Ejercicio:** [`ejercicio_19/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/index.html)
* **Manual de Referencia Rápida (PDF):** [`ejercicio_19/Manual de Referencia Rápida - Objetos Literales en JavaScript.pdf`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/Manual%20de%20Referencia%20R%C3%A1pida%20-%20Objetos%20Literales%20en%20JavaScript.pdf) *(7 págs con portada dedicada, índice interactivo y marcadores)*
* **Prácticas Guiadas de Aula (PDF):** [`ejercicio_19/Prácticas Guiadas - Objetos Literales en JavaScript.pdf`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/Pr%C3%A1cticas%20Guiadas%20-%20Objetos%20Literales%20en%20JavaScript.pdf) *(6 págs con portada dedicada, índice interactivo y marcadores)*
* **Demos del Manual de Referencia (6 Demos):** [`ejercicio_19/ejemplos_manual/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/ejemplos_manual/README.md)
  - `01_producto_basico/` Creación literal, acceso por punto vs corchetes, adición y borrado con `delete`.
  - `02_cuenta_bancaria/` Métodos y palabra reservada `this`, validación de fondos y control de saldo.
  - `03_estudiante_anidado/` Estructuras anidadas (dirección, notas en array y método `calcularMedia()`).
  - `04_catalogo_arrays/` Arrays de objetos literales, bucles `for...of`, filtrado dinámico y ordenación.
  - `05_claves_y_json/` Inspección de propiedades con `Object.keys()`, `Object.values()`, serialización `JSON.stringify()`, `JSON.parse()` y persistencia con `localStorage`.
  - `06_objeto_interactivo_dom/` Mascota virtual interactiva, métodos reactivos con `this` y actualización visual del DOM.
* **Prácticas Guiadas para el Alumno (HTML + CSS + app.js con TODOs + appSolucion.js resuelta):** [`ejercicio_19/practicas/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/practicas/README.md)
  - `practica_01_alumno/` **Práctica 1:** Ficha Interactiva del Alumno con método `calcularMedia()` mediante `this`, estado académico y botón para subir notas.
  - `practica_02_catalogo/` **Práctica 2:** Mini-Catálogo de Papelería con array de 3 objetos literales, renderizado dinámico con `for...of`, botón para vender unidades de stock y formulario de alta (`push`).
* **Soluciones Oficiales Resueltas:**
  - Solución Práctica 1: [`soluciones/ejercicio_19/practica_01_alumno/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/soluciones/ejercicio_19/practica_01_alumno/app.js)
  - Solución Práctica 2: [`soluciones/ejercicio_19/practica_02_catalogo/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/soluciones/ejercicio_19/practica_02_catalogo/app.js)
* **Objetivos de Aprendizaje:**
  1. Comprender la transición fundamental de variables sueltas a un objeto agrupado con pares `clave: valor`.
  2. Dominar el acceso a propiedades mediante notación de punto (`objeto.prop`) y notación de corchetes (`objeto['prop']`).
  3. Modificar en caliente propiedades existentes, añadir nuevas claves y borrarlas con el operador `delete`.
  4. Comprender de forma intuitiva el funcionamiento de los métodos y el puntero `this` dentro del objeto.
  5. Trabajar con listas de objetos homogéneos (arrays de objetos) y recorrerlos con bucles `for...of`.
  6. Conectar los datos y métodos del objeto con la interfaz web (DOM) para crear experiencias de usuario interactivas.

---

### Ejercicio 20: Programación Orientada a Objetos con Clases en JavaScript (ES6+ / ES2022)
* **Documentación Completa del Ejercicio:** [`ejercicio_20/README.md`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_20/README.md)
* **Portal Interactivo del Ejercicio:** [`ejercicio_20/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_20/index.html)
* **Manual Teórico Oficial (PDF):** [`ejercicio_20/manuales/Manual_Clases_JavaScript.pdf`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_20/manuales/Manual_Clases_JavaScript.pdf) *(36 págs con teoría exhaustiva, 13 capítulos y 12 ejemplos comentados)*
* **Prácticas Guiadas Oficiales (PDF):** [`ejercicio_20/manuales/Practicas_Guiadas_Clases_JavaScript.pdf`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_20/manuales/Practicas_Guiadas_Clases_JavaScript.pdf) *(24 págs con 6 prácticas progresivas, criterios de evaluación y rúbrica)*
* **Colección de 12 Ejemplos Didácticos:** [`ejercicio_20/ejemplos/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_20/ejemplos/index.html) ([README](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_20/ejemplos/README.md))
  - `ejemplo-01-primera-clase/` Declaración `class Persona`, método `constructor()`, operador `new` y atributos de instancia.
  - `ejemplo-02-literal-vs-clase/` Comparativa entre objeto literal y clase: molde reutilizable, ahorro de memoria y operador `instanceof`.
  - `ejemplo-03-metodos-y-this/` Métodos de instancia, enlace contextual `this` y patrón de encadenamiento (*method chaining*) con `return this`.
  - `ejemplo-04-getters-y-setters/` Descriptores `get` y `set`: propiedades computadas y validación estricta de tipos/rangos con `throw new Error()`.
  - `ejemplo-05-campos-privados/` Campos y métodos privados nativos con prefijo `#` (ES2022): verdadera encapsulación a nivel de lenguaje.
  - `ejemplo-06-miembros-estaticos/` Modificador `static`: utilidades independientes, contadores de instancias y constantes de clase.
  - `ejemplo-07-herencia/` Reutilización de código con `extends`, llamada obligatoria a `super()` en el constructor y sobreescritura polimórfica.
  - `ejemplo-08-composicion/` Modelado con relación "tiene-un" (*has-a*): objetos que integran y coordinan instancias de otras clases.
  - `ejemplo-09-coleccion-de-objetos/` Gestión de colecciones (`Biblioteca` custodiando instancias de `Libro`) con `.filter()`, `.map()`, `.find()`.
  - `ejemplo-10-clases-y-json/` Serialización con `toJSON()` y reconstrucción de instancias con métodos vivos mediante factoría `static fromJSON()`.
  - `ejemplo-11-clase-y-dom-contador/` Clases como componentes visuales: cada instancia administra su propio contenedor HTML y eventos sin colisiones.
  - `ejemplo-12-clases-y-dom-tareas/` Arquitectura cliente profesional: aplicación completa de tareas con POO, DOM reactivo y `localStorage`.
* **Prácticas Guiadas para el Alumnado (HTML + CSS resueltos + script.js con TODOs):** [`ejercicio_20/practicas/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_20/practicas/index.html) ([README](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_20/practicas/README.md))
  - `practica-01-garaje-de-coches/` **Práctica 1:** Garaje interactivo con clase `Coche`, método `recorrer(km)`, getter computado `antiguedad` y tarjetas en DOM.
  - `practica-02-cuenta-segura/` **Práctica 2:** Cuenta bancaria blindada con campos privados `#saldo` y `#pin`, transacciones validadas y captura de excepciones `try...catch`.
  - `practica-03-figuras-geometricas/` **Práctica 3:** Jerarquía con herencia (`Figura` -> `Circulo`, `Rectangulo` -> `Cuadrado`), polimorfismo en `area()` y `perimetro()`, y método estático `Figura.comparar()`.
  - `practica-04-biblioteca/` **Práctica 4:** Biblioteca de libros con composición de clases, gestión de préstamos, devoluciones, buscador dinámico y método `toString()`.
  - `practica-05-gestor-de-tareas/` **Práctica 5:** Gestor de tareas con persistencia real en `localStorage` mediante `toJSON()` y factoría estática `fromJSON()`.
  - `practica-06-tienda-con-carrito/` **Práctica 6 (Reto Final):** E-commerce completo con herencia (`ProductoFisico` vs `ProductoDigital`), composición (`LineaCarrito` y `Carrito`), gastos de envío calculados y cupones.
* **Soluciones Oficiales Resueltas:** [`ejercicio_20/practicas/soluciones_profesor/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_20/practicas/soluciones_profesor/README.md)
  - Resolución canónica completa de las 6 prácticas con todos los `TODO` implementados, comentados y listos para ejecutar.
* **Objetivos de Aprendizaje:**
  1. Comprender la diferencia arquitectónica entre la creación puntual de objetos literales y la definición de moldes formales mediante `class`.
  2. Implementar constructores robustos con inicialización de propiedades y valores por defecto.
  3. Dominar la mutación de estado interno mediante métodos y aplicar el patrón de encadenamiento (*method chaining*).
  4. Blindar la integridad de los datos mediante `get` y `set` con validación activa y lanzamiento de errores controlados (`throw`).
  5. Aplicar la verdadera privacidad nativa de ECMAScript 2022 utilizando campos `#` inaccesibles desde el exterior.
  6. Diseñar jerarquías de clases escalables mediante herencia (`extends`), sincronización con `super()` y polimorfismo.
  7. Aplicar el principio de composición sobre herencia para crear arquitecturas desacopladas y mantenibles.
  8. Resolver la persistencia de clases con la API Storage del navegador implementando `toJSON()` y métodos factoría estáticos `fromJSON()`.




