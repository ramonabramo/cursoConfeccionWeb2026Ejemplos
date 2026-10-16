# Parte 3: Estructuras Condicionales (`if`) y Gestión de Eventos en JavaScript

Bienvenido a la **Parte 3** del curso de JavaScript. En este bloque aprenderemos dos de los pilares más importantes del desarrollo web:
1. **La toma de decisiones en el código** mediante la sentencia condicional `if` y sus variantes (`else`, `else if`, `if anidados`).
2. **La interactividad web con eventos**, pasando de programas lineales ejecutados al instante a programas reactivos que responden a las acciones del usuario (`click`, `submit`, etc.) a través de escuchadores de eventos (`listeners`).

---

## 1. Teoría: La Sentencia Condicional `if`

### 1.1. ¿Qué es una estructura condicional?
En la vida real tomamos decisiones constantemente: *"Si llueve, cojo un paraguas; si no, voy sin él"*.
En programación, una estructura condicional permite que nuestro código **elija entre varios caminos posibles** en función de si una determinada condición se cumple (`true`) o no se cumple (`false`).

---

### 1.2. Tipos de Estructuras Condicionales

#### A. Selección Simple: `if`
Ejecuta un bloque de código **únicamente si la condición es verdadera**. Si no se cumple, el programa simplemente continúa su flujo normal ignorando ese bloque.

```javascript
if (compra >= 100) {
    importeFinal = compra - 10; // Se aplica descuento solo si llega a 100
}
```

#### B. Selección Doble: `if ... else`
Permite definir **dos caminos exclusivos**: uno que se ejecuta si la condición se cumple (`true`), y otro alternativo (`else`) si no se cumple (`false`). Jamás se ejecutarán los dos a la vez.

```javascript
if (edad >= 18) {
    mensaje = 'Eres mayor de edad';
} else {
    mensaje = 'Eres menor de edad';
}
```

#### C. Selección Múltiple o por Tramos: `if ... else if ... else`
Permite encadenar varias condiciones cuando existen más de dos posibilidades. Se evalúan secuencialmente de arriba hacia abajo; en cuanto una condición se cumple, se ejecuta su bloque y se descartan las demás.

```javascript
if (nota < 5) {
    calificacion = 'Suspenso';
} else if (nota < 7) {
    calificacion = 'Aprobado';
} else if (nota < 9) {
    calificacion = 'Notable';
} else {
    calificacion = 'Sobresaliente';
}
```

> [!TIP]
> **El valor del orden ascendente:** Al ordenar las condiciones de menor a mayor (o de mayor a menor), no es necesario repetir rangos complejos con `&&`. Si una nota no es `< 5`, cuando el programa llega al siguiente `else if (nota < 7)` ya sabemos con certeza matemática que es mayor o igual que 5.

#### D. Estructuras Anidadas (`if` dentro de otro `if`)
Ocurre cuando una decisión depende de otra decisión previa. Es especialmente útil en flujos escalonados (por ejemplo, comprobar primero si un usuario existe y, solo si existe, comprobar su contraseña).

```javascript
if (altura >= 120) {
    // Si cumple la altura mínima, pasamos a evaluar la edad
    if (edad >= 12) {
        mensaje = 'Puedes subir a la atracción sin acompañante';
    } else {
        mensaje = 'Puedes subir, pero acompañado de un adulto';
    }
} else {
    mensaje = 'No alcanzas la altura mínima para esta atracción';
}
```

---

### 1.3. Operadores de Comparación y Lógicos

| Operador | Significado | Ejemplo | Resultado |
| :---: | :--- | :---: | :---: |
| `===` | Estrictamente igual (valor y tipo) | `5 === 5` | `true` |
| `!==` | Estrictamente distinto | `5 !== '5'` | `true` |
| `>` | Mayor que | `10 > 5` | `true` |
| `<` | Menor que | `3 < 2` | `false` |
| `>=` | Mayor o igual que | `5 >= 5` | `true` |
| `<=` | Menor o igual que | `4 <= 5` | `true` |
| `&&` | Operador AND (ambas condiciones deben ser `true`) | `edad >= 18 && carnet === true` | `true` solo si cumple ambas |
| <code>&#124;&#124;</code> | Operador OR (al menos una condición debe ser `true`) | <code>dia === 'Sábado' &#124;&#124; dia === 'Domingo'</code> | `true` si es fin de semana |
| `!` | Operador NOT (invierte el valor de verdad) | `!esSocio` | `true` si `esSocio` es `false` |

