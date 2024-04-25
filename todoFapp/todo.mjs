import * as fs from "node:fs";

const todoIndexFile = 'next-todo-index.txt';

export function savetodo(todoJson, id) {
  if (!fs.existsSync('todos')) {
    fs.mkdirSync('todos');
  }
  if (id) {
    fs.writeFileSync(`todos/${id}.json`, todoJson);
  } else {
    const indexStr = fs.readFileSync(todoIndexFile, 'utf-8');
    const index = Number(indexStr);
    fs.writeFileSync(`todos/${index}.json`, todoJson);
    fs.writeFileSync(todoIndexFile, (index + 1).toString());
  }
}

export function gettodos() {
  if (!fs.existsSync('todos')) return [];
  const s = fs.readdirSync('todos');
  const todos = [];
  s.forEach(filename => {
    const id = filename.split('.')[0];
    const todoStr = fs.readFileSync(`todos/${filename}`, 'utf-8');
    const todo = JSON.parse(todoStr);
    const name = todo.todoName;
    todos.push({
      id,
      name
    });
  });
  return todos;
}
export function gettodoById(id) {
  const filepath = `todos/${id}.json`;
  if (fs.existsSync(filepath)) {
    const todoStr = fs.readFileSync(`todos/${id}.json`, 'utf-8');
    return todoStr;
  }
}