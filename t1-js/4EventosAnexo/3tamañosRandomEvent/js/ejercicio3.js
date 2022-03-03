

window.onload = function() {
    const idDiv = document.getElementById(`main`);
    const idBoton = document.getElementById(`boton`);
    idDiv.addEventListener(`click`, mostrarCoordenadas);
    idBoton.addEventListener(`click`, randomWith);
}

function mostrarCoordenadas() {
    alert('x: '.concat(event.clientX - this.offsetLeft, '\ny: ', event.clientY - this.offsetTop));
}

function randomWith() {
    with(this.parentNode.style){
        height = Math.round(Math.random() * screen.height) + 'px';
        width = Math.round(Math.random() * screen.width) + 'px';
        }
        event.stopPropagation();
}