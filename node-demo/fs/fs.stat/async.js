'use strict';

const fs = require('fs');

fs.stat('sample.txt', function (err, stat) {
  if (err) {
    console.log(err);
  } else {
    // stats.isBlockDevice()
    // stats.isCharacterDevice()
    // stats.isDirectory()
    // stats.isFIFO()
    // stats.isFile()
    // stats.isSocket()
    // stats.isSymbolicLink()
    console.log('isFile: ' + stat.isFile());
    console.log('isDirectory: ' + stat.isDirectory());
    if (stat.isFile()) {
      console.log('size: ' + stat.size);
      console.log('birth time: ' + stat.birthtime);
      console.log('modified time: ' + stat.mtime);
      // Stats {
      //   dev: 16777220,
      //   mode: 33261,
      //   nlink: 1,
      //   uid: 501,
      //   gid: 20,
      //   rdev: 0,
      //   blksize: 4194304,
      //   ino: 12901503,
      //   size: 181,
      //   blocks: 8,
      //   atimeMs: 1541143194948.982,
      //   mtimeMs: 1541143193903.0452,
      //   ctimeMs: 1541143193903.0452,
      //   birthtimeMs: 1541143190898.2927,
      //   atime: 2018-11-02T07:19:54.949Z,
      //   mtime: 2018-11-02T07:19:53.903Z,
      //   ctime: 2018-11-02T07:19:53.903Z,
      //   birthtime: 2018-11-02T07:19:50.898Z }  
    }
  }
});
