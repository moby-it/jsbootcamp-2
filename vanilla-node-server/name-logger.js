const http = require('node:http');
const fs = require('node:fs');

const server = http.createServer((req, res) => {
  if (req.url.includes('favicon')) {
    return res.end();
  }
  const queryParams = extractQueryParams(req.url);
  const name = queryParams['name'];
  let names = [];
  if (fs.existsSync('names.txt')) {
    const file = fs.readFileSync('names.txt', 'utf-8');
    names = file.split('\n');
  }
  if (names.includes(name)) {
    res.writeHead(409);
    res.write('name already exists');
    return res.end();
  } else {
    fs.appendFileSync('names.txt', `${name}\n`, (err) => {
      if (err) {
        throw err;
      }
    });
    res.write('name added successfully');
    res.end();
  }
});

server.listen(3000, "localhost", () => {
  console.log('started listening for requests on localhost:3000');
});

function extractQueryParams(url) {
  const q = url.split('?');
  const s = q[1].split('&');
  const queryParams = {};
  for (const v of s) {
    const splitKey = v.split('=');
    const key = splitKey[0];
    const value = splitKey[1];
    queryParams[key] = value;
  }
  return queryParams;
}