
window.addEventListener(`load`, ()=>{
  document.getElementById(`selectCustomer`).addEventListener(`change`, ()=>{
    showCustomer(document.getElementById(`selectCustomer`).value);
  })
});

function showCustomer(str) {
    if (str == "") {
      document.getElementById("txtHint").innerHTML = "";
      return;
    }
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("txtHint").innerHTML = this.responseText;
    }
    xhttp.open("GET", "script.php?q="+str);
    xhttp.send();
}