import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Policia } from '../model/Policia';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class PoliciaService {
  private url = `${base_url}/policia`;
  private ListaCambio = new Subject<Policia[]>();
  constructor(private http: HttpClient) { }
  List() {
    return this.http.get<Policia[]>(this.url);
  }
  Insert(policia: Policia) {
    return this.http.post(this.url, policia);
  }
  SetList(ListaNueva: Policia[]) {
    this.ListaCambio.next(ListaNueva);
  }
  GetList() {
    return this.ListaCambio.asObservable();
  }
  Update(policia: Policia) {
    return this.http.put(this.url, policia);
  }
  Delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  //buscar por placa y notificacion x ciudadano
}
