import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Grocery} from './api/grocery';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  constructor(private http: HttpClient) { }

  getAllByUser(id: number) {
    return this.http.get('/api/dto/grocery/' + id);
  }

  delete(id: number) {
    return this.http.delete('/api/groceries/' + id);
  }

  save(grocery: Grocery) {
    return this.http.post('/api/groceries', grocery);
  }
}

