import * as fs from 'node:fs';
import * as http from "node:http";
import * as path from "node:path";
import { appendMimeType } from "./mime-type.mjs";
import { gettodos, savetodo, gettodoById } from './todo.mjs';

const PORT = 7000;

const STATIC_PATH = path.join(process.cwd(), "./static");

http.createServer(async (req, res) => {
  if (req.url.includes('/api')) {
    if (req.url.includes('todos') && req.method === 'GET') {
      const todos = gettodos();
      res.write(JSON.stringify(todos));
    } else if (req.url.includes('todo') && req.method === 'POST') {
      const body = await readBody(req);
      savetodo(body);
      res.writeHead(201);
    } else if (req.url.includes('todo') && req.method === 'GET') {
      const splitStr = req.url.split('/');
      const id = splitStr[splitStr.length - 1];
      const todo = gettodoById(id);

      if (!todo) res.writeHead(404);
      else res.write(todo);

    } else if (req.url.includes('todo') && req.method === 'PUT') {
      const splitStr = req.url.split('/');
      const id = splitStr[splitStr.length - 1];
      const body = await readBody(req);
      savetodo(body, id);
      res.writeHead(204);
    } else {
      res.writeHead(404);
    }
    res.end();
  } else {
    const filepath = extractFilepath(req.url);
    if (fs.existsSync(filepath)) {
      const file = await fs.promises.readFile(filepath);
      appendMimeType(filepath, res);
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

/**
 * 
 * @param {http.IncomingMessage} req 
 * @returns {Promise<string>}
 */

async function readBody(req) {
  return new Promise((resolve, reject) => {
    try {
      const body = [];
      req.on('data', (chunk) => {
        body.push(chunk);
      });
      req.on('end', () => {
        const value = Buffer.concat(body).toString();
        resolve(value);
      });
    } catch (e) {
      reject(e);
    }
  });
}

function extractFilepath(url) {
  let filePath = url.split('?')[0];
  filePath = filePath === '/' ? '/index.html' : filePath.toLowerCase();

  if (!filePath.includes('.')) {
    filePath += '.html';
  }
  filePath = path.join(STATIC_PATH, filePath);
  return filePath;
}

function extractQueryParams(url) {

}