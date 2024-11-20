// Pedir al usuario que ingrese un número de dos cifras
let numero = parseInt(prompt('Ingrese un número de dos cifras:'));

// Verificar que el número tiene dos dígitos
if (numero >= 10 && numero <= 99) {
    // Obtener el primer y segundo dígito
    let primerDigito = Math.floor(numero / 10);
    let segundoDigito = numero % 10;

    // Invertir el número
    let numeroInvertido = (segundoDigito * 10) + primerDigito;

    // Mostrar el resultado
    document.write('El número original es: ' + numero);
    document.write('<br>');
    document.write('El número invertido es: ' + numeroInvertido);
} else {
    // Mostrar mensaje de error si no es un número de dos dígitos
    document.write('Por favor ingrese un número válido de dos dígitos.');
}
