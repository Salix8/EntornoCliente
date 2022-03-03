window.onload = function() {
    let nameBtnRadio = document.getElementsByName(`btnradio`);
    
    for (let i = 0; i < nameBtnRadio.length; i++) {
        nameBtnRadio[i].addEventListener(`click`, changeColor);
    }
}

function changeColor(){
    let idText = document.getElementById(`text`);
    idText.style.backgroundColor = this.value;
}
