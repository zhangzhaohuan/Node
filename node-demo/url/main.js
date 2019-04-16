/**
 * url
 * url.parse(urlString[, parseQueryString[, slashesDenoteHost]])
 * url.format(urlObject)
 * url.resolve(from,to)
 */
const url = require('url');
console.log(url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash'),false);

url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');
// => 
//  {
//   protocol: 'https:',
//   slashes: true,
//   auth: 'user:pass',
//   host: 'sub.host.com:8080',
//   port: '8080',
//   hostname: 'sub.host.com',
//   hash: '#hash',
//   search: '?query=string',
//   query: 'query=string',
//   pathname: '/p/a/t/h',
//   path: '/p/a/t/h?query=string',
//   href: 'https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash' }

url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash',true);
// => 
//  {
//   protocol: 'https:',
//   slashes: true,
//   auth: 'user:pass',
//   host: 'sub.host.com:8080',
//   port: '8080',
//   hostname: 'sub.host.com',
//   hash: '#hash',
//   search: '?query=string',
//   query: { query: 'string' },
//   pathname: '/p/a/t/h',
//   path: '/p/a/t/h?query=string',
//   href: 'https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash' }

url.format({
  protocol: 'https',
  hostname: 'example.com',
  pathname: '/some/path',
  query: {
    page: 1,
    format: 'json'
  }
});
// => 'https://example.com/some/path?page=1&format=json'


url.format({
  protocol: 'https',
  hostname: 'example.com',
  pathname: '/some/path',
  query:'page=1&format=json'
});
// => 'https://example.com/some/path'

url.format({
  protocol: 'https',
  hostname: 'example.com',
  pathname: '/some/path',
  query:'page=1&format=json'
},false);
// => 'https://example.com/some/path'


url.format({
  protocol: 'https',
  hostname: 'example.com',
  pathname: '/some/path',
  query:'page=1&format=json'
},true);
// => 'https://example.com/some/path'


url.resolve('/one/two/three', 'four');         // '/one/two/four'
url.resolve('http://example.com/', '/one');    // 'http://example.com/one'
url.resolve('http://example.com/one', '/two'); // 'http://example.com/two'

