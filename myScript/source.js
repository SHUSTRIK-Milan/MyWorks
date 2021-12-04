const fs = require('fs')

const functions = [
	['console.log', 'вывод'],
    ['function', 'функция'],
    ['return', 'вернуть']
]

function toJs(code){
    for (i = 0; i < functions.length; i++) {
        code = code.replace(new RegExp(functions[i][1], 'g'), functions[i][0]);
    }
    return code
}

function toMs(code){
    for (i = 0; i < functions.length; i++) {
        code = code.replace(new RegExp(functions[i][0], 'g'), functions[i][1]);
    }
    return code
}

fs.readFile('code.txt', (err, data) => {
    if (err) throw err
    eval(toJs(data.toString()))
})

module.exports.toJs = toJs
module.exports.toMs = toMs
