# Parte 7: Estructuras de Repetición y Bucles en JavaScript (`for`, `while`, `for...of`, `for...in` y `forEach`)

Bienvenido a la **Parte 7** del curso de JavaScript. En este bloque analizaremos en profundidad todas las **estructuras de control de bucles y repetición** que ofrece el lenguaje.

Aprenderás a dominar las diferencias conceptuales, de sintaxis y de rendimiento entre:
- **`for` clásico**: Control manual de contador numérico, condición e incremento.
- **`while`**: Repetición basada en condiciones externas y salidas tempranas con `break`.
- **`for...of` (ES6)**: Iteración directa de valores en estructuras iterables (Arrays, NodeLists, Strings).
- **`for...in`**: Inspección de claves y propiedades enumerables en **Objetos literales** (y por qué no usarlo en arrays).
- **`forEach()`**: Recorrido funcional y declarativo integrado en colecciones.

> [!IMPORTANT]
> **Metodología de Aprendizaje por Pares:**
> Esta unidad está diseñada en **6 bloques temáticos emparejados**:
> 1. Un **ejemplo guiado de teoría** donde se desglosa el funcionamiento paso a paso con código comentado y explicativo.
> 2. Un **ejercicio práctico similar** para que el alumno repita, aplique y afiance los conceptos aprendidos por sí mismo.

---

## 1. Teoría Exhaustiva de Bucles en JavaScript

### 1.1. Bucle `for` clásico: El control estricto del contador

El bucle `for` tradicional es la estructura de repetición más versátil y compartida con lenguajes como C, Java o C++. Consta de **tres expresiones** separadas por punto y coma dentro de sus paréntesis:

```javascript
for (inicialización; condición; incremento) {
    // Código que se ejecuta en cada iteración
}
```

```javascript
const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

// 1. Recorrido normal ascendente (de 0 a length - 1)
for (let i = 0; i < dias.length; i++) {
    console.log(`Día ${i + 1}: ${dias[i]}`);
}

// 2. Recorrido inverso hacia atrás (desde el final hasta 0)
for (let i = dias.length - 1; i >= 0; i--) {
    console.log(`Día hacia atrás: ${dias[i]}`);
}

// 3. Recorrido con salto personalizado (de 2 en 2)
for (let i = 0; i < dias.length; i += 2) {
    console.log(`Posición par [${i}]: ${dias[i]}`);
}
```

**¿Cuándo usar el bucle `for` clásico?**
- Cuando necesitas conocer o manipular el índice numérico `i`.
- Cuando necesitas recorrer una colección hacia atrás o con saltos (`i += 2`, `i += 5`).
- Cuando requieres máximo rendimiento en bucles de cálculo intensivo.

---

### 1.2. Bucle `while`: Repetición basada en condiciones

El bucle `while (condición)` se ejecuta **mientras una condición booleana sea verdadera**. A diferencia del `for`, la inicialización y el incremento no forman parte de la cabecera:

```javascript
// 1. Inicialización obligatoria fuera del bucle
let i = 0;

// 2. Condición de permanencia evaluada antes de cada vuelta
while (i < array.length) {
    console.log(array[i]);

    // 3. ¡Incremento manual obligatorio dentro del bloque!
    i++;
}
```

> [!WARNING]
> **Riesgo crítico de bucle infinito:**
> Si en un bucle `while` olvidas escribir el incremento `i++`, el contador jamás cambiará, la condición siempre resultará `true` y el navegador se **bloqueará por bucle infinito**.

#### Parada anticipada con `break`:
El bucle `while` es ideal para algoritmos de **búsqueda**: avanzamos casillas y en cuanto encontramos lo que buscamos, cancelamos el bucle inmediatamente con `break` para no seguir consumiendo recursos:

```javascript
let i = 0;
while (i < productos.length) {
    if (productos[i] === 'Monitor') {
        console.log(`Encontrado en la posición ${i}`);
        break; // Detención inmediata
    }
    i++;
}
```

---

### 1.3. Bucle `for...of` (ES6): La forma más limpia para valores

Introducido en ECMAScript 2015 (ES6), `for...of` extrae **directamente el valor de cada elemento** sin necesidad de declarar contadores numéricos ni acceder por corchetes `[i]`:

