window.onload = function() {

    class Alumno{
        protected name:string = `Pedro López`;
        protected edad:number = 18;
        protected curso:string = `1CFSJ`;

        
        extraerdatos(){
            console.log(this.name);
            let newInput: string = `
                <h2>Nombre:</h2>
                    <p>${this.name}</p><br>
                <h2>Edad:</h2>
                    <p>${this.edad}</p><br>
                <h2>Curso:</h2>
                    <p>${this.curso}</p><br>
            `;

            document.querySelector("#container").innerHTML = newInput;
        }
    }

    let alumno = new Alumno();

    alumno.extraerdatos();

    

};

