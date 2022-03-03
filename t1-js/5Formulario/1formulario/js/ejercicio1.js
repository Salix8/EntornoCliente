window.onload = function() {
    document.getElementById(`nombre`).focus();

    document.getElementById(`mySelect`).addEventListener(`change`, selectFuncion);

    document.getElementById(`area_texto`).addEventListener(`keypress`, textLimit);

    document.getElementById(`enviar`).addEventListener(`click`, btnSubmit);
}

function selectFuncion() {
    let selectedOption = this.options[this.selectedIndex];

    alert(`La longitud de la lista es ${this.length}
El índice seleccionado es el ${selectedOption.value}
El valor del índice seleccionado es ${selectedOption.text}`);
}

function textLimit() {
    //this.setAttribute('maxlength', 150);
    if (this.value.length >= 150) {
        alert(`El tamaño del campo observaciones es muy grande.\nMáximo 150 carácteres.`);
    }
}

function btnreset() {
    this.form.reset();
}

function validation(event) {
    let valueDni = document.getElementById("dni").value;
    if( valueDni == null || valueDni.length == 0 || /^\s+$/.test(valueDni) ) {
        alert(`El campo del DNI esta vacio`);
        event.preventDefault();
    }

    let valueTel = document.getElementById("telefono").value;
    if( !(/^\d{9}$/.test(valueTel)) ) {
        alert(`El campo del telefono esta vacio`);
        event.preventDefault();
    }
    
}

function btnSubmit() {    
    validation();
    this.form.submit();
    this.value = `Enviando...`;
    this.disabled = true;
}