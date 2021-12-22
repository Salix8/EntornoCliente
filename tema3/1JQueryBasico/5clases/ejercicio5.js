$(document).ready(()=>{

    $("p").mouseover(function(event){
        $("#capa").addClass("tamGrande");
    });

    $("p").mouseout(function(event){
        $("#capa").removeClass("tamGrande");
    });
    
})