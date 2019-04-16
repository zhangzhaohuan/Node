/**
 * require命令是CommonJS规范之中，用来加载其他模块的命令。
 * 它其实不是一个全局命令，而是指向当前模块的module.require命令，而后者又调用Node的内部命令Module._load。
 */


Module._load = function(request, parent, isMain) {
  // 1. 检查 Module._cache，是否缓存之中有指定模块
  // 2. 如果缓存之中没有，就创建一个新的Module实例
  // 3. 将它保存到缓存
  // 4. 使用 module.load() 加载指定的模块文件，
  //    读取文件内容之后，使用 module.compile() 执行文件代码
  // 5. 如果加载/解析过程报错，就从缓存删除该模块
  // 6. 返回该模块的 module.exports
};



// 上面的第4步，采用module.compile()执行指定模块的脚本，逻辑如下。
Module.prototype._compile = function(content, filename) {
  // 1. 生成一个require函数，指向module.require
  // 2. 加载其他辅助方法到require
  // 3. 将文件内容放到一个函数之中，该函数可调用 require
  // 4. 执行该函数
};


// 上面的第1步和第2步，require函数及其辅助方法主要如下。
// require(): 加载外部模块
// require.resolve()：将模块名解析到一个绝对路径
// require.main：指向主模块
// require.cache：指向所有缓存的模块
// require.extensions：根据文件的后缀名，调用不同的执行函数


// 一旦require函数准备完毕，整个所要加载的脚本内容，就被放到一个新的函数之中，这样可以避免污染全局环境。该函数的参数包括require、module、exports，以及其他一些参数。
(function (exports, require, module, __filename, __dirname) {
  // YOUR CODE INJECTED HERE!
});