```javascript
const frutas = ['Manzana', 'Pera', 'Plátano'];

// Lee directamente cada valor
for (const fruta of frutas) {
    console.log(fruta); // "Manzana", "Pera", "Plátano"
}
```

`for...of` funciona con cualquier objeto **iterable**:
1. **Arrays de datos**: `for (const elemento of array)`
2. **Cadenas de texto (`strings`)**: itera carácter por carácter (`for (const letra of palabra)`)
3. **Colecciones del DOM (`NodeList`)**: `for (const nodo of document.querySelectorAll('.tarjeta'))`

**¿Cuándo usar `for...of`?**
- Siempre que necesites recorrer una colección completa de principio a fin y **no necesites el número de índice**.
- Es más legible y limpio que el `for` clásico.
- Admite `break` y `continue` si necesitas detener o saltar iteraciones (a diferencia de `forEach`).

---

### 1.4. Bucle `for...in`: Diseñado exclusivamente para OBJETOS

El bucle `for...in` itera sobre los **nombres de propiedad (claves)** de un objeto literal:

```javascript
const usuario = {
    nombre: 'Laura',
    rol: 'Administradora',
    ciudad: 'Valencia'
};

for (const propiedad in usuario) {
    console.log(`Clave: ${propiedad}`);            // "nombre", "rol", "ciudad"
    console.log(`Valor: ${usuario[propiedad]}`);    // "Laura", "Administradora", "Valencia"
}
```

> [!CAUTION]
> **¿Por qué NUNCA debes usar `for...in` en Arrays o NodeLists?**
> 1. En un array, `for...in` devuelve los índices como **cadenas de texto** (`"0"`, `"1"`, `"2"`) en lugar de números reales, provocando errores en operaciones matemáticas (`"0" + 1 = "01"`).
> 2. No garantiza el orden numérico secuencial en todos los navegadores.
> 3. Recorre propiedades personalizadas añadidas al prototipo del Array.
> 
> **Regla de oro profesional:**
> - Usa **`for...in`** únicamente para **Objetos literales** (`{ clave: valor }`).
> - Usa **`for...of`**, **`for` clásico** o **`forEach()`** para **Arrays y NodeLists**.

---

### 1.5. Método `forEach()`: Enfoque funcional y declarativo

`forEach()` es un método de orden superior integrado en los prototipos de `Array` y de `NodeList`. Le entregamos una función que el navegador ejecuta automáticamente por cada casilla:

```javascript
const lenguajes = ['JavaScript', 'Python', 'Rust'];

lenguajes.forEach(function (elemento, indice, arrayOriginal) {
    console.log(`Índice ${indice}: ${elemento} (Total en lista: ${arrayOriginal.length})`);
});
```

**Ventajas de `forEach()`:**
- Código altamente declarativo y legible.
- Imposible caer en bucles infinitos o desbordar la longitud del array.
- Proporciona tanto el **valor** como el **índice** sin necesidad de contadores manuales.
- Ideal para registrar eventos sobre el DOM: `nodos.forEach(nodo => nodo.addEventListener(...))`.

---

### 1.6. Tabla Comparativa Definitiva de Bucles

| Estructura | Diseñado para | ¿A qué accede directamente? | ¿Requiere contador manual? | ¿Soporta `break`? | Caso de uso típico |
| :--- | :--- | :--- | :---: | :---: | :--- |
| **`for` clásico** | Arrays, NodeLists, Contadores | Índice numérico (`i`) | ✅ Sí (`let i = 0`) | ✅ Sí | Recorridos inversos, saltos de paso (`i += 2`), control de índice. |
| **`while`** | Búsquedas, condiciones externas | Condición booleana | ✅ Sí (fuera del bucle) | ✅ Sí | Búsquedas lineales con detención temprana (`break`), polling. |
| **`for...of`** | Arrays, Strings, NodeLists | **Valor del elemento** | ❌ No | ✅ Sí | Recorrido limpio y directo de elementos de colecciones sin usar índices. |
| **`for...in`** | **Objetos literales** | **Nombre de clave/propiedad** | ❌ No | ✅ Sí | Inspeccionar propiedades de un objeto `{ clave: valor }`. |
| **`forEach()`** | Arrays y NodeLists | **Valor + Índice + Array** | ❌ No | ❌ No | Manipulación del DOM, asignación masiva de escuchadores, formateo. |

