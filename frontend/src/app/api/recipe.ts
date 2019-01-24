export interface Recipe {
  id?: number;
  title: string;
  recipeDescription: string;
  complexity: string;
  cookingTime: string;
  category: string;
  favoriteRecipe: boolean;
  ingredients: Array<any>;
}
