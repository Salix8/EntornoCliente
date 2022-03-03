window.onload = function(){

    var XMLHttpRequestObject = false;
    if (window.XMLHttpRequest) {
        XMLHttpRequestObject = new XMLHttpRequest();
    }

    let viajePekin = document.getElementById("viajeMarruecos");

    viajePekin.addEventListener("click", ()=>{
        sacardatos('ViajeMarruecos.txt', XMLHttpRequestObject );
    });
}

function sacardatos(datos, XMLHttpRequestObject){

    if(XMLHttpRequestObject){

        var lugar = document.getElementById("contenedor");
        XMLHttpRequestObject.open("GET", datos);
        XMLHttpRequestObject.onreadystatechange = ()=>{
            
            if(XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200){

                lugar.innerHTML = XMLHttpRequestObject.responseText;

            }   
        }
        XMLHttpRequestObject.send(null);
    }
}
