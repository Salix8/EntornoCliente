window.onload = function () {
    var iva = 0;
    var resul = 0;
    var num = parseInt(prompt("Introduce el precio del producto"));
    iva = num * 0.21;
    resul = num + iva;
    document.getElementById("container").textContent = "El precio de producto es: ".concat(num, "\nEl IVA respecto a ese producto es de ").concat(iva, "\nEl precio total del producto es: ").concat(resul);
    console.log("El precio de producto es: ".concat(num));
    console.log("El IVA respecto a ese producto es de ".concat(iva));
    console.log("El precio total del producto es: ".concat(resul));
};
