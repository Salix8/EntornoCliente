
window.onload = function() {

    const idLink = document.getElementById(`link`);
    if (idLink.addEventListener(`click`, linkSinDestino)) {
        alert(`El link no funciona ni lo hará`);
    }

}

function linkSinDestino(elEvento) {
    var e = window.event || elEvento ;
    e.preventDefault();
}