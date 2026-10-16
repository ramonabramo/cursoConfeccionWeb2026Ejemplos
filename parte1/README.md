# Parte 1: Primeros Pasos en JavaScript — Variables, Entradas con `prompt()` y Salidas en DOM/Consola

Bienvenido a la **Parte 1** del curso de JavaScript. En este bloque inicial aprenderemos los fundamentos esenciales de la programación web: cómo vincular código JavaScript con páginas HTML, declarar variables y constantes, solicitar datos al usuario mediante `prompt()`, realizar cálculos básicos y mostrar la información en pantalla utilizando la consola, alertas emergentes y manipulación directa del DOM (`textContent` e `innerHTML`).

---

## 1. Teoría Fundamental para Empezar a Programar

### 1.1. ¿Cómo se ejecuta JavaScript en una página web?
JavaScript es el lenguaje que dota de dinamismo e interactividad a las páginas web. Para ejecutar código JS externo en un documento HTML, enlazamos el archivo mediante la etiqueta `<script>`:

```html
<!-- En el <head> con el atributo defer para esperar a que el HTML esté cargado -->
<script src="ejemplo1.js" defer></script>

<!-- O justo antes de cerrar la etiqueta </body> -->
<script src="ejemplo1.js"></script>
```

El atributo `defer` garantiza que el navegador cargue y construya primero toda la estructura de la página web (DOM) antes de ejecutar el código JavaScript, evitando errores al buscar elementos que aún no existan.

---

### 1.2. Variables y Constantes: `let` vs `const`
Para guardar información en la memoria de nuestro programa utilizamos **variables** y **constantes**:

* **`let` (Variables):** Se utiliza cuando el valor que almacena puede cambiar a lo largo del programa (por ejemplo: la edad, un contador, el total de una compra).
  ```javascript
  let edad = 20;
  edad = 21; // Válido: el valor cambia
  ```
* **`const` (Constantes):** Se utiliza para valores fijos que **nunca deben ser reasignados** o para referencias a elementos del DOM.
  ```javascript
  const PI = 3.1416;
  const nodoSalida = document.querySelector('#salida');
  ```

---

### 1.3. Tipos de Datos Primitivos
En este bloque trabajaremos con los tipos de datos más comunes:
1. **Cadenas de texto (`String`):** Texto delimitado entre comillas simples (`'Hola'`) o dobles (`"Hola"`).
2. **Números (`Number`):** Valores numéricos enteros (`12`) o decimales (`19.99`), sin comillas.
3. **Objetos literales (`Object`):** Agrupaciones de datos organizados por parejas clave-valor:
   ```javascript
   const alumno = {
       nombre: 'Lucía',
       edad: 22,
       puntos: 100
   };
   console.log(alumno.nombre); // "Lucía"
   ```

---

### 1.4. Canales de Salida: ¿Dónde mostramos los datos?

JavaScript nos ofrece distintas formas de mostrar información:

#### A. La Consola del Navegador (`console.log`)
Es la herramienta principal del desarrollador para inspeccionar valores, verificar que el código funciona y depurar errores. No es visible para el usuario común (se consulta pulsando `F12` en el navegador $\rightarrow$ pestaña *Consola*).
```javascript
console.log('Mensaje de prueba');
console.log(10 + 5); // 15
```

#### B. Ventanas emergentes (`alert`)
Muestra un cuadro de diálogo flotante del sistema operativo con un botón de aceptar.
```javascript
alert('¡Bienvenido a la página!');
```

#### C. Escribir directamente en la página web (DOM)
Para que los usuarios vean los resultados integrados en el diseño de la página, primero apuntamos al elemento HTML con `document.querySelector()` y luego modificamos su contenido:
* **`elemento.textContent`**: Inserta o lee texto plano. Es el método más seguro, limpio y rápido cuando no necesitamos añadir etiquetas HTML.
  ```javascript
  const nodo = document.querySelector('#salida');
  nodo.textContent = 'Hola mundo';
  ```
* **`elemento.innerHTML`**: Inserta o lee contenido interpretando etiquetas HTML (como `<p>`, `<strong>`, `<li>`). También permite concatenar contenido nuevo al que ya existía usando `+=`.
  ```javascript
  nodo.innerHTML = '<strong>Texto en negrita</strong>';
  nodo.innerHTML += '<span>Texto añadido a continuación</span>';
  ```

---

### 1.5. Canales de Entrada: `prompt()` y Conversión de Tipos

