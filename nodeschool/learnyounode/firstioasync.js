var fs = require('fs')

function countLines(){
  fs.readFile(process.argv[2], 'utf8', function doneReading(err, fileContents){
    if(err){
      throw err;
    } else {
      var splitLines = fileContents.split('\n').length - 1;
      console.log(splitLines);
    }
  })
};

countLines();
