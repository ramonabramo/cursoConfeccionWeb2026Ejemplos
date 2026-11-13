# 📦 Ejercicio 19: Objetos en Notación Literal en JavaScript

**Curso:** Confección y Publicación de Páginas Web (IFCD0110)  
**Profesor:** Ramón Abramo  
**Ubicación:** Santander, Cantabria · Curso 2026  
**Tecnologías:** HTML5, CSS3, JavaScript (ES6+), LocalStorage, JSON, Closures

---

## 🎯 Presentación y Objetivos Didácticos

El **Ejercicio 19** aborda en profundidad uno de los pilares fundamentales del desarrollo profesional en JavaScript: los **Objetos en Notación Literal (`{}`)**.

A lo largo de este módulo formativo, los alumnos aprenden a:
1. Modelar entidades de datos del mundo real mediante sintaxis de pares clave-valor.
2. Dominar las diferencias críticas entre la notación de punto (`obj.prop`) y la notación de corchetes (`obj['clave']`).
3. Modificar dinámicamente objetos en tiempo de ejecución (adición, sobreescritura y borrado con `delete`).
4. Definir métodos miembros y comprender el enlace contextual de la palabra clave `this` (y por qué evitar funciones flecha en métodos).
5. Trabajar con estructuras complejas: objetos anidados y colecciones masivas (**arrays de objetos**) mediante programación funcional (`.map()`, `.filter()`, `.find()`).
6. Gestionar la memoria en JavaScript: entender la **mutación por referencia (`b = a`)**, el límite de las copias superficiales (**Spread `{ ...a }`**) y la clonación profunda real con **`structuredClone()`**.
7. Aplicar la sintaxis moderna ES6+: **desestructuración de objetos**, alias, valores por defecto, operador **Rest** y fusión con **Spread**.
8. Implementar encapsulamiento y control de acceso: **Getters y Setters**, validación en tiempo de asignación, inmutabilidad con `Object.freeze()` y **verdadera privacidad mediante Clausuras (Closures) y funciones factoría**.
9. Serializar estructuras con **JSON** (`JSON.stringify()`, `JSON.parse()`) y persistirlas en el navegador mediante **LocalStorage**.

---

## 🧭 Estructura del Directorio

```text
ejercicio_19/
├── index.html                           # 🌐 Portal web interactivo principal con buscador y filtros
├── style.css                            # 🎨 Estilos modernos del dashboard
├── app.js                               # ⚙️ Lógica reactiva de filtrado y búsqueda del portal
├── README.md                            # 📖 Este documento de inventario y guía didáctica
│
├── files/                               # 📄 Manuales oficiales (conservados intactos)
│   ├── Manual_Objetos_Literales_JavaScript.pdf
│   └── Practicas_Guiadas_Objetos_Literales_JavaScript.pdf
│
├── ejemplos/                            # 📚 12 Ejemplos interactivos del manual teórico
│   ├── README.md                        # Índice descriptivo de los 12 ejemplos
│   ├── 01_creacion_y_anatomia/          # Ejemplo 01: Creación básica y tipos
│   ├── 02_tipos_y_claves/               # Ejemplo 02: Claves válidas, espacios y guiones
│   ├── 03_lectura_y_acceso/             # Ejemplo 03: Punto, corchetes y encadenamiento opcional
│   ├── 04_modificar_y_borrar/           # Ejemplo 04: Adición, reasignación y delete
│   ├── 05_metodos_y_this/               # Ejemplo 05: Métodos, contexto this y arrow functions
│   ├── 06_objetos_anidados/             # Ejemplo 06: Objetos dentro de objetos
│   ├── 07_arrays_de_objetos/            # Ejemplo 07: Colecciones y métodos funcionales
│   ├── 08_recorrer_objetos/             # Ejemplo 08: for...in, keys, values, entries
│   ├── 09_referencias_y_copias/         # Ejemplo 09: Referencias, spread y structuredClone
│   ├── 10_desestructuracion_spread/     # Ejemplo 10: Desestructuración ES6+, rest y fusión
│   ├── 11_getters_setters_privacidad/   # Ejemplo 11: Get/Set, validación, closures, freeze
│   └── 12_json_y_localstorage/          # Ejemplo 12: Serialización y persistencia en navegador
│
└── practicas/                           # 🧪 5 Prácticas guiadas con plantilla de alumno y solución
    ├── README.md                        # Guía de prácticas y alternancia de scripts
    ├── 01_consola/                      # Práctica 1: Primeros pasos en consola con objeto 'libro'
    ├── 02_personaje/                    # Práctica 2: Ficha interactiva de personaje de videojuego
    ├── 03_carrito/                      # Práctica 3: Carrito de compras con subtotales y totales
    ├── 04_agenda/                       # Práctica 4: Agenda de contactos con JSON y LocalStorage
    └── 05_reto/                         # Reto Final: Cuenta bancaria con saldo privado y clausuras
```

---

## 📚 Índice de Ejemplos del Manual

Cada ejemplo dispone de su propio archivo `index.html`, hoja de estilos `style.css` y script `app.js` interactivo con consola integrada:

