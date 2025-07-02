const inputElem = document.querySelector("#guess")
const submitBtn = document.querySelector(".submit-btn")
const startBtn = document.querySelector(".start-btn")
const massage = document.querySelector(".massage")
const userGuesses = document.querySelector(".user-guesses")

const theNumber = Math.floor(Math.random() * 101) + 1

console.log(theNumber)