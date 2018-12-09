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
    if (req.headers['if-none-match'] === '777') {
      res.writeHeader(304, {
        // 304 没有变化。从本地读取缓存
        'Content-Type': 'text/javascript',
        // 当 max-age 设置过小时，可能资源可能不缓存
        'Cache-Control': 'max-age=2000000, no-stroe',
        'Last-Modified': '123',
        'Etag': '777'
      })
      res.end('123');
    } else {
      res.writeHeader(200, {
        'Content-Type': 'text/javascript',
        // 当 max-age 设置过小时，可能资源可能不缓存
        'Cache-Control': 'max-age=2000000, no-store',
        'Last-Modified': '123',
        'Etag': '777'
      })
      res.end(js);
    }
  }

}).listen(8888)
console.log('server running: 8888');