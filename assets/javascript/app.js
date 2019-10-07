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
    document.getElementById("timer").innerHTML = " ";
    document.getElementById("submit").style.visibility = "visible";
    document.getElementById("final-correct").innerHTML = "You got " + correct + " correct.";
    document.getElementById("final-wrong").innerHTML = "You got " + wrong + " wrong.";
    
    
}

var seconds_left = 20;
var interval = setInterval(function() {
    document.getElementById('timer').innerHTML = --seconds_left;

    if (seconds_left == 0)
    {
        document.getElementById('timer').innerHTML = 'Results';
        clearInterval(interval);

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
    document.getElementById("timer").innerHTML = "Times Up! ";
    document.getElementById("submit").style.visibility = "visible";
    document.getElementById("final-correct").innerHTML = "You got " + correct + " correct.";
    document.getElementById("final-wrong").innerHTML = "You got " + wrong + " wrong.";
        
    }
}, 1000);
