# Parte 8: Funciones en JavaScript — De los Fundamentos al Ámbito Avanzado

Bienvenido a la **Parte 8** del curso de JavaScript. En este bloque abordaremos en profundidad uno de los pilares más importantes de la programación web moderna: **las funciones**.

El temario sigue una progresión completa desde los fundamentos sintácticos hasta el manejo avanzado de la memoria, las clausuras y la programación funcional. Primero se desarrolla el **esquema técnico riguroso** basado en la especificación oficial **ECMAScript (ECMA-262)** y **MDN Web Docs**, y a continuación encontrarás la **traducción al "idioma terrenal"** con metáforas y humor para el aula.

---

## Parte 1: Esquema Técnico Oficial (ECMAScript / MDN)

### Módulo 1: Fundamentos y Anatomía de una Función

#### 1. Definición formal (`Function Declaration`)
* **Concepto (MDN):** Un subprograma u "objeto ejecutable" (*callable object*) de tipo `Function`.
* **Partes:** Palabra reservada `function`, identificador (nombre), lista de parámetros entre paréntesis `()` y cuerpo de la función delimitado por llaves `{}` (bloque de sentencias).
* **Declaración vs. Invocación:** Diferencia entre registrar el identificador en memoria y ejecutar el código mediante el operador de agrupación/invocación `()`.

#### 2. Flujo de Entrada: Parámetros vs. Argumentos
* **Parámetros (*Formal Parameters*):** Variables locales listadas en la definición de la función. Se inicializan como `undefined` si no reciben valor al ser llamadas.
* **Argumentos (*Actual Arguments*):** Valores reales (primitivos o referencias a objetos) pasados a la función en el momento de su invocación.
* **Parámetros por defecto (*Default parameters* - ES6):** Inicialización de parámetros con valores predeterminados (`function(a = 1)`) que se activan **únicamente** si el argumento pasado es `undefined` (o se omite).
* **Parámetros Rest (`...rest` - ES6):** Sintaxis que permite representar un número indefinido de argumentos como un objeto `Array` real (sustituyendo al antiguo objeto *array-like* `arguments`).

#### 3. Flujo de Salida: La sentencia `return`
* **Retorno explícito vs. implícito:** La sentencia `return [expresión]` detiene inmediatamente la ejecución de la función y devuelve el valor al contexto desde donde se llamó. Si se omite el `return` (o va vacío), el motor devuelve implícitamente `undefined`.
* **Interrupción del flujo (*Early Return*):** Todo código situado debajo de un `return` dentro del mismo bloque es código inalcanzable (*unreachable code*).

```javascript
// Anatomía completa Módulo 1
function calcularFactura(cliente = "Anónimo", ...precios) {
    if (precios.length === 0) return 0; // Early return
    let total = 0;
    for (const p of precios) total += p;
    return `Cliente: ${cliente} - Total: ${total}€`;
}
const resultado = calcularFactura("Ana", 10, 20, 30);
```

---

### Módulo 2: Ámbito (*Scope*), Pila de Ejecución y *Hoisting*

#### 1. Ámbito Léxico (*Lexical Scope*) y Ámbito de Función
* Las variables declaradas dentro de una función no son accesibles desde el exterior. Una función puede acceder a las variables de su ámbito padre (ámbito global o función contenedora), pero nunca a la inversa.
* **Ocultación de variables (*Variable Shadowing*):** Ocurre cuando un parámetro o variable local tiene exactamente el mismo nombre que una variable externa, ocultándola dentro de ese bloque específico sin mutarla.

#### 2. La Pila de Llamadas (*Call Stack*)
* Estructura **LIFO** (*Last In, First Out*) donde el motor de JS apila los contextos de ejecución (*Execution Contexts*) cada vez que se invoca una función y los desapila ordenadamente cuando la función finaliza y hace `return`.

---

### Módulo 3: Tipología de Funciones y Sintaxis Moderna

#### 1. Ciudadanos de Primera Clase (*First-Class Citizens*)
* En JavaScript, las funciones son tratadas como cualquier otro valor: se pueden almacenar en variables, meter en arrays, usar como propiedades de objetos (métodos), pasar como argumentos a otras funciones y devolver desde otras funciones.

