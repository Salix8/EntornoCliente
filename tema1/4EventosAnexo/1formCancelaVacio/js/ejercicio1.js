
window.onload = function() {

    const idFormulario = document.getElementById(`formulario`);

    const idNombre = document.getElementById(`nombre`);
    const idRaza = document.getElementById(`raza`);
    const idClase = document.getElementById(`clase`);
    const idEnviar = document.getElementById(`enviar`);

    idEnviar.addEventListener(`click`, validate_send);

    function validate_send(){
        if(idNombre.value == "" || idRaza.value == "" || idClase.value == "") {
            alert("Por favor, ingrese los datos requeridos.");
            return preventDefault();
        }else{
            alert(`Datos enviados correctamente`);
        }

        
        idFormulario.submit();
        return true;
    }
    
}