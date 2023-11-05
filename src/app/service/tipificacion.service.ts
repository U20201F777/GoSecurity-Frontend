import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Tipificacion } from '../model/tipificacion';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class TipificacionService {
  private url = `${base_url}/denunciastipificacion`;
  private ListaCambio = new Subject<Tipificacion[]>();
  constructor(private http:HttpClient) { }

  List() {
    return this.http.get<Tipificacion[]>(this.url);
  }
  Insert(tipificacion: Tipificacion) {
    return this.http.post(this.url, tipificacion);
  }
  SetList(ListaNueva: Tipificacion[]) {
    this.ListaCambio.next(ListaNueva);
  }
  GetList() {
    return this.ListaCambio.asObservable();
  }
  Delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  Update(tipificacion: Tipificacion) {
    return this.http.put(this.url, tipificacion);
  }
}
