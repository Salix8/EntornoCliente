window.onload = function() {

    let suma:number = 0;
    let mas100:number = 0;

    for (let i = 1; i <= 5; i++) {
        let nums:number = parseInt(prompt(`introduce el numero ${i}`));
        console.log(typeof(nums));
        suma += nums;
        
        if (nums > 100) {
            mas100 ++;
        }
    }

    document.getElementById(`container`).textContent = `La suma de los 5 numeros es: ${suma}`;
    document.getElementById(`container2`).textContent = `Los numeros que son mayores que 100 son: ${mas100}`;

    console.log(`La suma de los 5 numeros es: ${suma}`);
    console.log(`Hay ${mas100} numeros mayores que 100`);
};