// To get the path of the file


const { constants } = require('buffer')
const path=require('path')
console.log(path.sep)
const filepath=path.join('/content/','subfolder','test.txt')
console.log(filepath)
const base=path.basename(filepath) // file in which there is a data
console.log(base)
const absolute=path.resolve(__dirname,'content','subfolder','test.txt'); // full path file
console.log(absolute);