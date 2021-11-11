window.onload = function (){
    let tagDiv = document.getElementsByTagName(`div`)[0];
    tagDiv.addEventListener(`mouseover`, tamanoGrande);
    tagDiv.addEventListener(`mouseout`, tamanoNormal);
    
}

function tamanoGrande() {
    this.style.fontSize = '16pt';
}

function tamanoNormal() {
    this.style.fontSize = '12pt';
}