---

## 2. Mapa de Ruta de la Unidad (6 Pares de Aprendizaje)

| Par | Nº | Ejercicio | Tipo | Concepto Clave | Carpeta Alumno | Carpeta Solución |
| :---: | :---: | :--- | :---: | :--- | :---: | :---: |
| **1** | **01** | `for` clásico con Array numérico | 📘 Teoría Guiada | Contador `i`, condición `i < length`, incremento `i++`, recorrido inverso y saltos | [`ejercicio_01/`](./ejercicio_01/) | [`soluciones/ejercicio_01/`](./soluciones/ejercicio_01/) |
| **1** | **02** | `for` clásico sobre NodeList (Cebra) | 🛠️ Práctica Alumno | Recorrer elementos del DOM, alternar clases par/impar (`i % 2 === 0`) | [`ejercicio_02/`](./ejercicio_02/) | [`soluciones/ejercicio_02/`](./soluciones/ejercicio_02/) |
| **2** | **03** | `while` secuencial en cola | 📘 Teoría Guiada | Inicialización externa, condición de permanencia y prevención de bucles infinitos | [`ejercicio_03/`](./ejercicio_03/) | [`soluciones/ejercicio_03/`](./soluciones/ejercicio_03/) |
| **2** | **04** | `while` con búsqueda y `break` | 🛠️ Práctica Alumno | Búsqueda lineal en almacén, detección de coincidencia y detención con `break` | [`ejercicio_04/`](./ejercicio_04/) | [`soluciones/ejercicio_04/`](./soluciones/ejercicio_04/) |
| **3** | **05** | `for...of` en Arrays y Strings | 📘 Teoría Guiada | Iteración directa de valores en listas y recorrido carácter a carácter en textos | [`ejercicio_05/`](./ejercicio_05/) | [`soluciones/ejercicio_05/`](./soluciones/ejercicio_05/) |
| **3** | **06** | `for...of` en NodeList de Libros | 🛠️ Práctica Alumno | Iterar tarjetas del DOM con `for...of`, sumar precios y calcular descuentos | [`ejercicio_06/`](./ejercicio_06/) | [`soluciones/ejercicio_06/`](./soluciones/ejercicio_06/) |
| **4** | **07** | `for...in` en Objetos vs Arrays | 📘 Teoría Guiada | Inspección de claves en objetos y demostración de por qué no usarlo en arrays | [`ejercicio_07/`](./ejercicio_07/) | [`soluciones/ejercicio_07/`](./soluciones/ejercicio_07/) |
| **4** | **08** | `for...in` para Ficha Técnica | 🛠️ Práctica Alumno | Generar una tabla HTML dinámica a partir de las propiedades de un objeto | [`ejercicio_08/`](./ejercicio_08/) | [`soluciones/ejercicio_08/`](./soluciones/ejercicio_08/) |
| **5** | **09** | `forEach()` con elemento e índice | 📘 Teoría Guiada | Argumentos `(elemento, indice, arrayOriginal)`, rankings y promedios | [`ejercicio_09/`](./ejercicio_09/) | [`soluciones/ejercicio_09/`](./soluciones/ejercicio_09/) |
| **5** | **10** | `forEach()` en Rating de Estrellas | 🛠️ Práctica Alumno | Asignación de eventos con `forEach` y comparación de índices para iluminar | [`ejercicio_10/`](./ejercicio_10/) | [`soluciones/ejercicio_10/`](./soluciones/ejercicio_10/) |
| **6** | **11** | Comparativa: Mismo reto con 4 bucles | 📘 Teoría Guiada | Resolver el mismo problema con `for`, `while`, `for...of` y `forEach` | [`ejercicio_11/`](./ejercicio_11/) | [`soluciones/ejercicio_11/`](./soluciones/ejercicio_11/) |
| **6** | **12** | Reto Integrador de Inventario | 🛠️ Práctica Alumno | Elección estratégica del bucle adecuado según el tipo de datos y la tarea | [`ejercicio_12/`](./ejercicio_12/) | [`soluciones/ejercicio_12/`](./soluciones/ejercicio_12/) |

---

## 3. Enunciados Detallados de los Ejercicios

