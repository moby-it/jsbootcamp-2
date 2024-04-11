// fetch the recipe from the backend

import { addIngredient } from './create.mjs';

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
  addIngredient();

  console.log('should patch', ingredient);
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