var fs = require('fs')
var path = require('path')

module.exports = function(filePath, fileType, callback){

    fs.readdir(filePath, function(err, files){
      if(err) {
        return callback(err);
      } else{
        var filteredList = [];
        files.forEach(function(file){
          if(path.extname(file) === '.' + fileType){
            filteredList.push(file);

          }
        })
      }
      return callback(null, filteredList);

    });
}
