window.addEventListener(`load`, ()=>{

    let XMLHttpRequestObject = false;
    
    if (window.XMLHttpRequest) {
        XMLHttpRequestObject = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
    }

    document.getElementById(`btnJSON`).addEventListener(`click`, ()=>{
        sacarDatos(`JSON.json`, XMLHttpRequestObject);
    })
    

});


function sacarDatos(datos, XMLHttpRequestObject){
    if(XMLHttpRequestObject) {
        var position = document.getElementById(`contenedor`);
        XMLHttpRequestObject.open("GET", datos);
        XMLHttpRequestObject.onreadystatechange = ()=>{
            if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) {
                let object = JSON.parse(XMLHttpRequestObject.responseText);
                position.innerHTML = `Nombre: ${object.nombre}<br>`;
                position.innerHTML += `Apellido: ${object.apellido}<br>`;
                position.innerHTML += `Edad: ${object.edad}`
            }
        }
    } 
    XMLHttpRequestObject.send(null);
}