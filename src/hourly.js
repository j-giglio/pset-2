const readlineSync = require("readline-sync")

const wage = Number(readlineSync.question("Hourly wage: "))
const mon = Number(readlineSync.question("\nMonday: "))
const tues = Number(readlineSync.question("Tuesday: "))
const wed = Number(readlineSync.question("Wednesday: "))
const thurs = Number(readlineSync.question("Thursday: "))
const fri = Number(readlineSync.question("Friday: "))
const sat = Number(readlineSync.question("Saturday: "))
const sun = Number(readlineSync.question("Sunday: "))

let total = mon + tues + wed + thurs + fri + sat + sun;
total *= wage;
total = total.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
console.log("\nYou'll make $" + total + " this week.")
