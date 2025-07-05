const form = document.querySelector('form')
const inputElem = document.querySelector("#guess")
const submitBtn = document.querySelector(".submit-btn")
const startBtn = document.querySelector(".start-btn")
const massage = document.querySelector(".massage")
const userGuesses = document.querySelector(".user-guesses");

(function () {
   
let theGuess = Math.floor(Math.random() * 100) + 1  
let guessArr = []

form.addEventListener('submit',(e) => {
    e.preventDefault()
    const userGuess = parseInt(inputElem.value)
    
     // Input validation
    if (isNaN(userGuess) || userGuess < 0 || userGuess > 100) {
        massage.style.visibility = "visible";
        massage.innerText = "Please enter a number between 0 and 100!";
        return;
    }

    guessArr.push(userGuess)

    // Check for max 7 attempts
    if (guessArr.length >= 7 && userGuess !== theGuess) {
        massage.style.visibility = "visible";
        userGuesses.style.visibility = "visible";
        massage.innerText = `Game Over! The correct number was ${theGuess}`;
        userGuesses.innerText = `Your guesses: ${guessArr.join(", ")}`;
        submitBtn.disabled = true;
        startBtn.disabled = false;
        return;
    }

    massage.style.visibility = "visible"
    userGuesses.style.visibility  = "visible"

    if (userGuess > theGuess) {
        massage.innerText = "Too high!";
    } else if (userGuess < theGuess) {
        massage.innerText = "Too low!";
    } else  {
        massage.innerText = "You got it! Congrats 🎉";
        submitBtn.disabled = true;
        startBtn.disabled = false;
    }

    userGuesses.innerText = `Your guesses : ${guessArr.join(", ")}`
    form.reset()
})

startBtn.addEventListener("click", () => {
    massage.innerText = "";
    userGuesses.innerText = "";
    massage.style.visibility = "hidden"
    userGuesses.style.visibility  = "hidden"
    submitBtn.disabled = false;
    startBtn.disabled = true;
    theGuess = Math.floor(Math.random() * 100) + 1
    guessArr = [];
})


})()