#### 2. Funciones Anónimas y Expresiones de Función (*Function Expressions*)
* **Funciones Anónimas:** Funciones declaradas sin identificador de nombre (`function() {}`).
* **Expresión de función:** Asignación de una función (normalmente anónima) a una variable o constante (`const fn = function() {};`).

#### 3. Diferencia crítica: *Hoisting* (Elevación)
* Las **Funciones Declaradas** se elevan íntegramente al inicio de su ámbito en la fase de creación de memoria (se pueden invocar antes de su línea física de declaración).
* Las **Expresiones de Función** asignadas con `let` o `const` están sujetas a la *Temporal Dead Zone (TDZ)* y lanzan un `ReferenceError` si se intentan invocar antes de su línea de inicialización.

#### 4. Funciones Flecha (*Arrow Functions* - ES6)
* Sintaxis compacta para expresiones de función: `(param1, param2) => { sentencias }`.
* **Reglas de simplificación:** Omisión de paréntesis cuando hay un único parámetro simple; **retorno implícito** al omitir las llaves `{}`.
* **Retorno de objetos:** Para devolver un objeto literal de forma implícita, se debe envolver entre paréntesis `({})`: `(a, b) => ({ suma: a + b })`.
* **Limitaciones técnicas (MDN):** No tienen su propio enlace a `this`, `arguments` o `super`, y no pueden ser utilizadas como constructores con el operador `new`.

#### 5. IIFE (*Immediately Invoked Function Expression*)
* Funciones que se ejecutan tan pronto como se definen: `(function() { ... })();`. Útiles para crear ámbitos aislados al instante y no contaminar el objeto global `window`.

| Característica | Declaración (`function f(){}`) | Expresión (`const f = function(){}`) | Flecha (`const f = () => {}`) |
| :--- | :---: | :---: | :---: |
| **Hoisting (Llamar antes de crear)** | ✅ Sí (Elevación completa) | ❌ No (Error por TDZ) | ❌ No (Error por TDZ) |
| **Nombre propio** | Obligatorio | Opcional (Suele ser anónima) | Siempre anónima (asignada a variable) |
| **Retorno implícito (sin `return`)** | ❌ No | ❌ No | ✅ Sí (si se omiten llaves `{}`) |
| **Contexto `this` propio** | ✅ Sí (Dinámico) | ✅ Sí (Dinámico) | ❌ No (Hereda el `this` léxico padre) |

---

### Módulo 4: Funciones de Orden Superior y *Callbacks*

#### 1. Funciones de Orden Superior (*Higher-Order Functions* - HOF)
* Cualquier función que cumple al menos una de estas condiciones:
  1. Recibe una o más funciones como argumento.
  2. Devuelve una función como resultado.

#### 2. Funciones *Callback* (Retrollamadas)
* **Definición (MDN):** Una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función receptora para completar una acción.
* **Callbacks Síncronos:** Se ejecutan inmediatamente dentro del flujo del hilo principal (ej. métodos de arrays como `.forEach()`, `.map()`, `.filter()`).
* **Callbacks Asíncronos:** Se delegan a las Web APIs del navegador y se ejecutan en el futuro cuando ocurre un evento o vence un temporizador (ej. `setTimeout`, `addEventListener`).

```javascript
// HOF y Callback en acción
function procesarUsuario(nombre, callbackFormateo) {
    const nombreLimpio = nombre.trim();
    return callbackFormateo(nombreLimpio); // Invocamos el callback que nos pasaron
}

// Pasamos una función anónima flecha como callback
const saludo = procesarUsuario("  Carlos  ", (n) => `¡Hola, ${n.toUpperCase()}!`);
```

---

### Módulo 5: Conceptos Avanzados (Clausuras, Recursividad y Pureza)

#### 1. Clausuras (*Closures*)
* **Definición oficial (MDN):** La combinación de una función agrupada (*bundled*) con referencias a su estado adyacente (el **entorno léxico**). En otras palabras, una clausura da acceso al ámbito de una función externa desde una función interna, **incluso después de que la función externa haya terminado de ejecutarse** y haya salido de la pila de llamadas (*Call Stack*).
* **Casos de uso reales:** Encapsulación de datos (variables privadas) y factorías de funciones.

#### 2. Recursividad (*Recursion*)
* Una función que se invoca a sí misma hasta alcanzar una **condición de salida o caso base** (*base case*). Si falta el caso base, provoca el error `RangeError: Maximum call stack size exceeded` (*Stack Overflow*).

