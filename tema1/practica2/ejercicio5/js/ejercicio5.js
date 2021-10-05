
//Declaración de variables
const fecha = new Date();
const diaActual = fecha.getDate();
const añoActual = fecha.getFullYear();

var days = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
var months = ['enero', 'febreo', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
var dayName = days[fecha.getDay()];
var monthName = months[fecha.getMonth()];


//Algoritmia
function fechaActual() {
    alert(`Hoy estamos a ${dayName}, ${diaActual} de ${monthName} del ${añoActual}`);
}
//Visualización
