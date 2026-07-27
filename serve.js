const http = require('http');
const fs = require('fs');
const path = require('path');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp'
};

const server = http.createServer((req, res) => {
  let filePath = path.join('/home/user/webapp', req.url === '/' ? 'index.html' : req.url);
  const ext = path.extname(filePath);
  const ct = MIME[ext] || 'text/plain';
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Serve index.html for SPA
      fs.readFile('/home/user/webapp/index.html', (e2, d2) => {
        if (e2) { res.writeHead(404); res.end('Not found'); return; }
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(d2);
      });
      return;
    }
    res.writeHead(200, { 'Content-Type': ct });
    res.end(data);
  });
});

server.listen(3000, '0.0.0.0', () => console.log('Server running on port 3000'));