#### 3. Funciones Puras vs. Impuras (Programación Funcional)
* **Función Pura:** Dados los mismos argumentos, devuelve siempre el mismo resultado (determinista) y no produce efectos secundarios (*side effects*: no muta variables globales, no toca el DOM ni hace llamadas de red).

```javascript
// Ejemplo clásico de Closure (Mochila de memoria privada)
function crearContador() {
    let cuenta = 0; // Variable privada protegida en el entorno léxico
    return function incrementar() {
        cuenta++;
        return cuenta;
    };
}
const miContador = crearContador(); // crearContador() ya terminó y murió...
console.log(miContador()); // 1 (...¡pero su hija sigue recordando 'cuenta'!)
console.log(miContador()); // 2
```

---

## Parte 2: La Traducción al "Idioma Terrenal" (con humor para el aula)

Aquí tienes la artillería de metáforas para explicar los conceptos nuevos sin que ningún alumno salte por la ventana:

* **1. Parámetros *Rest* (`...precios`) — *El saco sin fondo de Papá Noel:***
  * *En clase:* Imagina que tienes una función `hacerBocadillo(ingrediente1, ingrediente2)`. ¿Qué pasa si llega un cliente con hambre voraz y te pide 14 ingredientes? ¿Creas 14 parámetros por si acaso? No. Pones tres puntitos delante del último parámetro (`...ingredientes`) y eso se convierte en una bolsa de basura industrial donde caben todos los argumentos sobrantes que el usuario quiera lanzar, bien ordenaditos dentro de un Array.

* **2. Funciones Anónimas y Expresiones — *El sicario sin nombre y el mote:***
  * *En clase:* Una función tradicional tiene DNI con nombre y apellidos (`function calcularImpuestos()`). Una **función anónima** es un trabajador encapuchado sin DNI (`function() {}`). Como no tiene nombre, si la sueltas sola en el código se pierde porque no tienes forma de llamarla. ¿Qué hacemos en las **Expresiones de Función**? La metemos dentro de una caja con etiqueta (una constante: `const elCalculador = function() {}`). La función sigue siendo anónima en su interior, pero ahora la llamamos por el mote de la caja.

* **3. El *Hoisting* (Declaradas vs. Expresadas) — *El enchufado VIP vs. el becario:***
  * *En clase:* Las **Funciones Declaradas** (`function f()`) tienen enchufe con el director del banco (el motor de JS). Antes de que se ejecute la primera línea de tu archivo, JavaScript lee todo el documento, busca a las funciones declaradas y las sube en ascensor VIP a la primera línea. Por eso puedes llamarlas en la línea 1 aunque las hayas escrito en la línea 500. En cambio, las **Funciones Expresadas** (`const f = () => {}`) van atadas a una constante `const`. Y `const` es un guardia de seguridad implacable: si intentas llamar a la función una línea antes de donde está escrita, te suelta un porrazo en forma de `ReferenceError` y te dice: *"Todavía no ha fichado, vuelve luego"*.

* **4. Las *IIFE* (`(function(){})()`) — *El mensaje del Inspector Gadget:***
  * *En clase:* Son funciones kamikazes. Nacen, hacen su trabajo en ese preciso milisegundo y se autodestruyen sin dejar rastro ni nombres en la memoria global. Es literalmente el mensaje de *"Este código se autodestruirá en 5 segundos"*. Se envuelven entre paréntesis como si las metieras en una burbuja aislante para que no ensucien el resto de tu programa.

* **5. Las Clausuras (*Closures*) — *El hijo que se va de casa pero se lleva la llave de la despensa:***
  * *En clase:* Este es el concepto con el que los programadores intentan parecer intelectuales en las entrevistas de trabajo, pero en realidad es muy simple. Sabemos que cuando una función termina, muere y el recolector de basura destruye todas sus variables locales, ¿verdad? **Pues mentira si hay un *Closure***.
  * Si una función Madre crea una variable `dineroEnElColchon = 1000` y dentro de ella nace una función Hija que usa ese dinero, cuando la Madre devuelve a la Hija al mundo exterior y la Madre "muere", la Hija no es tonta: antes de salir por la puerta **se cuelga una mochila invisible a la espalda** (el *Closure*) con la variable `dineroEnElColchon` dentro. La Madre ya es historia, nadie desde fuera puede tocar ese colchón, pero cada vez que llames a la Hija, ella abrirá su mochila secreta y seguirá metiendo o sacando billetes de ahí. Acabas de inventar las variables privadas en JavaScript.

