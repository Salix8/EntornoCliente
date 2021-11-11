window.onload = function() {
    document.getElementById(`negrita`).addEventListener(`change`, changeWeight);
    document.getElementById(`cursiva`).addEventListener(`change`, changeStyle);
}

function changeWeight(){
    let idText = document.getElementById(`text`);
    if (this.checked) {
        idText.style.fontWeight = `bold`;
    } else {
        idText.style.fontWeight = `normal`;
    }
}

function changeStyle(){
    let idText = document.getElementById(`text`);
    if (this.checked) {
        idText.style.fontStyle = `italic`;
    } else {
        idText.style.fontStyle = `normal`;
    }
}