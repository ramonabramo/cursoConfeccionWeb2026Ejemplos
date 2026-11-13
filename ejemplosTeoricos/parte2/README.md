# Módulo: De la Programación Lineal a Eventos y Formularios (Parte 2)
## El Gran Salto: De `prompt()` a la Interacción Web Real con `addEventListener()`

Bienvenido a la **Parte 2** del curso de JavaScript. En este bloque formativo se produce uno de los saltos conceptuales más importantes para cualquier estudiante: **abandonar la programación lineal clásica (bloqueante)** basada en cuadros de diálogo emergentes (`prompt`) para adoptar el modelo estándar de la web moderna: la **programación dirigida por eventos**.

Todos los ejercicios están organizados en carpetas independientes para el alumno (`ejercicio_01/` a `ejercicio_09/`) con plantillas comentadas ("sin hacer", guiadas paso a paso) y sus correspondientes soluciones en la carpeta `soluciones/`.

---

## 1. Teoría Fundamental

### 1.1. El Cambio de Paradigma: ¿Por qué abandonar `prompt()`?
En los primeros ejercicios y cursos de introducción, suele recurrirse a `prompt()` para pedir datos porque es inmediato:
```javascript
// Modelo lineal y bloqueante
let nombre = prompt("Introduce tu nombre");
alert("Hola " + nombre);
```
Sin embargo, este modelo presenta graves limitaciones en el desarrollo web real:
1. **Bloquea el hilo del navegador:** Mientras la ventana emergente de `prompt()` está abierta, la página queda completamente congelada; el usuario no puede desplazarse, pulsar botones ni interactuar.
2. **Pobre experiencia de usuario (UX):** Las ventanas modales nativas del sistema operativo no se pueden estilizar con CSS ni integrar armoniosamente en el diseño de una aplicación.
3. **No escalable:** Una aplicación web moderna cuenta con múltiples campos de entrada, botones de acción, menús desplegables y controles gráficos coexistiendo a la vez.

---

### 1.2. El Modelo Basado en Eventos (`addEventListener`)
En la web profesional, el código JavaScript **no se ejecuta de golpe de arriba hacia abajo**, sino que se queda en memoria "escuchando" las acciones que realiza el usuario en la interfaz:

```
       [Usuario hace clic en un botón]
                     │
                     ▼
          (Se dispara el evento 'click')
                     │
                     ▼
        [El navegador busca el listener]
                     │
                     ▼
      [Se ejecuta la función manejadora asociada]
                     │
                     ▼
  [Lectura de inputs -> Cálculos -> Salida en pantalla]
```

Para conectar un elemento de la página con una función JavaScript utilizamos el método fundamental:

```javascript
elementoDOM.addEventListener('evento', function() {
    // Código que se ejecutará CADA VEZ que ocurra el evento
});
```

* **`elementoDOM`**: El botón, input, enlace o contenedor capturado previamente con `document.querySelector()`.
* **`'evento'`**: Cadena con el tipo de interacción que queremos vigilar (ej. `'click'`, `'input'`, `'change'`, `'submit'`).
* **`function() { ... }`**: La función manejadora (*callback*) que contiene las instrucciones a ejecutar.

---

### 1.3. La Propiedad `.value` frente a `.textContent` / `.innerHTML`
Uno de los errores más comunes al comenzar con formularios es confundir cómo se lee y escribe la información:

| Tipo de Elemento HTML | ¿Para qué sirve? | Propiedad para Leer / Escribir |
| :--- | :--- | :---: |
| **Campos de formulario** (`<input>`, `<textarea>`, `<select>`) | Controles donde el usuario escribe o elige datos | **`.value`** |
| **Contenedores de texto** (`<div>`, `<p>`, `<span>`, `<li>`) | Elementos visuales que muestran información en la página | **`.textContent`** / **`.innerHTML`** |

> [!WARNING]
> Intentar leer un input con `input.innerHTML` o `input.textContent` devolverá una cadena vacía o valores inesperados. Para los controles de formulario se debe usar siempre **`.value`**.

---

### 1.4. Conversión de Tipos con `Number()`
Cualquier dato extraído de un campo de formulario mediante `input.value` es devuelto **siempre como texto (`string`)**, incluso si el campo en el HTML tiene el atributo `type="number"`:

```javascript
const input1 = document.querySelector('#num1'); // El usuario teclea 5
const input2 = document.querySelector('#num2'); // El usuario teclea 10

let suma = input1.value + input2.value; 
// ❌ ¡Error de concatenación! El resultado será "510" en lugar de 15

let sumaCorrecta = Number(input1.value) + Number(input2.value);
// ✔️ Correcto: 5 + 10 = 15
```

---

### 1.5. Plantilla Estándar de Trabajo en 5 Pasos
Para estructurar los ejercicios y adquirir hábitos de código limpios, seguimos el siguiente patrón:

