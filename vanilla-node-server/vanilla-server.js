const http = require('http');

let counter = 0;
let numberOfRequests = 1;

const server = http.createServer((req, res) => {
  if (req.url.includes('favicon')) {
    return res.end();
  }
  counter++;
  console.log('Request Nummber:', numberOfRequests);
  numberOfRequests++;
  res.writeHead(200, 'success');
  res.write(counter.toString());
  res.end();
});

server.listen(3000, "localhost", () => {
  console.log('started listening for requests on localhost:3000');
});