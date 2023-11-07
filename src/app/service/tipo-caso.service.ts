import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TipoCaso } from '../model/TipoCaso';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

const base_url=environment.base

@Injectable({
  providedIn: 'root'
})
export class TipoCasoService {
  private url=`${base_url}/TipoCasos`
  private listaCambio=new Subject<TipoCaso[]>()

  constructor(private http:HttpClient) { }

  list(){
    return this.http.get<TipoCaso[]>(this.url);
  }
  insert(tp:TipoCaso){
    return this.http.post(this.url,tp);
  }
  setList(listaNueva: TipoCaso[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<TipoCaso>(`${this.url}/${id}`);
  }
  update(tc:TipoCaso) {
    return this.http.put(this.url, tc);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
