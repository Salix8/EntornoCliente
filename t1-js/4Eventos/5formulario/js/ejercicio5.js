
window.onload = function() {
    let taginput = document.getElementById(`texto`);
    taginput.onkeypress = formulario;
}

function formulario (elEvento){
    var evento = window.event || elEvento ;

    if (!((evento.charCode >= 48) && (evento.charCode <= 57))) {
        evento.preventDefault();
    }
}
