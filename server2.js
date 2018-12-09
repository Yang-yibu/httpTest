
const http = require('http')

http.createServer(function (req, res) {
  console.log('request come: ', req.url);

  res.writeHead(200, {
    // 'Access-Control-Allow-Origin': '*'
    'Access-Control-Allow-Origin': 'http://127.0.0.1:8887'
  })

  res.end('{"data": 123}');
}).listen(8887)
console.log('server running: 8887');