
//Declaración de variables
let num=0;
let resultado=``;

//Algoritmia
num = prompt(`Eliga un numero entero, por favor`);
if (num % 2 === 0) {
    resultado = `par`;
}else if (num % 2 !== 0) {
    resultado = `impar`;
}


//Visualización
alert(`El numero ${num} es ${resultado}`);