* **6. La Recursividad — *La película "Origen" (Inception) o las muñecas rusas:***
  * *En clase:* Es una función que, para resolver un problema, se llama a sí misma dentro de su propio cuerpo. Es como mirarte en el espejo del ascensor cuando hay otro espejo detrás: te ves repetido hasta el infinito. **Regla de oro de supervivencia:** toda función recursiva necesita un **Caso Base** (un freno de emergencia que diga `if (llegamosAlFinal) return`). Si te olvidas del freno de emergencia, la función se llamará a sí misma miles de veces en un segundo hasta reventar la memoria del navegador, provocando el famoso error **Stack Overflow** (que no es solo la web donde copiamos código, sino literalmente que la pila de platos de la cocina ha llegado al techo y se ha derrumbado).

* **7. Funciones Puras vs. Impuras — *El cirujano aséptico vs. el cuñado en la cocina:***
  * *En clase:* Una **Función Pura** es un cirujano suizo: le pasas dos tomates, te devuelve una ensalada perfecta, no mancha la encimera, no toca nada que no le hayas pasado por parámetro y, si mañana le pasas los mismos dos tomates, te devuelve exactamente la misma ensalada. Una **Función Impura** es tu cuñado haciendo una paella el domingo: no le pasas ingredientes porque él abre tu nevera por su cuenta (modifica variables globales), te cambia los muebles de sitio (modifica el DOM), depende de qué hora sea para echar más o menos sal y, cuando termina, todo el programa huele a humo (*Efectos Secundarios*).

---

## Parte 3: Mapa de Ruta de la Unidad (7 Pares de Aprendizaje)

Siguiendo la metodología de aprendizaje por pares, cada bloque temático consta de un **ejemplo teórico guiado** y una **práctica del alumno** para afianzar el concepto:

