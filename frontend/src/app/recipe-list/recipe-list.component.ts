import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../api/recipe';
import {Profile} from '../api/profile';
import {Ingredient} from '../api/ingredient';
import {IngredientService} from '../ingredient.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Array<Recipe>;
  showRecipes: Array<Recipe>;

  constructor(private router: Router, private recipeService: RecipeService) {
  }

  ngOnInit() {

    this.recipeService.getAll()
      .subscribe((response: any) => {
        this.recipes = response._embedded.recipes;
        this.showRecipes = this.recipes;
      });
  }

  show(input: string) {
    if (input === 'all') {
      this.showRecipes = this.recipes;
    } else {
      this.showRecipes = this.recipes.filter(recipe => recipe.complexity === input);
    }
  }



  deleteRecipe(recipe: Recipe) {

    this.recipeService.delete(recipe)
      .subscribe(() => {
        this.ngOnInit();
      });

  }

}


