

window.onload = function() {
    let idEnlace = document.getElementById(`enlace1`);
    idEnlace.onmouseover = tamañoGrande;
    idEnlace.onmouseout = tamañoPequeño;
}

function tamañoGrande (){
    let tagA = document.getElementsByTagName('a');

    for (let i = 0; i < tagA.length; i++) {
        tagA[i].style.fontSize = `20pt`;
    }
}

function tamañoPequeño(){
    let tagA = document.getElementsByTagName('a');

    for (let i = 0; i < tagA.length; i++) {
        tagA[i].style.fontSize = `12pt`;
    }
}


