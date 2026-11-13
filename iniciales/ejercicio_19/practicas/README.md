# 🛠️ Cuaderno de Prácticas de Aula · Ejercicio 19

**Curso:** Confección y Publicación de Páginas Web (IFCD0110)  
**Profesor:** Ramón Abramo · Santander (Cantabria) · Curso 2026  
**Nivel:** Iniciación Práctica a Objetos Literales en JavaScript

---

## 🎯 Metodología del Taller

Este cuaderno reúne los **ejercicios prácticos de nivel básico** para asentar las bases del trabajo con objetos en JavaScript. Cada práctica está diseñada para resolver una situación real sin complicar la sintaxis ni introducir abstracciones prematuras:

- **Enfoque directo:** El alumno se concentra en cómo estructurar datos con pares `clave: valor` y cómo invocar métodos internos con `this`.
- **Plantilla con `TODO`s (`app.js`):** El alumno dispone del archivo comentado paso a paso para completar solo la lógica requerida.
- **Solución oficial del profesor (`appSolucion.js`):** Incluida en la propia carpeta y en [`soluciones/`](soluciones/).

---

## 📂 Directorio de Prácticas

| Práctica | Nombre | Objetivos Didácticos | Plantilla | Solución |
| :---: | :--- | :--- | :---: | :---: |
| **01** | **Ficha del Alumno** | Objeto literal `alumno`, propiedades simples, método `calcularMedia()` con `this`, método `obtenerEstado()` y botón para subir notas. | [`01_alumno/app.js`](practica_01_alumno/app.js) | [`01_alumno/appSolucion.js`](practica_01_alumno/appSolucion.js) |
| **02** | **Mini-Catálogo de Productos** | Array de objetos literales, recorrido con `for...of`, renderizado dinámico en el DOM, botón para restar stock y formulario de alta (`push`). | [`02_catalogo/app.js`](practica_02_catalogo/app.js) | [`02_catalogo/appSolucion.js`](practica_02_catalogo/appSolucion.js) |

---

## 💡 Cómo Alternar entre la Plantilla del Alumno y la Solución

En cada archivo `index.html` de las prácticas, en las últimas líneas del `<body>`:

```html
<!-- Por defecto se ejecuta el archivo de trabajo del alumno: -->
<script src="app.js"></script>

<!-- Para revisar la solución oficial resuelta, cambia la línea a: -->
<!-- <script src="appSolucion.js"></script> -->
```
