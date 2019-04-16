'use strict';

const fs = require('fs');

/**
 * fs.createReadStream(path[,options])
 * @param path <string> | <Buffer> | <URL>
 * @param options <string> | <Object> 
 *    *flags <string> 详见支持的文件系统flag。默认为 'r'。
      *encoding <string> 默认为 null。
      *fd <integer> 默认为 null。
      *mode <integer> 默认为 0o666。
      *autoClose <boolean> 默认为 true。
      *start <integer>
      *end <integer> 默认为 Infinity。
      *highWaterMark <integer> 默认为 64 * 1024。  
 * @return 新的 fs.ReadStream 对象
 */
var readStream = fs.createReadStream('sample.txt', { start: 90, end: 99 });

readStream.on('open', function (data) {
  console.log('打开了', data)
});
readStream.on("data",(data)=>{
  console.log("数据来了！");
  console.log("已经读取的字节数",readStream.bytesRead);
})
readStream.on("end",(data)=>{
  console.log('没有数据了')
})
readStream.on("close",(data)=>{
  console.log('关闭了')
})