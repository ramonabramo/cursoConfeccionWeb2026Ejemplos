# 📄 Manuales y Documentación Oficial · Ejercicio 20

**Módulo:** Programación Web en Entorno Cliente (IFCD0110)  
**Profesor:** Ramón Abramo · ALPE Formación · Santander · Curso 2026  
**Materia:** Clases y Programación Orientada a Objetos en JavaScript (ES6+ / ES2022)

---

## 📚 Documentos Disponibles en este Directorio

Este directorio contiene los dos manuales formativos oficiales en formato PDF desarrollados para el aprendizaje de las clases en JavaScript:

### 1. [Manual_Clases_JavaScript.pdf](Manual_Clases_JavaScript.pdf)
* **Extensión:** 36 páginas
* **Tipo:** Manual de referencia técnica y conceptual
* **Contenido Temático:**
  - **Tema 00:** Cómo usar este manual, entorno de trabajo (Laragon / Visual Studio Code / Navegador F12).
  - **Tema 01:** Qué es una clase y por qué la necesitamos (el problema de la duplicación en objetos literales).
  - **Tema 02:** Anatomía de una clase: `class`, `constructor()`, operador `new` y atributos de instancia.
  - **Tema 03:** Métodos de instancia, enlace del puntero `this` y encadenamiento de métodos (*method chaining* con `return this`).
  - **Tema 04:** Getters y setters: sintaxis `get` y `set`, propiedades computadas y validación de tipos/rangos con `throw new Error()`.
  - **Tema 05:** Campos y métodos privados con `#` (estándar ES2022): encapsulación impenetrable sin trucos de closures.
  - **Tema 06:** Miembros estáticos (`static`): métodos de utilidad, contadores de instancias y constantes de clase.
  - **Tema 07:** Herencia y reutilización de código: `extends`, constructor derivado con `super()`, llamada a métodos padre y polimorfismo.
  - **Tema 08:** Composición sobre herencia: relaciones "tiene-un" (*has-a*) y delegación entre objetos.
  - **Tema 09:** Colecciones de objetos: gestión de catálogos y colecciones mediante programación funcional (`filter`, `map`, `find`, `reduce`).
  - **Tema 10:** Clases y JSON: resolver la pérdida de métodos de `JSON.stringify()`, implementación de `toJSON()` y factorías `static fromJSON()`.
  - **Tema 11:** Clases como componentes UI: encapsulación de elementos HTML, eventos (`addEventListener`) y estado reactivo.
  - **Tema 12:** Arquitectura cliente completa: aplicación de gestión con POO, DOM reactivo y persistencia en `localStorage`.

---

### 2. [Practicas_Guiadas_Clases_JavaScript.pdf](Practicas_Guiadas_Clases_JavaScript.pdf)
* **Extensión:** 24 páginas
* **Tipo:** Cuaderno de trabajo y guía de prácticas para el alumno
* **Contenido Temático:**
  - Hoja de ruta didáctica del módulo de clases.
  - **Práctica 1:** Garaje de coches (clase `Coche`, constructor, método `recorrer`, getter `antiguedad` y renderizado DOM).
  - **Práctica 2:** Cuenta bancaria segura (campos privados `#saldo`, `#pin`, validaciones con `throw` y captura con `try...catch`).
  - **Práctica 3:** Figuras geométricas (jerarquía de herencia con `Figura`, `Circulo`, `Rectangulo` y `Cuadrado`, polimorfismo y estáticos).
  - **Práctica 4:** Biblioteca de libros (composición de clases `Libro` y `Biblioteca`, préstamos, devoluciones y búsquedas).
  - **Práctica 5:** Gestor de tareas con JSON (clases `Tarea` y `GestorTareas`, `toJSON()`, `static fromJSON()`, persistencia real en `localStorage`).
  - **Práctica 6 (Reto Final):** Tienda con carrito (herencia `ProductoFisico` vs `ProductoDigital`, composición `LineaCarrito` y `Carrito`, cálculo de portes y totales).
  - Rúbrica de autoevaluación, errores habituales y buenas prácticas de POO.