### Ejercicio 01 (Teoría Guiada): Bucle `for` clásico con Array numérico
* **Archivos:** [`ejercicio_01/app.js`](./ejercicio_01/app.js) | [Solución](soluciones/ejercicio_01/app.js)
* **Objetivo:** Comprender las tres partes de la cabecera `for`, el acceso por `array[i]`, el recorrido inverso y los saltos de índice.
* **Enunciado:**
  Dado un array con temperaturas registradas: `const temperaturas = [15, 24, 8, 31, 19, 42, 12];`
  1. **Botón "Recorrido Ascendente" (`#btnAscendente`):** Recorre de `0` a `temperaturas.length - 1` con `i++`. Muestra cada valor con su posición y la suma total acumulada.
  2. **Botón "Recorrido Inverso" (`#btnInverso`):** Recorre en orden descendente desde `temperaturas.length - 1` hasta `0` con `i--`.
  3. **Botón "Salto de 2 en 2" (`#btnPares`):** Recorre únicamente las posiciones pares usando el incremento `i += 2`.
* **Pasos a realizar:**
  1. Declarar el array de datos y capturar los botones y `#resultado`.
  2. Implementar `recorridoAscendente()` con un bucle `for` tradicional.
  3. Implementar `recorridoInverso()` iniciando en `length - 1` y decrementando con `i--`.
  4. Implementar `recorridoPares()` con `i += 2`.
  5. Asignar los escuchadores de evento `'click'`.

---

### Ejercicio 02 (Práctica del Alumno): Bucle `for` clásico sobre NodeList (Efecto Cebra)
* **Archivos:** [`ejercicio_02/app.js`](./ejercicio_02/app.js) | [Solución](soluciones/ejercicio_02/app.js)
* **Objetivo:** Aplicar el bucle `for` clásico para recorrer una colección de nodos del DOM capturada con `querySelectorAll()` y alternar estilos según la posición numérica.
* **Enunciado:**
  Tenemos una lista de 6 elementos (`.item-lista`):
  1. **Botón "Aplicar Efecto Cebra con for" (`#btnEfectoCebra`):**
     - Recorre la NodeList con `for (let i = 0; i < items.length; i++)`.
     - Si `i % 2 === 0` (índice par), añade la clase `par`.
     - Si no (impar), añade la clase `impar`.
     - Muestra en `#resultado` cuántos elementos han sido formateados.
  2. **Botón "Restablecer Lista" (`#btnLimpiar`):**
     - Recorre con otro bucle `for` y retira las clases `par` e `impar`.
* **Pasos a realizar:**
  1. Capturar todos los `.item-lista` con `document.querySelectorAll()`.
  2. Apuntar a `#btnEfectoCebra`, `#btnLimpiar` y `#resultado`.
  3. Construir la función del efecto cebra comprobando `i % 2 === 0`.
  4. Construir la función de limpieza.
  5. Asignar los escuchadores de evento `'click'`.

---

### Ejercicio 03 (Teoría Guiada): Bucle `while` secuencial y prevención de bucles infinitos
* **Archivos:** [`ejercicio_03/app.js`](./ejercicio_03/app.js) | [Solución](soluciones/ejercicio_03/app.js)
* **Objetivo:** Comprender la anatomía del bucle `while`: inicialización previa, condición de parada, e incremento manual dentro del bloque.
* **Enunciado:**
  Tenemos una lista de pacientes en espera: `const pacientes = ['Carlos', 'Ana', 'Beatriz', 'David', 'Elena'];`
  Al pulsar el botón `#btnAtender`:
  1. Inicializa `let i = 0;` antes del bucle.
  2. Establece la condición `while (i < pacientes.length)`.
  3. En cada vuelta, concatena el turno `#i + 1`, el nombre del paciente y su índice.
  4. Incrementa obligatoriamente `i++` para no congelar el navegador.
  5. Muestra el informe en `#resultado`.
* **Pasos a realizar:**
  1. Declarar el array `pacientes` y capturar los elementos del DOM.
  2. Escribir la función con el bucle `while` asegurando las 3 fases.
  3. Imprimir el resumen en `#resultado`.
  4. Escuchar el evento `'click'` en `#btnAtender`.

---

