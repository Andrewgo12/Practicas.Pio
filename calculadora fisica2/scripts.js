// Definición de constantes
const u0 = 4 * Math.PI * 1e-7; // Permeabilidad magnética en T·m/A
const k = 8.9875517923e9; // Constante de Coulomb en N·m²/C²

// Función auxiliar para obtener valor
function obtenerValor(id) {
    const valor = parseFloat(document.getElementById(id).value);
    return isNaN(valor) ? null : valor;
}

// Calculadora de Distancia
function calcularDistancia() {
    const velocidad = obtenerValor('velocidad');
    const tiempo = obtenerValor('tiempo');
    
    if (velocidad !== null && tiempo !== null) {
        const distancia = velocidad * tiempo;
        document.getElementById('resultadoMovimientos').innerText = `Distancia recorrida: ${distancia} metros`;
    } else {
        document.getElementById('resultadoMovimientos').innerText = 'Por favor, ingresa valores válidos.';
    }
}

// Calculadora de Velocidad Angular
function calcularVelocidadAngular() {
    const frecuencia = obtenerValor('frecuencia');
    
    if (frecuencia !== null) {
        const velocidadAngular = 2 * Math.PI * frecuencia;
        document.getElementById('resultadoVelocidadAngular').innerText = `Velocidad angular: ${velocidadAngular.toFixed(2)} rad/s`;
    } else {
        document.getElementById('resultadoVelocidadAngular').innerText = 'Por favor, ingresa un valor válido.';
    }
}

// Conversión de Rad/s a RPM
function convertirRadSRpm() {
    const rad_s = obtenerValor('rad_s');

    if (rad_s !== null) {
        const rpm = rad_s * (60 / (2 * Math.PI));
        document.getElementById('resultadoConversionRadSRpm').innerText = `RPM: ${rpm.toFixed(2)} rpm`;
    } else {
        document.getElementById('resultadoConversionRadSRpm').innerText = 'Por favor, ingresa un valor válido.';
    }
}

// Conversión de RPM a Rad/s
function convertirRpmARadS() {
    const rpm = obtenerValor('rpm');

    if (rpm !== null) {
        const rad_s = rpm * (2 * Math.PI / 60);
        document.getElementById('resultadoConversionRpmARadS').innerText = `Rad/s: ${rad_s.toFixed(2)} rad/s`;
    } else {
        document.getElementById('resultadoConversionRpmARadS').innerText = 'Por favor, ingresa un valor válido.';
    }
}

// Conversión de Velocidad Angular a Frecuencia
function convertirVelocidadAngularAFrecuencia() {
    const velocidadAngular = obtenerValor('velocidadAngular');

    if (velocidadAngular !== null) {
        const frecuencia = velocidadAngular / (2 * Math.PI);
        document.getElementById('resultadoConversionVelocidadAngularAFrecuencia').innerText = `Frecuencia: ${frecuencia.toFixed(2)} Hz`;
    } else {
        document.getElementById('resultadoConversionVelocidadAngularAFrecuencia').innerText = 'Por favor, ingresa un valor válido.';
    }
}

// Conversión de Frecuencia a Velocidad Angular
function convertirFrecuenciaAVelocidadAngular() {
    const frecuencia = obtenerValor('frecuenciaAngular');

    if (frecuencia !== null) {
        const velocidadAngular = 2 * Math.PI * frecuencia;
        document.getElementById('resultadoConversionFrecuenciaAVelocidadAngular').innerText = `Velocidad Angular: ${velocidadAngular.toFixed(2)} rad/s`;
    } else {
        document.getElementById('resultadoConversionFrecuenciaAVelocidadAngular').innerText = 'Por favor, ingresa un valor válido.';
    }
}

// Calculadora de Densidad
function calcularDensidad() {
    const masa = obtenerValor('masa');
    const volumen = obtenerValor('volumen');

    if (masa !== null && volumen !== null) {
        const densidad = masa / volumen;
        document.getElementById('resultadoDensidad').innerText = `Densidad: ${densidad.toFixed(2)} kg/m³`;
    } else {
        document.getElementById('resultadoDensidad').innerText = 'Por favor, ingresa valores válidos.';
    }
}

// Calculadora de Fuerza Magnética sobre una Carga en Movimiento
function calcularFuerzaMagnetica() {
    const carga = obtenerValor('carga');
    const velocidad = obtenerValor('velocidad');
    const campoMagnetico = obtenerValor('campoMagnetico');

    if (carga !== null && velocidad !== null && campoMagnetico !== null) {
        const fuerza = carga * velocidad * campoMagnetico;
        document.getElementById('resultadoFuerzaMagnetica').innerText = `Fuerza Magnética: ${fuerza.toFixed(2)} N`;
    } else {
        document.getElementById('resultadoFuerzaMagnetica').innerText = 'Por favor, ingresa valores válidos.';
    }
}

