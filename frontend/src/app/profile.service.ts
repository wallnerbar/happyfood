import { Injectable } from '@angular/core';
import { UserProfile} from './api/profile';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get('/api/profiles').pipe(
      map((response: any) => {
        return response._embedded.profiles;
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
