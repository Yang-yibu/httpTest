const http = require('http')
const fs = require('fs')

const wait = (seconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, seconds * 1000);
  })
}

http.createServer(function (req, res) {
  console.log('request come: ', req.url);
  console.log('request come host:', req.headers.host);

  if (req.url === '/') {
    const html = fs.readFileSync('test.html', 'utf8');

    res.writeHead(200, {
      'Content-Type': 'text/html',
    })
    res.end(html);
  }

  if (req.url === '/data') {
    // provite 只有浏览器缓存； no-store 都不缓存
    // Vary 指定发送请求，vary 指定的值相等时才使用缓存；如 X-Test-Cache=1，第二次请求时 使用缓存
    res.writeHead(200, {
      'Cache-Control': 's-maxage=200',
      'Vary': 'X-Test-Cache'
    })

    wait(2).then(() => {
      res.end('success ha')
    })
  }

}).listen(8888)
console.log('server running: 8888');