// Calculadora de Fuerza entre dos Corrientes
function calcularFuerzaEntreCorrientes() {
    const corriente1 = obtenerValor('corriente1');
    const corriente2 = obtenerValor('corriente2');
    const distancia = obtenerValor('distanciaCorrientes');

    if (corriente1 !== null && corriente2 !== null && distancia > 0) {
        const fuerza = (u0 / (2 * Math.PI)) * ((corriente1 * corriente2) / distancia);
        document.getElementById('resultadoFuerzaEntreCorrientes').innerText = `Fuerza entre Corrientes: ${fuerza.toFixed(2)} N/m`;
    } else {
        document.getElementById('resultadoFuerzaEntreCorrientes').innerText = 'Por favor, ingresa valores válidos.';
    }
}

// Calculadora de Fuerza Eléctrica entre dos Cargas
function calcularFuerzaElectrica() {
    const carga1 = obtenerValor('carga1');
    const carga2 = obtenerValor('carga2');
    const distancia = obtenerValor('distanciaCargas');

    if (carga1 !== null && carga2 !== null && distancia > 0) {
        const fuerza = (k * carga1 * carga2) / (distancia * distancia);
        document.getElementById('resultadoFuerzaElectrica').innerText = `Fuerza Eléctrica: ${fuerza.toFixed(2)} N`;
    } else {
        document.getElementById('resultadoFuerzaElectrica').innerText = 'Por favor, ingresa valores válidos.';
    }
}

// Calculadora de Campo Eléctrico de una Carga
function calcularCampoElectrico() {
    const carga = obtenerValor('cargaCampo');
    const distancia = obtenerValor('distanciaCampo');

    if (carga !== null && distancia > 0) {
        const campoElectrico = (k * carga) / (distancia * distancia);
        document.getElementById('resultadoCampoElectrico').innerText = `Campo Eléctrico: ${campoElectrico.toFixed(2)} N/C`;
    } else {
        document.getElementById('resultadoCampoElectrico').innerText = 'Por favor, ingresa valores válidos.';
    }
}

// Calculadora de Potencial Eléctrico de una Carga
function calcularPotencialElectrico() {
    const carga = obtenerValor('cargaPotencial');
    const distancia = obtenerValor('distanciaPotencial');

    if (carga !== null && distancia > 0) {
        const potencial = (k * carga) / distancia;
        document.getElementById('resultadoPotencialElectrico').innerText = `Potencial Eléctrico: ${potencial.toFixed(2)} V`;
    } else {
        document.getElementById('resultadoPotencialElectrico').innerText = 'Por favor, ingresa valores válidos.';
    }
}

// Calculadora de Capacitancia de un Condensador
function calcularCapacitancia() {
    const carga = obtenerValor('cargaCapacitor');
    const voltaje = obtenerValor('voltajeCapacitor');

    if (carga !== null && voltaje > 0) {
        const capacitancia = carga / voltaje;
        document.getElementById('resultadoCapacitancia').innerText = `Capacitancia: ${capacitancia.toFixed(2)} F`;
    } else {
        document.getElementById('resultadoCapacitancia').innerText = 'Por favor, ingresa valores válidos.';
    }
}

// Conversión de Capacitancia
function convertirCapacitancia() {
    const capacitancia = obtenerValor('capacitancia');

    if (capacitancia !== null) {
        const capacitancia_uF = capacitancia * 1e6;
        const capacitancia_nF = capacitancia * 1e9;
        const capacitancia_pF = capacitancia * 1e12;

        document.getElementById('resultadoCapacitanciaConversion').innerText = `Capacitancia: ${capacitancia.toFixed(2)} F\n` +
            `${capacitancia_uF.toFixed(2)} μF\n` +
            `${capacitancia_nF.toFixed(2)} nF\n` +
            `${capacitancia_pF.toFixed(2)} pF`;
    } else {
        document.getElementById('resultadoCapacitanciaConversion').innerText = 'Por favor, ingresa un valor válido.';
    }
}

// Añadir event listeners a los botones
document.getElementById('btnCalcularDistancia').addEventListener('click', calcularDistancia);
document.getElementById('btnCalcularVelocidadAngular').addEventListener('click', calcularVelocidadAngular);
document.getElementById('btnConvertirRadSRpm').addEventListener('click', convertirRadSRpm);
document.getElementById('btnConvertirRpmARadS').addEventListener('click', convertirRpmARadS);
document.getElementById('btnConvertirVelocidadAngularAFrecuencia').addEventListener('click', convertirVelocidadAngularAFrecuencia);
document.getElementById('btnConvertirFrecuenciaAVelocidadAngular').addEventListener('click', convertirFrecuenciaAVelocidadAngular);
document.getElementById('btnCalcularDensidad').addEventListener('click', calcularDensidad);
document.getElementById('btnCalcularFuerzaMagnetica').addEventListener('click', calcularFuerzaMagnetica);
document.getElementById('btnCalcularFuerzaEntreCorrientes').addEventListener('click', calcularFuerzaEntreCorrientes);
document.getElementById('btnCalcularFuerzaElectrica').addEventListener('click', calcularFuerzaElectrica);
document.getElementById('btnCalcularCampoElectrico').addEventListener('click', calcularCampoElectrico);
document.getElementById('btnCalcularPotencialElectrico').addEventListener('click', calcularPotencialElectrico);
document.getElementById('btnCalcularCapacitancia').addEventListener('click', calcularCapacitancia);
document.getElementById('btnConvertirCapacitancia').addEventListener('click', convertirCapacitancia);