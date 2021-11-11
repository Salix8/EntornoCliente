window.onload = function() {
    document.getElementById(`colores`).addEventListener(`change`, changeColor);
}

function changeColor(){
    let idText = document.getElementById(`text`);
    let selectedOption = this.options[this.selectedIndex];
    idText.style.backgroundColor = selectedOption.text;
}
