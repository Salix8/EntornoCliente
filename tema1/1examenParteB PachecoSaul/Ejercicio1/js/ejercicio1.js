window.onload = function() {
    document.getElementById(`enviar`).addEventListener(`click`, btnSubmit);
    document.getElementById(`reset`).addEventListener(`click`, btnreset);
}

function mostrarMenu() {
    let mensaje = ``;
    let contadorCheckbox = 0;
    let precioCheckbox = 0;
    let precioFinal = 0;
    let nameCheckbox = document.getElementsByName(`checkbox`);
    let nameBtnRadio = document.getElementsByName(`radio`);
    let entrantes = ``;
    let segundoPlato = ``;

    for (let i = 0; i < nameCheckbox.length; i++) {
        if (nameCheckbox[i].checked) {
            contadorCheckbox++;
            precioCheckbox += 5;
            entrantes += `-${nameCheckbox[i].value}`;
        }
    }
    //Entrantes + segundo obligatoriamente 1 + postre obligatorio y unico
    precioFinal = precioCheckbox + 10 + 5;

    mensaje += `Tienes selecionados ${contadorCheckbox} entrantes y 1 segundo. \nEl precio final sera de: ${precioFinal}\n`;

    for (let i = 0; i < nameBtnRadio.length; i++) {
        if (nameBtnRadio[i].checked) {
            segundoPlato = `-${nameBtnRadio[i].value}`;
        }
    }
    
    mensaje += `Los platos seleccionados son: ${entrantes}${segundoPlato}-Postre Incluido`;

    alert(mensaje);
}

function validar(){
    if(!document.querySelector('input[name="radio"]:checked')){
        alert('Debe seleccionar un segundo plato, por favor.');
        return preventDefault();
    }
}

function btnSubmit() {
    validar();
    mostrarMenu();
    this.form.submit();
}

function btnreset() {
    document.getElementById(`formulario`).reset();
}