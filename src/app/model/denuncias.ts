import { DenunciasLugarHecho } from "./lugarHecho";

export class Denuncias {
  idDenuncias: number = 0;
  nameDenuncias: string = '';
  FechaDenunciasHechos: Date = new Date(Date.now());
  FechaDenunciasRegistro: Date = new Date(Date.now());
  FechaDenunciasEmision: Date = new Date(Date.now());
  idLugarHecho: DenunciasLugarHecho = new DenunciasLugarHecho();
}
