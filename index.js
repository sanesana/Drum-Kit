function drumtool(char)
{
    switch (char) {
        case "w":
            
                var crash=new Audio('sounds/crash.mp3'); crash.play();break;
            
            case "a":
             var kickbass=new Audio('sounds/kick-bass.mp3'); kickbass.play();break;
                
                
             
             case "s":
                 var snare=new Audio('sounds/snare.mp3');snare.play();break;
                    
                 
                 case "d":
                     
                     var tom1=new Audio('sounds/tom-1.mp3'); tom1.play();break;
                         
                       
                     case "j":
                         
                             
                         var tom2=new Audio('sounds/tom-2.mp3');tom2.play();break;
                         case "k":
                             
                             var tom3=new Audio('sounds/tom-3.mp3'); tom3.play();break;
                             case "l":
                                 var tom4=new Audio('sounds/tom-4.mp3');
                                 tom4.play();
                                 break;
                                 
        default:
            break;
    }
}

function makeAnimation(currentKey)
{
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);

}

// Playing drumkset via clicking on the screen

var keys = document.querySelectorAll(".drum").length;

for ( var i=0;i<keys;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttoninnerHTML = this.innerHTML;
        drumtool(buttoninnerHTML);
        makeAnimation(buttoninnerHTML);
    });
}


// Playing drumset via respective keyboard keys
document.addEventListener("keydown",function(event){
    drumtool(event.key);
    makeAnimation(event.key);
});