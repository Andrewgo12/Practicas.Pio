window.onload = function () {
    let info = document.getElementById('informacion');
    let enlaces = document.getElementsByTagName('a');

    // Número de enlaces de la página
    info.innerHTML = 'Número de enlaces: ' + enlaces.length;

    // Dirección a la que enlaza el penúltimo enlace
    if (enlaces.length >= 2) {
        let mensaje = 'El penúltimo enlace apunta a: ' + enlaces[enlaces.length - 2].href;
        info.innerHTML += '<br>' + mensaje;
    }

    // Número de enlaces que enlazan a http://prueba
    let contador = 0;
    for (let i = 0; i < enlaces.length; i++) {
        if (enlaces[i].href === 'http://prueba' || enlaces[i].href === 'http://prueba/') {
            contador++;
        }
    }
    info.innerHTML += '<br>' + contador + ' enlaces apuntan a http://prueba/';

    // Número de enlaces del tercer párrafo
    let parrafos = document.getElementsByTagName('p');
    if (parrafos.length >= 3) {
        enlaces = parrafos[2].getElementsByTagName('a');
        info.innerHTML += '<br>' + 'Número de enlaces del tercer párrafo: ' + enlaces.length;
    }

    // Información adicional
    let totalEnlaces = enlaces.length;
    let penultimoEnlace = enlaces[enlaces.length - 2] ? enlaces[enlaces.length - 2].href : 'N/A';
    let enlacesUltimaSeccion = document.querySelector('#seccion4').getElementsByTagName('a').length;

    // Mostrar información adicional
    const infoAdicional = `
        <br>Total de hipervínculos en la página: ${totalEnlaces} <br>
        Penúltimo hipervínculo en el tercer párrafo: ${penultimoEnlace} <br>
        Número de enlaces en la última sección: ${enlacesUltimaSeccion}
    `;
    document.getElementById('enlacesInfo').innerHTML = infoAdicional;
};