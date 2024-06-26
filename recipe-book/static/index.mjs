const button = document.querySelector('section > button');
button.addEventListener('click', () => {
  location.href = '/recipe/create';
});

const recipesResponse = await fetch('/api/recipes', {
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * @type {Array<{id:string, name: string}>}
 */
const recipes = await recipesResponse.json();


recipes.forEach(addRecipeListItem);

function addRecipeListItem(recipe) {
  const recipeList = document.querySelector('.recipe-list');
  const recipeLi = document.createElement('li');
  recipeLi.addEventListener('click', () => {
    location.href = `/recipe/edit?id=${recipe.id}`;
  });
  recipeLi.innerText = `${recipe.id}.${recipe.name}`;
  recipeList.appendChild(recipeLi);
}
