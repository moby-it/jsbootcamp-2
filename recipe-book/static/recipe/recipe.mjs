const quantityTypeOptions = ["pcs", "gr", "spoon"];

export function addIngredient(event, ingredient) {
  const ingredientSection = document.createElement('section');
  ingredientSection.className = 'ingredient';

  let input = document.createElement('input');
  input.id = 'quantity';
  input.setAttribute('name', 'quantity');
  input.setAttribute('type', 'number');
  input.style.flex = "3";
  if (ingredient) input.value = ingredient.quantity;
  ingredientSection.appendChild(input);

  input = document.createElement('select');
  input.setAttribute('name', 'quantity-type');
  input.style.flex = 1;
  quantityTypeOptions.forEach(o => {
    const option = document.createElement('option');
    option.setAttribute('value', o);
    option.textContent = o;
    input.appendChild(option);
  });
  if (ingredient) input.value = ingredient.type;
  ingredientSection.appendChild(input);

  input = document.createElement('input');
  input.id = 'Name';
  input.setAttribute('name', 'ingredient-name');
  input.setAttribute('type', 'text');
  input.style.flex = "3";
  if (ingredient) input.value = ingredient.ingredientName;
  ingredientSection.appendChild(input);

  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.classList.add('button', 'button-small', 'button-warn');
  button.textContent = '-';
  button.addEventListener('click', removeIngredient);
  ingredientSection.appendChild(button);
  const ingredientList = document.querySelector('.ingredients>section');
  ingredientList.appendChild(ingredientSection);
}

export function extractRecipeData() {
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
  return formValue;
}
export function removeIngredient(event) {
  const ingredientList = document.querySelector('.ingredients>section');
  ingredientList.removeChild(event.target.parentNode);
}
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