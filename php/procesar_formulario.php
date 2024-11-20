<?php
// procesar_formulario.php

session_start();
include 'conexion.php';

// Funciones para manejar diferentes acciones
function registrarEstudiante($nombre, $email, $curso) {
    global $conn;
    $sql = "INSERT INTO estudiantes (nombre, email, curso) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $nombre, $email, $curso);
    return $stmt->execute();
}

function registrarProfesor($nombre, $email, $especialidad, $password) {
    global $conn;
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    $sql = "INSERT INTO profesores (nombre, email, especialidad, password) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssss", $nombre, $email, $especialidad, $hashedPassword);
    return $stmt->execute();
}

function ingresarEstudiante($nombre, $email, $curso) {
    global $conn;
    $stmt = $conn->prepare("SELECT * FROM estudiantes WHERE nombre = ? AND email = ? AND curso = ?");
    $stmt->bind_param("sss", $nombre, $email, $curso);
    $stmt->execute();
    return $stmt->get_result()->fetch_assoc();
}

function subirNota($profesor_id, $estudiante_id, $nota) {
    global $conn;
    $sql = "INSERT INTO notas (estudiante_id, profesor_id, nota) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("iid", $estudiante_id, $profesor_id, $nota);
    return $stmt->execute();
}

function buscarEstudiantePorId($id) {
    global $conn;
    $stmt = $conn->prepare("SELECT * FROM estudiantes WHERE id = ?");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    return $stmt->get_result()->fetch_assoc();
}

// Procesamiento del formulario
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['registrar_estudiante'])) {
        // Registro de estudiante
        if (registrarEstudiante($_POST['nombre'], $_POST['email'], $_POST['curso'])) {
            header("Location: ../html/Institutopio.html?success=" . urlencode("Estudiante registrado con éxito"));
            exit();
        } else {
            header("Location: ../html/Institutopio.html?error=" . urlencode("Error al registrar estudiante"));
            exit();
        }
    } elseif (isset($_POST['registrar_profesor'])) {
        // Registro de profesor
        if (registrarProfesor($_POST['nombre'], $_POST['email'], $_POST['especialidad'], $_POST['password'])) {
            header("Location: ../html/Institutopio.html?success=" . urlencode("Profesor registrado con éxito"));
            exit();
        } else {
            header("Location: ../html/Institutopio.html?error=" . urlencode("Error al registrar profesor"));
            exit();
        }
    } elseif (isset($_POST['ingresar_estudiante'])) {
        // Ingreso de estudiante
        $estudiante = ingresarEstudiante($_POST['nombre'], $_POST['email'], $_POST['curso']);
        if ($estudiante) {
            $_SESSION['estudiante_id'] = $estudiante['id'];
            header("Location: ../html/VerEstudiante.php?id=" . $estudiante['id'] . "&success=" . urlencode("Ingreso exitoso"));
            exit();
        } else {
            header("Location: ../html/RegistroEstudiantes.html?error=" . urlencode("Datos incorrectos"));
            exit();
        }
    } elseif (isset($_POST['subir_nota'])) {
        // Subir nota
        if (subirNota($_SESSION['profesor_id'], $_POST['student-id'], $_POST['nota'])) {
            header("Location: ../html/Institutopio.html?success=" . urlencode("Nota registrada con éxito"));
            exit();
        } else {
            header("Location: ../html/Institutopio.html?error=" . urlencode("Error al registrar nota"));
            exit();
        }
    } elseif (isset($_POST['buscar_estudiante'])) {
        // Buscar estudiante por ID
        $estudiante = buscarEstudiantePorId($_POST['student-id']);
        if ($estudiante) {
            header("Location: ../html/VerEstudiante.php?id=" . $estudiante['id']);
            exit();
        } else {
            header("Location: ../html/Institutopio.html?error=" . urlencode("Estudiante no encontrado"));
            exit();
        }
    }
}

$conn->close();
?>
