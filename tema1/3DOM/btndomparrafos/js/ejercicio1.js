function añadirParrafo() {
    let divInicial = document.getElementById(`divisor`);
    let parrafo = document.createElement(`p`);
    let contenido = document.createTextNode(`Parrafo añadido`);
    
    parrafo.appendChild(contenido);
    divInicial.appendChild(parrafo);
}

function insertarParrafo() {
    let divInicial = document.getElementById(`divisor`);
    let primerParrafo = divInicial.getElementsByTagName(`p`)[1];
    let parrafo = document.createElement(`p`);
    let contenido = document.createTextNode(`Parrafo insertado`);
    
    parrafo.appendChild(contenido);
    divInicial.insertBefore(parrafo, primerParrafo);
}

function reemplazarParrafo() {
    let divInicial = document.getElementById(`divisor`);
    let primerParrafo = divInicial.getElementsByTagName(`p`)[0];
    let parrafo = document.createElement(`p`);
    let contenido = document.createTextNode(`Parrafo reemplazado`);
    
    parrafo.appendChild(contenido);
    divInicial.replaceChild(parrafo, primerParrafo);
}

function borrarParrafo() {
    let divInicial = document.getElementById(`divisor`);
    let primerParrafo = divInicial.getElementsByTagName(`p`)[1];

    divInicial.removeChild(primerParrafo);
}

function clonar() {
    let divInicial = document.getElementById(`divisor`).cloneNode(true);
    divInicial.cloneNode(true);
}