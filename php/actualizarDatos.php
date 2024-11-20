<?php
include 'conexion.php'; // Incluir el archivo de conexión

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $curso = $_POST['curso'];

    // Preparar y vincular
    $stmt = $conn->prepare("UPDATE estudiantes SET email = ?, curso = ? WHERE nombre = ?");
    $stmt->bind_param("sss", $email, $curso, $nombre);

    // Ejecutar la consulta
    if ($stmt->execute()) {
        echo "Datos actualizados con éxito.";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Cerrar la conexión
    $stmt->close();
    $conn->close();
}
?>