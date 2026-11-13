# 📦 Prácticas de Aula · Objetos Literales en JavaScript

En este directorio se encuentran los ejercicios prácticos para que el alumnado desarrolle habilidades en la modelización de entidades reales utilizando **Objetos en Notación Literal**, manipulación de propiedades, métodos con `this` y colecciones mediante arrays de objetos.

---

## 🎯 Índice de Prácticas para el Alumno

### 1. [Práctica 1: Ficha de Personaje (Videojuego)](practica_01_personaje/)
- **Enfoque Didáctico**: Transición desde variables globales dispersas (`let nombre`, `let vida`) hacia un objeto literal coherente y autónomo (`personaje`).
- **Conceptos**: Propiedades primitivas, métodos que modifican el estado interno mediante `this` (`recibirDanio`, `curar`, `subirNivel`) y sincronización con el DOM.
- **Archivo de trabajo**: [`practica_01_personaje/app.js`](practica_01_personaje/app.js)

### 2. [Práctica 2: Cesta de la Compra con Objetos Literales](practica_02_carrito/)
- **Enfoque Didáctico**: Sustituir el antipatrón de arrays paralelos (`nombres[]`, `precios[]`, `cantidades[]`) por un único array `carrito` donde cada posición almacena un objeto `{ nombre, precio, cantidad, subtotal() }`.
- **Conceptos**: Creación dinámica de objetos a partir de un formulario, métodos internos de cálculo, almacenamiento con `.push()` y recorrido con bucle `for...of` para actualizar la interfaz.
- **Archivo de trabajo**: [`practica_02_carrito/app.js`](practica_02_carrito/app.js)

---

## 💡 Soluciones Oficiales

Las soluciones completas y comentadas por el profesor están disponibles en:
- **[`soluciones/`](soluciones/)**: Directorio local de soluciones de las prácticas.
- **[`../../soluciones/ejercicio_18/`](../../soluciones/ejercicio_18/)**: Directorio centralizado de soluciones del curso.
