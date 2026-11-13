# 📦 Ejercicio 18: Objetos Literales en JavaScript
## Curso de Confección y Publicación de Páginas Web · Módulo Inicial
**Profesor:** Ramón Abramo · *Más de 25 años de experiencia docente*

Bienvenido a la carpeta del **Ejercicio 18**, dedicado íntegramente al aprendizaje y dominio de los **Objetos en Notación Literal** en JavaScript, el modelado de entidades reales con propiedades y métodos mediante `this`, estructuras anidadas, colecciones con arrays de objetos, control de privacidad mediante clausuras (Patrón Módulo) y serialización con el formato estándar de intercambio **JSON**.

---

### 🗺️ Mapa Completo de Archivos y Carpetas

```
ejercicio_18/
│
├── 📄 index.html                                        <-- Portal web interactivo general del Ejercicio 18
├── 🎨 style.css                                         <-- Estilos modernos del portal (tema oscuro)
├── 📜 app.js                                            <-- Lógica del laboratorio interactivo en memoria
│
├── 🖼️ infografias/                                      <-- Infografías visuales de apoyo al estudio
│   ├── objetosLiteral.jpg                               <-- Estructura y sintaxis de objetos literales
│   └── objetosJSON.jpg                                  <-- Objeto JavaScript vs Formato JSON
│
├── 📑 manual_referencia_rapida.html                     <-- Fuente HTML maquetada en A4 (7 páginas)
├── 📑 practicas_guiadas.html                            <-- Fuente HTML maquetada en A4 (6 páginas)
│
├── 📕 Manual de Referencia Rápida - Objetos Literales en JavaScript.pdf  <-- PDF con portada, índice y marcadores
├── 📗 Prácticas Guiadas - Objetos Literales en JavaScript.pdf            <-- PDF con portada, índice y marcadores
│
├── 📂 manuales/                                         <-- Directorio de manuales PDF sincronizados
│   ├── Manual de Referencia Rápida - Objetos Literales en JavaScript.pdf
│   └── Prácticas Guiadas - Objetos Literales en JavaScript.pdf
│
├── 📂 ejemplos_manual/                                  <-- 6 Demostraciones interactivas del Manual
│   ├── README.md                                        <-- Guía explicativa de cada demo interactiva
│   ├── 01_producto_basico/                              <-- Sintaxis literal, dot/bracket notation y delete
│   ├── 02_cuenta_bancaria/                              <-- Métodos con this, validación y saldo bancario
│   ├── 03_estudiante_anidado/                           <-- Objetos y arrays anidados + cálculo de media
│   ├── 04_catalogo_arrays/                              <-- Arrays de objetos, for...of, filtros y ordenación
│   ├── 05_claves_y_json/                                <-- Object.keys/values, JSON.stringify/parse y Storage
│   └── 06_privacidad_modulo/                            <-- Convención _ vs Privacidad REAL con IIFE/Clausura
│
└── 📂 practicas/                                        <-- Cuaderno de Prácticas de Aula para el Alumno
    ├── README.md                                        <-- Enunciados, pautas didácticas y objetivos
    ├── practica_01_personaje/                           <-- Plantilla Alumno: Ficha de Personaje (Videojuego)
    ├── practica_02_carrito/                             <-- Plantilla Alumno: Cesta de Compra con Objetos
    └── soluciones/                                      <-- Soluciones Oficiales Comentadas del Profesor
        ├── README.md                                    <-- Resumen de las soluciones
        ├── practica_01_personaje/                       <-- Solución resuelta completa
        └── practica_02_carrito/                         <-- Solución resuelta completa
```

---

### 📚 1. Documentación Oficial y Manuales PDF Mejorados

Ambos documentos cuentan con **portada dedicada de alto impacto**, **índice interactivo navegable con hipervínculos internos**, **panel lateral de marcadores nativos (TOC / Outlines)** y formato tipográfico adaptado para visualización en pantalla e impresión A4:

1. **[`Manual de Referencia Rápida - Objetos Literales en JavaScript.pdf`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_18/Manual%20de%20Referencia%20R%C3%A1pida%20-%20Objetos%20Literales%20en%20JavaScript.pdf) (7 páginas):**
   * *Pág 1:* Portada institucional con resumen de competencias y credenciales docentes.
   * *Pág 2:* Índice general interactivo, concepto de objeto literal y tabla de terminología básica.
   * *Pág 3:* Miembros públicos y privacidad: por qué `#campo` no funciona en objetos literales, convención `_` y privacidad REAL mediante IIFE (Patrón Módulo).
   * *Pág 4:* Ejemplo 1: Manipulación de Objeto Producto (notación de punto vs corchetes, adición y operador `delete`).
   * *Pág 5:* Ejemplo 2: Métodos y palabra reservada `this` (Cuenta Bancaria y por qué `saldo` sin `this.` lanza `ReferenceError`).
   * *Pág 6:* Ejemplos 3 y 4: Estructuras anidadas (Expediente de Estudiante) y catálogos con arrays de objetos recorridos con `for...of`.
   * *Pág 7:* Ejemplo 5 (Inspección con `Object.keys()` y serialización JSON) y tabla del **Top 5 errores frecuentes de aula**.

