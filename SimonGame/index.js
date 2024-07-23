$(document).keydown(function(event){
    if($("#level.title").innerHTML.length>10){
        level(1);
    }});

function level(n){
    $("#level-title").text("Level " + n);
}

/*cuenta los botones*/
var numOfButton = $(".btn").length;

/*Asigna accion a botones*/
for( i = 0; i<numOfButton; i++){
    $(".btn")[i].addEventListener("click", function{
        var btnId = $(".btn")[i].id;
        sonido(btnId);
        animacion(btnId);
    })};

function sonido(id){
    switch (id) {
        case "green":
            var aud1 = new Audio("sounds2/green.mp3");
            aud1.play();
            break;
        case "red":
            var aud2 = new Audio("sounds2/red.mp3");
            aud2.play();
            break;
        case "yellow":
            var aud3 = new Audio("sounds2/yellow.mp3");
            aud3.play();
            break;
        case "blue":
            var aud4 = new Audio("sounds2/blue.mp3");
            aud4.play();
            break;
    
        default:
        break;
    }};

    function animacion(id){
        $("#"+id).classList.add("pressed");
        setTimeout(function{
        $("#"+id).classList.remove("pressed");
        },100);
    }