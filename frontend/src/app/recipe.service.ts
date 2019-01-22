import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Recipe} from './api/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) {
  }

  getById(id: string) {
    return this.http.get('/api/dto/recipes/' + id);
  }

  create(recipe: Recipe) {
    return this.http.post('/api/dto/recipes', recipe);
  }

  update(recipe: Recipe) {
    return this.http.put('/api/dto/recipes' + recipe.id, recipe);
  }

  getAll() {
    return this.http.get('api/recipes');
  }

  delete(recipe: Recipe) {
    return this.http.delete('/api/recipes/' + recipe.id);
  }

  getMyFavorites() {
    return this.http.get('/api/recipes/favorite-list');
  }
}
