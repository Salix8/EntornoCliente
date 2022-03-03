window.onload = function() {

    let resul:number = 0;
    
    document.getElementById("btn").addEventListener(`click`, ()=>{
        
        let num1:number = parseInt((<HTMLInputElement>document.getElementById(`text1`)).value);
        let num2:number = parseInt((<HTMLInputElement>document.getElementById(`text2`)).value);    
        resul = num1 + num2;

        var celda:Node = document.createElement("p");
        var textoCelda:Node = document.createTextNode(`El resultado de la suma es: ${resul}`);
        celda.appendChild(textoCelda);
        document.body.appendChild(celda);
        console.log(`La suma es de: ${resul}`);
    })



};

