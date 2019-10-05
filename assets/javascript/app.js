function check(){

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var question5 = document.quiz.question5.value;
var correct = 0;
var wrong = 0;


    if (question1 == "true") {
        correct++;
        }else{
            wrong++;
        }
    if (question2 == "true") {
        correct++;
    }else{
        wrong++;
    }
    if (question3 == "false") {
        correct++;
    }else{
        wrong++;
    }
    if (question4 == "false") {
        correct++;
    }else{
        wrong++;
    }
    if (question5 == "true") {
        correct++;
    }else{
        wrong++;
    }
    
    document.getElementById("submit").style.visibility = "visible";
    document.getElementById("final-correct").innerHTML = "You got " + correct + " correct.";
    document.getElementById("final-wrong").innerHTML = "You got " + wrong + " wrong.";
}

var timeLeft = 30;
var elem = document.getElementById('timer');
var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
    
    }
}
