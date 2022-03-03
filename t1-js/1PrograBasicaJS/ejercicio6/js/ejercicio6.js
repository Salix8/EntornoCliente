
//Declaración de variables
let cadena=``;
let longitud=0;
let cadenaMinusculas=``;
let cadenaMayusculas=``;
let cadenaSplit=``;
let cadenaSeparada=``;
let cadenaReverse=``;

//Algoritmia
cadena = prompt(`Introduzca una cadena de texto, por favor`);
longitud = cadena.length;
cadenaMinusculas = cadena.toLowerCase();
cadenaMayusculas = cadena.toUpperCase();
cadenaSplit = cadena.split(" ");

//Visualización
document.write(`La cadena es: "${cadena}" </br></br>`);
document.write(`La longitud de la cadena es de ${longitud} caracteres </br></br>`);
document.write(`La cadena en misnusculas es: "${cadenaMinusculas}" </br></br>`);
document.write(`La cadena en mayusculas es: "${cadenaMayusculas}" </br></br>`);
document.write(`La cadena separada es:  </br>`);

for (let i=0; i < cadenaSplit.length; i++) {
    document.write(`<p> ${cadenaSplit[i]}</p>`);
}

document.write(`La cadena separada al reves es:  </br>`);
cadenaReverse = cadenaSplit.reverse();
for (let i=0; i < cadenaReverse.length; i++) {
    document.write(`<p> ${cadenaReverse[i]}</p>`);
}

