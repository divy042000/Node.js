// code to read a file in the node js

const fs = require('fs');

try {
  const data = fs.readFileSync('./content/subfolder/test.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}

// code to write content in the text file
const wfs = require('fs');

const content = 'Hey Divy You are a newbie';

try {
  wfs.writeFileSync('./content/subfolder/test.txt', content,{flag:'a'});
  // file written successfully
} catch (err) {
  console.error(err);
}


