import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Recipe} from './api/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) {

    /*

  getAll() {
    return this.http.get('api/profiles');
  }

  delete(profile) {
    return this.http.delete('/api/profiles/' + profile.id);
  }
     */
  }

  getById(id: string) {
    return this.http.get('/api/dto/recipe/' + id);
  }

  create(recipe: Recipe) {
    return this.http.post('/api/dto/recipe', recipe);
  }
  
  update(recipe: Recipe) {
    return this.http.put('/api/dto/recipe' + recipe.id, recipe);
  }
}
