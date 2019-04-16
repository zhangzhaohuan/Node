/**
 * a.js加载了b.js，而b.js又加载a.js。这时，Node返回a.js的不完整版本，
 */
console.log('main.js ', require('./a.js').x);
console.log('main.js ', require('./b.js').x);
