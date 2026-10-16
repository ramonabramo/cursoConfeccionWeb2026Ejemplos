# Curso Práctico de JavaScript (Confección Web 2026)
## Guía Global del Curso, Metodología e Itinerario Formativo

Bienvenido/a al repositorio formativo de **JavaScript**. Este conjunto de materiales, ejercicios y soluciones ha sido diseñado con una metodología pedagógica progresiva, práctica y orientada a proyectos para que el alumno adquiera bases sólidas en programación frontend moderna, desde la comprensión del navegador y el DOM hasta la manipulación dinámica de eventos y estructuras de datos.

---

## 1. Introducción al Curso de JavaScript

### ¿Qué es JavaScript y cuál es su rol en la Web?
En el desarrollo web moderno, las páginas e interfaces digitales se construyen sobre tres pilares complementarios:

1. **HTML (Estructura)**: Proporciona el esqueleto y la semántica del documento (títulos, párrafos, formularios, botones).
2. **CSS (Presentación)**: Define el diseño visual, maquetación, paleta de colores, tipografías y adaptabilidad a pantallas (responsive).
3. **JavaScript (Comportamiento y Dinamismo)**: Dota a la página de vida e interactividad. Es el único lenguaje de programación que se ejecuta de forma nativa en todos los navegadores web del mundo sin necesidad de instalar complementos adicionales.

Con JavaScript podemos:
- Escuchar y responder en tiempo real a las acciones del usuario (clics, pulsaciones de teclas, desplazamientos, envíos de formulario).
- Modificar el contenido, estructura y estilos del documento de forma inmediata sin necesidad de recargar la página.
- Validar información antes de procesarla o enviarla a servidores.
- Almacenar, transformar y gestionar colecciones de datos en la memoria del cliente.
- Construir aplicaciones web completas (SPA), animaciones y juegos interactivos.

---

### Metodología Didáctica: De lo Lineal a lo Reactivo

Aprender a programar suele resultar confuso cuando se mezclan conceptos abstractos de algoritmos con interfaces gráficas complejas. Para garantizar un aprendizaje fluido y libre de frustración, este curso sigue dos directrices pedagógicas fundamentales:

#### 1. Transición Natural de Paradigma
- **Fase Inicial (Lineal / Secuencial)**: Comenzamos comprendiendo cómo se declaran variables, cómo se almacena información y cómo se ejecutan instrucciones de arriba hacia abajo usando herramientas directas como `prompt()` y la consola del navegador (`console.log`).
- **Fase de Maduración (Reactiva / Basada en Eventos)**: Abandonamos de inmediato los cuadros de diálogo bloqueantes y pasamos a construir interfaces web auténticas. Los programas ya no se ejecutan de golpe; se quedan a la espera (*escuchando*) de que el usuario interactúe con botones o formularios mediante `addEventListener()`.

#### 2. La Plantilla de Trabajo en 5 Pasos
Para evitar el síndrome de la "página en blanco", todos los ejercicios prácticos guían al alumno a estructurar su código en 5 fases estandarizadas:

```javascript
// 1. CONSTANTES AL DOM: Referenciamos los elementos visuales que necesitamos controlar
const inputDato = document.querySelector('#inputDato');
const btnAccion = document.querySelector('#btnAccion');
const divResultado = document.querySelector('#divResultado');

// 2. VARIABLES DE ESTADO: Guardamos la memoria o datos de la aplicación
let contador = 0;
let listaElementos = [];

// 3. LISTENERS / EVENTOS: Escuchamos la interacción del usuario
btnAccion.addEventListener('click', function(e) {
  // 4. ENTRADAS: Leemos y convertimos los valores introducidos
  const valor = Number(inputDato.value);

  // 5. PROCESAMIENTO Y SALIDAS: Aplicamos la lógica y pintamos el resultado en pantalla
  contador += valor;
  divResultado.textContent = `El total acumulado es: ${contador}`;
});
```

---

