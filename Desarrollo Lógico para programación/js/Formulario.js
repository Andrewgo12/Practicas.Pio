document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío del formulario

    if (validarFormulario()) {
        alert('Formulario enviado con éxito.');
        this.reset(); // Restablecer el formulario después de enviar
    }
});

// Función para validar el formulario
function validarFormulario() {
    let isValid = true;
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const genero = document.getElementById('genero').value;

    if (!nombre || nombre.length < 2) {
        mostrarError('nombre', 'Por favor, ingrese un nombre válido.');
        isValid = false;
    } else {
        ocultarError('nombre');
    }

    if (!apellido || apellido.length < 2) {
        mostrarError('apellido', 'Por favor, ingrese un apellido válido.');
        isValid = false;
    } else {
        ocultarError('apellido');
    }

    if (!validarEmail(correo)) {
        mostrarError('correo', 'Por favor, ingrese un correo electrónico válido.');
        isValid = false;
    } else {
        ocultarError('correo');
    }

    if (!validarTelefono(telefono)) {
        mostrarError('telefono', 'Por favor, ingrese un número de teléfono válido.');
        isValid = false;
    } else {
        ocultarError('telefono');
    }

    if (!genero) {
        mostrarError('genero', 'Por favor, seleccione un género.');
        isValid = false;
    } else {
        ocultarError('genero');
    }

    return isValid;
}

// Función para validar el formato de correo electrónico
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Función para validar el formato de teléfono
function validarTelefono(telefono) {
    const regex = /^\d{10}$/; // Cambia según el formato que necesites
    return regex.test(telefono);
}

// Función para mostrar errores en el formulario
function mostrarError(campo, mensaje) {
    const campoError = document.createElement('span');
    campoError.className = 'error';
    campoError.innerText = mensaje;
    const campoInput = document.getElementById(campo);
    if (!campoInput.nextElementSibling || !campoInput.nextElementSibling.classList.contains('error')) {
        campoInput.parentNode.insertBefore(campoError, campoInput.nextSibling);
    }
}

// Función para ocultar errores
function ocultarError(campo) {
    const campoInput = document.getElementById(campo);
    if (campoInput.nextElementSibling && campoInput.nextElementSibling.classList.contains('error')) {
        campoInput.nextElementSibling.remove();
    }
}

// Función para limpiar el formulario
function limpiarFormulario() {
    const formulario = document.getElementById('formulario');
    formulario.reset();
    const errores = formulario.querySelectorAll('.error');
    errores.forEach(error => error.remove());
}

// Función para activar/desactivar el botón de envío
function habilitarBotonEnviar() {
    const botonEnviar = document.querySelector('button[type="submit"]');
    const checkbox = document.querySelector('input[type="checkbox"]');
    botonEnviar.disabled = !checkbox.checked;
}

// Agregar un evento para el checkbox
const checkbox = document.querySelector('input[type="checkbox"]');
checkbox.addEventListener('change', habilitarBotonEnviar);

// Función para llenar campos de ejemplo (para pruebas)
function llenarEjemplo() {
    document.getElementById('nombre').value = 'Juan';
    document.getElementById('apellido').value = 'Pérez';
    document.getElementById('correo').value = 'juan.perez@example.com';
    document.getElementById('telefono').value = '1234567890';
    document.getElementById('genero').value = 'masculino';
}

// Función para manejar el cambio de género
function cambiarGenero() {
    const genero = document.getElementById('genero').value;
    const mensajeGenero = document.getElementById('mensajeGenero');
    if (genero === 'masculino') {
        mensajeGenero.innerText = 'Has seleccionado Masculino';
        mensajeGenero.style.color = '#3498db';
    } else if (genero === 'femenino') {
        mensajeGenero.innerText = 'Has seleccionado Femenino';
        mensajeGenero.style.color = '#e57373';
    } else {
        mensajeGenero.innerText = '';
    }
}

// Agregar evento de cambio al select de género
document.getElementById('genero').addEventListener('change', cambiarGenero);

// Llamar a la función de llenar ejemplo si se necesita para pruebas
llenarEjemplo();