<?php
$host = "localhost"; // Cambia esto si tu base de datos está en otro servidor
$usuario = "root"; // Cambia esto si tu usuario es diferente
$contraseña = ""; // Cambia esto si tu contraseña es diferente
$baseDeDatos = "nombre_de_tu_base_de_datos"; // Cambia esto al nombre de tu base de datos

// Crear conexión
$conn = new mysqli($host, $usuario, $contraseña, $baseDeDatos);

// Comprobar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>