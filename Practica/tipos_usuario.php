<<?php
// Conexión a SQL Server sin especificar una base de datos
$serverName = "localhost";
$connectionOptions = array(
    "Database" => null, // No necesitamos especificar una base de datos en esta conexión
    "Uid" => "usuario", // Cambia esto a tu usuario
    "PWD" => "contraseña" // Cambia esto a tu contraseña
);

$conn = sqlsrv_connect($serverName, $connectionOptions);

if ($conn === false) {
    die(print_r(sqlsrv_errors(), true));
}

// Nombre de la nueva base de datos
$nombreBaseDeDatos = "nombre_base_de_datos";

// Consulta para verificar si la base de datos ya existe
$sqlVerificarBD = "IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = '$nombreBaseDeDatos')
                    CREATE DATABASE $nombreBaseDeDatos";

// Ejecutar la consulta para crear la base de datos si no existe
$stmt = sqlsrv_query($conn, $sqlVerificarBD);

if ($stmt === false) {
    die(print_r(sqlsrv_errors(), true));
}

// Seleccionar la base de datos recién creada
$sqlSelectBD = "USE $nombreBaseDeDatos";
$stmt = sqlsrv_query($conn, $sqlSelectBD);

if ($stmt === false) {
    die(print_r(sqlsrv_errors(), true));
}

// Consulta para crear una tabla de ejemplo
$sqlCrearTabla = "
    IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'TIPO_USUARIOS')
    CREATE TABLE TIPO_USUARIOS (
        ID_TipoUsuario VARCHAR(50) PRIMARY KEY,
        Descripcion_Usuario NVARCHAR(255) NOT NULL,
        FechaCreacion DATETIME NOT NULL
    )
";

// Ejecutar la consulta para crear la tabla si no existe
$stmt = sqlsrv_query($conn, $sqlCrearTabla);

if ($stmt === false) {
    die(print_r(sqlsrv_errors(), true));
}

// Mensaje de éxito
echo "Base de datos y tabla creadas exitosamente.";

// Cerrar la conexión
sqlsrv_close($conn);
?>
<?php
// Mostrar datos en la tabla
$sql = "SELECT ID_TipoUsuario, Descripcion_Usuario, FechaCreacion FROM TIPO_USUARIOS";
$stmt = sqlsrv_query($conn, $sql);

if ($stmt === false) {
    die(print_r(sqlsrv_errors(), true));
}

while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
    echo "<tr>";
    echo "<td>" . htmlspecialchars($row['ID_TipoUsuario']) . "</td>";
    echo "<td>" . htmlspecialchars($row['Descripcion_Usuario']) . "</td>";
    echo "<td>" . htmlspecialchars($row['FechaCreacion'] !== null ? $row['FechaCreacion']->format('Y-m-d H:i:s') : 'N/A') . "</td>";
    echo "<td>";
    echo "<a href='#' class='btn btn-info btn-sm' data-toggle='modal' data-target='#modalDetail'
        data-id='" . htmlspecialchars($row['ID_TipoUsuario']) . "' 
        data-descripcion='" . htmlspecialchars($row['Descripcion_Usuario']) . "' 
        data-fecha='" . htmlspecialchars($row['FechaCreacion'] !== null ? $row['FechaCreacion']->format('Y-m-d H:i:s') : 'N/A') . "'>Ver Detalles</a> | ";
    echo "<button type='button' class='btn btn-warning btn-sm' onclick='abrirModalActualizar(\"" . htmlspecialchars($row['ID_TipoUsuario']) . "\", \"" . htmlspecialchars($row['Descripcion_Usuario']) . "\", \"" . htmlspecialchars($row['FechaCreacion'] !== null ? $row['FechaCreacion']->format('Y-m-d H:i:s') : 'N/A') . "\")'>Actualizar</button> | ";
    echo "<form action='eliminar_tipo_usuario.php' method='POST' style='display:inline;' onsubmit=\"return confirm('¿Estás seguro de que deseas eliminar este registro?');\">";
    echo "<input type='hidden' name='ID_TipoUsuario' value='" . htmlspecialchars($row['ID_TipoUsuario']) . "'>";
    echo "<button type='submit' class='btn btn-danger btn-sm'>Eliminar</button>";
    echo "</form>";
    echo "</td>";
    echo "</tr>";
}

sqlsrv_free_stmt($stmt);
sqlsrv_close($conn);
?>