| Nº | Ejemplo | Enlace al Código | Descripción Pedagógica |
| :---: | :--- | :--- | :--- |
| **01** | Creación y Anatomía | [`01_creacion_y_anatomia/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/ejemplos/01_creacion_y_anatomia/) | Sintaxis literal `{...}`, pares clave-valor, tipos primitivos y complejos. |
| **02** | Tipos y Nombres de Claves | [`02_tipos_y_claves/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/ejemplos/02_tipos_y_claves/) | Identificadores permitidos, claves especiales con espacios o guiones. |
| **03** | Lectura y Acceso | [`03_lectura_y_acceso/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/ejemplos/03_lectura_y_acceso/) | Comparativa `obj.prop` vs `obj['prop']`, claves dinámicas y operador `?.`. |
| **04** | Modificar y Borrar | [`04_modificar_y_borrar/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/ejemplos/04_modificar_y_borrar/) | Mutabilidad en caliente, nuevas propiedades y uso del operador `delete`. |
| **05** | Métodos y `this` | [`05_metodos_y_this/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/ejemplos/05_metodos_y_this/) | Invocación de métodos, enlace contextual de `this` y comportamiento de flechas. |
| **06** | Objetos Anidados | [`06_objetos_anidados/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/ejemplos/06_objetos_anidados/) | Estructuras en árbol, acceso jerárquico y prevención de errores. |
| **07** | Arrays de Objetos | [`07_arrays_de_objetos/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/ejemplos/07_arrays_de_objetos/) | Catálogos y listados, filtrado y transformación con `.map()`, `.filter()`, `.find()`. |
| **08** | Recorrer Objetos | [`08_recorrer_objetos/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/ejemplos/08_recorrer_objetos/) | Bucle `for...in` vs `Object.keys()`, `Object.values()` y `Object.entries()`. |
| **09** | Referencias y Copias | [`09_referencias_y_copias/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/ejemplos/09_referencias_y_copias/) | Mutabilidad por referencia (`b = a`), copia superficial (`{ ...a }`) y profunda (`structuredClone()`). |
| **10** | Desestructuración y Spread | [`10_desestructuracion_spread/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/ejemplos/10_desestructuracion_spread/) | Extracción limpia `{ a, b }`, alias, valores por defecto, Rest `...rest` y fusión. |
| **11** | Getters, Setters y Privacidad | [`11_getters_setters_privacidad/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/ejemplos/11_getters_setters_privacidad/) | Getters computados, validación estricta con setter, factorías/closures y `Object.freeze()`. |
| **12** | JSON y LocalStorage | [`12_json_y_localstorage/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/ejemplos/12_json_y_localstorage/) | `JSON.stringify()`, `JSON.parse()`, pérdidas de datos y almacenamiento persistente. |

---

## 🧪 Directorio de Prácticas Guiadas y Reto

Cada práctica contiene la interfaz HTML/CSS completa, la plantilla para el estudiante con instrucciones comentadas y `TODO`s (`app.js`), y la solución oficial del docente (`appSolucion.js`):

| Práctica | Nombre | Plantilla Alumno | Solución Docente | Reto Didáctico |
| :---: | :--- | :---: | :---: | :--- |
| **01** | Primeros pasos (Consola) | [`app.js`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/practicas/01_consola/app.js) | [`appSolucion.js`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/practicas/01_consola/appSolucion.js) | Objeto `libro`, CRUD de propiedades, comprobación `in` y método con `this`. |
| **02** | Ficha de Personaje RPG | [`app.js`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/practicas/02_personaje/app.js) | [`appSolucion.js`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/practicas/02_personaje/appSolucion.js) | Métodos mutadores interactivos vinculados a botones del DOM (`recibirDanio`, `curar`). |
| **03** | Carrito de la Compra | [`app.js`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/practicas/03_carrito/app.js) | [`appSolucion.js`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/practicas/03_carrito/appSolucion.js) | Colección de objetos con método `subtotal()`, renderizado dinámico y acumuladores. |
| **04** | Agenda con LocalStorage | [`app.js`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/practicas/04_agenda/app.js) | [`appSolucion.js`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/practicas/04_agenda/appSolucion.js) | CRUD completo con persistencia en `localStorage`, serialización JSON y buscador. |
| **05** | Reto: Cuenta con Saldo Privado | [`app.js`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/practicas/05_reto/app.js) | [`appSolucion.js`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/practicas/05_reto/appSolucion.js) | Clausura e IIFE para encapsular el saldo privado (`cuenta.saldo === undefined`). |

---

## 💡 Cómo Alternar entre Plantilla y Solución

En el archivo `index.html` de cada práctica, al final de la etiqueta `<body>` se encuentra la vinculación del script:

```html
<!-- Por defecto se ejecuta la plantilla del alumno con los TODOs: -->
<script src="app.js"></script>

<!-- Para revisar la solución completa del profesor, descomenta: -->
<!-- <script src="appSolucion.js"></script> -->
```

---

## 📄 Documentos de Referencia Oficiales (PDFs)

Ubicados en la carpeta [`files/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/files/):
1. **[Manual_Objetos_Literales_JavaScript.pdf](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/files/Manual_Objetos_Literales_JavaScript.pdf)**: Manual de referencia técnica de 27 páginas con explicaciones detalladas y diagramas conceptuales.
2. **[Practicas_Guiadas_Objetos_Literales_JavaScript.pdf](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/files/Practicas_Guiadas_Objetos_Literales_JavaScript.pdf)**: Cuaderno de trabajo de 19 páginas para el alumno con los pasos de cada práctica y los criterios de evaluación.
