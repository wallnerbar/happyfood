import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Profile} from './api/profile';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) {
  }

  getById(id: number) {
    return this.http.get('/api/dto/users/' + id);
  }

  update(profile: Profile) {
    return this.http.put('/api/dto/users/' + profile.id, profile);
  }
  getAll() {

  }
}
