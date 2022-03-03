var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
window.onload = function () {
    var Alumno = /** @class */ (function () {
        function Alumno() {
            this.name = "Pedro L\u00F3pez";
            this.edad = 18;
            this.curso = "1CFSJ Primer curso de grado superior de DAW";
        }
        Alumno.prototype.extraerdatos = function () {
            console.log(this.name);
            var newInput = "\n                <h2>Nombre:</h2>\n                    <p>".concat(this.name, "</p><br>\n                <h2>Edad:</h2>\n                    <p>").concat(this.edad, "</p><br>\n                <h2>Curso:</h2>\n                    <p>").concat(this.curso, "</p><br>\n            ");
            document.querySelector("#container").innerHTML = newInput;
        };
        return Alumno;
    }());
    var Curso = /** @class */ (function (_super) {
        __extends(Curso, _super);
        function Curso() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Curso.prototype.extraerdatos = function () {
            console.log(this.name);
            var newInput = "\n                Mi nombre es ".concat(this.name, "\n                Tengo ").concat(this.edad, " a\u00F1os\n                Estoy en ").concat(this.curso, "\n            ");
            alert(newInput);
        };
        return Curso;
    }(Alumno));
    var alumno = new Alumno();
    var curso = new Curso();
    alumno.extraerdatos();
    curso.extraerdatos();
};
