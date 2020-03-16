
var highList = document.querySelector("#highscores");
var highListCont = document.querySelector("#highbucket");
var scoreLink = document.querySelector(".scorelink");
var theHighScoreDiv = document.querySelector(".highscorebucket")
var clearButton = document.querySelector("#clear");




showScores();


function showScores(){
    
    var storedScores = JSON.parse(localStorage.getItem("highScores"));
  
   
    
    // this works if initials are the same. different initials present a problem...
    storedScores = storedScores.sort(function(a, b){return b-a});

    for (var i = 0; i < storedScores.length; i++) {
        newDiv = document.createElement("div");
        newDiv.textContent = `Score: ${storedScores[i]}`;
        highListCont.appendChild(newDiv);
    }

}

function storeScore() {
    localStorage.setItem("highScores", JSON.stringify(highScores));
}

clearButton.addEventListener("click", function(){
    highScores = [];
    localStorage.setItem("highScores", JSON.stringify(highScores));
    // thought I could just re-run showScores() but couldn't get it to work. this does, so i went with it.
    location.reload();    


})












// Make timer begin on start button press
// If wrong answer is given, remove time from timer

// Once questions are answered OR no time left, game over

// When game is over, enter initials field shows

// score and initials are locally stored and can be accessed via "high scores" link
