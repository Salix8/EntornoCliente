$(document).ready(function () {
    $("#btn").on("click", ()=> {
        $.getJSON("https://catfact.ninja/fact", (data)=> {
            $("#container").html(data.fact);
        });
    })
});