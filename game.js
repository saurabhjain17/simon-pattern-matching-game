var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var started =false;
var level=0;



$(document).keypress(function() {
  if (!started) {

   
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});



$(".btn").click(function() {  
  var userChosenColour = $(this).attr("id");
  playSound(userChosenColour);
  animatePress(userChosenColour);
  userClickedPattern.push(userChosenColour);
  
  checkAnswer(userClickedPattern.length-1)
  

});


function nextSequence(){
  userClickedPattern=[]
    level++;
    $("#level-title").text("Level " + level);
    let randomNumber=Math.floor(Math.random() * 4);
    let randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour)
     
}



  function playSound(name){
    var linki="sounds/"+name+".mp3"
    var audio = new Audio(linki);
    audio.play(); 
  }


  function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
      }, 100);
      
  }


  function checkAnswer(currentLevel){
  if (userClickedPattern[currentLevel]===gamePattern[currentLevel]){
    
    if (userClickedPattern.length===gamePattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);
  }
    }
  
  else{
    
     $('body').addClass("game-over");
     playSound("wrong");
     setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over ,Press Any Key to Restart");
    startOver();
  }
  }

  function startOver(){
 gamePattern=[];
 userClickedPattern=[];
 started =false;
 level=0;

  }



  
  
