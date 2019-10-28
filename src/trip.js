const readlineSync = require("readline-sync")

const stu = Number(readlineSync.question("\nStudents: "))
const teach = Number(readlineSync.question("Teachers: "))
const capacity = Number(readlineSync.question("Bus capacity: "))

let passengers = stu + teach;
let buses = passengers / capacity;
buses = Math.ceil(buses)
let leftOver = passengers % capacity;
console.log(buses + "\n bus(es) is (are) needed, with " + leftOver + " on the last bus.")
