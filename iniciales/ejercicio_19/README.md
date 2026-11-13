# 📦 Ejercicio 19: Iniciación a Objetos Literales en JavaScript (Nivel Básico)

**Curso:** Confección y Publicación de Páginas Web (IFCD0110)  
**Profesor:** Ramón Abramo · Santander (Cantabria) · Curso 2026  
**Módulo:** Programación Web Frontend con JavaScript (ES6+)

---

## 🎯 Presentación y Objetivos Didácticos

El **Ejercicio 19** está diseñado con un **enfoque de iniciación elemental**, centrado exclusivamente en que el alumno asimile el concepto de **Objeto en JavaScript** sin sobrecargar el código ni añadir complejidades teóricas innecesarias (sin cierres léxicos complejos, sin metaprogramación ni patrones abstractos).

A lo largo de este ejercicio, los alumnos aprenden:
1. **La necesidad de los objetos:** Comprender por qué pasar de variables sueltas (`nombreAlumno`, `edadAlumno`, `cursoAlumno`) a un objeto organizado (`const alumno = { ... }`) aporta orden, escalabilidad y claridad.
2. **Sintaxis de objeto literal `{}`:** Declaración mediante llaves, pares `clave: valor` y tipos de datos admitidos (cadenas, números, booleanos, arrays).
3. **Lectura de propiedades:** Notación de punto (`objeto.propiedad`) para el día a día y notación de corchetes (`objeto['propiedad']` o con variables `objeto[campo]`) para claves dinámicas o con caracteres especiales.
4. **Mutabilidad básica (CRUD):** Modificar valores existentes (`coche.color = "rojo"`), añadir nuevas propiedades en caliente (`coche.matricula = "1234-XYZ"`) y eliminar con el operador `delete`.
5. **Métodos y la palabra clave `this`:** Incorporar funciones como propiedades del objeto y entender de forma intuitiva que `this` hace referencia a *"este mismo objeto"*.
6. **Arrays de objetos:** Representar colecciones reales (catálogos de productos o listas de alumnos) y recorrerlas fácilmente con un bucle `for...of`.
7. **Conexión con el DOM:** Pintar las propiedades del objeto en etiquetas HTML y mantener la pantalla sincronizada cuando los métodos modifican el estado.

---

## 🗺️ Mapa Completo de Archivos y Carpetas

```text
ejercicio_19/
│
├── 🌐 index.html                                        <-- Portal web didáctico general del Ejercicio 19
├── 🎨 style.css                                         <-- Hoja de estilos del portal (tema oscuro)
├── 📜 app.js                                            <-- Lógica informativa del portal
├── 📖 README.md                                         <-- Este documento de inventario y guía pedagógica
│
├── 📑 manual_referencia_rapida.html                     <-- Fuente HTML maquetada en A4 (7 páginas)
├── 📑 practicas_guiadas.html                            <-- Fuente HTML maquetada en A4 (6 páginas)
│
├── 📕 Manual de Referencia Rápida - Objetos Literales en JavaScript.pdf  <-- PDF con portada, índice y marcadores (7 págs)
├── 📗 Prácticas Guiadas - Objetos Literales en JavaScript.pdf            <-- PDF con portada, índice y marcadores (6 págs)
│
├── 📂 manuales/                                         <-- Directorio con copias sincronizadas de los PDFs
│   ├── Manual de Referencia Rápida - Objetos Literales en JavaScript.pdf
│   └── Prácticas Guiadas - Objetos Literales en JavaScript.pdf
│
├── 🖼️ infografias/                                      <-- Infografías visuales de apoyo
│   ├── objetosLiteral.jpg                               <-- Estructura y sintaxis de objetos literales
│   └── objetosJSON.jpg                                  <-- Objeto JavaScript vs Formato JSON
│
├── 📂 ejemplos_manual/                                  <-- 6 Demostraciones interactivas del Manual Básico
│   ├── README.md                                        <-- Guía explicativa de los 6 ejemplos
│   ├── 01_producto_basico/                              <-- Creación {}, lectura punto/corchetes, delete
│   ├── 02_cuenta_bancaria/                              <-- Métodos con this, validación y saldo
│   ├── 03_estudiante_anidado/                           <-- Objetos anidados, arrays y cálculo de media
│   ├── 04_catalogo_arrays/                              <-- Arrays de objetos y bucle for...of
│   ├── 05_claves_y_json/                                <-- Object.keys, JSON.stringify/parse y Storage
│   └── 06_objeto_interactivo_dom/                       <-- Mascota virtual interactiva sincronizada con el DOM
│
└── 📂 practicas/                                        <-- Cuaderno de Prácticas Guiadas para el Alumno
    ├── README.md                                        <-- Enunciados y pautas didácticas
    ├── practica_01_alumno/                              <-- Práctica 1: Ficha del Alumno (plantilla app.js con TODOs)
    ├── practica_02_catalogo/                            <-- Práctica 2: Mini-Catálogo (plantilla app.js con TODOs)
    └── soluciones/                                      <-- Soluciones Oficiales del Profesor
        ├── README.md                                    <-- Guía de soluciones
        ├── practica_01_alumno/                          <-- Solución 1 resuelta y funcional
        └── practica_02_catalogo/                        <-- Solución 2 resuelta y funcional
```

