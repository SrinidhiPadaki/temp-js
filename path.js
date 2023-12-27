const { log } = require("console");
const path = require("path");

console.log(path.sep);

const filepath = path.join('content','sub','text.txt')
console.log(filepath)
//console.log(path.basename(filepath));