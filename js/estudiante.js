// estudiante.js

// Función para registrar un nuevo estudiante
function registrarEstudiante(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre-estudiante').value;
    const email = document.getElementById('email-estudiante').value;
    const curso = document.getElementById('curso-estudiante').value;
    
    alert(`Estudiante Registrado: ${nombre}, ${email}, ${curso}`);
    almacenarEstudiante(nombre, email, curso);
}

// Función para almacenar estudiante en localStorage
function almacenarEstudiante(nombre, email, curso) {
    const estudiantes = JSON.parse(localStorage.getItem('estudiantes')) || [];
    estudiantes.push({ nombre, email, curso });
    localStorage.setItem('estudiantes', JSON.stringify(estudiantes));
}

// Función para ingresar estudiante
function ingresarEstudiante(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre-registro').value;
    const email = document.getElementById('email-registro').value;
    
    alert(`Estudiante Ingresado: ${nombre}, ${email}`);
}

// Función para consultar notas
function consultarNotas(event) {
    event.preventDefault();
    const studentId = document.getElementById('student-id').value;
    
    alert(`Consultando Notas para ID: ${studentId}`);
}

// Asignar eventos a los botones
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#form-estudiantes-registro button[type="submit"]').addEventListener('click', registrarEstudiante);
    document.querySelector('#form-estudiantes-ingreso button[type="submit"]').addEventListener('click', ingresarEstudiante);
    document.querySelector('#consulta-notas button[type="submit"]').addEventListener('click', consultarNotas);
});