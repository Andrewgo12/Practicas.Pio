let listaEmpleados = [];

const objEmpleado = {
    id: '',
    nombre: '',
    cargo: ''
}

let editando = false;

const formulario = document.querySelector('#employeeForm'); // Actualizado al ID correcto
const nombreInput = document.querySelector('#name'); // Actualizado al ID correcto
const cargoInput = document.querySelector('#cargoId'); // Actualizado al ID correcto
const btnAgregar = formulario.querySelector('button[type="submit"]');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

    if (nombreInput.value === '' || cargoInput.value === '') {
        alert('Campos obligatorios');
        return;
    }

    if (editando) {
        editarEmpleado();
    } else {
        objEmpleado.id = Date.now();
        objEmpleado.nombre = nombreInput.value;
        objEmpleado.cargo = cargoInput.value;

        agregarEmpleado();
    }
}

function agregarEmpleado() {
    listaEmpleados.push({ ...objEmpleado });
    mostrarEmpleado();
    formulario.reset();
    limpiarObjeto();
}

function mostrarEmpleado() {
    const employeeList = document.querySelector('#employeeList'); // Referencia a la tabla

    // Limpiar la tabla antes de mostrar
    limpiarHTML();

    listaEmpleados.forEach(empleado => {
        const { id, nombre, cargo } = empleado;

        // Crear una nueva fila
        const row = document.createElement('tr');

        // Crear celdas para la fila
        const cellId = document.createElement('td');
        cellId.textContent = id;
        const cellCargo = document.createElement('td');
        cellCargo.textContent = cargo;
        const cellNombre = document.createElement('td');
        cellNombre.textContent = nombre;

        // Crear acciones
        const cellAcciones = document.createElement('td');
        const editarBoton = document.createElement('button');
        editarBoton.onclick = () => cargarEmpleado(empleado);
        editarBoton.textContent = 'Editar';
        cellAcciones.appendChild(editarBoton);

        const eliminarBoton = document.createElement('button');
        eliminarBoton.onclick = () => eliminarEmpleado(id);
        eliminarBoton.textContent = 'Eliminar';
        cellAcciones.appendChild(eliminarBoton);

        // Agregar las celdas a la fila
        row.appendChild(cellId);
        row.appendChild(cellCargo);
        row.appendChild(cellNombre);
        row.appendChild(cellAcciones);

        // Agregar la fila a la tabla
        employeeList.appendChild(row);
    });
}

function cargarEmpleado(empleado) {
    const { id, nombre, cargo } = empleado;

    nombreInput.value = nombre;
    cargoInput.value = cargo;
    objEmpleado.id = id;

    formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';
    editando = true;
}

function editarEmpleado() {
    objEmpleado.nombre = nombreInput.value;
    objEmpleado.cargo = cargoInput.value;

    listaEmpleados.forEach(empleado => {
        if (empleado.id === objEmpleado.id) {
            empleado.nombre = objEmpleado.nombre;
            empleado.cargo = objEmpleado.cargo;
        }
    });

    limpiarHTML();
    mostrarEmpleado();
    formulario.reset();
    formulario.querySelector('button[type="submit"]').textContent = 'Agregar Empleado';
    editando = false;
}

function eliminarEmpleado(id) {
    listaEmpleados = listaEmpleados.filter(empleado => empleado.id !== id);
    limpiarHTML();
    mostrarEmpleado();
}

function limpiarHTML() {
    const employeeList = document.querySelector('#employeeList');
    while (employeeList.firstChild) {
        employeeList.removeChild(employeeList.firstChild);
    }
}

function limpiarObjeto() {
    objEmpleado.id = '';
    objEmpleado.nombre = '';
    objEmpleado.cargo = '';
}