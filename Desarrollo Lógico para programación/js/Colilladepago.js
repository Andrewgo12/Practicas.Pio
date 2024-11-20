
let horasTrabajadas = parseInt(prompt('Ingrese las horas trabajadas:'));
let valorHora = parseInt(prompt('Ingrese el valor de la hora ($):'));

if (!isNaN(horasTrabajadas) && !isNaN(valorHora) && horasTrabajadas > 0 && valorHora > 0)
    {
    let salarioBruto = horasTrabajadas * valorHora;
    let descuentoSeguridadSocial = salarioBruto * 0.04;
    let descuentoAhorro = salarioBruto * 0.015;
    let salarioNeto = salarioBruto - descuentoSeguridadSocial - descuentoAhorro;
    document.write('<h3>Colilla de Pago del Trabajador</h3>');
    document.write('<p>Horas trabajadas: ' + horasTrabajadas + ' horas</p>');
    document.write('<p>Valor por hora: $' + valorHora.toFixed(2) + '</p>');
    document.write('<p>Salario bruto: $' + salarioBruto.toFixed(2) + '</p>');
    document.write('<p>Descuento por Seguridad Social (4%): $' + descuentoSeguridadSocial.toFixed(2) + '</p>');
    document.write('<p>Descuento por Ahorro (1.5%): $' + descuentoAhorro.toFixed(2) + '</p>');
    document.write('<p><strong>Salario neto: $' + salarioNeto.toFixed(2) + '</strong></p>');

}
else
{
    document.write('Por favor, ingrese valores válidos para las horas trabajadas y el valor por hora.');
}