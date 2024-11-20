document.getElementById('reservaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const origen = document.getElementById('origen').value;
    const destino = document.getElementById('destino').value;
    const vuelo_ida = document.getElementById('vuelo_ida').value;
    const vuelo_vuelta = document.getElementById('vuelo_vuelta').value;
    const hotel = document.getElementById('hotel').value;
    const check_in = document.getElementById('check_in').value;
    const check_out = document.getElementById('check_out').value;
    const habitaciones = document.getElementById('habitaciones').value;
    const clase_vuelo = document.getElementById('clase_vuelo').value;
    const tipo_habitacion = document.getElementById('tipo_habitacion').value;
    const necesidades = document.getElementById('necesidades').value;
    const pago = document.getElementById('pago').value;
    const comentarios = document.getElementById('comentarios').value;

    // Aquí puedes enviar los datos a un servidor
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<h2>Reserva Enviada</h2>
        <p>Nombre: ${nombre}</p>
        <p>Email: ${email}</p>
        <p>Teléfono: ${telefono}</p>
        <p>Origen: ${origen}</p>
        <p>Destino: ${destino}</p>
        <p>Vuelo de Ida: ${vuelo_ida}</p>
        <p>Vuelo de Vuelta: ${vuelo_vuelta}</p>
        <p>Hotel: ${hotel}</p>
        <p>Check-In: ${check_in}</p>
        <p>Check-Out: ${check_out}</p>
        <p>Habitaciones: ${habitaciones}</p>
        <p>Clase de Vuelo: ${clase_vuelo}</p>
        <p>Tipo de Habitación: ${tipo_habitacion}</p>
        <p>Necesidades Especiales: ${necesidades}</p>
        <p>Método de Pago: ${pago}</p>
        <p>Comentarios: ${comentarios}</p>`;
});