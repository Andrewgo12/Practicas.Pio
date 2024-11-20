let preguntas = [
    // Matemáticas
    { pregunta: "¿Cuál es el resultado de 5 + 7?\n1) 10\n2) 12\n3) 14\n4) 16", correcta: 2 },
    { pregunta: "¿Cuánto es 9 x 3?\n1) 27\n2) 21\n3) 36\n4) 18", correcta: 1 },
    { pregunta: "¿Cuál es el resultado de 15 - 8?\n1) 5\n2) 7\n3) 8\n4) 6", correcta: 2 },
    { pregunta: "¿Cuánto es 36 ÷ 6?\n1) 5\n2) 8\n3) 6\n4) 9", correcta: 3 },
    { pregunta: "¿Cuál es el resultado de 4^2 (4 elevado al cuadrado)?\n1) 12\n2) 14\n3) 16\n4) 18", correcta: 3 },
    { pregunta: "¿Qué es la raíz cuadrada de 64?\n1) 6\n2) 8\n3) 10\n4) 12", correcta: 2 },
    { pregunta: "¿Cuál es el valor de π (pi)?\n1) 3.14\n2) 3.12\n3) 3.16\n4) 3.18", correcta: 1 },
    { pregunta: "¿Cuánto es 7 x 9?\n1) 63\n2) 72\n3) 54\n4) 49", correcta: 1 },
    { pregunta: "¿Qué es 10 % de 200?\n1) 20\n2) 10\n3) 30\n4) 40", correcta: 1 },
    { pregunta: "¿Cuál es el resultado de 12 ÷ 4?\n1) 4\n2) 2\n3) 3\n4) 5", correcta: 3 },
];

let puntajeTotal = 0;
let respuestasUsuario = [];

// Recorre las preguntas y obtiene respuestas del usuario
for (let i = 0; i < preguntas.length; i++) {
    let respuesta = parseInt(prompt(preguntas[i].pregunta));
    respuestasUsuario.push(respuesta);

    if (respuesta === preguntas[i].correcta) {
        puntajeTotal += 2;
    }
}

// Mostrar resultados en el HTML
const resultadoDiv = document.getElementById('resultados');
resultadoDiv.innerHTML = '<h3>Puntaje Final del Postulante</h3>';
resultadoDiv.innerHTML += `<p>Puntaje total: ${puntajeTotal}</p>`;
resultadoDiv.innerHTML += '<h4>Resumen de Preguntas y Respuestas</h4>';
for (let i = 0; i < preguntas.length; i++) {
    resultadoDiv.innerHTML += `
        <div class="resultado">
            <p><strong>Pregunta:</strong> ${preguntas[i].pregunta.replace(/\n/g, '<br>')}</p>
            <p><strong>Respuesta correcta:</strong> ${preguntas[i].correcta}</p>
            <p><strong>Tu respuesta:</strong> ${respuestasUsuario[i] ? respuestasUsuario[i] : 'No respondida'}</p>
        </div>
    `;
}