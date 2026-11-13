# Parte 10: Objetos y Clases en JavaScript — De las Estructuras Literales a la POO Moderna (ES6+)

Bienvenido a la **Parte 10** del curso de JavaScript. En este bloque abordamos el modelado formal de entidades y datos mediante **Objetos Literales** y **Clases Modernas en ES6+**, comprendiendo cómo se gestiona la memoria en el navegador (**Heap vs. Stack**), qué es realmente el formato **JSON**, el encapsulamiento estricto con campos privados (`#`), los descriptores de acceso (`get` y `set`), y la herencia con polimorfismo mediante `extends` y `super()`.

---

## 1. Esquema Técnico Oficial: Anatomía de Objetos y Clases en ECMAScript

### 1.1 ¿Cómo Gestiona JavaScript los Objetos en Memoria? (Heap vs. Stack)

En el motor de JavaScript (como V8 en Chrome y Node.js), la memoria se divide en dos regiones principales:

```text
┌──────────────────────────────────────┐     ┌────────────────────────────────────────────────────────┐
│           PILA (STACK)               │     │                   MONTÍCULO (HEAP)                     │
│  (Rápida, tamaño fijo, tipos simples)│     │         (Dinámico, tamaño variable, objetos)           │
│                                      │     │                                                        │
│  let edad = 25 ──────────────► [ 25 ]│     │                                                        │
│  let nombre = "Ana" ─────────► ["Ana"]     │                                                        │
│                                      │     │                                                        │
│  const usuario ──────────────► [0x4A1F]───┼───► Dirección 0x4A1F:                                  │
│                                      │     │     {                                                  │
│  const alias ────────────────► [0x4A1F]───┘       nombre: "Carlos",                                │
│  (¡Mismo puntero de memoria!)        │            rol: "Frontend Dev"                              │
│                                      │           }                                                  │
└──────────────────────────────────────┘     └────────────────────────────────────────────────────────┘
```

1. **La Pila (*Stack*):**
   * Almacena valores **primitivos** (`number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`).
   * Cuando asignas una variable primitiva a otra (`let b = a`), **se copia el valor real**. Modificar `b` no altera a `a`.
2. **El Montículo (*Heap*):**
   * Almacena estructuras complejas de tamaño dinámico: **Objetos**, **Arrays** y **Funciones**.
   * Cuando asignas un objeto a otra variable (`const alias = usuario`), **NO se duplica el objeto**. Solo se copia el **puntero o dirección de memoria** del Stack que apunta a la misma posición en el Heap.
   * **Consecuencia de la referencia:** Cualquier modificación a través de `alias.rol = 'Tech Lead'` alterará de forma instantánea a `usuario.rol`.

---

### 1.2 El "Punto Trampa": ¿Por qué `const obj = {}` no lo hace inmutable?

Un error conceptual muy extendido entre principiantes es pensar que `const` protege el contenido de un objeto:

```javascript
const usuario = { nombre: "Carlos" };

// ❌ ERROR: Reasignar la variable (cambiar la dirección a la que apunta el puntero)
usuario = { nombre: "Pedro" }; // TypeError: Assignment to constant variable.

// ✅ PERMITIDO: Mutar las propiedades internas en el Heap
usuario.nombre = "Pedro"; // ¡Funciona perfectamente! El puntero sigue siendo el mismo.
```

* **`const`**: Bloquea la reasignación de la variable en la Pila (*Stack*). La variable no puede apuntar a otra dirección de memoria.
* **`Object.freeze(objeto)`**: Congela verdaderamente el contenido interno en el Montículo (*Heap*). En modo estricto, cualquier intento de añadir, borrar o mutar una propiedad lanzará un `TypeError`.

---

### 1.3 Objetos Literales: Propiedades y Métodos (`this`)

Un objeto literal es una lista asociativa de pares clave-valor delimitada por llaves `{}`:

```javascript
const programador = {
    nombre: "Laura",
    lenguaje: "JavaScript",
    experiencia: 5,

    // Método con sintaxis concisa de ES6
    describir() {
        // 'this' hace referencia al objeto que está ejecutando el método
        return `${this.nombre} domina ${this.lenguaje} tras ${this.experiencia} años.`;
    }
};

// Acceso mediante Notación de Punto (estática y legible)
console.log(programador.nombre); // "Laura"

// Acceso mediante Notación de Corchetes (dinámica con variables)
const propiedadBuscada = "lenguaje";
console.log(programador[propiedadBuscada]); // "JavaScript"
```

---

### 1.4 Objetos de JavaScript vs. Formato JSON (*JavaScript Object Notation*)

**JSON** es el estándar de texto plano más utilizado en todo el mundo para el intercambio de datos entre clientes web y servidores:

| Característica | Objeto Nativo de JavaScript | Formato de Texto JSON |
| :--- | :--- | :--- |
| **Naturaleza** | Estructura viva en memoria RAM | Cadena de texto plano (*string*) |
| **Comillas en claves** | Opcionales (`nombre: "Ana"`) | **Estrictamente obligatorias con comillas dobles** (`"nombre": "Ana"`) |
| **Comillas en strings** | Simples `'...'`, dobles `"..."` o backticks `` `...` `` | **Solo comillas dobles** (`"..."`) |
| **Métodos y funciones** | Totalmente permitidos (`saludar() {}`) | **Prohibidos** (se descartan en la serialización) |
| **Comentarios** | Permitidos (`// ...`) | **Prohibidos** |
| **Valores `undefined`** | Permitidos | **No permitidos** (se omiten silenciosamente) |

```javascript
const usuario = {
    id: 1,
    nombre: "Ana",
    saludar() { return "Hola"; }
};

// 1. Serializar: De Objeto JS a texto JSON
const jsonTexto = JSON.stringify(usuario, null, 2);
/* Resultado:
{
  "id": 1,
  "nombre": "Ana"
}
(El método saludar desapareció)
*/

// 2. Deserializar: De texto JSON a Objeto JS vivo
try {
    const objetoRecuperado = JSON.parse(jsonTexto);
    console.log(objetoRecuperado.nombre); // "Ana"
} catch (error) {
    console.error("JSON con formato defectuoso:", error.message);
}
```

---

## 2. Clases Modernas en ES6+: Azúcar Sintáctico sobre Prototipos

### 2.1 La Verdad sobre las Clases en JavaScript

> [!IMPORTANT]
> **JavaScript NO tiene clases en el sentido clásico de lenguajes como Java o C++.**
> JavaScript es un lenguaje **basado en prototipos** (*Prototypal Inheritance*). Cada objeto creado en JavaScript mantiene una referencia interna a su prototipo (`[[Prototype]]`), formando la **cadena de prototipos** (*Prototype Chain*).
>
> La palabra reservada `class` introducida en **ECMAScript 2015 (ES6)** es **azúcar sintáctico (*Syntactic Sugar*)**: una forma mucho más limpia, legible y elegante de estructurar constructores y métodos sin tener que escribir manualmente código como `MiConstructor.prototype.miMetodo = function() {}`.

---

### 2.2 Anatomía de una Clase en ES6

```javascript
class CuentaBancaria {
    // 1. Campos privados nativos (prefijo #)
    #saldo;
    #pinSeguridad;

    // 2. Método constructor (se ejecuta automáticamente al hacer 'new')
    constructor(titular, saldoInicial = 0, pin = "1234") {
        this.titular = titular;       // Propiedad pública de instancia
        this.#saldo = saldoInicial;   // Propiedad privada estricta
        this.#pinSeguridad = pin;
    }

    // 3. Getter: Lectura controlada sin invocar con paréntesis
    get saldo() {
        return this.#saldo;
    }

    // 4. Setter: Escritura controlada con validación
    set pin(nuevoPin) {
        if (/^\d{4}$/.test(nuevoPin)) {
            this.#pinSeguridad = nuevoPin;
        } else {
            throw new Error("El PIN debe tener exactamente 4 dígitos numéricos.");
        }
    }

    // 5. Métodos de instancia
    ingresar(cantidad) {
        if (cantidad > 0) this.#saldo += cantidad;
    }

    // 6. Métodos estáticos (pertenecen a la Clase, no a las instancias)
    static crearCuentaDeBienvenida(titular) {
        return new CuentaBancaria(titular, 50, "0000"); // 50€ de regalo
    }
}
```