---

## 2. Teoría Básica: Gestión de Eventos (`Listeners`)

### 2.1. De "Sin Eventos" a "Con Eventos"
* **Programas Sin Eventos (Secuenciales):**
  El código se ejecuta de arriba a abajo en cuanto se carga la página web. Se suelen usar funciones bloqueantes como `prompt()` para pedir datos al usuario y `textContent` para volcar el resultado en el DOM de forma instantánea.
* **Programas Con Eventos (Reactivos):**
  El código no se ejecuta solo; **queda a la espera** de que el usuario realice una acción en la interfaz: hacer clic en un botón, escribir en un campo o enviar un formulario.

---

### 2.2. ¿Qué es un Escuchador de Eventos (`addEventListener`)?
Un **escuchador de eventos** (o *listener*) es una función especial que le dice al navegador:
> *"Vigila este elemento HTML, y cuando ocurra la acción que te indico, ejecuta este bloque de código"*.

Sintaxis estándar:
```javascript
// 1. Apuntar al elemento HTML que queremos vigilar
const boton = document.querySelector('#miBoton');

// 2. Colocar el escuchador
boton.addEventListener('click', function () {
    // Código que se ejecuta CADA VEZ que el usuario pulsa el botón
});
```

---

### 2.3. Estructura Estándar de un Programa con Eventos
Para mantener un código limpio, profesional y fácil de seguir, organizamos siempre el archivo JavaScript en estas zonas bien delimitadas:

```javascript
// estructura del programa principal

// 1. Declaración de variables y constantes globales
let resultadoCalculado = 0;

// 2. Gestión de eventos: constantes al DOM que queremos escuchar
const btnCalcular = document.querySelector('#btnCalcular');

// 3. Colocar escuchadores de eventos
btnCalcular.addEventListener('click', function () {

    // --- Estructura interna de la función manejadora ---
    
    // Constantes a elementos internos del DOM
    const inputImporte = document.querySelector('#importe');
    const nodoSalida = document.querySelector('#resultado');

    // Entradas: leer datos introducidos por el usuario
    const importe = Number(inputImporte.value);

    // Procesamiento: toma de decisiones con 'if'
    if (importe >= 100) {
        resultadoCalculado = importe - 10;
    } else {
        resultadoCalculado = importe;
    }

    // Salidas: actualizar la interfaz gráfica
    nodoSalida.textContent = `Importe final: ${resultadoCalculado} €`;
});
```

---

## 3. Tablas Resumen de los Ejercicios

### 3.1. Ejercicios "Sin Eventos" (Entrada con `prompt` y salida directa en DOM)

