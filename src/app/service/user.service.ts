import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Users } from '../model/Users';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = `${base_url}/users`;
  constructor(private http: HttpClient) {}
  insert(user: Users) {
    return this.http.post<Users>(`${this.url}/insert`, user);
  }
  ultimoUser() {
    return this.http.get<Users>(`${this.url}/ultimoUser`);
  }
}
