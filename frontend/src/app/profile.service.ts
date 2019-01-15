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

  getById(id: string) {
    return this.http.get('/api/dto/profiles/' + id);
  }

  getAll() {
    return this.http.get('api/profiles');
  }

  delete(profile) {
    return this.http.delete('/api/profiles/' + profile.id);
  }

  update(profile: Profile) {
    return this.http.put('/api/dto/profiles' + profile.id, profile);
  }

  create(profile: Profile) {
    return this.http.post('/api/dto/profiles', profile);
  }
}
