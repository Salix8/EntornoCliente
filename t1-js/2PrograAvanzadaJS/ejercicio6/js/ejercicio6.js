
//Declaración de variables
const fecha = new Date();
let hora = fecha.getHours();

//Algoritmia
if (hora < 10) {
    hora = `0${hora}`;
}
function horaActual() {
    if (horaActual > 06 || horaActual < 14) {
        alert(`Buenos dias, son las ${horaActual}`);        
    }else if (horaActual > 14 || horaActual < 20) {
        alert(`Buenas tardes, son las ${horaActual}`);
    } else if (horaActual > 20 || horaActual < 06) {
        alert(`Buenas noches, son las ${horaActual}`);
    }else{
        alert(`Ha habido un problema`);
    }
}
//Visualización
