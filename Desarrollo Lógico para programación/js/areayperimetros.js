let a = parseFloat(prompt('Ingrese el valor del lado A:'));
let b = parseFloat(prompt('Ingrese el valor del lado B:'));
let c = parseFloat(prompt('Ingrese el valor del lado C:'));

// Verificar que los valores son números válidos
if (!isNaN(a) && !isNaN(b) && !isNaN(c) && a > 0 && b > 0 && c > 0) {
    let semiperimetro = (a + b + c) / 2;
    let area = Math.sqrt(semiperimetro * (semiperimetro - a) * (semiperimetro - b) * (semiperimetro - c));
    let perimetro = a + b + c;
    document.write('<h3>Resultados:</h3>');
    document.write('<p>Área: ' + area.toFixed(2) + ' unidades cuadradas</p>');
    document.write('<p>Perímetro: ' + perimetro.toFixed(2) + ' unidades</p>');
} else {
    document.write('Por favor, ingrese valores válidos y positivos para los lados del triángulo.');
}