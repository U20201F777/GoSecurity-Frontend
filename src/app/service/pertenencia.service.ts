import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { pertenencia } from '../model/pertenencia';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class PertenenciaService {
  private url = `${base_url}/Pertenencia`;
  private ListaCambio = new Subject<pertenencia[]>();
  constructor(private http: HttpClient) { }
  List() {
    return this.http.get<pertenencia[]>(this.url);
  }
  Insert(Pertenencia: pertenencia) {
    return this.http.post(this.url, Pertenencia);
  }
  SetList(ListaNueva: pertenencia[]) {
    this.ListaCambio.next(ListaNueva);
  }
  GetList() {
    return this.ListaCambio.asObservable();
  }
  Delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  Update(Pertenencia: pertenencia) {
    return this.http.put(this.url, Pertenencia);
  }
}