| Par | Nº | Ejercicio | Tipo | Concepto Clave | Carpeta Alumno | Carpeta Solución |
| :---: | :---: | :--- | :---: | :--- | :---: | :---: |
| **1** | **01** | Anatomía, Default Params y Early Return | 📘 Teoría Guiada | `function`, parámetros por defecto (`a = def`) e interrupción con Early Return | [`ejercicio_01/`](./ejercicio_01/) | [`soluciones/ejercicio_01/`](./soluciones/ejercicio_01/) |
| **1** | **02** | Calculadora de Gastos con Rest (`...rest`) | 🛠️ Práctica Alumno | Parámetros Rest (`...gastos`) como Array real y validación de entrada | [`ejercicio_02/`](./ejercicio_02/) | [`soluciones/ejercicio_02/`](./soluciones/ejercicio_02/) |
| **2** | **03** | Scope, Shadowing y Call Stack | 📘 Teoría Guiada | Ámbito léxico, ocultación de variables y traza de la pila LIFO | [`ejercicio_03/`](./ejercicio_03/) | [`soluciones/ejercicio_03/`](./soluciones/ejercicio_03/) |
| **2** | **04** | Scope Chain y Shadowing Práctico | 🛠️ Práctica Alumno | Protección de variables locales frente al ámbito global | [`ejercicio_04/`](./ejercicio_04/) | [`soluciones/ejercicio_04/`](./soluciones/ejercicio_04/) |
| **3** | **05** | Declarada vs Expresada y Hoisting | 📘 Teoría Guiada | Ascensor VIP de funciones declaradas vs TDZ en expresiones con `const` | [`ejercicio_05/`](./ejercicio_05/) | [`soluciones/ejercicio_05/`](./soluciones/ejercicio_05/) |
| **3** | **06** | Arrow Functions y Retorno Implícito | 🛠️ Práctica Alumno | Sintaxis flecha `() =>`, retorno implícito sin llaves y objetos con `({})` | [`ejercicio_06/`](./ejercicio_06/) | [`soluciones/ejercicio_06/`](./soluciones/ejercicio_06/) |
| **4** | **07** | IIFE y Aislamiento de Memoria | 📘 Teoría Guiada | `(function(){})()`: autoejecución, encapsulación y protección de `window` | [`ejercicio_07/`](./ejercicio_07/) | [`soluciones/ejercicio_07/`](./soluciones/ejercicio_07/) |
| **4** | **08** | Módulo Autónomo con IIFE | 🛠️ Práctica Alumno | Componente interactivo aislado con estado privado mediante IIFE | [`ejercicio_08/`](./ejercicio_08/) | [`soluciones/ejercicio_08/`](./soluciones/ejercicio_08/) |
| **5** | **09** | Funciones de Orden Superior (HOF) | 📘 Teoría Guiada | Funciones que reciben callbacks para delegar lógica de transformación | [`ejercicio_09/`](./ejercicio_09/) | [`soluciones/ejercicio_09/`](./soluciones/ejercicio_09/) |
| **5** | **10** | Filtro Personalizado con Callbacks | 🛠️ Práctica Alumno | Creación de una HOF tipo `filter` manual con callback predicado booleano | [`ejercicio_10/`](./ejercicio_10/) | [`soluciones/ejercicio_10/`](./soluciones/ejercicio_10/) |
| **6** | **11** | Closures y Estado Privado | 📘 Teoría Guiada | La mochila secreta: retención del entorno léxico y contadores independientes | [`ejercicio_11/`](./ejercicio_11/) | [`soluciones/ejercicio_11/`](./soluciones/ejercicio_11/) |
| **6** | **12** | Factoría de Monedero con Closure | 🛠️ Práctica Alumno | API pública con métodos (`ingresar`, `gastar`) que protegen el saldo privado | [`ejercicio_12/`](./ejercicio_12/) | [`soluciones/ejercicio_12/`](./soluciones/ejercicio_12/) |
| **7** | **13** | Recursividad y Caso Base | 📘 Teoría Guiada | Funciones autoinvocadas, condición de parada y prevención de Stack Overflow | [`ejercicio_13/`](./ejercicio_13/) | [`soluciones/ejercicio_13/`](./soluciones/ejercicio_13/) |
| **7** | **14** | Funciones Puras vs Impuras | 🛠️ Práctica Alumno | Separación de cálculo puro (determinista) y efectos secundarios de interfaz | [`ejercicio_14/`](./ejercicio_14/) | [`soluciones/ejercicio_14/`](./soluciones/ejercicio_14/) |

---

## Parte 4: Enunciados Detallados de los Ejercicios

### Ejercicio 01 (Teoría Guiada): Anatomía de una Función, Parámetros por Defecto y Early Return
* **Archivos:** [`ejercicio_01/app.js`](./ejercicio_01/app.js) | [Solución](soluciones/ejercicio_01/app.js)
* **Objetivo:** Comprender la declaración formal con `function`, los parámetros por defecto (ES6) y el patrón Early Return.
* **Enunciado:**
  Implementa una función `calcularFactura(cliente = "Anónimo", total = 0, descuento = 0)`:
  1. Si `total <= 0`, interrumpe inmediatamente con `return` y un mensaje de error (*Early Return*).
  2. Si los datos son válidos, calcula el descuento y devuelve un string con el desglose.
  3. Prueba invocar pasando datos completos y omitiendo argumentos para activar los valores por defecto.

---

### Ejercicio 02 (Práctica del Alumno): Calculadora de Gastos con Parámetros Rest (`...gastos`)
* **Archivos:** [`ejercicio_02/app.js`](./ejercicio_02/app.js) | [Solución](soluciones/ejercicio_02/app.js)
* **Objetivo:** Recibir un número indefinido de argumentos empaquetados en un Array real mediante la sintaxis Rest (`...gastos`).
* **Enunciado:**
  Crea la función `calcularPresupuesto(categoria = "General", ...gastos)`:
  1. Si `gastos.length === 0`, devuelve un aviso mediante Early Return.
  2. Suma todos los importes del array `gastos` y calcula la media por partida.
  3. Desde la interfaz, lee una lista de precios separados por comas, conviértelos a números y pásalos con el operador spread (`...array`).

---

