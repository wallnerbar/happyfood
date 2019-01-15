import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ingredient} from './api/ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(private http: HttpClient) {
  }

  getById(id: string) {
    return this.http.get('/api/dto/ingredients/' + id);
  }

  create(ingredient: Ingredient) {
    return this.http.post('/api/dto/ingredients', ingredient);
  }

  update(ingredient: Ingredient) {
    return this.http.put('/api/dto/ingredients' + ingredient.id, ingredient);
  }

  getAll() {
    return this.http.get('/api/ingredients');
  }

  delete(ingredient: Ingredient) {
    return this.http.delete('/api/ingredients/' + ingredient.id);
  }
}
