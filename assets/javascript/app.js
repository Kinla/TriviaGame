//Creating each trivia question
var tiana = {
    question: "Which of the following Disney princess is left handed?",
    answers: ["Aurora", "Belle", "Jasmine", "Tiana"],
    correctAns: "Tiana",
    answerLine: "Tiana is the only princess who is left-handed other than the honorary-royal, Mulan.",
    video: "./assets/videos/tiana.mp4",
};

var merida = {
    question: "Which of the following Disney princess has brothers?",
    answers: ["Ariel", "Snow White", "Merida", "Rapunzel"],
    correctAns: "Merida",
    answerLine: "Merida is the only princess to have brothers.",
    video: "./assets/videos/merida.mp4",
};

var pocahontas = {
    question: "Which Disney Princess is based on a real person?",
    answers: ["Pocahontas", "Tiana", "Merida", "Mulan"],
    correctAns: "Pocahontas",
    answerLine: "Pocahontas  is the only princess based on a real person. Mulan is based on a poem.",
    video: "./assets/videos/pocahontas.mp4",
};

var cinderella = {
    question: "Which Disney Princess almost had a pet turtle named Clarissa?",
    answers: ["Cinderella", "Ariel", "Pocahontas", "Belle"],
    correctAns: "Cinderella",
    answerLine: "In earlier drafts of the film, Cinderella originally had a pet turtle named Clarissa.",
    video: "./assets/videos/cinderella.mp4",
};

var moana = {
    question: "Who is currently waiting for their official live coronation to become a Disney Princess?",
    answers: ["Anna", "Moana", "Shuri", "Gamora"],
    correctAns: "Moana",
    answerLine: "Moana is almost a full fledge princess!",
    video: "./assets/videos/moana.mp4",
};

var snowWhite = {
    question: "Who is the youngest Princess?",
    answers: ["Rapunzel", "Ariel", "Mulan", "Snow White"],
    correctAns: "Snow White",
    answerLine: "Snow White at 14 years old is the youngest of all princesses. She is also the only princess with a star on the Hollywood Walk of Fame.",
    video: "./assets/videos/snow.mp4",
};

var aurora = {
    question: "Who is the quietest Princess?",
    answers: ["Tiana", "Aurora", "Jasmine", "Belle"],
    correctAns: "Aurora",
    answerLine: "Princess Aurora had only 18 minutes of screen time and 18 lines of dialogue in the film, making her the quietest Disney Princess.",
    video: "./assets/videos/aurora.mp4",
};


//Setting up Trivia question list as an array of objects
var triviaList = [tiana, merida, aurora, pocahontas, cinderella, moana, snowWhite];

//some required time/tracking variables
var qTime, next, qTimer, aTimer;

//some required scoring variables
var right, wrong, unanswered;

//redy document
$(document).ready(function (){
    init();
});

function init(){
    $("#start").show();
    $("#deck").empty();
    $(".video").hide();
    qTime = 20;
    next = 0;
    right = 0;
    wrong = 0;
    unanswered = 0;
};

// timer for question count down
function qCD(){
    clearTimeout(aTimer);
    if (next === triviaList.length){
        $("#timer").empty().hide();
        $("#deck").empty();
        $("<h5>You have finished the game!</h5>").addClass("card-title").appendTo($("#deck"));
        $("<p># of correct answer(s): " + right + ".</p>").addClass("result").appendTo($("#deck"));
        $("<p># of wrong answer(s): " + wrong + ".</p>").addClass("result").appendTo($("#deck"));
        $("<p># unanswered: " + unanswered + ".</p>").addClass("result").appendTo($("#deck"));
        $("<button>Start Over</button>").addClass("my-3 btn startOver").appendTo($("#deck"));
        $(".video").hide();
        $("#playVideo").attr("src", "");
    
    } else {
        qTimer = setInterval(countDown, 1000);
        displayQ();
    };
};

//timer for answer count down
function aCD(){
        clearInterval(qTimer);
        displayA();
};

//start button
$("#start").on("click", function(){
    $("#start").hide();
    qCD();
});


//count down
function countDown(){
    qTime--
    $("#timer").text("Time remaining: " + qTime + " seconds.");
    if (qTime === 0){
        unanswered++
        clearInterval(qTimer);
        $("#timer").empty().hide();
        $("#deck").empty();
        $("<h5>Time's up!</h5>").addClass("card-title").appendTo($("#deck"));
        aCD();
    }

};

//function to display each quesiton
function displayQ(){
    $(".video").hide();
    $("#deck").empty();
    $(".video").hide();
    $("#playVideo").attr("src", "");
    $("#timer").show().text("Time remaining: " + qTime + " seconds.");
    $("<h5>" + triviaList[next].question + "</h5>").addClass("card-title").appendTo($("#deck"));
    for (var i = 0; i < 4; i++){
        if (triviaList[next].answers[i] === triviaList[next].correctAns){
            $("<button>" + triviaList[next].answers[i] + "</button>").addClass("answer mx-2 my-1 btn correct").appendTo($("#deck"));
        } else {
        $("<button>" + triviaList[next].answers[i] + "</button>").addClass("answer mx-2 my-1 btn").appendTo($("#deck"));
        };

    };
};

//function to display answers
function displayA(){
    $("<p>" + triviaList[next].answerLine + "</p>").addClass("line").appendTo($("#deck"));
    $(".video").show();
    $("#playVideo").attr("src", triviaList[next].video);
    next++;
    qTime = 20;
    aTimer = setTimeout(qCD, 10000);
};

//to answer question
$("body").on("click", ".answer", function(){
    $("#timer").empty().hide();
    $("#deck").empty();
    clearInterval(qTimer);
    if($(this).hasClass("correct")){
        right++
        $("<h5> You are correct!</h5>").addClass("card-title").appendTo($("#deck"));
        displayA();        
    } else {
        wrong++
        $("<h5>Nope...</h5>").addClass("card-title").appendTo($("#deck"));
        displayA();
    };
});

//start over
$("body").on("click", ".startOver", function(){
    init();
});