### Ejercicio 03 (Teoría Guiada): Ámbito Léxico (Scope), Ocultación (Shadowing) y Call Stack
* **Archivos:** [`ejercicio_03/app.js`](./ejercicio_03/app.js) | [Solución](soluciones/ejercicio_03/app.js)
* **Objetivo:** Visualizar el apilamiento y desapilamiento en la pila de llamadas (*Call Stack*) y la protección del ámbito léxico.
* **Enunciado:**
  Demuestra la cadena de llamadas `paso1_A()` -> `paso2_B()` -> `paso3_C()`:
  1. Observa cómo cada llamada apila un contexto de ejecución en la pila.
  2. Al llegar a la cima, `paso3_C` retorna y la pila se desapila en orden LIFO.
  3. Visualiza la animación y la traza resultante en la interfaz gráfica.

---

### Ejercicio 04 (Práctica del Alumno): Scope Chain y Variable Shadowing
* **Archivos:** [`ejercicio_04/app.js`](./ejercicio_04/app.js) | [Solución](soluciones/ejercicio_04/app.js)
* **Objetivo:** Proteger el estado local de una función frente a variables globales con el mismo identificador.
* **Enunciado:**
  Dada una constante global `configApp = { tema: 'Claro', modo: 'Producción' }`:
  1. En `#btnConsultarGlobal`, muestra la configuración global intacta.
  2. En `#btnEjecutarLocal`, crea una función con una constante local del mismo nombre (`configApp`) que oculta la global temporalmente (*Shadowing*).
  3. Demuestra que al salir de la función, la variable global no ha sufrido mutación alguna.

---

### Ejercicio 05 (Teoría Guiada): Declaración vs Expresión y el Efecto Hoisting
* **Archivos:** [`ejercicio_05/app.js`](./ejercicio_05/app.js) | [Solución](soluciones/ejercicio_05/app.js)
* **Objetivo:** Contrastar la elevación completa (*Hoisting*) de funciones declaradas frente a la *Temporal Dead Zone (TDZ)* de expresiones con `const`.
* **Enunciado:**
  1. Invoca `funcionConHoisting()` antes de su línea de definición para comprobar el "enchufe VIP".
  2. Define una expresión de función `const expresionSinHoisting = function() {}` y demuestra que solo puede ser llamada después de su inicialización.

---

### Ejercicio 06 (Práctica del Alumno): Refactorización a Funciones Flecha (Arrow Functions)
* **Archivos:** [`ejercicio_06/app.js`](./ejercicio_06/app.js) | [Solución](soluciones/ejercicio_06/app.js)
* **Objetivo:** Dominar la sintaxis de funciones flecha y el retorno implícito de valores primitivos y objetos.
* **Enunciado:**
  Implementa 3 funciones flecha:
  1. `aMayusculas`: Recibe 1 parámetro sin paréntesis y retorna el texto en mayúsculas de forma implícita.
  2. `calcularIva`: Calcula el precio con IVA (21%) con retorno implícito.
  3. `crearFicha`: Recibe `(nombre, precio)` y devuelve un objeto literal de forma implícita envolviéndolo entre paréntesis `({})`.

---

### Ejercicio 07 (Teoría Guiada): IIFE y Aislamiento de Memoria
* **Archivos:** [`ejercicio_07/app.js`](./ejercicio_07/app.js) | [Solución](soluciones/ejercicio_07/app.js)
* **Objetivo:** Utilizar una función autoejecutable `(function() { ... })();` para aislar código y prevenir fugas de variables en `window`.
* **Enunciado:**
  1. Ejecuta una IIFE que genere un token interno confidencial al cargar el script.
  2. Al pulsar `#btnComprobarGlobales`, verifica que `window.claveSecreta` no existe en la memoria global del navegador.

---

### Ejercicio 08 (Práctica del Alumno): Módulo Autónomo Encapsulado con IIFE
* **Archivos:** [`ejercicio_08/app.js`](./ejercicio_08/app.js) | [Solución](soluciones/ejercicio_08/app.js)
* **Objetivo:** Encapsular un componente interactivo completo dentro de una IIFE.
* **Enunciado:**
  Crea un contador con botones de incrementar, decrementar y resetear:
  1. Toda la lógica y la variable de estado `let cuenta = 0;` deben residir dentro de una IIFE: `(() => { ... })();`.
  2. Verifica que desde la consola del navegador no se puede manipular `cuenta`.

---

