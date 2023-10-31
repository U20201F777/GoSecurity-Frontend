import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EstadoUbicacion } from '../model/estadoUbicacion';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class EstadoUbicacionService {
  private url = `${base_url}/EstadoUbicacion`;
  private ListaCambio = new Subject<EstadoUbicacion[]>();
  constructor(private http: HttpClient) { }
  
  Insert(estadoUbicacion: EstadoUbicacion) {
    return this.http.post(this.url, estadoUbicacion);
  }
  SetList(ListaNueva: EstadoUbicacion[]) {
    this.ListaCambio.next(ListaNueva);
  }
  GetList() {
    return this.ListaCambio.asObservable();
  }
  Delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
