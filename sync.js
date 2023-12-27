const { fstat, readFileSync, writeFileSync } = require("fs");

console.log('Start');
const First = readFileSync('./content/sub/first.txt')
const Second = readFileSync('./content/sub/second.txt')

writeFileSync(
    './content/result.txt',
    `Here is the result ${First},${Second}`
)
console.log("Done with this task");


// console.log('start')
// const first = readFileSync('./content/sub/first.txt', 'utf8')
// const second = readFileSync('./content/sub/second.txt', 'utf8')

// writeFileSync(
//   './content/result-sync.txt',
//   `Here is the result : ${first}, ${second}`,
//   { flag: 'a' }
// )
// console.log('done with this task')
// console.log('starting the next one')