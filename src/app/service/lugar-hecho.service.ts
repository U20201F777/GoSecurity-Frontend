import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LugarHecho } from '../model/lugarHecho';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class LugarHechoService {
  private url = `${base_url}/denunciaslugarhecho`;
  private ListaCambio = new Subject<LugarHecho[]>();
  constructor(private http:HttpClient) { }

  List() {
    return this.http.get<LugarHecho[]>(this.url);
  }
  Insert(lugarHecho: LugarHecho) {
    return this.http.post(this.url, lugarHecho);
  }
  SetList(ListaNueva: LugarHecho[]) {
    this.ListaCambio.next(ListaNueva);
  }
  GetList() {
    return this.ListaCambio.asObservable();
  }
  Delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  Update(lugarHecho: LugarHecho) {
    return this.http.put(this.url, lugarHecho);
  }

}
