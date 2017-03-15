var fs = require('fs')
var path = require('path')
var myModules = require('./modules.js')

function filterFiles(){

  var filePath = process.argv[2]
  var fileType = process.argv[3]

  fs.readdir(filePath, function(err, files){
    if(err) throw err;
    else{

      files.forEach(function(file){
        if(path.extname(file) === '.' + fileType){
          console.log(file)
        }
      })
    }
  });
}

myModules();
