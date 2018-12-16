const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  console.log('req come: ', req.url);

  const html = fs.readFileSync('test.html', 'utf8');

  res.writeHead(200, {
    'Content-Type': 'text/html',
    // 指定允许的内容
    'Content-Security-Policy': 'default-src \'self\'; report-uri /report',
    // 'Content-Security-Policy-Report-Only': 'policy'
  });
  res.end(html);
}).listen(8888)
console.log('server running: 8888');