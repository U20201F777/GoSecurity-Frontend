import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { modelo } from '../model/modelo';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const base_url=environment.base

@Injectable({
  providedIn: 'root'
})
export class ModeloService {
  private url=`${base_url}/PertenenciaModelo`
  private ListaCambio=new Subject<modelo[]>()

  constructor(private http:HttpClient) { }

  List() {
    return this.http.get<modelo[]>(this.url);
  }
  Insert(Modelo: modelo) {
    return this.http.post(this.url, Modelo);
  }
  SetList(ListaNueva: modelo[]) {
    this.ListaCambio.next(ListaNueva);
  }
  GetList() {
    return this.ListaCambio.asObservable();
  }
  Delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  Update(Modelo: modelo) {
    return this.http.put(this.url, Modelo);
  }
  ListId(id: number) {
    return this.http.get<modelo>(`${this.url}/${id}`);
  }
}
