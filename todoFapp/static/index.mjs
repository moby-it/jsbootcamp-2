const button = document.querySelector('section > button');
button.addEventListener('click', () => {
  location.href = '/todo/create';
});

const todosResponse = await fetch('/api/todos', {
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * @type {Array<{id:string, name: string}>}
 */
const todos = await todosResponse.json();


todos.forEach(addtodoListItem);

function addtodoListItem(todo) {
  const todoList = document.querySelector('.todo-list');
  const todoLi = document.createElement('li');
  todoLi.addEventListener('click', () => {
    location.href = `/todo/edit?id=${todo.id}`;
  });
  todoLi.innerText = `${todo.id}.${todo.name}`;
  todoList.appendChild(todoLi);
}