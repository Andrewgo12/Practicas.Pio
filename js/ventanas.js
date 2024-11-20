// ventanas.js

// Funciones para manejar las acciones de los botones
function registrarEstudiante(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre-estudiante').value;
    const email = document.getElementById('email-estudiante').value;
    const curso = document.getElementById('curso-estudiante').value;

    alert(`Estudiante Registrado: ${nombre}, ${email}, ${curso}`);
}

function ingresarEstudiante(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre-registro').value;
    const email = document.getElementById('email-registro').value;

    alert(`Estudiante Ingresado: ${nombre}, ${email}`);
}

function consultarNotas(event) {
    event.preventDefault();
    const studentId = document.getElementById('student-id').value;

    alert(`Consultando Notas para ID: ${studentId}`);
}

function actualizarDatos(event) {
    event.preventDefault();
    const updateId = document.getElementById('update-id').value;
    const newEmail = document.getElementById('new-email').value;
    const newPhone = document.getElementById('new-phone').value;

    alert(`Actualizando Datos para ID: ${updateId}, Nuevo Email: ${newEmail}`);
}

function enviarNotas(event) {
    event.preventDefault();
    const docenteId = document.getElementById('docente-id').value;
    const studentId = document.getElementById('student-id').value;
    const nota = document.getElementById('nota').value;

    alert(`Enviando Nota: ${nota} para Estudiante ID: ${studentId} por Docente ID: ${docenteId}`);
}

// Asignar eventos a los botones
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#form-estudiantes-registro button[type="submit"]').addEventListener('click', registrarEstudiante);
    document.querySelector('#form-estudiantes-ingreso button[type="submit"]').addEventListener('click', ingresarEstudiante);
    document.querySelector('#consulta-notas button[type="submit"]').addEventListener('click', consultarNotas);
    document.querySelector('#actualizar-datos button[type="submit"]').addEventListener('click', actualizarDatos);
    document.querySelector('#enviar-notas button[type="submit"]').addEventListener('click', enviarNotas);
});