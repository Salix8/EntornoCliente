

window.onload = function() {
    let tagDiv = document.getElementsByTagName(`div`)[0];
    tagDiv.onmouseover = tamaño;
    tagDiv.onmouseout = tamaño;
}

function tamaño (elEvento){
    var evento = elEvento || window.event;
    switch (evento.type) {
        case `mouseover`:
            this.style.fontSize = `16pt`;
            break;
        case `mouseout`:
            this.style.fontSize = `12pt`;
            break;
        default:
            this.style.fontSize = `12pt`;
            break;
    }
}