### Principios y Buenas Prácticas Inculcadas
A lo largo de todo el curso se promueven los estándares de **JavaScript Moderno (ES6+)**:
- **Uso estricto de `const` y `let`**: Prohibición explícita de `var`, evitando fugas de ámbito global y problemas de *hoisting*.
- **Comparación estricta (`===` y `!==`)**: Comprobando igualdad de valor y tipo a la vez para prevenir conversiones automáticas imprevistas.
- **Separación de responsabilidades**: El código HTML define la semántica, el archivo CSS el aspecto estético, y el archivo JS se enlaza externamente manteniendo el código modular y limpio.
- **Nomenclatura semántica**: Variables y funciones escritas en notación camelCase con nombres claros y autoexplicativos en español.

---

## 2. Mapa de Ruta del Curso (Itinerario Formativo)

| Módulo / Carpeta | Temas Clave | Conceptos Principales | Nº Ejercicios | Enlace al Manual |
| :--- | :--- | :--- | :---: | :--- |
| [**`iniciales/`**](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/README.md) | La Tríada Web y el DOM | HTML vs CSS vs JS, CSS interno/externo, árbol DOM, `<script>` en `<head>` vs final de `<body>`, atributo `defer`. | 16 ejemplos | [Ver README](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/README.md) |
| [**`parte1/`**](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/README.md) | Variables y Primeras Salidas | `let` vs `const`, entrada con `prompt()`, salidas con `console.log()`, `alert()`, `textContent` e `innerHTML`. | 10 ejemplos | [Ver README](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/README.md) |
| [**`parte2/`**](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte2/README.md) | De la Programación Lineal a Eventos | Sustitución de `prompt()` por formularios con `<input>`, `addEventListener('click')`, lectura de `.value`, casteo `Number()`. | 9 ejercicios | [Ver README](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte2/README.md) |
| [**`parte3/`**](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte3/README.md) | Estructuras Condicionales (`if`) | Toma de decisiones, operadores relacionales (`===`, `!==`, `>`, `<`), operadores lógicos (`&&`, `||`, `!`). Doble enfoque: `sinEventos` y `eventos`. | 25 ejercicios + 25 soluciones | [Ver README](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte3/README.md) |
| [**`parte4/`**](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte4/README.md) | El Objeto `event` (`e`) | Información de eventos, `e.type`, `e.preventDefault()`, teclado (`e.key`), ratón (`e.clientX/Y`), `e.shiftKey`, `e.target` vs `e.currentTarget`. | 11 ejercicios + 11 soluciones | [Ver README](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte4/README.md) |
| [**`parte5/`**](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte5/README.md) | Arrays de Datos y Recorridos | Listas indexadas, `.length`, mutadores (`push`, `pop`, `unshift`, `shift`, `splice`), búsquedas (`includes`, `indexOf`), `forEach`, `for`, `while`. | 15 ejercicios + 15 soluciones | [Ver README](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte5/README.md) |
| [**`parte6/`**](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte6/README.md) | Colecciones del DOM (`querySelectorAll`) | `querySelectorAll`, `NodeList`, `forEach` masivo, exclusión mutua (pestañas), checkboxes grupales, atributos `data-*` (`dataset`), `Array.from()`, filtros en tiempo real. | 10 ejercicios + 10 soluciones | [Ver README](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte6/README.md) |
| [**`parte7/`**](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte7/README.md) | Bucles y Repetición (`for`, `while`, `for...of`, `for...in`, `forEach`) | Anatomía de bucles, contador e incremento, parada temprana con `break`, iteración de valores con `for...of`, claves de objetos con `for...in`, arrays vs NodeLists. | 12 ejercicios (6 pares) + 12 soluciones | [Ver README](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte7/README.md) |
| [**`parte8/`**](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte8/README.md) | Funciones en JavaScript (Fundamentos a Avanzado) | Function declaration, parámetros por defecto, rest (`...rest`), early return, scope, variable shadowing, call stack, hoisting, arrow functions con retorno implícito, IIFE, HOF, callbacks, closures, recursividad y funciones puras. | 14 ejercicios (7 pares) + 14 soluciones | [Ver README](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte8/README.md) |
| [**`parte9/`**](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte9/README.md) | Asincronía, Temporizadores y Event Loop | Arquitectura asíncrona, Single Thread, Call Stack, Web APIs, Task Queue, Event Loop, `setTimeout`, `clearTimeout`, `setInterval`, `clearInterval`, prevención de solapamientos, relojes en tiempo real, barras de progreso, carruseles con pausa al hover y minijuegos de reflejos. | 12 ejercicios (6 pares) + 12 soluciones | [Ver README](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte9/README.md) |
| [**`parte10/`**](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte10/README.md) | Objetos y Clases en JavaScript (ES6+) | Modelado formal, memoria Heap vs Stack, mutabilidad por referencia, `Object.freeze()`, diferencias con JSON (`JSON.stringify` / `JSON.parse`), clases modernas (`class`, `constructor`, `new`), métodos estáticos, campos privados con `#`, getters/setters, y herencia con `extends` y `super()`. | 12 ejercicios (6 pares) + 12 soluciones | [Ver README](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte10/README.md) |

