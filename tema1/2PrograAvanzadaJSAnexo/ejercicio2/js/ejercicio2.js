//Declaración de variables


//Algoritmica
function validate_send(){
    if(document.formulario.nombre.value == "") {
        alert("Por favor indique su nombre");
        document.formulario.nombre.focus();
        return false;
    }
    
    if(document.formulario.DNI.value == "") {
        alert("Por favor ingrese el dni");
        document.formulario.DNI.focus();
        return false;
    }
    
    document.formulario.submit(); 
    return true;
}


//Visualización
