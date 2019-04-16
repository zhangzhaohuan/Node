/**
 * require.cache：指向所有缓存的模块
 */
// 删除指定模块的缓存
// delete require.cache[moduleName];

// 删除所有模块的缓存
// Object.keys(require.cache).forEach(function(key) {
//   delete require.cache[key];
// })