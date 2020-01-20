const http = require('http');
const fs = require('fs');
const path = require('path');

const { PORT = 8080 } = process.env;

const STATIC_DIR = 'prod';

const readFile = fs.readFileSync;

const contentTypeHeaders = new Map([
  ['html', 'text/html'],
  ['css', 'text/css'],
  ['js', 'application/javascript'],
]);

const getContentTypeHeader = contentType => [
  'Content-Type',
  contentTypeHeaders.get(contentType),
];

const server = http.createServer((req, res) => {
  const { url } = req;
  let file;

  try {
    if (url === '/') {
      file = readFile(path.resolve(__dirname, STATIC_DIR, 'index.html'));
      res.setHeader(...getContentTypeHeader('html'));
    } else {
      const ext = (url.match(/(?!=\.)\w+$/) || [])[0];
      if (contentTypeHeaders.has(ext)) {
        file = readFile(path.resolve(__dirname, STATIC_DIR, req.url.slice(1)));
        res.setHeader(...getContentTypeHeader(ext));
      }
    }

    res.end(file);
  } catch (err) {
    res.end(err.toString());
  }
});

server.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
