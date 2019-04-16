'use strict';

const fs = require('fs');

let stat = fs.statSync('sample.txt');
console.log(stat);

