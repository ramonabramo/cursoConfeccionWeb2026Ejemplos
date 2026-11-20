# Guía Teórica: De Arrays a Clases y Persistencia en JavaScript

Esta guía está diseñada como material de apoyo para el profesor y de consulta para los alumnos. Acompaña paso a paso la evolución de los ejercicios.

---

## 1. La necesidad de estructurar la información

Cuando empezamos a programar en JavaScript, la forma más intuitiva de almacenar una lista de valores es un **Array**.

### 1.1 El problema de los Arrays Paralelos (Fase 1)
Imagina que queremos registrar alumnos y sus notas:

```javascript
let nombres = ["Lucía", "Carlos", "Sofía"];
let notas = [8.5, 4.25, 9.75];
```

* El alumno `nombres[0]` tiene la nota `notas[0]`.
* El alumno `nombres[1]` tiene la nota `notas[1]`.

#### ¿Por qué es una mala práctica?
1. **Falta de cohesión:** La información de una misma persona está dispersa en dos estructuras independientes.
2. **Fragilidad extrema:** Si ejecutamos `nombres.splice(1, 1)` (eliminamos a Carlos) y olvidamos hacer `notas.splice(1, 1)`, a partir de ese instante todas las notas quedarán asociadas al alumno incorrecto.
3. **Imposible de ordenar:** Si ordenamos alfabéticamente `nombres.sort()`, las notas ya no coincidirán con sus dueños.

---

## 2. Objetos Literales: Agrupación y Cohesión (Fase 2)

Un **objeto literal** en JavaScript es una colección de pares clave-valor (`key: value`). Nos permite crear una sola entidad que guarde todos los datos de un alumno:

```javascript
const alumno1 = {
  nombre: "Lucía",
  nota: 8.5
};

const alumno2 = {
  nombre: "Carlos",
  nota: 4.25
};
```

Ahora podemos tener un **único array de objetos**:

```javascript
const alumnos = [
  { nombre: "Lucía", nota: 8.5 },
  { nombre: "Carlos", nota: 4.25 }
];
```

### Ventajas:
* Si eliminamos un elemento con `alumnos.splice(i, 1)`, eliminamos el nombre y la nota juntos.
* Podemos ordenar el array con facilidad:
  ```javascript
  alumnos.sort((a, b) => b.nota - a.nota); // Ordenar de mayor a menor nota
  ```

### Limitación de los objetos literales:
¿Qué ocurre si queremos saber si un alumno está aprobado? Tendríamos que escribir funciones externas o duplicar funciones dentro de cada objeto. No hay un "molde" formal que garantice que todos los alumnos tengan las mismas reglas y comportamientos.

---

## 3. Clases en JavaScript (POO) (Fase 3)

A partir de ECMAScript 2015 (ES6), JavaScript incorporó la sintaxis `class`. Una clase actúa como una **plantilla** o **molde** para crear objetos del mismo tipo.

### 3.1 Estructura de una Clase

```javascript
class Alumno {
  // El constructor se ejecuta al hacer 'new Alumno(...)'
  constructor(nombre, nota) {
    this.nombre = nombre.trim();
    this.nota = Number(nota);
  }

  // Método: comportamiento asociado al alumno
  estaAprobado() {
    return this.nota >= 5;
  }

  // Método para obtener una representación formateada
  obtenerFicha() {
    const estado = this.estaAprobado() ? "Aprobado ✅" : "Suspenso ❌";
    return `${this.nombre} - Nota: ${this.nota.toFixed(2)} (${estado})`;
  }
}
```

### 3.2 Instanciación
Para crear un alumno a partir del molde usamos la palabra clave `new`:

```javascript
const alumno1 = new Alumno("Lucía", 8.5);
console.log(alumno1.obtenerFicha()); // "Lucía - Nota: 8.50 (Aprobado ✅)"
```

### Ventajas de las Clases:
1. **Encapsulación:** Agrupan datos (`nombre`, `nota`) y lógica (`estaAprobado()`, `obtenerFicha()`).
2. **Validación:** El constructor puede validar que la nota esté entre 0 y 10.
3. **Mantenibilidad:** Si cambia la regla de aprobado (por ejemplo, a nota 6), solo se modifica el método en un único lugar.

---

## 4. Persistencia en el Navegador: `localStorage`

En aplicaciones web que corren en el cliente (navegador), no se puede escribir directamente en el disco duro por motivos obvios de seguridad. La solución estándar del estándar W3C para guardar datos de manera persistente es la API **`localStorage`**.

### 4.1 Características de `localStorage`
* Los datos **no se borran** al cerrar la pestaña o el navegador.
* Está limitado al dominio o puerto actual (mismo origen).
* **Regla de oro:** `localStorage` **SOLO** almacena cadenas de texto (`strings`).

