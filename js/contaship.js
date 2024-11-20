/*
A partir de la página web proporcionada y utilizando las funciones DOM, mostrar por pantalla
la siguiente información:
Número de enlaces de la página
Dirección a la que enlaza el penúltimo enlace
Numero de enlaces que enlazan a http://prueba
Número de enlaces del tercer párrafo
*/

document.addEventListener('DOMContentLoaded', function () {
    // Obtener todos los hipervínculos de la página
    const enlaces = document.querySelectorAll('a');
    const totalEnlaces = enlaces.length;

    // Obtener el penúltimo hipervínculo
    const penultimoEnlace = enlaces[totalEnlaces - 2].getAttribute('href');

    // Contar los enlaces en la última sección (Sección 4)
    const ultimaSeccion = document.querySelector('#seccion4');
    const enlacesUltimaSeccion = ultimaSeccion.querySelectorAll('a').length;

    // Mostrar la información en el pie de página
    const info = `
        Total de hipervínculos en la página: ${totalEnlaces} <br>
        Penúltimo hipervínculo: ${penultimoEnlace} <br>
        Número de enlaces en la última sección: ${enlacesUltimaSeccion}
    `;
    document.getElementById('enlacesInfo').innerHTML = info;
});