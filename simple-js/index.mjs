import { writeFileSync, appendFileSync, existsSync } from 'node:fs';

console.log('HELLO');
console.log('VERSION 4');

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
const filename = 'name.txt';
if (existsSync(filename)) {
  appendFileSync(filename, '\nGeorge Spanos');
} else {
  writeFileSync('name.txt', 'George Spanos');
}

sleep(180_000);