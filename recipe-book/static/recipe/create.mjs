const submitButton = document.querySelector('.submit');

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
  console.log(formValue);
}

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