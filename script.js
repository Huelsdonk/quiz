// When start is pressed, hide jumbo, show first question

var intro = document.querySelector(".poof");
var startButt = document.querySelector("#startButton");
var theQuiz = document.querySelector(".quizbucket");
var quizList = document.querySelector(".quizlist");
var submitButt = document.querySelector("#answersubmit");
var theScore = document.querySelector("#score");
var i = 0;
// submitButt.setAttribute("class", "away");
submitButt.remove();
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

// var questions = [
//     [
//         "What is a Japanese chef's knife called?",
//         "a: Scimitar",
//         "b: Gyuto",
//         "c: Wusthof",
//         "d: Bowie Knife"

//     ],
//     [
//         "What is a good, usable length for a chef's knife blade?",
//         "a: 20mm - 30mm  ",
//         "b: 400mm - 600mm  ",
//         "c: 800mm - 1000mm  ",
//         "d: 180mm - 270mm  "

//     ],
//     [
//         "What is a good tool for sharpening a knife?",
//         "a: Waterstone",
//         "b: Cat",
//         "c: Golf ball",
//         "d: Piece of wood",
//     ],
//     [
//         "What is a Japanese vegetable knife called?",
//         "a: Narwhal",
//         "b: Nutcracker",
//         "c: Nakiri",
//         "d: Nissan"

//     ]
// ]



// Each time a question is answered, show next question
// TODO: need to figure out how to look through the object or just use strings - still need loop though
function makeQuiz() {
    // submitButt.removeAttribute("class", "away");
    // submitButt.setAttribute("class", "btn btn-primary btn-lg");
    theQuiz.append(submitButt);
    quizList.textContent = "";

    if (i < questionsOb.length) {
        var newDiv0 = document.createElement("div");
        newDiv0.innerHTML = questionsOb[i].question;
        quizList.appendChild(newDiv0);



        for (var y = 0; y < questionsOb[i].answers.length; y++) {
            var newDiv = document.createElement("div");
            newDiv.innerHTML = questionsOb[i].answers[y];
            var button = document.createElement("button");
            // gotta figure out how to keep score here. radio buttons maybe????
            button.setAttribute("class", "btn btn-light btn-sm ml-2");
            button.setAttribute("type", "submit");
            button.textContent = "Select";
            newDiv.appendChild(button);
            quizList.appendChild(newDiv);

        }
    } else {
        submitButt.setAttribute("class", "away");
    }

    button.addEventListener("click", function(){
        console.log(event.target);
    })
    // if (i < questions.length) {
    //     for (var y = 0; y < questions[i].length; y++) {
    //         var newDiv = document.createElement("div");
    //         newDiv.innerHTML = questions[i][y];
    //         quizList.appendChild(newDiv);

    //     }
    // }

    // if (i < questions.length) {
    // newPara.innerHTML = questions[i];
    // this might work, but i'm probably just overwriting the variable. probably need to plop it into an array and then loop through it on output.
    // also, might be able to track this with a data-value and get each one that way...
    // for (var index = 0; index < questionsOb[i].length; index++) {
    // var newPara2 = document.createElement("li");
    // newPara2.innerHTML = questionsOb[i][index];
    // }
    // };

    // quizList.append(newPara);
    // quizList.append(newPara2);
    i++;

}
startButt.addEventListener("click", function () {
    intro.setAttribute("class", "away");
    makeQuiz();
})

submitButt.addEventListener("click", function () {
    makeQuiz()
})


// Make timer begin on start button press
// If wrong answer is given, remove time from timer

// Once questions are answered OR no time left, game over

// When game is over, enter initials field shows

// score and initials are locally stored and can be accessed via "high scores" link
