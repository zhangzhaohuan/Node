
/**
 * create by yinghui(张兆欢) in 2018/5/29
 */
require("babel-polyfill");

import axios from 'axios';
const WITH_CREDENTIALS = true;
const CONTENT_TYPE = 'Content-Type';
// const MULTIPART = 'multipart/form-data';
// const URLENCODED = 'application/x-www-form-urlencoded';
const JSON_CHARSET = 'application/json;charset=UTF-8';
const HEADEERS = { 'Accept': 'application/json', [CONTENT_TYPE]: JSON_CHARSET };

/**
 * 发起一个请求
 * @param {string} method HTTP method
 * @param {string} url 请求的目标 URL
 * @param {object} params 请求参数对象
 * @param {object} opts 请求选项
 */
async function request(method, url, params, opts) {
  opts = Object.assign({}, opts);
  const headers = Object.assign({}, HEADEERS, opts.headers);
  const withCredentials = opts.withCredentials || WITH_CREDENTIALS;
  let config = {
    "method": method,
    "url": url,
    "headers": headers,
    "withCredentials": withCredentials,
    "timeout": 16000,
  };
  switch (method) {
    case 'GET':
      config = Object.assign(config, { "params": params }); break;
    case 'POST': config = Object.assign(config, { "data": params }); break;
    case 'PUT': config = Object.assign(config, { "data": params }); break;
    case 'DELETE': config = Object.assign(config, { "data": params }); break;
    default: break;
  }
  axios.interceptors.request.use(function (config) {
    //在请求发出之前进行一些操作
    return config;
  }, function (err) {
    //Do something with request error
    return Promise.reject(err);
  });
  axios.interceptors.response.use((response) => {
    // Do something with response data
    return response;
  }, (err) => {
    const res = JSON.parse(JSON.stringify(err));
    return res.response;
  });
  return await axios(config);
}

/**
 * 发起一个 get 请求
 * @param {*} args 参数：url,param,opts
 */
function get(...args) {
  return request('GET', ...args);
}

/**
 * 发起一个 post 请求
 * @param {*} args 参数：url,param,opts
 */
function post(...args) {
  return request('POST', ...args);
}

/**
 * 发起一个 put 请求
 * @param {*} args 参数：url,param,opts
 */
function put(...args) {
  return request('PUT', ...args);
}

/**
 * 发起一个 delete 请求
 * @param {*} args 参数：url,param,opts
 */
function deletes(...args) {
  return request('DELETE', ...args);
}

async function queryIsContractAddress(params) {
  var url = 'https://mainnet.infura.io/mainnet/v3/06f4ff56379b4a698633ee05f5ff138e';
  var rs = await post(url, params);
  return rs || {};
}

async function a () {

  var res = await queryIsContractAddress({
    jsonrpc: '2.0',
    method: 'eth_getCode',
    params: ['0x517ff5b16c6059a5d9957420ccd05d7c8cabd9fb', 'latest'],
    id: 1
  })
  console.log(res);
}

a();