### Ejercicio 04 (Práctica del Alumno): Bucle `while` con búsqueda y parada anticipada (`break`)
* **Archivos:** [`ejercicio_04/app.js`](./ejercicio_04/app.js) | [Solución](soluciones/ejercicio_04/app.js)
* **Objetivo:** Utilizar un bucle `while` para buscar un elemento en un array y detener la iteración inmediatamente con `break` en cuanto se localice.
* **Enunciado:**
  Inventario del almacén: `const almacen = ['Teclado', 'Ratón', 'Monitor', 'Altavoz', 'Impresora', 'Webcam'];`
  Al pulsar el botón `#btnBuscar`:
  1. Lee el producto introducido en `#inputBuscar` en minúsculas y sin espacios.
  2. Inicializa `let i = 0;` y `let encontrado = false;`.
  3. Recorre con `while (i < almacen.length)`:
     - Si `almacen[i].toLowerCase() === busqueda`, marca `encontrado = true`, muestra en qué posición se encontró y detén el bucle con `break`.
     - Si no coincide, incrementa `i++`.
  4. Si al terminar el bucle `encontrado === false`, informa de que el producto no existe en el catálogo.
* **Pasos a realizar:**
  1. Capturar `#inputBuscar`, `#btnBuscar` y `#resultado`.
  2. Implementar la función de búsqueda con `while`, validación con `if` y detención con `break`.
  3. Asignar el escuchador de `'click'`.

---

### Ejercicio 05 (Teoría Guiada): Bucle `for...of` sobre Arrays y Cadenas de Texto
* **Archivos:** [`ejercicio_05/app.js`](./ejercicio_05/app.js) | [Solución](soluciones/ejercicio_05/app.js)
* **Objetivo:** Conocer la sintaxis moderna `for (const elemento of iterable)` de ES6 para iterar directamente sobre los valores sin gestionar contadores.
* **Enunciado:**
  Dado un array de destinos: `const destinos = ['París', 'Roma', 'Tokio', 'Londres', 'Nueva York'];`
  1. **Botón "Recorrer Destinos" (`#btnDestinos`):** Itera con `for (const ciudad of destinos)` y construye una lista con viñetas.
  2. **Botón "Deletrear Palabra" (`#btnDeletrear`):** Lee una palabra de `#inputPalabra` y la recorre carácter por carácter con `for (const letra of texto)`, mostrando cada letra separada por guiones (`•`).
* **Pasos a realizar:**
  1. Declarar el array `destinos` y capturar los elementos del DOM.
  2. Programar `mostrarDestinosForOf()` con `for...of`.
  3. Programar `deletrearStringForOf()` iterando directamente sobre la cadena de texto con `for...of`.
  4. Asignar los escuchadores de evento `'click'`.

---

### Ejercicio 06 (Práctica del Alumno): Bucle `for...of` sobre una NodeList del DOM
* **Archivos:** [`ejercicio_06/app.js`](./ejercicio_06/app.js) | [Solución](soluciones/ejercicio_06/app.js)
* **Objetivo:** Aplicar `for...of` para iterar directamente sobre elementos del DOM capturados con `querySelectorAll()`.
* **Enunciado:**
  Catálogo de libros (`.tarjeta-libro`), cada uno con un precio en un `span.precio-libro`:
  Al pulsar `#btnCalcularPrecios`:
  1. Captura todas las tarjetas con `querySelectorAll('.tarjeta-libro')`.
  2. Inicializa `let totalBase = 0;`.
  3. Recorre con `for (const tarjeta of tarjetasLibros)`:
     - Localiza el precio dentro de la tarjeta con `tarjeta.querySelector('.precio-libro')`.
     - Conviértelo a número y súmalo al total.
  4. Calcula un descuento promocional del 15% (`totalBase * 0.15`) y el precio final.
  5. Muestra en `#resultado` la cantidad de libros, subtotal, descuento e importe final formateado con `.toFixed(2)`.
* **Pasos a realizar:**
  1. Capturar todas las tarjetas con `document.querySelectorAll()`.
  2. Programar la función de cálculo usando `for...of`.
  3. Extraer el precio con `Number(spanPrecio.textContent)`.
  4. Pintar el desglose económico en `#resultado`.

---

