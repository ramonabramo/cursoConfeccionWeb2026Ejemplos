# Curso Didáctico: Evolución de Estructuras de Datos y Clases en JavaScript

Este repositorio contiene una unidad didáctica completa pensada para explicar a los alumnos la evolución desde **estructuras básicas (arrays paralelos)** hasta la **Programación Orientada a Objetos (Clases en JS)**, la **persistencia en el navegador (`localStorage`)**, y la **comunicación cliente-servidor mediante `fetch()`**.

---

## 📂 Estructura de Carpetas

```text
js/
├── index.html                  # Portal principal con acceso visual a todas las fases
├── TEORIA.md                   # Guía teórica detallada para el profesor y el alumno
├── css/
│   └── styles.css              # Estilos CSS compartidos, limpios y modernos
│
├── 01-arrays-paralelos/        # FASE 1: Dos arrays simples sincronizados por índice
│   ├── index.html
│   └── app.js
│
├── 02-objetos-literales/       # FASE 2: Array de objetos planos { nombre, nota }
│   ├── index.html
│   └── app.js
│
├── 03-clases/                  # FASE 3: POO con class Alumno y rehidratación
│   ├── index.html
│   └── app.js
│
├── 04-fetch-servidor/          # FASE 4: Consumo de API REST / Base de datos con fetch()
│   ├── index.html
│   └── app.js
│
└── servidor/                   # Simulación del Servidor Web y Base de Datos
    ├── database.sql            # Script SQL de creación y datos de prueba
    ├── php/                    # Opción A: PHP para Laragon / XAMPP
    │   ├── obtener_alumnos.php
    │   ├── guardar_alumno.php
    │   └── README.md
    └── node/                   # Opción B: Node.js + Express (100% JS)
        ├── package.json
        ├── server.js
        └── README.md
```

---

## 🎯 Progresión Didáctica Explicada

| Fase | Concepto Clave | Estructura de Datos | Almacenamiento | Limitación / Aprendizaje |
|---|---|---|---|---|
| **01** | Arrays paralelos | `nombres = []`, `notas = []` | `localStorage` con 2 claves | **Frágil:** Si se borra o desordena un array, los datos se desincronizan. |
| **02** | Objetos literales | `alumnos = [{ nombre, nota }]` | `localStorage` en 1 clave | **Cohesión:** Los datos pertenecen a la misma entidad, pero no tienen lógica/métodos propios. |
| **03** | Clases (POO) | `alumnos = [new Alumno(...)]` | `localStorage` + Rehidratación | **Encapsulación:** Se asocian métodos (`estaAprobado()`, `obtenerEstado()`). `JSON.parse` pierde métodos y exige rehidratar. |
| **04** | API con `fetch()` | `async / await` + `fetch` | Base de Datos (MySQL) | **Cliente/Servidor:** Carga dinámica de datos remotos transformados en instancias de clase. |

---

## 🚀 Puesta en Marcha Rápida

1. Abre `index.html` directamente en tu navegador (o mediante la extensión *Live Server* de VS Code) para navegar por cada una de las fases.
2. Lee `TEORIA.md` para tener todo el material explicativo preparado para tus alumnos.
3. Para la **Fase 4 (fetch)**, consulta la carpeta `servidor/` según prefieras usar **Laragon (PHP/MySQL)** o **Node.js**.
