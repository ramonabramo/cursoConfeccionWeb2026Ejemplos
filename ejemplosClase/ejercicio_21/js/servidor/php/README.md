# Guía de Uso: Servidor PHP con Laragon

Laragon es la forma más rápida y visual de simular un servidor web (Apache) y una base de datos (MySQL) en Windows.

---

## 🛠️ Paso a Paso para el Alumno / Profesor

### 1. Iniciar Laragon
1. Descarga e instala [Laragon](https://laragon.org/download/) (si no lo tienes ya).
2. Abre la ventana de Laragon y pulsa en el botón **"Iniciar todo"** (Start All).
3. Verás que tanto **Apache** como **MySQL** quedan en verde.

### 2. Crear la Base de Datos e Importar el SQL
1. En Laragon, haz clic en el botón **"Base de datos"** (abrirá phpMyAdmin o HeidiSQL) o abre en tu navegador:
   `http://localhost/phpmyadmin`
2. Ve a la pestaña **SQL** (o selecciona Importar).
3. Copia y pega el contenido del archivo `servidor/database.sql` y pulsa **Continuar / Ejecutar**.
4. Se creará la base de datos `instituto` y la tabla `alumnos` con 10 alumnos de ejemplo.

### 3. Publicar los Archivos PHP en Laragon
1. En Laragon, haz clic en el botón **"Root"** (abrirá la carpeta `C:\laragon\www\`).
2. Crea una subcarpeta llamada `api-alumnos`.
3. Copia los archivos:
   - `obtener_alumnos.php`
   - `guardar_alumno.php`
   dentro de `C:\laragon\www\api-alumnos\`.

### 4. Probar la API en el Navegador
Abre en tu navegador la siguiente dirección:
👉 `http://localhost/api-alumnos/obtener_alumnos.php`

Deberás ver una respuesta JSON similar a esta:
```json
[
  {"id":1,"nombre":"Lucía García Gómez","nota":8.75},
  {"id":2,"nombre":"Carlos Martínez Soto","nota":4.2},
  ...
]
```

¡Listo! Ya tienes tu backend funcionando para que la **Fase 4 (`fetch`)** pueda consumir los datos.
