-- ==============================================================
-- BASE DE DATOS PARA EL EJERCICIO DE ALUMNOS (SQL)
-- ==============================================================

-- 1. Creación de la base de datos
CREATE DATABASE IF NOT EXISTS `instituto` 
CHARACTER SET utf8mb4 
COLLATE utf8mb4_spanish_ci;

USE `instituto`;

-- 2. Creación de la tabla de alumnos
DROP TABLE IF EXISTS `alumnos`;

CREATE TABLE `alumnos` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `nombre` VARCHAR(120) NOT NULL,
    `nota` DECIMAL(4, 2) NOT NULL,
    `creado_en` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- 3. Inserción de datos iniciales para los alumnos
INSERT INTO `alumnos` (`nombre`, `nota`) VALUES
('Lucía García Gómez', 8.75),
('Carlos Martínez Soto', 4.20),
('Sofía Navarro Prieto', 9.80),
('Marcos Peña Beltrán', 5.00),
('Elena Ruiz Ramos', 3.50),
('Alejandro Torres Vega', 6.90),
('Valeria Morales Cano', 10.00),
('Pablo Iglesias Delgado', 4.80),
('Carmen Ortiz Blanco', 7.40),
('David Serrano Molina', 5.60);

-- Comprobación:
-- SELECT * FROM alumnos ORDER BY nota DESC;
