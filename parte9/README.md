# Parte 9: Asincronía en JavaScript — Temporizadores (setTimeout, setInterval) y el Event Loop

Bienvenido a la **Parte 9** del curso de JavaScript. En este bloque abordamos uno de los conceptos más transformadores, potentes y a la vez incomprendidos del ecosistema de JavaScript: **la Asincronía**.

Aprenderemos a controlar el tiempo mediante `setTimeout()`, `clearTimeout()`, `setInterval()` y `clearInterval()`, comprendiendo la arquitectura interna del navegador (**Call Stack**, **Web APIs**, **Task Queue** y **Event Loop**) y construyendo componentes interactivos reales: notificaciones toast con opción de deshacer, cronómetros deportivos, temporizadores regresivos, relojes digitales sincronizados, barras de progreso dinámicas, simuladores de carga de batería, carruseles con pausa al hover (*mouseenter*/*mouseleave*), marquesinas de noticias y minijuegos de reflejos.

---

## 1. Esquema Técnico Oficial: La Arquitectura Asíncrona de JavaScript

### 1.1 ¿Qué es la Asincronía y por qué es Imprescindible?

En un lenguaje puramente **síncrono y secuencial**, cada instrucción debe esperar obligatoriamente a que la anterior termine para poder ejecutarse:

```javascript
// Si JavaScript fuera puramente síncrono y bloqueante:
console.log("Inicio de descarga");
pausarEjecucionDurante(5000); // ⚠️ ¡LA PANTALLA SE CONGELA 5 SEGUNDOS!
console.log("Descarga finalizada");
```

Si JavaScript detuviera el hilo principal mientras espera una respuesta de red, una animación o un temporizador, **la interfaz del navegador quedaría completamente congelada**: el usuario no podría hacer clic, ni escribir en inputs, ni hacer scroll. El navegador alertaría con el fatídico mensaje: *"Esta página web no responde"*.

Para evitar esto, JavaScript implementa un **modelo de concurrencia basado en un Bucle de Eventos (Event Loop)**, con ejecución de **un solo hilo (Single-Threaded)** pero con **operaciones de entrada/salida no bloqueantes (Non-Blocking I/O)**.

---

### 1.2 El Entorno de Ejecución (Runtime Environment)

Para entender cómo funciona `setTimeout` o `setInterval`, debemos mirar el cuadro completo de piezas que colaboran dentro del navegador:

```text
┌────────────────────────────────────────────────────────────────────────┐
│                        ENTORNO DEL NAVEGADOR                           │
│                                                                        │
│   ┌───────────────────────────┐      ┌──────────────────────────────┐  │
│   │   MOTOR JS (V8 / Spider)  │      │     WEB APIs DEL NAVEGADOR   │  │
│   │                           │      │                              │  │
│   │   ┌───────────────────┐   │      │   • setTimeout / setInterval │  │
│   │   │    CALL STACK     │   │ ───► │   • DOM Events (click, ...)  │  │
│   │   │ (Pila de Llamadas)│   │      │   • fetch / AJAX             │  │
│   │   └───────────────────┘   │      └──────────────┬───────────────┘  │
│   │             ▲             │                     │                  │
│   └─────────────┼─────────────┘                     │                  │
│                 │                                   ▼                  │
│          EVENT LOOP ◄─────────────── ┌──────────────────────────────┐  │
│   (Vigila si Call Stack está vacío)  │    TASK QUEUE (Macrotareas)  │  │
│                                      │   [ Callback1, Callback2 ]   │  │
│                                      └──────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

1. **La Pila de Llamadas (*Call Stack*):**
   * Estructura **LIFO** (*Last In, First Out*) donde se ejecuta el código JavaScript síncrono.
   * Solo puede ejecutar **una sola cosa a la vez**.
2. **Las Web APIs del Navegador (*Browser Web APIs*):**
   * Hilos nativos en segundo plano (escritos en C++ o Rust por el motor del navegador como Chromium o Gecko).
   * Cuando en JS escribes `setTimeout(miFuncion, 3000)`, el motor de JS **no cuenta el tiempo**. Le dice a la Web API: *"Toma este temporizador y avísame cuando pasen 3000 ms"*. El Call Stack queda libre de inmediato para continuar con las siguientes líneas de código.
3. **La Cola de Tareas o Macrotareas (*Task Queue / Callback Queue*):**
   * Estructura **FIFO** (*First In, First Out*).
   * Cuando la Web API termina de contar los 3000 ms, **no interrumpe el código en curso**. Deposita la función callback al final de la cola de espera.
4. **El Bucle de Eventos (*Event Loop*):**
   * Es un vigilante continuo e incansable cuyo único trabajo es comprobar dos condiciones:
     1. ¿Está la Pila de Llamadas (*Call Stack*) **completamente vacía**?
     2. ¿Hay tareas pendientes en la Cola de Tareas (*Task Queue*)?
   * Si y solo si el *Call Stack* está vacío, el *Event Loop* toma la primera tarea de la cola y la empuja a la pila para ser ejecutada.

---

### 1.3 El Misterio de `setTimeout(fn, 0)`

Uno de los ejercicios estrella de este módulo es la demostración empírica de un temporizador con 0 milisegundos de retraso:

```javascript
console.log("1. Inicio");

setTimeout(() => {
    console.log("2. Dentro del setTimeout");
}, 0);

console.log("3. Fin");
```

**Salida en consola:**
```text
1. Inicio
3. Fin
2. Dentro del setTimeout
```

**¿Por qué el 2 aparece al final si el retraso era de 0 milisegundos?**
* `console.log("1. Inicio")` se apila en el Call Stack, se imprime y se desapila.
* `setTimeout(..., 0)` se delega a las **Web APIs**. Como el retraso es 0ms, la Web API envía de inmediato el callback a la **Task Queue**.
* Pero el callback **no puede entrar al Call Stack** todavía, porque el Call Stack aún está ocupado ejecutando el código síncrono principal.
* `console.log("3. Fin")` se apila en el Call Stack, se imprime y se desapila.
* Ahora el Call Stack queda vacío. El **Event Loop** detecta que la pila está libre, toma el callback de la Task Queue y lo introduce en la pila.
* Se imprime `"2. Dentro del setTimeout"`.

> [!IMPORTANT]
> El tiempo que indicas en `setTimeout` (por ejemplo 1000ms) **no garantiza una ejecución exacta en 1000ms**, sino un **tiempo mínimo garantizado** antes de que el callback sea encolado en la *Task Queue*. Si el Call Stack está ocupado con cálculos intensivos, el callback esperará pacientemente su turno.

---

## 2. Anatomía Técnica de los Temporizadores

### 2.1 `setTimeout()` y `clearTimeout()`

Ejecuta una función callback **una única vez** transcurrido un retardo específico en milisegundos.

```javascript
// Sintaxis formal
const timerId = setTimeout(callback, retrasoEnMs, ...argumentosOpcionales);

// Cancelación formal
clearTimeout(timerId);
```

* **Valor de retorno (`timerId`):** Devuelve un número entero positivo único (*ID numérico de temporizador*) asignado por el navegador para identificar la tarea en la tabla interna de temporizadores.
* **Función `clearTimeout(timerId)`:** Anula la ejecución programada. Si se invoca antes de que venza el plazo, el callback nunca llegará a ejecutarse ni a encolarse en la Task Queue.
* Si se le pasa un ID inválido o `null`, `clearTimeout()` no genera ningún error.

---

### 2.2 `setInterval()` y `clearInterval()`

Ejecuta una función callback **de forma repetitiva y continua** cada intervalo regular de milisegundos.

```javascript
// Sintaxis formal
const intervalId = setInterval(callback, periodoEnMs, ...argumentosOpcionales);

// Cancelación formal
clearInterval(intervalId);
```

* **Ciclo de vida:** Se ejecuta indefinidamente hasta que se invoque explícitamente `clearInterval(intervalId)` o se cierre la pestaña del navegador.
* **Parada obligatoria:** Para pausar, detener o reiniciar la repetición, se debe almacenar el identificador en una variable de estado accesible (`let intervalId = null;`).

---

### 2.3 Buenas Prácticas Críticas y Prevención de Bugs

#### ⚠️ El Peligro de Acumulación de Intervalos (Solapamiento / Fuga de Memoria)
Uno de los errores más comunes en alumnos principiantes es asignar un nuevo `setInterval` cada vez que se pulsa un botón sin comprobar si ya existía uno en marcha:

```javascript
// ❌ CÓDIGO DEFECTUOSO (Bug clásico):
let intervalo = null;

btnIniciar.addEventListener('click', () => {
    // Si el usuario hace 5 clics rápidos, ¡se crean 5 intervalos simultáneos!
    // El contador irá 5 veces más rápido y solo podremos pausar el último ID guardado.
    intervalo = setInterval(actualizar, 1000); 
});

// ✅ CÓDIGO ROBUSTO Y PROFESIONAL:
btnIniciar.addEventListener('click', () => {
    // Protección de estado: si ya está corriendo, salimos
    if (intervalo !== null) return; 

    intervalo = setInterval(actualizar, 1000);
});
```

#### 🛡️ Regla de Oro para Pausar y Reiniciar:
Al ejecutar `clearInterval(intervalo)`, la variable `intervalo` sigue conservando el número entero previo. Es fundamental restablecerla manualmente a `null` para permitir reinicios limpios:

```javascript
function pausar() {
    if (intervalo !== null) {
        clearInterval(intervalo);
        intervalo = null; // <- ¡Clave para restablecer el estado!
    }
}
```

---

## 3. Traducción al "Idioma Terrenal" y Humor de Aula

### Metáfora 1: El Camarero del Bar de Tapas (Single Thread vs Asincronía)
Imagina un bar con un único camarero (el motor de JavaScript en su único hilo).
* **Si el camarero fuera síncrono:** Una mesa le pide una ración de bravas. El camarero va a la cocina, mete las patatas en la freidora y se queda 10 minutos de brazos cruzados mirando la freidora sin atender a nadie más. Los clientes de las demás mesas se van enfadados y el bar quiebra.
* **El camarero asíncrono real:** El camarero coge la comanda, le dice al cocinero (Web API): *"Avísame cuando la freidora pite"*, y regresa inmediatamente a la sala a servir bebidas y cobrar a otras mesas (Call Stack libre). Cuando la freidora pita (vence el tiempo), el cocinero pone el plato en la barra de entrega (Task Queue). En cuanto el camarero termina de servir la bebida que tenía en la mano, recoge el plato y lo lleva a la mesa (Event Loop).

### Metáfora 2: El Despertador y el Manotazo Matutino (`setTimeout` y `clearTimeout`)
Poner un `setTimeout` es como configurar la alarma del móvil a las 07:00 AM. Si te despiertas a las 06:55 AM por tu cuenta y no quieres que suene para no despertar a nadie, pulsas el botón "Desactivar alarma" (`clearTimeout`). La alarma nunca llega a sonar.

### Metáfora 3: El Aspersor del Césped Descontrolado (`setInterval` y `clearInterval`)
Un `setInterval` es un aspersor automático programado para disparar un chorro de agua cada 2 segundos.
* Si le pones una llave de paso accesible (`clearInterval`), cuando el césped está regado cierras el grifo.
* Si no guardas el identificador de la llave de paso, el aspersor regará eternamente hasta inundar el jardín (fuga de memoria y saturación del navegador).

---

## 4. Metodología de Pares de Aprendizaje (12 Ejercicios)

La colección se estructura en **6 pares didácticos**. El primer ejercicio de cada par es guiado y analizado en profundidad por el docente, mientras que el segundo es un reto análogo para que el alumno fije los conceptos con autonomía:

| Par | Concepto Central | Ejercicio Teórico Guiado | Práctica para el Alumno |
| :---: | :--- | :--- | :--- |
| **Par 1** | `setTimeout` y Cancelación con `clearTimeout` | **Ejercicio 01**: Notificación Toast temporal con opción de Deshacer en 4s. | **Ejercicio 02**: Simulador de descarga programada con botón de cancelar. |
| **Par 2** | `setInterval` y Parada con `clearInterval` | **Ejercicio 03**: Cronómetro digital deportivo con Iniciar, Pausar y Reiniciar. | **Ejercicio 04**: Temporizador de cuenta atrás (Pomodoro / cocina) con alarma final. |
| **Par 3** | Aplicaciones en Vivo: Relojes Digitales | **Ejercicio 05**: Reloj en vivo sincronizado con el sistema y formato fecha completa. | **Ejercicio 06**: Reloj digital con conmutador de formato 12H (AM/PM) vs 24H. |
| **Par 4** | Barras Dinámicas y Animaciones por Tiempo | **Ejercicio 07**: Barra de progreso de instalación con porcentaje y autolimpieza. | **Ejercicio 08**: Simulador de recarga de batería con cambio dinámico de colores. |
| **Par 5** | Interactividad con Pausa al Hover | **Ejercicio 09**: Carrusel de testimonios con autoplay y pausa en `mouseenter`. | **Ejercicio 10**: Teletipo (*ticker*) de noticias de última hora con pausa al hover. |
| **Par 6** | Asincronía Profunda y el Event Loop | **Ejercicio 11**: Demostración empírica del orden del Event Loop (`setTimeout` 0ms). | **Ejercicio 12**: Minijuego semáforo de reflejos con tiempo aleatorio y detección de trampas. |

---

## 5. Desglose Detallado de los Ejercicios

### Par 1: `setTimeout` y Cancelación con `clearTimeout`

#### [Ejercicio 01 (Guiado): Notificación Toast con Deshacer](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte9/ejercicio_01/index.html)
* **Objetivo:** Comprender cómo posponer una acción destructiva (ej: eliminar un elemento de la base de datos) permitiendo un margen de rectificación al usuario.
* **Técnica:** Se inicia un `setTimeout` de 4000ms. Si el usuario pulsa "Deshacer", se ejecuta `clearTimeout(timeoutId)` y se cancela la orden antes de que la Web API envíe el callback a la Task Queue. Incluye una barra visual decreciente en tiempo real.

#### [Ejercicio 02 (Práctica): Simulador de Descarga Programada con Cancelación](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte9/ejercicio_02/index.html)
* **Objetivo:** Aplicar la misma lógica para una solicitud de descarga segura que analiza el antivirus durante 5 segundos antes de entregar el archivo.
* **Técnica:** El alumno debe implementar la asignación de `timerDescarga = setTimeout(..., 5000)` y la función de revocación con `clearTimeout(timerDescarga)`.

---

### Par 2: `setInterval` y Parada con `clearInterval`

#### [Ejercicio 03 (Guiado): Cronómetro Digital Deportivo](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte9/ejercicio_03/index.html)
* **Objetivo:** Manejar la repetición periódica regular cada 100 milisegundos para registrar décimas de segundo, formateando a `MM:SS.D`.
* **Técnica:** Demuestra el blindaje frente a clics repetitivos (`if (intervaloId !== null) return;`), la detención con `clearInterval` y la puesta a cero con reinicio de variables de estado.

#### [Ejercicio 04 (Práctica): Temporizador de Cuenta Regresiva](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte9/ejercicio_04/index.html)
* **Objetivo:** Construir una cuenta atrás configurable desde un `<input type="number">` que descuenta 1 segundo cada 1000ms.
* **Técnica:** El alumno gestiona la condición de parada (`if (segundosRestantes <= 0)`) para autolimpiar el intervalo con `clearInterval` y activar un estilo visual de alarma parpadeante.

---

### Par 3: Relojes Digitales en Tiempo Real

#### [Ejercicio 05 (Guiado): Reloj Digital en Vivo con Fecha y Segundero](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte9/ejercicio_05/index.html)
* **Objetivo:** Sincronizar la interfaz con el reloj interno del sistema operativo mediante `new Date()` y `setInterval(..., 1000)`.
* **Técnica:** Formateo estricto con `padStart(2, '0')`, separación de fecha localizada en español con `toLocaleDateString()`, animación CSS de parpadeo en los dos puntos separadores (`:`), y control de pausa/reanudación.

#### [Ejercicio 06 (Práctica): Reloj con Conmutador de Formato 12H / 24H](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte9/ejercicio_06/index.html)
* **Objetivo:** Modificar dinámicamente la representación temporal de un reloj en vivo sin interrumpir el temporizador en ejecución.
* **Técnica:** El alumno aplica álgebra modular (`horas % 12 || 12`) y operadores ternarios para conmutar entre la notación europea de 24 horas y el formato anglosajón con sufijo AM / PM.

---

### Par 4: Barras Dinámicas y Animaciones por Intervalos

#### [Ejercicio 07 (Guiado): Barra de Progreso de Instalación](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte9/ejercicio_07/index.html)
* **Objetivo:** Transformar el DOM y las hojas de estilo en tiempo real modificando la propiedad `style.width` cada 40 milisegundos.
* **Técnica:** Animación fluida de 0% a 100% con fases textuales informativas (*"Descargando paquetes"*, *"Compilando"*, *"Verificando firmas"*), autolimpieza con `clearInterval` al llegar al 100% y botones de cancelación y reseteo.

#### [Ejercicio 08 (Práctica): Simulador de Carga de Batería Inteligente](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte9/ejercicio_08/index.html)
* **Objetivo:** Crear un indicador interactivo de nivel de batería con umbrales de color condicionales.
* **Técnica:** El alumno incrementa el porcentaje con un intervalo al enchufar el cargador, evaluando en cada ciclo si debe aplicar color rojo (`<20%`), ámbar (`<80%`) o verde (`>=80%`), y deteniendo la carga al 100% o al desenchufar.

---

### Par 5: Interactividad con Pausa al Hover (Sliders y Tickers)

#### [Ejercicio 09 (Guiado): Carrusel de Testimonios con Pausa al Hover](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte9/ejercicio_09/index.html)
* **Objetivo:** Implementar el patrón universal de carruseles web: rotación automática desatendida cada 3000ms con pausa interactiva cuando el usuario explora con el ratón.
* **Técnica:** Vinculación de `mouseenter` con `clearInterval()` para pausar la lectura y de `mouseleave` con un nuevo `setInterval()` para reanudar el ciclo, complementado con navegación manual circular mediante el operador módulo.

#### [Ejercicio 10 (Práctica): Teletipo de Noticias de Última Hora en Directo](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte9/ejercicio_10/index.html)
* **Objetivo:** Construir una marquesina de prensa rotativa que alterne titulares informativos cada 2.5 segundos.
* **Técnica:** El alumno replica la lógica de pausa al hover con los eventos `mouseenter` y `mouseleave`, incorporando además un botón de pausa manual forzada conmutada con bandera booleana.

---

### Par 6: Asincronía Profunda y el Event Loop

#### [Ejercicio 11 (Guiado): Demostración Empírica del Event Loop (`setTimeout` 0ms)](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte9/ejercicio_11/index.html)
* **Objetivo:** Desmitificar el comportamiento de los temporizadores asíncronos y evidenciar físicamente la prioridad absoluta del Call Stack sobre la Task Queue.
* **Técnica:** Una consola simulada en pantalla imprime un mensaje síncrono inicial, programa un `setTimeout(..., 0)` y ejecuta inmediatamente otro mensaje síncrono. El alumno comprueba visualmente por qué la tarea diferida siempre se renderiza en último lugar.

#### [Ejercicio 12 (Práctica): Minijuego de Reflejos / Semáforo Asíncrono](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte9/ejercicio_12/index.html)
* **Objetivo:** Desarrollar un test de reflejos de precisión combinando temporizadores con retardo aleatorio, marcas temporales (`Date.now()`) y anulación de eventos de trampa.
* **Técnica:** El semáforo pasa a rojo y programa con `setTimeout(..., Math.random())` el cambio a verde entre 2 y 5 segundos. Si el jugador hace clic mientras está en rojo, se anula el temporizador con `clearTimeout` y se descalifica por falso arranque. Si hace clic en verde, se calcula el diferencial exacto en milisegundos.

---

## 6. Estructura de Carpetas

```text
parte9/
├── ejercicio_01/  <- Toast con cancelación diferida (clearTimeout)
├── ejercicio_02/  <- Simulador de descarga segura con cancelación
├── ejercicio_03/  <- Cronómetro digital con Iniciar, Pausar y Reiniciar
├── ejercicio_04/  <- Temporizador regresivo con alarma sonora/visual
├── ejercicio_05/  <- Reloj digital en vivo con fecha completa y segundero
├── ejercicio_06/  <- Reloj digital con conmutador 12H (AM/PM) vs 24H
├── ejercicio_07/  <- Barra de progreso e instalación animada
├── ejercicio_08/  <- Simulador de carga de batería inteligente
├── ejercicio_09/  <- Carrusel de testimonios con pausa en mouseenter/mouseleave
├── ejercicio_10/  <- Teletipo (ticker) de noticias con pausa al hover
├── ejercicio_11/  <- Demostración empírica del Event Loop (setTimeout 0ms)
├── ejercicio_12/  <- Minijuego de reflejos y semáforo con Date.now()
├── soluciones/    <- Código 100% resuelto y documentado (ejercicio_01 al 12)
└── README.md      <- Guía formativa y teoría técnica completa
```

---

## 7. Resumen de Fórmulas y Comandos Imprescindibles

```javascript
// 1. Ejecutar una vez en el futuro
const timerId = setTimeout(() => {
    console.log("Se ejecuta tras 2 segundos");
}, 2000);

// Cancelar antes de que ocurra:
clearTimeout(timerId);

// 2. Ejecutar repetidamente en bucle
const intervalId = setInterval(() => {
    console.log("Se ejecuta cada 1 segundo");
}, 1000);

// Detener la repetición:
clearInterval(intervalId);

// 3. Patrón seguro de inicio y parada:
let miIntervalo = null;

function iniciar() {
    if (miIntervalo !== null) return; // Evitar duplicar
    miIntervalo = setInterval(rutina, 1000);
}

function detener() {
    if (miIntervalo !== null) {
        clearInterval(miIntervalo);
        miIntervalo = null; // Restablecer estado
    }
}
```
