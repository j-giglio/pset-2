const length = 48;
const width = 24;
const diameter = 6
let radius = diameter / 2;
let areaRect = length * width;
let areaCirc = radius ** 2
areaCirc *= 3.14;
areaRect -= areaCirc
console.log("\nThe surface area of a standard Cornhole board is " + areaRect + "square inch(es)")
