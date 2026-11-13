# 📘 Ejemplos del Manual Oficial: Objetos Literales en JavaScript

Este directorio contiene los **17 ejemplos de código reales y directos** extraídos del manual de referencia oficial:  
**[`Manual_Objetos_Literales_JavaScript.pdf`](../manuales/Manual_Objetos_Literales_JavaScript.pdf)**  
*Profesor: Ramón Abramo · Santander (Cantabria) · Curso 2026*

Cada ejemplo es un ejercicio sencillo y claro, tal y como se muestra en las capturas y ventanas de terminal del manual.

---

## 📂 Directorio de los 17 Ejemplos

| Nº | Carpeta | Archivo Original | Pág. Manual | Tema | Conceptos Clave |
| :---: | :--- | :--- | :---: | :--- | :--- |
| **01** | [`01_crear_objetos/`](01_crear_objetos/) | `crear-objetos.js` | Pág. 5 | 02 · Crear objetos | Las 3 formas: directa `{...}`, vacío con asignación y abreviada ES6 `{ marca, modelo }`. |
| **02** | [`02_tipos_de_valores/`](02_tipos_de_valores/) | `tipos-de-valores.js` | Pág. 6 | 02 · Valores | Texto, número, booleano, `null`, array, sub-objeto y método. |
| **03** | [`03_nombres_de_clave/`](03_nombres_de_clave/) | `nombres-de-clave.js` | Pág. 7 | 02 · Nombres de clave | Identificador válido, claves con comillas por espacios o guiones, claves numéricas y calculadas `[campo]`. |
| **04** | [`04_leer_propiedades/`](04_leer_propiedades/) | `leer-propiedades.js` | Pág. 8 | 03 · Leer propiedades | Punto `obj.prop`, corchetes `obj[clave]`, operador `in` y encadenamiento opcional `?.`. |
| **05** | [`05_modificar_objetos/`](05_modificar_objetos/) | `modificar-objetos.js` | Pág. 9 | 04 · Modificar, añadir y borrar | Modificar, añadir propiedades en caliente, borrar con `delete`, error de `const` y `Object.freeze()`. |
| **06** | [`06_metodos_y_this/`](06_metodos_y_this/) | `metodos-y-this.js` | Pág. 10 | 05 · Métodos y this | Objeto `cuenta` con titular, saldo y métodos `ingresar()` y `retirar()` usando `this`. |
| **07** | [`07_errores_con_this/`](07_errores_con_this/) | `errores-con-this.js` | Pág. 11 | 05 · Errores con this | Por qué las arrow functions fallan con `this`, pérdida de contexto al separar método y solución con `.bind()`. |
| **08** | [`08_objetos_anidados/`](08_objetos_anidados/) | `objetos-anidados.js` | Pág. 12 | 06 · Objetos anidados | Objeto `estudiante` con `direccion` anidada, `calificaciones` (array) y método `calcularMedia()`. |
| **09** | [`09_array_de_objetos/`](09_array_de_objetos/) | `array-de-objetos.js` | Pág. 13 | 07 · Arrays de objetos | Catálogo de productos, bucle `for...of`, `.filter()`, `.map()`, `.find()` y `.reduce()`. |
| **10** | [`10_recorrer_un_objeto/`](10_recorrer_un_objeto/) | `recorrer-un-objeto.js` | Pág. 14 | 08 · Recorrer un objeto | Introspección con `Object.keys()`, `Object.values()`, `Object.entries()` y `for...in`. |
| **11** | [`11_copiar_objetos/`](11_copiar_objetos/) | `copiar-objetos.js` | Pág. 15 | 09 · Referencias y copias | Asignación por referencia (`b = a`), copia superficial (`{ ...a }`) y copia profunda (`structuredClone()`). |
| **12** | [`12_desestructuracion_y_spread/`](12_desestructuracion_y_spread/) | `desestructuracion-y-spread.js` | Pág. 16 | 10 · Desestructuración y spread | Extraer propiedades, alias, valores por defecto, combinación con spread y paso a funciones. |
| **13** | [`13_getters_y_setters/`](13_getters_y_setters/) | `getters-y-setters.js` | Pág. 17 | 11 · Getters y setters | Objeto `circulo` con `radio`, `get diametro()` y `set diametro(valor)`. |
| **14** | [`14_privacidad/`](14_privacidad/) | `privacidad.js` | Pág. 18 | 11 · Privacidad y clausuras | Convención visual `_claveSecreta` vs Privacidad estricta con IIFE y closure `cajaFuerte`. |
| **15** | [`15_objeto_a_json/`](15_objeto_a_json/) | `objeto-a-json.js` | Pág. 20 | 12 · Convertir con JSON | `JSON.stringify(obj)`, `JSON.parse(texto)` y formato legible indentado `JSON.stringify(obj, null, 2)`. |
| **16** | [`16_lo_que_json_pierde/`](16_lo_que_json_pierde/) | `lo-que-json-pierde.js` | Pág. 21 | 12 · Lo que JSON pierde | Pérdida de métodos/funciones y `undefined`, conversión de `Date` y captura de `SyntaxError`. |
| **17** | [`17_guardar_en_localstorage/`](17_guardar_en_localstorage/) | `guardar-en-localstorage.js` | Pág. 22 | 12 · JSON y localStorage | Almacenar objetos en `localStorage.setItem` y reconstruirlos con `JSON.parse(localStorage.getItem)`. |

---

## 🖥️ Cómo Ejecutar los Ejemplos
1. Puedes abrir directamente el archivo `index.html` de cualquier subcarpeta para ver el código en una ventana estilo editor de código con salida reactiva en pantalla.
2. O puedes abrir las herramientas de desarrollador del navegador (**F12 -> Consola**) para ver los logs nativos de JavaScript.
3. Cada carpeta incluye además el archivo `.js` exacto con su nombre original (ej: `crear-objetos.js`).
