# Módulo: Fundamentos, Variables y Salidas Básicas (Parte 1)
## Introducción a la Programación Algorítmica en JavaScript

Bienvenido a la **Parte 1** del curso práctico de JavaScript. En este bloque formativo se asientan las bases de la lógica de programación: cómo declarar y usar variables y constantes, cómo interactuar con el usuario a través de canales de entrada (`prompt`), cómo emitir resultados mediante la consola de desarrollo (`console.log`) y cómo alterar dinámicamente los primeros elementos del **DOM** (`textContent`, `innerHTML` y `style`).

Todos los ejercicios están organizados en carpetas independientes para el alumno (`ejercicio_01/` a `ejercicio_11/`, conservando la numeración original) con plantillas comentadas ("sin hacer", guiadas paso a paso) y sus correspondientes soluciones en la carpeta `soluciones/`.

---

## 1. Teoría Fundamental

### 1.1. ¿Cómo se ejecuta JavaScript en el navegador?
JavaScript es un lenguaje interpretado que el motor del navegador (V8 en Chrome/Edge, SpiderMonkey en Firefox) ejecuta instrucción por instrucción.
Tradicionalmente, en esta fase inicial se trabaja con un modelo de **ejecución secuencial**: el código se lee de arriba hacia abajo tan pronto como el documento HTML ha sido cargado.

---

### 1.2. Declaración de Variables y Constantes (`let` vs `const`)
En JavaScript moderno (**ES6+**) está terminantemente desaconsejado el uso de `var` debido a problemas de ámbito (*scope*) y elevación (*hoisting*). Usamos exclusivamente:

1. **`let`**: Para declarar variables cuyo valor cambiará a lo largo del programa (por ejemplo, contadores, acumuladores, datos introducidos por el usuario).
   ```javascript
   let puntos = 0;
   puntos = 12; // Reasignación válida
   ```
2. **`const`**: Para declarar valores constantes inmutables o referencias fijas a elementos del DOM. No se pueden reasignar una vez inicializadas.
   ```javascript
   const PI = 3.14159;
   const nodoTitulo = document.querySelector('h1');
   ```

---

### 1.3. Canales de Entrada: `prompt()` y Conversión con `Number()`
La función `prompt("mensaje", valorPorDefecto)` abre un cuadro de diálogo del navegador que solicita texto al usuario:

> [!IMPORTANT]
> `prompt()` devuelve **siempre un string (cadena de texto)**, incluso si el usuario teclea únicamente números.
> Si deseamos realizar operaciones matemáticas, debemos convertir explícitamente el valor utilizando la función global **`Number()`**:
> ```javascript
> let numero = Number(prompt('Introduce un número:', 0));
> let doble = numero * 2;
> ```

---

### 1.4. Canales de Salida: Consola vs DOM

1. **La Consola de Desarrollo (`console.log`):**
   Es la herramienta esencial para el programador. Permite depurar, inspeccionar tipos de datos y verificar resultados intermedios sin alterar la interfaz visual:
   ```javascript
   console.log("Hola desde JS");
   console.log(10 + 5); // Imprime 15
   ```
   Para verla en el navegador, se pulsa la tecla **F12** (o clic derecho -> *Inspeccionar*) y se selecciona la pestaña **Consola**.

2. **Salidas en el DOM (`textContent` e `innerHTML`):**
   Permiten volcar la información directamente dentro de las etiquetas HTML de la página:
   * **`.textContent`**: Inserta texto plano de forma segura (sin interpretar etiquetas HTML). Es el método más rápido y recomendado para textos sencillos.
   * **`.innerHTML`**: Interpreta el texto como código HTML dinámico, permitiendo inyectar etiquetas como `<strong>`, `<span>` o listas `<li>`.

---

### 1.5. Manipulación de Cadenas y Estilos

#### A. Concatenación vs Template Literals (Backticks ` `)
* **Concatenación clásica con el operador `+`:**
  ```javascript
  console.log(nombre + ' tiene ' + puntos + ' puntos');
  ```
