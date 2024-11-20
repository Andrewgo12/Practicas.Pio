document.addEventListener("DOMContentLoaded", function () {
    const notification = document.getElementById('notification');
    const notificationMessage = document.getElementById('notificationMessage');
    const closeNotification = document.getElementById('closeNotification');
    const displayArea = document.getElementById('displayArea');

    // Array para almacenar los datos
    const dataStorage = JSON.parse(localStorage.getItem('dataStorage')) || []; // Cargar datos desde localStorage

    // Función notificaciones
    function showNotification(message) {
        notificationMessage.textContent = message;
        notification.style.display = 'block';
    }

    // Función cerrar notificaciones
    closeNotification.addEventListener('click', function () {
        notification.style.display = 'none';
    });

    // Validar campos vacíos
    function validateEmptyFields(fields) {
        let valid = true;
        fields.forEach(field => {
            if (field.value.trim() === "") {
                valid = false;
                showNotification(`El campo ${field.name} es obligatorio.`);
            }
        });
        return valid;
    }

    // Validar la longitud mínima
    function validateMinLength(field, minLength) {
        if (field.value.length < minLength) {
            showNotification(`${field.name} debe tener al menos ${minLength} caracteres.`);
            return false;
        }
        return true;
    }

    // Validar números
    function validateNumber(numberField) {
        if (isNaN(numberField.value) || numberField.value <= 0) {
            showNotification('Por favor, ingresa un número válido.');
            return false;
        }
        return true;
    }

    // Función para mostrar los datos en el área de visualización
    function displayData() {
        displayArea.innerHTML = ""; // Limpiar el área de visualización
        dataStorage.forEach(data => {
            const div = document.createElement('div');
            div.textContent = JSON.stringify(data); // Muestra los datos en formato JSON
            displayArea.appendChild(div);
        });
    }

    // Almacenar datos y mostrar
    function storeData(title, value) {
        const date = new Date();
        const formattedDate = date.toLocaleString(); // Formato de fecha y hora
        const newData = { title, value, date: formattedDate };
        dataStorage.push(newData);
        localStorage.setItem('dataStorage', JSON.stringify(dataStorage)); // Guardar en localStorage
        displayData(); // Mostrar los datos actualizados
    }

    // Manejo del evento submit para cada formulario
    const forms = document.querySelectorAll('.form');
    forms.forEach(form => {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Evitar el envío del formulario

            const fields = Array.from(form.querySelectorAll('input, select, textarea'));
            if (validateEmptyFields(fields)) {
                const formData = {};
                fields.forEach(field => {
                    formData[field.name] = field.value; // Almacenar los valores en un objeto
                });
                storeData(formData.title, formData.value); // Llamar a la función para almacenar datos
                form.reset(); // Limpiar el formulario después del envío
                showNotification("Datos almacenados con éxito."); // Notificación de éxito
            }
        });
    });

    // Validaciones específicas para formularios individuales
    document.getElementById('formReservas').addEventListener('submit', function (event) {
        const fields = [
            document.getElementById('nombreReserva'),
            document.getElementById('fechaReserva'),
            document.getElementById('personasReserva')
        ];

        if (!validateEmptyFields(fields) || !validateNumber(document.getElementById('personasReserva'))) {
            event.preventDefault();
        } else {
            const formData = {
                title: 'Reserva',
                value: document.getElementById('nombreReserva').value,
                date: new Date().toLocaleString()
            };
            dataStorage.push(formData); // Almacenar datos
            displayData();
            showNotification('Datos guardados correctamente.');
        }
    });

    document.getElementById('formHabitaciones').addEventListener('submit', function (event) {
        const fields = [
            document.getElementById('tipoHabitacion'),
            document.getElementById('numeroHabitacion')
        ];

        if (!validateEmptyFields(fields)) {
            event.preventDefault();
        } else {
            const formData = {
                title: 'Habitación',
                value: document.getElementById('tipoHabitacion').value,
                date: new Date().toLocaleString()
            };
            dataStorage.push(formData);
            displayData();
            showNotification('Datos guardados correctamente.');
        }
    });

    document.getElementById('formHuespedes').addEventListener('submit', function (event) {
        const fields = [
            document.getElementById('nombreHuesped'),
            document.getElementById('documentoHuesped'),
            document.getElementById('telefonoHuesped')
        ];

        if (!validateEmptyFields(fields)) {
            event.preventDefault();
        } else {
            const formData = {
                title: 'Huésped',
                value: document.getElementById('nombreHuesped').value,
                date: new Date().toLocaleString()
            };
            dataStorage.push(formData);
            displayData();
            showNotification('Datos guardados correctamente.');
        }
    });

    document.getElementById('formUsuarios').addEventListener('submit', function (event) {
        const fields = [
            document.getElementById('nombreUsuario'),
            document.getElementById('emailUsuario'),
            document.getElementById('passwordUsuario')
        ];

        if (!validateEmptyFields(fields)) {
            event.preventDefault();
        } else {
            const formData = {
                title: 'Usuario',
                value: document.getElementById('nombreUsuario').value,
                date: new Date().toLocaleString()
            };
            dataStorage.push(formData);
            displayData();
            showNotification('Datos guardados correctamente.');
        }
    });

    document.getElementById('formRoles').addEventListener('submit', function (event) {
        const fields = [
            document.getElementById('nombreRol'),
            document.getElementById('descripcionRol')
        ];

        if (!validateEmptyFields(fields)) {
            event.preventDefault();
        } else {
            const formData = {
                title: 'Rol',
                value: document.getElementById('nombreRol').value,
                date: new Date().toLocaleString()
            };
            dataStorage.push(formData);
            displayData();
            showNotification('Datos guardados correctamente.');
        }
    });

    document.getElementById('formPaquetes').addEventListener('submit', function (event) {
        const fields = [
            document.getElementById('nombrePaquete'),
            document.getElementById('precioPaquete'),
            document.getElementById('descripcionPaquete')
        ];

        if (!validateEmptyFields(fields) || !validateNumber(document.getElementById('precioPaquete'))) {
            event.preventDefault();
        } else {
            const formData = {
                title: 'Paquete',
                value: document.getElementById('nombrePaquete').value,
                date: new Date().toLocaleString()
            };
            dataStorage.push(formData);
            displayData();
            showNotification('Datos guardados correctamente.');
        }
    });

    document.getElementById('formInventarios').addEventListener('submit', function (event) {
        const fields = [
            document.getElementById('nombreProducto'),
            document.getElementById('cantidadProducto'),
            document.getElementById('categoriaProducto')
        ];

        if (!validateEmptyFields(fields) || !validateNumber(document.getElementById('cantidadProducto'))) {
            event.preventDefault();
        } else {
            const formData = {
                title: 'Producto',
                value: document.getElementById('nombreProducto').value,
                date: new Date().toLocaleString()
            };
            dataStorage.push(formData);
            displayData();
            showNotification('Datos guardados correctamente.');
        }
    });
});
document.getElementById('verOtroHtml').addEventListener('click', function() {
    window.location.href = 'inforegistro.html';
});