```javascript
// 1. Constantes al DOM que queremos escuchar
const boton = document.querySelector('#miBoton');

// 2. Colocar escuchadores de eventos
boton.addEventListener('click', function () {

    // --- Estructura interna de la función ---

    // 1. Declaración de variables locales
    let edad = 0;

    // 2. Constantes a elementos del DOM (inputs y salidas)
    const inputEdad = document.querySelector('#edad');
    const nodoSalida = document.querySelector('#salida');

    // 3. Entradas: leer datos del formulario
    edad = Number(inputEdad.value);

    // 4. Procesamiento: cálculos u operaciones lógicas

    // 5. Salidas: reflejar los resultados en la interfaz
    nodoSalida.textContent = edad;
});
```

---

## 2. Tabla Resumen de los 9 Ejercicios

| Nº | Ejercicio | Concepto Clave / Novedad | Plantilla Alumno | Solución Completa |
| :---: | :--- | :--- | :---: | :---: |
| **01** | El punto de partida | Código lineal clásico: uso de `prompt()` y salida en `#salida` | [ejercicio_01/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte2/ejercicio_01/index.html) | [solución](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte2/soluciones/ejercicio_01/app.js) |
| **02** | El primer evento | Sustitución del `prompt` por `<input>` y `button.addEventListener('click')` | [ejercicio_02/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte2/ejercicio_02/index.html) | [solución](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte2/soluciones/ejercicio_02/app.js) |
| **03** | Múltiples inputs y salidas | Lectura de 3 inputs (nombre, edad, población) y volcado en elementos `<li>` | [ejercicio_03/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte2/ejercicio_03/index.html) | [solución](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte2/soluciones/ejercicio_03/app.js) |
| **04** | Calculadora básica | 2 inputs y 4 botones con escuchadores independientes (`+`, `-`, `*`, `/`) | [ejercicio_04/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte2/ejercicio_04/index.html) | [solución](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte2/soluciones/ejercicio_04/app.js) |
| **05** | Geometría: Círculo y SVG | Cálculo de área y perímetro de círculo + actualización de SVG con `setAttribute` | [ejercicio_05/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte2/ejercicio_05/index.html) | [solución](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte2/soluciones/ejercicio_05/app.js) |
| **06** | Geometría: Cuadrado | Cálculo de área y perímetro de un cuadrado a partir de su lado en un input | [ejercicio_06/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte2/ejercicio_06/index.html) | [solución](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte2/soluciones/ejercicio_06/app.js) |
| **07** | Intercambio de texto en divs | Algoritmo de intercambio de valores entre dos contenedores mediante variable auxiliar | [ejercicio_07/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte2/ejercicio_07/index.html) | [solución](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte2/soluciones/ejercicio_07/app.js) |
| **08** | Intercambio entre inputs | Intercambio dinámico de valores entre dos campos de texto (origen y destino) | [ejercicio_08/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte2/ejercicio_08/index.html) | [solución](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte2/soluciones/ejercicio_08/app.js) |
| **09** | Manipulación de estilos CSS | Cambiar colores de múltiples elementos dinámicamente con `style.backgroundColor` | [ejercicio_09/](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte2/ejercicio_09/index.html) | [solución](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte2/soluciones/ejercicio_09/app.js) |

---

## 3. Enunciados Detallados de los Ejercicios

### Ejercicio 01: El punto de partida con `prompt()`
* **Carpeta Alumno:** [`ejercicio_01/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte2/ejercicio_01/index.html)
* **Solución:** [`soluciones/ejercicio_01/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte2/soluciones/ejercicio_01/app.js)
* **Objetivo:** Mostrar cómo funcionaban los programas antes de usar eventos: ejecución directa al cargar la página.
* **Enunciado:**
  Solicitar la edad al usuario mediante la función del sistema `prompt("introduce edad")` y escribir el valor obtenido dentro del elemento con identificador `#salida` usando `textContent`.
* **Puntos clave:**
  - Código lineal sin función escuchadora.
  - El navegador se bloquea hasta que el usuario responde al prompt.

---

### Ejercicio 02: El gran cambio a `addEventListener` y formulario
* **Carpeta Alumno:** [`ejercicio_02/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte2/ejercicio_02/index.html)
* **Solución:** [`soluciones/ejercicio_02/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte2/soluciones/ejercicio_02/app.js)
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
* **Carpeta Alumno:** [`ejercicio_03/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte2/ejercicio_03/index.html)
* **Solución:** [`soluciones/ejercicio_03/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte2/soluciones/ejercicio_03/app.js)
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
* **Carpeta Alumno:** [`ejercicio_04/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte2/ejercicio_04/index.html)
* **Solución:** [`soluciones/ejercicio_04/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte2/soluciones/ejercicio_04/app.js)
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
* **Carpeta Alumno:** [`ejercicio_05/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte2/ejercicio_05/index.html)
* **Solución:** [`soluciones/ejercicio_05/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte2/soluciones/ejercicio_05/app.js)
* **Objetivo:** Conectar el cálculo matemático con la actualización de atributos de elementos gráficos SVG.
* **Enunciado:**
  El usuario introduce el radio de una circunferencia en un campo numérico `#radio`.
  Al pulsar el botón:
  1. Calcular el área del círculo: $\text{Área} = \pi \cdot r^2$ (`Math.PI * (radio ** 2)`).
  2. Calcular el perímetro: $\text{Perímetro} = 2 \cdot \pi \cdot r$ (`2 * Math.PI * radio`).
  3. Mostrar el radio, el área y el perímetro en sus correspondientes `<span>`.
  4. Actualizar visualmente el círculo SVG modificando su atributo `r` con `circulo.setAttribute('r', radio)`.
