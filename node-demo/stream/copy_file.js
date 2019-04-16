'use strict';

// read binary data from 'sample.txt'

const fs = require('fs');

var rs = fs.createReadStream('sample.txt');
rs.on('open', function (data) {
  console.log('打开了', data)
});
rs.on("data",(data)=>{
  console.log("数据来了！");
  console.log("已经读取的字节数",rs.bytesRead);
})
rs.on("end",(data)=>{
  console.log('rs 没有数据了')
})
rs.on("close",(data)=>{
  console.log('rs close')
})
var ws = fs.createWriteStream('copied.txt');
ws.on('pipe', (data) => {
  console.error('有数据正通过管道流入写入器');
});

ws.on('finish', function(data){
  console.log('ws finish');
});
ws.on("close",(data)=>{
  console.log('ws close')
})
ws.on('error', function(err){
  console.log('write error - %s', err.message);
});
rs.pipe(ws);
