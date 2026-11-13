# 🏛️ Ejercicio 20: Programación Orientada a Objetos con Clases en JavaScript (ES6+)

**Curso:** Confección y Publicación de Páginas Web (IFCD0110)  
**Profesor:** Ramón Abramo  
**Centro:** ALPE Formación · Santander (Cantabria) · Curso 2026  
**Tecnologías:** JavaScript Moderno (ES6+ / ES2022), HTML5, CSS3, DOM API, LocalStorage, JSON

---

## 🎯 Presentación y Objetivos Didácticos

El **Ejercicio 20** representa el salto cualitativo definitivo en el módulo de JavaScript: la transición desde la agrupación de datos en **objetos literales** hacia la **Programación Orientada a Objetos (POO)** formal mediante la sintaxis de **clases (`class`)**, introducida en ECMAScript 2015 (ES6) y perfeccionada con los campos privados estándar de ES2022.

A lo largo de este bloque formativo, el alumnado aprende a:

1. **Entender el concepto de Molde vs. Instancia**: Comprender por qué los objetos literales son insuficientes cuando se requiere crear múltiples entidades homogéneas, y cómo las clases eliminan la duplicación de código mediante el operador `new` y el método `constructor()`.
2. **Dominar el Contexto `this` y el Encadenamiento**: Aprender el enlace dinámico de propiedades de instancia y el patrón de encadenamiento fluido de métodos (*method chaining*) mediante `return this;`.
3. **Encapsulamiento con Getters y Setters**: Proteger y validar asignaciones de datos mediante descriptores de acceso (`get` y `set`) lanzando errores controlados con `throw new Error()`.
4. **Verdadera Privacidad con Campos Privados (`#`)**: Superar las convenciones antiguas de guion bajo (`_propiedad`) implementando la sintaxis nativa de campos y métodos privados (`#campo`, `#metodo()`) protegidos a nivel de motor JavaScript.
5. **Miembros Estáticos (`static`)**: Diferenciar el estado de cada objeto individual de los métodos de utilidad, contadores de instancias y constantes que pertenecen a la propia clase.
6. **Herencia y Polimorfismo (`extends` y `super`)**: Modelar jerarquías del mundo real reutilizando código base, invocando el constructor padre mediante `super()` y sobrescribiendo métodos (*override* / polimorfismo).
7. **Composición sobre Herencia**: Identificar cuándo usar relaciones "tiene-un" (*has-a*) frente a "es-un" (*is-a*), integrando objetos dentro de otros objetos y gestionando colecciones masivas.
8. **Serialización y Reconstrucción JSON**: Resolver la pérdida de prototipos de `JSON.stringify()` implementando métodos `toJSON()` y métodos estáticos factoría (`static fromJSON()`) para persistir clases en `localStorage`.
9. **Integración con el DOM y la Interfaz Web**: Crear componentes web reutilizables donde cada instancia de una clase gobierna su propio bloque de HTML, eventos y estado en pantalla.

---

## 🧭 Estructura del Directorio