| Nº | Ejercicio | Concepto Clave de `if` | Ejercicio Alumno | Solución |
| :---: | :--- | :--- | :---: | :---: |
| **01** | Selección simple | `if` simple evaluando si un número es mayor que 5 | [`ejercicio_01/01.js`](./sinEventos/ejercicio_01/01.js) | [`soluciones/ejercicio_01/01.js`](./sinEventos/soluciones/ejercicio_01/01.js) |
| **02** | Selección doble | `if ... else`: calificar aprobado o suspendido (nota >= 5) | [`ejercicio_02/02.js`](./sinEventos/ejercicio_02/02.js) | [`soluciones/ejercicio_02/02.js`](./sinEventos/soluciones/ejercicio_02/02.js) |
| **03** | Comparar 2 números (mayor) | El mayor de dos números mediante `if ... else` | [`ejercicio_03/03.js`](./sinEventos/ejercicio_03/03.js) | [`soluciones/ejercicio_03/03.js`](./sinEventos/soluciones/ejercicio_03/03.js) |
| **04** | Comparar 2 números (menor) | El menor de dos números mediante `if ... else` | [`ejercicio_04/04.js`](./sinEventos/ejercicio_04/04.js) | [`soluciones/ejercicio_04/04.js`](./sinEventos/soluciones/ejercicio_04/04.js) |
| **05** | `if` anidados / `else if` | Mayor, menor o iguales entre dos números | [`ejercicio_05/05.js`](./sinEventos/ejercicio_05/05.js) | [`soluciones/ejercicio_05/05.js`](./sinEventos/soluciones/ejercicio_05/05.js) |
| **06** | Signo de un número | Clasificación en Positivo, Negativo o Cero con `else if` | [`ejercicio_06/06.js`](./sinEventos/ejercicio_06/06.js) | [`soluciones/ejercicio_06/06.js`](./sinEventos/soluciones/ejercicio_06/06.js) |
| **07** | Mayor de 3 números (anidados) | Mayor de tres números utilizando solo `if` anidados (sin `&&`) | [`ejercicio_07/07.js`](./sinEventos/ejercicio_07/07.js) | [`soluciones/ejercicio_07/07.js`](./sinEventos/soluciones/ejercicio_07/07.js) |
| **08** | Mayor de 3 números (`&&`) | Mayor de tres números o iguales utilizando el operador `&&` | [`ejercicio_08/08.js`](./sinEventos/ejercicio_08/08.js) | [`soluciones/ejercicio_08/08.js`](./sinEventos/soluciones/ejercicio_08/08.js) |
| **09** | Tramos y validación | Calificaciones académicas (Insuficiente, Suficiente, Bien, Notable, Sobresaliente) | [`ejercicio_09/09.js`](./sinEventos/ejercicio_09/09.js) | [`soluciones/ejercicio_09/09.js`](./sinEventos/soluciones/ejercicio_09/09.js) |
| **10** | Cambio visual en DOM | Positivo (div azul), negativo (rojo) y anchura proporcional (`num * 10`) | [`ejercicio_10/10.js`](./sinEventos/ejercicio_10/10.js) | [`soluciones/ejercicio_10/10.js`](./sinEventos/soluciones/ejercicio_10/10.js) |
| **11** | Tres estados visuales | Azul (positivo), rojo (negativo) o negro (cero) con anchura | [`ejercicio_11/11.js`](./sinEventos/ejercicio_11/11.js) | [`soluciones/ejercicio_11/11.js`](./sinEventos/soluciones/ejercicio_11/11.js) |
| **12** | Colorear celdas de tabla | Iluminar en rojo la celda correspondiente al rango de la nota | [`ejercicio_12/12.js`](./sinEventos/ejercicio_12/12.js) | [`soluciones/ejercicio_12/12.js`](./sinEventos/soluciones/ejercicio_12/12.js) |
| **13** | Rango entre 5 y 10 | Mostrar "Premio" si el número está entre 5 y 10, o "Sigue jugando" | [`ejercicio_13/13.js`](./sinEventos/ejercicio_13/13.js) | [`soluciones/ejercicio_13/13.js`](./sinEventos/soluciones/ejercicio_13/13.js) |
| **14** | Tarifas y color en `li` | Parque de atracciones: precio y color de fondo del `li` según edad | [`ejercicio_14/14.js`](./sinEventos/ejercicio_14/14.js) | [`soluciones/ejercicio_14/14.js`](./sinEventos/soluciones/ejercicio_14/14.js) |
| **15** | Estilo dinámico de fondo | Cambio del fondo del `body` según hora del día (mañana, tarde, noche) | [`ejercicio_15/15.js`](./sinEventos/ejercicio_15/15.js) | [`soluciones/ejercicio_15/15.js`](./sinEventos/soluciones/ejercicio_15/15.js) |

---

### 3.2. Ejercicios "Con Eventos" (Formularios y `addEventListener`)

