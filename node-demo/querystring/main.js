/**
 * querystring
 * querystring.parse(str[, sep[, eq[, options]]])
 * querystring.stringify(obj[, sep[, eq[, options]]])
 * querystring.escape(str)
 * querystring.unescape(str)
 */

//encodeURIComponent 转义除了字母、数字、(、)、.、!、~、*、'、-和_之外的所有字符。

const querystring = require('querystring');
querystring.parse('foo=bar&abc=xyz&abc=12%');
// =>{ foo: 'bar', abc: [ 'xyz', '123' ] }
querystring.parse('foo:bar&abc:xyz&abc:123','&',':');
// =>{ foo: 'bar', abc: [ 'xyz', '123' ] }
querystring.parse('foo:bar|abc:xyz|abc:123','|',':');
// =>{ foo: 'bar', abc: [ 'xyz', '123' ] }

querystring.parse('foo=4%25&baz=qux&baz=quux&corge=');
// => { foo: '4%', baz: [ 'qux', 'quux' ], corge: '' }
querystring.parse('foo=4%25&baz=qux&baz=quux&corge=',null,null,{decodeURIComponent:decodeURIComponent});
// => { foo: '4%', baz: [ 'qux', 'quux' ], corge: '' }


querystring.stringify({ foo: '4%', baz: ['qux', 'quux'], corge: '' });
// => 'foo=4%25&baz=qux&baz=quux&corge='
querystring.stringify({ foo: '4%', baz: ['qux', 'quux'], corge: '' },'|',':');
// => 'foo:4%25|baz:qux|baz:quux|corge:'
querystring.stringify({ foo: '4%', baz: ['qux', 'quux'], corge: '' },null,null,{encodeURIComponent:encodeURIComponent});
// => 'foo=4%25&baz=qux&baz=quux&corge='


querystring.escape("name=慕白");
// => 'name%3D%E6%85%95%E7%99%BD'

querystring.unescape('name%3D%E6%85%95%E7%99%BD');
// =>'name=慕白'