
window.addEventListener(`load`, ()=>{
  document.getElementById(`selectCustomer`).addEventListener(`change`, ()=>{
    showCustomer(document.getElementById(`selectCustomer`).value);
  })
});

function showCustomer(str) {
    if (str == "") {
      document.getElementById("disponibilidad").innerHTML = "";
      return;
    }
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("disponibilidad").innerHTML = this.responseText;
    }
    xhttp.open("POST", "script.php?q="+str);
    xhttp.send();
}