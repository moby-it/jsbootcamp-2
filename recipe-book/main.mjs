import * as fs from 'node:fs';
import * as http from "node:http";
import * as path from "node:path";
import { appendMimeType } from "./mime-type.mjs";

const PORT = 8000;

const STATIC_PATH = path.join(process.cwd(), "./static");

http.createServer(async (req, res) => {
  const params = new URLSearchParams(req.url.split('?')[1]);
  console.log(params);
  if (req.url.includes('/api')) {
    res.write('I am not the index html file');
    res.end();
  } else {
    let filePath = req.url === '/' ? '/index.html' : req.url.toLowerCase();
    if (!filePath.includes('.')) {
      filePath += '.html';
    }
    filePath = path.join(STATIC_PATH, filePath);
    if (fs.existsSync(filePath)) {
      const file = await fs.promises.readFile(filePath);
      appendMimeType(filePath, res);
      res.write(file);
      res.end();
    } else {
      res.writeHead(404);
      res.write('File not found');
      res.end();
    }
  }
}).listen(PORT, () => {
  console.log('Listening on port', PORT);
});