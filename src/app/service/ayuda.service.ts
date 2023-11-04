import { Injectable } from '@angular/core';
import { SolicitarAyuda } from '../model/Ayuda';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class AyudaService {
  private url = `${base_url}/Ayuda`;
  private ListaCambio = new Subject<SolicitarAyuda[]>();
  constructor(private http: HttpClient) { }
  List() {
    return this.http.get<SolicitarAyuda[]>(this.url);
  }
  Insert(ayuda: SolicitarAyuda) {
    return this.http.post(this.url, ayuda);
  }
  SetList(ListaNueva: SolicitarAyuda[]) {
    this.ListaCambio.next(ListaNueva);
  }
  GetList() {
    return this.ListaCambio.asObservable();
  }
  Update(ayuda: SolicitarAyuda) {
    return this.http.put(this.url, ayuda);
  }
  Delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
