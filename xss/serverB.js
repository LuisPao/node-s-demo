const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
    const url = req.url;
    if (url === '/xss.js') {
      fs.readFile('./xss.js', function(err, data){
        res.setHeader('Content-Type', 'application/x-javascript');
        res.end(data);
      });
    }
}).listen(5000);