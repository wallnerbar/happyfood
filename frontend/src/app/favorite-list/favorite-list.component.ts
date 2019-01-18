import { Component, OnInit } from '@angular/core';
import {Recipe} from '../api/recipe';
import {Router} from '@angular/router';
import {RecipeService} from '../recipe.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss']
})
export class FavoriteListComponent implements OnInit {

  favorites: Array<Recipe>;
  shouldNavigateToList: boolean;
  recipeForm;

  constructor(private router: Router, private recipeService: RecipeService) {
  }

  ngOnInit() {

    this.recipeService.getMyFavorites()
      .subscribe((response: any) => {
        this.favorites = response._embedded.favorites;
      });

    const favorites = this.recipeForm.favoriteRecipe;
    if (favorites === true) {
      this.recipeService.getMyFavorites();
      if (this.shouldNavigateToList) {
        this.navigateToList();
      } else {
        this.router.navigate(['/favorite-list']);
      }
    }
  }

  /*getMyFavorite() {
    const favorite = this.recipeForm.favoriteRecipe;
    if (favorite === true) {
      this.recipeService.getMyFavorites()
        .subscribe((response: any) => {
          alert('it works');
          this.recipeForm.setValue(response);
          if (this.shouldNavigateToList) {
            this.navigateToList();
          } else {
            this.router.navigate(['/ingredient-form', response.id]);
          }
        });
    }

  }*/
  navigateToList() {
    this.router.navigate(['/profile-list']);
  }
}
