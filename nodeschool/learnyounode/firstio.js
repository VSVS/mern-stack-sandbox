var fs = require('fs');

var fileName = process.argv[2];

var file = fs.readFileSync(fileName);

var str = file.toString();

var splitLines = str.split('\n');

var totalLines = splitLines.length - 1;


console.log(totalLines);
