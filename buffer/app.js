/* Deprecated due to security and usability issues.
var buf = new Buffer('Hello', 'utf8');
console.log(buf);
*/

var buf = new Buffer.from('Hello', 'utf8');
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);

buf.write('wo');
console.log(buf.toString());
