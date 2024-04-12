import * as fs from "node:fs";

const recipeIndexFile = 'next-recipe-index.txt';

export function saveRecipe(recipeJson, id) {
  if (!fs.existsSync('recipes')) {
    fs.mkdirSync('recipes');
  }
  if (id) {
    fs.writeFileSync(`recipes/${id}.json`, recipeJson);
  } else {
    const indexStr = fs.readFileSync(recipeIndexFile, 'utf-8');
    const index = Number(indexStr);
    fs.writeFileSync(`recipes/${index}.json`, recipeJson);
    fs.writeFileSync(recipeIndexFile, (index + 1).toString());
  }
}

export function getRecipes() {
  const s = fs.readdirSync('recipes');
  const recipes = [];
  s.forEach(filename => {
    const id = filename.split('.')[0];
    const recipeStr = fs.readFileSync(`recipes/${filename}`, 'utf-8');
    const recipe = JSON.parse(recipeStr);
    const name = recipe.recipeName;
    recipes.push({
      id,
      name
    });
  });
  return recipes;
}
export function getRecipeById(id) {
  const filepath = `recipes/${id}.json`;
  if (fs.existsSync(filepath)) {
    const recipeStr = fs.readFileSync(`recipes/${id}.json`, 'utf-8');
    return recipeStr;
  }
}