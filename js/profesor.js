// profesores.js

// Función para registrar un nuevo profesor
function registrarProfesor(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre-profesor').value;
    const email = document.getElementById('email-profesor').value;
    const curso = document.getElementById('curso-profesor').value;
    
    // Aquí se pueden agregar validaciones o enviar datos
    alert(`Profesor Registrado: ${nombre}, ${email}, ${curso}`);
    // Almacenar en localStorage (opcional)
    almacenarProfesor(nombre, email, curso);
}

// Función para almacenar profesor en localStorage
function almacenarProfesor(nombre, email, curso) {
    const profesores = JSON.parse(localStorage.getItem('profesores')) || [];
    profesores.push({ nombre, email, curso });
    localStorage.setItem('profesores', JSON.stringify(profesores));
}

// Función para enviar notas
function enviarNotas(event) {
    event.preventDefault();
    const docenteId = document.getElementById('docente-id').value;
    const studentId = document.getElementById('student-id').value;
    const nota = document.getElementById('nota').value;
    
    alert(`Enviando Nota: ${nota} para Estudiante ID: ${studentId} por Docente ID: ${docenteId}`);
    document.getElementById('enviar-notas').submit();
}

// Asignar eventos a los botones
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#form-profesores-registro button[type="submit"]').addEventListener('click', registrarProfesor);
    document.querySelector('#enviar-notas button[type="submit"]').addEventListener('click', enviarNotas);
});