// Opcional: Cerrar la notificación al hacer clic en el botón
document.getElementById('closeNotification').addEventListener('click', function() {
    document.getElementById('notification').style.display = 'none';
});

// Función para mostrar los datos ingresados
function mostrarDatos(formId) {
    const form = document.getElementById(formId);
    const datos = new FormData(form);
    const datosIngresados = document.getElementById('datosIngresados');
    datosIngresados.innerHTML = ''; // Limpiar datos previos

    // Recoger datos del formulario
    datos.forEach((value, key) => {
        const div = document.createElement('div');
        div.className = 'resultado';
        div.textContent = `${key}: ${value}`;
        datosIngresados.appendChild(div);
    });

    // Mostrar fecha y hora
    const ahora = new Date();
    const fechaHora = document.getElementById('fechaHora');
    fechaHora.textContent = `Fecha y Hora de Registro: ${ahora.toLocaleString()}`;

    // Mostrar la sección de resultados
    document.getElementById('resultado').style.display = 'block';
}

// Manejar los envíos de formularios
const formularios = ['formReservas', 'formHabitaciones', 'formHuespedes', 'formUsuarios', 'formRoles', 'formPaquetes', 'formInventarios'];

formularios.forEach(formId => {
    document.getElementById(formId).addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario
        mostrarDatos(formId);
    });
});

// Evento para redirigir al otro HTML
document.getElementById('verOtroHtml').addEventListener('click', function() {
    window.location.href = 'inforegistro.html';
});

// Opcional: Cerrar la notificación al hacer clic en el botón
document.getElementById('closeNotification').addEventListener('click', function() {
    document.getElementById('notification').style.display = 'none';
});