import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Ciudadano } from '../model/Ciudadano';
import { Subject } from 'rxjs';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class CiudadanoService {
  private url = `${base_url}/ciudadano`;
  private ListaCambio = new Subject<Ciudadano[]>();
  constructor(private http: HttpClient) { }
  List() {
    return this.http.get<Ciudadano[]>(this.url);
  }
  Insert(ciudadano: Ciudadano) {
    return this.http.post(this.url, ciudadano);
  }
  SetList(ListaNueva: Ciudadano[]) {
    this.ListaCambio.next(ListaNueva);
  }
  GetList() {
    return this.ListaCambio.asObservable();
  }
  Delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
