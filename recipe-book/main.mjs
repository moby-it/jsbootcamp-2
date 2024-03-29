import * as http from "node:http";
import * as path from "node:path";
import * as fs from 'node:fs';
import { appendMimeType } from "./mime-type.mjs";

const PORT = 8000;

const STATIC_PATH = path.join(process.cwd(), "./static");

http.createServer(async (req, res) => {
  if (req.url.includes('/api')) {
    res.write('I am not the index html file');
    res.end();
  } else {
    let path = req.url === '/' ? '/index.html' : req.url.toLowerCase();
    if (!path.includes('.')) {
      path += '.html';
    }
    const file = await fs.promises.readFile(`${STATIC_PATH}${path}`);
    appendMimeType(path, res);
    res.write(file);
    res.end();
  }
}).listen(PORT, () => {
  console.log('Listening on port', PORT)
});