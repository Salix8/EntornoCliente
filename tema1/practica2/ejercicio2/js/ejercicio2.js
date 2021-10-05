
//Declaración de variables
let mes=``;
let resultado=``;

//Algoritmia
mes = prompt(`Introduzca un mes, por favor`);

switch (mes) {
    case `diciembre`:
    case `enero`:
    case `febrero`:
        resultado = `invierno`;
        break;
    case `marzo`:
    case `abril`:
    case `mayo`:
        resultado = `primavera`;
        break;
    case `julio`:
    case `julio`:
    case `agosto`:
        resultado = `verano`;
        break;
    case 'septiembre':
    case `octubre`:
    case `noviembre`:
        resultado = `otoño`;
    default:
        resultado = ``;
        break;
}

if (resultado===``) {
    resultado = `No has introducido ningún mes valido`;
}else {
    resultado = `Estamos en ${resultado}`;
}

//Visualización
alert(resultado);