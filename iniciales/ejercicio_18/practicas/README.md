# 🛠️ Prácticas Guiadas y Reto · Ejercicio 19

En este directorio se encuentran los ejercicios prácticos paso a paso correspondientes a la guía didáctica **Prácticas Guiadas: Objetos en Notación Literal en JavaScript** (Profesor Ramón Abramo).

Cada carpeta incluye:
- `index.html`: Maquetación HTML lista para usar.
- `style.css`: Estilos visuales terminados.
- `app.js`: Plantilla de trabajo para el alumno con los comentarios paso a paso y los `TODO` por completar.
- `appSolucion.js`: Solución oficial resuelta por el profesor.

---

## 📂 Directorio de Prácticas

| Carpeta | Práctica | Enfoque y Objetivos |
| :--- | :--- | :--- |
| **[`01_consola/`](01_consola/)** | 📖 **Práctica 1: Primeros pasos (Consola)** | Crear el objeto `libro`, leer por punto y corchetes, mutar con `delete`, comprobar con `in`, método `resumen()` con `this` y `Object.keys()`. |
| **[`02_personaje/`](02_personaje/)** | 🎮 **Práctica 2: Ficha de Personaje** | Encapsular en `personaje` sus datos y métodos interactivos con `this` (`recibirDanio`, `curar`, `subirNivel`) vinculados al DOM. |
| **[`03_carrito/`](03_carrito/)** | 🛒 **Práctica 3: Carrito de la Compra** | Gestionar un array `carrito` de objetos literales con método `subtotal()` y cálculo del importe acumulado. |
| **[`04_agenda/`](04_agenda/)** | 📱 **Práctica 4: Agenda con JSON y Storage** | Crear, listar, filtrar y borrar contactos con persistencia en `localStorage` usando `JSON.stringify()` y `JSON.parse()`. |
| **[`05_reto/`](05_reto/)** | 🔐 **Reto Final: Cuenta con Saldo Privado** | Clausura e IIFE para encapsular el saldo privado (`cuenta.saldo === undefined`) con métodos públicos autorizados e `historial()`. |

---

## 💡 Cómo alternar entre la plantilla y la solución
En cada archivo `index.html`, verás al final la carga del script:
```html
<!-- Por defecto carga el archivo del alumno: -->
<script src="app.js"></script>

<!-- Para revisar la solución oficial, cambia a: -->
<!-- <script src="appSolucion.js"></script> -->
```
