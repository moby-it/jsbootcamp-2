// fetch the recipe from the backend

import { addIngredient, extractRecipeData } from './recipe.mjs';

const addButton = document.getElementById('add-button');
addButton.addEventListener('click', addIngredient);

const submitButton = document.querySelector('.submit');
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  submit();
});

const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get('id');

const recipesResponse = await fetch(`/api/recipe/${id}`,
  {
    headers: {
      'Content-Type': 'application/json'
    }
  });

if (!recipesResponse.ok) location.href = '/';

const recipe = await recipesResponse.json();

patchRecipeName(recipe.recipeName);
patchDescription(recipe.description);
recipe.ingredients.forEach(patchIngredient);

function patchIngredient(ingredient) {
  addIngredient(null, ingredient);
}
function patchRecipeName(recipeName) {
  console.log('should patch ', recipeName);
  const nameInput = document.getElementById('name');
  nameInput.value = recipeName;
}
function patchDescription(description) {
  const descriptionInput = document.getElementById('description');
  descriptionInput.value = description;
}
async function submit() {
  const formValue = extractRecipeData();
  try {
    await fetch(`/api/recipe/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValue),
    });
    location.href = '/';
  } catch (error) {
    console.error("Error:", error);
  }
}