import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get('/api/dto/admin/users');
  }

  deleteUser(id: number) {
    return this.http.delete('/api/dto/admin/users/'  + id);
  }
}


