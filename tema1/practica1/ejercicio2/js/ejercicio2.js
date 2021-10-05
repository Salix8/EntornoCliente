
//Declaración de variables
let numArray=[7,8,2,9,10];
let resultado=0;

//Algoritmia
for (num in numArray) {
    if (numArray[num] > 8 ) {
        resultado +=numArray[num];
    }
}

//Visualización
alert(`La suma de los numeros mayores de 8 es: ${resultado}`);


