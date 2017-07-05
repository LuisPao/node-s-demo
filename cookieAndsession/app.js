'use strict';
const http = require('http');
const utils = require('./utils');
const fs = require('fs');
const path = require('path');

const cb = (req, res) => {
  const url = req.url;
  // console.log(url);
  // const pSegment = url.split('/');
  // if (pSegment[1] && pSegment[1] === 'public') {
  //   const ext = path.extname(url);
  //   switch (ext) {
  //     case '.css':
  //       res.setHeader('Content-Type', 'text/css')
  //       break;
  //     case '.js':
  //       res.setHeader('Content-Type', 'application/javascript');
  //       break;
  //     default:
  //       break;
  //   }
  //   fs.readFile(path.join(__dirname, url), (err, data) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //     res.end(data);
  //   });
  // }
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    // const cookie = req.headers.cookie;
    res.setHeader('Set-Cookie', 'name=pao');
    fs.readFile('./view/home/home.html', (err, data) => {
      if (err) {
        console.log(err);
      }
      res.end(data);
    });
  }
  
  
}

http.createServer(cb).listen(5000);



