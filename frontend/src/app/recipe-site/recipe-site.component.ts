import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Recipe} from '../api/recipe';
import {Ingredient} from '../api/ingredient';
import {IngredientService} from '../ingredient.service';

@Component({
  selector: 'app-recipe-site',
  templateUrl: './recipe-site.component.html',
  styleUrls: ['./recipe-site.component.scss']
})
export class RecipeSiteComponent implements OnInit {

  recipe: Recipe;
  ingredientsOptions: Array<Ingredient>;
  ingredients: Array<Ingredient> = [];
  shouldNavigateToList: boolean;

  constructor(private http: HttpClient, private recipeService: RecipeService,
              private route: ActivatedRoute, private router: Router, private ingredientService: IngredientService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.recipeService.getById(id)
        .subscribe((response: any) => {
          this.recipe = response;
        });
    }

    this.ingredientService.getAll()
      .subscribe((response: any) => {
        this.ingredientsOptions = response;
        this.filterIngredient();
      });
  }

  filterIngredient() {
    this.recipe.ingredients.forEach(x => {
      this.ingredients.push(this.ingredientsOptions.find(y => x === y.id));
    });
  }

}
