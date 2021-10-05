
//Declaración de variables
let precio=0;
let ivaCalculado=0;
let precioTotal=0;

//Algoritmia
precio = parseFloat(prompt(`Inidque el precio del articulo, por favor`));


ivaCalculado = precio * 0.21;
precioTotal = precio + ivaCalculado;

//Visualización
alert(`El iva sobre el producto es de ${ivaCalculado}`);
alert(`El precio total del producto con iva incluido ${precio} es ${precioTotal.toFixed(2)}`);


