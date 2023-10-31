import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Denuncias } from '../model/denuncias';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
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
  }
  GetList() {
    return this.ListaCambio.asObservable();
  }
  Delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  Update(denuncias: Denuncias) {
    return this.http.put(this.url, denuncias);
  }
}
