/*

let randomNumber = Math.floor(Math.random()*100);
console.log(randomNumber);
let guess = 0;
let toalGuesses = document.getElementById('numberG');
let Score = document.getElementById('numberS');
let GameDes = document.getElementById('gameDes');
let entry = document.getElementById('entryNumber');
let enterBtn = document.getElementById('enterBtn');
let guessNumber;

function enter(){
    guessNumber = entry.value;
}

enterBtn.addEventListener('click' , enter);



do{
    if(guessNumber == randomNumber){
    GameDes.innerHTML = "Your Guess Is Correct";
}else if(guessNumber > randomNumber){
    GameDes.innerHTML = "Your Number Is Grater Than Original Number";
}else{
    GameDes.innerHTML = "Your Number Is Lesser Than Original Number";
}
guess++ ;
}while(guessNumber != randomNumber) ;


toalGuesses.innerHTML = guess ;

let ScoreCalculate = (102- 2*guess) ;
Score.innerHTML = ScoreCalculate ;

*/

/*
let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber); // Just for debugging
let guess = 0;
let totalGuesses = document.getElementById('numberG');
let score = document.getElementById('numberS');
let gameDes = document.getElementById('gameDes');
let entry = document.getElementById('entryNumber');
let enterBtn = document.getElementById('enterBtn');
let guessNumber;
let scoreCalculate;

// Function to process each guess
function enter() {
    guessNumber = parseInt(entry.value);  // Convert input to a number
    guess++;  // Increment the guess counter

    // Check if the guess is correct, too high, or too low
    if (guessNumber === randomNumber) {
        gameDes.innerHTML = "Your Guess Is Correct!";
        calculateScore();
    } else if (guessNumber > randomNumber) {
        gameDes.innerHTML = "Your Number Is Greater Than the Original Number.";
    } else {
        gameDes.innerHTML = "Your Number Is Lesser Than the Original Number.";
    }

    totalGuesses.innerHTML = guess;  // Update total guesses on the page
}

// Function to calculate the score
function calculateScore() {
    scoreCalculate = Math.max(102 - 2 * guess, 0);  // Prevent negative scores
    score.innerHTML = scoreCalculate;
}

// Event listener for when the user clicks the "Enter" button
enterBtn.addEventListener('click', enter);


*/

let randomNumber;
let guess = 0;
let totalGuesses = document.getElementById('numberG');
let score = document.getElementById('numberS');
let gameDes = document.getElementById('gameDes');
let entry = document.getElementById('entryNumber');
let enterBtn = document.getElementById('enterBtn');
let startBtn = document.getElementById('st_btn');
let restartBtn = document.getElementById('restartBtn');
let gameOver = false;  // Game over flag to prevent more guesses

//Hiding befor and end section
document.getElementById('after').style.display = "none";
document.getElementById('end').style.display = "none";

// Function to start the game
function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;  // Random number between 1 and 100
    // console.log(randomNumber);   For debugging, can be removed
    guess = 0;
    gameOver = false;  // Reset game over flag
    entry.value = "";
    totalGuesses.innerHTML = guess;
    score.innerHTML = 0;
    document.getElementById('before').style.display = "none";
    document.getElementById('after').style.display = "flex";
    enterBtn.style.display = "flex"
    restartBtn.style.display = "flex";
    enterBtn.disabled = false;  // Re-enable Enter button
}

// Function to process each guess
function enter() {
    if (gameOver) {
        return;  // If game is over, do nothing
    }
    
    let guessNumber = parseInt(entry.value);  // Convert input to a number
    if (!isNaN(guessNumber)) {  // Ensure it's a valid number
        guess++;  // Increment the guess counter

        // Check if the guess is correct, too high, or too low
        if (guessNumber === randomNumber) {
            gameDes.innerHTML = "Your Guess Is Correct!";
            calculateScore();
            gameOver = true;  // Set game over flag to true
            document.getElementById('end').style.display = "flex";
            enterBtn.style.display = "none" // Hide enter button
            restartBtn.style.display = "flex";  // Show restart button
            enterBtn.disabled = true;  // Disable enter button after correct guess
        } else if (guessNumber > randomNumber) {
            gameDes.innerHTML = "Your Number Is Greater Than the Original.";
        } else {
            gameDes.innerHTML = "Your Number Is Lesser Than the Original.";
        }

        totalGuesses.innerHTML = guess;  // Update total guesses on the page
    } else {
        gameDes.innerHTML = "Please Enter A Valid Number.";
    }
}

// Function to calculate the score

let scoreCalculate

function calculateScore() {
    scoreCalculate = Math.max(102 - 2 * guess, 0);  // Prevent negative scores
    score.innerHTML = scoreCalculate;
}

// Function to restart the game
function restartGame() {
    startGame();  // Reset the game by calling startGame
    gameDes.innerHTML = "New Number Generated"
    document.getElementById('end').style.display = "none";
}

// Event listeners
startBtn.addEventListener('click', startGame);
enterBtn.addEventListener('click', enter);
restartBtn.addEventListener('click', restartGame);
