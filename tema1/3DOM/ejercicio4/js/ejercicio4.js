
//Declaración de variables
let num = 0;
let numRan = 0;

//Algoritmia
num = prompt(`Introduzca un numero del 1 al 10, por favor`);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

numRan = getRandomInt(1, 11);

if (num == numRan) {
  alert(`Felicidades has acertado el numero.`);
}else {
  alert(`Vaya parece que no has acertado el numero.`);
}

//Visualización

alert(`El numero aleatorio era ${numRan}.`);