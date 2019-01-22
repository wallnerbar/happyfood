import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Recipe} from '../api/recipe';

@Component({
  selector: 'app-recipe-site',
  templateUrl: './recipe-site.component.html',
  styleUrls: ['./recipe-site.component.scss']
})
export class RecipeSiteComponent implements OnInit {

  recipe: Recipe;
  shouldNavigateToList: boolean;

  constructor(private http: HttpClient, private recipeService: RecipeService,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.recipeService.getById(id)
        .subscribe((response: any) => {
          this.recipe = response;
        });
    }


  }

}
