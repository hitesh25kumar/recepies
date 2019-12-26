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
