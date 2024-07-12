var numOfDrums = document.querySelectorAll(".drum").length;
for(i=0;i<numOfDrums;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonInnerHTML = this.innerHTML;

    switch(buttonInnerHTML){
      case("w"):
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();

        break;
      default:
    }

  });
}

document.addEventListener("keypress", alert("hey!!"));