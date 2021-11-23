window.addEventListener(`load`, ()=>{

    let XMLHttpRequestObject = false;
    
    if (window.XMLHttpRequest) {
        XMLHttpRequestObject = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
    }

    document.getElementById(`btnMostrar`).addEventListener(`click`, ()=> {
        sacarDatos(`bosqueMorado.txt`, XMLHttpRequestObject);
    });

});


function sacarDatos(datos, XMLHttpRequestObject){
    if(XMLHttpRequestObject) {
        var objeto = document.getElementById(`img`);
        XMLHttpRequestObject.open("GET", datos);
        XMLHttpRequestObject.onreadystatechange = function(){
            if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) {
                objeto.src = XMLHttpRequestObject.responseText;
            }
        }
    } 
    XMLHttpRequestObject.send(null);
}