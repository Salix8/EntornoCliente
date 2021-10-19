function añadirParrafo() {
    let divInicial = document.getElementById(`divisor`);
    let parrafo = document.createElement(`p`);
    let contenido = document.createTextNode(`Parrafo añadido`);
    
    parrafo.appendChild(contenido);
    divInicial.appendChild(parrafo);
}

function insertarParrafo() {
    let divInicial = document.getElementById(`divisor`);
    let segundoElemento = divInicial.getElementsByTagName(`p`)[1];
    let parrafo = document.createElement(`p`);
    let contenido = document.createTextNode(`Parrafo insertado`);
    
    parrafo.appendChild(contenido);
    divInicial.insertBefore(parrafo, segundoElemento);
}

function reemplazarParrafo() {
    let divInicial = document.getElementById(`divisor`);
    let primerElemento = divInicial.getElementsByTagName(`p`)[0];
    let parrafo = document.createElement(`p`);
    let contenido = document.createTextNode(`Parrafo reemplazado`);
    
    parrafo.appendChild(contenido);
    divInicial.replaceChild(parrafo, primerElemento);
}

function borrarParrafo() {
    let divInicial = document.getElementById(`divisor`);
    let segundoElemento = divInicial.getElementsByTagName(`p`)[1];

    divInicial.removeChild(segundoElemento);
}

function clonar() {
    let divInicial = document.getElementById(`divisor`).cloneNode(true);
    document.body.appendChild(divInicial);
}