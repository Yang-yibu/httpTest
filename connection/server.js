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
  } else {
    const img = fs.readFileSync('test.jpg');
    res.writeHead(200, {
      'Content-Type': 'image/jpg'
    })
    res.end(img);
  }

}).listen(8888)
console.log('server running: 8888');