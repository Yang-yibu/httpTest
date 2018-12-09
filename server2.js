
const http = require('http')

http.createServer(function (req, res) {
  console.log('request come: ', req.url);

  res.writeHead(200, {
    // 'Access-Control-Allow-Origin': '*'
    // 发起请求的域名
    // 允许多域：通过 req.host 等动态判断
    'Access-Control-Allow-Origin': 'http://127.0.0.1:8888'
  })

  res.end('{"data": 123}');
  // let resData = {
  //   data: { key: 123 },
  //   errno: 0
  // }
  // res.end('callbackFun('+ JSON.stringify(resData) +')')
}).listen(8887)
console.log('server running: 8887');