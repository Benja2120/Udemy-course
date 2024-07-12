var numOfDrums = document.querySelectorAll(".drum").length;
//detecta el boton que ha sido presionado
for( i = 0 ; i < numOfDrums ; i++ ) {
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var key = this.innerHTML;
    makeSound(key);
    }

  };
  
//detecta la tecla presionada
document.addEventListener("keydown", function(event){
  makeSound(event.key);
  });

//emite el sonido que corresponde
  function makeSound(key){
    switch(key){
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
      case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
      case "k":
        var kickBass = new Audio("sounds/kick-bass.mp3");
        kickBass.play();
      case "l":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
      break;
      default:

      }
  }