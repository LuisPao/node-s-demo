const http = require('http');
const path = require('path');
const fs = require('fs');

http.createServer((req, res) => {
  const url = req.url;
  const pSegment = url.split('/');
  if (pSegment[1] && pSegment[1] === 'public') {
    const ext = path.extname(url);
    switch (ext) {
      case '.css':
        res.setHeader('Content-Type', 'text/css')
        break;
      case '.js':
        res.setHeader('Content-Type', 'application/javascript');
        break;
      default:
        break;
    }
    fs.readFile(path.join(__dirname, url), (err, data) => {
      if (err) {
        console.log(err);
      }
      res.end(data);
    });
  }
}).listen(2325);