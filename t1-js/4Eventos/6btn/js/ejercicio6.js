
window.onload = function() {
    let btn = document.getElementsByTagName(`button`);

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener(`click`, pulsaBoton);
    }
    
}

function pulsaBoton() {
    alert(`Has pulsado sobre un botón`);
}