2. **[`Prácticas Guiadas - Objetos Literales en JavaScript.pdf`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_18/Pr%C3%A1cticas%20Guiadas%20-%20Objetos%20Literales%20en%20JavaScript.pdf) (6 páginas):**
   * *Pág 1:* Portada dedicada con presentación del taller práctico de desarrollo web cliente.
   * *Pág 2:* Índice general de prácticas, instrucciones de aula y gran tabla comparativa: **Variables sueltas vs Objetos en Notación Literal**.
   * *Pág 3:* Práctica 1: Enunciado de la Ficha de Personaje, objetivos didácticos y código base HTML/CSS.
   * *Pág 4:* Práctica 1: Guía de desarrollo paso a paso y solución oficial comentada con sintaxis resaltada.
   * *Pág 5:* Práctica 2: Enunciado del Carrito de la Compra, por qué descartar arrays paralelos y código base HTML/CSS.
   * *Pág 6:* Práctica 2: Guía de desarrollo, solución oficial comentada y **Gran Rúbrica de Verificación y Autoevaluación**.

---

### 🧪 2. Demostraciones Prácticas del Manual (`ejemplos_manual/`)

Cada sección teórica cuenta con una aplicación web completa y ejecutable:

| Directorio | Título Didáctico | Conceptos JavaScript Clave |
| :--- | :--- | :--- |
| **[`01_producto_basico/`](ejemplos_manual/01_producto_basico/)** | 🏷️ Objeto Producto Básico | Declaración literal `{}`, pares `clave: valor`, acceso punto y corchetes, adición dinámica y `delete`. |
| **[`02_cuenta_bancaria/`](ejemplos_manual/02_cuenta_bancaria/)** | 💳 Cajero y Cuenta Bancaria | Métodos abreviados, palabra reservada `this`, modificación de propiedades propias y validación de saldo. |
| **[`03_estudiante_anidado/`](ejemplos_manual/03_estudiante_anidado/)** | 🎓 Expediente del Estudiante | Objetos anidados (`estudiante.direccion.ciudad`), arrays internos y cálculo de media sobre listas propias. |
| **[`04_catalogo_arrays/`](ejemplos_manual/04_catalogo_arrays/)** | 🛍️ Catálogo de Tienda (Colección) | Arrays de objetos literales, bucles `for...of`, filtrado por disponibilidad y ordenación por precio. |
| **[`05_claves_y_json/`](ejemplos_manual/05_claves_y_json/)** | 🔤 Inspección y Formato JSON | `Object.keys()`, `Object.values()`, serialización `JSON.stringify()`, `JSON.parse()` y persistencia con `localStorage`. |
| **[`06_privacidad_modulo/`](ejemplos_manual/06_privacidad_modulo/)** | 🔐 Privacidad y Patrón Módulo | Convención de guion bajo `_` frente a clausura real mediante IIFE (Immediately Invoked Function Expression). |

---

### 🛠️ 3. Prácticas Guiadas de Aula (`practicas/`)

1. **[`practica_01_personaje/`](practicas/practica_01_personaje/)**:
   * **Objetivo:** Encapsular los datos y comportamientos de un héroe de videojuego en un objeto literal `personaje` con propiedades (`nombre`, `clase`, `nivel`, `vida`) y métodos (`recibirDanio`, `curar`, `subirNivel`).
   * **Plantilla Alumno:** Código con pasos numerados `// PASO 1: ...` listos para programar.
   * **Solución Oficial:** Localizada en [`practicas/soluciones/practica_01_personaje/`](practicas/soluciones/practica_01_personaje/) y en [`../../soluciones/ejercicio_18/practica_01_personaje/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/soluciones/ejercicio_18/practica_01_personaje/).

2. **[`practica_02_carrito/`](practicas/practica_02_carrito/)**:
   * **Objetivo:** Construir una cesta de la compra dinámica gestionada mediante un único array `carrito = []` de objetos literales, cada uno con su propio método `subtotal() { return this.precio * this.cantidad; }`.
   * **Plantilla Alumno:** Formulario para añadir artículos y función `dibujarCarrito()` guiada.
   * **Solución Oficial:** Localizada en [`practicas/soluciones/practica_02_carrito/`](practicas/soluciones/practica_02_carrito/) y en [`../../soluciones/ejercicio_18/practica_02_carrito/`](file:///d:/Ramon/www/confeccion2026/ejemplos/iniciales/soluciones/ejercicio_18/practica_02_carrito/).

---

### 💡 4. Resumen Teórico Rápido

| Concepto | Sintaxis / Código | ¿Para qué sirve? |
| :--- | :--- | :--- |
| **Declaración literal** | `const obj = { clave: valor };` | Crea un objeto en memoria con sus propiedades iniciales. |
| **Lectura por punto** | `obj.nombre` | Notación preferida, limpia y directa. |
| **Lectura por corchete** | `obj[variableClave]` | Permite evaluar variables dinámicas o nombres con caracteres especiales. |
| **Añadir propiedad** | `obj.nuevaClave = "dato";` | Inserta dinámicamente una nueva propiedad en cualquier momento. |
| **Borrar propiedad** | `delete obj.clave;` | Elimina la propiedad y su valor del objeto. |
| **Método con `this`** | `saludar() { return this.nombre; }` | Define un comportamiento propio que accede al estado interno del objeto. |
| **Listar claves** | `Object.keys(obj)` | Devuelve un array con los nombres de todas las propiedades del objeto. |
| **Serializar a JSON** | `JSON.stringify(obj)` | Transforma el objeto JS en una cadena de texto para enviar a red o guardar. |
| **Deserializar JSON** | `JSON.parse(textoJSON)` | Reconstruye un objeto vivo en memoria a partir de una cadena JSON válida. |
