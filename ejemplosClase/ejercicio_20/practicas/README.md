# 🧪 Prácticas Guiadas · Clases en JavaScript (ES6+)

**Módulo:** Programación Web en Entorno Cliente · Certificado IFCD0110  
**Profesor:** Ramón Abramo · ALPE Formación · Santander · Curso 2026  
**Documento de Referencia:** [`Practicas_Guiadas_Clases_JavaScript.pdf`](../manuales/Practicas_Guiadas_Clases_JavaScript.pdf) (24 páginas)

---

## 🎯 Metodología de Trabajo

En estas 6 prácticas progresivas se aplica la metodología de **andamiaje cognitivo**:
- **`index.html`** y **`estilos.css`** ya están **completamente realizados**: no es necesario modificarlos.
- **Tu trabajo como alumno se centra exclusivamente en `script.js`**.
- En la cabecera de cada archivo `script.js` encontrarás el **ENUNCIADO** oficial y la lista de comprobación de **PASOS (TODO)**.
- En el cuerpo del archivo, cada sección está claramente señalizada con comentarios `// TODO PASO n: ...`.

---

## 📂 Directorio de Prácticas

| Nº | Carpeta | Enunciado y Reto Didáctico | Conceptos Prácticos Aplicados |
| :---: | :--- | :--- | :--- |
| **01** | [`practica-01-garaje-de-coches/`](practica-01-garaje-de-coches/) | **Garaje de Coches**: Registrar vehículos desde un formulario, mostrarlos en tarjetas del DOM y permitir sumar kilometraje con un botón. | `class Coche`, `constructor`, método `recorrer(km)`, getter `antiguedad`, array de instancias y renderizado en DOM. |
| **02** | [`practica-02-cuenta-segura/`](practica-02-cuenta-segura/) | **Cuenta Bancaria Segura**: Crear una cuenta con saldo privado inviolable. Operaciones de ingreso, extracción con PIN y control de errores. | Campos privados `#saldo`, `#pin`, métodos `ingresar()`, `retirar()`, lanzamiento de excepciones con `throw` y captura en UI con `try...catch`. |
| **03** | [`practica-03-figuras-geometricas/`](practica-03-figuras-geometricas/) | **Figuras Geométricas**: Diseñar una jerarquía de figuras geométricas calculando áreas y perímetros de forma polimórfica. | Herencia con `extends`, `super()`, polimorfismo (`Circulo`, `Rectangulo`, `Cuadrado`), y método estático `Figura.comparar()`. |
| **04** | [`practica-04-biblioteca/`](practica-04-biblioteca/) | **Biblioteca de Libros**: Administrar un fondo bibliográfico con préstamo y devolución de ejemplares, buscador en vivo y estado. | Composición de clases (`Libro` dentro de `Biblioteca`), métodos funcionales de array (`filter`, `find`), método `toString()` y badges en DOM. |
| **05** | [`practica-05-gestor-de-tareas/`](practica-05-gestor-de-tareas/) | **Gestor de Tareas con JSON**: Aplicación interactiva de tareas con persistencia en el navegador sin pérdida de prototipos al recargar. | Clases `Tarea` y `GestorTareas`, serialización con `toJSON()`, reconstrucción con factoría `static fromJSON()`, `localStorage` y filtros. |
| **06** | [`practica-06-tienda-con-carrito/`](practica-06-tienda-con-carrito/) | **Tienda con Carrito (Reto Final)**: E-commerce completo con productos físicos (gastos de envío por peso) y digitales (descarga directa sin portes). | Herencia (`Producto` -> `ProductoFisico`, `ProductoDigital`), composición (`LineaCarrito` y `Carrito`), cálculo automático de subtotal, envío y total. |

---

## 💡 Flujo de Trabajo Recomendado

1. Abre el archivo `script.js` de la práctica en la que vas a trabajar.
2. Lee detenidamente el enunciado y los pasos `TODO` detallados en la cabecera.
3. Resuelve cada paso en orden secuencial (Paso 1, Paso 2, etc.).
4. Guarda el archivo con `Ctrl + S`.
5. Abre el archivo `index.html` en el navegador (o mediante servidor local en Laragon) y pulsa `F5` para recargar.
6. Abre la **Consola del Navegador (F12)** para comprobar que no existan errores de sintaxis o ejecución.
7. Al completar cada paso, marca la casilla correspondiente en la cabecera:
   ```javascript
   // De:
   // [ ] PASO 1: Crea la clase Coche
   // A:
   // [x] PASO 1: Crea la clase Coche
   ```

---

## 🔍 Consulta de Soluciones Oficiales

Si tras intentar resolver un paso encuentras dificultades insalvables, consulta la implementación oficial del profesor ubicada en:  
👉 **[`soluciones_profesor/`](soluciones_profesor/README.md)**
