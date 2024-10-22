var userClickedPattern=[];
var colors=["red", "blue", "green", "yellow"];
var pattern=[];
var level=0;

$(document).keypress(function()
{var started=false;
    if(!started)
    {
nextSequence();

$("h1").text("Level "+level);
started=true;
    }
    
});
$(".btn").on('click',function()
{
 var userChosenColor=$(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    checkAnswer(userClickedPattern.length-1);

});

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]==pattern[currentLevel])
    {
        if(userClickedPattern.length==pattern.length)
        {
        setTimeout(function(){
          nextSequence();
        },1000);
        
        
    }
    }
    else{
       
        
        playSound("wrong");

      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

        $("h1").text("Your game ends here..Click any key to restart");
        level=0;
        pattern=[];
        userClickedPattern=[];
    } 

}
function nextSequence(){
    userClickedPattern=[];
    level++;
    $("h1").text("Level "+level);
    var randomnum=Math.floor(Math.random()*4);
    var color=colors[randomnum];
pattern.push(color);

$("#"+color).fadeIn(100).fadeOut(100).fadeIn(100)  ;
playSound(color);
}


function playSound(name){
var audio=new Audio("sounds/"+name+".mp3");
audio.play();
}
function animatePress(currentColour)
{
    $("#"+currentColour).addClass("pressed");
   setTimeout(function(){
    $("#"+currentColour).removeClass("pressed");
   },100);
}