* **Puntos clave:**
  - Uso de la librería matemática `Math.PI` y el operador de potencia `**`.
  - Manipulación de atributos gráficos mediante `setAttribute()`.

---

### Ejercicio 06: Cálculos geométricos: Cuadrado
* **Carpeta Alumno:** [`ejercicio_06/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte2/ejercicio_06/index.html)
* **Solución:** [`soluciones/ejercicio_06/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte2/soluciones/ejercicio_06/app.js)
* **Objetivo:** Reforzar la lectura de campos numéricos y el cálculo geométrico con botones.
* **Enunciado:**
  Crear un formulario con un campo `#inputLado` y un botón.
  Al pulsar el botón:
  1. Leer el lado introducido por el usuario y convertirlo a número.
  2. Calcular el área del cuadrado: $\text{Área} = \text{lado} \cdot \text{lado}$.
  3. Calcular el perímetro del cuadrado: $\text{Perímetro} = 4 \cdot \text{lado}$.
  4. Mostrar el lado, el área y el perímetro en los `<span>` de salida.
  5. Ajustar el ancho y alto del rectángulo SVG con `setAttribute('width', lado)` y `setAttribute('height', lado)`.

---

### Ejercicio 07: Algoritmo de intercambio en contenedores `<div>`
* **Carpeta Alumno:** [`ejercicio_07/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte2/ejercicio_07/index.html)
* **Solución:** [`soluciones/ejercicio_07/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte2/soluciones/ejercicio_07/app.js)
* **Objetivo:** Aprender el algoritmo clásico de intercambio de variables (*swap*) aplicado a elementos del DOM.
* **Enunciado:**
  Disponer de dos bloques en paralelo: `#origen` (con texto "Madrid") y `#destino` (con texto "Barcelona"), y un botón `#boton` ("Intercambiar Ciudades").
  Al pulsar el botón:
  1. Intercambiar el texto de ambos bloques (el que tenía "Madrid" pasa a tener "Barcelona" y viceversa).
* **Puntos clave:**
  - Uso de variables locales temporales para capturar ambos textos antes de reasignarlos.

---

### Ejercicio 08: Algoritmo de intercambio entre campos `<input>`
* **Carpeta Alumno:** [`ejercicio_08/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte2/ejercicio_08/index.html)
* **Solución:** [`soluciones/ejercicio_08/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte2/soluciones/ejercicio_08/app.js)
* **Objetivo:** Aplicar el intercambio de valores entre campos de formulario modificando la propiedad `.value`.
* **Enunciado:**
  Formulario de selección de trayecto con dos campos de texto: `#origen` (ciudad de salida) y `#destino` (ciudad de llegada), junto con un botón `#boton` ("Invertir Trayecto").
  Al pulsar el botón:
  1. Leer los valores de ambos inputs usando `.value`.
  2. Asignar el valor de destino en el campo de origen y el de origen en el de destino.
* **Puntos clave:**
  - Manipulación de la propiedad `.value` para reasignar dinámicamente contenidos de inputs.

---

### Ejercicio 09: Manipulación de estilos CSS desde JavaScript
* **Carpeta Alumno:** [`ejercicio_09/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte2/ejercicio_09/index.html)
* **Solución:** [`soluciones/ejercicio_09/`](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte2/soluciones/ejercicio_09/app.js)
* **Objetivo:** Modificar estilos visuales CSS en tiempo real respondiendo a eventos de clic.
* **Enunciado:**
  Se muestran tres círculos gráficos (`#circulo1`, `#circulo2`, `#circulo3`) y tres botones con estilos Bootstrap: "Rojo" (`#botonRojo`), "Verde" (`#botonVerde`) y "Azul" (`#botonAzul`).
  Al hacer clic en cualquiera de los botones:
  1. Cambiar simultáneamente el color de fondo de los 3 círculos al color correspondiente ("red", "green" o "blue") utilizando la propiedad `elemento.style.backgroundColor`.
* **Puntos clave:**
  - Tres escuchadores de eventos independientes.
  - Modificación de propiedades CSS en línea mediante el objeto `style`.