---

## 3. Qué se Analiza en Cada Parte (Desglose Exhaustivo)

### Módulo 0: [iniciales/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/iniciales/README.md) — Introducción a JS y la Tríada Web
El punto de partida del curso. Diseñado para que el alumno entienda la relación física entre los archivos de un proyecto web y el ciclo de vida de carga en el navegador:
- **La Tríada Web**: Diferencias de rol entre HTML, CSS y JavaScript.
- **Inclusión de estilos CSS**: Comparación entre estilos internos (`<style>` en cabecera) y archivos externos (`<link rel="stylesheet">`), justificando la arquitectura de archivos limpios.
- **¿Qué es el DOM (*Document Object Model*)?**: Explicación del árbol de nodos en memoria generado por el navegador al parsear el HTML.
- **Ubicación de la etiqueta `<script>`**:
  - Al final de `<body>`: Por qué funciona (el DOM ya ha sido creado).
  - En el `<head>` sin `defer`: El clásico error del principiante (`null is not an object`) al intentar buscar etiquetas que aún no existen en el DOM.
  - En el `<head>` con el atributo `defer`: La solución estándar moderna; descarga asíncrona sin bloquear el renderizado y ejecución ordenada tras parsear el documento.
- **Contenido práctico**: 16 ejemplos de prueba y validación.

---

### Módulo 1: [parte1/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte1/README.md) — Fundamentos, Variables y Primeras Salidas
Iniciación a la programación algorítmica secuencial y a la captura/emisión de información:
- **Gestión de variables**: Diferencias cruciales entre `let` (valores reasignables) y `const` (valores fijos inmutables).
- **Entrada rápida**: Uso de `prompt()` para solicitar información al usuario y comprensión de que devuelve siempre datos de tipo texto (*string*).
- **Canales de salida y depuración**:
  - `console.log()`: La herramienta fundamental para inspeccionar datos en las herramientas de desarrollo del navegador (DevTools - F12).
  - `alert()`: Ventanas modales emergentes simples.
- **Primer contacto con el DOM**:
  - `.textContent`: Inserción segura de texto plano dentro de un elemento.
  - `.innerHTML`: Inyección de marcado y etiquetas HTML dinámicas.
- **Contenido práctico**: 10 ejemplos prácticos (`ejemplo1` a `ejemplo11`).

---

### Módulo 2: [parte2/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte2/README.md) — De la Programación Lineal a Eventos y Formularios
El salto cualitativo hacia el desarrollo web interactivo real:
- **Superación de `prompt()`**: Explicación de por qué `prompt()` no se utiliza en entornos profesionales (bloquea el hilo del navegador y arruina la experiencia de usuario).
- **Formularios e Inputs**: Construcción de interfaces gráficas con campos de texto, números y botones.
- **Escucha de Eventos (`addEventListener`)**: Introducción al método que conecta el código JavaScript con la interfaz de usuario.
- **Lectura y Conversión de Datos**:
  - Obtención de valores mediante la propiedad `.value`.
  - Conversión de tipos con `Number(input.value)` para evitar el temido error de concatenación (`"5" + "10" = "510"`).
- **Salidas en contenedores dedicados**: Sustitución de cajas de diálogo por elementos `<div>` o `<p>` estilizados.
- **Contenido práctico**: 9 ejercicios interactivos de cálculo, formato de textos y conversión de unidades.

---

