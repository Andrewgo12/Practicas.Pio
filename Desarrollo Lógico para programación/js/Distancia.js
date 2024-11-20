let x1 = parseFloat(prompt('Ingrese la coordenada x1:'));
let y1 = parseFloat(prompt('Ingrese la coordenada y1:'));
let x2 = parseFloat(prompt('Ingrese la coordenada x2:'));
let y2 = parseFloat(prompt('Ingrese la coordenada y2:'));

if (!isNaN(x1) && !isNaN(y1) && !isNaN(x2) && !isNaN(y2)) {
    let distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    document.write('<h3>Distancia entre dos puntos</h3>');
    document.write(`<p>Punto 1 (x1, y1): (${x1}, ${y1})</p>`);
    document.write(`<p>Punto 2 (x2, y2): (${x2}, ${y2})</p>`);
    document.write(`<p><strong>Distancia: ${distancia.toFixed(2)} unidades</strong></p>`);
} else {
    document.write('Por favor, ingrese valores válidos para las coordenadas.');
}