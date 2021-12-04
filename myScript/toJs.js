const fs = require('fs')
const lib = require('./source.js')

fs.readFile('code.txt', (err, data) => {
    if (err) throw err
    console.log(lib.toJs(data.toString()))
})