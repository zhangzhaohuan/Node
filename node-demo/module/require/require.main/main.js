require('./a.js');
console.log('模块是直接执行'+(require.main===module));//可以用来判断模块是直接执行，还是被调用执行
console.log(module);