* **Plantillas de texto modernas (Template Literals con comillas invertidas `):**
  Permiten interpolar variables y expresiones fácilmente con la sintaxis `${expresion}`:
  ```javascript
  console.log(`${nombre} tiene ${puntos} puntos`);
  ```

#### B. Métodos Útiles de Texto
* **`.trim()`**: Elimina los espacios en blanco sobrantes al principio y al final de una cadena.
* **`.toLowerCase()`**: Convierte todo el texto a minúsculas.
```javascript
let limpio = entrada.trim().toLowerCase();
```

#### C. Manipulación Básica de Estilos CSS (`.style`)
Podemos alterar directamente las reglas CSS en línea de un elemento mediante su propiedad `.style`:
```javascript
const caja = document.querySelector('#salida');
caja.style.width = '300px';
caja.style.backgroundColor = 'blue';
caja.style.color = 'white';
```

---

### 1.6. Estructura Estándar de Trabajo en 5 Pasos
Para aprender a programar de manera sistemática y ordenada, cada ejercicio sigue el mismo esquema:

```javascript
// 1. Declaración de variables y constantes
let precio = 0;
let total = 0;

// 2. Constantes al DOM (referencias a etiquetas HTML)
const nodoTotal = document.querySelector('#total');

// 3. Entradas (captura de datos con prompt)
precio = Number(prompt('Introduce el precio:'));

// 4. Procesamiento (cálculos y operaciones)
total = precio * 1.21;

// 5. Salidas (mostrar el resultado en el DOM o consola)
nodoTotal.textContent = `Total con IVA: ${total} €`;
```

---

## 2. Tabla Resumen de los Ejercicios de la Parte 1

| Nº / Archivo | Concepto Clave / Novedad | Plantilla Alumno | Solución Completa |
| :---: | :--- | :---: | :---: |
| **01** (Ejemplo 1) | Primer script: `console.log` y primer `textContent` | [ejercicio_01/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/ejercicio_01/index.html) | [solución](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/soluciones/ejercicio_01/app.js) |
| **02** (Ejemplo 2) | Lectura de párrafos en el DOM, variables y plantillas con backticks | [ejercicio_02/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/ejercicio_02/index.html) | [solución](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/soluciones/ejercicio_02/app.js) |
| **04** (Ejemplo 4) | Declaración de constantes (`const`) y escritura de saludo en el DOM | [ejercicio_04/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/ejercicio_04/index.html) | [solución](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/soluciones/ejercicio_04/app.js) |
| **05** (Ejemplo 5) | Objetos literales (`{}`) para agrupar datos leídos de una lista `<ul>` | [ejercicio_05/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/ejercicio_05/index.html) | [solución](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/soluciones/ejercicio_05/app.js) |
| **06** (Ejemplo 6) | Manipulación de estilos CSS en línea (`style.width`, `style.backgroundColor`) | [ejercicio_06/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/ejercicio_06/index.html) | [solución](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/soluciones/ejercicio_06/app.js) |
| **07** (Ejemplo 7) | Entrada de datos con `prompt()`, conversión con `Number()` y cálculo del doble | [ejercicio_07/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/ejercicio_07/index.html) | [solución](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/soluciones/ejercicio_07/app.js) |
| **08** (Ejemplo 8) | Limpieza de strings con `.trim()` y conversión a minúsculas con `.toLowerCase()` | [ejercicio_08/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/ejercicio_08/index.html) | [solución](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/soluciones/ejercicio_08/app.js) |
| **09** (Ejemplo 9) | Saludo dinámico: captura de nombre con `prompt()` e interpolación en el DOM | [ejercicio_09/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/ejercicio_09/index.html) | [solución](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/soluciones/ejercicio_09/app.js) |
| **10** (Ejemplo 10) | Fórmula matemática: conversión de grados Celsius a Fahrenheit ($C \cdot 1.8 + 32$) | [ejercicio_10/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/ejercicio_10/index.html) | [solución](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/soluciones/ejercicio_10/app.js) |
| **11** (Ejemplo 11) | Cálculo financiero: precio base, porcentaje de IVA y total acumulado en `innerHTML` | [ejercicio_11/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/ejercicio_11/index.html) | [solución](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/soluciones/ejercicio_11/app.js) |

---

## 3. Enunciados Detallados de los Ejercicios

### Ejercicio 01 (Ejemplo 1): Primer script y canales de salida
* **Carpeta Alumno:** [`ejercicio_01/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/ejercicio_01/index.html)
* **Solución:** [`soluciones/ejercicio_01/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/soluciones/ejercicio_01/app.js)
* **Objetivo:** Comprender la ejecución de JavaScript externo y los dos primeros canales de salida: la consola y el DOM.
* **Enunciado:**
  1. Apuntar al párrafo con identificador `#salidaMensaje` y escribir en él el texto: `"Javascript esta funcionando"` usando `textContent`.
  2. Enviar a la consola del desarrollador el mensaje: `"Hola desde JS"`.
  3. Realizar una operación matemática directa (`10 + 5`) y mostrar su resultado en la consola.

---

### Ejercicio 02 (Ejemplo 2): Lectura del DOM, concatenación y Template Literals
* **Carpeta Alumno:** [`ejercicio_02/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/ejercicio_02/index.html)
* **Solución:** [`soluciones/ejercicio_02/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/soluciones/ejercicio_02/app.js)
* **Objetivo:** Extraer información existente en etiquetas HTML y formatear salidas de texto.
* **Enunciado:**
  En el HTML existen dos párrafos: `<p id="nombre">Lucia</p>` y `<p id="puntos">12</p>`.
  1. Apuntar a ambos elementos con `document.querySelector()`.
  2. Leer su contenido textual mediante `.textContent` y guardarlo en variables (`nombre` y `puntos`).
  3. Mostrar en la consola la frase: `"Lucia tiene 12 puntos"` utilizando primero la concatenación tradicional con `+`.
  4. Mostrar la misma frase utilizando plantillas de texto modernas (*template literals*) con comillas invertidas (`${nombre} tiene ${puntos} puntos`).

---

### Ejercicio 04 (Ejemplo 4): Uso de constantes para textos fijos
* **Carpeta Alumno:** [`ejercicio_04/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/ejercicio_04/index.html)
* **Solución:** [`soluciones/ejercicio_04/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/soluciones/ejercicio_04/app.js)
* **Objetivo:** Declarar constantes inmutables y plasmarlas en el DOM.
* **Enunciado:**
  1. Declarar una constante llamada `TEXTO` con el valor `"hola desde un archivo externo"`.
  2. Apuntar al párrafo con identificador `#salidaSaludo`.
  3. Asignar el contenido de la constante al párrafo mediante `textContent`.

---

### Ejercicio 05 (Ejemplo 5): Agrupación de datos en un objeto literal
* **Carpeta Alumno:** [`ejercicio_05/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/ejercicio_05/index.html)
* **Solución:** [`soluciones/ejercicio_05/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/soluciones/ejercicio_05/app.js)
* **Objetivo:** Aprender a organizar múltiples datos relacionados dentro de un objeto literal.
* **Enunciado:**
  Dada una lista en HTML con tres elementos: `<li id="nombre">Ramon</li>`, `<li id="poblacion">Santander</li>` y `<li id="edad">54</li>`.
  1. Crear un objeto constante `datos` con propiedades: `{ nombre: '', poblacion: '', edad: 0 }`.
  2. Leer el texto de cada `<li>` del DOM y almacenarlo en la propiedad correspondiente del objeto (`datos.nombre`, etc.).
  3. Mostrar en la consola un resumen formateado: `"Nombre: Ramon Edad: 54 Poblacion: Santander"`.

---

### Ejercicio 06 (Ejemplo 6): Manipulación de propiedades CSS desde JavaScript
* **Carpeta Alumno:** [`ejercicio_06/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/ejercicio_06/index.html)
* **Solución:** [`soluciones/ejercicio_06/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/soluciones/ejercicio_06/app.js)
* **Objetivo:** Modificar el estilo visual de elementos HTML en tiempo real mediante la propiedad `.style`.
* **Enunciado:**
  Dado un elemento `<div id="salida">` y un objeto constante con propiedades de diseño:
  `const propiedades = { ancho: 300, alto: 100, fondo: 'blue', colorLetra: 'white' };`
  1. Apuntar al div `#salida`.
  2. Asignar el ancho en píxeles: `nodoSalida.style.width = `${propiedades.ancho}px``.
  3. Asignar la altura en píxeles: `nodoSalida.style.height = `${propiedades.alto}px``.
  4. Cambiar el color de fondo: `nodoSalida.style.backgroundColor = propiedades.fondo`.
  5. Cambiar el color del texto: `nodoSalida.style.color = propiedades.colorLetra`.

---

### Ejercicio 07 (Ejemplo 7): Entrada con `prompt()`, conversión numérica y cálculo
* **Carpeta Alumno:** [`ejercicio_07/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/ejercicio_07/index.html)
* **Solución:** [`soluciones/ejercicio_07/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/soluciones/ejercicio_07/app.js)
* **Objetivo:** Solicitar datos por teclado, convertirlos a tipo numérico y volcar el cálculo en el DOM.
* **Enunciado:**
  1. Pedir un número al usuario por teclado mediante `prompt('Introduce un numero', 0)`.
  2. Convertir el texto introducido a número real usando `Number()`.
  3. Calcular el doble de dicho número (`numero * 2`).
  4. Escribir el resultado en el párrafo `<p id="salida">`.

---

### Ejercicio 08 (Ejemplo 8): Métodos de manipulación de texto (`.trim()` y `.toLowerCase()`)
* **Carpeta Alumno:** [`ejercicio_08/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/ejercicio_08/index.html)
* **Solución:** [`soluciones/ejercicio_08/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/soluciones/ejercicio_08/app.js)
* **Objetivo:** Limpiar y normalizar cadenas de texto introducidas por los usuarios.
* **Enunciado:**
  1. Solicitar el nombre de usuario mediante `prompt('Ingrese su nombre de usuario')`.
  2. Mostrar en el `<div id="nombre">` el nombre tal cual lo escribió el usuario.
  3. Procesar el nombre aplicando `.trim()` (para eliminar espacios antes y después) y `.toLowerCase()` (para convertirlo a minúsculas).
  4. Mostrar el nombre limpio y procesado en el `<div id="salida">`.

---

### Ejercicio 09 (Ejemplo 9): Saludo interactivo con Template Literals
* **Carpeta Alumno:** [`ejercicio_09/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/ejercicio_09/index.html)
* **Solución:** [`soluciones/ejercicio_09/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/soluciones/ejercicio_09/app.js)
* **Objetivo:** Combinar entradas por teclado con interpolación de variables en la interfaz.
* **Enunciado:**
  1. Pedir el nombre del usuario con `prompt('Ingrese su nombre: ')`.
  2. Apuntar al párrafo `#salidaBienvenida`.
  3. Escribir en el párrafo el mensaje: ``Bienvenido, ${nombre}`` usando `textContent`.

---

### Ejercicio 10 (Ejemplo 10): Conversión matemática de temperaturas
* **Carpeta Alumno:** [`ejercicio_10/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/ejercicio_10/index.html)
* **Solución:** [`soluciones/ejercicio_10/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/soluciones/ejercicio_10/app.js)
* **Objetivo:** Aplicar fórmulas de conversión científica en JavaScript.
* **Enunciado:**
  1. Pedir al usuario una temperatura en grados Celsius mediante `prompt()`.
  2. Aplicar la fórmula de conversión a grados Fahrenheit: $\text{Fahrenheit} = \text{Celsius} \cdot 1.8 + 32$.
  3. Mostrar en el `<div id="salida">` el mensaje formateado: ``${celsius} °C equivalen a ${farenheit} °F``.

---

### Ejercicio 11 (Ejemplo 11): Cálculo de IVA y total con concatenación en `innerHTML`
* **Carpeta Alumno:** [`ejercicio_11/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/ejercicio_11/index.html)
* **Solución:** [`soluciones/ejercicio_11/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/soluciones/ejercicio_11/app.js)
* **Objetivo:** Realizar cálculos comerciales con porcentajes y concatenar resultados en una lista HTML existente.
* **Enunciado:**
  Dada una lista `<ul>` con `<li id="precio">Precio: </li>`, `<li id="iva">IVA: </li>` y `<li id="total">Precio final: </li>`.
  1. Pedir por teclado el precio base del producto con `prompt()`.
  2. Pedir por teclado el porcentaje de IVA a aplicar (por ejemplo `21`).
  3. Calcular la cuota de IVA: $\text{ivaTotal} = \frac{\text{precio} \cdot \text{iva}}{100}$.
  4. Calcular el precio total final: $\text{total} = \text{precio} + \text{ivaTotal}$.
  5. Concatenar cada valor al texto existente en su respectivo `<li>` mediante el operador `+=` de `innerHTML`.
