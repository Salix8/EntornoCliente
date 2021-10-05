
//Declaración de variables
let num=0;
let contador=0;
let resultado=0;
let resultadoContador=``;

//Algoritmia
//Suma de los 5 numeros
for (let i = 0; i < 5; i++) {    
    num = parseInt(prompt("Introduce el numero para sumar"));
    
    //Comprobación de numeros mayores de 100
    if (num > 100) {
        contador++;
    }
    resultado += num;
}

//Muestra la frase solo si hay algun numero mayor que 100
if (contador != 0) {
    resultadoContador = (`Hay ` + contador + ` numeros mayores que 100.`);
}

//Visualización
alert(`La suma de los cinco numeros es: ${resultado}`);
alert(resultadoContador);


