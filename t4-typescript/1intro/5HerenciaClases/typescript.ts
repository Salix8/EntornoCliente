window.onload = function() {

    class Alumno{
        protected name:string = `Pedro López`;
        protected edad:number = 18;
        protected curso:string = `1CFSJ Primer curso de grado superior de DAW`;

        
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

    class Curso extends Alumno{
        extraerdatos(){
            console.log(this.name);
            let newInput: string = `
                Mi nombre es ${this.name}
                Tengo ${this.edad} años
                Estoy en ${this.curso}
            `;

            alert(newInput);
        }
    }

    let alumno = new Alumno();
    let curso = new Curso();

    alumno.extraerdatos();
    curso.extraerdatos();

};

