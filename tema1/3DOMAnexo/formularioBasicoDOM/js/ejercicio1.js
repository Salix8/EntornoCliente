
function cambiarAtt() {
    let form = document.createElement(`form`);
    form.setAttribute(`id`, `formulario`);

    let dni = document.createElement(`input`);
    dni.setAttribute(`type`, `text`);
    dni.setAttribute(`name`, `DNI`);
    dni.setAttribute(`id`, `dni`);
    dni.setAttribute(`class`, `input`);
    dni.setAttribute(`placeholder`, `Intrduzca su DNI`);
    dni.setAttribute(`width`, `200px`);

    let inputEnviar = document.createElement(`input`);
    inputEnviar.setAttribute(`type`, `button`);
    inputEnviar.setAttribute(`name`, `Enviar`);
    inputEnviar.setAttribute(`id`, `enviar`);
    inputEnviar.setAttribute(`class`, `input`);
    inputEnviar.setAttribute(`value`, `Enviar`);

    
    document.body.appendChild(form);
    form.appendChild(dni);
    form.appendChild(inputEnviar);

    const btn = document.querySelector(`.input`);
    btn.setAttribute(`style`, `margin: 20px;`);

    const idformulario = document.getElementById(`formulario`);

    const idDni = document.getElementById(`dni`);
    const idenviar = document.getElementById(`enviar`);

    idenviar.onclick = validate_send;

    function validate_send(){
        
        if(idDni.value == "") {
            alert("Por favor ingrese el dni");
            idDni.focus();
            return false;
        }
        
        idformulario.submit(); 
        return true;
    }
    
}
