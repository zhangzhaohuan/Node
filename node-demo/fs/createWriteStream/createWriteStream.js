'use strict';

const fs = require('fs');

/**
 * fs.createWriteStream(path[,options])
 * @param path <string> | <Buffer> | <URL>
 * @param options <string> | <Object> 
 *    *flags <string> 详见支持的文件系统flag。默认为 'r'。
      *encoding <string> 默认为 null。
      *fd <integer> 默认为 null。
      *mode <integer> 默认为 0o666。
      *autoClose <boolean> 默认为 true。
      *start <integer> 
 * @return 新的 fs.WriteStream 对象
 */
var writeStream = fs.createWriteStream('sample.txt');

writeStream.on('finish', function(){
  console.log('finish');
});
writeStream.on("close",(data)=>{
  console.log('close')
})
writeStream.on('error', function(err){
  console.log('write error - %s', err.message);
});

writeStream.write('My name is 火云邪神');
writeStream.end('end');