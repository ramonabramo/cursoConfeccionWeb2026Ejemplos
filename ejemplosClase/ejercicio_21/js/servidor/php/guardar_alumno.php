<?php
/**
 * API PHP: Insertar un nuevo alumno en MySQL (Método POST)
 */

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Método no permitido. Se requiere POST"]);
    exit();
}

// Leemos el cuerpo JSON enviado por fetch()
$cuerpo = file_get_contents('php://input');
$datos = json_decode($cuerpo, true);

if (!isset($datos['nombre']) || !isset($datos['nota'])) {
    http_response_code(400);
    echo json_encode(["error" => "Datos incompletos. Se requiere 'nombre' y 'nota'."]);
    exit();
}

$nombre = trim($datos['nombre']);
$nota   = floatval($datos['nota']);

if ($nombre === '' || $nota < 0 || $nota > 10) {
    http_response_code(422);
    echo json_encode(["error" => "Datos no válidos: el nombre no puede estar vacío y la nota debe estar entre 0 y 10."]);
    exit();
}

$host = 'localhost';
$db   = 'instituto';
$user = 'root';
$pass = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8mb4", $user, $pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ]);

    $stmt = $pdo->prepare("INSERT INTO alumnos (nombre, nota) VALUES (:nombre, :nota)");
    $stmt->execute(['nombre' => $nombre, 'nota' => $nota]);
    $nuevoId = $pdo->lastInsertId();

    http_response_code(201);
    echo json_encode([
        "mensaje" => "Alumno creado correctamente",
        "alumno" => [
            "id" => (int)$nuevoId,
            "nombre" => $nombre,
            "nota" => $nota
        ]
    ], JSON_UNESCAPED_UNICODE);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Error al guardar en BD", "mensaje" => $e->getMessage()]);
}
