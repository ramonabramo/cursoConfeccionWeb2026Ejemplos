# ⏱️ Ejercicio 17: Gestión de Temporizadores en JavaScript
## Curso de Confección y Publicación de Páginas Web · Módulo Inicial
**Profesor:** Ramón Abramo · *Más de 25 años de experiencia docente*

Bienvenido a la carpeta del **Ejercicio 17**, dedicado íntegramente al aprendizaje y dominio del tiempo asíncrono en el navegador mediante las cuatro funciones nativas de JavaScript: `setTimeout()`, `clearTimeout()`, `setInterval()` y `clearInterval()`.

En esta unidad formativa se exploran desde las bases conceptuales (la regla de los milisegundos y el manejo de identificadores `ID` en memoria) hasta patrones avanzados de interfaz: control anti-duplicados, alternancia dinámica de controles y animaciones frame a frame en el DOM.

---

### 🗺️ Mapa Completo de Archivos y Carpetas

```
ejercicio_17/
│
├── 📄 index.html                                        <-- Portal interactivo general del Ejercicio 17
├── 🎨 style.css                                         <-- Estilos modernos del portal (tema oscuro)
├── 📜 app.js                                            <-- Script demostrativo de consola del portal
├── 🖼️ infografia.jpg                                    <-- Infografía visual del funcionamiento de temporizadores
│
├── 📑 manual_referencia_rapida.html                     <-- Fuente HTML maquetada en A4 (7 páginas)
├── 📑 practicas_guiadas.html                            <-- Fuente HTML maquetada en A4 (6 páginas)
│
├── 📕 Manual de Referencia Rápida - Temporizadores en JavaScript.pdf  <-- PDF con portada, índice y marcadores
├── 📗 Prácticas Guiadas - Temporizadores en JavaScript.pdf            <-- PDF con portada, índice y marcadores
│
├── 📂 ejemplos/                                         <-- 7 Ejemplos desarrollados en pizarra durante la clase
│   ├── README.md                                        <-- Documentación y progresión pedagógica
│   ├── 01/                                              <-- setTimeout diferido y cancelación con botón
│   ├── 02/                                              <-- setInterval continuo ("tic tac") y parada
│   ├── 03/                                              <-- Contador con bandera booleana (ejecutandose)
│   ├── 04/                                              <-- Contador con guardia óptima (idIntervalo == null)
│   ├── 05/                                              <-- Cronómetro con alternancia de clases CSS (.ocultar)
│   ├── 06/                                              <-- Barra de carga animada (style.width en píxeles)
│   └── 07/                                              <-- Carrusel de imágenes con Array y rotación periódica
│
├── 📂 ejemplos_manual/                                  <-- 6 Ejemplos interactivos del Manual de Referencia
│   ├── README.md                                        <-- Guía explicativa de los ejemplos del manual
│   ├── 01_timeout_alarma/                               <-- Alarma con cuenta atrás de 3s y barra
│   ├── 02_interval_reloj/                               <-- Metrónomo con pulsadores y parada a 5 vueltas
│   ├── 03_aviso_cancelable/                             <-- Práctica 1 manual: Simulación de «Deshacer envío»
│   ├── 04_caja_creciente/                               <-- Práctica 2 manual: Animación fluida hasta 300px
│   ├── 05_contador_interactivo/                         <-- Práctica 3 manual: Arrancar, Pausar y Reiniciar
│   └── 06_cuenta_atras_mixta/                           <-- Práctica 4 manual: Cuenta atrás 5s + reseteo a 2s
│
└── 📂 practicas/                                        <-- Cuaderno de Prácticas Guiadas para el Alumno
    ├── README.md                                        <-- Enunciados, pautas y tabla de verificación
    ├── practica_01_cohete/                              <-- Plantilla Alumno: Lanzamiento de Cohete Espacial
    ├── practica_02_bateria/                             <-- Plantilla Alumno: Simulador de Carga de Batería
    └── soluciones/                                      <-- Soluciones Oficiales Comentadas
        ├── practica_01_cohete/                          <-- Solución resuelta paso a paso
        └── practica_02_bateria/                         <-- Solución resuelta paso a paso
```

---

### 📚 1. Documentación Oficial y Manuales PDF Mejorados

Ambos documentos cuentan con **portada dedicada**, **índice interactivo navegable con hipervínculos internos**, **panel lateral de marcadores nativos (TOC)** y formato tipográfico para impresión A4:

1. **[`Manual de Referencia Rápida - Temporizadores en JavaScript.pdf`](file:///D:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_17/Manual%20de%20Referencia%20R%C3%A1pida%20-%20Temporizadores%20en%20JavaScript.pdf) (7 páginas):**
   * *Pág 1:* Portada institucional con resumen de funciones y credenciales docentes.
   * *Pág 2:* Índice general interactivo y fundamentos del modelo asíncrono (`1s = 1000ms`).
   * *Pág 3:* Pizarra de memoria (tickets `ID`), anatomía de `setTimeout` (horno) y de `setInterval` (metrónomo).
   * *Pág 4:* Práctica 1 del manual: Aviso retardado de envío de 4s con botón *«Deshacer»*.
   * *Pág 5:* Práctica 2 del manual: Animación en vivo de caja creciente hasta 300px con condición `>= 300`.
   * *Pág 6:* Práctica 3 del manual: Cronómetro de 3 estados con guardia contra clics duplicados.
   * *Pág 7:* Práctica 4 del manual (cuenta atrás coordinada) y tabla del **Top 5 errores frecuentes de aula**.

2. **[`Prácticas Guiadas - Temporizadores en JavaScript.pdf`](file:///D:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_17/Pr%C3%A1cticas%20Guiadas%20-%20Temporizadores%20en%20JavaScript.pdf) (6 páginas):**
   * *Pág 1:* Portada dedicada con presentación de las dos misiones de desarrollo web cliente.
   * *Pág 2:* Índice general de las prácticas e instrucciones de trabajo con DevTools (<kbd>F12</kbd>).
   * *Pág 3:* Práctica 1: Enunciado del panel espacial, flujo de estados y código base HTML/CSS.
   * *Pág 4:* Práctica 1: Guía ordenada paso a paso (Pasos 1 al 4) y solución oficial comentada.
   * *Pág 5:* Práctica 2: Enunciado del simulador de batería 0% a 100% y código base HTML/CSS.
   * *Pág 6:* Práctica 2: Solución oficial comentada y **Gran tabla comparativa de verificación cruzada**.

---

### 🧪 2. Comparativa de Carpetas de Ejemplos

| Carpeta | Enfoque Pedagógico | Casos Cubiertos |
|---|---|---|
| [`ejemplos/`](file:///D:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_17/ejemplos/README.md) | **Ejemplos de Clase (Pizarra)**: Construcción incremental paso a paso durante la lección presencial. | `01` Alarma diferida, `02` Metrónomo, `03` Bandera booleana, `04` Guardia del ID `null`, `05` Alternancia de botones `.ocultar`, `06` Barra animada, `07` Carrusel de imágenes con Array. |
| [`ejemplos_manual/`](file:///D:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_17/ejemplos_manual/README.md) | **Demos Completas del Manual**: Interfaces web ricas e interactivas con estilos visuales terminados. | `01` Alarma con barra visual, `02` Pulsos luminosos, `03` Cliente de correo con deshacer, `04` Caja con regla de píxeles, `05` Display digital, `06` Alerta temporal pulsante. |

---

### 🎯 3. Prácticas Guiadas de Aula y Soluciones

* **Práctica 1 · Cohete Espacial:**
  * **Plantilla Alumno:** [`practicas/practica_01_cohete/`](file:///D:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_17/practicas/practica_01_cohete/index.html) (HTML/CSS completos con comentarios `// TODO:`).
  * **Solución Oficial:** [`practicas/soluciones/practica_01_cohete/`](file:///D:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_17/practicas/soluciones/practica_01_cohete/app.js) y en [`soluciones/ejercicio_17/practica_01_cohete/`](file:///D:/Ramon/www/confeccion2026/ejemplos/iniciales/soluciones/ejercicio_17/practica_01_cohete/app.js).
* **Práctica 2 · Simulador de Batería:**
  * **Plantilla Alumno:** [`practicas/practica_02_bateria/`](file:///D:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_17/practicas/practica_02_bateria/index.html) (HTML/CSS completos con comentarios `// TODO:`).
  * **Solución Oficial:** [`practicas/soluciones/practica_02_bateria/`](file:///D:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_17/practicas/soluciones/practica_02_bateria/app.js) y en [`soluciones/ejercicio_17/practica_02_bateria/`](file:///D:/Ramon/www/confeccion2026/ejemplos/iniciales/soluciones/ejercicio_17/practica_02_bateria/app.js).

---

### 🧠 Síntesis Teórica Rápida

| Función | Comportamiento | Retorno | Función de Parada |
|---|---|---|---|
| `setTimeout(fn, ms)` | Ejecuta `fn` **una sola vez** tras esperar `ms`. | `ID` numérico entero | `clearTimeout(id)` |
| `clearTimeout(id)` | Cancela la cuenta atrás pendiente de un `setTimeout`. | `undefined` | *Es la función destructora* |
| `setInterval(fn, ms)` | Ejecuta `fn` **repetidamente** cada `ms`. | `ID` numérico entero | `clearInterval(id)` |
| `clearInterval(id)` | Frena de inmediato el bucle de un `setInterval`. | `undefined` | *Es la función destructora* |

> 💡 **Regla de Pizarra:** Siempre que detengas un intervalo con `clearInterval(idIntervalo);`, añade a continuación `idIntervalo = null;` para liberar la variable y permitir que una futura comprobación `if (idIntervalo == null)` sepa que el temporizador está libre.