### Módulo 3: [parte3/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte3/README.md) — Estructuras Condicionales (`if...else`)
Capacidad de dotar al programa de lógica y bifurcaciones en base a condiciones booleanas:
- **Estructura `if`**:
  - Condicional simple (`if`).
  - Condicional alternativo (`if...else`).
  - Condicional múltiple encadenado (`if...else if...else`).
- **Operadores de comparación**: Igualdad estricta (`===`), desigualdad estricta (`!==`), mayor/menor (`>`, `<`, `>=`, `<=`).
- **Operadores lógicos**: Conjunción Y (`&&`), disyunción O (`||`) y negación NO (`!`).
- **Estrategia pedagógica dual**:
  - Carpeta **`sinEventos/`** (15 ejercicios): Enfoque puro en el algoritmo y la lógica mediante `prompt()` y salidas en consola/DOM directo.
  - Carpeta **`eventos/`** (10 ejercicios): Traslado inmediato de la lógica condicional a aplicaciones con formularios, botones y validación en tiempo real.
- **Contenido práctico**: 25 ejercicios en total con sus 25 soluciones completas y comprobadas (15 en `sinEventos` + 10 en `eventos`).

---

### Módulo 4: [parte4/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte4/README.md) — El Objeto `event` (`e`) y Eventos Avanzados
Profundización en la arquitectura de eventos del navegador:
- **Evolución Metodológica (`const` frente a `let`)**: Paso de la regla de iniciación (`const` para DOM, `let` para primitivos) al estándar profesional ES6+ (inmutabilidad por defecto: `const` para todo dato leído que no se reasigna, reservando `let` estrictamente para variables mutables como contadores o acumuladores).
- **¿Qué es el objeto `event`?**: Objeto autogenerado que contiene todos los metadatos de lo que acaba de suceder en el navegador.
- **Propiedades y métodos esenciales**:
  - `e.type`: Identificación del tipo de evento disparado (`click`, `keydown`, `mousemove`, etc.).
  - `e.preventDefault()`: Cancelación de comportamientos nativos no deseados (recarga en formularios al hacer `submit`, navegación en enlaces `<a>`).
  - **Eventos de teclado**: Detección de teclas pulsadas con `e.key` (ej. pulsar `Enter` para enviar).
  - **Eventos de ratón**: Seguimiento de coordenadas espaciales con `e.clientX` y `e.clientY`.
  - **Teclas modificadoras**: Detección de pulsaciones simultáneas (`e.shiftKey`, `e.ctrlKey`, `e.altKey`).
  - **Delegación de eventos y propagación**: La diferencia crucial entre `e.target` (el elemento hijo exacto donde se originó el clic) y `e.currentTarget` (el elemento contenedor donde está registrado el listener).
- **Contenido práctico**: 11 ejercicios de dificultad creciente con sus 11 soluciones completas y comprobadas.

---

### Módulo 5: [parte5/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte5/README.md) — Arrays de Datos y Recorridos
Manejo de colecciones de datos en memoria (preparación previa a colecciones del DOM):
- **Convención de Formularios**: Uso pedagógico de `type="submit"` con `e.preventDefault()` en el Ejercicio 01 para explicar la intercepción del envío nativo, y adopción de `<button type="button">` con escuchadores `'click'` en los ejercicios 02 al 15 para un código de interfaz más limpio, directo y modular.
- **Fundamentos de Arrays**:
  - Definición mediante corchetes `[]`.
  - Indexación base cero (el primer elemento está en el índice `0`).
  - Propiedad de longitud dinámica (`.length`).
- **Métodos mutadores de inserción y extracción**:
  - Final del array: `.push()` (añadir) y `.pop()` (eliminar).
  - Inicio del array: `.unshift()` (añadir) y `.shift()` (eliminar).
  - Posiciones intermedias: `.splice(inicio, cantidad, ...nuevos)` para borrar o insertar en cualquier posición.
- **Búsqueda e inspección**:
  - `.includes(elemento)`: Comprobación de existencia booleana (`true` / `false`).
  - `.indexOf(elemento)`: Localización del índice exacto de una coincidencia (`-1` si no existe).
- **Técnicas de recorrido sistemático**:
  - **`forEach()`**: El método moderno, declarativo y recomendado en JavaScript para recorrer colecciones (tanto leyendo el valor como opcionalmente el índice).
  - **Bucle clásico `for`**: Control estricto con contador `for (let i = 0; i < array.length; i++)`.
  - **Bucle `while`**: Recorridos basados en condiciones dinámicas.
