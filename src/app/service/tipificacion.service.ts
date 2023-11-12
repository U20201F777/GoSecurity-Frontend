import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DenunciasTipificacion } from '../model/tipificacion';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class TipificacionService {
  private url = `${base_url}/denunciastipificacion`
  private listaCambio = new Subject<DenunciasTipificacion[]>();
  constructor(private http: HttpClient) { }

  list() {
    let token = sessionStorage.getItem('token');

    return this.http.get<DenunciasTipificacion[]>(this.url, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  insert(t: DenunciasTipificacion) {
    let token = sessionStorage.getItem('token');

    return this.http.post(this.url, t, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  setList(listaNueva: DenunciasTipificacion[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    let token = sessionStorage.getItem('token');

    return this.http.get<DenunciasTipificacion>(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  update(t: DenunciasTipificacion) {
    let token = sessionStorage.getItem('token');

    return this.http.put(this.url, t, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  delete(id: number) {
    let token = sessionStorage.getItem('token');

    return this.http.delete(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

}