#### 🛡️ Desmitificando: `_campo` vs `#campo`
* **La vieja convención `_saldo`:** Durante años, los programadores añadían un guion bajo al inicio de una variable para indicar: *"Por favor, trátala como privada"*. Pero **no era privada en absoluto**; cualquiera podía leerla o sobrescribirla desde fuera.
* **La privacidad real `#saldo` (ES2022+):** El símbolo `#` forma parte del nombre identificador en el propio motor V8. Si alguien intenta ejecutar `cuenta.#saldo` desde fuera de la clase, el motor de JavaScript **se niega a ejecutar el código y dispara un `SyntaxError`**.

---

## 3. Herencia y Polimorfismo con `extends` y `super`

### 3.1 La Palabra Clave `extends` y la Regla de Oro de `super()`

Para crear una clase hija que herede el comportamiento y las propiedades de una clase padre, usamos la palabra reservada `extends`:

```javascript
// Clase Padre
class Empleado {
    constructor(nombre, sueldoBase) {
        this.nombre = nombre;
        this.sueldoBase = sueldoBase;
    }

    trabajar() {
        return `${this.nombre} está realizando tareas generales.`;
    }

    calcularNeto() {
        return this.sueldoBase * 0.85;
    }
}

// Clase Hija
class Desarrollador extends Empleado {
    constructor(nombre, sueldoBase, lenguaje) {
        // ⚠️ REGLA DE ORO OBLIGATORIA:
        // super() invoca el constructor del padre.
        // Debe ejecutarse OBLIGATORIAMENTE antes de usar 'this'.
        super(nombre, sueldoBase); 
        this.lenguaje = lenguaje;
    }

    // Sobrescritura de Método (Method Overriding)
    trabajar() {
        // Reutilizamos la lógica del padre con super.metodo() y añadimos la especialidad
        return `${super.trabajar()} Específicamente escribe código en ${this.lenguaje}.`;
    }

    // Polimorfismo: sobrescribe el cálculo aplicando un plus técnico
    calcularNeto() {
        return super.calcularNeto() + 300;
    }
}
```

> [!WARNING]
> Si intentas acceder a `this.algo` en el constructor de una clase hija **antes** de llamar a `super(...)`, JavaScript disparará de inmediato un error crítico:
> `ReferenceError: Must call super constructor in derived class before accessing 'this'`.

---

## 4. Traducción al "Idioma Terrenal" y Humor de Aula

### Metáfora 1: El Contrato de Alquiler y la Fotocopia (Paso por Referencia)
* **Paso por valor (primitivos):** Tienes un billete de 10€. Le das una fotocopia a tu compañero. Si tu compañero rompe su fotocopia, tu billete de 10€ sigue intacto en tu cartera.
* **Paso por referencia (objetos):** Alquilas un piso con un compañero de piso. Ambos tenéis la **misma llave** (la dirección en el Heap). Si tu compañero entra al piso y pinta las paredes de color verde fosforito (`alias.paredes = 'verde'`), cuando tú llegues a casa te encontrarás las paredes verdes (`original.paredes`). ¡No tenéis dos pisos distintos, tenéis dos llaves del mismo piso!
* **Clonación (`{ ...original }`):** Es contratar una empresa de mudanzas para que clone exactamente todos los muebles y los meta en un piso nuevo e independiente.

### Metáfora 2: La Caja Fuerte y el Cartelito de Papel (`#` vs `_`)
* Escribir `_saldo` era como tener una caja fuerte abierta de par en par con un post-it pegado que decía: *"Por favor, soy tímido, no me robes"*.
* Escribir `#saldo` es una caja acorazada de titanio enterrada bajo tres metros de hormigón donde solo el dueño que conoce el método `ingresar()` tiene la combinación.