- **Contenido práctico**: 15 ejercicios completos con interfaces web y sus 15 soluciones funcionales.

---

### Módulo 6: [parte6/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte6/README.md) — Colecciones del DOM (`querySelectorAll` y `NodeList`)
Conexión definitiva entre las estructuras de listas y la interfaz gráfica web:
- **`document.querySelector()` frente a `document.querySelectorAll()`**: Comprensión de cuándo capturar un único elemento y cuándo capturar una colección completa.
- **La estructura `NodeList`**: Indexación base cero, propiedad `.length` y método integrado `.forEach()`.
- **Diferencias críticas con los Arrays**: Por qué una `NodeList` no tiene `.filter()`, `.map()`, `.push()` o `.splice()`.
- **Conversión a Array real**: Uso de `Array.from()` y el operador spread (`[...]`) para habilitar programación funcional en el DOM.
- **Prevención del error clásico**: Explicación de por qué `nodeList.addEventListener()` falla y cómo registrar escuchadores iterando con `forEach`.
- **Patrón de Exclusión Mutua**: Desactivación masiva y activación individual (pestañas, tabs, menús de navegación, filtros de catálogo).
- **Atributos personalizados `data-*` (`dataset`)**: Asociación y lectura de metadatos técnicos en etiquetas HTML5.
- **Buscador en tiempo real**: Filtrado dinámico con el evento `'input'` y alternancia de clases de visibilidad (`.oculto`).
- **Contenido práctico**: 10 proyectos interactivos completos con sus 10 soluciones funcionales verificadas.

---

### Módulo 7: [parte7/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte7/README.md) — Bucles y Estructuras de Repetición (`for`, `while`, `for...of`, `for...in`, `forEach`)
Dominio comparativo de todas las formas de iteración en JavaScript estructurado mediante metodología de **6 pares de aprendizaje** (1 teoría guiada + 1 práctica del alumno):
- **Bucle `for` clásico**: Control estricto de contador numérico `for (let i = 0; i < len; i++)`, recorridos ascendentes, descendentes e inversos (`i--`), y saltos (`i += 2`). Efecto cebra en el DOM con operador módulo `% 2`.
- **Bucle `while`**: Ciclo de vida condicional, inicialización previa e incremento manual interno para prevenir bloqueos por bucle infinito. Búsqueda lineal eficiente con parada anticipada (`break`).
- **Bucle `for...of` (ES6)**: Sintaxis moderna para extraer directamente los valores de estructuras iterables (Arrays, NodeLists y cadenas de texto), eliminando la necesidad de índices numéricos.
- **Bucle `for...in`**: Inspección de propiedades/claves en **Objetos literales**. Justificación técnica de por qué nunca debe usarse para recorrer arrays numéricos o NodeLists.
- **Método `forEach()`**: Recorrido funcional y declarativo con los parámetros `(elemento, indice, arrayOriginal)` para rankings, acumulaciones y componentes interactivos como ratings por estrellas.
- **Comparativa y selección estratégica**: Resolución del mismo problema con los 4 bucles principales y reto integrador de inventario con selección del bucle óptimo para cada tarea.
- **Contenido práctico**: 12 ejercicios completos organizados por pares (6 guiados + 6 prácticos) con sus 12 soluciones comprobadas.

---

