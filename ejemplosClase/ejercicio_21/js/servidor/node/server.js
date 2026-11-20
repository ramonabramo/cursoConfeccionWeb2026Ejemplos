/**
 * SERVIDOR API REST EN NODE.JS CON BASE DE DATOS SQLITE REAL
 * 
 * Características:
 * - Utiliza el motor nativo de SQLite de Node.js (node:sqlite, disponible en Node 22+).
 * - Crea automáticamente el archivo de base de datos 'instituto.db' en disco.
 * - Ejecuta sentencias SQL reales: CREATE TABLE, SELECT, INSERT.
 * - Sin dependencias externas (no requiere npm install ni conexión a internet).
 * - Soporte CORS completo para peticiones fetch() desde el navegador.
 */

const http = require('http');
const path = require('path');
const { DatabaseSync } = require('node:sqlite');

const PORT = 3000;
const DB_PATH = path.join(__dirname, 'instituto.db');

// ==============================================================
// 1. INICIALIZACIÓN DE LA BASE DE DATOS SQLITE
// ==============================================================
console.log(`📦 Conectando con la base de datos SQLite en: ${DB_PATH}`);
const db = new DatabaseSync(DB_PATH);

// Crear la tabla si no existe
db.exec(`
  CREATE TABLE IF NOT EXISTS alumnos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    nota REAL NOT NULL,
    creado_en DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// Comprobar si la tabla está vacía para insertar los datos iniciales
const contador = db.prepare('SELECT COUNT(*) AS total FROM alumnos').get();

if (contador.total === 0) {
  console.log('🌱 Base de datos vacía. Insertando los 10 alumnos iniciales...');
  const insertar = db.prepare('INSERT INTO alumnos (nombre, nota) VALUES (?, ?)');
  
  const datosIniciales = [
    ['Lucía García Gómez', 8.75],
    ['Carlos Martínez Soto', 4.20],
    ['Sofía Navarro Prieto', 9.80],
    ['Marcos Peña Beltrán', 5.00],
    ['Elena Ruiz Ramos', 3.50],
    ['Alejandro Torres Vega', 6.90],
    ['Valeria Morales Cano', 10.00],
    ['Pablo Iglesias Delgado', 4.80],
    ['Carmen Ortiz Blanco', 7.40],
    ['David Serrano Molina', 5.60]
  ];

  for (const [nombre, nota] of datosIniciales) {
    insertar.run(nombre, nota);
  }
  console.log('✅ Datos iniciales cargados en SQLite correctamente.');
} else {
  console.log(`ℹ️ Base de datos existente: ${contador.total} alumnos registrados.`);
}

// Consultas preparadas reutilizables para máxima eficiencia
const sqlSelectTodos = db.prepare('SELECT id, nombre, nota FROM alumnos ORDER BY id ASC');
const sqlInsertarAlumno = db.prepare('INSERT INTO alumnos (nombre, nota) VALUES (?, ?)');

// ==============================================================
// 2. SERVIDOR HTTP REST API
// ==============================================================
const server = http.createServer((req, res) => {
  // Cabeceras CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Petición OPTIONS (CORS preflight)
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

  // Endpoint: /api/alumnos
  if (url.pathname === '/api/alumnos') {

    // MÉTODO GET: Consulta SQL real a SQLite
    if (req.method === 'GET') {
      try {
        const filas = sqlSelectTodos.all();
        console.log(`[GET] /api/alumnos -> SQL ejecutado: SELECT * FROM alumnos (${filas.length} registros)`);
        
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(filas));
      } catch (error) {
        console.error('Error al consultar SQLite:', error);
        res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ error: 'Error interno en la base de datos SQLite' }));
      }
      return;
    }

    // MÉTODO POST: Inserción SQL real en SQLite
    if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', () => {
        try {
          const datos = JSON.parse(body);
          const nombre = datos.nombre ? String(datos.nombre).trim() : '';
          const nota = parseFloat(datos.nota);

          if (!nombre || isNaN(nota) || nota < 0 || nota > 10) {
            res.writeHead(422, { 'Content-Type': 'application/json; charset=utf-8' });
            res.end(JSON.stringify({ error: 'Nombre no válido o nota fuera del rango 0-10.' }));
            return;
          }

          // Ejecutamos el INSERT en SQLite
          const resultado = sqlInsertarAlumno.run(nombre, nota);
          const nuevoId = Number(resultado.lastInsertRowid);

          console.log(`[POST] /api/alumnos -> SQL INSERT ejecutado. Nuevo ID: ${nuevoId} (${nombre})`);

          res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({
            mensaje: 'Alumno guardado en la base de datos SQLite con éxito',
            alumno: {
              id: nuevoId,
              nombre: nombre,
              nota: nota
            }
          }));
        } catch (e) {
          res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ error: 'El cuerpo de la petición no es un JSON válido.' }));
        }
      });
      return;
    }

    res.writeHead(405, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ error: 'Método no permitido' }));
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({ error: 'Ruta no encontrada' }));
});

// Arrancar el servidor
server.listen(PORT, () => {
  const total = db.prepare('SELECT COUNT(*) as total FROM alumnos').get().total;
  console.log(`=======================================================`);
  console.log(`🚀 Servidor Node.js con Base de Datos SQLite ACTIVO`);
  console.log(`📁 Archivo de base de datos: instituto.db (${total} alumnos)`);
  console.log(`👉 Endpoint para fetch(): http://localhost:${PORT}/api/alumnos`);
  console.log(`🛑 Para detener el servidor: pulsa Ctrl + C`);
  console.log(`=======================================================`);
});
