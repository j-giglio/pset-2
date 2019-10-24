const readlineSync = require("readline-sync")

const factor = 25.4;
const width = readlineSync.question("Width: ")
const length = readlineSync.question("Length: ")
const mmWidth = width * factor;
const mmLength = length * factor;
let area = mmWidth * mmLength;
area = area.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
console.log("A(n) "+ width + "-by-" + length + "-inch sheet of paper has an area of " + area + " square millimeter(s)")
