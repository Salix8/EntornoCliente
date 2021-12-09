
window.addEventListener(`load`, ()=>{
  let str = ``;
    showCustomer(str);
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