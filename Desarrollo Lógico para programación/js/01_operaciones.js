let num1 = parseFloat(prompt("Introduce el primer número:"));
let num2 = parseFloat(prompt("Introduce el segundo número:"));

function operaciones(num1, num2) {
    let suma = num1 + num2;
    let resta = num1 - num2;
    let multiplicacion = num1 * num2;
    let division = num2 !== 0 ? num1 / num2 : "Error: División por cero";
    return {
        suma: suma,
        resta: resta,
        multiplicacion: multiplicacion,
        division: division
    };
}

function Resultados(operaciones) {
    document.write("<h3>Resultados de las operaciones:</h3>");
    document.write("<p>Suma: " + operaciones.suma + "</p>");
    document.write("<p>Resta: " + operaciones.resta + "</p>");
    document.write("<p>Multiplicación: " + operaciones.multiplicacion + "</p>");
    document.write("<p>División: " + operaciones.division + "</p>");
}

var resultados = operaciones(num1, num2);
Resultados(resultados);

