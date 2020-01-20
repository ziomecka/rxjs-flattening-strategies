const http = require('http');
const fs = require('fs');
const path = require('path');

const { PORT = 8000 } = process.env;

const STATIC_DIR = 'prod';

const readFile = fs.readFileSync;

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/': {
      res.setHeader('Content-Type', 'text/html');
      res.end(readFile(path.resolve(__dirname, STATIC_DIR, 'index.html')));
      break;
    }
    default: {
      const file = readFile(
        path.resolve(__dirname, STATIC_DIR, req.url.slice(1)),
      );
      res.end(file);
      break;
    }
  }
});

server.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
