const readlineSync = require("readline-sync")

const name = readlineSync.question("Hi! What is your name? ")
console.log("Hello, "+ name + "!")
