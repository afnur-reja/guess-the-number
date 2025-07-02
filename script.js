const inputElem = document.querySelector("#guess")
const submitBtn = document.querySelector(".submit-btn")
const startBtn = document.querySelector(".start-btn")
const massage = document.querySelector(".massage")
const userGuesses = document.querySelector(".user-guesses")

const theGuess = Math.floor(Math.random() * 100) + 1

const onStartGame = () => {
    startBtn.disabled = true;

}

onStartGame()

console.log(theGuess)

