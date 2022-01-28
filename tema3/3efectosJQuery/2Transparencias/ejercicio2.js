
$(document).ready(()=>{

  $( `#p1` ).show( `scale`, 500 );

  $( `#btn1` ).click(()=> {
    $( `#p1` ).fadeTo(1500, 1);
  });

  $( `#btn2` ).click(()=>{
    $( `#p1` ).fadeTo(1500, 0.1);
  });
})