### Ejercicio 07 (Teoría Guiada): Bucle `for...in` en Objetos vs Arrays
* **Archivos:** [`ejercicio_07/app.js`](./ejercicio_07/app.js) | [Solución](soluciones/ejercicio_07/app.js)
* **Objetivo:** Comprender qué hace `for...in` (iterar sobre las claves/propiedades de un objeto literal) y analizar por qué NUNCA debe usarse en arrays.
* **Enunciado:**
  Dado un objeto con datos de un vehículo:
  `const vehiculo = { marca: 'Toyota', modelo: 'Corolla', anio: 2024, combustible: 'Híbrido', potenciaCV: 140 };`
  1. **Botón "Inspeccionar Objeto con for...in" (`#btnInspeccionarObjeto`):** Itera con `for (const propiedad in vehiculo)` y muestra cada clave junto con su valor `vehiculo[propiedad]`.
  2. **Botón "¿Por qué for...in NO en Arrays?" (`#btnDemostrarError`):** Recorre un array de ejemplo con `for...in` y demuestra en pantalla que las claves devueltas son cadenas (`typeof indice === 'string'`) en lugar de números.
* **Pasos a realizar:**
  1. Declarar el objeto `vehiculo` y el array de prueba.
  2. Programar `inspeccionarObjeto()` con `for...in` y acceso dinámico por corchetes.
  3. Programar `demostrarErrorArray()` mostrando el tipo de dato devuelto.
  4. Asignar los escuchadores de evento `'click'`.

---

### Ejercicio 08 (Práctica del Alumno): Bucle `for...in` para renderizar una Ficha Técnica
* **Archivos:** [`ejercicio_08/app.js`](./ejercicio_08/app.js) | [Solución](soluciones/ejercicio_08/app.js)
* **Objetivo:** Aplicar `for...in` para construir dinámicamente una tabla HTML a partir de las propiedades de un objeto de perfil técnico.
* **Enunciado:**
  Objeto de desarrollador:
  `const perfilUsuario = { usuario: 'alex_frontend', rol: 'Desarrollador Web Senior', experienciaAnios: 4, especialidad: 'JavaScript / DOM', ciudad: 'Valencia' };`
  1. **Botón "Generar Ficha con for...in" (`#btnGenerarFicha`):** Construye una tabla HTML con `for (const clave in perfilUsuario)`, añadiendo una fila `<tr><td>clave</td><td>valor</td></tr>` en cada vuelta.
  2. **Botón "Contar Propiedades" (`#btnContarProps`):** Cuenta cuántas propiedades tiene el objeto usando un contador dentro de un bucle `for...in`.
* **Pasos a realizar:**
  1. Capturar `#btnGenerarFicha`, `#btnContarProps` y `#resultado`.
  2. Construir la tabla iterando con `for...in`.
  3. Construir la función contadora de propiedades.
  4. Registrar los escuchadores de evento `'click'`.

---

### Ejercicio 09 (Teoría Guiada): Método `forEach()` con Elemento, Índice y Array original
* **Archivos:** [`ejercicio_09/app.js`](./ejercicio_09/app.js) | [Solución](soluciones/ejercicio_09/app.js)
* **Objetivo:** Dominar los tres parámetros del callback de `forEach`: `(elemento, indice, arrayOriginal)`.
* **Enunciado:**
  Array de puntuaciones: `const puntuaciones = [95, 82, 67, 100, 74, 88];`
  1. **Botón "Generar Ranking con forEach" (`#btnRanking`):** Utiliza los tres parámetros para mostrar: `"Puesto #[indice + 1]: [puntos] pts (participante [indice + 1] de [arrayOriginal.length])"`.
  2. **Botón "Estadísticas" (`#btnEstadisticas`):** Calcula la suma total, la media de puntuaciones y cuántos participantes obtuvieron 85 o más puntos.
* **Pasos a realizar:**
  1. Declarar el array `puntuaciones` y capturar los botones y `#resultado`.
  2. Programar `generarRanking()` aprovechando `elemento`, `indice` y `arrayOriginal`.
  3. Programar `calcularEstadisticas()` acumulando valores y evaluando con `if`.
  4. Asignar los escuchadores de evento `'click'`.

---

