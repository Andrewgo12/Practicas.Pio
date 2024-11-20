// validacion.js

document.addEventListener("DOMContentLoaded", function() {
    const forms = document.querySelectorAll("form");

    forms.forEach(form => {
        form.addEventListener("submit", function(event) {
            if (!validarFormulario(form)) {
                event.preventDefault();
            }
        });
    });
});

function validarFormulario(form) {
    let valid = true;
    const inputs = form.querySelectorAll("input[required], textarea[required]");

    inputs.forEach(input => {
        if (!input.value.trim()) {
            mostrarError(input, "Este campo es obligatorio.");
            valid = false;
        } else {
            limpiarError(input);
        }

        // Validaciones específicas
        if (input.type === "email") {
            if (!validarEmail(input.value)) {
                mostrarError(input, "Email inválido.");
                valid = false;
            }
        }

        if (input.type === "number") {
            const min = parseFloat(input.min);
            const max = parseFloat(input.max);
            const valor = parseFloat(input.value);
            if (valor < min || valor > max) {
                mostrarError(input, `La nota debe estar entre ${min} y ${max}.`);
                valid = false;
            }
        }

        if (input.type === "password") {
            if (input.value.length < 6) {
                mostrarError(input, "La contraseña debe tener al menos 6 caracteres.");
                valid = false;
            }
        }
    });

    return valid;
}

function mostrarError(input, mensaje) {
    let error = input.nextElementSibling;
    if (!error || !error.classList.contains("error")) {
        error = document.createElement("span");
        error.classList.add("error");
        input.parentNode.insertBefore(error, input.nextSibling);
    }
    error.textContent = mensaje;
    input.classList.add("input-error");
}

function limpiarError(input) {
    let error = input.nextElementSibling;
    if (error && error.classList.contains("error")) {
        error.textContent = "";
    }
    input.classList.remove("input-error");
}

function validarEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}