### Módulo 8: [parte8/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte8/README.md) — Funciones en JavaScript: De los Fundamentos al Ámbito Avanzado
Tratamiento exhaustivo de funciones basado en especificación oficial ECMAScript (ECMA-262), MDN Web Docs y pedagogía terrenal con humor para el aula:
- **Fundamentos y Anatomía**: Declaración formal vs invocación `()`, parámetros formales vs argumentos reales, parámetros por defecto (ES6), parámetros Rest (`...rest`: *el saco sin fondo de Papá Noel*), y control de flujo con Early Return y sentencia `return`.
- **Ámbito y Memoria**: Ámbito léxico (*Lexical Scope*), ocultación de variables (*Variable Shadowing*), y estructura LIFO de la Pila de Llamadas (*Call Stack*).
- **Tipología y Sintaxis Moderna**: Ciudadanos de primera clase, funciones anónimas y expresiones (*el sicario y el mote*), *Hoisting* completo en declaradas vs TDZ en expresiones (*el enchufado VIP vs el becario*), Funciones Flecha (*Arrow Functions*) con retorno implícito de primitivos y objetos `({})`, e IIFE (*el mensaje del Inspector Gadget*).
- **Funciones de Orden Superior y Callbacks**: Higher-Order Functions (HOF), delegación de rutinas con callbacks síncronos y asíncronos.
- **Conceptos Avanzados**: Clausuras (*Closures*: *el hijo que se lleva la llave de la despensa en la mochila secreta*), recursividad y caso base (*Inception / muñecas rusas* para evitar Stack Overflow), y funciones puras vs impuras (*el cirujano aséptico vs el cuñado en la cocina*).
- **Contenido práctico**: 14 ejercicios estructurados en 7 pares de aprendizaje (7 guiados + 7 prácticos) con sus 14 soluciones verificadas.

---

### Módulo 9: [parte9/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte9/README.md) — Asincronía en JavaScript: Temporizadores (`setTimeout`, `setInterval`) y el Event Loop
Comprensión profunda de la arquitectura no bloqueante de JavaScript, temporizadores y el bucle de eventos, estructurado mediante **6 pares de aprendizaje** (1 teoría guiada + 1 práctica del alumno):
- **La Arquitectura Asíncrona**: El modelo de un solo hilo (*Single-Threaded*), la Pila de Ejecución (*Call Stack*), las Web APIs del navegador, la Cola de Tareas (*Task Queue*) y el Bucle de Eventos (*Event Loop*).
- **El Misterio de `setTimeout(..., 0)`**: Demostración empírica de por qué un temporizador con 0 milisegundos se ejecuta siempre después de todo el código síncrono del Call Stack.
- **`setTimeout()` y `clearTimeout()`**: Postergación de acciones y cancelación preventiva antes de que venza el plazo para evitar ejecuciones no deseadas.
- **`setInterval()` y `clearInterval()`**: Repetición cíclica continua, prevención crítica de acumulación y solapamiento de intervalos (*memory leaks*), y parada/reinicio limpios.
- **Componentes Prácticos Interactivos**:
  - *Notificaciones Toast*: Mensajes temporales con barra regresiva y botón "Deshacer".
  - *Descargas Seguras*: Espera simulada con antivirus y cancelación previa.
  - *Cronómetro Deportivo*: Iniciar, Pausar y Reiniciar con precisión de décimas.
  - *Temporizador de Cuenta Atrás*: Cuenta regresiva configurable con alarma sonora y visual.
  - *Relojes Digitales en Vivo*: Sincronización con `new Date()`, formato de fecha completa, y conmutador 24H vs 12H con AM/PM.
  - *Barras de Progreso Dinámicas*: Animaciones fluidas modificando `style.width` en tiempo real y simulador de carga de batería con estados de color.
  - *Carruseles y Marquesinas*: Autoplay periódico pausado automáticamente al posar el cursor (`mouseenter` / `mouseleave`).
  - *Minijuego de Reflejos*: Semáforo con retardo aleatorio, detección de clics tempranos (trampa/falso arranque) y cálculo milimétrico de tiempo de reacción con `Date.now()`.
- **Contenido práctico**: 12 ejercicios estructurados en 6 pares de aprendizaje (6 guiados + 6 prácticos) con sus 12 soluciones verificadas.

---

