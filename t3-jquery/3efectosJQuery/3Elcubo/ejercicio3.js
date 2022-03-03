
$(document).ready(function(){
  $("#btnInicio").click(function(){
    var div = $("div");
    div.animate({ left: "+=200" }, "slow");
    div.animate({ top: "+=200" }, "slow");
    div.animate({ left: "-=200" }, "slow");
    div.animate({ top: "-=200" }, "slow");

    $("span").text(div.queue().length);   
  });

  $( "#btnFin" ).click(function() {
    jQuery.queue( $( "div" )[ 0 ], "fx", [] );
    $( "div" ).stop();
  });
});