| Nº | Ejercicio | Concepto Clave de `if` y Eventos | Carpeta Alumno | Archivos |
| :---: | :--- | :--- | :---: | :---: |
| **01** | Descuento en compra | `if` simple: descuento de 10 € en compras >= 100 € al pulsar botón | [`eventos/ejercicio_01/`](./eventos/ejercicio_01/) | [`app.js`](./eventos/ejercicio_01/app.js) / [`html`](./eventos/ejercicio_01/index.html) |
| **02** | Temperatura bajo cero | `if` simple: aviso de temperatura bajo cero (< 0 °C) en evento click | [`eventos/ejercicio_02/`](./eventos/ejercicio_02/) | [`app.js`](./eventos/ejercicio_02/app.js) / [`html`](./eventos/ejercicio_02/index.html) |
| **03** | Mayor o menor de edad | `if ... else`: comprobar si la persona tiene 18 años o más | [`eventos/ejercicio_03/`](./eventos/ejercicio_03/) | [`app.js`](./eventos/ejercicio_03/app.js) / [`html`](./eventos/ejercicio_03/index.html) |
| **04** | Número par o impar | `if ... else`: uso del operador módulo (`numero % 2 === 0`) | [`eventos/ejercicio_04/`](./eventos/ejercicio_04/) | [`app.js`](./eventos/ejercicio_04/app.js) / [`html`](./eventos/ejercicio_04/index.html) |
| **05** | Calificación escolar | `if` múltiple: calificación por tramos evaluados en orden ascendente | [`eventos/ejercicio_05/`](./eventos/ejercicio_05/) | [`app.js`](./eventos/ejercicio_05/app.js) / [`html`](./eventos/ejercicio_05/index.html) |
| **06** | Clasificador de clima | `if` múltiple: helada, mucho frío, fresco, agradable o calor sin `&&` | [`eventos/ejercicio_06/`](./eventos/ejercicio_06/) | [`app.js`](./eventos/ejercicio_06/app.js) / [`html`](./eventos/ejercicio_06/index.html) |
| **07** | Tarifas de entrada | `if` múltiple: precios de entrada según grupo de edad en orden ascendente | [`eventos/ejercicio_07/`](./eventos/ejercicio_07/) | [`app.js`](./eventos/ejercicio_07/app.js) / [`html`](./eventos/ejercicio_07/index.html) |
| **08** | Acceso a atracción | `if` anidados: validar primero altura (120 cm) y después edad (12 años) | [`eventos/ejercicio_08/`](./eventos/ejercicio_08/) | [`app.js`](./eventos/ejercicio_08/app.js) / [`html`](./eventos/ejercicio_08/index.html) |
| **09** | Identificación de usuario | `if` anidados: autenticación en 2 fases (usuario 'alumno' y clave 'javascript') | [`eventos/ejercicio_09/`](./eventos/ejercicio_09/) | [`app.js`](./eventos/ejercicio_09/app.js) / [`html`](./eventos/ejercicio_09/index.html) |
| **10** | Descuento socio / importe | `if` anidados: reglas combinadas según tipo de cliente y tramo de gasto | [`eventos/ejercicio_10/`](./eventos/ejercicio_10/) | [`app.js`](./eventos/ejercicio_10/app.js) / [`html`](./eventos/ejercicio_10/index.html) |

---

## 4. Enunciados Detallados

### 4.1. Ejercicios Sin Eventos

#### Ejercicio 01: Selección simple
* **Archivos:** [`sinEventos/ejercicio_01/01.js`](./sinEventos/ejercicio_01/01.js) | [Solución](sinEventos/soluciones/ejercicio_01/01.js)
* **Enunciado:** Pedir un número por teclado con `prompt()`. Indicar en el div `#salida` si el número es mayor que 5, o si es menor o igual.
* **Estructura:** `if` simple o `if ... else`.

#### Ejercicio 02: Selección doble (aprobado o suspendido)
* **Archivos:** [`sinEventos/ejercicio_02/02.js`](./sinEventos/ejercicio_02/02.js) | [Solución](sinEventos/soluciones/ejercicio_02/02.js)
* **Enunciado:** Pedir una nota numérica del 1 al 10 con `prompt()`. Mostrar en `#salida` si el alumno ha aprobado (nota >= 5) o suspendido.
* **Estructura:** `if ... else`.

#### Ejercicio 03: Comparación de dos números (el mayor)
* **Archivos:** [`sinEventos/ejercicio_03/03.js`](./sinEventos/ejercicio_03/03.js) | [Solución](sinEventos/soluciones/ejercicio_03/03.js)
* **Enunciado:** Pedir dos números distintos por teclado e indicar cuál de los dos es el mayor en el div `#salida`.
* **Estructura:** `if (numero1 > numero2) ... else ...`.

