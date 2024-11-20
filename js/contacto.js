const formulario = document.getElementById('formRegistro');
const nombre = document.getElementById('txtNombre');
const apellido = document.getElementById('txtApellido');
const tel = document.getElementById('txtTelefono');
const email = document.getElementById('txtEmail');
const password = document.getElementById('txtPassword');

formulario.addEventListener('submit', e=>{
    e.preventDefault();
    validarInputs();
});

const setError = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText ='';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email =>{
    const re =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

/* Función para validar los inputs en el formulario */
const validarInputs = () => {
    const nombreValue = nombre.value.trim();
    const apellidoValue = apellido.value.trim();
    const telValue = tel.value.trim();
    const emailValue = email.value.trim();
    const passValue = password.value.trim();

    if(nombreValue === ''){
        setError(nombre,'Los nombres son obligatorios');
    }
    else{
        setSuccess(nombre);
    }

    if(apellidoValue === ''){
        setError(apellido,'Los apellidos son obligatorios');
    }
    else{
        setSuccess(apellido);
    }

    if(telValue === ''){
        setError(tel,'El teléfono es obligatorio');
    }
    else{
        setSuccess(tel);
    }

    if(emailValue === ''){
        setError(email,'Coloque un correo electrónico válido');
    }
    else{
        setSuccess(email);
    }

    if(passValue === ''){
        setError(password,'La contraseña es obligatoria');
    }
    else if(passValue.length < 8){
        setError(password,'La contraseña debe ser mínimo de 8 caracteres')
    }
    else{
        setSuccess(password);
    }
};