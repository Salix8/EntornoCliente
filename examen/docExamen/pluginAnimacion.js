$(document).ready(()=>{
    
  $.fn.animateTitle = function() {
    return this.mouseover(()=> {
      $(this).animate({ backgroundColor: "olive" }, "slow");
    });
  };
    
  $("#title").animateTitle();
  
});


