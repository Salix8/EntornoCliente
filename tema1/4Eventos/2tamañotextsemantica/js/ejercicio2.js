window.onload = function() {
    let tagDiv = document.getElementsByTagName(`div`)[0];
    tagDiv.onmouseover = tamañoGrande;
    tagDiv.onmouseout = tamañoNormal;
}

function tamañoGrande (){
    this.style.fontSize = `16pt`;
}

function tamañoNormal (){
    this.style.fontSize = `12pt`;
}