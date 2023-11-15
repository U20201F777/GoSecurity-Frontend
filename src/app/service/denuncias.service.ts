import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
<<<<<<< HEAD:src/app/service/ciudadano.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ciudadano } from '../model/Ciudadano';
import { Subject, Observable } from 'rxjs';
=======
import { Denuncias } from '../model/denuncias';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
>>>>>>> Angelo:src/app/service/denuncias.service.ts

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD:src/app/service/ciudadano.service.ts
export class CiudadanoService {
  private url = `${base_url}/ciudadano`;
  private listaCambio = new Subject<Ciudadano[]>();
  constructor(private http: HttpClient) { }
  list() {
    let token = sessionStorage.getItem('token');

    return this.http.get<Ciudadano[]>(this.url, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  insert(c: Ciudadano) {
    let token = sessionStorage.getItem('token');

    return this.http.post(this.url, c, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  setList(listaNueva: Ciudadano[]) {
    this.listaCambio.next(listaNueva);
=======
export class DenunciasService {
  private url = `${base_url}/denuncias`;
  private ListaCambio = new Subject<Denuncias[]>();
  constructor(private http: HttpClient) { }
  List() {
    return this.http.get<Denuncias[]>(this.url);
  }
  Insert(denuncias: Denuncias) {
    return this.http.post(this.url, denuncias);
  }
  SetList(ListaNueva: Denuncias[]) {
    this.ListaCambio.next(ListaNueva);
>>>>>>> Angelo:src/app/service/denuncias.service.ts
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    let token = sessionStorage.getItem('token');

    return this.http.get<Ciudadano>(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  update(c: Ciudadano) {
    let token = sessionStorage.getItem('token');

    return this.http.put(this.url, c, {
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
  //falta
  buscar(fecha: string): Observable<Ciudadano[]> {
    let token = sessionStorage.getItem('token');

    return this.http.post<Ciudadano[]>(
      `${this.url}/buscar`,
      { fecha: fecha },
      {
        headers: new HttpHeaders()
          .set('Authorization', `Bearer ${token}`)
          .set('Content-Type', 'application/json'),
      }
    );
  }
  Update(denuncias: Denuncias) {
    return this.http.put(this.url, denuncias);
  }
}
