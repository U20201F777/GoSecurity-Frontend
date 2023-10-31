import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comisaria } from '../model/comisaria';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class ComisariaService {
  private url = `${base_url}/Comisaria`;
  private ListaCambio = new Subject<Comisaria[]>();
  constructor(private http: HttpClient) { }
  List() {
    return this.http.get<Comisaria[]>(this.url);
  }
  Insert(comisaria: Comisaria) {
    return this.http.post(this.url, comisaria);
  }
  SetList(ListaNueva: Comisaria[]) {
    this.ListaCambio.next(ListaNueva);
  }
  GetList() {
    return this.ListaCambio.asObservable();
  }
  Delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
