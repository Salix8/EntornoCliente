

window.addEventListener(`click`, ()=>{

  descargaArchivo();
});

function descargaArchivo() {
  let peticionHttp = new XMLHttpRequest();
  // Preparar la funcion de respuesta
  peticionHttp.onreadystatechange = muestraContenido;
  // Realizar peticion HTTP
  peticionHttp.open('GET', 'libros.xml', true);
  peticionHttp.send(null);

  function muestraContenido() {
    if(peticionHttp.readyState == 4) {
      if(peticionHttp.status == 200) {
        //Creamos el objeto de tipo documento XML
        var documentoXml = peticionHttp.responseXML;
        //Obtenemos la raíz del documento
        var root = documentoXml.getElementsByTagName("Obras_literarias")[0];
        var tope = root.getElementsByTagName("Libro").length;
        //Recorremos todos los elementos Libro del documento
        for(var i = 0; i < tope; i++){ 
          libro = root.getElementsByTagName("Libro")[i]; 
          autor = libro.getElementsByTagName("Autor")[0].firstChild.nodeValue;
          titulo = libro.getElementsByTagName("Titulo")[0].firstChild.nodeValue;
          muestraHTML('contenedor', "Autor: " + autor + ", Titulo "+titulo+"<br/>");
        }
      }
    }
  }
  function muestraHTML(id, texto){
    if(document.getElementById){
      document.getElementById(id).innerHTML += texto;
    }
  }
}