/* $(document).ready(()=>{


  $("#btn").click(()=>{

      $.ajax({
          dataType: "json",
          url: url,
          data: data,
          success: success
        });
  });
})

 */

window.addEventListener(`load`, ()=>{

  let XMLHttpRequestObject = false;
  
  if (window.XMLHttpRequest) {
      XMLHttpRequestObject = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
      XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
  }

  document.getElementById(`btn`).addEventListener(`click`, ()=>{
      sacarDatos(`datos.json`, XMLHttpRequestObject);
  })
  
});


function sacarDatos(datos, XMLHttpRequestObject){
  if(XMLHttpRequestObject) {
      var position = document.getElementById(`contenedor`);
      XMLHttpRequestObject.open("GET", datos);
      XMLHttpRequestObject.onreadystatechange = ()=>{
          if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) {
              let object = JSON.parse(XMLHttpRequestObject.responseText);
              position.innerHTML = `Nombre: ${object.h}<br>`;
          }
      }
  } 
  XMLHttpRequestObject.send(null);
}

function cambiarFile(){
  const input = document.getElementById('inp');
  if(input.files && input.files[0])
      console.log("File Seleccionado : ", input.files[0]);
  
}
