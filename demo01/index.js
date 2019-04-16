'use strict';
require("babel-polyfill");

/**
 * 发起一个请求
 * @param {string} method HTTP method
 * @param {string} url 请求的目标 URL
 * @param {object} params 请求参数对象
 * @param {object} opts 请求选项
 */
var request = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(method, url, params, opts) {
    var headers, withCredentials, config;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            opts = Object.assign({}, opts);
            headers = Object.assign({}, HEADEERS, opts.headers);
            withCredentials = opts.withCredentials || WITH_CREDENTIALS;
            config = {
              "method": method,
              "url": url,
              "headers": headers,
              "withCredentials": withCredentials,
              "timeout": 16000
            };
            _context.t0 = method;
            _context.next = _context.t0 === 'GET' ? 7 : _context.t0 === 'POST' ? 9 : _context.t0 === 'PUT' ? 11 : _context.t0 === 'DELETE' ? 13 : 15;
            break;

          case 7:
            config = Object.assign(config, { "params": params });return _context.abrupt('break', 16);

          case 9:
            config = Object.assign(config, { "data": params });return _context.abrupt('break', 16);

          case 11:
            config = Object.assign(config, { "data": params });return _context.abrupt('break', 16);

          case 13:
            config = Object.assign(config, { "data": params });return _context.abrupt('break', 16);

          case 15:
            return _context.abrupt('break', 16);

          case 16:
            _axios2.default.interceptors.request.use(function (config) {
              //在请求发出之前进行一些操作
              return config;
            }, function (err) {
              //Do something with request error
              return Promise.reject(err);
            });
            _axios2.default.interceptors.response.use(function (response) {
              // Do something with response data
              return response;
            }, function (err) {

              var res = err;
              return res;
            });
            _context.next = 20;
            return (0, _axios2.default)(config);

          case 20:
            return _context.abrupt('return', _context.sent);

          case 21:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function request(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * 发起一个 get 请求
 * @param {*} args 参数：url,param,opts
 */


var queryIsContractAddress = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(params) {
    var url, rs;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = 'https://mainnet.infura.io/mainnet/v3/06f4ff56379b4a698633ee05f5ff138e';
            _context2.next = 3;
            return post(url, params);

          case 3:
            rs = _context2.sent;
            return _context2.abrupt('return', rs || {});

          case 5:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function queryIsContractAddress(_x5) {
    return _ref2.apply(this, arguments);
  };
}();

var a = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var res;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return queryIsContractAddress({
              jsonrpc: '2.0',
              method: 'eth_getCode',
              params: ['0x517ff5b16c6059a5d9957420ccd05d7c8cabd9fb', 'latest'],
              id: 1
            });

          case 2:
            res = _context3.sent;

            console.log(res.data);

          case 4:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function a() {
    return _ref3.apply(this, arguments);
  };
}();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * create by yinghui(张兆欢) in 2018/5/29
 */

var WITH_CREDENTIALS = true;
var CONTENT_TYPE = 'Content-Type';
// const MULTIPART = 'multipart/form-data';
// const URLENCODED = 'application/x-www-form-urlencoded';
var JSON_CHARSET = 'application/json;charset=UTF-8';
var HEADEERS = _defineProperty({ 'Accept': 'application/json' }, CONTENT_TYPE, JSON_CHARSET);function get() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return request.apply(undefined, ['GET'].concat(args));
}

/**
 * 发起一个 post 请求
 * @param {*} args 参数：url,param,opts
 */
function post() {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return request.apply(undefined, ['POST'].concat(args));
}

/**
 * 发起一个 put 请求
 * @param {*} args 参数：url,param,opts
 */
function put() {
  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  return request.apply(undefined, ['PUT'].concat(args));
}

/**
 * 发起一个 delete 请求
 * @param {*} args 参数：url,param,opts
 */
function deletes() {
  for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    args[_key4] = arguments[_key4];
  }

  return request.apply(undefined, ['DELETE'].concat(args));
}

a();