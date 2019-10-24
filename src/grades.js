const readlineSync = require("readline-sync")

const testWt = .5;
const quizWt = .35;
const hwWt = .15;
console.log("\nEnter three homework grades.")
let hwInpt = Number(readlineSync.question(""))
hwInpt += Number(readlineSync.question(""))
hwInpt += Number(readlineSync.question(""))
hwInpt /= 3;
console.log("\nEnter three homework grades.")
let quizInpt = Number(readlineSync.question(""))
quizInpt += Number(readlineSync.question(""))
quizInpt += Number(readlineSync.question(""))
quizInpt /= 3;
console.log("\nEnter three homework grades.")
let testInpt = Number(readlineSync.question(""))
testInpt += Number(readlineSync.question(""))
testInpt += Number(readlineSync.question(""))
testInpt /= 3;
hwInpt *= hwWt;
quizInpt *= quizWt;
testInpt *= testWt;
let grade = hwInpt + quizInpt + testInpt
grade = grade.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
console.log("\nYour marking period grade is " + grade + "%.")
