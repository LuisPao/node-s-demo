const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
    const url = req.url;
    if (url === '/') {
      fs.readFile('./index.html', function(err, data){
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        res.end(data);
      });
    }
}).listen(5001);