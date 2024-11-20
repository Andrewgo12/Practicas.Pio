// Función para calcular la potencia de un número
function potencia(a, b) {
    return Math.pow(a, b);
}

// Función para calcular la raíz enésima de un número
function raiz(a, b) {
    return Math.pow(a, 1 / b);
}

// Función para calcular el factorial de un número
function factorial(num) {
    let f = 1; // Asegúrate de declarar la variable con 'let' o 'const'
    for (let i = 1; i <= num; i++) {
        f *= i;
    }
    return f;
}

// Función para resolver la ecuación lineal -a/b
function ecuacion(a, b) {
    try {
        if (b === 0) {
            throw new Error('No se puede dividir por cero');
        }
        return -a / b;
    } catch (error) {
        return error.message;
    }
}

// Solicitar dos números al usuario
let num1 = parseInt(prompt('Número 1:'));
let num2 = parseInt(prompt('Número 2:'));

// Mostrar resultados en la página
document.write(num1 + ' elevado a ' + num2 + ' es = ' + potencia(num1, num2) + '<br>');
document.write('La raíz ' + num2 + ' de ' + num1 + ' es = ' + raiz(num1, num2) + '<br>');

// Cálculo de combinaciones
let nf = factorial(num1);
let mf = factorial(num2);
let nmf = factorial(num1 - num2);
let c = nf / (mf * nmf);
document.write('Las combinaciones son: ' + c + '<br>');

// Mostrar la solución de la ecuación
document.write('La solución de la ecuación es: ' + ecuacion(num1, num2));