#### Ejercicio 04: Comparación de dos números (el menor)
* **Archivos:** [`sinEventos/ejercicio_04/04.js`](./sinEventos/ejercicio_04/04.js) | [Solución](sinEventos/soluciones/ejercicio_04/04.js)
* **Enunciado:** Pedir dos números distintos por teclado e indicar cuál es el menor en el div `#salida`.
* **Estructura:** `if (numero1 < numero2) ... else ...`.

#### Ejercicio 05: Mayor o iguales
* **Archivos:** [`sinEventos/ejercicio_05/05.js`](./sinEventos/ejercicio_05/05.js) | [Solución](sinEventos/soluciones/ejercicio_05/05.js)
* **Enunciado:** Introducir dos números por teclado. Mostrar en `#salida` qué número es más grande, o si ambos números son iguales.
* **Estructura:** `if ... else if ... else` o `if` anidado.

#### Ejercicio 06: Positivo, negativo o cero
* **Archivos:** [`sinEventos/ejercicio_06/06.js`](./sinEventos/ejercicio_06/06.js) | [Solución](sinEventos/soluciones/ejercicio_06/06.js)
* **Enunciado:** Pedir un número por teclado e indicar en `#salida` si es POSITIVO, NEGATIVO o CERO.
* **Estructura:** `if (num > 0) ... else if (num < 0) ... else ...`.

#### Ejercicio 07: El mayor de tres números (anidados sin &&)
* **Archivos:** [`sinEventos/ejercicio_07/07.js`](./sinEventos/ejercicio_07/07.js) | [Solución](sinEventos/soluciones/ejercicio_07/07.js)
* **Enunciado:** Pedir tres números distintos e indicar cuál es el mayor utilizando únicamente estructuras `if ... else` anidadas (sin usar operadores `&&`).
* **Estructura:** Comparar `num1 > num2` y en la rama verdadera comparar `num1 > num3`; en la rama falsa comparar `num2 > num3`.

#### Ejercicio 08: Mayor de tres números o iguales (con &&)
* **Archivos:** [`sinEventos/ejercicio_08/08.js`](./sinEventos/ejercicio_08/08.js) | [Solución](sinEventos/soluciones/ejercicio_08/08.js)
* **Enunciado:** Pedir tres números por teclado e indicar cuál es el mayor o si los tres son iguales, utilizando el operador lógico AND (`&&`).
* **Estructura:** `if (n1 === n2 && n1 === n3) ... else if (n1 >= n2 && n1 >= n3) ...`.

#### Ejercicio 09: Notas de examen por tramos
* **Archivos:** [`sinEventos/ejercicio_09/09.js`](./sinEventos/ejercicio_09/09.js) | [Solución](sinEventos/soluciones/ejercicio_09/09.js)
* **Enunciado:** Pedir una nota numérica del 0 al 10 y mostrar la calificación en texto: Nota no válida (<0 o >10), Insuficiente (<5), Suficiente (<6), Bien (<7), Notable (<9) y Sobresaliente (>=9).
* **Estructura:** Validación previa con `||` y tramos encadenados con `else if`.

#### Ejercicio 10: Positivo o negativo con cambio visual
* **Archivos:** [`sinEventos/ejercicio_10/10.js`](./sinEventos/ejercicio_10/10.js) | [Solución](sinEventos/soluciones/ejercicio_10/10.js)
* **Enunciado:** Pedir un número por teclado. Si es positivo, el div se colorea de azul; si es negativo, se colorea de rojo. La anchura del div será el valor absoluto multiplicado por 10 (`Math.abs(numero) * 10`).
* **Estructura:** `if ... else` manipulando estilos con `style.backgroundColor` y `style.width`.

#### Ejercicio 11: Tres estados con cambio visual
* **Archivos:** [`sinEventos/ejercicio_11/11.js`](./sinEventos/ejercicio_11/11.js) | [Solución](sinEventos/soluciones/ejercicio_11/11.js)
* **Enunciado:** Pedir un número: azul si es positivo, rojo si es negativo y negro si es cero. Colocar el valor del número dentro del div y ajustar su anchura.
* **Estructura:** `if ... else if ... else` aplicando estilos dinámicos.

