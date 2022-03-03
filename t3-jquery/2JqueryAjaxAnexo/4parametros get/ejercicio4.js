$(document).ready(function () {

    $("#btn").on("click", () => {
        $.get( "script.php", $("form").serialize(), (response) => $("#results").html(response))
        .fail((request) => $("#results").html(request.status));
    });

});