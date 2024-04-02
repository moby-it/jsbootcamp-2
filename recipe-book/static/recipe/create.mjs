const submitButton = document.querySelector('.submit');
const addButton = document.getElementById('add-button');

addButton.addEventListener('click', addIngredient);

function submit() {

  const quantities = getQuantities();
  const ingredientNames = getIngredientNames();
  const ingredients = [];

  quantities.forEach((value, index) => {
    ingredients.push({ quantity: value, ingredientName: ingredientNames[index] });
  });

  const formValue = {
    recipeName: getRecipeName(),
    description: getDescription(),
    ingredients
  };
  // should send call to the backend
  console.log(formValue);
};

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  submit();
});

function getRecipeName() {
  const recipeName = document.querySelector('input[name=recipe-name]');
  return recipeName.value;
}

function getDescription() {
  const description = document.querySelector('textarea[name=description]');
  return description.value;
}

function getIngredientNames() {
  const inputs = document.querySelectorAll('[name=ingredient-name]');
  const ingredients = Array.from(inputs).map(i => i.value);
  return ingredients;
}
function getQuantities() {
  const inputs = document.querySelectorAll('[name=quantity]');
  const quantities = Array.from(inputs).map(i => i.value);
  return quantities;
}

function addIngredient() {
  console.log('should add ingredient');
  const ingredientSection = document.createElement('section');
  ingredientSection.className = 'ingredient';
  const quantitySection = document.createElement('section');
  let label = document.createElement('label');
  label.setAttribute('for', 'quantity');
  label.setAttribute('type', 'number');
  let input = document.createElement('input');
  input.id = 'quantity';
  input.setAttribute('name', 'quantity');
  input.setAttribute('type', 'number');
  quantitySection.appendChild(label);
  quantitySection.appendChild(input);
  ingredientSection.appendChild(quantitySection);

  const ingredientNameSection = document.createElement('section');
  label = document.createElement('label');
  label.setAttribute('for', 'Name');
  label.setAttribute('type', 'text');
  input = document.createElement('input');
  input.id = 'Name';
  input.setAttribute('name', 'ingredient-name');
  input.setAttribute('type', 'text');
  ingredientNameSection.appendChild(label);
  ingredientNameSection.appendChild(input);

  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.classList.add('button', 'button-small', 'button-warn');
  button.textContent = '-';
  ingredientSection.appendChild(ingredientNameSection);
  ingredientSection.appendChild(button);
  const ingredientList = document.querySelector('.ingredient-list');
  ingredientList.appendChild(ingredientSection);
}
function removeIngredient() {
  console.log('should remove ingredient');
}