### 4.2 Métodos Fundamentales
* `localStorage.setItem(clave, valor)`: Guarda un texto bajo una clave.
* `localStorage.getItem(clave)`: Recupera el texto de una clave (o `null` si no existe).
* `localStorage.removeItem(clave)`: Elimina una clave.
* `localStorage.clear()`: Borra todo el almacenamiento local del sitio.

### 4.3 El puente: `JSON.stringify()` y `JSON.parse()`
Como solo acepta texto, usamos JSON (JavaScript Object Notation):

```javascript
// Guardar un array en localStorage
const lista = [{ nombre: "Lucía", nota: 8.5 }];
localStorage.setItem("alumnos", JSON.stringify(lista)); 
// Se guarda: '[{"nombre":"Lucía","nota":8.5}]'

// Leer el array de localStorage
const guardado = localStorage.getItem("alumnos");
const recuperado = JSON.parse(guardado);
```

### 4.4 El concepto clave: "Rehidratación" de Clases
Este es uno de los errores más comunes en alumnos:

> `JSON.stringify()` convierte a texto solo las propiedades (`nombre`, `nota`), pero **NO los métodos**.  
> Al hacer `JSON.parse()`, obtenemos **objetos planos**, no instancias de `Alumno`.

```javascript
const datos = JSON.parse(localStorage.getItem("alumnos"));
datos[0].estaAprobado(); // ❌ ERROR: datos[0].estaAprobado is not a function
```

**Solución didáctica (Rehidratación):**
Convertimos los objetos planos de nuevo en instancias usando `.map()`:

```javascript
const datosPlanos = JSON.parse(localStorage.getItem("alumnos")) || [];
const alumnos = datosPlanos.map(item => new Alumno(item.nombre, item.nota));

// ¡Ahora sí!
console.log(alumnos[0].estaAprobado()); // ✅ Funciona correctamente
```

---

## 5. Comunicación Cliente-Servidor con `fetch()` (Fase 4)

Hasta ahora los datos vivían solo en el navegador del usuario. En aplicaciones reales, los datos residen en un servidor central con una base de datos relacional (como MySQL/MariaDB).

### 5.1 ¿Qué es `fetch()`?
`fetch()` es la API nativa moderna de JavaScript para realizar peticiones HTTP (AJAX) asíncronas.

### 5.2 Promesas y `async / await`
Hacer una petición a un servidor toma tiempo (latencia de red, consulta SQL). Para no congelar la pantalla del usuario, JavaScript ejecuta esto de forma asíncrona mediante **Promesas**.

La sintaxis moderna y más legible es `async / await`:

```javascript
async function cargarAlumnosDesdeServidor() {
  try {
    // 1. Enviamos la petición HTTP GET
    const respuesta = await fetch("http://localhost/api-alumnos/obtener_alumnos.php");

    // 2. Comprobamos que el servidor haya respondido con éxito (código 200)
    if (!respuesta.ok) {
      throw new Error(`Error en el servidor: ${respuesta.status}`);
    }

    // 3. Parseamos la respuesta JSON que envía el servidor
    const datosBD = await respuesta.json();

    // 4. Instanciamos nuestra clase Alumno con cada registro recibido
    const alumnos = datosBD.map(d => new Alumno(d.nombre, d.nota));
    
    return alumnos;
  } catch (error) {
    console.error("Hubo un fallo en la conexión:", error);
    throw error;
  }
}
```

---

## 6. Servidor Web y Base de Datos: ¿Laragon (PHP) o Node.js?

Para que `fetch()` funcione necesitamos dos piezas en el lado servidor:
1. **Un servidor web / API HTTP**: que escuche peticiones y devuelva JSON.
2. **Un servidor de base de datos**: MySQL/MariaDB que almacene los datos.

### Opción A: PHP + MySQL con Laragon (Altamente Recomendada en Windows)
* **¿Qué es Laragon?** Es un entorno de desarrollo para Windows que incluye Apache/Nginx, PHP, MySQL y phpMyAdmin en un solo ejecutable portable.
* **Ventajas en el aula:**
  1. No requiere configurar variables de entorno ni comandos de consola complejos.
  2. Tiene **phpMyAdmin** integrado: los alumnos ven la base de datos visualmente en tablas.
  3. El script PHP es minúsculo (15 líneas) y solo actúa como "conector" entre MySQL y JavaScript.
* **Ubicación de archivos:** Se colocan en `C:\laragon\www\`.

### Opción B: Node.js + Express
* **Ventajas:** Todo el stack (front y back) está en el mismo lenguaje (JavaScript).
* **Inconvenientes en el aula:** Requiere que los alumnos entiendan `npm`, dependencias (`package.json`), el módulo `cors`, y cómo gestionar procesos en la terminal.

En la carpeta `servidor/` de este proyecto se incluyen ambas implementaciones para que puedas elegir la que mejor se adapte a tu programación didáctica.
