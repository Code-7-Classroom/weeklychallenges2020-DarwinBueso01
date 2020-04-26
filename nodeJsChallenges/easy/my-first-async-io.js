const fs = require('fs')
const module = process.argv[2]

fs.readFile(module, function (error, container) {
  if (error) {
    return console.log(error)
  }

  const eachLine = container.toString().split('\n').length - 1
  console.log(eachLine)
})

