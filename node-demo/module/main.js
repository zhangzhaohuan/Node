'use strict';

const hello = require('./hello');

var s = 'Michael';

hello.hi(s);
hello.greet(s);
hello.goodbye(s);
console.log(hello.address)