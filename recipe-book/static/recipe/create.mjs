const submitButton = document.querySelector('.submit');
const addButton = document.getElementById('add-button');
const removeButtons = document.querySelectorAll('.remove-button');

const quantityTypeOptions = ["pcs", "gr", "spoon"];

removeButtons.forEach(button => {
  button.addEventListener('click', removeIngredient);
});

addButton.addEventListener('click', addIngredient);

function submit() {

  const quantities = getQuantities();
  const ingredientNames = getIngredientNames();
  const quantityTypes = getQuantityTypes();
  const ingredients = [];

  quantities.forEach((value, index) => {
    ingredients.push({ quantity: value, type: quantityTypes[index], ingredientName: ingredientNames[index] });
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
function getQuantityTypes() {
  const inputs = document.querySelectorAll('[name=quantity-type]');
  const quantityTypes = Array.from(inputs).map(i => i.value);
  return quantityTypes;
}

function addIngredient() {
  console.log('should add ingredient');
  const ingredientSection = document.createElement('section');
  ingredientSection.className = 'ingredient';

  const quantitySection = document.createElement('section');

  let input = document.createElement('input');
  input.id = 'quantity';
  input.setAttribute('name', 'quantity');
  input.setAttribute('type', 'number');
  quantitySection.appendChild(input);
  ingredientSection.appendChild(quantitySection);

  const quantityTypeSection = document.createElement('section');
  input = document.createElement('select');
  input.setAttribute('name', 'quantity-type');
  quantityTypeOptions.forEach(o => {
    const option = document.createElement('option');
    option.setAttribute('value', o);
    option.textContent = o;
    input.appendChild(option);
  });
  quantityTypeSection.appendChild(input);
  ingredientSection.appendChild(quantityTypeSection);

  const ingredientNameSection = document.createElement('section');

  input = document.createElement('input');
  input.id = 'Name';
  input.setAttribute('name', 'ingredient-name');
  input.setAttribute('type', 'text');
  ingredientNameSection.appendChild(input);

  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.classList.add('button', 'button-small', 'button-warn');
  button.textContent = '-';
  button.addEventListener('click', removeIngredient);
  ingredientSection.appendChild(ingredientNameSection);
  ingredientSection.appendChild(button);
  const ingredientList = document.querySelector('.ingredient-list');
  ingredientList.appendChild(ingredientSection);
}
function removeIngredient(event) {
  const ingredientList = document.querySelector('.ingredient-list');
  ingredientList.removeChild(event.target.parentNode);
}