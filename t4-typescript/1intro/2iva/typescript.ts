window.onload = function() {

    let iva:number = 0;
    let resul:number = 0;

    let num:number = parseInt(prompt(`Introduce el precio del producto`));
        iva = num*0.21;
        resul = num + iva;

    document.getElementById(`container`).textContent = `El precio de producto es: ${num}\nEl IVA respecto a ese producto es de ${iva}\nEl precio total del producto es: ${resul}`;

    console.log(`El precio de producto es: ${num}`);
    console.log(`El IVA respecto a ese producto es de ${iva}`);
    console.log(`El precio total del producto es: ${resul}`);
};