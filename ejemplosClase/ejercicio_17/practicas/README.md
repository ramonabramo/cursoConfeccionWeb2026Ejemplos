# ⏱️ Prácticas Guiadas de Aula: Temporizadores en JavaScript
## Desarrollo Web en Entorno Cliente · Profesor Ramón Abramo

En esta carpeta encontrarás los **dos proyectos prácticos guiados** del bloque de temporizadores. 
En ambos ejercicios se te entrega la estructura HTML y CSS completa y funcional. Tu labor consiste en implementar la lógica en `app.js` siguiendo los pasos detallados de la guía.

---

### 📂 Estructura de la Carpeta

```
practicas/
├── practica_01_cohete/       <-- Plantilla para el alumno (P1: Lanzamiento de Cohete)
│   ├── index.html
│   ├── style.css
│   └── app.js (con comentarios TODO)
│
├── practica_02_bateria/      <-- Plantilla para el alumno (P2: Simulador de Batería)
│   ├── index.html
│   ├── style.css
│   └── app.js (con comentarios TODO)
│
└── soluciones/               <-- Soluciones oficiales de referencia
    ├── practica_01_cohete/
    └── practica_02_bateria/
```

---

### 🚀 Práctica 1: Lanzamiento de Cohete con Abortado de Emergencia
* **Carpeta Alumno:** [`practica_01_cohete/`](file:///D:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_17/practicas/practica_01_cohete/index.html)
* **Solución Oficial:** [`soluciones/practica_01_cohete/`](file:///D:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_17/practicas/soluciones/practica_01_cohete/index.html)
* **Funciones:** `setInterval()`, `clearInterval()`, `setTimeout()`.
* **Reto:** 
  1. Al pulsar *Iniciar cuenta atrás*, descontar de 10 a 0 cada 1000 ms.
  2. Alternar botones: deshabilitar *Iniciar* y habilitar *Abortar lanzamiento*.
  3. Si se pulsa *Abortar*, detener la cuenta en seco con `clearInterval(idIntervalo)`.
  4. Si llega a 0, avisar del despegue y, tras 3 segundos (`setTimeout`), restaurar el panel.

---

### 🔋 Práctica 2: Simulador de Carga de Batería y Alerta Automática
* **Carpeta Alumno:** [`practica_02_bateria/`](file:///D:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_17/practicas/practica_02_bateria/index.html)
* **Solución Oficial:** [`soluciones/practica_02_bateria/`](file:///D:/Ramon/www/confeccion2026/ejemplos/iniciales/ejercicio_17/practicas/soluciones/practica_02_bateria/index.html)
* **Funciones:** `setInterval()`, `clearInterval()`, `setTimeout()`, `clearTimeout()`.
* **Reto:**
  1. Al pulsar *Conectar cargador*, sumar 5% de carga cada 200 ms hasta llegar al 100%.
  2. Evitar que se creen intervalos duplicados si el usuario vuelve a hacer clic.
  3. Al pulsar *Desconectar*, congelar el progreso con `clearInterval(idCarga)`.
  4. Al llegar al 100%, mostrar un mensaje que se auto-elimine tras 4 segundos (`setTimeout`), pero si el usuario pulsa *Reiniciar batería* antes, abortar dicho temporizador con `clearTimeout(idAvisoFinal)`.

---

### 📋 Tabla de Verificación de Autoevaluación

| Criterio | Práctica 1 (Cohete) | Práctica 2 (Batería) |
|---|---|---|
| **Control anti-duplicados** | El botón de inicio se deshabilita (`disabled = true`). | Se comprueba `if (idCarga !== null \|\| porcentaje >= 100) return;`. |
| **Parada manual** | `clearInterval(idIntervalo)` detiene el conteo al pulsar Abortar. | `clearInterval(idCarga)` pausa la barra al pulsar Desconectar. |
| **Acción diferida única** | `setTimeout(..., 3000)` restaura el panel 3s tras el despegue. | `setTimeout(..., 4000)` borra el aviso de 100% tras 4 segundos. |
| **Cancelación con clearTimeout** | No requerida. | `clearTimeout(idAvisoFinal)` anula el borrado si se reinicia antes. |
