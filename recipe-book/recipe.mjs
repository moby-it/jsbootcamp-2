import * as fs from "node:fs";

const recipeIndexFile = 'next-recipe-index.txt';

export function saveRecipe(recipeJson) {
  if (!fs.existsSync('recipes')) {
    fs.mkdirSync('recipes');
  }
  const indexStr = fs.readFileSync(recipeIndexFile, 'utf-8');
  const index = Number(indexStr);
  fs.writeFileSync(`recipes/${index}.json`, recipeJson);
  fs.writeFileSync(recipeIndexFile, (index + 1).toString());
}

export function getRecipes() {
  return [];
}