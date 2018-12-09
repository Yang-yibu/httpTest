
const http = require('http')

http.createServer(function (req, res) {
  console.log('request come: ', req.url);

  res.writeHead(200, {
    // 'Access-Control-Allow-Origin': '*'
    // 发起请求的域名
    // 'Access-Control-Allow-Origin': 'http://127.0.0.1:8888'
    'Content-Type': 'application/JSON'
  })

  // res.end('{"data": 123}');
  let resData = {
    data: { key: 123 },
    errno: 0
  }
  res.end('callbackFun('+ JSON.stringify(resData) +')')
}).listen(8887)
console.log('server running: 8887');