### Módulo 10: [parte10/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte10/README.md) — Objetos y Clases en JavaScript (ES6+): De los Literales a la POO Moderna
Dominio completo de la Programación Orientada a Objetos en JavaScript moderno, estructurado mediante **6 pares de aprendizaje** (1 teoría guiada + 1 práctica del alumno):
- **Objetos Literales**: Creación de estructuras asociativas clave-valor, notación de punto vs notación de corchetes dinámicos, e invocación de métodos con contexto `this`.
- **Memoria y Referencias (Heap vs. Stack)**: Paso por valor en tipos primitivos vs paso por referencia en objetos, el peligro de mutaciones colaterales en punteros compartidos, clonación superficial independiente (*Spread Operator* `{ ...obj }`) y protección estricta con `Object.freeze()`.
- **Objetos JS vs Formato JSON**: Justificación de JSON como estándar mundial de texto plano, desaparición de funciones/métodos en la serialización, y conversión segura con `JSON.stringify(obj, null, 2)` y `JSON.parse()` blindado con `try ... catch`.
- **Clases en ES6 (Syntactic Sugar de Prototipos)**: Explicación de la cadena de prototipos de JavaScript y cómo la sintaxis `class` aporta una capa limpia sobre constructores y métodos sin necesidad de manipular `.prototype` a mano. Creación de instancias aisladas con `new`.
- **Encapsulamiento Moderno**: Campos y métodos estrictamente privados mediante el prefijo `#` (y desmitificación de la vieja convención `_variable`), junto a descriptores de acceso `get` y `set` con validaciones de límites en tiempo de ejecución.
- **Herencia y Polimorfismo**: Extensión de clases con `extends`, la regla de oro de invocar obligatoriamente `super()` antes de acceder a `this`, sobrescritura de métodos (*Method Overriding*) con `super.metodo()` y polimorfismo adaptativo.
- **Contenido práctico**: 12 ejercicios estructurados en 6 pares de aprendizaje (6 guiados + 6 prácticos) con sus 12 soluciones verificadas.

---

## 4. Estructura de los Ejercicios y Modo de Uso

Cada carpeta de ejercicios (en `parte4`, `parte5`, etc.) está concebida como un entorno de trabajo autosuficiente e independiente:

```text
ejercicio_XX/
├── index.html     <- Estructura visual accesible y con IDs semánticos
├── style.css      <- Hoja de estilos desacoplada y estética
└── app.js         <- Plantilla de código comentada con la estructura en 5 fases
```

Y en paralelo, la carpeta **`soluciones/`** contiene el código 100% resuelto y verificado para que el docente disponga de material de referencia o para que el alumno pueda autocorregirse tras intentar resolver el problema por sí mismo.

---

## 5. Guía de Trabajo y Diagnóstico de Errores para el Alumno

### 🛠️ Herramientas de Desarrollo (DevTools - F12)
El navegador web es el entorno de desarrollo y depuración más potente. Los alumnos deben familiarizarse desde el primer día con:
1. **Pestaña Consola (Console)**:
   - Permite visualizar mensajes de `console.log()`.
   - Muestra los errores de sintaxis en color rojo indicando el archivo exacto y la línea donde ocurrió el fallo.
2. **Pestaña Elementos (Elements / Inspector)**:
   - Permite inspeccionar en vivo el árbol DOM para ver cómo JavaScript altera los textos, clases o atributos en tiempo real.

### ⚠️ Errores Frecuentes y Cómo Resolverlos

> [!WARNING]
> **Error común 1: `TypeError: Cannot read properties of null (reading 'addEventListener')`**
> - **Causa**: El script se ejecutó antes de que el navegador creara los elementos HTML, o el selector en `document.querySelector('#miId')` tiene una errata.
> - **Solución**: Asegúrate de haber colocado `<script src="..." defer></script>` en el `<head>` o situarlo justo antes de cerrar `</body>`, y revisa que el selector CSS coincida con el `id` del HTML.

> [!WARNING]
> **Error común 2: Concatenación en lugar de suma matemática (`"20" + "10" = "2010"`)**
> - **Causa**: Todo valor extraído de un campo de texto con `input.value` es de tipo texto (*string*), incluso si en el HTML se indicó `type="number"`.
> - **Solución**: Envolver siempre la lectura en la función de conversión: `Number(input.value)`.

> [!WARNING]
> **Error común 3: La página se recarga sola al hacer clic en un botón de formulario**
> - **Causa**: Un botón dentro de una etiqueta `<form>` tiene por defecto el comportamiento de enviar y recargar la página.
> - **Solución**: Capturar el evento en la función con `e` y ejecutar `e.preventDefault();` en la primera línea.

> [!TIP]
> **Consejo didáctico**: Antes de escribir código complejo, utiliza siempre `console.log()` en cada paso para comprobar que las constantes al DOM han capturado los elementos correctos y que las variables contienen los datos esperados.
