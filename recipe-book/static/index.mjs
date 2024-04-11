const button = document.querySelector('section > button');
button.addEventListener('click', () => {
  location.href = '/recipe/create';
});

const recipes = await fetch('/api/recipes', {
  headers: {
    "Content-Type": "application/json",
  },
});
console.log(recipes);