### Ejercicio 09 (Teoría Guiada): Funciones de Orden Superior (HOF) y Callbacks
* **Archivos:** [`ejercicio_09/app.js`](./ejercicio_09/app.js) | [Solución](soluciones/ejercicio_09/app.js)
* **Objetivo:** Aprender a crear funciones que delegan tareas de transformación recibiendo un callback.
* **Enunciado:**
  Crea la HOF `transformarTexto(cadena, callbackTransformador)`:
  1. Limpia los espacios y ejecuta `callbackTransformador(textoLimpio)`.
  2. Pasa diferentes callbacks: uno a mayúsculas, otro para generar un slug con guiones y otro para invertir el texto.

---

### Ejercicio 10 (Práctica del Alumno): Sistema de Filtrado Personalizado con Callbacks
* **Archivos:** [`ejercicio_10/app.js`](./ejercicio_10/app.js) | [Solución](soluciones/ejercicio_10/app.js)
* **Objetivo:** Desarrollar un motor de filtrado genérico equivalente a `.filter()` mediante una HOF.
* **Enunciado:**
  Dado un catálogo de productos:
  1. Implementa `filtrar(array, callbackCriterio)` que recorre los elementos y añade a un array resultante aquellos donde `callbackCriterio(item) === true`.
  2. Conecta botones pasando callbacks flecha: baratos (`p => p.precio <= 30`), caros (`p => p.precio > 100`) y nombres con 'C'.

---

### Ejercicio 11 (Teoría Guiada): Clausuras (Closures) y Variables Privadas
* **Archivos:** [`ejercicio_11/app.js`](./ejercicio_11/app.js) | [Solución](soluciones/ejercicio_11/app.js)
* **Objetivo:** Comprender cómo una función retiene acceso a su entorno léxico original (la "mochila secreta").
* **Enunciado:**
  Crea la factoría `crearContador(nombre)`:
  1. Almacena `let cuenta = 0;` en su ámbito local y retorna una función interna que la incrementa.
  2. Instancia `contadorA` y `contadorB`.
  3. Demuestra que cada contador gestiona su propia memoria privada sin colisionar entre sí.

---

### Ejercicio 12 (Práctica del Alumno): Factoría de Monedero con Closure
* **Archivos:** [`ejercicio_12/app.js`](./ejercicio_12/app.js) | [Solución](soluciones/ejercicio_12/app.js)
* **Objetivo:** Construir una API pública orientada a objetos con estado privado mediante closures.
* **Enunciado:**
  Implementa `crearMonedero(saldoInicial = 0)`:
  1. Encapsula `let saldo = saldoInicial;` como variable privada.
  2. Retorna un objeto con métodos: `ingresar(cant)`, `gastar(cant)` y `obtenerSaldo()`.
  3. Valida en `gastar` que no se gaste más del saldo disponible y conecta los botones con la interfaz.

---

### Ejercicio 13 (Teoría Guiada): Recursividad y Caso Base (Inception / Muñecas Rusas)
* **Archivos:** [`ejercicio_13/app.js`](./ejercicio_13/app.js) | [Solución](soluciones/ejercicio_13/app.js)
* **Objetivo:** Comprender la estructura de las funciones recursivas, la necesidad del caso base y el desapilamiento de resultados.
* **Enunciado:**
  1. Implementa el cálculo de factorial: `factorial(n) = n <= 1 ? 1 : n * factorial(n - 1);`.
  2. Implementa una cuenta regresiva recursiva concatenando texto hasta llegar al caso base `n <= 0`.
  3. Analiza cómo cada llamada espera a la siguiente en la pila hasta que el freno de emergencia resuelve la cadena.

---

### Ejercicio 14 (Práctica del Alumno): Funciones Puras vs Impuras (El Cirujano vs El Cuñado)
* **Archivos:** [`ejercicio_14/app.js`](./ejercicio_14/app.js) | [Solución](soluciones/ejercicio_14/app.js)
* **Objetivo:** Separar la lógica matemática pura (determinista, sin efectos secundarios) de la capa de interfaz gráfica impura.
* **Enunciado:**
  Calculadora de liquidación de nóminas:
  1. **Función PURA:** `calcularLiquidacionNomina(bruto, irpf, bonus)`. Solo realiza operaciones aritméticas y devuelve un nuevo objeto con el desglose. No toca `document` ni variables globales.
  2. **Función IMPURA:** Manejador de evento que lee los inputs del DOM, llama a la función pura y renderiza el resultado en pantalla.
