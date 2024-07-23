$("h1").addClass("big-title");

$("button").click(function (){
    $("h1").css("color","red");
});

$(document).keydown(function (event){
    $("h1").text(event.key)
});