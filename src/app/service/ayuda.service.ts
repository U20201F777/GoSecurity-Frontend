import { Injectable } from '@angular/core';
import { SolicitarAyuda } from '../model/Ayuda';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class AyudaService {
  private url = `${base_url}/Ayuda`;
  private ListaCambio = new Subject<SolicitarAyuda[]>();
  constructor(private http: HttpClient) { }
  List() {
    let token = sessionStorage.getItem('token');

    return this.http.get<SolicitarAyuda[]>(this.url, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  Insert(ayuda: SolicitarAyuda) {
    let token = sessionStorage.getItem('token');

    return this.http.post(this.url, ayuda, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  listId(id: number) {
    let token = sessionStorage.getItem('token');

    return this.http.get<SolicitarAyuda>(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  SetList(ListaNueva: SolicitarAyuda[]) {
    this.ListaCambio.next(ListaNueva);
  }
  GetList() {
    return this.ListaCambio.asObservable();
  }
  Update(ayuda: SolicitarAyuda) {
    let token = sessionStorage.getItem('token');

    return this.http.put(this.url, ayuda, {
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
