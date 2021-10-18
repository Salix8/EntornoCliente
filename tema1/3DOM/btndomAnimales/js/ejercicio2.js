function añadirParrafo() {
    let divInicial = document.getElementById(`listaelemen`);
    let ul = document.createElement(`ul`);
    let li = document.createElement(`li`);
    let contenido = document.createTextNode(`Cocodrilo`);
    
    li.appendChild(contenido);
    ul.appendChild(li);
    divInicial.appendChild(ul);
}

function insertarParrafo() {
    let divInicial = document.getElementById(`listaelemen`);
    let segundoElemento = divInicial.getElementsByTagName(`li`)[1];
    let ul = document.createElement(`ul`);
    let li = document.createElement(`li`);
    let contenido = document.createTextNode(`Ballena`);
    
    li.appendChild(contenido);
    ul.appendChild(li);
    divInicial.insertBefore(ul, segundoElemento);
}

function reemplazarParrafo() {
    let divInicial = document.getElementById(`listaelemen`);
    let primerElemento = divInicial.getElementsByTagName(`li`)[0];
    let li = document.createElement(`li`);
    let contenido = document.createTextNode(`Tiburon`);
    
    li.appendChild(contenido);
    divInicial.replaceChild(li, primerElemento);
}

function borrarParrafo() {
    let divInicial = document.getElementById(`listaelemen`);
    let segundoElemento = divInicial.getElementsByTagName(`li`)[1];

    divInicial.removeChild(segundoElemento);
}

function clonar() {
    let divInicial = document.getElementById(`listaelemen`);
    divInicial.cloneNode(true);
}

function sublistaDOM() {
    let idInicial = document.getElementById(`listaelemen`);
    let primerElemento = idInicial.getElementsByTagName(`li`)[0];
    let ul = document.createElement(`ul`);
    let li = document.createElement(`li`);
    let contenido = document.createTextNode(`Delfin`);
    
    li.appendChild(contenido);
    ul.appendChild(li);
    primerElemento.appendChild(ul);
}

function sublistainnerHTML() {
    let idInicial = document.getElementById(`listaelemen`);
    let primerElemento = idInicial.getElementsByTagName(`li`)[0];
    let codigoHTML = `<ul><li>Tigre</li></ul>`;
    primerElemento.innerHTML += codigoHTML;
}