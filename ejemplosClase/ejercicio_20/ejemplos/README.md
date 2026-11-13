# 📚 Ejemplos Didácticos · Clases en JavaScript (ES6+)

**Módulo:** Programación Web en Entorno Cliente · Certificado IFCD0110  
**Profesor:** Ramón Abramo · ALPE Formación · Santander · Curso 2026  
**Documento de Referencia:** [`Manual_Clases_JavaScript.pdf`](../manuales/Manual_Clases_JavaScript.pdf) (36 páginas)

---

## 🎯 Presentación de la Colección

Este directorio contiene **12 ejemplos completos e interactivos** organizados de forma incremental. Cada ejemplo representa un hito fundamental en el aprendizaje de la **Programación Orientada a Objetos con Clases en JavaScript**, desde la sintaxis básica del constructor hasta arquitecturas avanzadas con persistencia `localStorage`, herencia y manipulación dinámica del DOM.

Cada subcarpeta contiene tres archivos especializados:
- `index.html`: Estructura semántica de la página con contenedor de interfaz y panel de resultados.
- `estilos.css`: Hoja de estilos moderna y limpia (comentada pedagógicamente).
- `script.js`: Lógica JavaScript comentada paso a paso, diseñada para ser leída e inspeccionada con la consola del navegador (**F12**).

---

## 📋 Catálogo de los 12 Ejemplos

| Nº | Carpeta | Archivo | Concepto Teórico Central | Explicación Didáctica |
| :---: | :--- | :--- | :--- | :--- |
| **01** | [`ejemplo-01-primera-clase/`](ejemplo-01-primera-clase/) | `script.js` | `class Persona`, `constructor()`, operador `new` | Cómo definir una plantilla de objetos, inicializar atributos con `this` y crear instancias independientes en memoria. |
| **02** | [`ejemplo-02-literal-vs-clase/`](ejemplo-02-literal-vs-clase/) | `script.js` | Objeto literal `{}` vs `class`, operador `instanceof` | Comparación directa: por qué los literales duplican código al necesitar muchos objetos y cómo la clase comparte métodos y tipado formal. |
| **03** | [`ejemplo-03-metodos-y-this/`](ejemplo-03-metodos-y-this/) | `script.js` | Métodos de instancia, enlace de `this`, *method chaining* | Añadir comportamiento al objeto, modificar su estado interno y encadenar operaciones sucesivas (`cuenta.ingresar(50).retirar(20)`). |
| **04** | [`ejemplo-04-getters-y-setters/`](ejemplo-04-getters-y-setters/) | `script.js` | Descriptores `get` y `set`, validación de datos y `throw` | Crear propiedades computadas y blindar la entrada de datos con validaciones estrictas de tipo y rango numérico. |
| **05** | [`ejemplo-05-campos-privados/`](ejemplo-05-campos-privados/) | `script.js` | Campos privados (`#`), métodos privados, ES2022 | La verdadera encapsulación en JavaScript: variables inaccesibles fuera del cuerpo de la clase sin recurrir a closures ni trucos. |
| **06** | [`ejemplo-06-miembros-estaticos/`](ejemplo-06-miembros-estaticos/) | `script.js` | Palabra clave `static`, métodos auxiliares y constantes | Métodos y propiedades que pertenecen a la clase y no a las instancias (como `Math.PI` o contadores globales de registros). |
| **07** | [`ejemplo-07-herencia/`](ejemplo-07-herencia/) | `script.js` | `extends`, `super()`, sobreescritura (*override*), polimorfismo | Jerarquía de clases (`Vehiculo` -> `Coche`, `Moto`). Reutilizar atributos del padre y adaptar métodos en las clases hijas. |
| **08** | [`ejemplo-08-composicion/`](ejemplo-08-composicion/) | `script.js` | Composición ("tiene-un" vs "es-un"), delegación | Modelar sistemas complejos integrando instancias de distintas clases (ejemplo: un `Ordenador` con `Procesador`, `Memoria` y `Disco`). |
| **09** | [`ejemplo-09-coleccion-de-objetos/`](ejemplo-09-coleccion-de-objetos/) | `script.js` | Arrays de instancias, métodos funcionales (`filter`, `map`, `find`) | Administrar un catálogo dinámico: la clase `Biblioteca` custodiando y prestando instancias de la clase `Libro`. |
| **10** | [`ejemplo-10-clases-y-json/`](ejemplo-10-clases-y-json/) | `script.js` | `JSON.stringify()`, `toJSON()`, factoría `static fromJSON()` | Resolver el problema de la pérdida de métodos al serializar clases en JSON y reconstruir instancias vivas. |
| **11** | [`ejemplo-11-clase-y-dom-contador/`](ejemplo-11-clase-y-dom-contador/) | `script.js` | Clases como componentes UI, eventos y estado | Cada instancia de la clase `Contador` crea, renderiza y administra su propio elemento visual en la pantalla sin colisiones. |
| **12** | [`ejemplo-12-clases-y-dom-tareas/`](ejemplo-12-clases-y-dom-tareas/) | `script.js` | Arquitectura completa: Clases + DOM + `localStorage` | Aplicación completa de lista de tareas: modelo de datos, persistencia en almacenamiento local y refresco reactivo de la interfaz. |

---

## 🚀 Cómo Probar los Ejemplos

1. **A través del Navegador**:
   - Abre el portal [`index.html`](index.html) de este directorio para acceder a la lista con un solo clic.
   - O navega directamente a la carpeta del ejemplo deseado (ej. [`ejemplo-01-primera-clase/index.html`](ejemplo-01-primera-clase/index.html)).
2. **Con la Consola de Desarrollador**:
   - Pulsa **F12** (o `Ctrl + Shift + I`) en cualquier ejemplo y abre la pestaña **Consola** para ver las salidas explicadas.
3. **Experimentación**:
   - Abre el archivo `script.js` en Visual Studio Code, cambia valores o añade nuevos métodos, guarda (`Ctrl + S`) y recarga la página (`F5`).