### Metáfora 3: El Plano del Arquitecto y los Edificios Construidos (`class` vs `new`)
* La **Clase** es el plano arquitectónico en papel: define que una casa tiene puertas, ventanas y metros cuadrados, pero no puedes vivir dentro de un plano.
* La **Instancia (`new`)** es la casa física construida con ladrillos donde sí puedes encender la calefacción o abrir la puerta. Puedes construir 50 casas independientes con el mismo plano.

---

## 5. Metodología de Pares de Aprendizaje (12 Ejercicios)

La colección se estructura en **6 pares didácticos** rigurosamente progresivos:

| Par | Concepto Central | Ejercicio Teórico Guiado | Práctica para el Alumno |
| :---: | :--- | :--- | :--- |
| **Par 1** | Objetos Literales, Propiedades y Métodos | [**Ejercicio 01**](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte10/ejercicio_01/index.html): Tarjeta de perfil de usuario con notación de punto, corchetes y método `this`. | [**Ejercicio 02**](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte10/ejercicio_02/index.html): Ficha de producto con métodos para cálculo dinámico de IVA y reducción de stock. |
| **Par 2** | Paso por Referencia (Heap vs Stack) y `Object.freeze()` | [**Ejercicio 03**](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte10/ejercicio_03/index.html): Demostrador visual de memoria compartida, clonación con spread y congelado. | [**Ejercicio 04**](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte10/ejercicio_04/index.html): Configurador de temas con clonación editable y ajustes de fábrica protegidos. |
| **Par 3** | Objetos de JS vs Formato JSON | [**Ejercicio 05**](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte10/ejercicio_05/index.html): Conversión bidireccional (`JSON.stringify` y `JSON.parse`) con detección de errores. | [**Ejercicio 06**](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte10/ejercicio_06/index.html): Gestor de notas rápidas con exportación e importación de texto JSON en tiempo real. |
| **Par 4** | Clases en ES6 (Constructor e Instancias) | [**Ejercicio 07**](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte10/ejercicio_07/index.html): Clase `Coche` con instanciación múltiple mediante `new` y métodos de aceleración. | [**Ejercicio 08**](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte10/ejercicio_08/index.html): Clase `Tarea` con alternancia de estado y renderizado de colección de instancias. |
| **Par 5** | Encapsulamiento (`#`) y Getters / Setters | [**Ejercicio 09**](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte10/ejercicio_09/index.html): Clase `CuentaBancaria` con campo privado `#saldo`, setter de PIN y prueba de violación. | [**Ejercicio 10**](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte10/ejercicio_10/index.html): Clase `Termostato` con `#celsius`, validación en setter y cálculo dinámico en Fahrenheit. |
| **Par 6** | Herencia y Polimorfismo (`extends` y `super`) | [**Ejercicio 11**](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte10/ejercicio_11/index.html): Jerarquía de personal: clase padre `Empleado` y clase hija `Desarrollador`. | [**Ejercicio 12**](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte10/ejercicio_12/index.html): Jerarquía de transporte: `Vehiculo` y `VehiculoElectrico` con sobrescritura de costes. |

---

## 6. Desglose Detallado de los Ejercicios

### Par 1: Objetos Literales, Propiedades y Métodos

#### [Ejercicio 01 (Guiado): Objetos Literales, Propiedades y Métodos (this)](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte10/ejercicio_01/index.html)
* **Objetivo:** Manipular un objeto literal en memoria, comprendiendo la diferencia entre acceder a sus campos con notación de punto (`usuario.nombre`) o con notación de corchetes dinámica (`usuario['rol']`), e invocando métodos que utilizan `this`.
* **Técnica:** La interfaz permite editar el nombre, rol y experiencia desde inputs reactivos, reflejando al instante los datos en una tarjeta visual y ejecutando `usuario.saludar()`.

