
//Declaración de variables
let meses=``;
let resultado=``;

//Algoritmia
mes = prompt(`Elija un mes del año:`);
mes.toLowerCase();


if (mes == `diciembre` || mes == `enero` || mes == `febrero`) {
    resultado = `invierno`;
}
if (mes == `marzo` || mes == `abril` || mes == `mayo`) {
    resultado = `primavera`;
}
if (mes == `junio` || mes == `julio` || mes == `agosto`) {
    resultado = `verano`;
}
if (mes == `septiembre` || mes == `octubre` || mes == `noviembre`) {
    resultado = `otoño`;
}


//Visualización
alert(`Estamos en ${resultado}`);


