window.onload = function () {
    var Alumno = /** @class */ (function () {
        function Alumno() {
            this.name = "Pedro L\u00F3pez";
            this.edad = 18;
            this.curso = "1CFSJ";
        }
        Alumno.prototype.extraerdatos = function () {
            console.log(this.name);
            var newInput = "\n                <h2>Nombre:</h2>\n                    <p>".concat(this.name, "</p><br>\n                <h2>Edad:</h2>\n                    <p>").concat(this.edad, "</p><br>\n                <h2>Curso:</h2>\n                    <p>").concat(this.curso, "</p><br>\n            ");
            document.querySelector("#container").innerHTML = newInput;
        };
        return Alumno;
    }());
    var alumno = new Alumno();
    alumno.extraerdatos();
};
