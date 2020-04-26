const fs = require('fs');

let box  = fs.readFileSync(process.argv[2])
let eachLine = box.toString().split('\n').length - 1
console.log(eachLine);