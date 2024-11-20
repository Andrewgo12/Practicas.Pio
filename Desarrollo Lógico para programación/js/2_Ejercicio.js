
// Pedimos los datos al usuario
var velocidad = parseFloat(prompt("Introduce la velocidad del vehículo (m/s):"));
var tiempo = parseFloat(prompt("Introduce el tiempo transcurrido (s):"));

// Calculamos la distancia usando la fórmula MRU
var distancia = velocidad * tiempo;

// Mostramos el resultado
document.write("<h3>Resultado:</h3>");
document.write("<p>La distancia recorrida por el vehículo es: " + distancia + " metros.</p>");