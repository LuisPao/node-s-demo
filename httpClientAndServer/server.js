const http = require('http');

const server = http.createServer(function(req, res) {
  // console.log(111);
  console.log(Object.keys(req));
  console.log(Object.keys(res));
  res.end('paopao');
});
server.listen(3000, function(){
  console.log('CONNET success');
});