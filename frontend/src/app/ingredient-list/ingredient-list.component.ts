import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../api/ingredient';
import {Router} from '@angular/router';
import {IngredientService} from '../ingredient.service';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss']
})
export class IngredientListComponent implements OnInit {

  ingredients: Array<Ingredient>;

  constructor(private router: Router, private ingredientService: IngredientService) {
  }

  ngOnInit() {

    this.ingredientService.getAll()
      .subscribe((response: any) => {
        this.ingredients = response._embedded.ingredients;
      });
  }

  deleteIngredient(ingredient: Ingredient) {
    this.ingredientService.delete(ingredient)
      .subscribe(() => {
        this.ngOnInit();
      });
  }

}
