window.onload = function() {
    createForm();
    document.getElementById(`enviar`).addEventListener(`click`, validate_send);
}

function createForm() {
    let form = document.createElement(`form`);
    form.setAttribute(`name`, `formulario`);
    form.setAttribute(`id`, `formulario`);

    let clave = document.createElement(`input`);
    clave.setAttribute(`type`, `text`);
    clave.setAttribute(`name`, `clave`);
    clave.setAttribute(`id`, `clave`);
    clave.setAttribute(`placeholder`, `Intrduzca la clave, por favor`);
    clave.setAttribute(`width`, `200px`);

    let inputEnviar = document.createElement(`input`);
    inputEnviar.setAttribute(`type`, `button`);
    inputEnviar.setAttribute(`name`, `Enviar`);
    inputEnviar.setAttribute(`id`, `enviar`);
    inputEnviar.setAttribute(`value`, `Enviar`);

    
    document.body.appendChild(form);
    form.appendChild(clave);
    form.appendChild(inputEnviar);
}

function validate_send(){
    let idclave = document.getElementById(`clave`);
    let idformulario = document.getElementById(`formulario`);

    if(idclave.value == /^[^a-z][0-9]{3}$/ || idclave.value == /^[^A-Z][0-9][0-9][0-9]+$/) {
        alert(`La clave es correcta.`);
        idformulario.submit(); 
    } else {
        idclave.focus();
        idclave.value = ``;
    }
}