#### Solicitar datos con `prompt()`
Antes de ver formularios interactivos, la forma más directa de pedir un dato al usuario en ejercicios introductorios es la función `prompt()`:
```javascript
let nombre = prompt('Introduce tu nombre:');
```

> [!WARNING]
> **¡Atención a la conversión de tipos!**
> La función `prompt()` devuelve **SIEMPRE una cadena de texto (`string`)**, incluso si el usuario teclea números.
> Si intentamos sumar dos datos pedidos por `prompt()` sin convertirlos previamente, el operador `+` los concatenará como textos:
> ```javascript
> let n1 = prompt('Primer número');  // El usuario escribe 10 -> n1 vale "10"
> let n2 = prompt('Segundo número'); // El usuario escribe 5  -> n2 vale "5"
> console.log(n1 + n2);              // "105" (¡Error de concatenación!)
> ```
> Para solucionarlo, debemos convertir el texto a número con **`Number()`**:
> ```javascript
> let n1 = Number(prompt('Primer número'));  // 10 (número real)
> let n2 = Number(prompt('Segundo número')); // 5  (número real)
> console.log(n1 + n2);                      // 15 (¡Suma matemática correcta!)
> ```

---

### 1.6. Operaciones, Cadenas y Estilos

#### A. Operadores Matemáticos
* Suma: `+`
* Resta: `-`
* Multiplicación: `*`
* División: `/`
* Potencia: `**` (por ejemplo: `radio ** 2`)

#### B. Concatenación vs Plantillas de Texto (*Template Literals*)
* **Concatenación tradicional (`+`):**
  ```javascript
  console.log(nombre + ' tiene ' + puntos + ' puntos');
  ```
