
$(document).ready(function(){
  $("#btn").click(()=>{

    $(`p`).animate({
      "font-size":"20px",
      color:"aquamarine"
    }, 2000);

    $(`p`).queue(()=>{
      $(`p`).css(`text-decoration`, `underline`);
      $(`p`).dequeue()
    });

    $(`p`).animate({
      "font-size":"40px",
      color:"aquamarine"
    }, 2000);

  });
});

