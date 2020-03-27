var bigBucket = document.querySelector(".container");
var intro = document.querySelector(".poof");
var startButt = document.querySelector("#startButton");
var theQuiz = document.querySelector(".quizbucket");
var quizList = document.querySelector(".quizlist");
var submitButt = document.querySelector("#answersubmit");
var theScore = document.querySelector("#score");
var scoreDiv = document.querySelector("#scorediv");
var scoreBuck = document.querySelector(".scorebucket");
var highList = document.querySelector("#highscores");
var highListCont = document.querySelector("#highbucket");
var scoreLink = document.querySelector(".scorelink");
var theHighScoreDiv = document.querySelector(".highscorebucket");
var timeCount = document.querySelector(".timer");
var i = 0;
var scoreCount = 0;
var z = 0;
var highScores = [];
var timeLeft = 65;
var interval;

getTheScores();

scoreDiv.remove()

var questionsOb = [
    {
        question: "What is a Japanese chef's knife called?",
        answers: [
            "a) Scimitar",
            "b) Gyuto",
            "c) Wusthof",
            "d) Bowie Knife"
        ],
        correct: 1
    },
    {
        question: "What is a good, usable length for a chef's knife blade?",
        answers: [
            "a) 20mm - 30mm",
            "b) 400mm - 600mm",
            "c) 800mm - 1000mm",
            "d) 180mm - 270mm"
        ],
        correct: 3
    },
    {
        question: "What is a good tool for sharpening a knife?",
        answers: [
            "a) Waterstone",
            "b) Cat",
            "c) Golf ball",
            "d) Piece of wood",
        ],
        correct: 0
    },
    {
        question: "What is a Japanese vegetable knife called?",
        answers: [
            "a) Narwhal",
            "b) Nutcracker",
            "c) Nakiri",
            "d) Nissan"
        ],
        correct: 2
    }];




function makeQuiz() {

    quizList.textContent = "";


    if (i < questionsOb.length) {
        var newDiv0 = document.createElement("div");
        // var current = questionsOb[i].correct;
        newDiv0.innerHTML = questionsOb[i].question;
        quizList.appendChild(newDiv0);



        for (var y = 0; y < questionsOb[i].answers.length; y++) {
            var newDiv = document.createElement("div");
            newDiv.innerHTML = questionsOb[i].answers[y];
            newDiv.setAttribute("data-index", y);
            var button = document.createElement("button");
            button.setAttribute("class", "btn btn-light btn-sm ml-2");
            button.setAttribute("type", "submit");
            button.textContent = "Select";
            newDiv.appendChild(button);
            quizList.appendChild(newDiv);

        }
    } else {
        renderScore();

    }

    i++;



}

function getTheScores() {

    var storedScores = JSON.parse(localStorage.getItem("highScores"));

    if (storedScores !== null) {
        highScores = storedScores;
    }

}










// getting the timer to behave was difficult. it starts on page load, which isn't ideal. works otherwise, though.

function startTimer() {
    clearInterval(interval);
    interval = setInterval(startTimer, 1000);
    timeLeft--;
    timeCount.textContent = `Time left: ${timeLeft}`;

    if (timeLeft === 0) {
        // not sure this is actually doing anything here...
        renderScore()
    }
};


function renderScore() {
    clearInterval(interval);
    theQuiz.setAttribute("class", "away");
    var initials = prompt("Game over. What are your initials?");
    var scoreList = `${scoreCount} - ${initials}`
    highScores.push(scoreList);
    theScore.textContent = `Your Score is ${scoreCount}`;
    scoreBuck.appendChild(theScore);
    bigBucket.append(scoreDiv);
    console.log(scoreCount);
    storeScore();
}


function storeScore() {
    localStorage.setItem("highScores", JSON.stringify(highScores));
};


function tallyScore(what) {
    var rightAns = questionsOb[z].correct;
    var userAns = parseInt(what);
    if (userAns === rightAns) {
        scoreCount++;
    } else {
        timeLeft = timeLeft - 15;
    }


    z++;
};

startButt.addEventListener("click", function () {
    intro.setAttribute("class", "away");
    startTimer();
    makeQuiz();
});

quizList.addEventListener("click", function () {

    var element = event.target;
    if (element.matches("button") === true) {
        var index = element.parentElement.getAttribute("data-index");
        // console.log(index);
        tallyScore(index);
        makeQuiz();
    }
});


