const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  console.log('----------' + new Date() + '----------');
  console.log('come:', req.url);
  if (req.url === '/') {
    res.writeHead(301, {
      Location: '/new'
    })
    res.end('xix');
  }

  if (req.url === '/new') {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.end('<div>this is content </div>')
  }

}).listen('8888')
console.log('running: ', 8888);