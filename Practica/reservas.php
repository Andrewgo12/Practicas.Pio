<?php include 'db.php'; ?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="reservas.css">
    <title>Reservas de Vuelos</title>
</head>
<body>
    <h1>Reserva tu Vuelo</h1>
    <form id="reservaForm" action="reservas.php" method="post">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required>
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        
        <label for="telefono">Teléfono:</label>
        <input type="text" id="telefono" name="telefono" required>
        
        <label for="vuelo">Selecciona Vuelo:</label>
        <select id="vuelo" name="vuelo" required>
            <?php
            $sql = "SELECT id, vuelo_numero FROM vuelos WHERE disponible = TRUE";
            $result = $conn->query($sql);
            while ($row = $result->fetch_assoc()) {
                echo "<option value='{$row['id']}'>{$row['vuelo_numero']}</option>";
            }
            ?>
        </select>
        
        <button type="submit">Reservar</button>
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nombre = $conn->real_escape_string(trim($_POST['nombre']));
        $email = $conn->real_escape_string(trim($_POST['email']));
        $telefono = $conn->real_escape_string(trim($_POST['telefono']));
        $id_vuelo = (int) $_POST['vuelo'];

        // Preparar la sentencia para insertar el pasajero
        $stmt_pasajero = $conn->prepare("INSERT INTO pasajeros (nombre, email, telefono) VALUES (?, ?, ?)");
        $stmt_pasajero->bind_param("sss", $nombre, $email, $telefono);

        if ($stmt_pasajero->execute()) {
            $id_pasajero = $conn->insert_id;

            // Preparar la sentencia para insertar la reserva
            $stmt_reserva = $conn->prepare("INSERT INTO reservas (id_vuelo, id_pasajero, fecha_reserva, estado) VALUES (?, ?, NOW(), 'confirmada')");
            $stmt_reserva->bind_param("ii", $id_vuelo, $id_pasajero);

            if ($stmt_reserva->execute()) {
                echo "<p>Reserva realizada con éxito.</p>";
            } else {
                echo "<p>Error al realizar la reserva: " . $stmt_reserva->error . "</p>";
            }
        } else {
            echo "<p>Error al insertar el pasajero: " . $stmt_pasajero->error . "</p>";
        }

        // Cerrar las sentencias
        $stmt_pasajero->close();
        $stmt_reserva->close();
    }

    $conn->close();
    ?>
    <script src="reservas.js"></script>
</body>
</html>