window.addEventListener(`load`, ()=>{

    let XMLHttpRequestObject = false;
    
    if (window.XMLHttpRequest) {
        XMLHttpRequestObject = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
    }

    document.getElementById(`inicio`).addEventListener(`click`, ()=> {
        sacarDatos(`inicio.html`, XMLHttpRequestObject);
    });

    document.getElementById(`xml`).addEventListener(`click`, ()=> {
        sacarDatos(`xml.html`, XMLHttpRequestObject);
    });

    document.getElementById(`txt`).addEventListener(`click`, ()=> {
      sacarDatos(`txt.html`, XMLHttpRequestObject);
    });

    document.getElementById(`mostrar`).addEventListener(`click`, ()=>{
      descargaArchivo();
    })

    document.getElementById(`mostrar`).addEventListener(`click`, ()=>{
      sacarDatos(`txt.txt`, XMLHttpRequestObject);
    })

});

window.addEventListener(`click`, ()=>{
    
})

function sacarDatos(datos, XMLHttpRequestObject){
    if(XMLHttpRequestObject) {
        var objeto = document.getElementById(`contenido`);
        XMLHttpRequestObject.open("GET", datos);
        XMLHttpRequestObject.onreadystatechange = function(){
            if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) {
                objeto.innerHTML = XMLHttpRequestObject.responseText;
            }
        }
    } 
    XMLHttpRequestObject.send(null);
}



/* Parte del xml */
  
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