* **Plantillas de texto modernas (Backticks `` ` ``):** Permiten interpolar variables y expresiones fácilmente con la sintaxis `${variable}`:
  ```javascript
  console.log(`${nombre} tiene ${puntos} puntos`);
  ```

#### C. Métodos Útiles de Texto
* **`.trim()`**: Elimina los espacios en blanco sobrantes al principio y al final de una cadena.
* **`.toLowerCase()`**: Convierte todo el texto a minúsculas.
```javascript
let limpio = entrada.trim().toLowerCase();
```

#### D. Manipulación Básica de Estilos CSS (`.style`)
Podemos modificar directamente el aspecto visual de cualquier elemento desde JavaScript accediendo a su propiedad `.style`:
```javascript
const caja = document.querySelector('#salida');
caja.style.width = '300px';
caja.style.backgroundColor = 'blue';
caja.style.color = 'white';
```

---

### 1.7. Estructura Estándar de un Programa Secuencial
Para aprender a programar de manera ordenada, dividimos siempre el archivo en bloques lógicos:

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

| Nº / Archivo | Concepto Clave / Novedad | Archivo JS | Archivo HTML |
| :---: | :--- | :---: | :---: |
| **Ejemplo 1** | Primer script: vinculación con `defer`, `console.log` y primer `textContent` | [`ejemplo1.js`](./ejemplo1.js) | [`ejemplo1.html`](./ejemplo1.html) |
| **Ejemplo 2** | Lectura de párrafos en el DOM, variables y plantillas con backticks | [`ejemplo2.js`](./ejemplo2.js) | [`ejemplo2.html`](./ejemplo2.html) |
| **Ejemplo 4** | Declaración de constantes (`const`) y escritura de saludo en el DOM | [`ejemplo4.js`](./ejemplo4.js) | [`ejemplo4.html`](./ejemplo4.html) |
| **Ejemplo 5** | Objetos literales (`{}`) para agrupar datos leídos de una lista `<ul>` | [`ejemplo5.js`](./ejemplo5.js) | [`ejemplo5.html`](./ejemplo5.html) |
| **Ejemplo 6** | Manipulación de estilos CSS en línea (`style.width`, `style.backgroundColor`) | [`ejemplo6.js`](./ejemplo6.js) | [`ejemplo6.html`](./ejemplo6.html) |
| **Ejemplo 7** | Entrada de datos con `prompt()`, conversión con `Number()` y cálculo del doble | [`ejemplo7.js`](./ejemplo7.js) | [`ejemplo7.html`](./ejemplo7.html) |
| **Ejemplo 8** | Limpieza de strings con `.trim()` y conversión a minúsculas con `.toLowerCase()` | [`ejemplo8.js`](./ejemplo8.js) | [`ejemplo8.html`](./ejemplo8.html) |
| **Ejemplo 9** | Saludo dinámico: captura de nombre con `prompt()` e interpolación en el DOM | [`ejemplo9.js`](./ejemplo9.js) | [`ejemplo9.html`](./ejemplo9.html) |
| **Ejemplo 10** | Fórmula matemática: conversión de grados Celsius a Fahrenheit ($C \cdot 1.8 + 32$) | [`ejemplo10.js`](./ejemplo10.js) | [`ejemplo10.html`](./ejemplo10.html) |
| **Ejemplo 11** | Cálculo financiero: precio base, porcentaje de IVA y total acumulado en `innerHTML` | [`ejemplo11.js`](./ejemplo11.js) | [`ejemplo11.html`](./ejemplo11.html) |

---

## 3. Enunciados Detallados de los Ejercicios

### Ejemplo 1: Primer script y canales de salida
* **Archivos:** [`ejemplo1.js`](./ejemplo1.js) \| [`ejemplo1.html`](./ejemplo1.html)
* **Objetivo:** Comprender la ejecución de JavaScript externo y los dos primeros canales de salida: la consola y el DOM.
* **Enunciado:**
  1. Vincular el archivo `ejemplo1.js` en el `<head>` del HTML utilizando el atributo `defer`.
  2. Apuntar al párrafo con identificador `#salidaMensaje` y escribir en él el texto: `"Javascript esta funcionando"` usando `textContent`.
  3. Enviar a la consola del desarrollador el mensaje: `"Hola desde JS"`.
  4. Realizar una operación matemática directa (`10 + 5`) y mostrar su resultado en la consola.

---

### Ejemplo 2: Lectura del DOM, concatenación y Template Literals
* **Archivos:** [`ejemplo2.js`](./ejemplo2.js) \| [`ejemplo2.html`](./ejemplo2.html)
* **Objetivo:** Extraer información existente en etiquetas HTML y formatear salidas de texto.
* **Enunciado:**
  En el HTML existen dos párrafos: `<p id="nombre">Lucia</p>` y `<p id="puntos">12</p>`.
  1. Apuntar a ambos elementos con `document.querySelector()`.
  2. Leer su contenido textual mediante `.textContent` y guardarlo en variables (`nombre` y `puntos`).
  3. Mostrar en la consola la frase: `"Lucia tiene 12 puntos"` utilizando primero la concatenación tradicional con `+`.
  4. Mostrar la misma frase utilizando plantillas de texto modernas (*template literals*) con comillas invertidas (`` `${nombre} tiene ${puntos} puntos` ``).

---

### Ejemplo 4: Uso de constantes para textos fijos
* **Archivos:** [`ejemplo4.js`](./ejemplo4.js) \| [`ejemplo4.html`](./ejemplo4.html)
* **Objetivo:** Declarar constantes inmutables y plasmarlas en el DOM.
* **Enunciado:**
  1. Declarar una constante llamada `TEXTO` con el valor `"hola desde un archivo externo"`.
  2. Apuntar al párrafo con identificador `#salidaSaludo`.
  3. Asignar el contenido de la constante al párrafo mediante `textContent`.

---

### Ejemplo 5: Agrupación de datos en un objeto literal
* **Archivos:** [`ejemplo5.js`](./ejemplo5.js) \| [`ejemplo5.html`](./ejemplo5.html)
* **Objetivo:** Aprender a organizar múltiples datos relacionados dentro de un objeto literal.
* **Enunciado:**
  Dada una lista en HTML con tres elementos: `<li id="nombre">Ramon</li>`, `<li id="poblacion">Santander</li>` y `<li id="edad">54</li>`.
  1. Crear un objeto constante `datos` con propiedades vacías: `{ nombre: '', poblacion: '', edad: 0 }`.
  2. Leer el texto de cada `<li>` del DOM y almacenarlo en la propiedad correspondiente del objeto (`datos.nombre`, etc.).
  3. Mostrar en la consola un resumen formateado: `"Nombre: Ramon Edad: 54 Poblacion: Santander"`.

---

### Ejemplo 6: Manipulación de propiedades CSS desde JavaScript
* **Archivos:** [`ejemplo6.js`](./ejemplo6.js) \| [`ejemplo6.html`](./ejemplo6.html)
* **Objetivo:** Modificar el estilo visual de elementos HTML en tiempo real mediante la propiedad `.style`.
* **Enunciado:**
  Dado un elemento `<div id="salida">` y un objeto constante con propiedades de diseño:
  `const propiedades = { ancho: 300, alto: 100, fondo: 'blue', colorLetra: 'white' };`
  1. Apuntar al div `#salida`.
  2. Asignar el ancho en píxeles: `nodoSalida.style.width = \`\${propiedades.ancho}px\``.
  3. Asignar la altura en píxeles: `nodoSalida.style.height = \`\${propiedades.alto}px\``.
  4. Cambiar el color de fondo: `nodoSalida.style.backgroundColor = propiedades.fondo`.
  5. Cambiar el color del texto: `nodoSalida.style.color = propiedades.colorLetra`.

---

### Ejemplo 7: Entrada con `prompt()`, conversión numérica y cálculo
* **Archivos:** [`ejemplo7.js`](./ejemplo7.js) \| [`ejemplo7.html`](./ejemplo7.html)
* **Objetivo:** Solicitar datos por teclado, convertirlos a tipo numérico y volcar el cálculo en el DOM.
* **Enunciado:**
  1. Pedir un número al usuario por teclado mediante `prompt('Introduce un numero', 0)`.
  2. Convertir el texto introducido a número real usando `Number()`.
  3. Calcular el doble de dicho número (`numero * 2`).
  4. Escribir el resultado en el párrafo `<p id="salida">`.

---

### Ejemplo 8: Métodos de manipulación de texto (`.trim()` y `.toLowerCase()`)
* **Archivos:** [`ejemplo8.js`](./ejemplo8.js) \| [`ejemplo8.html`](./ejemplo8.html)
* **Objetivo:** Limpiar y normalizar cadenas de texto introducidas por los usuarios.
* **Enunciado:**
  1. Solicitar el nombre de usuario mediante `prompt('Ingrese su nombre de usuario')`.
  2. Mostrar en el `<div id="nombre">` el nombre tal cual lo escribió el usuario.
  3. Procesar el nombre aplicando `.trim()` (para eliminar espacios antes y después) y `.toLowerCase()` (para convertirlo a minúsculas).
  4. Mostrar el nombre limpio y procesado en el `<div id="salida">`.

---

### Ejemplo 9: Saludo interactivo con Template Literals
* **Archivos:** [`ejemplo9.js`](./ejemplo9.js) \| [`ejemplo9.html`](./ejemplo9.html)
* **Objetivo:** Combinar entradas por teclado con interpolación de variables en la interfaz.
* **Enunciado:**
  1. Pedir el nombre del usuario con `prompt('Ingrese su nombre: ')`.
  2. Apuntar al párrafo `#salidaBienvenida`.
  3. Escribir en el párrafo el mensaje: `` `Bienvenido, ${nombre}` `` usando `textContent`.

---

### Ejemplo 10: Conversión matemática de temperaturas
* **Archivos:** [`ejemplo10.js`](./ejemplo10.js) \| [`ejemplo10.html`](./ejemplo10.html)
* **Objetivo:** Aplicar fórmulas de conversión científica en JavaScript.
* **Enunciado:**
  1. Pedir al usuario una temperatura en grados Celsius mediante `prompt()`.
  2. Aplicar la fórmula de conversión a grados Fahrenheit: $\text{Fahrenheit} = \text{Celsius} \cdot 1.8 + 32$.
  3. Mostrar en el `<div id="salida">` el mensaje formateado: `` `${celsius} °C equivalen a ${farenheit} °F` ``.

---

### Ejemplo 11: Cálculo de IVA y total con concatenación en `innerHTML`
* **Archivos:** [`ejemplo11.js`](./ejemplo11.js) \| [`ejemplo11.html`](./ejemplo11.html)
* **Objetivo:** Realizar cálculos comerciales con porcentajes y concatenar resultados en una lista HTML existente.
* **Enunciado:**
  Dada una lista `<ul>` con `<li id="precio">Precio: </li>`, `<li id="iva">IVA: </li>` y `<li id="total">Precio final: </li>`.
  1. Pedir por teclado el precio base del producto con `prompt()`.
  2. Pedir por teclado el porcentaje de IVA a aplicar (por ejemplo `21`).
  3. Calcular la cuota de IVA: $\text{ivaTotal} = \frac{\text{precio} \cdot \text{iva}}{100}$.
  4. Calcular el precio total final: $\text{total} = \text{precio} + \text{ivaTotal}$.
  5. Concatenar cada valor al texto existente en su respectivo `<li>` mediante el operador `+=` de `innerHTML`.
