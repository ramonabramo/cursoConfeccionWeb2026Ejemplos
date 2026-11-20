<?php
/**
 * API PHP: Obtener listado de alumnos desde MySQL
 * Ideal para Laragon o XAMPP
 */

// Cabeceras HTTP para permitir CORS (Cross-Origin Resource Sharing) y responder con JSON
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Si es una petición OPTIONS (preflight de CORS), terminamos con éxito
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Configuración de la base de datos (Parámetros por defecto de Laragon)
$host = 'localhost';
$db   = 'instituto';
$user = 'root';
$pass = ''; // En Laragon 'root' viene sin contraseña

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8mb4", $user, $pass, [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ]);

    // Consultamos los alumnos
    $stmt = $pdo->query("SELECT id, nombre, CAST(nota AS FLOAT) AS nota FROM alumnos ORDER BY id ASC");
    $alumnos = $stmt->fetchAll();

    // Devolvemos el array en formato JSON
    echo json_encode($alumnos, JSON_UNESCAPED_UNICODE);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        "error" => "Error de conexión o consulta con la base de datos",
        "mensaje" => $e->getMessage()
    ], JSON_UNESCAPED_UNICODE);
}
