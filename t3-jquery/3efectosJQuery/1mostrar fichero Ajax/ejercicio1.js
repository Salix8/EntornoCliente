$(document).ready(()=>{

  function runEffect() {
    // get effect type from
    var selectedEffect = $( "#effectTypes" ).val();

    // Most effect types need no options passed by default
    var options = {};
    // some effects have required parameters
    if ( selectedEffect === "scale" ) {
      options = { percent: 50 };
    } else if ( selectedEffect === "size" ) {
      options = { to: { width: 200, height: 60 } };
    }

    if (selectedEffect == `highlight`) {
      $( "#imagen" ).show( selectedEffect );
    }
    if (selectedEffect == `pulsate`) {
      $( "#imagen" ).hide( selectedEffect );
    }
    if (selectedEffect == `bounce`) {
      $( "#imagen" ).toggle( selectedEffect, 500 );
    }
    if (selectedEffect == `shake`) {
      $( "#imagen" ).toggle( selectedEffect, 500 );
    }
    if (selectedEffect == `animate`) {
      $( "#imagen" ).animate({ left: "+=50", height: "toggle" }, 5000);
    }
  };

  $( "#btn" ).click(function() {
    runEffect();
  });
})


