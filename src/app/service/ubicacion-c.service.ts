import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UbicacionC } from '../model/ubicacionC';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class UbicacionCService {
  private url = `${base_url}/UbicacionC`;
  private ListaCambio = new Subject<UbicacionC[]>();
  constructor(private http:HttpClient) { }

  List() {
    return this.http.get<UbicacionC[]>(this.url);
  }
  Insert(ubicacionC: UbicacionC) {
    return this.http.post(this.url, ubicacionC);
  }
  SetList(ListaNueva: UbicacionC[]) {
    this.ListaCambio.next(ListaNueva);
  }
  GetList() {
    return this.ListaCambio.asObservable();
  }
  Delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  Update(ubicacionC: UbicacionC) {
    return this.http.put(this.url, ubicacionC);
  }
}
