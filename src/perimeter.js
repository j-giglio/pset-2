const readlineSync = require("readline-sync")

const factor = 2.54;
const width = readlineSync.question("Width: ")
const length = readlineSync.question("Length: ")
let cmWidth = width * factor;
cmWidth = cmWidth * 2;
let cmLength = length * factor;
cmLength = cmLength * 2;
let peri = cmWidth + cmLength;
peri = peri.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
console.log("A(n) "+ width + "-by-" + length + "-inch sheet of paper has a perimeter of " + peri + " centimeter(s)")
