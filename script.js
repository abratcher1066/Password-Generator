// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score


// 1. make the timer (done)
// 2. make the start button (done)
// 3. make the questions (done)
// 4. make questions begin after clicking the start button

// QUIZ SECTION
// ~~~~~

var answerOne = prompt("Question  #1?")
var answerTwo = prompt("Question  #2?")
var answerThree = prompt("Question  #3?")
var rightAnswers = 0;

function beginQuiz() {
    startTimer;
    var rightAnswers = 0;
    var answerOne = prompt("Question  #1?")
    var answerTwo = prompt("Question  #2?")
    var answerThree = prompt("Question  #3?")
    if (answerOne != "Answer to #1 goes here."){
        rightAnswers += 1;
    }
    if (answerTwo != "Answer to #2 goes here."){
        rightAnswers += 1;
    }
    if (answerThree != "Answer to #3 goes here."){
        rightAnswers += 1;
    }
}


var userName = prompt("Game over.  Please enter your name to see high scores.")

// HIGH SCORE ARRAY (TBD)
// ~~~~~
var highScores =

// HTML SECTION
// ~~~~~

// first let's make the title
var h1Tag = document.createElement("h1");
var h2Tag = document.createElement("h2");
h1Tag.setAttribute("style", "text-align: center;");
h2Tag.setAttribute("style", "text-align: center;");
h1Tag.textContent = "Coding Quiz";
h2Tag.textContent = "This is the sub headline.";
// dom practice
// They go in the order written here.
document.body.append(h1Tag);
document.body.append(h2Tag);

// TIMER
// ~~~~~~
// Next, I'm going to add the timer.
// 
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
        timer = duration;
        }
        if (timer === 0) {
            alert('sorry, out of time.  try again.')
        }
    }, 1000);

}
// displays timer
jQuery(function ($) {
    var timeLeft = 60 * 2,
        display = $('#time');
    startTimer(timeLeft, display);

});

// BUTTON
// ~~~~~~
// Next, I am making the button and adding an event listener so nothing happens
// until the user hits the 'start quiz' button.
var startBtn = document.querySelector("#button");


// when "begin quiz" is clicked
startBtn.addEventListener("click", () => {
    beginQuiz();
    startTimer;
});

