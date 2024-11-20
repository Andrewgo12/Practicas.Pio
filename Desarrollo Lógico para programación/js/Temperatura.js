let opcion = parseInt(prompt("Seleccione una opción para convertir la temperatura:\n1) Celsius a Fahrenheit\n2) Celsius a Kelvin\n3) Fahrenheit a Celsius\n4) Fahrenheit a Kelvin\n5) Kelvin a Celsius\n6) Kelvin a Fahrenheit"));

let temperatura = parseFloat(prompt("Ingrese el valor de la temperatura:"));

if (!isNaN(opcion) && !isNaN(temperatura)) {
    let resultado;

    switch (opcion) {
        case 1: // Celsius a Fahrenheit
            resultado = (temperatura * 9 / 5) + 32;
            document.write(`<h3>Conversión de Temperatura</h3>`);
            document.write(`<p>${temperatura.toFixed(2)} °C es igual a ${resultado.toFixed(2)} °F</p>`);
            break;
        case 2: // Celsius a Kelvin
            resultado = temperatura + 273.15;
            document.write(`<h3>Conversión de Temperatura</h3>`);
            document.write(`<p>${temperatura.toFixed(2)} °C es igual a ${resultado.toFixed(2)} K</p>`);
            break;
        case 3: // Fahrenheit a Celsius
            resultado = (temperatura - 32) * 5 / 9;
            document.write(`<h3>Conversión de Temperatura</h3>`);
            document.write(`<p>${temperatura.toFixed(2)} °F es igual a ${resultado.toFixed(2)} °C</p>`);
            break;
        case 4: // Fahrenheit a Kelvin
            resultado = (temperatura - 32) * 5 / 9 + 273.15;
            document.write(`<h3>Conversión de Temperatura</h3>`);
            document.write(`<p>${temperatura.toFixed(2)} °F es igual a ${resultado.toFixed(2)} K</p>`);
            break;
        case 5: // Kelvin a Celsius
            resultado = temperatura - 273.15;
            document.write(`<h3>Conversión de Temperatura</h3>`);
            document.write(`<p>${temperatura.toFixed(2)} K es igual a ${resultado.toFixed(2)} °C</p>`);
            break;
        case 6: // Kelvin a Fahrenheit
            resultado = (temperatura - 273.15) * 9 / 5 + 32;
            document.write(`<h3>Conversión de Temperatura</h3>`);
            document.write(`<p>${temperatura.toFixed(2)} K es igual a ${resultado.toFixed(2)} °F</p>`);
            break;
        default:
            document.write("Por favor, seleccione una opción válida.");
            break;
    }
} else {
    document.write("Por favor, ingrese una opción válida y una temperatura correcta.");
}