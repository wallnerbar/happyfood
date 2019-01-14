import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../api/recipe';
import {UserProfile} from '../api/profile';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Array<Recipe>;

  constructor(private router: Router, private recipeService: RecipeService) { }

  ngOnInit() {

    this.recipeService.getAll()
      .subscribe((response: any) => {
        this.recipes = response._embedded.recipes;
      });
  }

  deleteRecipe(recipe: Recipe) {

    this.recipeService.delete(recipe)
      .subscribe(() => {
        this.ngOnInit();
      });

  }

}
