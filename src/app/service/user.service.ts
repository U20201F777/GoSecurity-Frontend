import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/User';

const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = `${base_url}/users`;

  constructor(private http: HttpClient) {}

  Insert(user: Usuario) {
    return this.http.post<Usuario>(`${this.url}/insert`, user);
  }

  List() {
    return this.http.get<Usuario>(`${this.url}/list`);
  }
}
