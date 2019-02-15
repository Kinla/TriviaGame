//Creating the proto funtion
var Trivia = function (question, a, b, c, d, id, answer, video) {
    this.question = question;
    this.a = a;
    this.b =b;
    this.c = c;
    this.d = d;
    this.answerID = id;
    this.answerLine = answer;
    this.video = video
}

//Creating each trivia question
var tiana = new Trivia ("Which of the following Disney princess is left handed?", "Aurora", "Belle", "Jasmine", "Tiana", "d", "Tiana is the only royal who is left-handed other than the honorary-royal, Mulan.");
var merida = new Trivia ("Which of the following Disney princess has brothers?", "Ariel", "Snow White", "Merida", "Rapunzel", "c", "Merida is the only princess to have brothers");
var pocahontas = new Trivia ("Which Disney Princess is based on a real person?", "Pocahontas", "Tiana", "Merida", "Mulan", "a", "Pocahontas was the only princess based on a real person. Mulan was based on a poem.")
var cinderella = new Trivia ("Which Disney Princess almost had a pet turtle named Clarissa?", "Cinderella", "Ariel", "Pocahontas", "Belle", "a", "In earlier drafts of the film, Cinderella originally had a pet turtle named Clarissa.")
var moana = new Trivia ("Who is currently waiting for their official live coronation to become a Disney Princess?", "Anna", "Moana", "Shuri", "Gamora", "b", "Moana is almost there!")

//Setting up Trivia question list as an array of objects
var triviaList = [tiana, merida, pocahontas, cinderella, moana];

$(document).ready(function (){
    $("#start").show();
    $("#timer").hide();
    $("#deck").hide();
});

var i = 1;
var time = 25;

$("#start").on("click", function(){
    $("#start").hide();
    $("timer").show();
    $("#deck").show();

    setInterval(function() {
        $("#timer").text("Time remaining: " + time--  + " seconds.");
    }, 1000);
    
    $(".question").text(triviaList[0].question).attr("data-id", triviaList[0].answerID);
    $(".answerList").empty();
    $(".answerList").append("<li>" + triviaList[0].a + "</li>")
    $(".answerList").append("<li>" + triviaList[0].b + "</li>")
    $(".answerList").append("<li>" + triviaList[0].c + "</li>")
    $(".answerList").append("<li>" + triviaList[0].d + "</li>")
        
            
    

});

setInterval(function() {

    $(".question").text(triviaList[i++].question).attr("data-id", triviaList[i++].answerID);
    $(".answerList").empty();
    $(".answerList").append("<li>" + triviaList[i++].a + "</li>")
    $(".answerList").append("<li>" + triviaList[i++].b + "</li>")
    $(".answerList").append("<li>" + triviaList[i++].c + "</li>")
    $(".answerList").append("<li>" + triviaList[i++].d + "</li>")


}, 26000);
