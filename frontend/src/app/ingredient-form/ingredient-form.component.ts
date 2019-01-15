import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IngredientService} from '../ingredient.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.scss']
})
export class IngredientFormComponent implements OnInit {

  ingredientForm;
  shouldNavigateToList: boolean;
  ingredientOptions;

  constructor(private http: HttpClient, private ingredientService: IngredientService,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.ingredientForm = new FormGroup ( {
      'id': new FormControl(),
      'ingredientName': new FormControl(),
      }
    );

    /*const data = this.route.snapshot.data;
    this.ingredientOptions = data.ingredient;*/
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.ingredientService.getById(id)
        .subscribe((response) => {
          this.ingredientForm.setValue(response);
        });
    } else {
      this.ingredientForm.setValue();
    }
  }

  saveIngredient() {
    const ingredient = this.ingredientForm.value;
    if (ingredient.id) {
      this.ingredientService.update(ingredient)
        .subscribe((response) => {
          alert('updated successfully');
          this.ingredientForm.setValue(response);
          if (this.shouldNavigateToList) {
            this.navigateToList();
          }
        });
    } else {
      this.ingredientService.create(ingredient)
        .subscribe((response: any) => {
          alert('created successfully');
          if (this.shouldNavigateToList) {
            this.navigateToList();
          } else {
            this.router.navigate(['/ingredient-form', response.id]);
          }
        });
    }
  }

  navigateToList() {
    if (this.shouldNavigateToList) {
      this.router.navigate(['/ingredient-list']);
    }
  }

  setShouldNavigateToList() {
    this.shouldNavigateToList = true;
  }

}
