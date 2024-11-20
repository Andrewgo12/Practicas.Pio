// Abre el modal de actualización
function abrirModalActualizar(id, descripcion, fecha) {
    document.getElementById('actualizarId').value = id;
    document.getElementById('actualizarDescripcion').value = descripcion;
    document.getElementById('actualizarFecha').value = fecha;

    $('#modalActualizar').modal('show');
}

// Abre el modal de detalles
$('#modalDetail').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var id = button.data('id');
    var descripcion = button.data('descripcion');
    var fecha = button.data('fecha');

    var modal = $(this);
    modal.find('#modalId').text(id);
    modal.find('#modalDescripcion').text(descripcion);
    modal.find('#modalFecha').text(fecha);
});