#### Ejercicio 12: Colorear celdas de una tabla
* **Archivos:** [`sinEventos/ejercicio_12/12.js`](./sinEventos/ejercicio_12/12.js) | [Solución](sinEventos/soluciones/ejercicio_12/12.js)
* **Enunciado:** Pedir una nota del 1 al 10. Colocar la nota en el `<h2>` y colorear de rojo la celda correspondiente de la tabla según el tramo: suspenso [0,5), aprobado [5,6), bien [6,7), notable [7,9) o sobresaliente [9,10].
* **Estructura:** `if ... else if` apuntando a los identificadores de celda con `document.querySelector`.

#### Ejercicio 13: Número premiado en rango
* **Archivos:** [`sinEventos/ejercicio_13/13.js`](./sinEventos/ejercicio_13/13.js) | [Solución](sinEventos/soluciones/ejercicio_13/13.js)
* **Enunciado:** Pedir un número por teclado y mostrarlo en `#numero`. Si está entre 5 y 10 (ambos inclusive), mostrar "premio" en `#mensaje`; en caso contrario, mostrar "sigue jugando".
* **Estructura:** `if (numero >= 5 && numero <= 10) ... else ...`.

#### Ejercicio 14: Entrada a parque según edad
* **Archivos:** [`sinEventos/ejercicio_14/14.js`](./sinEventos/ejercicio_14/14.js) | [Solución](sinEventos/soluciones/ejercicio_14/14.js)
* **Enunciado:** Pedir la edad del usuario: menores de 5 años acceso gratis (fondo verde), entre 5 y 12 años 10 € (amarillo), entre 13 y 18 años 15 € (naranja), mayores de 18 años 20 € (rojo). Mostrar la edad en el primer `<li>` y el precio en el segundo `<li>`.
* **Estructura:** `if ... else if ... else` combinando cálculo de precio y color de fondo.

#### Ejercicio 15: Color de fondo según la hora
* **Archivos:** [`sinEventos/ejercicio_15/15.js`](./sinEventos/ejercicio_15/15.js) | [Solución](sinEventos/soluciones/ejercicio_15/15.js)
* **Enunciado:** Pedir la hora del día (0 a 24). Si es de mañana (6 a 12), el fondo del `<body>` será amarillo; si es de tarde (12 a 18), naranja; si es de noche (18 a 6), oscuro o negro.
* **Estructura:** `if ... else if ... else` modificando `document.body.style.backgroundColor`.

---

### 4.2. Ejercicios Con Eventos

#### Ejercicio 01: Descuento en una compra
* **Archivos:** [`eventos/ejercicio_01/app.js`](./eventos/ejercicio_01/app.js) | [Solución](eventos/soluciones/ejercicio_01/app.js) | [`index.html`](./eventos/ejercicio_01/index.html)
* **Enunciado:** El usuario introduce el importe de una compra en un formulario. Al pulsar el botón #btnCalcular: si el importe es >= 100 €, se aplican 10 € de descuento; si es menor, no hay descuento. Mostrar siempre el importe final.
* **Evento:** `click` en `#btnCalcular`.

#### Ejercicio 02: Aviso de temperatura bajo cero
* **Archivos:** [`eventos/ejercicio_02/app.js`](./eventos/ejercicio_02/app.js) | [Solución](eventos/soluciones/ejercicio_02/app.js) | [`index.html`](./eventos/ejercicio_02/index.html)
* **Enunciado:** El usuario introduce una temperatura. Al pulsar el botón #btnComprobar: mostrar siempre la temperatura registrada, y si es menor que 0 °C añadir el texto "Temperatura bajo cero".
* **Evento:** `click` en `#btnComprobar`.

#### Ejercicio 03: Comprobación de mayoría de edad
* **Archivos:** [`eventos/ejercicio_03/app.js`](./eventos/ejercicio_03/app.js) | [Solución](eventos/soluciones/ejercicio_03/app.js) | [`index.html`](./eventos/ejercicio_03/index.html)
* **Enunciado:** El usuario introduce su edad. Al pulsar el botón: si tiene 18 años o más, mostrar "Eres mayor de edad"; en caso contrario, mostrar "Eres menor de edad".
* **Evento:** `click` en el botón de comprobación.

