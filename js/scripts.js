// Función para registrar estudiantes
function registrarEstudiante() {
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const grado = document.getElementById("grado").value;
    const acudiente = document.getElementById("acudiente").value;

    if (nombre === "" || edad === "" || grado === "" || acudiente === "") {
        alert("Todos los campos son obligatorios.");
        return false;
    }

    const estudiante = { nombre, edad, grado, acudiente };
    let estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || [];
    estudiantes.push(estudiante);
    localStorage.setItem("estudiantes", JSON.stringify(estudiantes));

    mostrarEstudiantes();
    return false;
}

function mostrarEstudiantes() {
    const estudiantesRegistrados = document.getElementById("estudiantesRegistrados");
    estudiantesRegistrados.innerHTML = "";
    let estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || [];
    
    estudiantes.forEach(est => {
        const li = document.createElement("li");
        li.textContent = `Nombre: ${est.nombre}, Edad: ${est.edad}, Grado: ${est.grado}, Acudiente: ${est.acudiente}`;
        estudiantesRegistrados.appendChild(li);
    });
}

// Función para registrar profesores
function registrarProfesor() {
    const nombre = document.getElementById("nombre").value;
    const materia = document.getElementById("materia").value;
    const grado = document.getElementById("grado").value;
    const jornada = document.getElementById("jornada").value;

    if (nombre === "" || materia === "" || grado === "" || jornada === "") {
        alert("Todos los campos son obligatorios.");
        return false;
    }

    const profesor = { nombre, materia, grado, jornada };
    let profesores = JSON.parse(localStorage.getItem("profesores")) || [];
    profesores.push(profesor);
    localStorage.setItem("profesores", JSON.stringify(profesores));

    mostrarProfesores();
    return false;
}

function mostrarProfesores() {
    const profesoresRegistrados = document.getElementById("profesoresRegistrados");
    profesoresRegistrados.innerHTML = "";
    let profesores = JSON.parse(localStorage.getItem("profesores")) || [];
    
    profesores.forEach(prof => {
        const li = document.createElement("li");
        li.textContent = `Nombre: ${prof.nombre}, Materia: ${prof.materia}, Grado: ${prof.grado}, Jornada: ${prof.jornada}`;
        profesoresRegistrados.appendChild(li);
    });
}

// Llamar a las funciones para mostrar los datos al cargar la página
window.onload = function() {
    if (document.getElementById("estudiantesRegistrados")) {
        mostrarEstudiantes();
    }
    if (document.getElementById("profesoresRegistrados")) {
        mostrarProfesores();
    }
};