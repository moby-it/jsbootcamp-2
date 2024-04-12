import { addIngredient, extractRecipeData } from './recipe.mjs';

const submitButton = document.querySelector('.submit');
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  submit();
});

const addButton = document.getElementById('add-button');
addButton.addEventListener('click', addIngredient);

function submit() {
  const formValue = extractRecipeData();
  postRecipeData(formValue);
};


async function postRecipeData(data) {
  try {
    const response = await fetch("/api/recipe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log("Success:", await response.text());
    location.href = '/';
  } catch (error) {
    console.error("Error:", error);
  }
}
