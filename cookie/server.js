const http = require('http')
const fs = require('fs')

http.createServer(function (req, res) {
  console.log('request come: ', req.url);

  if (req.url === '/') {
    const html = fs.readFileSync('test.html', 'utf8');
    res.writeHead(200, {
      'Content-Type': 'text/html',
      // 'Set-Cookie': 'id=123&abc=456'
      // 有效时间 5s；过期后会自动删除
      'Set-Cookie': ['id=123; max-age=5', 'abc=456; HttpOnly']
    })
    res.end(html);
  }

}).listen(8888)
console.log('server running: 8888');