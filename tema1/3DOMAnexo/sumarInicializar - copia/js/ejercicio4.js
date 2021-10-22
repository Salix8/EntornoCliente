

function contarEnlaces() {
    let numEnlaces = document.getElementsByTagName(`a`).length;
    alert(numEnlaces);
}

function mostrarHref() {
    let enlaces = document.getElementsByTagName(`a`);
    let arrayHref = `Los enlaces son: \n`;
    for (let i = 0; i < enlaces.length; i++) {
        arrayHref += `${enlaces[i].getAttribute("href")} \n`;
    }
    console.log(arrayHref);
    alert(arrayHref);
}

function mostrarHrefParrafo() {
    let parrafos = document.getElementsByTagName(`p`);
    let enlaces = document.getElementsByTagName(`a`);
    let arrayHref = ``;

    for (let i = 0; i < parrafos.length; i++) {
        arrayHref += `En el parrafo número ${i} estan estos enlaces: \n`;
        enlaces = parrafos[i].getElementsByTagName(`a`);
        for (let j = 0; j < enlaces.length; j++) {
        arrayHref += `\t${enlaces[j].getAttribute("href")} \n`;
        }
    }
    console.log(arrayHref);
    alert(arrayHref);
}

function parrafosVerdes() {
    let parrafos = document.getElementsByTagName(`p`);
    
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].style.background = `#34F7CD`;
        parrafos[i].setAttribute(`class`, `rainbow-bg`);
    }
    
}

function desactivarColor() {
    let parrafos = document.getElementsByTagName(`p`);

    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].style.background = `#fff`;
        parrafos[i].setAttribute(`class`, ``);
    }
    
}