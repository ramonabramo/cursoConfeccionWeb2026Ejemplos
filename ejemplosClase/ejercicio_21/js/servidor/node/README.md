# Servidor API REST con Node.js y Base de Datos SQLite Real

Este servidor utiliza el motor nativo **`node:sqlite`** (incluido en Node.js 22 y 24).

---

## 🌟 Características

1. **Base de datos SQL auténtica:**  
   Crea y gestiona un archivo real en disco: `instituto.db`.
2. **Consultas SQL reales:**  
   Usa sentencias SQL estándar: `CREATE TABLE`, `SELECT`, `INSERT`.
3. **Persistencia garantizada:**  
   Los datos **no se pierden** al apagar o reiniciar el servidor.
4. **Cero instalación / Cero dependencias:**  
   No necesitas ejecutar `npm install` ni tener MySQL instalado.
5. **CORS activado:**  
   Permite peticiones directas desde el navegador con `fetch()`.

---

## 🚀 Cómo arrancarlo

1. Abre tu consola (PowerShell o CMD).
2. Entra en la carpeta del servidor:
   ```bash
   cd c:\Users\ramon\Downloads\js\servidor\node
   ```
3. Ejecuta el servidor:
   ```bash
   node server.js
   ```
4. Verás en la consola:
   ```text
   =======================================================
   🚀 Servidor Node.js con Base de Datos SQLite ACTIVO
   📁 Archivo de base de datos: instituto.db (10 alumnos)
   👉 Endpoint para fetch(): http://localhost:3000/api/alumnos
   🛑 Para detener el servidor: pulsa Ctrl + C
   =======================================================
   ```
5. En la **Fase 4**, selecciona en el desplegable: `Node.js (http://localhost:3000/api/alumnos)` y pulsa **"📥 Cargar desde BD con fetch()"**.