```text
ejercicio_20/
├── index.html                                 # 🌐 Portal web interactivo principal de Clases en JS
├── README.md                                  # 📖 Este documento de inventario y guía pedagógica
│
├── manuales/                                  # 📄 Documentación oficial en PDF (60 páginas de material)
│   ├── README.md                              # Guía descriptiva de los manuales
│   ├── Manual_Clases_JavaScript.pdf           # 📘 Manual de referencia técnica (36 págs)
│   └── Practicas_Guiadas_Clases_JavaScript.pdf# 🛠️ Cuaderno de trabajo y rúbrica de prácticas (24 págs)
│
├── ejemplos/                                  # 📚 12 Ejemplos interactivos paso a paso
│   ├── index.html                             # Portal lanzador de los 12 ejemplos
│   ├── LEEME.txt                              # Instrucciones rápidas de Laragon y navegador
│   ├── README.md                              # Índice temático exhaustivo de cada demostración
│   ├── ejemplo-01-primera-clase/              # Mi primera clase (class, constructor, new)
│   ├── ejemplo-02-literal-vs-clase/           # Objeto literal frente a clase e instanceof
│   ├── ejemplo-03-metodos-y-this/             # Métodos de instancia, this y method chaining
│   ├── ejemplo-04-getters-y-setters/          # Getters y setters con validación estricta
│   ├── ejemplo-05-campos-privados/            # Campos y métodos privados (#) de ES2022
│   ├── ejemplo-06-miembros-estaticos/         # static: utilidades, contadores y constantes
│   ├── ejemplo-07-herencia/                   # Herencia: extends, super() y sobreescritura
│   ├── ejemplo-08-composicion/                # Composición: objetos que contienen otros objetos
│   ├── ejemplo-09-coleccion-de-objetos/       # Colecciones (Biblioteca) y métodos funcionales
│   ├── ejemplo-10-clases-y-json/              # toJSON() y factorías estáticas fromJSON()
│   ├── ejemplo-11-clase-y-dom-contador/       # Componentes de interfaz independientes con clase
│   └── ejemplo-12-clases-y-dom-tareas/        # Aplicación completa con persistencia en localStorage
│
└── practicas/                                 # 🧪 6 Prácticas guiadas para el alumno
    ├── index.html                             # Portal lanzador de las 6 prácticas
    ├── LEEME.txt                              # Instrucciones de realización para el alumno
    ├── README.md                              # Guía paso a paso con los TODOs y normas de entrega
    ├── practica-01-garaje-de-coches/          # Garaje interactivo (clase Coche y renderizado)
    ├── practica-02-cuenta-segura/             # Cuenta bancaria (#saldo, #pin, try...catch)
    ├── practica-03-figuras-geometricas/       # Herencia y polimorfismo (Figura, Circulo, Rectangulo)
    ├── practica-04-biblioteca/                # Composición y colecciones (Libro, Biblioteca)
    ├── practica-05-gestor-de-tareas/          # Persistencia real en localStorage con clases y JSON
    ├── practica-06-tienda-con-carrito/        # Reto Final: Tienda física/digital con carrito
    │
    └── soluciones_profesor/                   # 💡 Soluciones oficiales desarrolladas al 100%
        ├── README.md                          # Guía didáctica de consulta de soluciones
        ├── LEEME.txt                          # Nota de uso
        ├── practica-01-garaje-de-coches/
        ├── practica-02-cuenta-segura/
        ├── practica-03-figuras-geometricas/
        ├── practica-04-biblioteca/
        ├── practica-05-gestor-de-tareas/
        └── practica-06-tienda-con-carrito/
```

---

## 📄 Manuales Oficiales en PDF (`manuales/`)

