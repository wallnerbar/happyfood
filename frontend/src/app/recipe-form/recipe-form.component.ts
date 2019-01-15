import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {

  recipeForm;
  shouldNavigateToList: boolean;
  recipeOptions;

  constructor(private http: HttpClient, private recipeService: RecipeService,
              private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {

    this.recipeForm = new FormGroup( {
      'id': new FormControl(),
      'title': new FormControl('', [Validators.required]),
      'recipeDescription': new FormControl(),
      'complexity': new FormControl(),
      'cookingTime': new FormControl(),
      'category': new FormControl(),
      'amount': new FormControl(),
    });

    const data = this.route.snapshot.data;
    this.recipeOptions = data.recipe;
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.recipeService.getById(id)
        .subscribe((response) => {
          this.recipeForm.setValue(response);
        });
    } else {
      this.recipeForm.setValue();
    }
  }

  saveRecipe() {
    const recipe = this.recipeForm.value;
    if (recipe.id) {
      this.recipeService.update(recipe)
        .subscribe((response) => {
          alert('updated successfully');
          this.recipeForm.setValue(response);
          if (this.shouldNavigateToList) {
            this.navigateToList();
          }
        });
    } else {
      this.recipeService.create(recipe)
        .subscribe((response: any) => {
          alert('created successfully');
          if (this.shouldNavigateToList) {
            this.navigateToList();
          } else {
            this.router.navigate(['/recipe-form', response.id]);
          }
        });
    }
  }

  navigateToList() {
    if (this.shouldNavigateToList) {
      this.router.navigate(['/recipe-list']);
    }
  }

  setShouldNavigateToList() {
    this.shouldNavigateToList = true;
  }

}
