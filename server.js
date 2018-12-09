

const http = require('http')
const fs = require('fs')

http.createServer(function (req, res) {
  console.log('request come: ', req.url);

  if (req.url === '/') {
    const html = fs.readFileSync('test.html', 'utf8');
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    res.end(html);
  }
  if (req.url === '/script.js') {
    const js = fs.readFileSync('script.js', 'utf8');
    res.writeHeader(200, {
      'Content-Type': 'text/javascript',
      // 当 max-age 设置过小时，可能资源可能不缓存
      'Cache-Control': 'max-age=200'
    })
    res.end(js)
  }

}).listen(8888)
console.log('server running: 8888');