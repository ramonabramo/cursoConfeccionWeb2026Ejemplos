# ⏱️ Ejemplos de Aula: Temporizadores en JavaScript
## Curso de Confección y Publicación de Páginas Web · Profesor Ramón Abramo

En esta carpeta se recogen los **7 ejemplos prácticos desarrollados en la pizarra y en el aula** durante la explicación del control del tiempo asíncrono en JavaScript.

La serie sigue una **progresión pedagógica incremental**: desde el disparo y cancelación elemental de un temporizador hasta la animación directa de propiedades CSS en el DOM y la rotación cíclica de colecciones de datos (carrusel de imágenes con arrays), pasando por el refinamiento de la seguridad contra intervalos duplicados y el control de interfaz mediante alternancia de clases.

---

### 📂 Índice de Ejemplos de Clase

| Ejemplo | Enfoque Principal | Funciones Clave | Descripción y Aprendizaje |
|---|---|---|---|
| [`01/`](file:///D:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_17/ejemplos/01/index.html) | Alarma diferida con cancelación | `setTimeout()`, `clearTimeout()` | Activa una alarma a los 5 segundos guardando su ID en una constante. Un botón permite cancelarla antes del vencimiento con `clearTimeout(idAlarma)`. |
| [`02/`](file:///D:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_17/ejemplos/02/index.html) | Metrónomo periódico continuo | `setInterval()`, `clearInterval()` | Emite un pulso ("tic tac") cada 2000 ms. Un botón permite detener el bucle repetitivo de forma inmediata mediante `clearInterval(idReloj)`. |
| [`03/`](file:///D:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_17/ejemplos/03/index.html) | Contador con bandera booleana | `setInterval()`, `clearInterval()` | Contador de segundos en `<output>`. Utiliza una bandera booleana (`ejecutandose = false`) para evitar que varios clics en "Iniciar" aceleren el contador. |
| [`04/`](file:///D:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_17/ejemplos/04/index.html) | Contador con guardia del ID | `setInterval()`, `clearInterval()` | **Técnica óptima de aula:** Elimina la variable booleana extra y usa el propio valor de `idIntervalo == null` como guardia de seguridad, restableciéndolo a `null` al parar. |
| [`05/`](file:///D:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_17/ejemplos/05/index.html) | Cronómetro con UX interactiva | `setInterval()`, `clearInterval()` | Gestión de 3 estados (*Detenido*, *Corriendo*, *Pausado*) alternando la visibilidad de los botones (*Iniciar*, *Parar*, *Reiniciar*) con la clase CSS `.ocultar`. |
| [`06/`](file:///D:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_17/ejemplos/06/index.html) | Barra de carga animada | `setInterval()`, `clearInterval()` | Animación gráfica de una barra (`#barra`): ensanchamiento progresivo (`+10px`), pausa en el ancho actual y reinicio a la dimensión inicial (`10px`). |
| [`07/`](file:///D:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_17/ejemplos/07/index.html) | Carrusel de imágenes con Array | `setInterval()`, `clearInterval()` | Rotación cíclica de 10 imágenes desde un array cada 2000 ms. Incluye botón para pausar en la foto actual y botón para reiniciar al primer elemento del array. |

---

### 🧠 Evolución Conceptual de los Ejemplos

```
  [Ejemplo 01] ────────► [Ejemplo 02] ────────► [Ejemplo 03]
  setTimeout diferido    setInterval periódico   Control anti-duplicados
  + clearTimeout         + clearInterval         con bandera booleana
                                                        │
                                                        ▼
  [Ejemplo 06] ◄──────── [Ejemplo 05] ◄──────── [Ejemplo 04]
  Animación del DOM      Control de UI (UX)      Refactorización óptima:
  (ancho de barra px)    con clase .ocultar      guardia (id == null)
        │
        ▼
  [Ejemplo 07]
  Carrusel con Array
  (rotación de 10 fotos)
```

1. **De `setTimeout` a `setInterval` (01 y 02):** Comprender la diferencia fundamental entre una acción única aplazada en el tiempo y un ciclo repetitivo indefinido.
2. **La Trampa del Doble Clic (03 frente a 04):** Si el alumno no valida el estado antes de llamar a `setInterval()`, cada clic creará un nuevo intervalo en memoria y los segundos avanzarán al doble o triple de velocidad.
   * *Solución básica (03):* Variable booleana `let ejecutandose = false;`.
   * *Solución recomendada (04):* Comprobar `if (idIntervalo == null)` y hacer `idIntervalo = null;` al detener.
3. **Mejora de la Experiencia de Usuario (05):** No basta con que el código funcione; la interfaz no debe permitir al usuario pulsar botones que carezcan de sentido según el estado actual (ejemplo: mostrar "Reiniciar" solo cuando el cronómetro está en pausa).
4. **Del Texto a la Animación Gráfica (06):** Aplicar la misma lógica de temporización para alterar propiedades visuales del DOM (`style.width = ancho + 'px'`).
5. **Rotación de Estructuras de Datos Complejas (07):** Coordinar `setInterval` con un `Array` de elementos para navegar cíclicamente por índices (`(indice + 1) % array.length`) en un visor dinámico.

---

### 📋 Instrucciones de Uso
1. Abre el archivo `index.html` del ejemplo deseado en el navegador web o mediante la extensión *Live Server* de Visual Studio Code.
2. Abre la consola de desarrollo (<kbd>F12</kbd>) para observar los mensajes y tickets identificadores.
3. Examina el archivo `app.js` de cada carpeta: todos contienen el enunciado detallado y los pasos didácticos explicados en clase.
