import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LugarHecho } from '../model/lugarHecho';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class LugarHechoService {

  private url = `${base_url}/denunciaslugarhecho`;
  private ListaCambio = new Subject<LugarHecho[]>();
  constructor(private http: HttpClient) { }

  List() {
    let token = sessionStorage.getItem('token');

    return this.http.get<LugarHecho[]>(this.url, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  Insert(lugarHecho: LugarHecho) {
    let token = sessionStorage.getItem('token');

    return this.http.post(this.url, lugarHecho, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  ListId(id: number) {
    let token = sessionStorage.getItem('token');

    return this.http.get<LugarHecho>(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  SetList(ListaNueva: LugarHecho[]) {
    this.ListaCambio.next(ListaNueva);
  }
  GetList() {
    return this.ListaCambio.asObservable();
  }
  Update(lugarHecho: LugarHecho) {
    let token = sessionStorage.getItem('token');

    return this.http.put(this.url, lugarHecho, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  Delete(id: number) {
    let token = sessionStorage.getItem('token');

    return this.http.delete(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

}
