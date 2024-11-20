// almacenamiento.js

// Clase para manejar el almacenamiento de estudiantes
class AlmacenamientoEstudiantes {
    static obtenerEstudiantes() {
        return JSON.parse(localStorage.getItem('estudiantes')) || [];
    }

    static almacenarEstudiante(estudiante) {
        const estudiantes = this.obtenerEstudiantes();
        estudiantes.push(estudiante);
        localStorage.setItem('estudiantes', JSON.stringify(estudiantes));
    }

    static actualizarEstudiante(id, newData) {
        const estudiantes = this.obtenerEstudiantes();
        const index = estudiantes.findIndex(est => est.id === id);
        if (index !== -1) {
            estudiantes[index] = { ...estudiantes[index], ...newData };
            localStorage.setItem('estudiantes', JSON.stringify(estudiantes));
        }
    }

    static eliminarEstudiante(id) {
        const estudiantes = this.obtenerEstudiantes();
        const filteredEstudiantes = estudiantes.filter(est => est.id !== id);
        localStorage.setItem('estudiantes', JSON.stringify(filteredEstudiantes));
    }
}

// Clase para manejar el almacenamiento de profesores
class AlmacenamientoProfesores {
    static obtenerProfesores() {
        return JSON.parse(localStorage.getItem('profesores')) || [];
    }

    static almacenarProfesor(profesor) {
        const profesores = this.obtenerProfesores();
        profesores.push(profesor);
        localStorage.setItem('profesores', JSON.stringify(profesores));
    }

    static actualizarProfesor(id, newData) {
        const profesores = this.obtenerProfesores();
        const index = profesores.findIndex(prof => prof.id === id);
        if (index !== -1) {
            profesores[index] = { ...profesores[index], ...newData };
            localStorage.setItem('profesores', JSON.stringify(profesores));
        }
    }

    static eliminarProfesor(id) {
        const profesores = this.obtenerProfesores();
        const filteredProfesores = profesores.filter(prof => prof.id !== id);
        localStorage.setItem('profesores', JSON.stringify(filteredProfesores));
    }
}

// Ejemplo de uso
document.addEventListener('DOMContentLoaded', () => {
    const formEstudiante = document.querySelector('#form-estudiantes-registro');
    const formProfesor = document.querySelector('#form-profesores-registro');

    formEstudiante.addEventListener('submit', (event) => {
        event.preventDefault();
        const nombre = document.getElementById('nombre-estudiante').value;
        const email = document.getElementById('email-estudiante').value;
        const curso = document.getElementById('curso-estudiante').value;
        const id = Date.now(); // Generar un ID único

        AlmacenamientoEstudiantes.almacenarEstudiante({ id, nombre, email, curso });
        alert(`Estudiante ${nombre} almacenado con éxito.`);
    });

    formProfesor.addEventListener('submit', (event) => {
        event.preventDefault();
        const nombre = document.getElementById('nombre-profesor').value;
        const email = document.getElementById('email-profesor').value;
        const curso = document.getElementById('curso-profesor').value;
        const id = Date.now(); // Generar un ID único

        AlmacenamientoProfesores.almacenarProfesor({ id, nombre, email, curso });
        alert(`Profesor ${nombre} almacenado con éxito.`);
    });
});