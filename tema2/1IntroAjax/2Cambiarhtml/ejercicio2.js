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

    document.getElementById(`bienvenido`).addEventListener(`click`, ()=> {
        sacarDatos(`bienvenido.html`, XMLHttpRequestObject);
    });
});


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