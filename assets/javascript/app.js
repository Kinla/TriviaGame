//Creating the proto funtion
var Trivia = function (question, a, b, c, d, answer, video) {
    this.question = question;
    this.a = a;
    this.b =b;
    this.c = c;
    this.d = d;
    this.answerLine = answer;
    this.video = video
}

//Creating each trivia question
var tiana = new Trivia ("Which of the following Disney princess is left handed?", "Aurora", "Belle", "Jasmine", "Tiana", "Tiana is the only royal who is left-handed other than the honorary-royal, Mulan.");
var merida = new Trivia ("Which of the following Disney princess has brothers?", "Ariel", "Snow White", "Merida", "Rapunzel", "Merida is the only princess to have brothers");
var pocahontas = new Trivia ("Which Disney Princess is based on a real person?", "Pocahontas", "Tiana", "Merida", "Mulan", "Pocahontas was the only princess based on a real person. Mulan was based on a poem.")
var cinderella = new Trivia ("Which Disney Princess almost had a pet turtle named Clarissa?", "Cinderella", "Ariel", "Pocahontas", "Cinderella", "In earlier drafts of the film, Cinderella originally had a pet turtle named Clarissa.")
var moana = new Trivia ("Who is currently waiting for their official live coronation to become a Disney Princess?", "Anna", "Moana", "Shuri", "Gamora", "Moana is almost there!")
console.log(tiana, merida, pocahontas, cinderella);

//Setting up Trivia question list as an array of objects
var triviaList = [];
