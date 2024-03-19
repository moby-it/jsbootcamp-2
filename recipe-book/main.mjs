import * as http from "node:http";
import * as path from "node:path";
import * as fs from 'node:fs';

const PORT = 8000;

const STATIC_PATH = path.join(process.cwd(), "./static");

http.createServer(async (req, res) => {
  if (req.url.includes('/api')) {
    res.write('I an not the index html file');
    res.end();
  } else {
    const path = req.url === '/' ? '/index.html' : req.url;
    const file = await fs.promises.readFile(`${STATIC_PATH}${path}`);
    res.write(file);
    res.end();
  }
}).listen(PORT);