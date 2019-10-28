const readlineSync = require("readline-sync")

const width = readlineSync.question(\n"Width: ")
const length = readlineSync.question("Length: ")
let dia = Math.hypot(length, width);
dia = dia.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
console.log("A(n) "+ width + "-by-" + length + "-inch sheet of paper has a diagonal of " + dia + " inch(es)")
