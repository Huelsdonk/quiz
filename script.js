// When start is pressed, hide jumbo, show first question
var bigBucket = document.querySelector(".container");
var intro = document.querySelector(".poof");
var startButt = document.querySelector("#startButton");
var theQuiz = document.querySelector(".quizbucket");
var quizList = document.querySelector(".quizlist");
var submitButt = document.querySelector("#answersubmit");
var theScore = document.querySelector("#score");
var scoreDiv = document.querySelector("#scorediv");
var scoreBuck = document.querySelector(".scorebucket");
var i = 0;
var scoreCount = 0;
var z = 0;
scoreDiv.remove();

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


// Each time a question is answered, show next question
// TODO: need to figure out how to look through the object or just use strings - still need loop though
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
            // gotta figure out how to keep score here. radio buttons maybe????
            button.setAttribute("class", "btn btn-light btn-sm ml-2");
            button.setAttribute("type", "submit");
            button.textContent = "Select";
            newDiv.appendChild(button);
            quizList.appendChild(newDiv);

        }
    } else {
        var initials = prompt("what are your initials?");
        theScore.textContent = `Score: ${initials} - ${scoreCount}`;
        scoreBuck.appendChild(theScore);
        storeScore();
        bigBucket.append(scoreDiv);
    }
    


    i++;
    
}
    startButt.addEventListener("click", function () {
        intro.setAttribute("class", "away");
        makeQuiz();
    })

    function storeScore() {
        localStorage.setItem("scoreCount", JSON.stringify(scoreCount));
    }

    
    function tallyScore(what) {
        var rightAns = questionsOb[z].correct;
        var userAns = parseInt(what);
        if (userAns === rightAns) {
            scoreCount++;
        }
        

        z++;
    }
    

    quizList.addEventListener("click", function(){

        var element = event.target;
        if (element.matches("button") === true) {
            var index = element.parentElement.getAttribute("data-index");
            // console.log(index);
            tallyScore(index);
            makeQuiz();
        }
    }); 


// Make timer begin on start button press
// If wrong answer is given, remove time from timer

// Once questions are answered OR no time left, game over

// When game is over, enter initials field shows

// score and initials are locally stored and can be accessed via "high scores" link
