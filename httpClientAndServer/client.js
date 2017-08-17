const http = require('http');
const opt = {
  hostname: '127.0.0.1',
  port: 3000,
  method: 'GET'
}
const req = http.request(opt, function(res){
  // console.log(Object.keys(res));
  console.log(Object.keys(res.req));
  res.on('data', function(chunk){
    console.log(chunk.toString());
  })
});
req.end('world');