#### [Ejercicio 02 (Práctica): Ficha de Producto con Métodos y Cálculo de IVA](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte10/ejercicio_02/index.html)
* **Objetivo:** Diseñar un objeto `producto` con estado numérico (`precioBase`, `stock`) y métodos de negocio.
* **Técnica:** El alumno programa los métodos `calcularPrecioConIva(porcentaje)` y `vender(unidades)`, validando que no se vendan más unidades de las disponibles en el stock real.

---

### Par 2: Paso por Referencia (Heap vs Stack) y `Object.freeze()`

#### [Ejercicio 03 (Guiado): Demostrador Visual de Referencia y Object.freeze()](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte10/ejercicio_03/index.html)
* **Objetivo:** Visualizar físicamente cómo dos variables (`original` y `alias`) apuntan a la misma dirección de memoria en el Heap (#0x4A1F).
* **Técnica:** Demuestra el impacto de mutar una propiedad en `alias` (modifica a `original`), cómo romper la referencia con el Spread Operator (`{ ...original }`), y cómo `Object.freeze()` rechaza cualquier intento de mutación.

#### [Ejercicio 04 (Práctica): Configurador de Tema con Clonación y Protección](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte10/ejercicio_04/index.html)
* **Objetivo:** Aplicar la protección de objetos en una aplicación real de personalización de estilos.
* **Técnica:** El alumno congela la configuración de fábrica con `Object.freeze(temaFabrica)` y genera una copia independiente con spread para permitir que el usuario altere colores y tipografías sin riesgo de corromper los valores por defecto.

---

### Par 3: Objetos de JavaScript vs Formato JSON

#### [Ejercicio 05 (Guiado): Objetos JS vs JSON (JSON.stringify y JSON.parse)](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte10/ejercicio_05/index.html)
* **Objetivo:** Aprender el ciclo de vida de la serialización y deserialización de datos en la web.
* **Técnica:** Muestra cómo `JSON.stringify(obj, null, 2)` elimina automáticamente los métodos y funciones del objeto por incompatibilidad de formato, y cómo `JSON.parse()` debe protegerse siempre dentro de un bloque `try ... catch` para capturar errores de sintaxis.

#### [Ejercicio 06 (Práctica): Gestor de Notas con Exportación e Importación JSON](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte10/ejercicio_06/index.html)
* **Objetivo:** Construir una utilidad de notas rápidas que permita respaldar y restaurar la información en formato texto JSON.
* **Técnica:** El alumno gestiona un array de objetos, exporta el estado a un `<textarea>` mediante serialización y procesa texto externo importado validando que sea un Array con `Array.isArray()`.

---

### Par 4: Clases Modernas en ES6 (Constructor e Instancias)

#### [Ejercicio 07 (Guiado): Clases en ES6 (Constructor, new e Instancias)](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte10/ejercicio_07/index.html)
* **Objetivo:** Crear una clase formal `Coche` y generar instancias totalmente independientes mediante el operador `new`.
* **Técnica:** Dos coches (`coche1` Seat y `coche2` Tesla) coexisten en la pantalla. Al pulsar los botones de acelerar o frenar, cada objeto altera exclusivamente su propia propiedad `velocidadActual`.

#### [Ejercicio 08 (Práctica): Clase Tarea con Estado y Métodos de Instancia](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte10/ejercicio_08/index.html)
* **Objetivo:** Programar la clase `Tarea` con identificador único, responsable y horas estimadas.
* **Técnica:** El alumno implementa el método `alternarEstado()` para conmutar entre pendiente y completada, renderizando tarjetas dinámicas en el DOM a medida que el usuario instancia nuevas tareas desde el formulario.

---

### Par 5: Encapsulamiento con Campos Privados (`#`) y Getters / Setters

#### [Ejercicio 09 (Guiado): Campos Privados (#) y Getters / Setters](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte10/ejercicio_09/index.html)
* **Objetivo:** Comprender la encapsulación real en ECMAScript mediante campos privados nativos (`#saldo`, `#pin`).
* **Técnica:** El saldo solo puede ser leído mediante el descriptor `get saldo()`. La clase proporciona métodos seguros de ingreso y retirada que exigen PIN. Se demuestra que intentar acceder a `cuenta.#saldo` desde fuera provoca un error de sintaxis insalvable.

#### [Ejercicio 10 (Práctica): Termostato con #celsius y Getters/Setters](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte10/ejercicio_10/index.html)
* **Objetivo:** Construir un sistema termostático donde la unidad de medida interna se almacena de forma privada en Celsius.
* **Técnica:** El alumno programa un setter `set celsius(v)` que valida límites térmicos (-50°C a 60°C) y un getter dinámico `get fahrenheit()` que calcula al vuelo la temperatura en la escala anglosajona.

---

### Par 6: Herencia y Polimorfismo con `extends` y `super`

#### [Ejercicio 11 (Guiado): Herencia y Polimorfismo con extends y super()](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte10/ejercicio_11/index.html)
* **Objetivo:** Conectar la clase base `Empleado` con la clase hija `Desarrollador`.
* **Técnica:** Demuestra la llamada obligatoria a `super(nombre, sueldoBase)` antes de tocar `this`, la reutilización de código padre con `super.trabajar()`, y la sobrescritura de métodos para añadir bonificaciones técnicas en el sueldo neto.

#### [Ejercicio 12 (Práctica): Jerarquía Vehiculo y VehiculoElectrico](file:///c:/Users/Ramón/Desktop/confeccion2026/js/ejemplos/parte10/ejercicio_12/index.html)
* **Objetivo:** Extender la clase `Vehiculo` en `VehiculoElectrico` para comparar costes de desplazamiento.
* **Técnica:** El alumno sobrescribe el método `calcularCoste100km()` para aplicar la tarifa eléctrica en kWh en lugar del combustible tradicional, calculando en el DOM el ahorro económico directo tras 100 km de viaje.

---

## 7. Estructura de Carpetas

```text
parte10/
├── ejercicio_01/  <- Objetos literales, propiedades y método con this
├── ejercicio_02/  <- Ficha de producto con IVA y reducción de stock
├── ejercicio_03/  <- Demostrador visual de memoria (Heap vs Stack) y Object.freeze
├── ejercicio_04/  <- Configurador de temas con clonación y ajustes de fábrica
├── ejercicio_05/  <- Objetos JS vs Formato JSON (JSON.stringify y JSON.parse)
├── ejercicio_06/  <- Gestor de notas con exportación/importación JSON y try/catch
├── ejercicio_07/  <- Clase Coche con instanciación múltiple mediante new
├── ejercicio_08/  <- Clase Tarea con estado completado y métodos de instancia
├── ejercicio_09/  <- Cuenta bancaria con campo privado #saldo y getters/setters
├── ejercicio_10/  <- Termostato con temperatura privada #celsius y conversión °F
├── ejercicio_11/  <- Herencia y polimorfismo: Empleado y Desarrollador (extends/super)
├── ejercicio_12/  <- Jerarquía de vehículos: Vehiculo y VehiculoElectrico
├── soluciones/    <- Código 100% resuelto y documentado (ejercicio_01 al 12)
└── README.md      <- Manual teórico completo y guía didáctica
```

---

## 8. Resumen de Fórmulas y Sintaxis Clave

```javascript
// 1. Objeto literal
const usuario = {
    nombre: "Ana",
    saludar() { return `Hola, soy ${this.nombre}`; }
};

// 2. Clonación superficial (romper referencia)
const copiaIndependiente = { ...usuario };

// 3. Inmutabilidad estricta
Object.freeze(usuario);

// 4. JSON
const textoJson = JSON.stringify(usuario);
const objetoJs = JSON.parse(textoJson);

// 5. Clase con campo privado y getter
class Producto {
    #precio;

    constructor(nombre, precio) {
        this.nombre = nombre;
        this.#precio = precio;
    }

    get precio() { return this.#precio; }
}

// 6. Herencia con extends y super()
class ProductoDigital extends Producto {
    constructor(nombre, precio, urlDescarga) {
        super(nombre, precio); // OBLIGATORIO antes de 'this'
        this.urlDescarga = urlDescarga;
    }
}
```
