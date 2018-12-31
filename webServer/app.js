var http = require('http');
var fs = require('fs');

http .createServer(function(req, res) {

  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(`${__dirname}/index.htm`).pipe(res);
  }
  else if (req.url === '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var obj =  {
      firstName: 'John',
      lastName: 'Doe'
    };
    res.end(JSON.stringify(obj));
  }
  else {
    res.writeHead(404);
    res.end('Error 404: The page you requested does not exist.');
  }

}).listen(1337, '127.0.0.1');