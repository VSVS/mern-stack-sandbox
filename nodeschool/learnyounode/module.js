var fs = require('fs')
var path = require('path')
var myModules = require('./modules.js')

myModules(process.argv[2], process.argv[3], function(err, files){
  if(err) throw err;
  else {
      console.log(files.join('\n'));
  }
});
