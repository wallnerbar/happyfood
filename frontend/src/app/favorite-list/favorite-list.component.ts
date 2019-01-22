import { Component, OnInit } from '@angular/core';
import {Recipe} from '../api/recipe';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipeService} from '../recipe.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss']
})
export class FavoriteListComponent implements OnInit {

  favorite: Array<Recipe>;
  shouldNavigateToList: boolean;

  constructor(private router: Router, private recipeService: RecipeService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.recipeService.getMyFavorites()
      .subscribe((response: any) => {
        this.favorite = response;
      });
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
