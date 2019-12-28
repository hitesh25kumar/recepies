import {categories, recipes, ingredients} from './data';

export function getCategoryName(categoryId) {
  let name;
  categories.map(data => {
    if (data.id === categoryId) {
      name = data.name;
    }
  });
  return name;
}

export function getAllIngredients(idArray) {
  const ingredientsArray = [];
  idArray.map(index => {
    ingredients.map(data => {
      if (data.ingredientId === index[0]) {
        ingredientsArray.push([data, index[1]]);
      }
    });
  });
  return ingredientsArray;
}
