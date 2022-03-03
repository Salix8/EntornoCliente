window.onload = function () {
    var resul = 0;
    document.getElementById("btn").addEventListener("click", function () {
        var num1 = parseInt(document.getElementById("text1").value);
        var num2 = parseInt(document.getElementById("text2").value);
        resul = num1 + num2;
        var celda = document.createElement("p");
        var textoCelda = document.createTextNode("El resultado de la suma es: ".concat(resul));
        celda.appendChild(textoCelda);
        document.body.appendChild(celda);
        console.log("La suma es de: ".concat(resul));
    });
};
