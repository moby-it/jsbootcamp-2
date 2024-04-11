import * as fs from 'node:fs';
import * as http from "node:http";
import * as path from "node:path";
import { appendMimeType } from "./mime-type.mjs";
import { getRecipes, saveRecipe } from './recipe.mjs';

const PORT = 8000;

const STATIC_PATH = path.join(process.cwd(), "./static");

http.createServer(async (req, res) => {
  if (req.url.includes('/api')) {
    if (req.url.includes('recipes') && req.method === 'GET') {
      const recipes = getRecipes();
      res.write(JSON.stringify(recipes));
    } else if (req.url.includes('recipe') && req.method === 'POST') {
      const body = await readBody(req);
      saveRecipe(body);
      res.writeHead(201);
    } else {
      res.writeHead(404);
    }
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