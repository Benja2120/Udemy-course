/*Funciones auxiliares*/
/*asigna sonido*/
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
        break}};

/*asigna animacion*/
    function animacion(id){
        $("#"+id).addClass("pressed");
        setTimeout(function(){
        $("#"+id).removeClass("pressed");
        },100)};

/*Funcion random*/
function randomColor(){
    var a = Math.floor(Math.random()*4 + 1);
    switch(a){
        case "1":
            return "green";
            break;
        case "2":
            return "red";
            break;
        case "3":
            return "yellow";
            break;
        case "4":
            return "blue";
            break;
        default:
        break}};

/* Funciones Principales*/
/*detecta la tecla presionada*/
$(document).keydown(function(event){
    if($("#level-title").html().length>10){
        level(1);
        iniciaJuego();
    }});

/*Reinicia valores*/
function iniciaJuego(){
    var arrayX = [];
    var arrayY = [];
    alert(randomColor());
    arrayY.push(randomColor());
    reproducir(arrayY)};

/*Funcion reproducir*/
function reproducir(array){
    for(i = 0; i<array.length; i++){
        sonido(array[i]);
        animacion(array[i])}};

/*cambia el numero de level*/
function level(n){
    $("#level-title").html("Level " + n)};

/*Asigna accion a botones*/
for( i = 0; i<$(".btn").length; i++){
    $(".btn")[i].addEventListener("click", function(){
        var btnId = this.id;
        sonido(btnId);
        animacion(btnId);
    })};

