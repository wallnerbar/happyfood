export interface Recipe {
  id?: number;
  title: string;
  recipeDescription: string;
  complexity: string;
  cookingTime: string;
  category: string;
  unit: number;
  amount: string;
  favoriteRecipe: boolean;
}
