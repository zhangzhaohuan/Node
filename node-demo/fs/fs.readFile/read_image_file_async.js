/**
 * fs.readFile() 函数会缓存整个文件。 为了最小化内存占用，尽可能优先使用 fs.createReadStream()
 */
'use strict';

const fs = require('fs');

console.log('>>> BEGIN >>>')

fs.readFile('sample.png', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data); //buffer
    console.log(data.length + ' bytes');
  }
});

fs.readFile('sample.png', 'utf-8', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    // console.log(data);//utf-8
    console.log(data.length + ' bytes');
  }
});



console.log('>>> END >>>')
