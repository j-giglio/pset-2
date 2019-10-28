const readlineSync = require("readline-sync")

const pretax = .07;
const fed = .157;
const state = .0447;
const soc = .062;
const medi = .0145;
const tax = fed + state + soc + medi;
let check = Number(readlineSync.question("\nAnnual salary: "))
const pretaxPayment = pretax * check;
check -= pretaxPayment;
const taxPayment = tax * check;
check -= taxPayment;
check /= 24;
check = check.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
console.log("\nYour take-home pay each check will be $" + check + ".")