#### Ejercicio 04: Número par o impar con operador módulo
* **Archivos:** [`eventos/ejercicio_04/app.js`](./eventos/ejercicio_04/app.js) | [Solución](eventos/soluciones/ejercicio_04/app.js) | [`index.html`](./eventos/ejercicio_04/index.html)
* **Enunciado:** El usuario introduce un número entero. Al pulsar el botón: determinar si el resto de dividirlo entre 2 es 0 (`numero % 2 === 0`) para mostrar si es par o impar.
* **Evento:** `click` en el botón.

#### Ejercicio 05: Calificación de nota por tramos ascendentes
* **Archivos:** [`eventos/ejercicio_05/app.js`](./eventos/ejercicio_05/app.js) | [Solución](eventos/soluciones/ejercicio_05/app.js) | [`index.html`](./eventos/ejercicio_05/index.html)
* **Enunciado:** El usuario introduce una nota (0 a 10). Al pulsar el botón: clasificar en Suspenso (<5), Aprobado (<7), Notable (<9) o Sobresaliente (>=9), evaluando en orden ascendente sin necesidad de `&&`.
* **Evento:** `click` en el botón.

#### Ejercicio 06: Clasificación de temperatura
* **Archivos:** [`eventos/ejercicio_06/app.js`](./eventos/ejercicio_06/app.js) | [Solución](eventos/soluciones/ejercicio_06/app.js) | [`index.html`](./eventos/ejercicio_06/index.html)
* **Enunciado:** El usuario introduce los grados. Al pulsar el botón: clasificar en "Helada" (<0), "Mucho frío" (<10), "Fresco" (<20), "Temperatura agradable" (<30) o "Hace calor" (>=30), en orden ascendente.
* **Evento:** `click` en el botón.

#### Ejercicio 07: Precio de entrada según edad
* **Archivos:** [`eventos/ejercicio_07/app.js`](./eventos/ejercicio_07/app.js) | [Solución](eventos/soluciones/ejercicio_07/app.js) | [`index.html`](./eventos/ejercicio_07/index.html)
* **Enunciado:** El visitante introduce su edad. Al pulsar el botón: calcular la tarifa (<6 años: gratis; <18: 5 €; <65: 10 €; >=65: 6 €).
* **Evento:** `click` en el botón.

#### Ejercicio 08: Acceso a atracción (if anidados)
* **Archivos:** [`eventos/ejercicio_08/app.js`](./eventos/ejercicio_08/app.js) | [Solución](eventos/soluciones/ejercicio_08/app.js) | [`index.html`](./eventos/ejercicio_08/index.html)
* **Enunciado:** El usuario introduce su altura y edad. Al pulsar el botón: comprobar primero si mide al menos 120 cm. Si no llega, no puede subir; si llega, evaluar si tiene 12 años o más (puede subir solo) o menos de 12 (debe subir acompañado).
* **Evento:** `click` en el botón.

#### Ejercicio 09: Autenticación en 2 fases
* **Archivos:** [`eventos/ejercicio_09/app.js`](./eventos/ejercicio_09/app.js) | [Solución](eventos/soluciones/ejercicio_09/app.js) | [`index.html`](./eventos/ejercicio_09/index.html)
* **Enunciado:** El usuario introduce nombre de usuario y contraseña. Al pulsar entrar: comprobar primero si el usuario es "alumno"; si es incorrecto, avisar de "Usuario no encontrado". Solo si el usuario es correcto, verificar si la contraseña es "javascript".
* **Evento:** `click` en el botón.

#### Ejercicio 10: Descuento combinado por socio y volumen
* **Archivos:** [`eventos/ejercicio_10/app.js`](./eventos/ejercicio_10/app.js) | [Solución](eventos/soluciones/ejercicio_10/app.js) | [`index.html`](./eventos/ejercicio_10/index.html)
* **Enunciado:** El usuario introduce el importe y si es socio o no. Reglas para socios: compra < 100 € (5%), compra >= 100 € (15%). Reglas para no socios: compra < 200 € (0%), compra >= 200 € (5%). Calcular y mostrar descuento e importe final.
* **Evento:** `click` en el botón.
