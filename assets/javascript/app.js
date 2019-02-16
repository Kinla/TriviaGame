//Creating each trivia question
var tiana = {
    question: "Which of the following Disney princess is left handed?",
    answers: ["Aurora", "Belle", "Jasmine", "Tiana"],
    correctAns: "Tiana",
    answerLine: "Tiana is the only princess who is left-handed other than the honorary-royal, Mulan.",
    video: "",
};

var merida = {
    question: "Which of the following Disney princess has brothers?",
    answers: ["Ariel", "Snow White", "Merida", "Rapunzel"],
    correctAns: "Merida",
    answerLine: "Merida is the only princess to have brothers",
    video: "",
};

var pocahontas = {
    question: "Which Disney Princess is based on a real person?",
    answers: ["Pocahontas", "Tiana", "Merida", "Mulan"],
    correctAns: "Pocahontas",
    answerLine: "Pocahontas was the only princess based on a real person. Mulan was based on a poem.",
    video: "",
};

var cinderella = {
    question: "Which Disney Princess almost had a pet turtle named Clarissa?",
    answers: ["Cinderella", "Ariel", "Pocahontas", "Belle"],
    correctAns: "Cinderella",
    answerLine: "In earlier drafts of the film, Cinderella originally had a pet turtle named Clarissa.",
    video: "",
};

var moana = {
    question: "Who is currently waiting for their official live coronation to become a Disney Princess?",
    answers: ["Anna", "Moana", "Shuri", "Gamora"],
    correctAns: "Moana",
    answerLine: "Moana is almost a full fledge princess!",
    video: "",
};

//Setting up Trivia question list as an array of objects
var triviaList = [tiana, merida, pocahontas, cinderella, moana];

//redy document
$(document).ready(function (){
    $("#start").show();
    $("#deck").empty();
    qTime = 10;
    aTime = 4;
    next = 0;
    
});

//some required time/tracking variables
var qTime, aTime, next;

// timer for question count down
function qCD(){
    if (qTime > 0){
        var timer = setInterval(function() {
            $("#timer").text("Time remaining: " + qTime--  + " seconds.");
            displayQ();
        }, 1000);
    } else {
        aTime = 4;
        aCD();
        clearInterval(timer);
    };
};

//timer for answer count down
function aCD(){
    var timer = setInterval(function() {
        displayA();
        $("#timer").empty();
        aTime--;
    }, 1000);
    if (aTime === 0){
        next++
        qTime = 10;
        qCD();
        clearInterval(timer);
    };
};

//start button
$("#start").on("click", function(){
    $("#start").hide();
    qCD();
});


//function to display each quesiton
function displayQ(){
    $("#deck").empty();
    $("<h5>" + triviaList[next].question + "</h5>").addClass("card-title").appendTo($("#deck"));
    for (var i = 0; i < 4; i++){
        if (triviaList[next].answers[i] === triviaList[next].correctAns){
            $("<button>" + triviaList[next].answers[i] + "</button>").addClass("mx-2 btn btn-info correct").appendTo($("#deck"));
        } else {
        $("<button>" + triviaList[next].answers[i] + "</button>").addClass("mx-2 btn btn-info").appendTo($("#deck"));
        };

    };
};

//check answer correctly


//function to display answers
function displayA(){
    $("#deck").empty();
    if (next < triviaList.length){
        $("<h5>" + triviaList[next].answerLine + "</h5>").addClass("card-title").appendTo($("#deck"));
    }else {
        $("<h5>You have finished the game!</h5>").addClass("card-title").appendTo($("#deck"));
    }
};

