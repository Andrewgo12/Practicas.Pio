<?php
include 'conexion.php'; // Incluir el archivo de conexión

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $curso = $_POST['curso'];

    // Preparar y vincular
    $stmt = $conn->prepare("INSERT INTO estudiantes (nombre, email, curso) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $nombre, $email, $curso);

    // Ejecutar la consulta
    if ($stmt->execute()) {
        echo "Registro guardado con éxito.";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Cerrar la conexión
    $stmt->close();
    $conn->close();
}
?>