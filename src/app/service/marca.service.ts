import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { marca } from '../model/marca';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const base_url=environment.base

@Injectable({
  providedIn: 'root'
})
export class MarcaService {
  private url=`${base_url}/PertenenciaMarca`
  private ListaCambio=new Subject<marca[]>()

  constructor(private http:HttpClient) { }

  List() {
    return this.http.get<marca[]>(this.url);
  }
  Insert(Marca: marca) {
    return this.http.post(this.url, Marca);
  }
  SetList(ListaNueva: marca[]) {
    this.ListaCambio.next(ListaNueva);
  }
  GetList() {
    return this.ListaCambio.asObservable();
  }
  Delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  Update(Marca: marca) {
    return this.http.put(this.url, Marca);
  }
  ListId(id: number) {
    return this.http.get<marca>(`${this.url}/${id}`);
  }
}