En la subcarpeta [`manuales/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_20/manuales/) se encuentran los dos documentos maestros creados por el docente para el seguimiento del curso:

| Documento | Extensión | Descripción y Enfoque Didáctico |
| :--- | :---: | :--- |
| 📘 [**Manual_Clases_JavaScript.pdf**](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_20/manuales/Manual_Clases_JavaScript.pdf) | **36 páginas** | Manual de referencia técnica completo. Cubre desde los conceptos fundamentales hasta campos privados `#`, herencia con `super()`, composición, serialización JSON y 12 ejemplos comentados. |
| 🛠️ [**Practicas_Guiadas_Clases_JavaScript.pdf**](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_20/manuales/Practicas_Guiadas_Clases_JavaScript.pdf) | **24 páginas** | Cuaderno de trabajo del alumno. Contiene el planteamiento pedagógico, desglose de pasos `TODO`, casos de prueba y criterios de corrección de las 6 prácticas guiadas. |

---

## 📚 Índice de los 12 Ejemplos Didácticos (`ejemplos/`)

Cada ejemplo es un proyecto independiente estructurado en `index.html` (interfaz visual), `estilos.css` (hoja de estilos moderna comentada) y `script.js` (código fuente didáctico con consola y depuración en vivo):

| Nº | Carpeta | Conceptos Clave | Salida y Comportamiento |
| :---: | :--- | :--- | :--- |
| **01** | [`ejemplo-01-primera-clase/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_20/ejemplos/ejemplo-01-primera-clase/index.html) | `class Persona`, `constructor(nombre, edad)`, operador `new`. | Instancia personas y muestra sus atributos en tarjeta y consola. |
| **02** | [`ejemplo-02-literal-vs-clase/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_20/ejemplos/ejemplo-02-literal-vs-clase/index.html) | Comparativa entre objeto literal y clase. Operador `instanceof`. | Demuestra cómo la clase comparte la estructura y reduce la redundancia. |
| **03** | [`ejemplo-03-metodos-y-this/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_20/ejemplos/ejemplo-03-metodos-y-this/index.html) | Métodos con `this`, mutación de estado y encadenamiento (`return this`). | Simula una cuenta bancaria con operaciones encadenadas `.ingresar().retirar()`. |
| **04** | [`ejemplo-04-getters-y-setters/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_20/ejemplos/ejemplo-04-getters-y-setters/index.html) | Descriptores `get` y `set`. Validación de tipos y rangos de datos con `throw`. | Validación de notas numéricas entre 0 y 10 con propiedades computadas. |
| **05** | [`ejemplo-05-campos-privados/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_20/ejemplos/ejemplo-05-campos-privados/index.html) | Campos privados nativos (`#saldo`, `#pin`) y métodos privados (`#registrar()`). | Protección impenetrable de datos frente a accesos externos directos. |
| **06** | [`ejemplo-06-miembros-estaticos/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_20/ejemplos/ejemplo-06-miembros-estaticos/index.html) | Modificador `static`: métodos auxiliares, contador de instancias y constantes. | `MathUtils` y clase `Usuario` con recuento acumulado de registros activos. |
| **07** | [`ejemplo-07-herencia/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_20/ejemplos/ejemplo-07-herencia/index.html) | `extends`, `super()` en constructor, llamada a `super.metodo()` y polimorfismo. | Jerarquía `Vehiculo` -> `Coche` y `Moto` con sobreescritura de comportamiento. |
| **08** | [`ejemplo-08-composicion/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_20/ejemplos/ejemplo-08-composicion/index.html) | Relación "tiene-un". Delegación de responsabilidades entre objetos. | Un `Ordenador` compuesto por instancias de `Procesador`, `Memoria` y `Disco`. |
| **09** | [`ejemplo-09-coleccion-de-objetos/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_20/ejemplos/ejemplo-09-coleccion-de-objetos/index.html) | Manejo de colecciones de objetos con métodos funcionales (`filter`, `map`, `find`). | Clase `Biblioteca` que custodia y administra un catálogo de instancias `Libro`. |
| **10** | [`ejemplo-10-clases-y-json/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_20/ejemplos/ejemplo-10-clases-y-json/index.html) | Serialización con `toJSON()` y reconstrucción mediante factoría estática `fromJSON()`. | Guardar y revivir instancias completas de clases con sus métodos activos. |
| **11** | [`ejemplo-11-clase-y-dom-contador/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_20/ejemplos/ejemplo-11-clase-y-dom-contador/index.html) | Encapsulación de elementos HTML, eventos (`addEventListener`) y estado en la clase. | Múltiples contadores interactivos independientes montados en el DOM. |
| **12** | [`ejemplo-12-clases-y-dom-tareas/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_20/ejemplos/ejemplo-12-clases-y-dom-tareas/index.html) | Arquitectura de aplicación cliente completa con POO, DOM reactivo y `localStorage`. | Gestor de tareas profesional con filtrado, borrado, persistencia y estado. |

---

## 🧪 Prácticas Guiadas para el Alumnado (`practicas/`)

El modelo pedagógico adoptado permite que el estudiante se concentre exclusivamente en la lógica de programación orientada a objetos:
- La maquetación (`index.html`) y los estilos (`estilos.css`) se entregan **terminados**.
- El estudiante programa en **`script.js`**, siguiendo la lista de pasos comentados (`TODO PASO n`).
- La carpeta [`soluciones_profesor/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_20/practicas/soluciones_profesor/) contiene la resolución canónica de referencia.

| Práctica | Título del Proyecto | Archivo Alumno | Solución Profesor | Temario y Retos de la Práctica |
| :---: | :--- | :---: | :---: | :--- |
| **01** | **Garaje de Coches** | [`script.js`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_20/practicas/practica-01-garaje-de-coches/script.js) | [`script.js`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_20/practicas/soluciones_profesor/practica-01-garaje-de-coches/script.js) | Clase `Coche`, constructor con valores por defecto, método `recorrer(km)`, getter `antiguedad`, array de coches y renderizado DOM. |
| **02** | **Cuenta Bancaria Segura** | [`script.js`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_20/practicas/practica-02-cuenta-segura/script.js) | [`script.js`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_20/practicas/soluciones_profesor/practica-02-cuenta-segura/script.js) | Campos privados `#saldo` y `#pin`, validaciones con `throw new Error()`, captura con `try...catch` e historial inmutable. |
| **03** | **Figuras Geométricas** | [`script.js`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_20/practicas/practica-03-figuras-geometricas/script.js) | [`script.js`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_20/practicas/soluciones_profesor/practica-03-figuras-geometricas/script.js) | Jerarquía con herencia (`Figura` -> `Circulo`, `Rectangulo` -> `Cuadrado`), `super()`, polimorfismo en `area()` / `perimetro()` y `static comparar()`. |
| **04** | **Biblioteca de Libros** | [`script.js`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_20/practicas/practica-04-biblioteca/script.js) | [`script.js`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_20/practicas/soluciones_profesor/practica-04-biblioteca/script.js) | Composición de clases (`Libro` y `Biblioteca`), gestión de préstamos, búsquedas con `.filter()`, devoluciones y método `toString()`. |
| **05** | **Gestor de Tareas con JSON** | [`script.js`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_20/practicas/practica-05-gestor-de-tareas/script.js) | [`script.js`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_20/practicas/soluciones_profesor/practica-05-gestor-de-tareas/script.js) | Clases `Tarea` y `GestorTareas`, serialización con `toJSON()`, factoría `static fromJSON()`, persistencia real en `localStorage` y filtros DOM. |
| **06** | **Tienda con Carrito (Reto Final)** | [`script.js`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_20/practicas/practica-06-tienda-con-carrito/script.js) | [`script.js`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_20/practicas/soluciones_profesor/practica-06-tienda-con-carrito/script.js) | Herencia (`Producto` -> `ProductoFisico` vs `ProductoDigital`), composición (`LineaCarrito` y `Carrito`), gastos de envío calculados, cupones de descuento y totales. |

---

## 🚀 Cómo Trabajar y Probar los Proyectos

1. **Entorno Recomendado**:
   - Abrir la carpeta del curso en **Visual Studio Code**.
   - Se puede servir a través de un servidor local (ej. Apache en Laragon en `http://localhost/confeccion2026/ejemplos/iniciales/ejercicio_20/`) o mediante la extensión **Live Server** de VS Code.
2. **Ciclo de Trabajo del Alumno**:
   - Abrir el archivo `script.js` de la práctica deseada.
   - Leer atentamente el **enunciado** y la lista de **TODOs** situados en la cabecera.
   - Programar cada paso de forma incremental, guardando con `Ctrl + S`.
   - Recargar la página con `F5` y verificar los resultados en la interfaz y en la **Consola de Desarrollador (F12)**.
3. **Consulta de Soluciones**:
   - Si el estudiante se atasca, el profesor puede orientarle consultando la implementación canónica en `practicas/soluciones_profesor/[nombre-practica]/script.js`.
