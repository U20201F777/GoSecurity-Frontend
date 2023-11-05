import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UbicacionP } from '../model/ubicacionP';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class UbicacionPService {
  private url = `${base_url}/UbicacionP`;
  private ListaCambio = new Subject<UbicacionP[]>();
  constructor(private http:HttpClient) { }

  List() {
    return this.http.get<UbicacionP[]>(this.url);
  }
  Insert(ubicacionP: UbicacionP) {
    return this.http.post(this.url, ubicacionP);
  }
  SetList(ListaNueva: UbicacionP[]) {
    this.ListaCambio.next(ListaNueva);
  }
  GetList() {
    return this.ListaCambio.asObservable();
  }
  Delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  Update(ubicacionP: UbicacionP) {
    return this.http.put(this.url, ubicacionP);
  }
}
