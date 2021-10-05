
//Declaración de variables
let precio = parseFloat(prompt(`Inidque el precio del articulo, por favor`));

//Algoritmia
function calcIvaPrecioTotal(precio) {
    let ivaCalculado=0;
    let precioTotal=0;

    ivaCalculado = precio * 0.21;
    precioTotal = precio + ivaCalculado;


    return `El iva sobre el producto es de ${ivaCalculado}
El precio total del producto con iva incluido ${precio} es ${precioTotal.toFixed(2)}`;
}

//Visualización
alert(calcIvaPrecioTotal(precio));