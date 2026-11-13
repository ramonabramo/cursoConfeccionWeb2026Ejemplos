# 💡 Soluciones Oficiales del Profesor · Prácticas de Clases

**Módulo:** Programación Web en Entorno Cliente · Certificado IFCD0110  
**Profesor:** Ramón Abramo · ALPE Formación · Santander · Curso 2026  
**Ubicación:** `ejercicio_20/practicas/soluciones_profesor/`

---

## 🎯 Finalidad de este Directorio

Este directorio contiene las **resoluciones oficiales completas** de las 6 prácticas guiadas de clases en JavaScript. Están diseñadas como material de referencia pedagógica para que el profesor pueda proyectarlas en el aula o para que el alumno pueda contrastar su trabajo una vez finalizado el ejercicio.

Cada práctica se encuentra en su subcarpeta correspondiente y contiene el archivo `script.js` con todos los pasos `TODO` resueltos, comentados y validados.

---

## 📂 Directorio de Soluciones

| Carpeta | Práctica | Archivo Resuelto | Puntos Clave de la Solución |
| :--- | :--- | :---: | :--- |
| **`practica-01-garaje-de-coches/`** | 🚗 Práctica 01 · Garaje de coches | [`script.js`](practica-01-garaje-de-coches/script.js) | Implementación de `class Coche`, constructor con defaults, método `recorrer(km)`, getter `antiguedad` computado y función `dibujar()` con eventos. |
| **`practica-02-cuenta-segura/`** | 🔐 Práctica 02 · Cuenta bancaria segura | [`script.js`](practica-02-cuenta-segura/script.js) | Campos privados `#saldo`, `#pin`, `#titular`, `#movimientos`. Excepciones con `throw new Error()` capturadas con `try...catch` en la interfaz. |
| **`practica-03-figuras-geometricas/`** | 📐 Práctica 03 · Figuras geométricas | [`script.js`](practica-03-figuras-geometricas/script.js) | Jerarquía polimórfica: `Figura` como clase base, `Circulo` y `Rectangulo` con `extends`, `Cuadrado` heredando de `Rectangulo`, y método estático `Figura.comparar()`. |
| **`practica-04-biblioteca/`** | 📖 Práctica 04 · Biblioteca de libros | [`script.js`](practica-04-biblioteca/script.js) | Composición: `class Libro` (con estado prestado y método `toString()`) y `class Biblioteca` (con array interno, préstamos, devoluciones y filtros de búsqueda). |
| **`practica-05-gestor-de-tareas/`** | 📝 Práctica 05 · Gestor de tareas con JSON | [`script.js`](practica-05-gestor-de-tareas/script.js) | Persistencia robusta: `class Tarea` con `toJSON()`, `static fromJSON()`, y `class GestorTareas` con sincronización automática en `localStorage`. |
| **`practica-06-tienda-con-carrito/`** | 🛒 Práctica 06 · Tienda con carrito (Reto) | [`script.js`](practica-06-tienda-con-carrito/script.js) | Arquitectura completa: `ProductoFisico` vs `ProductoDigital` con herencia, `LineaCarrito` y `Carrito` con composición, cálculo de envío, IVA y cupones. |

---

## 💻 Cómo Comprobar una Solución en el Navegador

Para ejecutar y probar cualquiera de las soluciones en la página web:

1. Copia el archivo `script.js` de la solución sobre el `script.js` de la práctica del alumno correspondiente (o cámbiale el nombre temporalmente a la plantilla).
2. Abre el archivo `index.html` de la práctica en el navegador.
3. Comprueba el funcionamiento visual y los mensajes en la consola de desarrollador (**F12**).
