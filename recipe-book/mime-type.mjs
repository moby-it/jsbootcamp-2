import * as path from 'node:path';

const MIME_TYPES = {
  default: "application/octet-stream",
  html: "text/html; charset=UTF-8",
  js: "application/javascript",
  mjs: "application/javascript",
  css: "text/css",
  png: "image/png",
  jpg: "image/jpg",
  gif: "image/gif",
  ico: "image/x-icon",
  svg: "image/svg+xml",
};

export function appendMimeType(filename, res) {
  // we convert the substr to lower case because 
  // Firefox does not convert the url to lowercase
  const ext = path.extname(filename).substring(1).toLowerCase();
  res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || MIME_TYPES.default });
}