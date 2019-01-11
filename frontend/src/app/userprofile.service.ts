import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {UserProfile} from './api/profile';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

  constructor(private http: HttpClient) {
  }

  getById(id: string) {
    return this.http.get('/api/dto/profiles/' + id).pipe(map((res: any) => {
      return res;
    }));
  }

  getAll() {
    return this.http.get('/api/profiles').pipe(
      map((response: any) => {
        return response._embedded.actors;
      })
    );
  }

  delete(profile) {
    return this.http.delete('/api/profiles/' + profile.id);
  }

  update(profile: UserProfile) {
    return this.http.put('/api/dto/profiles/' + profile.id, profile);
  }

  create(profile: UserProfile) {
    return this.http.post('/api/dto/profiles', profile);
  }
}