---

## 📚 Documentos Oficiales en PDF

Los dos manuales han sido generados mediante motor headless con diseño editorial para impresión A4, contando con:
- **Portada dedicada** con créditos institucionales y credenciales docentes de Ramón Abramo.
- **Índice interactivo navegable** con hipervínculos internos entre páginas.
- **Panel lateral de marcadores (TOC / Outlines)** integrado en el PDF para lectores compatibles.
- **Iconografía con emojis** en títulos y bloques de código.

1. **[`Manual de Referencia Rápida - Objetos Literales en JavaScript.pdf`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/Manual%20de%20Referencia%20R%C3%A1pida%20-%20Objetos%20Literales%20en%20JavaScript.pdf)** (7 páginas):
   - *Pág 1:* Portada institucional.
   - *Pág 2:* Índice general y motivación: ¿Por qué necesitamos objetos frente a variables sueltas?
   - *Pág 3:* Lectura de propiedades: Notación de punto vs notación de corchetes.
   - *Pág 4:* Modificar, añadir y borrar propiedades (CRUD básico y operador `delete`).
   - *Pág 5:* Métodos sencillos y la palabra reservada `this`.
   - *Pág 6:* Arrays de objetos: Colecciones y recorrido con `for...of`.
   - *Pág 7:* Mostrar objetos en el DOM y resumen de los 4 errores típicos de principiantes.

2. **[`Prácticas Guiadas - Objetos Literales en JavaScript.pdf`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/Pr%C3%A1cticas%20Guiadas%20-%20Objetos%20Literales%20en%20JavaScript.pdf)** (6 páginas):
   - *Pág 1:* Portada oficial de prácticas.
   - *Pág 2:* Índice general e instrucciones metodológicas de trabajo.
   - *Pág 3:* **Práctica 1 (Enunciado):** Ficha interactiva del alumno con métodos de media y estado.
   - *Pág 4:* **Práctica 1 (Solución):** Guía paso a paso y código completo comentado.
   - *Pág 5:* **Práctica 2 (Enunciado):** Mini-catálogo de papelería con array de objetos y venta de stock.
   - *Pág 6:* **Práctica 2 (Solución):** Guía paso a paso y código completo comentado.

---

## 🚀 Demostraciones del Manual (`ejemplos_manual/`)

| Nº | Carpeta | Título | Conceptos Clave |
| :---: | :--- | :--- | :--- |
| **01** | [`01_producto_basico/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/ejemplos_manual/01_producto_basico/) | 🏷️ Objeto Producto Básico | Creación literal, lectura punto/corchetes, mutación y `delete`. |
| **02** | [`02_cuenta_bancaria/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/ejemplos_manual/02_cuenta_bancaria/) | 💳 Cuenta Bancaria y `this` | Métodos con `this.saldo`, validación de fondos y depósitos. |
| **03** | [`03_estudiante_anidado/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/ejemplos_manual/03_estudiante_anidado/) | 🎓 Expediente del Estudiante | Objetos anidados (`direccion`), arrays internos y método de media. |
| **04** | [`04_catalogo_arrays/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/ejemplos_manual/04_catalogo_arrays/) | 🛍️ Catálogo en Array | Colección de objetos, bucle `for...of` y renderizado en tarjetas. |
| **05** | [`05_claves_y_json/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/ejemplos_manual/05_claves_y_json/) | 🔤 Claves y JSON | `Object.keys()`, `JSON.stringify()`, `JSON.parse()` y Storage. |
| **06** | [`06_objeto_interactivo_dom/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/ejemplos_manual/06_objeto_interactivo_dom/) | 🐾 Mascota Virtual y DOM | Estado interno dinámico, métodos reactivos y actualización de barras en la web. |

---

## 🧪 Prácticas Guiadas del Alumno (`practicas/`)

| Práctica | Nombre | Plantilla Alumno | Solución Docente | Enfoque Didáctico |
| :---: | :--- | :---: | :---: | :--- |
| **01** | **Ficha del Alumno** | [`app.js`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/practicas/practica_01_alumno/app.js) | [`appSolucion.js`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/practicas/practica_01_alumno/appSolucion.js) | Objeto `alumno`, cálculo de media con `this`, estado y botón para subir notas. |
| **02** | **Mini-Catálogo de Productos** | [`app.js`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/practicas/practica_02_catalogo/app.js) | [`appSolucion.js`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_19/practicas/practica_02_catalogo/appSolucion.js) | Array de 3 productos, `for...of`, venta de unidades (`stock--`) y formulario de alta (`push`). |

---

## 💡 Cómo Alternar entre Plantilla y Solución

En el archivo `index.html` de cada práctica se encuentra la vinculación del script al final del `<body>`:

```html
<!-- Por defecto se ejecuta la plantilla del alumno con los TODOs: -->
<script src="app.js"></script>

<!-- Para revisar la solución oficial completa, descomenta: -->
<!-- <script src="appSolucion.js"></script> -->
```
