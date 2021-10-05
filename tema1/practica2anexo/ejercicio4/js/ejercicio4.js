
//Declaración de variables
var myWindow;

//Algoritmia

function openWin() {
  myWindow = window.open("", "", "width=100, height=100"); //se abre una ventana al pulsar el botón
}

function resizeWin() {
  myWindow.resizeTo(500, 500); //se redimensiona al pulsar el otro botón
  myWindow.focus(); //mantiene la ventana por delante
}

//Visualización