### Ejercicio 10 (Práctica del Alumno): Asignación masiva y control con `forEach()` (Rating)
* **Archivos:** [`ejercicio_10/app.js`](./ejercicio_10/app.js) | [Solución](soluciones/ejercicio_10/app.js)
* **Objetivo:** Utilizar `forEach()` sobre una `NodeList` para asignar escuchadores y comparar índices numéricos para iluminar estrellas interactivamente.
* **Enunciado:**
  Botonera con 5 estrellas de valoración (`.btn-estrella`):
  1. Recorre las estrellas con `estrellas.forEach(function (estrella, indiceClickada) { ... })` y asigna a cada una un evento `'click'`.
  2. Al pulsar una estrella:
     - Recorre todas las estrellas con `forEach(function (e, i) { ... })`.
     - Si `i <= indiceClickada`, añade la clase `activa` (se ilumina en dorado).
     - Si `i > indiceClickada`, quita la clase `activa`.
     - Muestra en `#resultado`: `"Has valorado con [indiceClickada + 1] de 5 estrellas ([Calificación semántica])."`
* **Pasos a realizar:**
  1. Capturar todas las estrellas con `document.querySelectorAll('.btn-estrella')`.
  2. Crear una función auxiliar para obtener el texto descriptivo según el número de estrellas.
  3. Asignar el evento `'click'` con `forEach` exterior.
  4. Actualizar las clases de las estrellas comparando `i <= indiceClickada` en el `forEach` interior.

---

### Ejercicio 11 (Teoría Guiada): Comparativa definitiva del mismo problema con 4 bucles
* **Archivos:** [`ejercicio_11/app.js`](./ejercicio_11/app.js) | [Solución](soluciones/ejercicio_11/app.js)
* **Objetivo:** Resolver el mismo objetivo matemático (sumar notas, calcular media y contar aprobados) con `for` clásico, `while`, `for...of` y `forEach()`, comparando su sintaxis y estructura.
* **Enunciado:**
  Array de calificaciones: `const notas = [4.5, 7.0, 3.2, 8.5, 6.0, 9.2];`
  - **`#btnForClasico`**: Resuelve mediante `for (let i = 0; i < notas.length; i++)`.
  - **`#btnWhile`**: Resuelve mediante `while (i < notas.length)` con incremento manual.
  - **`#btnForOf`**: Resuelve mediante `for (const nota of notas)`.
  - **`#btnForEach`**: Resuelve mediante `notas.forEach(callback)`.
  Cada botón muestra el resultado y añade un panel explicativo de la sintaxis empleada.
* **Pasos a realizar:**
  1. Declarar el array de notas y capturar los cuatro botones y `#resultado`.
  2. Crear una función de renderizado común `renderizarResumen()`.
  3. Implementar las cuatro funciones resolutorias con sus bucles correspondientes.
  4. Asignar los cuatro escuchadores de evento `'click'`.

---

### Ejercicio 12 (Reto Integrador): Panel de Inventario con Bucles Selectivos
* **Archivos:** [`ejercicio_12/app.js`](./ejercicio_12/app.js) | [Solución](soluciones/ejercicio_12/app.js)
* **Objetivo:** Aplicar estratégicamente el bucle más adecuado según la estructura de datos y el requerimiento de cada funcionalidad.
* **Enunciado:**
  Panel de gestión de almacén con lista de productos en el DOM y objeto de configuración:
  1. **Valor Total del Inventario (`#btnValorInventario`) -> Usar `for...of`:** Recorre las tarjetas visibles, multiplica `stock * precio` y muestra el valor acumulado total.
  2. **Detectar Rotura de Stock (`#btnBuscarAgotado`) -> Usar `while` con `break`:** Busca secuencialmente hasta encontrar el primer producto con `stock === 0`, detiene la búsqueda inmediatamente con `break` y emite una alerta.
  3. **Metadatos del Sistema (`#btnVerMetadatos`) -> Usar `for...in`:** Recorre el objeto literal `configAlmacen` mostrando todas sus propiedades técnicas.
  4. **Eliminar Productos (`.btn-eliminar`) -> Usar `forEach()`:** Asigna un escuchador `'click'` a cada botón para retirar su tarjeta del DOM con `.closest('.tarjeta-producto').remove()`.
* **Pasos a realizar:**
  1. Capturar tarjetas, botones de control, botones de eliminar y `#resultado`.
  2. Implementar la valoración con `for...of`.
  3. Implementar la detección de agotado con `while` y `break`.
  4. Implementar la inspección del objeto con `for...in`.
  5. Asignar los eventos de eliminación a cada botón usando `forEach()`.
